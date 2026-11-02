import * as THREE from 'three';

// Blockbound Studio — a small 3D modeling sandbox.
// Build anything out of primitives, transform it with axis/axle controls, start from
// templates (console, controller, car, house, room), and save/export the result.

const STORE_KEY = 'java-menu-studio-v1';
const PALETTE = ['#63e6d5', '#74b9ff', '#b58cff', '#ff9ff3', '#ff5c8a', '#ffc93c', '#9be15d', '#ff9f7a', '#dfe9ff', '#8a6a4a', '#2b3a55', '#101a2c'];
const MATERIALS = {
  matte: { roughness: 0.85, metalness: 0.05, emissiveIntensity: 0 },
  gloss: { roughness: 0.28, metalness: 0.18, emissiveIntensity: 0.08 },
  metal: { roughness: 0.32, metalness: 0.92, emissiveIntensity: 0.04 },
};

const shapeNames = {
  box: 'Box', sphere: 'Sphere', cylinder: 'Cylinder', cone: 'Cone', torus: 'Torus', wedge: 'Wedge',
};

function round(value, step = 0.05) {
  return Math.round(value / step) * step;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function makeGeometry(type) {
  switch (type) {
    case 'sphere': return new THREE.SphereGeometry(0.5, 24, 16);
    case 'cylinder': return new THREE.CylinderGeometry(0.5, 0.5, 1, 24);
    case 'cone': return new THREE.ConeGeometry(0.5, 1, 24);
    case 'torus': return new THREE.TorusGeometry(0.5, 0.16, 12, 28);
    case 'wedge': return makeWedgeGeometry();
    default: return new THREE.BoxGeometry(1, 1, 1);
  }
}

function makeWedgeGeometry() {
  const geometry = new THREE.BufferGeometry();
  // Triangular prism: ridge along X, base in Z, height in Y.
  const positions = new Float32Array([
    -0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 1, 0,
    0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 1, 0,
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setIndex([
    0, 1, 2, 3, 5, 4,
    0, 2, 5, 0, 5, 3,
    2, 1, 4, 2, 4, 5,
    0, 3, 4, 0, 4, 1,
  ]);
  geometry.computeVertexNormals();
  return geometry;
}

export function createStudio({ canvas, renderer, onExit }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1220);
  scene.fog = new THREE.Fog(0x0a1220, 42, 95);

  const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 300);
  const target = new THREE.Vector3(0, 2, 0);
  let yaw = 0.72;
  let pitch = 0.37;
  let distance = 17;

  scene.add(new THREE.HemisphereLight(0xc6dcff, 0x14202c, 1.7));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
  keyLight.position.set(9, 16, 12);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x63e6d5, 1.1);
  rimLight.position.set(-12, 8, -10);
  scene.add(rimLight);
  const warmLight = new THREE.PointLight(0xffb070, 14, 30, 2);
  warmLight.position.set(-6, 5, 8);
  scene.add(warmLight);

  // Floor and grid.
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.MeshStandardMaterial({ color: 0x0d1926, roughness: 0.96, metalness: 0.02 }),
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);
  const grid = new THREE.GridHelper(60, 60, 0x2c6d82, 0x142c3d);
  grid.position.y = 0.001;
  scene.add(grid);
  const axesHelper = new THREE.AxesHelper(2.6);
  axesHelper.position.y = 0.02;
  scene.add(axesHelper);

  const objectRoot = new THREE.Group();
  scene.add(objectRoot);
  const selectionHelper = new THREE.BoxHelper(new THREE.Object3D(), 0x63e6d5);
  selectionHelper.visible = false;
  scene.add(selectionHelper);
  const gizmo = new THREE.Group();
  gizmo.visible = false;
  scene.add(gizmo);
  const gizmoArrows = [
    new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(), 1.5, 0xff5c8a, 0.25, 0.15),
    new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(), 1.5, 0x9be15d, 0.25, 0.15),
    new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(), 1.5, 0x74b9ff, 0.25, 0.15),
  ];
  for (const arrow of gizmoArrows) gizmo.add(arrow);

  let objects = [];
  let nextId = 1;
  let selectedId = null;
  let mode = 'move';
  let history = [[]];
  let historyIndex = 0;
  let active = false;
  let snap = true;
  let saveTimer = 0;
  let dirty = false;
  let orbiting = null;
  let lastSaveText = 'not saved yet';

  const meshes = new Map();
  const viewport = document.querySelector('#studio-viewport');
  const element = {
    screen: document.querySelector('#studio-screen'),
    selection: document.querySelector('#studio-selection'),
    selectionName: document.querySelector('#studio-selection-name'),
    objectList: document.querySelector('#studio-object-list'),
    axes: document.querySelector('#studio-axes'),
    color: document.querySelector('#studio-color'),
    palette: document.querySelector('#studio-palette'),
    material: document.querySelector('#studio-material'),
    status: document.querySelector('#studio-status'),
    hint: document.querySelector('#studio-hint'),
    toast: document.querySelector('#studio-toast'),
    designs: document.querySelector('#studio-design-list'),
    designName: document.querySelector('#studio-design-name'),
    empty: document.querySelector('#studio-empty'),
    viewport: document.querySelector('#studio-viewport'),
    objectCount: document.querySelector('#studio-object-count'),
  };

  function showToast(message) {
    if (!element.toast) return;
    element.toast.textContent = message;
    element.toast.classList.add('show');
    setTimeout(() => element.toast?.classList.remove('show'), 1800);
  }

  function setStatus() {
    const count = objects.length;
    if (element.objectCount) element.objectCount.textContent = `${count} object${count === 1 ? '' : 's'}`;
    if (element.status) element.status.textContent = `${count} object${count === 1 ? '' : 's'} · ${lastSaveText}`;
    if (element.empty) element.empty.hidden = count > 0;
  }

  function serialize(object) {
    return {
      id: object.id, type: object.type, name: object.name,
      position: [...object.position], rotation: [...object.rotation], scale: [...object.scale],
      color: object.color, material: object.material,
    };
  }

  function snapshot() {
    return objects.map(serialize);
  }

  function record() {
    const snap = snapshot();
    history = history.slice(0, historyIndex + 1);
    history.push(snap);
    if (history.length > 60) history.shift();
    historyIndex = history.length - 1;
    dirty = true;
    updateStatus();
  }

  function updateStatus() {
    if (element.objectCount) element.objectCount.textContent = `${objects.length} object${objects.length === 1 ? '' : 's'}`;
    if (element.status) element.status.textContent = `${objects.length} object${objects.length === 1 ? '' : 's'} · ${lastSaveText}`;
    if (element.empty) element.empty.hidden = objects.length > 0;
  }

  function objectById(id) {
    return objects.find((object) => object.id === id) || null;
  }

  function selectedObject() {
    return objectById(selectedId);
  }

  function createMesh(object) {
    const geometry = makeGeometry(object.type);
    const settings = MATERIALS[object.material] || MATERIALS.matte;
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(object.color),
      roughness: settings.roughness,
      metalness: settings.metalness,
      emissive: new THREE.Color(object.color),
      emissiveIntensity: settings.emissiveIntensity,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.fromArray(object.position);
    mesh.rotation.fromArray(object.rotation);
    mesh.scale.fromArray(object.scale);
    mesh.userData.studioId = object.id;
    meshes.set(object.id, mesh);
    objectRoot.add(mesh);
    return mesh;
  }

  function rebuildMeshes() {
    for (const [, mesh] of meshes) {
      objectRoot.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
    meshes.clear();
    for (const object of objects) createMesh(object);
    updateSelectionHelpers();
    updateObjectList();
  }

  function setObjects(next, { keepSelection = true } = {}) {
    objects = next;
    nextId = objects.reduce((max, object) => Math.max(max, object.id), 0) + 1;
    if (keepSelection && !objectById(selectedId)) selectedId = null;
    rebuildMeshes();
    if (selectedId) select(selectedId);
    updateStatus();
  }

  function addObject(type, overrides = {}) {
    record();
    const id = nextId++;
    const object = {
      id, type,
      name: overrides.name || `${shapeNames[type] || 'Shape'} ${id}`,
      position: overrides.position || [0, type === 'box' ? 0.5 : 0.5, 0],
      rotation: overrides.rotation || [0, 0, 0],
      scale: overrides.scale || [1, 1, 1],
      color: overrides.color || PALETTE[Math.floor(Math.random() * PALETTE.length)],
      material: overrides.material || 'matte',
    };
    objects.push(object);
    createMesh(object);
    selectedId = id;
    updateSelectionHelpers();
    select(id);
    updateObjectList();
    updateStatus();
    scheduleSave();
    showToast(`${object.name} added`);
    return object;
  }

  function deleteSelected() {
    const object = selectedObject();
    if (!object) return;
    record();
    objectRoot.remove(meshes.get(object.id));
    meshes.get(object.id)?.geometry.dispose();
    meshes.get(object.id)?.material.dispose();
    meshes.delete(object.id);
    objects = objects.filter((item) => item.id !== object.id);
    selectedId = null;
    updateSelectionHelpers();
    updateObjectList();
    updateStatus();
    scheduleSave();
    showToast('Object deleted');
  }

  function duplicateSelected() {
    const object = selectedObject();
    if (!object) return;
    record();
    const copy = {
      ...JSON.parse(JSON.stringify(object)),
      id: nextId++,
      name: `${object.name} copy`,
      position: [object.position[0] + 1.4, object.position[1], object.position[2] + 1.0],
    };
    objects.push(copy);
    createMesh(copy);
    selectedId = copy.id;
    updateSelectionHelpers();
    select(copy.id);
    updateObjectList();
    updateStatus();
    scheduleSave();
    showToast('Object duplicated');
  }

  function updateMesh(object) {
    const mesh = meshes.get(object.id);
    if (!mesh) return;
    mesh.position.fromArray(object.position);
    mesh.rotation.fromArray(object.rotation);
    mesh.scale.fromArray(object.scale);
    mesh.material.color.set(object.color);
    mesh.material.emissive.set(object.color);
    const settings = MATERIALS[object.material] || MATERIALS.matte;
    mesh.material.roughness = settings.roughness;
    mesh.material.metalness = settings.metalness;
    mesh.material.emissiveIntensity = settings.emissiveIntensity;
  }

  function updateSelectionHelpers() {
    const object = selectedObject();
    const mesh = object ? meshes.get(object.id) : null;
    if (!mesh) {
      selectionHelper.visible = false;
      gizmo.visible = false;
      axesHelper.visible = objects.length === 0;
      return;
    }
    scene.updateMatrixWorld(true);
    axesHelper.visible = objects.length === 0;
    selectionHelper.visible = true;
    selectionHelper.setFromObject(mesh);
    const box = new THREE.Box3().setFromObject(mesh);
    const center = box.getCenter(new THREE.Vector3());
    gizmo.position.copy(center);
    gizmo.visible = true;
  }

  function updateObjectList() {
    if (!element.objectList) return;
    element.objectList.innerHTML = ['<option value="">— select an object —</option>']
      .concat(objects.map((object) => `<option value="${object.id}"${object.id === selectedId ? ' selected' : ''}>${escapeHtml(object.name)}</option>`))
      .join('');
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  function axisValue(object, axisIndex) {
    if (mode === 'move') return object.position[axisIndex];
    if (mode === 'rotate') return THREE.MathUtils.radToDeg(object.rotation[axisIndex]);
    return object.scale[axisIndex];
  }

  function setAxisValue(object, axisIndex, value) {
    if (mode === 'move') object.position[axisIndex] = round(value, snap ? 0.25 : 0.05);
    else if (mode === 'rotate') object.rotation[axisIndex] = THREE.MathUtils.degToRad(value);
    else object.scale[axisIndex] = Math.max(0.05, round(value, snap ? 0.1 : 0.01));
    updateMesh(object);
    updateSelectionHelpers();
    scheduleSave();
  }

  function axisMeta() {
    if (mode === 'move') return { min: -15, max: 15, step: 0.1, suffix: '' };
    if (mode === 'rotate') return { min: -180, max: 180, step: 1, suffix: '°' };
    return { min: 0.1, max: 8, step: 0.1, suffix: '×' };
  }

  function renderAxes() {
    if (!element.axes) return;
    const meta = axisMeta();
    const keys = ['X', 'Y', 'Z'];
    const labels = mode === 'rotate' ? ['Pitch X', 'Yaw Y', 'Roll Z'] : mode === 'scale' ? ['Width X', 'Height Y', 'Depth Z'] : ['X axle', 'Y axle', 'Z axle'];
    element.axes.innerHTML = keys.map((axis, index) => `
      <div class="studio-axis" data-axis-index="${index}">
        <span class="studio-axis-key axis-${axis.toLowerCase()}">${axis}</span>
        <label class="studio-axis-label">${labels[index]}
          <input type="range" min="${meta.min}" max="${meta.max}" step="${meta.step}" data-axis="${index}" data-mode="${mode}" aria-label="${labels[index]}" />
        </label>
        <output data-axis-output="${index}">0</output>
        <button type="button" data-axis-nudge="-1" data-axis-index="${index}" aria-label="Decrease ${axis}">−</button>
        <button type="button" data-axis-nudge="1" data-axis-index="${index}" aria-label="Increase ${axis}">+</button>
      </div>`).join('');
    syncAxes();
  }

  function syncAxes() {
    const object = selectedObject();
    if (!element.axes) return;
    const meta = axisMeta();
    element.axes.querySelectorAll('input[data-axis]').forEach((input) => {
      const index = Number(input.dataset.axis);
      const value = object ? axisValue(object, index) : 0;
      input.min = String(meta.min);
      input.max = String(meta.max);
      input.step = String(meta.step);
      input.disabled = !object;
      input.value = String(clamp(value, meta.min, meta.max));
      const output = element.axes.querySelector(`[data-axis-output="${index}"]`);
      if (output) output.textContent = `${Math.round(value * 10) / 10}${meta.suffix}`;
    });
  }

  function updateHint() {
    if (!element.hint) return;
    const messages = {
      move: 'Drag a part to move it · Shift-drag to lift/lower · drag empty space to orbit',
      rotate: 'Drag a part to rotate it · drag empty space to orbit · axle sliders for precision',
      scale: 'Drag a part up/down to scale it · drag empty space to orbit · axle sliders for precision',
    };
    element.hint.textContent = messages[mode] || messages.move;
  }

  function select(id) {
    selectedId = objectById(id) ? id : null;
    const object = selectedObject();
    if (element.selection) element.selection.textContent = object ? object.name : 'Nothing selected';
    if (element.selectionName) element.selectionName.value = object?.name || '';
    if (element.objectList) element.objectList.value = object ? String(object.id) : '';
    if (element.color) element.color.value = object?.color || '#63e6d5';
    if (element.material) element.material.value = object?.material || 'matte';
    renderAxes();
    updateSelectionHelpers();
    syncAxes();
    if (element.selectionName) element.selectionName.disabled = !object;
    if (element.color) element.color.disabled = !object;
    if (element.material) element.material.disabled = !object;
  }

  function applyColor(color) {
    const object = selectedObject();
    if (!object) return;
    object.color = color;
    updateMesh(object);
    updateSelectionHelpers();
    if (element.color) element.color.value = color;
    scheduleSave();
  }

  function applyMaterial(material) {
    const object = selectedObject();
    if (!object) return;
    object.material = material;
    updateMesh(object);
    scheduleSave();
  }

  function renameSelected(name) {
    const object = selectedObject();
    if (!object) return;
    object.name = name.trim() || object.name;
    updateObjectList();
    select(object.id);
    scheduleSave();
  }

  function moveNudge(index, direction) {
    const object = selectedObject();
    if (!object) return;
    record();
    const step = mode === 'rotate' ? 15 : mode === 'scale' ? 0.25 : 0.5;
    if (mode === 'move') object.position[index] += step * direction;
    else if (mode === 'rotate') object.rotation[index] += THREE.MathUtils.degToRad(step * direction);
    else object.scale[index] = Math.max(0.05, object.scale[index] + step * direction);
    updateMesh(object);
    updateSelectionHelpers();
    syncAxes();
    scheduleSave();
  }

  function undo() {
    if (historyIndex <= 0) return;
    const previousSelection = selectedId;
    historyIndex -= 1;
    setObjects(JSON.parse(JSON.stringify(history[historyIndex])), { keepSelection: false });
    selectedId = objectById(previousSelection) ? previousSelection : null;
    select(selectedId);
    recordFromHistory();
    showToast('Undo');
  }

  function redo() {
    if (historyIndex >= history.length - 1) return;
    const previousSelection = selectedId;
    historyIndex += 1;
    setObjects(JSON.parse(JSON.stringify(history[historyIndex])), { keepSelection: false });
    selectedId = objectById(previousSelection) ? previousSelection : null;
    select(selectedId);
    recordFromHistory();
    showToast('Redo');
  }

  function recordFromHistory() {
    // History already holds the state; just mark the design dirty.
    dirty = true;
    updateStatus();
    scheduleSave();
  }

  function paletteButtons() {
    if (!element.palette) return;
    element.palette.innerHTML = PALETTE.map((color) => `<button type="button" class="studio-swatch" data-color="${color}" style="--swatch:${color}" aria-label="Color ${color}"></button>`).join('');
  }

  function templateConsole() {
    return [
      { type: 'box', name: 'Console body', position: [0, 0.35, 0], scale: [2.8, 0.45, 4.6], color: '#2b3a55', material: 'gloss' },
      { type: 'box', name: 'Console top', position: [0, 0.62, 0], scale: [2.5, 0.1, 4.1], color: '#101a2c', material: 'metal' },
      { type: 'box', name: 'Screen', position: [0, 0.7, -0.55], scale: [2.05, 0.06, 2.4], color: '#63e6d5', material: 'gloss' },
      { type: 'box', name: 'D-pad horizontal', position: [-0.85, 0.72, 1.05], scale: [0.55, 0.08, 0.16], color: '#dfe9ff', material: 'matte' },
      { type: 'box', name: 'D-pad vertical', position: [-0.85, 0.72, 1.05], scale: [0.16, 0.08, 0.55], color: '#dfe9ff', material: 'matte' },
      { type: 'cylinder', name: 'Button A', position: [0.75, 0.73, 0.85], scale: [0.24, 0.08, 0.24], color: '#ff5c8a', material: 'gloss' },
      { type: 'cylinder', name: 'Button B', position: [1.05, 0.73, 1.15], scale: [0.24, 0.08, 0.24], color: '#ffc93c', material: 'gloss' },
      { type: 'box', name: 'Speaker', position: [0.75, 0.72, 1.55], scale: [0.5, 0.04, 0.3], color: '#101a2c', material: 'matte' },
      { type: 'box', name: 'Left trigger', position: [-1.25, 0.62, -2.15], scale: [0.4, 0.25, 0.5], color: '#8b5cff', material: 'gloss' },
      { type: 'box', name: 'Right trigger', position: [1.25, 0.62, -2.15], scale: [0.4, 0.25, 0.5], color: '#8b5cff', material: 'gloss' },
    ];
  }

  function templateController() {
    return [
      { type: 'box', name: 'Controller body', position: [0, 0.55, 0], scale: [3.4, 0.55, 1.7], color: '#222a3a', material: 'gloss' },
      { type: 'box', name: 'Left grip', position: [-1.05, 0.5, 0.4], rotation: [0, 0, 0.3], scale: [0.9, 0.5, 1.4], color: '#222a3a', material: 'gloss' },
      { type: 'box', name: 'Right grip', position: [1.05, 0.5, 0.4], rotation: [0, 0, -0.3], scale: [0.9, 0.5, 1.4], color: '#222a3a', material: 'gloss' },
      { type: 'cylinder', name: 'Left stick base', position: [-0.65, 0.86, -0.3], scale: [0.28, 0.12, 0.28], color: '#101a2c', material: 'matte' },
      { type: 'sphere', name: 'Left stick cap', position: [-0.65, 0.98, -0.3], scale: [0.36, 0.22, 0.36], color: '#63e6d5', material: 'gloss' },
      { type: 'cylinder', name: 'Right stick base', position: [0.65, 0.86, 0.25], scale: [0.28, 0.12, 0.28], color: '#101a2c', material: 'matte' },
      { type: 'sphere', name: 'Right stick cap', position: [0.65, 0.98, 0.25], scale: [0.36, 0.22, 0.36], color: '#ff9ff3', material: 'gloss' },
      { type: 'box', name: 'D-pad horizontal', position: [-0.95, 0.86, 0.35], scale: [0.5, 0.1, 0.16], color: '#dfe9ff', material: 'matte' },
      { type: 'box', name: 'D-pad vertical', position: [-0.95, 0.86, 0.35], scale: [0.16, 0.1, 0.5], color: '#dfe9ff', material: 'matte' },
      { type: 'cylinder', name: 'Face button A', position: [1.15, 0.86, -0.35], scale: [0.24, 0.1, 0.24], color: '#ff5c8a', material: 'gloss' },
      { type: 'cylinder', name: 'Face button B', position: [1.35, 0.86, 0.05], scale: [0.24, 0.1, 0.24], color: '#ffc93c', material: 'gloss' },
      { type: 'cylinder', name: 'Face button C', position: [0.95, 0.86, 0.15], scale: [0.24, 0.1, 0.24], color: '#74b9ff', material: 'gloss' },
      { type: 'cylinder', name: 'Face button D', position: [1.15, 0.86, 0.45], scale: [0.24, 0.1, 0.24], color: '#9be15d', material: 'gloss' },
    ];
  }

  function templateCar() {
    return [
      { type: 'box', name: 'Chassis', position: [0, 0.72, 0], scale: [4.8, 0.55, 2.2], color: '#ff5c8a', material: 'gloss' },
      { type: 'box', name: 'Cabin', position: [-0.45, 1.25, 0], scale: [2.1, 0.75, 1.8], color: '#1a2a44', material: 'gloss' },
      { type: 'box', name: 'Windshield', position: [0.65, 1.3, 0], scale: [1.0, 0.65, 1.72], color: '#74d7ff', material: 'gloss' },
      { type: 'box', name: 'Hood', position: [1.65, 1.02, 0], scale: [1.5, 0.18, 2.0], color: '#ff5c8a', material: 'gloss' },
      { type: 'cylinder', name: 'Wheel front left', position: [1.45, 0.5, -1.08], rotation: [Math.PI / 2, 0, 0], scale: [1.2, 0.38, 1.2], color: '#101a2c', material: 'matte' },
      { type: 'cylinder', name: 'Wheel front right', position: [1.45, 0.5, 1.08], rotation: [Math.PI / 2, 0, 0], scale: [1.2, 0.38, 1.2], color: '#101a2c', material: 'matte' },
      { type: 'cylinder', name: 'Wheel rear left', position: [-1.45, 0.5, -1.08], rotation: [Math.PI / 2, 0, 0], scale: [1.2, 0.38, 1.2], color: '#101a2c', material: 'matte' },
      { type: 'cylinder', name: 'Wheel rear right', position: [-1.45, 0.5, 1.08], rotation: [Math.PI / 2, 0, 0], scale: [1.2, 0.38, 1.2], color: '#101a2c', material: 'matte' },
      { type: 'box', name: 'Headlight left', position: [2.42, 0.85, -0.65], scale: [0.12, 0.22, 0.45], color: '#fff6b0', material: 'gloss' },
      { type: 'box', name: 'Headlight right', position: [2.42, 0.85, 0.65], scale: [0.12, 0.22, 0.45], color: '#fff6b0', material: 'gloss' },
      { type: 'box', name: 'Spoiler', position: [-2.35, 1.12, 0], scale: [0.35, 0.12, 1.9], color: '#101a2c', material: 'matte' },
    ];
  }

  function templateHouse() {
    return [
      { type: 'box', name: 'Foundation', position: [0, 0.15, 0], scale: [5.6, 0.3, 4.8], color: '#8a6a4a', material: 'matte' },
      { type: 'box', name: 'Back wall', position: [0, 1.7, -2.2], scale: [5.2, 2.7, 0.25], color: '#ffd9a0', material: 'matte' },
      { type: 'box', name: 'Left wall', position: [-2.48, 1.7, 0], scale: [0.25, 2.7, 4.4], color: '#f4c888', material: 'matte' },
      { type: 'box', name: 'Right wall', position: [2.48, 1.7, 0], scale: [0.25, 2.7, 4.4], color: '#f4c888', material: 'matte' },
      { type: 'box', name: 'Front wall left', position: [-1.65, 1.7, 2.2], scale: [2.1, 2.7, 0.25], color: '#ffd9a0', material: 'matte' },
      { type: 'box', name: 'Front wall right', position: [1.65, 1.7, 2.2], scale: [2.1, 2.7, 0.25], color: '#ffd9a0', material: 'matte' },
      { type: 'box', name: 'Door', position: [0, 1.1, 2.35], scale: [1.0, 2.0, 0.16], color: '#6b3f22', material: 'gloss' },
      { type: 'box', name: 'Window left', position: [-1.65, 2.2, 2.38], scale: [1.0, 0.9, 0.1], color: '#74d7ff', material: 'gloss' },
      { type: 'box', name: 'Window right', position: [1.65, 2.2, 2.38], scale: [1.0, 0.9, 0.1], color: '#74d7ff', material: 'gloss' },
      { type: 'wedge', name: 'Roof', position: [0, 3.05, 0], scale: [5.8, 1.4, 5.0], color: '#d94a4a', material: 'gloss' },
      { type: 'box', name: 'Chimney', position: [-1.45, 3.8, -0.9], scale: [0.65, 1.3, 0.65], color: '#9a5a3a', material: 'matte' },
    ];
  }

  function templateRoom() {
    return [
      { type: 'box', name: 'Floor', position: [0, 0.1, 0], scale: [6.4, 0.2, 6.4], color: '#8a6a4a', material: 'matte' },
      { type: 'box', name: 'Back wall', position: [0, 1.7, -3.1], scale: [6.4, 3.2, 0.2], color: '#f4e6c8', material: 'matte' },
      { type: 'box', name: 'Left wall', position: [-3.1, 1.7, 0], scale: [0.2, 3.2, 6.2], color: '#f4e6c8', material: 'matte' },
      { type: 'box', name: 'Window', position: [0.2, 2.0, -2.95], scale: [2.3, 1.2, 0.12], color: '#74d7ff', material: 'gloss' },
      { type: 'box', name: 'Window frame top', position: [0.2, 2.62, -2.9], scale: [2.5, 0.12, 0.2], color: '#dfe9ff', material: 'matte' },
      { type: 'box', name: 'Window frame bottom', position: [0.2, 1.38, -2.9], scale: [2.5, 0.12, 0.2], color: '#dfe9ff', material: 'matte' },
      { type: 'box', name: 'Sofa base', position: [0.6, 0.55, 1.5], scale: [2.8, 0.5, 1.0], color: '#5a7cff', material: 'gloss' },
      { type: 'box', name: 'Sofa back', position: [0.6, 1.0, 1.98], scale: [2.8, 0.9, 0.22], color: '#4a6ae0', material: 'gloss' },
      { type: 'box', name: 'Sofa arm left', position: [-0.85, 0.8, 1.5], scale: [0.24, 0.7, 1.1], color: '#4a6ae0', material: 'gloss' },
      { type: 'box', name: 'Sofa arm right', position: [2.05, 0.8, 1.5], scale: [0.24, 0.7, 1.1], color: '#4a6ae0', material: 'gloss' },
      { type: 'box', name: 'Rug', position: [0.5, 0.22, 0.2], scale: [3.6, 0.04, 2.5], color: '#ff9ff3', material: 'matte' },
      { type: 'cylinder', name: 'Table leg', position: [-1.6, 0.45, 0.3], scale: [0.22, 0.6, 0.22], color: '#dfe9ff', material: 'metal' },
      { type: 'cylinder', name: 'Table top', position: [-1.6, 0.82, 0.3], scale: [1.2, 0.12, 1.2], color: '#b58cff', material: 'gloss' },
      { type: 'cylinder', name: 'Lamp pole', position: [2.4, 0.9, -1.4], scale: [0.12, 1.6, 0.12], color: '#dfe9ff', material: 'metal' },
      { type: 'cone', name: 'Lamp shade', position: [2.4, 1.85, -1.4], scale: [0.8, 0.7, 0.8], color: '#ffc93c', material: 'gloss' },
      { type: 'cylinder', name: 'Plant pot', position: [-2.4, 0.4, -1.8], scale: [0.55, 0.6, 0.55], color: '#9a5a3a', material: 'matte' },
      { type: 'sphere', name: 'Plant leaves', position: [-2.4, 1.1, -1.8], scale: [1.1, 0.9, 1.1], color: '#9be15d', material: 'matte' },
    ];
  }

  const templates = {
    console: { name: 'Game console', build: templateConsole },
    controller: { name: 'Controller', build: templateController },
    car: { name: 'Car', build: templateCar },
    house: { name: 'House', build: templateHouse },
    room: { name: 'House room', build: templateRoom },
  };

  function loadTemplate(key) {
    const template = templates[key];
    if (!template) return;
    record();
    const now = Date.now();
    objects = template.build().map((part, index) => ({
      id: index + 1,
      type: part.type,
      name: part.name,
      position: [...part.position],
      rotation: [...(part.rotation || [0, 0, 0])],
      scale: [...part.scale],
      color: part.color,
      material: part.material || 'matte',
      created: now,
    }));
    nextId = objects.length + 1;
    selectedId = null;
    rebuildMeshes();
    select(null);
    if (element.designName) element.designName.value = template.name;
    frameObjects();
    updateStatus();
    dirty = true;
    scheduleSave();
    showToast(`${template.name} template loaded — click any part to edit`);
  }

  function frameObjects() {
    if (!objects.length) {
      target.set(0, 2, 0);
      distance = 17;
      return;
    }
    const box = new THREE.Box3();
    for (const object of objects) if (meshes.get(object.id)) box.expandByObject(meshes.get(object.id));
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    target.set(center.x, center.y, center.z);
    distance = Math.max(9, Math.max(size.x, size.y, size.z) * 1.75 + 4);
  }

  function saveDesign({ quiet = false } = {}) {
    const name = (element.designName?.value || 'Untitled build').trim() || 'Untitled build';
    const store = readStore();
    store.designs[name] = { objects: snapshot(), updated: Date.now() };
    store.lastDesign = name;
    writeStore(store);
    lastSaveText = `saved ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    if (!quiet) showToast(`Saved “${name}”`);
    dirty = false;
    renderDesigns();
    updateStatus();
  }

  function readStore() {
    try {
      const data = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
      if (data && typeof data === 'object' && data.designs && typeof data.designs === 'object') return data;
    } catch { /* ignore corrupt storage */ }
    return { designs: {}, lastDesign: null };
  }

  function writeStore(store) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch { /* storage may be blocked */ }
  }

  function renderDesigns() {
    if (!element.designs) return;
    const store = readStore();
    const names = Object.keys(store.designs).sort((a, b) => (store.designs[b].updated || 0) - (store.designs[a].updated || 0));
    if (!names.length) {
      element.designs.innerHTML = '<li class="studio-empty-row">No saved designs yet.</li>';
      return;
    }
    element.designs.innerHTML = names.map((name) => `
      <li>
        <button type="button" class="studio-design-load" data-design="${escapeHtml(name)}">${escapeHtml(name)}<small>${new Date(store.designs[name].updated || Date.now()).toLocaleDateString()}</small></button>
        <button type="button" class="studio-design-delete" data-design-delete="${escapeHtml(name)}" aria-label="Delete ${escapeHtml(name)}">×</button>
      </li>`).join('');
  }

  function loadDesign(name) {
    const store = readStore();
    const design = store.designs[name];
    if (!design) return;
    record();
    objects = design.objects.map((object) => ({
      id: object.id,
      type: object.type,
      name: object.name,
      position: object.position,
      rotation: object.rotation,
      scale: object.scale,
      color: object.color,
      material: object.material || 'matte',
    }));
    nextId = objects.reduce((max, object) => Math.max(max, object.id), 0) + 1;
    selectedId = null;
    if (element.designName) element.designName.value = name;
    rebuildMeshes();
    select(null);
    frameObjects();
    updateStatus();
    lastSaveText = `saved ${new Date(design.updated || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    dirty = false;
    showToast(`Loaded “${name}”`);
  }

  function deleteDesign(name) {
    const store = readStore();
    delete store.designs[name];
    if (store.lastDesign === name) store.lastDesign = null;
    writeStore(store);
    renderDesigns();
    showToast('Design deleted');
  }

  function newDesign() {
    record();
    objects = [];
    selectedId = null;
    nextId = 1;
    if (element.designName) element.designName.value = 'Untitled build';
    rebuildMeshes();
    select(null);
    target.set(0, 2, 0);
    distance = 17;
    dirty = false;
    updateStatus();
    showToast('New blank design');
  }

  function scheduleSave() {
    dirty = true;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => saveDesign({ quiet: true }), 900);
  }

  function exportJson() {
    const payload = { app: 'blockbound-studio', version: 1, name: element.designName?.value || 'Untitled build', objects: snapshot() };
    downloadBlob(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }), `${slug(payload.name)}.json`);
    showToast('Design exported as JSON');
  }

  function exportSnapshot() {
    render();
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `${slug(element.designName?.value || 'blockbound-studio')}.png`);
    }, 'image/png');
    showToast('Snapshot saved');
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'blockbound-studio';
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function importJson(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        if (!Array.isArray(data.objects)) throw new Error('No objects');
        record();
        objects = data.objects.map((object, index) => ({
          id: index + 1,
          type: object.type || 'box',
          name: String(object.name || `Imported ${index + 1}`),
          position: (object.position || [0, 0.5, 0]).map(Number),
          rotation: (object.rotation || [0, 0, 0]).map(Number),
          scale: (object.scale || [1, 1, 1]).map(Number),
          color: object.color || '#63e6d5',
          material: object.material || 'matte',
        }));
        nextId = objects.length + 1;
        selectedId = null;
        if (element.designName) element.designName.value = String(data.name || 'Imported design').slice(0, 60);
        rebuildMeshes();
        select(null);
        frameObjects();
        updateStatus();
        scheduleSave();
        showToast('Design imported');
      } catch {
        showToast('Could not read that JSON file');
      }
    };
    reader.readAsText(file);
  }

  function updateCamera() {
    const x = target.x + distance * Math.cos(pitch) * Math.sin(yaw);
    const y = target.y + distance * Math.sin(pitch);
    const z = target.z + distance * Math.cos(pitch) * Math.cos(yaw);
    camera.position.set(x, y, z);
    camera.lookAt(target);
  }

  function renderSize() {
    const size = renderer.getSize(new THREE.Vector2());
    if (size.x > 0 && size.y > 0) {
      const aspect = size.x / size.y;
      if (Math.abs(camera.aspect - aspect) > 0.0005) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
    }
  }

  function render() {
    renderSize();
    renderer.render(scene, camera);
  }

  // Pointer orbit / pan / select / direct manipulation.
  let pointer = null;

  function viewportPoint(event) {
    const rect = viewport.getBoundingClientRect();
    return {
      ndcX: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ndcY: -((event.clientY - rect.top) / rect.height) * 2 + 1,
    };
  }

  function intersectPlaneAt(clientX, clientY, y) {
    const rect = viewport.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -y);
    const point = new THREE.Vector3();
    return raycaster.ray.intersectPlane(plane, point) ? point : null;
  }

  function worldUnitsPerPixel(object) {
    const objectY = object.position[1] + 0.8;
    const height = Math.max(1, viewport?.clientHeight || innerHeight);
    const distanceToObject = camera.position.distanceTo(new THREE.Vector3(object.position[0], objectY, object.position[2]));
    return (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * distanceToObject) / height;
  }

  function beginDragObject(event, mesh) {
    const id = mesh.userData.studioId;
    select(id);
    const object = selectedObject();
    if (!object) return false;
    const grab = intersectPlaneAt(event.clientX, event.clientY, object.position[1]);
    pointer = {
      x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY,
      moved: 0, button: event.button, mode: 'drag',
      drag: {
        id,
        startPosition: [...object.position],
        startRotation: [...object.rotation],
        startScale: [...object.scale],
        grab,
        recorded: false,
        unitsPerPixel: worldUnitsPerPixel(object),
      },
    };
    viewport?.setPointerCapture?.(event.pointerId);
    viewport?.classList.add('studio-dragging');
    updateHint();
    return true;
  }

  function updateDrag(event) {
    if (!pointer?.drag) return;
    const object = objectById(pointer.drag.id);
    if (!object) return;
    const totalDx = event.clientX - pointer.startX;
    const totalDy = event.clientY - pointer.startY;
    const drag = pointer.drag;
    if (!drag.recorded) { record(); drag.recorded = true; }
    if (mode === 'move') {
      if (event.shiftKey) {
        object.position[1] = drag.startPosition[1] - totalDy * drag.unitsPerPixel;
        if (snap) object.position[1] = round(object.position[1], 0.05);
      } else if (drag.grab) {
        const point = intersectPlaneAt(event.clientX, event.clientY, drag.startPosition[1]);
        if (point) {
          object.position[0] = drag.startPosition[0] + point.x - drag.grab.x;
          object.position[2] = drag.startPosition[2] + point.z - drag.grab.z;
          if (snap) {
            object.position[0] = round(object.position[0], 0.05);
            object.position[2] = round(object.position[2], 0.05);
          }
        }
      }
    } else if (mode === 'rotate') {
      object.rotation[1] = drag.startRotation[1] + totalDx * 0.008;
      object.rotation[0] = clamp(drag.startRotation[0] + totalDy * 0.008, -Math.PI / 2, Math.PI / 2);
      if (snap) {
        object.rotation[1] = round(object.rotation[1], THREE.MathUtils.degToRad(5));
        object.rotation[0] = round(object.rotation[0], THREE.MathUtils.degToRad(5));
      }
    } else {
      const factor = clamp(1 - totalDy * 0.006, 0.1, 8);
      object.scale = drag.startScale.map((value) => value * factor);
    }
    updateMesh(object);
    updateSelectionHelpers();
    syncAxes();
    scheduleSave();
  }

  viewport?.addEventListener('pointerdown', (event) => {
    if (!active) return;
    if (event.button === 0) {
      const mesh = pickObjectAt(event.clientX, event.clientY);
      if (mesh && beginDragObject(event, mesh)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    }
    pointer = { x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, moved: 0, button: event.button, mode: 'orbit' };
    viewport?.setPointerCapture?.(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true });
  viewport?.addEventListener('pointermove', (event) => {
    if (!active || !pointer) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    pointer.moved += Math.abs(dx) + Math.abs(dy);
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    if (pointer.mode === 'drag') {
      updateDrag(event);
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (pointer.button === 0) {
      yaw -= dx * 0.006;
      pitch = clamp(pitch + dy * 0.005, -0.15, 1.35);
    } else if (pointer.button === 2 || pointer.button === 1) {
      const scale = distance * 0.0016;
      target.x -= (Math.cos(yaw) * dx - Math.sin(yaw) * Math.sin(pitch) * dy) * scale;
      target.z -= (-Math.sin(yaw) * dx - Math.cos(yaw) * Math.sin(pitch) * dy) * scale;
      target.y += Math.cos(pitch) * dy * scale;
    }
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true });
  viewport?.addEventListener('pointerup', (event) => {
    if (!active || !pointer) return;
    const wasDrag = pointer.mode === 'drag';
    const wasClick = pointer.moved < 5 && pointer.button === 0;
    if (wasDrag) {
      const object = selectedObject();
      if (object) {
        syncAxes();
        scheduleSave();
        if (pointer.moved >= 4) showToast(`${mode === 'move' ? 'Moved' : mode === 'rotate' ? 'Rotated' : 'Scaled'} ${object.name}`);
      }
      viewport?.classList.remove('studio-dragging');
    } else if (wasClick) {
      pickAt(event.clientX, event.clientY);
    }
    pointer = null;
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true });
  viewport?.addEventListener('pointercancel', () => { pointer = null; viewport?.classList.remove('studio-dragging'); }, { capture: true });
  viewport?.addEventListener('wheel', (event) => {
    if (!active) return;
    distance = clamp(distance * (1 + Math.sign(event.deltaY) * 0.09), 4, 70);
    event.preventDefault();
    event.stopPropagation();
  }, { capture: true, passive: false });
  viewport?.addEventListener('contextmenu', (event) => { if (active) event.preventDefault(); }, { capture: true });
  viewport?.addEventListener('dblclick', (event) => {
    if (!active) return;
    const picked = pickObjectAt(event.clientX, event.clientY);
    if (picked) {
      frameObjects(picked);
      event.preventDefault();
    }
  });

  const raycaster = new THREE.Raycaster();
  function pickObjectAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects([...meshes.values()], false);
    return hits.length ? hits[0].object : null;
  }

  function pickAt(clientX, clientY) {
    const mesh = pickObjectAt(clientX, clientY);
    select(mesh?.userData.studioId ?? null);
  }

  function down(event) {
    if (!active || !element.screen?.classList.contains('active')) return;
    if (event.code === 'Delete' || event.code === 'Backspace') {
      if (selectedId && !(event.target instanceof HTMLInputElement)) { deleteSelected(); event.preventDefault(); }
    } else if (event.code === 'Escape') {
      leave();
      event.preventDefault();
    } else if ((event.ctrlKey || event.metaKey) && event.code === 'KeyZ') {
      if (event.shiftKey) redo(); else undo();
      event.preventDefault();
    } else if ((event.ctrlKey || event.metaKey) && event.code === 'KeyD') {
      duplicateSelected();
      event.preventDefault();
    } else if (event.code === 'KeyG') {
      snap = !snap;
      showToast(snap ? 'Snap on' : 'Snap off');
      event.preventDefault();
    }
  }

  document.addEventListener('keydown', down);

  // Top-bar actions.
  element.screen?.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-studio-action]');
    if (actionButton) {
      const action = actionButton.dataset.studioAction;
      if (action === 'undo') undo();
      else if (action === 'redo') redo();
      else if (action === 'save') saveDesign();
      else if (action === 'new') newDesign();
      else if (action === 'export') exportJson();
      else if (action === 'snapshot') exportSnapshot();
      else if (action === 'import') document.querySelector('#studio-import')?.click();
      else if (action === 'fit') frameObjects();
      else if (action === 'menu') leave();
      return;
    }
    const addButton = event.target.closest('[data-studio-add]');
    if (addButton) {
      const type = addButton.dataset.studioAdd;
      addObject(type);
      return;
    }
    const templateButton = event.target.closest('[data-studio-template]');
    if (templateButton) {
      loadTemplate(templateButton.dataset.studioTemplate);
      return;
    }
    const modeButton = event.target.closest('[data-studio-mode]');
    if (modeButton) {
      mode = modeButton.dataset.studioMode;
      element.screen?.querySelectorAll('[data-studio-mode]').forEach((button) => button.classList.toggle('active', button.dataset.studioMode === mode));
      renderAxes();
      updateHint();
      return;
    }
    const swatch = event.target.closest('[data-color]');
    if (swatch) {
      applyColor(swatch.dataset.color);
      return;
    }
    const designLoad = event.target.closest('[data-design]');
    if (designLoad) {
      loadDesign(designLoad.dataset.design);
      return;
    }
    const designDelete = event.target.closest('[data-design-delete]');
    if (designDelete) {
      deleteDesign(designDelete.dataset.designDelete);
      return;
    }
    const nudge = event.target.closest('[data-axis-nudge]');
    if (nudge) {
      moveNudge(Number(nudge.dataset.axisIndex), Number(nudge.dataset.axisNudge));
      return;
    }
    const selectionDelete = event.target.closest('[data-studio-selection-action="delete"]');
    if (selectionDelete) { deleteSelected(); return; }
    const selectionDuplicate = event.target.closest('[data-studio-selection-action="duplicate"]');
    if (selectionDuplicate) { duplicateSelected(); return; }
  });

  let axisInputRecorded = false;
  element.axes?.addEventListener('pointerdown', () => { axisInputRecorded = false; });
  element.axes?.addEventListener('pointerup', () => { axisInputRecorded = false; });
  element.axes?.addEventListener('input', (event) => {
    const input = event.target.closest('input[data-axis]');
    if (!input) return;
    const object = selectedObject();
    if (!object) return;
    const index = Number(input.dataset.axis);
    if (!axisInputRecorded) { record(); axisInputRecorded = true; }
    setAxisValue(object, index, Number(input.value));
    if (element.axes) {
      const output = element.axes.querySelector(`[data-axis-output="${index}"]`);
      const meta = axisMeta();
      if (output) output.textContent = `${Math.round(Number(input.value) * 10) / 10}${meta.suffix}`;
    }
  });

  element.color?.addEventListener('input', () => applyColor(element.color.value));
  element.material?.addEventListener('change', () => applyMaterial(element.material.value));
  element.objectList?.addEventListener('change', () => select(Number(element.objectList.value) || null));
  element.selectionName?.addEventListener('change', () => renameSelected(element.selectionName.value));
  element.designName?.addEventListener('change', () => scheduleSave());
  document.querySelector('#studio-import')?.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
    event.target.value = '';
  });

  function start() {
    active = true;
    const store = readStore();
    const last = store.lastDesign && store.designs[store.lastDesign];
    if (last) {
      loadDesign(store.lastDesign);
      lastSaveText = `saved ${new Date(last.updated || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      updateStatus();
    } else {
      objects = [];
      selectedId = null;
      if (element.designName) element.designName.value = 'Untitled build';
      rebuildMeshes();
      select(null);
      target.set(0, 2, 0);
      distance = 17;
      lastSaveText = 'not saved yet';
      updateStatus();
    }
    paletteButtons();
    renderDesigns();
    mode = 'move';
    element.screen?.querySelectorAll('[data-studio-mode]').forEach((button) => button.classList.toggle('active', button.dataset.studioMode === 'move'));
    renderAxes();
    updateHint();
    updateCamera();
  }

  function stop() {
    if (active && dirty) saveDesign({ quiet: true });
    active = false;
    pointer = null;
  }

  function leave() {
    stop();
    onExit?.();
  }

  function update(dt) {
    if (!active) return;
    if (selectedId) updateSelectionHelpers();
    updateCamera();
    // Gentle idle glow on the selection.
    selectionHelper.material.color.setHSL(0.47 + Math.sin(performance.now() * 0.001) * 0.03, 0.8, 0.65);
    gizmo.rotation.y += dt * 0.6;
  }

  if (import.meta.env.DEV) {
    window.__studio = {
      start, stop, state: () => ({ active, objects: objects.length, selected: selectedId, mode, designs: Object.keys(readStore().designs), name: element.designName?.value }),
      add: addObject, template: loadTemplate, select, snapshot, save: () => saveDesign({ quiet: true }),
      screenOfSelected: () => {
        const object = selectedObject();
        const mesh = object ? meshes.get(object.id) : null;
        if (!mesh) return null;
        const v = new THREE.Vector3();
        mesh.getWorldPosition(v);
        v.project(camera);
        return [(v.x * 0.5 + 0.5) * innerWidth, (-v.y * 0.5 + 0.5) * innerHeight];
      },
      scene, renderer, camera,
    };
  }

  paletteButtons();
  renderDesigns();
  updateCamera();
  return { start, stop, update, render, get active() { return active; }, leave, save: () => saveDesign({ quiet: true }), frame: frameObjects };
}
