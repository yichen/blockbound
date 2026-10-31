(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Hl="178",vh=0,Rc=1,xh=2,eu=1,tu=2,Qn=3,Mi=0,hn=1,zn=2,ki=0,Ao=1,Cc=2,Lc=3,Pc=4,yh=5,Fi=100,Mh=101,Sh=102,Eh=103,wh=104,Th=200,Ah=201,Rh=202,Ch=203,Wr=204,Xr=205,Lh=206,Ph=207,Dh=208,Ih=209,Uh=210,Nh=211,Fh=212,Oh=213,Bh=214,qr=0,$r=1,Yr=2,Do=3,jr=4,Kr=5,Zr=6,Jr=7,Gl=0,zh=1,Hh=2,vi=0,Gh=1,Vh=2,Wh=3,nu=4,Xh=5,qh=6,$h=7,iu=300,Io=301,Uo=302,Qr=303,el=304,Ba=306,tl=1e3,Bi=1001,nl=1002,Ut=1003,Vl=1004,zs=1005,Hn=1006,or=1007,zi=1008,Vn=1009,ou=1010,su=1011,ms=1012,Wl=1013,Wi=1014,Gn=1015,Ls=1016,Xl=1017,ql=1018,gs=1020,au=35902,ru=1021,lu=1022,Dn=1023,bs=1026,ks=1027,$l=1028,Yl=1029,cu=1030,jl=1031,Kl=1033,ga=33776,ba=33777,ka=33778,va=33779,il=35840,ol=35841,sl=35842,al=35843,rl=36196,ll=37492,cl=37496,dl=37808,ul=37809,hl=37810,fl=37811,pl=37812,_l=37813,ml=37814,gl=37815,bl=37816,kl=37817,vl=37818,xl=37819,yl=37820,Ml=37821,xa=36492,Sl=36494,El=36495,du=36283,wl=36284,Tl=36285,Al=36286,Yh=3200,jh=3201,Zl=0,Kh=1,mi="",Dt="srgb",No="srgb-linear",Ea="linear",pt="srgb",no=7680,Dc=519,Zh=512,Jh=513,Qh=514,uu=515,ef=516,tf=517,nf=518,of=519,Rl=35044,Ic="300 es",ei=2e3,wa=2001;class Ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let s=0,a=o.length;s<a;s++)o[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uc=1234567;const Ro=Math.PI/180,vs=180/Math.PI;function ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Jl(n,e){return(n%e+e)%e}function sf(n,e,t,i,o){return i+(n-e)*(o-i)/(t-e)}function af(n,e,t){return n!==e?(t-n)/(e-n):0}function us(n,e,t){return(1-t)*n+t*e}function rf(n,e,t,i){return us(n,e,1-Math.exp(-t*i))}function lf(n,e=1){return e-Math.abs(Jl(n,e*2)-e)}function cf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function df(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function uf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hf(n,e){return n+Math.random()*(e-n)}function ff(n){return n*(.5-Math.random())}function pf(n){n!==void 0&&(Uc=n);let e=Uc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(n){return n*Ro}function mf(n){return n*vs}function gf(n){return(n&n-1)===0&&n!==0}function bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vf(n,e,t,i,o){const s=Math.cos,a=Math.sin,r=s(t/2),l=a(t/2),d=s((e+i)/2),c=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),_=s((i-e)/2),g=a((i-e)/2);switch(o){case"XYX":n.set(r*c,l*u,l*f,r*d);break;case"YZY":n.set(l*f,r*c,l*u,r*d);break;case"ZXZ":n.set(l*u,l*f,r*c,r*d);break;case"XZX":n.set(r*c,l*g,l*_,r*d);break;case"YXY":n.set(l*_,r*c,l*g,r*d);break;case"ZYZ":n.set(l*g,l*_,r*c,r*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ql={DEG2RAD:Ro,RAD2DEG:vs,generateUUID:ni,clamp:it,euclideanModulo:Jl,mapLinear:sf,inverseLerp:af,lerp:us,damp:rf,pingpong:lf,smoothstep:cf,smootherstep:df,randInt:uf,randFloat:hf,randFloatSpread:ff,seededRandom:pf,degToRad:_f,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:bf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:vf,normalize:ht,denormalize:Pn};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*o+e.x,this.y=s*o+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,s,a,r){let l=i[o+0],d=i[o+1],c=i[o+2],u=i[o+3];const f=s[a+0],_=s[a+1],g=s[a+2],v=s[a+3];if(r===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=_,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||d!==_||c!==g){let m=1-r;const p=l*f+d*_+c*g+u*v,T=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const F=Math.sqrt(A),P=Math.atan2(F,p*T);m=Math.sin(m*P)/F,r=Math.sin(r*P)/F}const E=r*T;if(l=l*m+f*E,d=d*m+_*E,c=c*m+g*E,u=u*m+v*E,m===1-r){const F=1/Math.sqrt(l*l+d*d+c*c+u*u);l*=F,d*=F,c*=F,u*=F}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,o,s,a){const r=i[o],l=i[o+1],d=i[o+2],c=i[o+3],u=s[a],f=s[a+1],_=s[a+2],g=s[a+3];return e[t]=r*g+c*u+l*_-d*f,e[t+1]=l*g+c*f+d*u-r*_,e[t+2]=d*g+c*_+r*f-l*u,e[t+3]=c*g-r*u-l*f-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,d=r(i/2),c=r(o/2),u=r(s/2),f=l(i/2),_=l(o/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*u+d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u-f*_*g;break;case"YXZ":this._x=f*c*u+d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u+f*_*g;break;case"ZXY":this._x=f*c*u-d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u-f*_*g;break;case"ZYX":this._x=f*c*u-d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u+f*_*g;break;case"YZX":this._x=f*c*u+d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u-f*_*g;break;case"XZY":this._x=f*c*u-d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u+f*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],s=t[8],a=t[1],r=t[5],l=t[9],d=t[2],c=t[6],u=t[10],f=i+r+u;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(c-l)*_,this._y=(s-d)*_,this._z=(a-o)*_}else if(i>r&&i>u){const _=2*Math.sqrt(1+i-r-u);this._w=(c-l)/_,this._x=.25*_,this._y=(o+a)/_,this._z=(s+d)/_}else if(r>u){const _=2*Math.sqrt(1+r-i-u);this._w=(s-d)/_,this._x=(o+a)/_,this._y=.25*_,this._z=(l+c)/_}else{const _=2*Math.sqrt(1+u-i-r);this._w=(a-o)/_,this._x=(s+d)/_,this._y=(l+c)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,s=e._z,a=e._w,r=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+a*r+o*d-s*l,this._y=o*c+a*l+s*r-i*d,this._z=s*c+a*d+i*l-o*r,this._w=a*c-i*r-o*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,s=this._z,a=this._w;let r=a*e._w+i*e._x+o*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=i,this._y=o,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*o+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,r),u=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=o*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*o,this.y=s[1]*t+s[4]*i+s[7]*o,this.z=s[2]*t+s[5]*i+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*o+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*o+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*o+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,s=e.x,a=e.y,r=e.z,l=e.w,d=2*(a*o-r*i),c=2*(r*t-s*o),u=2*(s*i-a*t);return this.x=t+l*d+a*u-r*c,this.y=i+l*c+r*d-s*u,this.z=o+l*u+s*c-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o,this.y=s[1]*t+s[5]*i+s[9]*o,this.z=s[2]*t+s[6]*i+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=o*l-s*r,this.y=s*a-i*l,this.z=i*r-o*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new U,Nc=new Ps;class je{constructor(e,t,i,o,s,a,r,l,d){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,a,r,l,d)}set(e,t,i,o,s,a,r,l,d){const c=this.elements;return c[0]=e,c[1]=o,c[2]=r,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,a=i[0],r=i[3],l=i[6],d=i[1],c=i[4],u=i[7],f=i[2],_=i[5],g=i[8],v=o[0],m=o[3],p=o[6],T=o[1],A=o[4],E=o[7],F=o[2],P=o[5],L=o[8];return s[0]=a*v+r*T+l*F,s[3]=a*m+r*A+l*P,s[6]=a*p+r*E+l*L,s[1]=d*v+c*T+u*F,s[4]=d*m+c*A+u*P,s[7]=d*p+c*E+u*L,s[2]=f*v+_*T+g*F,s[5]=f*m+_*A+g*P,s[8]=f*p+_*E+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*r*d-i*s*c+i*r*l+o*s*d-o*a*l}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8],u=c*a-r*d,f=r*l-c*s,_=d*s-a*l,g=t*u+i*f+o*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(o*d-c*i)*v,e[2]=(r*i-o*a)*v,e[3]=f*v,e[4]=(c*t-o*l)*v,e[5]=(o*s-r*t)*v,e[6]=_*v,e[7]=(i*l-d*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,s,a,r){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*a+d*r)+a+e,-o*d,o*l,-o*(-d*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ar.makeScale(e,t)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new je;function hu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xf(){const n=xs("canvas");return n.style.display="block",n}const Fc={};function Co(n){n in Fc||(Fc[n]=!0,console.warn(n))}function yf(n,e,t){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Mf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Oc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){const n={enabled:!0,workingColorSpace:No,spaces:{},convert:function(o,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(o.r=ii(o.r),o.g=ii(o.g),o.b=ii(o.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[s].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,s){return this.convert(o,this.workingColorSpace,s)},colorSpaceToWorking:function(o,s){return this.convert(o,s,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===mi?Ea:this.spaces[o].transfer},getLuminanceCoefficients:function(o,s=this.workingColorSpace){return o.fromArray(this.spaces[s].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,s,a){return o.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,s){return Co("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,s)},toWorkingColorSpace:function(o,s){return Co("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[No]:{primaries:e,whitePoint:i,transfer:Ea,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const st=Ef();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let io;class wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=xs("canvas")),io.width=e.width,io.height=e.height;const o=io.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),s=o.data;for(let a=0;a<s.length;a++)s[a]=ii(s[a]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let a=0,r=o.length;a<r;a++)o[a].isDataTexture?s.push(rr(o[a].image)):s.push(rr(o[a]))}else s=rr(o);i.url=s}return t||(e.images[this.uuid]=i),i}}function rr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;const lr=new U;class Kt extends Ho{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=Bi,o=Bi,s=Hn,a=zi,r=Dn,l=Vn,d=Kt.DEFAULT_ANISOTROPY,c=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ni(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=r,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lr).x}get height(){return this.source.getSize(lr).y}get depth(){return this.source.getSize(lr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=iu;Kt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,o=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*o+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*o+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*o+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,s;const l=e.elements,d=l[0],c=l[4],u=l[8],f=l[1],_=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(d+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,E=(_+1)/2,F=(p+1)/2,P=(c+f)/4,L=(u+v)/4,N=(g+m)/4;return A>E&&A>F?A<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(A),o=P/i,s=L/i):E>F?E<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(E),i=P/o,s=N/o):F<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(F),i=L/s,o=N/s),this.set(i,o,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-c)*(f-c));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(f-c)/T,this.w=Math.acos((d+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends Ho{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const o={width:e,height:t,depth:i.depth},s=new Kt(o);this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fu extends Kt{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Kt{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const o=e.children;for(let s=0,a=o.length;s<a;s++)this.expandByObject(o[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Gs.subVectors(this.max,jo),oo.subVectors(e.a,jo),so.subVectors(e.b,jo),ao.subVectors(e.c,jo),ci.subVectors(so,oo),di.subVectors(ao,so),Ri.subVectors(oo,ao);let t=[0,-ci.z,ci.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!cr(t,oo,so,ao,Gs)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,oo,so,ao,Gs))?!1:(Vs.crossVectors(ci,di),t=[Vs.x,Vs.y,Vs.z],cr(t,oo,so,ao,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,Hs=new Yi,oo=new U,so=new U,ao=new U,ci=new U,di=new U,Ri=new U,jo=new U,Gs=new U,Vs=new U,Ci=new U;function cr(n,e,t,i,o){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const r=o.x*Math.abs(Ci.x)+o.y*Math.abs(Ci.y)+o.z*Math.abs(Ci.z),l=e.dot(Ci),d=t.dot(Ci),c=i.dot(Ci);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>r)return!1}return!0}const Lf=new Yi,Ko=new U,dr=new U;class Go{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lf.setFromPoints(e).getCenter(i);let o=0;for(let s=0,a=e.length;s<a;s++)o=Math.max(o,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Ko,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(dr)),this.expandByPoint(Ko.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new U,ur=new U,Ws=new U,ui=new U,hr=new U,Xs=new U,fr=new U;class tc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){ur.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ur);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),r=ui.dot(this.direction),l=-ui.dot(Ws),d=ui.lengthSq(),c=Math.abs(1-a*a);let u,f,_,g;if(c>0)if(u=a*l-r,f=a*r-l,g=s*c,u>=0)if(f>=-g)if(f<=g){const v=1/c;u*=v,f*=v,_=u*(u+a*f+2*r)+f*(a*u+f+2*l)+d}else f=s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;else f=-s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;else f<=-g?(u=Math.max(0,-(-a*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),_=-u*u+f*(f+2*l)+d):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+d):(u=Math.max(0,-(a*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),_=-u*u+f*(f+2*l)+d);else f=a>0?-s:s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(ur).addScaledVector(Ws,f),_}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),o=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(o>s)return null;const a=Math.sqrt(s-o),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,s,a,r,l;const d=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,o=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,o=(e.min.x-f.x)*d),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>o||((s>i||isNaN(i))&&(i=s),(a<o||isNaN(o))&&(o=a),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||r>o)||((r>i||i!==i)&&(i=r),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,o,s){hr.subVectors(t,e),Xs.subVectors(i,e),fr.crossVectors(hr,Xs);let a=this.direction.dot(fr),r;if(a>0){if(o)return null;r=1}else if(a<0)r=-1,a=-a;else return null;ui.subVectors(this.origin,e);const l=r*this.direction.dot(Xs.crossVectors(ui,Xs));if(l<0)return null;const d=r*this.direction.dot(hr.cross(ui));if(d<0||l+d>a)return null;const c=-r*ui.dot(fr);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,o,s,a,r,l,d,c,u,f,_,g,v,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,a,r,l,d,c,u,f,_,g,v,m)}set(e,t,i,o,s,a,r,l,d,c,u,f,_,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=o,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=d,p[6]=c,p[10]=u,p[14]=f,p[3]=_,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),s=1/ro.setFromMatrixColumn(e,1).length(),a=1/ro.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,s=e.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(o),d=Math.sin(o),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*c,_=a*u,g=r*c,v=r*u;t[0]=l*c,t[4]=-l*u,t[8]=d,t[1]=_+g*d,t[5]=f-v*d,t[9]=-r*l,t[2]=v-f*d,t[6]=g+_*d,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,_=l*u,g=d*c,v=d*u;t[0]=f+v*r,t[4]=g*r-_,t[8]=a*d,t[1]=a*u,t[5]=a*c,t[9]=-r,t[2]=_*r-g,t[6]=v+f*r,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,_=l*u,g=d*c,v=d*u;t[0]=f-v*r,t[4]=-a*u,t[8]=g+_*r,t[1]=_+g*r,t[5]=a*c,t[9]=v-f*r,t[2]=-a*d,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,_=a*u,g=r*c,v=r*u;t[0]=l*c,t[4]=g*d-_,t[8]=f*d+v,t[1]=l*u,t[5]=v*d+f,t[9]=_*d-g,t[2]=-d,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*d,g=r*l,v=r*d;t[0]=l*c,t[4]=v-f*u,t[8]=g*u+_,t[1]=u,t[5]=a*c,t[9]=-r*c,t[2]=-d*c,t[6]=_*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,_=a*d,g=r*l,v=r*d;t[0]=l*c,t[4]=-u,t[8]=d*c,t[1]=f*u+v,t[5]=a*c,t[9]=_*u-g,t[2]=g*u-_,t[6]=r*c,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Df)}lookAt(e,t,i){const o=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hi.crossVectors(i,_n),hi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hi.crossVectors(i,_n)),hi.normalize(),qs.crossVectors(_n,hi),o[0]=hi.x,o[4]=qs.x,o[8]=_n.x,o[1]=hi.y,o[5]=qs.y,o[9]=_n.y,o[2]=hi.z,o[6]=qs.z,o[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,a=i[0],r=i[4],l=i[8],d=i[12],c=i[1],u=i[5],f=i[9],_=i[13],g=i[2],v=i[6],m=i[10],p=i[14],T=i[3],A=i[7],E=i[11],F=i[15],P=o[0],L=o[4],N=o[8],S=o[12],M=o[1],D=o[5],G=o[9],H=o[13],$=o[2],Z=o[6],q=o[10],Q=o[14],W=o[3],ce=o[7],_e=o[11],Ce=o[15];return s[0]=a*P+r*M+l*$+d*W,s[4]=a*L+r*D+l*Z+d*ce,s[8]=a*N+r*G+l*q+d*_e,s[12]=a*S+r*H+l*Q+d*Ce,s[1]=c*P+u*M+f*$+_*W,s[5]=c*L+u*D+f*Z+_*ce,s[9]=c*N+u*G+f*q+_*_e,s[13]=c*S+u*H+f*Q+_*Ce,s[2]=g*P+v*M+m*$+p*W,s[6]=g*L+v*D+m*Z+p*ce,s[10]=g*N+v*G+m*q+p*_e,s[14]=g*S+v*H+m*Q+p*Ce,s[3]=T*P+A*M+E*$+F*W,s[7]=T*L+A*D+E*Z+F*ce,s[11]=T*N+A*G+E*q+F*_e,s[15]=T*S+A*H+E*Q+F*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],s=e[12],a=e[1],r=e[5],l=e[9],d=e[13],c=e[2],u=e[6],f=e[10],_=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-o*d*u-s*r*f+i*d*f+o*r*_-i*l*_)+v*(+t*l*_-t*d*f+s*a*f-o*a*_+o*d*c-s*l*c)+m*(+t*d*u-t*r*_-s*a*u+i*a*_+s*r*c-i*d*c)+p*(-o*r*c-t*l*u+t*r*f+o*a*u-i*a*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8],u=e[9],f=e[10],_=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=u*m*d-v*f*d+v*l*_-r*m*_-u*l*p+r*f*p,A=g*f*d-c*m*d-g*l*_+a*m*_+c*l*p-a*f*p,E=c*v*d-g*u*d+g*r*_-a*v*_-c*r*p+a*u*p,F=g*u*l-c*v*l-g*r*f+a*v*f+c*r*m-a*u*m,P=t*T+i*A+o*E+s*F;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=T*L,e[1]=(v*f*s-u*m*s-v*o*_+i*m*_+u*o*p-i*f*p)*L,e[2]=(r*m*s-v*l*s+v*o*d-i*m*d-r*o*p+i*l*p)*L,e[3]=(u*l*s-r*f*s-u*o*d+i*f*d+r*o*_-i*l*_)*L,e[4]=A*L,e[5]=(c*m*s-g*f*s+g*o*_-t*m*_-c*o*p+t*f*p)*L,e[6]=(g*l*s-a*m*s-g*o*d+t*m*d+a*o*p-t*l*p)*L,e[7]=(a*f*s-c*l*s+c*o*d-t*f*d-a*o*_+t*l*_)*L,e[8]=E*L,e[9]=(g*u*s-c*v*s-g*i*_+t*v*_+c*i*p-t*u*p)*L,e[10]=(a*v*s-g*r*s+g*i*d-t*v*d-a*i*p+t*r*p)*L,e[11]=(c*r*s-a*u*s-c*i*d+t*u*d+a*i*_-t*r*_)*L,e[12]=F*L,e[13]=(c*v*o-g*u*o+g*i*f-t*v*f-c*i*m+t*u*m)*L,e[14]=(g*r*o-a*v*o-g*i*l+t*v*l+a*i*m-t*r*m)*L,e[15]=(a*u*o-c*r*o+c*i*l-t*u*l-a*i*f+t*r*f)*L,this}scale(e){const t=this.elements,i=e.x,o=e.y,s=e.z;return t[0]*=i,t[4]*=o,t[8]*=s,t[1]*=i,t[5]*=o,t[9]*=s,t[2]*=i,t[6]*=o,t[10]*=s,t[3]*=i,t[7]*=o,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),s=1-i,a=e.x,r=e.y,l=e.z,d=s*a,c=s*r;return this.set(d*a+i,d*r-o*l,d*l+o*r,0,d*r+o*l,c*r+i,c*l-o*a,0,d*l-o*r,c*l+o*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,s,a){return this.set(1,i,s,0,e,1,a,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,d=s+s,c=a+a,u=r+r,f=s*d,_=s*c,g=s*u,v=a*c,m=a*u,p=r*u,T=l*d,A=l*c,E=l*u,F=i.x,P=i.y,L=i.z;return o[0]=(1-(v+p))*F,o[1]=(_+E)*F,o[2]=(g-A)*F,o[3]=0,o[4]=(_-E)*P,o[5]=(1-(f+p))*P,o[6]=(m+T)*P,o[7]=0,o[8]=(g+A)*L,o[9]=(m-T)*L,o[10]=(1-(f+v))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let s=ro.set(o[0],o[1],o[2]).length();const a=ro.set(o[4],o[5],o[6]).length(),r=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),e.x=o[12],e.y=o[13],e.z=o[14],Cn.copy(this);const d=1/s,c=1/a,u=1/r;return Cn.elements[0]*=d,Cn.elements[1]*=d,Cn.elements[2]*=d,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=r,this}makePerspective(e,t,i,o,s,a,r=ei){const l=this.elements,d=2*s/(t-e),c=2*s/(i-o),u=(t+e)/(t-e),f=(i+o)/(i-o);let _,g;if(r===ei)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===wa)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,o,s,a,r=ei){const l=this.elements,d=1/(t-e),c=1/(i-o),u=1/(a-s),f=(t+e)*d,_=(i+o)*c;let g,v;if(r===ei)g=(a+s)*u,v=-2*u;else if(r===wa)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ro=new U,Cn=new ft,Pf=new U(0,0,0),Df=new U(1,1,1),hi=new U,qs=new U,_n=new U,zc=new ft,Hc=new Ps;class Un{constructor(e=0,t=0,i=0,o=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,s=o[0],a=o[4],r=o[8],l=o[1],d=o[5],c=o[9],u=o[2],f=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-it(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,_),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,_));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-c,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let If=0;const Gc=new U,lo=new Ps,jn=new ft,$s=new U,Zo=new U,Uf=new U,Nf=new Ps,Vc=new U(1,0,0),Wc=new U(0,1,0),Xc=new U(0,0,1),qc={type:"added"},Ff={type:"removed"},co={type:"childadded",child:null},pr={type:"childremoved",child:null};class Nt extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new U,t=new Un,i=new Ps,o=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ft},normalMatrix:{value:new je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,t){return lo.setFromAxisAngle(e,t),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(Vc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Zo,$s,this.up):jn.lookAt($s,Zo,this.up),this.quaternion.setFromRotationMatrix(jn),o&&(jn.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(jn),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff),pr.child=e,this.dispatchEvent(pr),pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(r=>({...r})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const u=l[d];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,d=this.material.length;l<d;l++)r.push(s(e.materials,this.material[l]));o.material=r}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];o.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),u=a(e.shapes),f=a(e.skeletons),_=a(e.animations),g=a(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=o,i;function a(r){const l=[];for(const d in r){const c=r[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new U,Kn=new U,_r=new U,Zn=new U,uo=new U,ho=new U,$c=new U,mr=new U,gr=new U,br=new U,kr=new Tt,vr=new Tt,xr=new Tt;class kn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ln.subVectors(e,t),o.cross(Ln);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,t,i,o,s){Ln.subVectors(o,t),Kn.subVectors(i,t),_r.subVectors(e,t);const a=Ln.dot(Ln),r=Ln.dot(Kn),l=Ln.dot(_r),d=Kn.dot(Kn),c=Kn.dot(_r),u=a*d-r*r;if(u===0)return s.set(0,0,0),null;const f=1/u,_=(d*l-r*c)*f,g=(a*c-r*l)*f;return s.set(1-_-g,g,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,o,s,a,r,l){return this.getBarycoord(e,t,i,o,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(r,Zn.z),l)}static getInterpolatedAttribute(e,t,i,o,s,a){return kr.setScalar(0),vr.setScalar(0),xr.setScalar(0),kr.fromBufferAttribute(e,t),vr.fromBufferAttribute(e,i),xr.fromBufferAttribute(e,o),a.setScalar(0),a.addScaledVector(kr,s.x),a.addScaledVector(vr,s.y),a.addScaledVector(xr,s.z),a}static isFrontFacing(e,t,i,o){return Ln.subVectors(i,t),Kn.subVectors(e,t),Ln.cross(Kn).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Ln.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,o,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,s=this.c;let a,r;uo.subVectors(o,i),ho.subVectors(s,i),mr.subVectors(e,i);const l=uo.dot(mr),d=ho.dot(mr);if(l<=0&&d<=0)return t.copy(i);gr.subVectors(e,o);const c=uo.dot(gr),u=ho.dot(gr);if(c>=0&&u<=c)return t.copy(o);const f=l*u-c*d;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(uo,a);br.subVectors(e,s);const _=uo.dot(br),g=ho.dot(br);if(g>=0&&_<=g)return t.copy(s);const v=_*d-l*g;if(v<=0&&d>=0&&g<=0)return r=d/(d-g),t.copy(i).addScaledVector(ho,r);const m=c*g-_*u;if(m<=0&&u-c>=0&&_-g>=0)return $c.subVectors(s,o),r=(u-c)/(u-c+(_-g)),t.copy(o).addScaledVector($c,r);const p=1/(m+v+f);return a=v*p,r=f*p,t.copy(i).addScaledVector(uo,a).addScaledVector(ho,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function yr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=st.workingColorSpace){if(e=Jl(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=yr(a,s,e+1/3),this.g=yr(a,s,e),this.b=yr(a,s,e-1/3)}return st.colorSpaceToWorking(this,o),this}setStyle(e,t=Dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=o[1],r=o[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return st.workingToColorSpace(Jt.copy(this),e),Math.round(it(Jt.r*255,0,255))*65536+Math.round(it(Jt.g*255,0,255))*256+Math.round(it(Jt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,o=Jt.g,s=Jt.b,a=Math.max(i,o,s),r=Math.min(i,o,s);let l,d;const c=(r+a)/2;if(r===a)l=0,d=0;else{const u=a-r;switch(d=c<=.5?u/(a+r):u/(2-a-r),a){case i:l=(o-s)/u+(o<s?6:0);break;case o:l=(s-i)/u+2;break;case s:l=(i-o)/u+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Dt){st.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,o=Jt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Ys);const i=us(fi.h,Ys.h,t),o=us(fi.s,Ys.s,t),s=us(fi.l,Ys.l,t);return this.setHSL(i,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*o,this.g=s[1]*t+s[4]*i+s[7]*o,this.b=s[2]*t+s[5]*i+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=pu;let Of=0;class Ti extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=Ao,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==Mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Xr&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(i.stencilFail=this.stencilFail),this.stencilZFail!==no&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=o(e.textures),a=o(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vo extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new U,js=new We;let Bf=0;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),o=ht(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),o=ht(o,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}}class _u extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mu extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class on extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zf=0;const Sn=new ft,Mr=new Nt,fo=new U,mn=new Yi,Jo=new Yi,Ht=new U;class Mn extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hu(e)?mu:_u)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,s=e.length;o<s;o++){const a=e[o];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const s=e[o];t.setXYZ(o,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];Jo.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(mn.min,Jo.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,Jo.max),mn.expandByPoint(Ht)):(mn.expandByPoint(Jo.min),mn.expandByPoint(Jo.max))}mn.getCenter(i);let o=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),o=Math.max(o,i.distanceToSquared(Ht));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let d=0,c=r.count;d<c;d++)Ht.fromBufferAttribute(r,d),l&&(fo.fromBufferAttribute(e,d),Ht.add(fo)),o=Math.max(o,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let N=0;N<i.count;N++)r[N]=new U,l[N]=new U;const d=new U,c=new U,u=new U,f=new We,_=new We,g=new We,v=new U,m=new U;function p(N,S,M){d.fromBufferAttribute(i,N),c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,N),_.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),c.sub(d),u.sub(d),_.sub(f),g.sub(f);const D=1/(_.x*g.y-g.x*_.y);isFinite(D)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-_.y).multiplyScalar(D),m.copy(u).multiplyScalar(_.x).addScaledVector(c,-g.x).multiplyScalar(D),r[N].add(v),r[S].add(v),r[M].add(v),l[N].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,S=T.length;N<S;++N){const M=T[N],D=M.start,G=M.count;for(let H=D,$=D+G;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new U,E=new U,F=new U,P=new U;function L(N){F.fromBufferAttribute(o,N),P.copy(F);const S=r[N];A.copy(S),A.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(P,S);const D=E.dot(l[N])<0?-1:1;a.setXYZW(N,A.x,A.y,A.z,D)}for(let N=0,S=T.length;N<S;++N){const M=T[N],D=M.start,G=M.count;for(let H=D,$=D+G;H<$;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const o=new U,s=new U,a=new U,r=new U,l=new U,d=new U,c=new U,u=new U;if(e)for(let f=0,_=e.count;f<_;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,s),u.subVectors(o,s),c.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),d.fromBufferAttribute(i,m),r.add(c),l.add(c),d.add(c),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,_=t.count;f<_;f+=3)o.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),u.subVectors(o,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(r,l){const d=r.array,c=r.itemSize,u=r.normalized,f=new d.constructor(l.length*c);let _=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?_=l[v]*r.data.stride+r.offset:_=l[v]*c;for(let p=0;p<c;p++)f[g++]=d[_++]}return new vn(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,o=this.attributes;for(const r in o){const l=o[r],d=e(l,i);t.setAttribute(r,d)}const s=this.morphAttributes;for(const r in s){const l=[],d=s[r];for(let c=0,u=d.length;c<u;c++){const f=d[c],_=e(f,i);l.push(_)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const d=a[r];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const o={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let u=0,f=d.length;u<f;u++){const _=d[u];c.push(_.toJSON(e.data))}c.length>0&&(o[l]=c,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const c=o[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],u=s[d];for(let f=0,_=u.length;f<_;f++)c.push(u[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const u=a[d];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new ft,Li=new tc,Ks=new Go,jc=new U,Zs=new U,Js=new U,Qs=new U,Sr=new U,ea=new U,Kc=new U,ta=new U;class kt extends Nt{constructor(e=new Mn,t=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const r=this.morphTargetInfluences;if(s&&r){ea.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=r[l],u=s[l];c!==0&&(Sr.fromBufferAttribute(u,e),a?ea.addScaledVector(Sr,c):ea.addScaledVector(Sr.sub(t),c))}t.add(ea)}return t}raycast(e,t){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Ks.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ks,jc)===null||Li.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Yc.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Yc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let o;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,_=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,_.start),A=Math.min(r.count,Math.min(m.start+m.count,_.start+_.count));for(let E=T,F=A;E<F;E+=3){const P=r.getX(E),L=r.getX(E+1),N=r.getX(E+2);o=na(this,p,e,i,d,c,u,P,L,N),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),v=Math.min(r.count,_.start+_.count);for(let m=g,p=v;m<p;m+=3){const T=r.getX(m),A=r.getX(m+1),E=r.getX(m+2);o=na(this,a,e,i,d,c,u,T,A,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],T=Math.max(m.start,_.start),A=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let E=T,F=A;E<F;E+=3){const P=E,L=E+1,N=E+2;o=na(this,p,e,i,d,c,u,P,L,N),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let m=g,p=v;m<p;m+=3){const T=m,A=m+1,E=m+2;o=na(this,a,e,i,d,c,u,T,A,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Hf(n,e,t,i,o,s,a,r){let l;if(e.side===hn?l=i.intersectTriangle(a,s,o,!0,r):l=i.intersectTriangle(o,s,a,e.side===Mi,r),l===null)return null;ta.copy(r),ta.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(ta);return d<t.near||d>t.far?null:{distance:d,point:ta.clone(),object:n}}function na(n,e,t,i,o,s,a,r,l,d){n.getVertexPosition(r,Zs),n.getVertexPosition(l,Js),n.getVertexPosition(d,Qs);const c=Hf(n,e,t,i,Zs,Js,Qs,Kc);if(c){const u=new U;kn.getBarycoord(Kc,Zs,Js,Qs,u),o&&(c.uv=kn.getInterpolatedAttribute(o,r,l,d,u,new We)),s&&(c.uv1=kn.getInterpolatedAttribute(s,r,l,d,u,new We)),a&&(c.normal=kn.getInterpolatedAttribute(a,r,l,d,u,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:r,b:l,c:d,normal:new U,materialIndex:0};kn.getNormal(Zs,Js,Qs,f.normal),c.face=f,c.barycoord=u}return c}class Mt extends Mn{constructor(e=1,t=1,i=1,o=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:s,depthSegments:a};const r=this;o=Math.floor(o),s=Math.floor(s),a=Math.floor(a);const l=[],d=[],c=[],u=[];let f=0,_=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,o,a,2),g("x","z","y",1,-1,e,i,-t,o,a,3),g("x","y","z",1,-1,e,t,i,o,s,4),g("x","y","z",-1,-1,e,t,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(u,2));function g(v,m,p,T,A,E,F,P,L,N,S){const M=E/L,D=F/N,G=E/2,H=F/2,$=P/2,Z=L+1,q=N+1;let Q=0,W=0;const ce=new U;for(let _e=0;_e<q;_e++){const Ce=_e*D-H;for(let Ze=0;Ze<Z;Ze++){const ut=Ze*M-G;ce[v]=ut*T,ce[m]=Ce*A,ce[p]=$,d.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=P>0?1:-1,c.push(ce.x,ce.y,ce.z),u.push(Ze/L),u.push(1-_e/N),Q+=1}}for(let _e=0;_e<N;_e++)for(let Ce=0;Ce<L;Ce++){const Ze=f+Ce+Z*_e,ut=f+Ce+Z*(_e+1),Y=f+(Ce+1)+Z*(_e+1),se=f+(Ce+1)+Z*_e;l.push(Ze,ut,se),l.push(ut,Y,se),W+=6}r.addGroup(_,W,S),_+=W,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Fo(n[t]);for(const o in i)e[o]=i[o]}return e}function Gf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Vf={clone:Fo,merge:an};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?t.uniforms[o]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[o]={type:"m4",value:a.toArray()}:t.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bu extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new U,Zc=new We,Jc=new We;class gn extends bu{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,i,o,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,s=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;s+=a.offsetX*o/l,t-=a.offsetY*i/d,o*=a.width/l,i*=a.height/d}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const po=-90,_o=1;class qf extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gn(po,_o,e,t);o.layers=this.layers,this.add(o);const s=new gn(po,_o,e,t);s.layers=this.layers,this.add(s);const a=new gn(po,_o,e,t);a.layers=this.layers,this.add(a);const r=new gn(po,_o,e,t);r.layers=this.layers,this.add(r);const l=new gn(po,_o,e,t);l.layers=this.layers,this.add(l);const d=new gn(po,_o,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,s,a,r,l]=t;for(const d of t)this.remove(d);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,d,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,s),e.setRenderTarget(i,1,o),e.render(t,a),e.setRenderTarget(i,2,o),e.render(t,r),e.setRenderTarget(i,3,o),e.render(t,l),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,o),e.render(t,c),e.setRenderTarget(u,f,_),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ku extends Kt{constructor(e=[],t=Io,i,o,s,a,r,l,d,c){super(e,t,i,o,s,a,r,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $f extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new ku(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Mt(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ki});s.uniforms.tEquirect.value=t;const a=new kt(o,s),r=t.minFilter;return t.minFilter===zi&&(t.minFilter=Hn),new qf(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,o);e.setRenderTarget(s)}}class rn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,s=null,a=null;const r=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(d,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],f=c.position.distanceTo(u.position),_=.02,g=.005;d.inputState.pinching&&f>_+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=_-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return r!==null&&(r.visible=o!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class za{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vu extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,s=this.stride;o<s;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new U;class Ta{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),o=ht(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),o=ht(o,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return new vn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xu extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let mo;const Qo=new U,go=new U,bo=new U,ko=new We,es=new We,yu=new ft,ia=new U,ts=new U,oa=new U,Qc=new We,wr=new We,ed=new We;class Kf extends Nt{constructor(e=new xu){if(super(),this.isSprite=!0,this.type="Sprite",mo===void 0){mo=new Mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jf(t,5);mo.setIndex([0,1,2,0,2,3]),mo.setAttribute("position",new Ta(i,3,0,!1)),mo.setAttribute("uv",new Ta(i,2,3,!1))}this.geometry=mo,this.material=e,this.center=new We(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),go.setFromMatrixScale(this.matrixWorld),yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&go.multiplyScalar(-bo.z);const i=this.material.rotation;let o,s;i!==0&&(s=Math.cos(i),o=Math.sin(i));const a=this.center;sa(ia.set(-.5,-.5,0),bo,a,go,o,s),sa(ts.set(.5,-.5,0),bo,a,go,o,s),sa(oa.set(.5,.5,0),bo,a,go,o,s),Qc.set(0,0),wr.set(1,0),ed.set(1,1);let r=e.ray.intersectTriangle(ia,ts,oa,!1,Qo);if(r===null&&(sa(ts.set(-.5,.5,0),bo,a,go,o,s),wr.set(0,1),r=e.ray.intersectTriangle(ia,oa,ts,!1,Qo),r===null))return;const l=e.ray.origin.distanceTo(Qo);l<e.near||l>e.far||t.push({distance:l,point:Qo.clone(),uv:kn.getInterpolation(Qo,ia,ts,oa,Qc,wr,ed,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sa(n,e,t,i,o,s){ko.subVectors(n,t).addScalar(.5).multiply(i),o!==void 0?(es.x=s*ko.x-o*ko.y,es.y=o*ko.x+s*ko.y):es.copy(ko),n.copy(e),n.x+=es.x,n.y+=es.y,n.applyMatrix4(yu)}class Zf extends Kt{constructor(e=null,t=1,i=1,o,s,a,r,l,d=Ut,c=Ut,u,f){super(null,a,r,l,d,c,o,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class td extends vn{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vo=new ft,nd=new ft,aa=[],id=new Yi,Jf=new ft,ns=new kt,is=new Go;class Qf extends kt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new td(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,Jf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),id.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(id)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),is.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let r=0;r<i.length;r++)i[r]=o[a+r]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(i),e.ray.intersectsSphere(is)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,vo),nd.multiplyMatrices(i,vo),ns.matrixWorld=nd,ns.raycast(e,aa);for(let a=0,r=aa.length;a<r;a++){const l=aa[a];l.instanceId=s,l.object=this,t.push(l)}aa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new td(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zf(new Float32Array(o*this.count),o,this.count,$l,Gn));const s=this.morphTexture.source.data.data;let a=0;for(let d=0;d<i.length;d++)a+=i[d];const r=this.geometry.morphTargetsRelative?1:1-a,l=o*e;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tr=new U,ep=new U,tp=new je;class Ui{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Tr.subVectors(i,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Tr),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tp.getNormalMatrix(e),o=this.coplanarPoint(Tr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Go,np=new We(.5,.5),ra=new U;class ic{constructor(e=new Ui,t=new Ui,i=new Ui,o=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,i,o,s,a]}set(e,t,i,o,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(o),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,o=e.elements,s=o[0],a=o[1],r=o[2],l=o[3],d=o[4],c=o[5],u=o[6],f=o[7],_=o[8],g=o[9],v=o[10],m=o[11],p=o[12],T=o[13],A=o[14],E=o[15];if(i[0].setComponents(l-s,f-d,m-_,E-p).normalize(),i[1].setComponents(l+s,f+d,m+_,E+p).normalize(),i[2].setComponents(l+a,f+c,m+g,E+T).normalize(),i[3].setComponents(l-a,f-c,m-g,E-T).normalize(),i[4].setComponents(l-r,f-u,m-v,E-A).normalize(),t===ei)i[5].setComponents(l+r,f+u,m+v,E+A).normalize();else if(t===wa)i[5].setComponents(r,u,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=np.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(ra.x=o.normal.x>0?e.max.x:e.min.x,ra.y=o.normal.y>0?e.max.y:e.min.y,ra.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mu extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Aa=new U,Ra=new U,od=new ft,os=new tc,la=new Go,Ar=new U,sd=new U;class ip extends Nt{constructor(e=new Mn,t=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,s=t.count;o<s;o++)Aa.fromBufferAttribute(t,o-1),Ra.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Aa.distanceTo(Ra);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(o),la.radius+=s,e.ray.intersectsSphere(la)===!1)return;od.copy(o).invert(),os.copy(e.ray).applyMatrix4(od);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,d=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const _=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=_,m=g-1;v<m;v+=d){const p=c.getX(v),T=c.getX(v+1),A=ca(this,e,os,l,p,T,v);A&&t.push(A)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(_),p=ca(this,e,os,l,v,m,g-1);p&&t.push(p)}}else{const _=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=_,m=g-1;v<m;v+=d){const p=ca(this,e,os,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ca(this,e,os,l,g-1,_,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function ca(n,e,t,i,o,s,a){const r=n.geometry.attributes.position;if(Aa.fromBufferAttribute(r,o),Ra.fromBufferAttribute(r,s),t.distanceSqToSegment(Aa,Ra,Ar,sd)>i)return;Ar.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(Ar);if(!(d<e.near||d>e.far))return{distance:d,point:sd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const ad=new U,rd=new U;class op extends ip{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,s=t.count;o<s;o+=2)ad.fromBufferAttribute(t,o),rd.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+ad.distanceTo(rd);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oc extends Kt{constructor(e,t,i,o,s,a,r,l,d){super(e,t,i,o,s,a,r,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Su extends Kt{constructor(e,t,i=Wi,o,s,a,r=Ut,l=Ut,d,c=bs,u=1){if(c!==bs&&c!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,o,s,a,r,l,c,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ha extends Mn{constructor(e=1,t=1,i=1,o=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const d=this;o=Math.floor(o),s=Math.floor(s);const c=[],u=[],f=[],_=[];let g=0;const v=[],m=i/2;let p=0;T(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new on(u,3)),this.setAttribute("normal",new on(f,3)),this.setAttribute("uv",new on(_,2));function T(){const E=new U,F=new U;let P=0;const L=(t-e)/i;for(let N=0;N<=s;N++){const S=[],M=N/s,D=M*(t-e)+e;for(let G=0;G<=o;G++){const H=G/o,$=H*l+r,Z=Math.sin($),q=Math.cos($);F.x=D*Z,F.y=-M*i+m,F.z=D*q,u.push(F.x,F.y,F.z),E.set(Z,L,q).normalize(),f.push(E.x,E.y,E.z),_.push(H,1-M),S.push(g++)}v.push(S)}for(let N=0;N<o;N++)for(let S=0;S<s;S++){const M=v[S][N],D=v[S+1][N],G=v[S+1][N+1],H=v[S][N+1];(e>0||S!==0)&&(c.push(M,D,H),P+=3),(t>0||S!==s-1)&&(c.push(D,G,H),P+=3)}d.addGroup(p,P,0),p+=P}function A(E){const F=g,P=new We,L=new U;let N=0;const S=E===!0?e:t,M=E===!0?1:-1;for(let G=1;G<=o;G++)u.push(0,m*M,0),f.push(0,M,0),_.push(.5,.5),g++;const D=g;for(let G=0;G<=o;G++){const $=G/o*l+r,Z=Math.cos($),q=Math.sin($);L.x=S*q,L.y=m*M,L.z=S*Z,u.push(L.x,L.y,L.z),f.push(0,M,0),P.x=Z*.5+.5,P.y=q*.5*M+.5,_.push(P.x,P.y),g++}for(let G=0;G<o;G++){const H=F+G,$=D+G;E===!0?c.push($,$+1,H):c.push($+1,$,H),N+=3}d.addGroup(p,N,E===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends Ha{constructor(e=1,t=1,i=32,o=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,i,o,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const da=new U,ua=new U,Rr=new U,ha=new kn;class sp extends Mn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),s=Math.cos(Ro*t),a=e.getIndex(),r=e.getAttribute("position"),l=a?a.count:r.count,d=[0,0,0],c=["a","b","c"],u=new Array(3),f={},_=[];for(let g=0;g<l;g+=3){a?(d[0]=a.getX(g),d[1]=a.getX(g+1),d[2]=a.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:v,b:m,c:p}=ha;if(v.fromBufferAttribute(r,d[0]),m.fromBufferAttribute(r,d[1]),p.fromBufferAttribute(r,d[2]),ha.getNormal(Rr),u[0]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,u[1]=`${Math.round(m.x*o)},${Math.round(m.y*o)},${Math.round(m.z*o)}`,u[2]=`${Math.round(p.x*o)},${Math.round(p.y*o)},${Math.round(p.z*o)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const A=(T+1)%3,E=u[T],F=u[A],P=ha[c[T]],L=ha[c[A]],N=`${E}_${F}`,S=`${F}_${E}`;S in f&&f[S]?(Rr.dot(f[S].normal)<=s&&(_.push(P.x,P.y,P.z),_.push(L.x,L.y,L.z)),f[S]=null):N in f||(f[N]={index0:d[T],index1:d[A],normal:Rr.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];da.fromBufferAttribute(r,v),ua.fromBufferAttribute(r,m),_.push(da.x,da.y,da.z),_.push(ua.x,ua.y,ua.z)}this.setAttribute("position",new on(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ds extends Mn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const s=e/2,a=t/2,r=Math.floor(i),l=Math.floor(o),d=r+1,c=l+1,u=e/r,f=t/l,_=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const T=p*f-a;for(let A=0;A<d;A++){const E=A*u-s;g.push(E,-T,0),v.push(0,0,1),m.push(A/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<r;T++){const A=T+d*p,E=T+d*(p+1),F=T+1+d*(p+1),P=T+1+d*p;_.push(A,E,P),_.push(E,F,P)}this.setIndex(_),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(v,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ca extends Mn{constructor(e=1,t=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const a=[],r=[],l=[],d=[],c=new U,u=new U,f=new U;for(let _=0;_<=i;_++)for(let g=0;g<=o;g++){const v=g/o*s,m=_/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),d.push(g/o),d.push(_/i)}for(let _=1;_<=i;_++)for(let g=1;g<=o;g++){const v=(o+1)*_+g-1,m=(o+1)*(_-1)+g-1,p=(o+1)*(_-1)+g,T=(o+1)*_+g;a.push(v,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new on(r,3)),this.setAttribute("normal",new on(l,3)),this.setAttribute("uv",new on(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rs extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gi extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ap extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lp{constructor(e,t,i){const o=this;let s=!1,a=0,r=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){r++,s===!1&&o.onStart!==void 0&&o.onStart(c,a,r),s=!0},this.itemEnd=function(c){a++,o.onProgress!==void 0&&o.onProgress(c,a,r),a===r&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(c){o.onError!==void 0&&o.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return d.push(c,u),this},this.removeHandler=function(c){const u=d.indexOf(c);return u!==-1&&d.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=d.length;u<f;u+=2){const _=d[u],g=d[u+1];if(_.global&&(_.lastIndex=0),_.test(c))return g}return null}}}const cp=new lp;class ac{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,s){i.load(e,o,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ac.DEFAULT_MATERIAL_NAME="__DEFAULT";const xo=new WeakMap;class dp extends ac{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=xo.get(a);u===void 0&&(u=[],xo.set(a,u)),u.push({onLoad:t,onError:o})}return a}const r=xs("img");function l(){c(),t&&t(this);const u=xo.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onLoad&&_.onLoad(this)}xo.delete(this),s.manager.itemEnd(e)}function d(u){c(),o&&o(u),Cr.remove(`image:${e}`);const f=xo.get(this)||[];for(let _=0;_<f.length;_++){const g=f[_];g.onError&&g.onError(u)}xo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){r.removeEventListener("load",l,!1),r.removeEventListener("error",d,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,r),s.manager.itemStart(e),r.src=e,r}}class Eu extends ac{constructor(e){super(e)}load(e,t,i,o){const s=new Kt,a=new dp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},i,o),s}}class wu extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tu extends wu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Lr=new ft,ld=new U,cd=new U;class up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),Lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Au extends bu{constructor(e=-1,t=1,i=1,o=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-e,a=i+e,r=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,r-=c*this.view.offsetY,l=r-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hp extends up{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends wu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new hp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fp extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dd=new ft;class _p{constructor(e,t,i=0,o=1/0){this.ray=new tc(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(e,t=!0,i=[]){return Ll(e,this,i,t),i.sort(ud),i}intersectObjects(e,t=!0,i=[]){for(let o=0,s=e.length;o<s;o++)Ll(e[o],this,i,t);return i.sort(ud),i}}function ud(n,e){return n.distance-e.distance}function Ll(n,e,t,i){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const s=n.children;for(let a=0,r=s.length;a<r;a++)Ll(s[a],e,t,!0)}}function hd(n,e,t,i){const o=mp(i);switch(t){case ru:return n*e;case $l:return n*e/o.components*o.byteLength;case Yl:return n*e/o.components*o.byteLength;case cu:return n*e*2/o.components*o.byteLength;case jl:return n*e*2/o.components*o.byteLength;case lu:return n*e*3/o.components*o.byteLength;case Dn:return n*e*4/o.components*o.byteLength;case Kl:return n*e*4/o.components*o.byteLength;case ga:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case al:return Math.max(n,16)*Math.max(e,8)/4;case il:case sl:return Math.max(n,8)*Math.max(e,8)/2;case rl:case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xa:case Sl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16;case du:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mp(n){switch(n){case Vn:case ou:return{byteLength:1,components:1};case ms:case su:case Ls:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Wi:case Wl:case Gn:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);function Ru(){let n=null,e=!1,t=null,i=null;function o(s,a){t(s,a),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gp(n){const e=new WeakMap;function t(r,l){const d=r.array,c=r.usage,u=d.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,d,c),r.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=n.HALF_FLOAT;else if(d instanceof Uint16Array)r.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,d){const c=l.array,u=l.updateRanges;if(n.bindBuffer(d,r),u.length===0)n.bufferSubData(d,0,c);else{u.sort((_,g)=>_.start-g.start);let f=0;for(let _=1;_<u.length;_++){const g=u[f],v=u[_];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let _=0,g=u.length;_<g;_++){const v=u[_];n.bufferSubData(d,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const c=e.get(r);(!c||c.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const d=e.get(r);if(d===void 0)e.set(r,t(r,l));else if(d.version<r.version){if(d.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,r,l),d.version=r.version}}return{get:o,remove:s,update:a}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:bp,alphahash_pars_fragment:kp,alphamap_fragment:vp,alphamap_pars_fragment:xp,alphatest_fragment:yp,alphatest_pars_fragment:Mp,aomap_fragment:Sp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Lp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:zp,common:Hp,cube_uv_reflection_fragment:Gp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:qp,emissivemap_pars_fragment:$p,colorspace_fragment:Yp,colorspace_pars_fragment:jp,envmap_fragment:Kp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:d_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:o_,gradientmap_pars_fragment:s_,lightmap_pars_fragment:a_,lights_lambert_fragment:r_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:h_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:__,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:b_,lights_fragment_end:k_,logdepthbuf_fragment:v_,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:M_,map_fragment:S_,map_pars_fragment:E_,map_particle_fragment:w_,map_particle_pars_fragment:T_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:R_,morphinstance_vertex:C_,morphcolor_vertex:L_,morphnormal_vertex:P_,morphtarget_pars_vertex:D_,morphtarget_vertex:I_,normal_fragment_begin:U_,normal_fragment_maps:N_,normal_pars_fragment:F_,normal_pars_vertex:O_,normal_vertex:B_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:q_,premultiplied_alpha_fragment:$_,project_vertex:Y_,dithering_fragment:j_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:J_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:o0,skinning_vertex:s0,skinnormal_vertex:a0,specularmap_fragment:r0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:d0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:_0,worldpos_vertex:m0,background_vert:g0,background_frag:b0,backgroundCube_vert:k0,backgroundCube_frag:v0,cube_vert:x0,cube_frag:y0,depth_vert:M0,depth_frag:S0,distanceRGBA_vert:E0,distanceRGBA_frag:w0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:L0,meshbasic_frag:P0,meshlambert_vert:D0,meshlambert_frag:I0,meshmatcap_vert:U0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:H0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:q0,shadow_vert:$0,shadow_frag:Y0,sprite_vert:j0,sprite_frag:K0},fe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},On={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};On.physical={uniforms:an([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const fa={r:0,b:0,g:0},Di=new Un,Z0=new ft;function J0(n,e,t,i,o,s,a){const r=new Ke(0);let l=s===!0?0:1,d,c,u=null,f=0,_=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const F=g(A);F===null?p(r,l):F&&F.isColor&&(p(F,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,E){const F=g(E);F&&(F.isCubeTexture||F.mapping===Ba)?(c===void 0&&(c=new kt(new Mt(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Fo(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),Di.copy(E.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),c.material.uniforms.envMap.value=F,c.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Di)),c.material.toneMapped=st.getTransfer(F.colorSpace)!==pt,(u!==F||f!==F.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,u=F,f=F.version,_=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):F&&F.isTexture&&(d===void 0&&(d=new kt(new Ds(2,2),new Si({name:"BackgroundMaterial",uniforms:Fo(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=F,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.toneMapped=st.getTransfer(F.colorSpace)!==pt,F.matrixAutoUpdate===!0&&F.updateMatrix(),d.material.uniforms.uvTransform.value.copy(F.matrix),(u!==F||f!==F.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,u=F,f=F.version,_=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function p(A,E){A.getRGB(fa,gu(n)),i.buffers.color.setClear(fa.r,fa.g,fa.b,E,a)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,E=1){r.set(A),l=E,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(r,l)},render:v,addToRenderList:m,dispose:T}}function Q0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=f(null);let s=o,a=!1;function r(M,D,G,H,$){let Z=!1;const q=u(H,G,D);s!==q&&(s=q,d(s.object)),Z=_(M,H,G,$),Z&&g(M,H,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,E(M,D,G,H),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function d(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function u(M,D,G){const H=G.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[D.id];Z===void 0&&(Z={},$[D.id]=Z);let q=Z[H];return q===void 0&&(q=f(l()),Z[H]=q),q}function f(M){const D=[],G=[],H=[];for(let $=0;$<t;$++)D[$]=0,G[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:H,object:M,attributes:{},index:null}}function _(M,D,G,H){const $=s.attributes,Z=D.attributes;let q=0;const Q=G.getAttributes();for(const W in Q)if(Q[W].location>=0){const _e=$[W];let Ce=Z[W];if(Ce===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),_e===void 0||_e.attribute!==Ce||Ce&&_e.data!==Ce.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function g(M,D,G,H){const $={},Z=D.attributes;let q=0;const Q=G.getAttributes();for(const W in Q)if(Q[W].location>=0){let _e=Z[W];_e===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Ce={};Ce.attribute=_e,_e&&_e.data&&(Ce.data=_e.data),$[W]=Ce,q++}s.attributes=$,s.attributesNum=q,s.index=H}function v(){const M=s.newAttributes;for(let D=0,G=M.length;D<G;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const G=s.newAttributes,H=s.enabledAttributes,$=s.attributeDivisors;G[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),$[M]!==D&&(n.vertexAttribDivisor(M,D),$[M]=D)}function T(){const M=s.newAttributes,D=s.enabledAttributes;for(let G=0,H=D.length;G<H;G++)D[G]!==M[G]&&(n.disableVertexAttribArray(G),D[G]=0)}function A(M,D,G,H,$,Z,q){q===!0?n.vertexAttribIPointer(M,D,G,$,Z):n.vertexAttribPointer(M,D,G,H,$,Z)}function E(M,D,G,H){v();const $=H.attributes,Z=G.getAttributes(),q=D.defaultAttributeValues;for(const Q in Z){const W=Z[Q];if(W.location>=0){let ce=$[Q];if(ce===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const _e=ce.normalized,Ce=ce.itemSize,Ze=e.get(ce);if(Ze===void 0)continue;const ut=Ze.buffer,Y=Ze.type,se=Ze.bytesPerElement,Ae=Y===n.INT||Y===n.UNSIGNED_INT||ce.gpuType===Wl;if(ce.isInterleavedBufferAttribute){const pe=ce.data,re=pe.stride,de=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)p(W.location+Le,pe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Le=0;Le<W.locationSize;Le++)m(W.location+Le);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let Le=0;Le<W.locationSize;Le++)A(W.location+Le,Ce/W.locationSize,Y,_e,re*se,(de+Ce/W.locationSize*Le)*se,Ae)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)p(W.location+pe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<W.locationSize;pe++)m(W.location+pe);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let pe=0;pe<W.locationSize;pe++)A(W.location+pe,Ce/W.locationSize,Y,_e,Ce*se,Ce/W.locationSize*pe*se,Ae)}}else if(q!==void 0){const _e=q[Q];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(W.location,_e);break;case 3:n.vertexAttrib3fv(W.location,_e);break;case 4:n.vertexAttrib4fv(W.location,_e);break;default:n.vertexAttrib1fv(W.location,_e)}}}}T()}function F(){N();for(const M in i){const D=i[M];for(const G in D){const H=D[G];for(const $ in H)c(H[$].object),delete H[$];delete D[G]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const G in D){const H=D[G];for(const $ in H)c(H[$].object),delete H[$];delete D[G]}delete i[M.id]}function L(M){for(const D in i){const G=i[D];if(G[M.id]===void 0)continue;const H=G[M.id];for(const $ in H)c(H[$].object),delete H[$];delete G[M.id]}}function N(){S(),a=!0,s!==o&&(s=o,d(s.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:r,reset:N,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function em(n,e,t){let i;function o(d){i=d}function s(d,c){n.drawArrays(i,d,c),t.update(c,i,1)}function a(d,c,u){u!==0&&(n.drawArraysInstanced(i,d,c,u),t.update(c,i,u))}function r(d,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,c,0,u);let _=0;for(let g=0;g<u;g++)_+=c[g];t.update(_,i,1)}function l(d,c,u,f){if(u===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)a(d[g],c[g],f[g]);else{_.multiDrawArraysInstancedWEBGL(i,d,0,c,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*f[v];t.update(g,i,1)}}this.setMode=o,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function tm(n,e,t,i){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(L){return!(L!==Dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(L){const N=L===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Vn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Gn&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const c=l(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:d,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:F,maxSamples:P}}function nm(n){const e=this;let t=null,i=0,o=!1,s=!1;const a=new Ui,r=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||i!==0||o;return o=f,i=u.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,_){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!o||g===null||g.length===0||s&&!m)s?c(null):d();else{const T=s?0:i,A=T*4;let E=p.clippingState||null;l.value=E,E=c(g,f,A,_);for(let F=0;F!==A;++F)E[F]=t[F];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,f,_,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=_+v*4,T=f.matrixWorldInverse;r.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,E=_;A!==v;++A,E+=4)a.copy(u[A]).applyMatrix4(T,r),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function im(n){let e=new WeakMap;function t(a,r){return r===Qr?a.mapping=Io:r===el&&(a.mapping=Uo),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===Qr||r===el)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=new $f(l.height);return d.fromEquirectangularTexture(n,a),e.set(a,d),a.addEventListener("dispose",o),t(d.texture,a.mapping)}else return null}}return a}function o(a){const r=a.target;r.removeEventListener("dispose",o);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Eo=4,fd=[.125,.215,.35,.446,.526,.582],Oi=20,Pr=new Au,pd=new Ke;let Dr=null,Ir=0,Ur=0,Nr=!1;const Ni=(1+Math.sqrt(5))/2,yo=1/Ni,_d=[new U(-Ni,yo,0),new U(Ni,yo,0),new U(-yo,0,Ni),new U(yo,0,Ni),new U(0,Ni,-yo),new U(0,Ni,yo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],om=new U;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,s={}){const{size:a=256,position:r=om}=s;Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Ir,Ur),this._renderer.xr.enabled=Nr,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ls,format:Dn,colorSpace:No,depthBuffer:!1},o=gd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=am(s,e,t)}return o}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Pr)}_sceneToCubeUV(e,t,i,o,s){const l=new gn(90,1,t,i),d=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,_=u.toneMapping;u.getClearColor(pd),u.toneMapping=vi,u.autoClear=!1;const g=new Vo({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new kt(new Mt,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(pd),m=!0);for(let T=0;T<6;T++){const A=T%3;A===0?(l.up.set(0,d[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[T],s.y,s.z)):A===1?(l.up.set(0,0,d[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[T],s.z)):(l.up.set(0,d[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[T]));const E=this._cubeSize;pa(o,A*E,T>2?E:0,E,E),u.setRenderTarget(o),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=_,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Io||e.mapping===Uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const s=o?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=_d[(o-s-1)%_d.length];this._blur(e,s-1,s,a,r)}t.autoClear=i}_blur(e,t,i,o,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,o,"latitudinal",s),this._halfBlur(a,e,i,i,o,"longitudinal",s)}_halfBlur(e,t,i,o,s,a,r){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new kt(this._lodPlanes[o],d),f=d.uniforms,_=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Oi-1),v=s/g,m=isFinite(s)?1+Math.floor(c*v):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let T=0;for(let L=0;L<Oi;++L){const N=L/v,S=Math.exp(-N*N/2);p.push(S),L===0?T+=S:L<m&&(T+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const E=this._sizeLods[o],F=3*E*(o>A-Eo?o-A+Eo:0),P=4*(this._cubeSize-E);pa(t,F,P,3*E,2*E),l.setRenderTarget(t),l.render(u,Pr)}}function sm(n){const e=[],t=[],i=[];let o=n;const s=n-Eo+1+fd.length;for(let a=0;a<s;a++){const r=Math.pow(2,o);t.push(r);let l=1/r;a>n-Eo?l=fd[a-n+Eo-1]:a===0&&(l=0),i.push(l);const d=1/(r-2),c=-d,u=1+d,f=[c,c,u,c,u,u,c,c,u,u,c,u],_=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*_),A=new Float32Array(m*g*_),E=new Float32Array(p*g*_);for(let P=0;P<_;P++){const L=P%3*2/3-1,N=P>2?0:-1,S=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];T.set(S,v*g*P),A.set(f,m*g*P);const M=[P,P,P,P,P,P];E.set(M,p*g*P)}const F=new Mn;F.setAttribute("position",new vn(T,v)),F.setAttribute("uv",new vn(A,m)),F.setAttribute("faceIndex",new vn(E,p)),e.push(F),o>Eo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gd(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function am(n,e,t){const i=new Float32Array(Oi),o=new U(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function bd(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function kd(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rm(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,d=l===Qr||l===el,c=l===Io||l===Uo;if(d||c){let u=e.get(r);const f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new md(n)),u=d?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const _=r.image;return d&&_&&_.height>0||c&&_&&o(_)?(t===null&&(t=new md(n)),u=d?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function o(r){let l=0;const d=6;for(let c=0;c<d;c++)r[c]!==void 0&&l++;return l===d}function s(r){const l=r.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function lm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Co("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function cm(n,e,t,i){const o={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete o[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return o[f.id]===!0||(f.addEventListener("dispose",a),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER)}function d(u){const f=[],_=u.index,g=u.attributes.position;let v=0;if(_!==null){const T=_.array;v=_.version;for(let A=0,E=T.length;A<E;A+=3){const F=T[A+0],P=T[A+1],L=T[A+2];f.push(F,P,P,L,L,F)}}else if(g!==void 0){const T=g.array;v=g.version;for(let A=0,E=T.length/3-1;A<E;A+=3){const F=A+0,P=A+1,L=A+2;f.push(F,P,P,L,L,F)}}else return;const m=new(hu(f)?mu:_u)(f,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function c(u){const f=s.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&d(u)}else d(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:c}}function dm(n,e,t){let i;function o(f){i=f}let s,a;function r(f){s=f.type,a=f.bytesPerElement}function l(f,_){n.drawElements(i,_,s,f*a),t.update(_,i,1)}function d(f,_,g){g!==0&&(n.drawElementsInstanced(i,_,s,f*a,g),t.update(_,i,g))}function c(f,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=_[p];t.update(m,i,1)}function u(f,_,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)d(f[p]/a,_[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,f,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=_[T]*v[T];t.update(p,i,1)}}this.setMode=o,this.setIndex=r,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function um(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function hm(n,e,t){const i=new WeakMap,o=new Tt;function s(a,r,l){const d=a.morphTargetInfluences,c=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=c!==void 0?c.length:0;let f=i.get(r);if(f===void 0||f.count!==u){let M=function(){N.dispose(),i.delete(r),r.removeEventListener("dispose",M)};var _=M;f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],T=r.morphAttributes.normal||[],A=r.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let F=r.attributes.position.count*E,P=1;F>e.maxTextureSize&&(P=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*P*4*u),N=new fu(L,F,P,u);N.type=Gn,N.needsUpdate=!0;const S=E*4;for(let D=0;D<u;D++){const G=p[D],H=T[D],$=A[D],Z=F*P*4*D;for(let q=0;q<G.count;q++){const Q=q*S;g===!0&&(o.fromBufferAttribute(G,q),L[Z+Q+0]=o.x,L[Z+Q+1]=o.y,L[Z+Q+2]=o.z,L[Z+Q+3]=0),v===!0&&(o.fromBufferAttribute(H,q),L[Z+Q+4]=o.x,L[Z+Q+5]=o.y,L[Z+Q+6]=o.z,L[Z+Q+7]=0),m===!0&&(o.fromBufferAttribute($,q),L[Z+Q+8]=o.x,L[Z+Q+9]=o.y,L[Z+Q+10]=o.z,L[Z+Q+11]=$.itemSize===4?o.w:1)}}f={count:u,texture:N,size:new We(F,P)},i.set(r,f),r.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function fm(n,e,t,i){let o=new WeakMap;function s(l){const d=i.render.frame,c=l.geometry,u=e.get(l,c);if(o.get(u)!==d&&(e.update(u),o.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),o.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==d&&(f.update(),o.set(f,d))}return u}function a(){o=new WeakMap}function r(l){const d=l.target;d.removeEventListener("dispose",r),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:a}}const Cu=new Kt,vd=new Su(1,1),Lu=new fu,Pu=new Cf,Du=new ku,xd=[],yd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function Wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let s=xd[o];if(s===void 0&&(s=new Float32Array(o),xd[o]=s),e!==0){i.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,n[a].toArray(s,r)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function bm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Ed.set(i),n.uniformMatrix2fv(this.addr,!1,Ed),Ot(t,i)}}function km(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Sd.set(i),n.uniformMatrix3fv(this.addr,!1,Sd),Ot(t,i)}}function vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Md.set(i),n.uniformMatrix4fv(this.addr,!1,Md),Ot(t,i)}}function xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function Rm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(vd.compareFunction=uu,s=vd):s=Cu,t.setTexture2D(e||s,o)}function Cm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Pu,o)}function Lm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Du,o)}function Pm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Lu,o)}function Dm(n){switch(n){case 5126:return pm;case 35664:return _m;case 35665:return mm;case 35666:return gm;case 35674:return bm;case 35675:return km;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return wm;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Im(n,e){n.uniform1fv(this.addr,e)}function Um(n,e){const t=Wo(e,this.size,2);n.uniform2fv(this.addr,t)}function Nm(n,e){const t=Wo(e,this.size,3);n.uniform3fv(this.addr,t)}function Fm(n,e){const t=Wo(e,this.size,4);n.uniform4fv(this.addr,t)}function Om(n,e){const t=Wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bm(n,e){const t=Wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zm(n,e){const t=Wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hm(n,e){n.uniform1iv(this.addr,e)}function Gm(n,e){n.uniform2iv(this.addr,e)}function Vm(n,e){n.uniform3iv(this.addr,e)}function Wm(n,e){n.uniform4iv(this.addr,e)}function Xm(n,e){n.uniform1uiv(this.addr,e)}function qm(n,e){n.uniform2uiv(this.addr,e)}function $m(n,e){n.uniform3uiv(this.addr,e)}function Ym(n,e){n.uniform4uiv(this.addr,e)}function jm(n,e,t){const i=this.cache,o=e.length,s=Ga(t,o);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==o;++a)t.setTexture2D(e[a]||Cu,s[a])}function Km(n,e,t){const i=this.cache,o=e.length,s=Ga(t,o);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==o;++a)t.setTexture3D(e[a]||Pu,s[a])}function Zm(n,e,t){const i=this.cache,o=e.length,s=Ga(t,o);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==o;++a)t.setTextureCube(e[a]||Du,s[a])}function Jm(n,e,t){const i=this.cache,o=e.length,s=Ga(t,o);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==o;++a)t.setTexture2DArray(e[a]||Lu,s[a])}function Qm(n){switch(n){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return $m;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class e1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dm(t.type)}}class t1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class n1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let s=0,a=o.length;s!==a;++s){const r=o[s];r.setValue(e,t[r.id],i)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function wd(n,e){n.seq.push(e),n.map[e.id]=e}function i1(n,e,t){const i=n.name,o=i.length;for(Fr.lastIndex=0;;){const s=Fr.exec(i),a=Fr.lastIndex;let r=s[1];const l=s[2]==="]",d=s[3];if(l&&(r=r|0),d===void 0||d==="["&&a+2===o){wd(t,d===void 0?new e1(r,n,e):new t1(r,n,e));break}else{let u=t.map[r];u===void 0&&(u=new n1(r),wd(t,u)),t=u}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=e.getActiveUniform(t,o),a=e.getUniformLocation(t,s.name);i1(s,a,this)}}setValue(e,t,i,o){const s=this.map[t];s!==void 0&&s.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,s=e.length;o!==s;++o){const a=e[o];a.id in t&&i.push(a)}return i}}function Td(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o1=37297;let s1=0;function a1(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=o;a<s;a++){const r=a+1;i.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return i.join(`
`)}const Ad=new je;function r1(n){st._getMatrix(Ad,st.workingColorSpace,n);const e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Ea:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+a1(n.getShaderSource(e),a)}else return o}function l1(n,e){const t=r1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c1(n,e){let t;switch(e){case Gh:t="Linear";break;case Vh:t="Reinhard";break;case Wh:t="Cineon";break;case nu:t="ACESFilmic";break;case qh:t="AgX";break;case $h:t="Neutral";break;case Xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new U;function d1(){st.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function h1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function f1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(e,o),a=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:r}}return t}function ls(n){return n!==""}function Cd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ld(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(n){return n.replace(p1,m1)}const _1=new Map;function m1(n,e){let t=Qe[e];if(t===void 0){const i=_1.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(n){return n.replace(g1,b1)}function b1(n,e,t,i){let o="";for(let s=parseInt(e);s<parseInt(t);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function Dd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function v1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Uo&&(e="ENVMAP_MODE_REFRACTION"),e}function y1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case zh:e="ENVMAP_BLENDING_MIX";break;case Hh:e="ENVMAP_BLENDING_ADD";break}return e}function M1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S1(n,e,t,i){const o=n.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=k1(t),d=v1(t),c=x1(t),u=y1(t),f=M1(t),_=u1(t),g=h1(s),v=o.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),p=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==vi?c1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,l1("linearToOutputTexel",t.outputColorSpace),d1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Pl(a),a=Cd(a,t),a=Ld(a,t),r=Pl(r),r=Cd(r,t),r=Ld(r,t),a=Pd(a),r=Pd(r),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=T+m+a,E=T+p+r,F=Td(o,o.VERTEX_SHADER,A),P=Td(o,o.FRAGMENT_SHADER,E);o.attachShader(v,F),o.attachShader(v,P),t.index0AttributeName!==void 0?o.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(v,0,"position"),o.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const G=o.getProgramInfoLog(v).trim(),H=o.getShaderInfoLog(F).trim(),$=o.getShaderInfoLog(P).trim();let Z=!0,q=!0;if(o.getProgramParameter(v,o.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,v,F,P);else{const Q=Rd(o,F,"vertex"),W=Rd(o,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(v,o.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+Q+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||$==="")&&(q=!1);q&&(D.diagnostics={runnable:Z,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}o.deleteShader(F),o.deleteShader(P),N=new ya(o,v),S=f1(o,v)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(v,o1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=P,this}let E1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new T1(e),t.set(e,i)),i}}class T1{constructor(e){this.id=E1++,this.code=e,this.usedTimes=0}}function A1(n,e,t,i,o,s,a){const r=new nc,l=new w1,d=new Set,c=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let _=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return d.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,G,H){const $=G.fog,Z=H.geometry,q=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),W=Q&&Q.mapping===Ba?Q.image.height:null,ce=g[S.type];S.precision!==null&&(_=o.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ce=_e!==void 0?_e.length:0;let Ze=0;Z.morphAttributes.position!==void 0&&(Ze=1),Z.morphAttributes.normal!==void 0&&(Ze=2),Z.morphAttributes.color!==void 0&&(Ze=3);let ut,Y,se,Ae;if(ce){const rt=On[ce];ut=rt.vertexShader,Y=rt.fragmentShader}else ut=S.vertexShader,Y=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),Ae=l.getFragmentShaderID(S);const pe=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),de=H.isInstancedMesh===!0,Le=H.isBatchedMesh===!0,Xe=!!S.map,Ge=!!S.matcap,De=!!Q,C=!!S.aoMap,vt=!!S.lightMap,et=!!S.bumpMap,Ye=!!S.normalMap,Ee=!!S.displacementMap,tt=!!S.emissiveMap,Pe=!!S.metalnessMap,Fe=!!S.roughnessMap,gt=S.anisotropy>0,x=S.clearcoat>0,b=S.dispersion>0,B=S.iridescence>0,X=S.sheen>0,J=S.transmission>0,V=gt&&!!S.anisotropyMap,Se=x&&!!S.clearcoatMap,ue=x&&!!S.clearcoatNormalMap,xe=x&&!!S.clearcoatRoughnessMap,we=B&&!!S.iridescenceMap,ee=B&&!!S.iridescenceThicknessMap,me=X&&!!S.sheenColorMap,Oe=X&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,le=!!S.specularColorMap,Ne=!!S.specularIntensityMap,I=J&&!!S.transmissionMap,he=J&&!!S.thicknessMap,te=!!S.gradientMap,ke=!!S.alphaMap,ne=S.alphaTest>0,K=!!S.alphaHash,ye=!!S.extensions;let Ve=vi;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const _t={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:ut,fragmentShader:Y,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Le,batchingColor:Le&&H._colorsTexture!==null,instancing:de,instancingColor:de&&H.instanceColor!==null,instancingMorph:de&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:No,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Ge,envMap:De,envMapMode:De&&Q.mapping,envMapCubeUVHeight:W,aoMap:C,lightMap:vt,bumpMap:et,normalMap:Ye,displacementMap:f&&Ee,emissiveMap:tt,normalMapObjectSpace:Ye&&S.normalMapType===Kh,normalMapTangentSpace:Ye&&S.normalMapType===Zl,metalnessMap:Pe,roughnessMap:Fe,anisotropy:gt,anisotropyMap:V,clearcoat:x,clearcoatMap:Se,clearcoatNormalMap:ue,clearcoatRoughnessMap:xe,dispersion:b,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:ee,sheen:X,sheenColorMap:me,sheenRoughnessMap:Oe,specularMap:Ue,specularColorMap:le,specularIntensityMap:Ne,transmission:J,transmissionMap:I,thicknessMap:he,gradientMap:te,opaque:S.transparent===!1&&S.blending===Ao&&S.alphaToCoverage===!1,alphaMap:ke,alphaTest:ne,alphaHash:K,combine:S.combine,mapUv:Xe&&v(S.map.channel),aoMapUv:C&&v(S.aoMap.channel),lightMapUv:vt&&v(S.lightMap.channel),bumpMapUv:et&&v(S.bumpMap.channel),normalMapUv:Ye&&v(S.normalMap.channel),displacementMapUv:Ee&&v(S.displacementMap.channel),emissiveMapUv:tt&&v(S.emissiveMap.channel),metalnessMapUv:Pe&&v(S.metalnessMap.channel),roughnessMapUv:Fe&&v(S.roughnessMap.channel),anisotropyMapUv:V&&v(S.anisotropyMap.channel),clearcoatMapUv:Se&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ue&&v(S.specularMap.channel),specularColorMapUv:le&&v(S.specularColorMap.channel),specularIntensityMapUv:Ne&&v(S.specularIntensityMap.channel),transmissionMapUv:I&&v(S.transmissionMap.channel),thicknessMapUv:he&&v(S.thicknessMap.channel),alphaMapUv:ke&&v(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ye||gt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Xe||ke),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=d.has(1),_t.vertexUv2s=d.has(2),_t.vertexUv3s=d.has(3),d.clear(),_t}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(T(M,S),A(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),M.gradientMap&&r.enable(22),S.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reverseDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),S.push(r.mask)}function E(S){const M=g[S.type];let D;if(M){const G=On[M];D=Vf.clone(G.uniforms)}else D=S.uniforms;return D}function F(S,M){let D;for(let G=0,H=c.length;G<H;G++){const $=c[G];if($.cacheKey===M){D=$,++D.usedTimes;break}}return D===void 0&&(D=new S1(n,M,S,s),c.push(D)),D}function P(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:N}}function R1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let r=n.get(a);return r===void 0&&(r={},n.set(a,r)),r}function i(a){n.delete(a)}function o(a,r,l){n.get(a)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:s}}function C1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Id(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ud(){const n=[];let e=0;const t=[],i=[],o=[];function s(){e=0,t.length=0,i.length=0,o.length=0}function a(u,f,_,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:_,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=_,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function r(u,f,_,g,v,m){const p=a(u,f,_,g,v,m);_.transmission>0?i.push(p):_.transparent===!0?o.push(p):t.push(p)}function l(u,f,_,g,v,m){const p=a(u,f,_,g,v,m);_.transmission>0?i.unshift(p):_.transparent===!0?o.unshift(p):t.unshift(p)}function d(u,f){t.length>1&&t.sort(u||C1),i.length>1&&i.sort(f||Id),o.length>1&&o.sort(f||Id)}function c(){for(let u=e,f=n.length;u<f;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:o,init:s,push:r,unshift:l,finish:c,sort:d}}function L1(){let n=new WeakMap;function e(i,o){const s=n.get(i);let a;return s===void 0?(a=new Ud,n.set(i,[a])):o>=s.length?(a=new Ud,s.push(a)):a=s[o],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function P1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ke};break;case"SpotLight":t={position:new U,direction:new U,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function D1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let I1=0;function U1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N1(n){const e=new P1,t=D1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new U);const o=new U,s=new ft,a=new ft;function r(d){let c=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let _=0,g=0,v=0,m=0,p=0,T=0,A=0,E=0,F=0,P=0,L=0;d.sort(U1);for(let S=0,M=d.length;S<M;S++){const D=d[S],G=D.color,H=D.intensity,$=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=G.r*H,u+=G.g*H,f+=G.b*H;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],H);L++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=D.shadow.matrix,T++}i.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(G).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[v]=q;const Q=D.shadow;if(D.map&&(i.spotLightMap[F]=D.map,F++,Q.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=Z,E++}v++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(G).multiplyScalar(H),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,W=t.get(D);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(H),q.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==_||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==A||N.numSpotShadows!==E||N.numSpotMaps!==F||N.numLightProbes!==L)&&(i.directional.length=_,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+F-P,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,N.directionalLength=_,N.pointLength=g,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=A,N.numSpotShadows=E,N.numSpotMaps=F,N.numLightProbes=L,i.version=I1++)}function l(d,c){let u=0,f=0,_=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,T=d.length;p<T;p++){const A=d[p];if(A.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(m),u++}else if(A.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(m),_++}else if(A.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function Nd(n){const e=new N1(n),t=[],i=[];function o(c){d.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function r(){e.setup(t)}function l(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function F1(n){let e=new WeakMap;function t(o,s=0){const a=e.get(o);let r;return a===void 0?(r=new Nd(n),e.set(o,[r])):s>=a.length?(r=new Nd(n),a.push(r)):r=a[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z1(n,e,t){let i=new ic;const o=new We,s=new We,a=new Tt,r=new ap({depthPacking:jh}),l=new rp,d={},c=t.maxTextureSize,u={[Mi]:hn,[hn]:Mi,[zn]:zn},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:O1,fragmentShader:B1}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(P,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ki),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=p!==Qn&&this.type===Qn,$=p===Qn&&this.type!==Qn;for(let Z=0,q=P.length;Z<q;Z++){const Q=P[Z],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const ce=W.getFrameExtents();if(o.multiply(ce),s.copy(W.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(s.x=Math.floor(c/ce.x),o.x=s.x*ce.x,W.mapSize.x=s.x),o.y>c&&(s.y=Math.floor(c/ce.y),o.y=s.y*ce.y,W.mapSize.y=s.y)),W.map===null||H===!0||$===!0){const Ce=this.type!==Qn?{minFilter:Ut,magFilter:Ut}:{};W.map!==null&&W.map.dispose(),W.map=new Xi(o.x,o.y,Ce),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const _e=W.getViewportCount();for(let Ce=0;Ce<_e;Ce++){const Ze=W.getViewport(Ce);a.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),G.viewport(a),W.updateMatrices(Q,Ce),i=W.getFrustum(),E(L,N,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Qn&&T(W,N),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,D)};function T(P,L){const N=e.update(v);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Xi(o.x,o.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,N,f,v,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,N,_,v,null)}function A(P,L,N,S){let M=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?l:r,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const G=M.uuid,H=L.uuid;let $=d[G];$===void 0&&($={},d[G]=$);let Z=$[H];Z===void 0&&(Z=M.clone(),$[H]=Z,L.addEventListener("dispose",F)),M=Z}if(M.visible=L.visible,M.wireframe=L.wireframe,S===Qn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:u[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=N}return M}function E(P,L,N,S,M){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Qn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const H=e.update(P),$=P.material;if(Array.isArray($)){const Z=H.groups;for(let q=0,Q=Z.length;q<Q;q++){const W=Z[q],ce=$[W.materialIndex];if(ce&&ce.visible){const _e=A(P,ce,S,M);P.onBeforeShadow(n,P,L,N,H,_e,W),n.renderBufferDirect(N,null,H,_e,P,W),P.onAfterShadow(n,P,L,N,H,_e,W)}}}else if($.visible){const Z=A(P,$,S,M);P.onBeforeShadow(n,P,L,N,H,Z,null),n.renderBufferDirect(N,null,H,Z,P,null),P.onAfterShadow(n,P,L,N,H,Z,null)}}const G=P.children;for(let H=0,$=G.length;H<$;H++)E(G[H],L,N,S,M)}function F(P){P.target.removeEventListener("dispose",F);for(const N in d){const S=d[N],M=P.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const H1={[qr]:$r,[Yr]:Zr,[jr]:Jr,[Do]:Kr,[$r]:qr,[Zr]:Yr,[Jr]:jr,[Kr]:Do};function G1(n,e){function t(){let I=!1;const he=new Tt;let te=null;const ke=new Tt(0,0,0,0);return{setMask:function(ne){te!==ne&&!I&&(n.colorMask(ne,ne,ne,ne),te=ne)},setLocked:function(ne){I=ne},setClear:function(ne,K,ye,Ve,_t){_t===!0&&(ne*=Ve,K*=Ve,ye*=Ve),he.set(ne,K,ye,Ve),ke.equals(he)===!1&&(n.clearColor(ne,K,ye,Ve),ke.copy(he))},reset:function(){I=!1,te=null,ke.set(-1,0,0,0)}}}function i(){let I=!1,he=!1,te=null,ke=null,ne=null;return{setReversed:function(K){if(he!==K){const ye=e.get("EXT_clip_control");K?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return he},setTest:function(K){K?pe(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(K){te!==K&&!I&&(n.depthMask(K),te=K)},setFunc:function(K){if(he&&(K=H1[K]),ke!==K){switch(K){case qr:n.depthFunc(n.NEVER);break;case $r:n.depthFunc(n.ALWAYS);break;case Yr:n.depthFunc(n.LESS);break;case Do:n.depthFunc(n.LEQUAL);break;case jr:n.depthFunc(n.EQUAL);break;case Kr:n.depthFunc(n.GEQUAL);break;case Zr:n.depthFunc(n.GREATER);break;case Jr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=K}},setLocked:function(K){I=K},setClear:function(K){ne!==K&&(he&&(K=1-K),n.clearDepth(K),ne=K)},reset:function(){I=!1,te=null,ke=null,ne=null,he=!1}}}function o(){let I=!1,he=null,te=null,ke=null,ne=null,K=null,ye=null,Ve=null,_t=null;return{setTest:function(rt){I||(rt?pe(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(rt){he!==rt&&!I&&(n.stencilMask(rt),he=rt)},setFunc:function(rt,fn,An){(te!==rt||ke!==fn||ne!==An)&&(n.stencilFunc(rt,fn,An),te=rt,ke=fn,ne=An)},setOp:function(rt,fn,An){(K!==rt||ye!==fn||Ve!==An)&&(n.stencilOp(rt,fn,An),K=rt,ye=fn,Ve=An)},setLocked:function(rt){I=rt},setClear:function(rt){_t!==rt&&(n.clearStencil(rt),_t=rt)},reset:function(){I=!1,he=null,te=null,ke=null,ne=null,K=null,ye=null,Ve=null,_t=null}}}const s=new t,a=new i,r=new o,l=new WeakMap,d=new WeakMap;let c={},u={},f=new WeakMap,_=[],g=null,v=!1,m=null,p=null,T=null,A=null,E=null,F=null,P=null,L=new Ke(0,0,0),N=0,S=!1,M=null,D=null,G=null,H=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=Q>=2);let ce=null,_e={};const Ce=n.getParameter(n.SCISSOR_BOX),Ze=n.getParameter(n.VIEWPORT),ut=new Tt().fromArray(Ce),Y=new Tt().fromArray(Ze);function se(I,he,te,ke){const ne=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<te;ye++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(he+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return K}const Ae={};Ae[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),pe(n.DEPTH_TEST),a.setFunc(Do),et(!1),Ye(Rc),pe(n.CULL_FACE),C(ki);function pe(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function re(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function de(I,he){return u[I]!==he?(n.bindFramebuffer(I,he),u[I]=he,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Le(I,he){let te=_,ke=!1;if(I){te=f.get(he),te===void 0&&(te=[],f.set(he,te));const ne=I.textures;if(te.length!==ne.length||te[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ye=ne.length;K<ye;K++)te[K]=n.COLOR_ATTACHMENT0+K;te.length=ne.length,ke=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ke=!0);ke&&n.drawBuffers(te)}function Xe(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ge={[Fi]:n.FUNC_ADD,[Mh]:n.FUNC_SUBTRACT,[Sh]:n.FUNC_REVERSE_SUBTRACT};Ge[Eh]=n.MIN,Ge[wh]=n.MAX;const De={[Th]:n.ZERO,[Ah]:n.ONE,[Rh]:n.SRC_COLOR,[Wr]:n.SRC_ALPHA,[Uh]:n.SRC_ALPHA_SATURATE,[Dh]:n.DST_COLOR,[Lh]:n.DST_ALPHA,[Ch]:n.ONE_MINUS_SRC_COLOR,[Xr]:n.ONE_MINUS_SRC_ALPHA,[Ih]:n.ONE_MINUS_DST_COLOR,[Ph]:n.ONE_MINUS_DST_ALPHA,[Nh]:n.CONSTANT_COLOR,[Fh]:n.ONE_MINUS_CONSTANT_COLOR,[Oh]:n.CONSTANT_ALPHA,[Bh]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,he,te,ke,ne,K,ye,Ve,_t,rt){if(I===ki){v===!0&&(re(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),I!==yh){if(I!==m||rt!==S){if((p!==Fi||E!==Fi)&&(n.blendEquation(n.FUNC_ADD),p=Fi,E=Fi),rt)switch(I){case Ao:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ao:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,A=null,F=null,P=null,L.set(0,0,0),N=0,m=I,S=rt}return}ne=ne||he,K=K||te,ye=ye||ke,(he!==p||ne!==E)&&(n.blendEquationSeparate(Ge[he],Ge[ne]),p=he,E=ne),(te!==T||ke!==A||K!==F||ye!==P)&&(n.blendFuncSeparate(De[te],De[ke],De[K],De[ye]),T=te,A=ke,F=K,P=ye),(Ve.equals(L)===!1||_t!==N)&&(n.blendColor(Ve.r,Ve.g,Ve.b,_t),L.copy(Ve),N=_t),m=I,S=!1}function vt(I,he){I.side===zn?re(n.CULL_FACE):pe(n.CULL_FACE);let te=I.side===hn;he&&(te=!te),et(te),I.blending===Ao&&I.transparent===!1?C(ki):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ke=I.stencilWrite;r.setTest(ke),ke&&(r.setMask(I.stencilWriteMask),r.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),r.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Ye(I){I!==vh?(pe(n.CULL_FACE),I!==D&&(I===Rc?n.cullFace(n.BACK):I===xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),D=I}function Ee(I){I!==G&&(q&&n.lineWidth(I),G=I)}function tt(I,he,te){I?(pe(n.POLYGON_OFFSET_FILL),(H!==he||$!==te)&&(n.polygonOffset(he,te),H=he,$=te)):re(n.POLYGON_OFFSET_FILL)}function Pe(I){I?pe(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function Fe(I){I===void 0&&(I=n.TEXTURE0+Z-1),ce!==I&&(n.activeTexture(I),ce=I)}function gt(I,he,te){te===void 0&&(ce===null?te=n.TEXTURE0+Z-1:te=ce);let ke=_e[te];ke===void 0&&(ke={type:void 0,texture:void 0},_e[te]=ke),(ke.type!==I||ke.texture!==he)&&(ce!==te&&(n.activeTexture(te),ce=te),n.bindTexture(I,he||Ae[I]),ke.type=I,ke.texture=he)}function x(){const I=_e[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){ut.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ut.copy(I))}function Oe(I){Y.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Ue(I,he){let te=d.get(he);te===void 0&&(te=new WeakMap,d.set(he,te));let ke=te.get(I);ke===void 0&&(ke=n.getUniformBlockIndex(he,I.name),te.set(I,ke))}function le(I,he){const ke=d.get(he).get(I);l.get(he)!==ke&&(n.uniformBlockBinding(he,ke,I.__bindingPointIndex),l.set(he,ke))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ce=null,_e={},u={},f=new WeakMap,_=[],g=null,v=!1,m=null,p=null,T=null,A=null,E=null,F=null,P=null,L=new Ke(0,0,0),N=0,S=!1,M=null,D=null,G=null,H=null,$=null,ut.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:pe,disable:re,bindFramebuffer:de,drawBuffers:Le,useProgram:Xe,setBlending:C,setMaterial:vt,setFlipSided:et,setCullFace:Ye,setLineWidth:Ee,setPolygonOffset:tt,setScissorTest:Pe,activeTexture:Fe,bindTexture:gt,unbindTexture:x,compressedTexImage2D:b,compressedTexImage3D:B,texImage2D:we,texImage3D:ee,updateUBOMapping:Ue,uniformBlockBinding:le,texStorage2D:ue,texStorage3D:xe,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:me,viewport:Oe,reset:Ne}}function V1(n,e,t,i,o,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new We,c=new WeakMap;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,b){return _?new OffscreenCanvas(x,b):xs("canvas")}function v(x,b,B){let X=1;const J=gt(x);if((J.width>B||J.height>B)&&(X=B/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(X*J.width),Se=Math.floor(X*J.height);u===void 0&&(u=g(V,Se));const ue=b?g(V,Se):u;return ue.width=V,ue.height=Se,ue.getContext("2d").drawImage(x,0,0,V,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+Se+")."),ue}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function T(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,b,B,X,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=b;if(b===n.RED&&(B===n.FLOAT&&(V=n.R32F),B===n.HALF_FLOAT&&(V=n.R16F),B===n.UNSIGNED_BYTE&&(V=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(V=n.R8UI),B===n.UNSIGNED_SHORT&&(V=n.R16UI),B===n.UNSIGNED_INT&&(V=n.R32UI),B===n.BYTE&&(V=n.R8I),B===n.SHORT&&(V=n.R16I),B===n.INT&&(V=n.R32I)),b===n.RG&&(B===n.FLOAT&&(V=n.RG32F),B===n.HALF_FLOAT&&(V=n.RG16F),B===n.UNSIGNED_BYTE&&(V=n.RG8)),b===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(V=n.RG8UI),B===n.UNSIGNED_SHORT&&(V=n.RG16UI),B===n.UNSIGNED_INT&&(V=n.RG32UI),B===n.BYTE&&(V=n.RG8I),B===n.SHORT&&(V=n.RG16I),B===n.INT&&(V=n.RG32I)),b===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(V=n.RGB8UI),B===n.UNSIGNED_SHORT&&(V=n.RGB16UI),B===n.UNSIGNED_INT&&(V=n.RGB32UI),B===n.BYTE&&(V=n.RGB8I),B===n.SHORT&&(V=n.RGB16I),B===n.INT&&(V=n.RGB32I)),b===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),B===n.UNSIGNED_INT&&(V=n.RGBA32UI),B===n.BYTE&&(V=n.RGBA8I),B===n.SHORT&&(V=n.RGBA16I),B===n.INT&&(V=n.RGBA32I)),b===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),b===n.RGBA){const Se=J?Ea:st.getTransfer(X);B===n.FLOAT&&(V=n.RGBA32F),B===n.HALF_FLOAT&&(V=n.RGBA16F),B===n.UNSIGNED_BYTE&&(V=Se===pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(x,b){let B;return x?b===null||b===Wi||b===gs?B=n.DEPTH24_STENCIL8:b===Gn?B=n.DEPTH32F_STENCIL8:b===ms&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===gs?B=n.DEPTH_COMPONENT24:b===Gn?B=n.DEPTH_COMPONENT32F:b===ms&&(B=n.DEPTH_COMPONENT16),B}function F(x,b){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ut&&x.minFilter!==Hn?Math.log2(Math.max(b.width,b.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?b.mipmaps.length:1}function P(x){const b=x.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&c.delete(b)}function L(x){const b=x.target;b.removeEventListener("dispose",L),M(b)}function N(x){const b=i.get(x);if(b.__webglInit===void 0)return;const B=x.source,X=f.get(B);if(X){const J=X[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(x),Object.keys(X).length===0&&f.delete(B)}i.remove(x)}function S(x){const b=i.get(x);n.deleteTexture(b.__webglTexture);const B=x.source,X=f.get(B);delete X[b.__cacheKey],a.memory.textures--}function M(x){const b=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let J=0;J<b.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(b.__webglFramebuffer[X][J]);else n.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)n.deleteFramebuffer(b.__webglFramebuffer[X]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=x.textures;for(let X=0,J=B.length;X<J;X++){const V=i.get(B[X]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(x)}let D=0;function G(){D=0}function H(){const x=D;return x>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+o.maxTextures),D+=1,x}function $(x){const b=[];return b.push(x.wrapS),b.push(x.wrapT),b.push(x.wrapR||0),b.push(x.magFilter),b.push(x.minFilter),b.push(x.anisotropy),b.push(x.internalFormat),b.push(x.format),b.push(x.type),b.push(x.generateMipmaps),b.push(x.premultiplyAlpha),b.push(x.flipY),b.push(x.unpackAlignment),b.push(x.colorSpace),b.join()}function Z(x,b){const B=i.get(x);if(x.isVideoTexture&&Pe(x),x.isRenderTargetTexture===!1&&x.version>0&&B.__version!==x.version){const X=x.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,x,b);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function q(x,b){const B=i.get(x);if(x.version>0&&B.__version!==x.version){Ae(B,x,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function Q(x,b){const B=i.get(x);if(x.version>0&&B.__version!==x.version){Ae(B,x,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function W(x,b){const B=i.get(x);if(x.version>0&&B.__version!==x.version){pe(B,x,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const ce={[tl]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[nl]:n.MIRRORED_REPEAT},_e={[Ut]:n.NEAREST,[Vl]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[or]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Ce={[Zh]:n.NEVER,[of]:n.ALWAYS,[Jh]:n.LESS,[uu]:n.LEQUAL,[Qh]:n.EQUAL,[nf]:n.GEQUAL,[ef]:n.GREATER,[tf]:n.NOTEQUAL};function Ze(x,b){if(b.type===Gn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Hn||b.magFilter===or||b.magFilter===zs||b.magFilter===zi||b.minFilter===Hn||b.minFilter===or||b.minFilter===zs||b.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ce[b.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ce[b.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ce[b.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,_e[b.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ut||b.minFilter!==zs&&b.minFilter!==zi||b.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ut(x,b){let B=!1;x.__webglInit===void 0&&(x.__webglInit=!0,b.addEventListener("dispose",P));const X=b.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const V=$(b);if(V!==x.__cacheKey){J[V]===void 0&&(J[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[V].usedTimes++;const Se=J[x.__cacheKey];Se!==void 0&&(J[x.__cacheKey].usedTimes--,Se.usedTimes===0&&S(b)),x.__cacheKey=V,x.__webglTexture=J[V].texture}return B}function Y(x,b,B){return Math.floor(Math.floor(x/B)/b)}function se(x,b,B,X){const V=x.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,B,X,b.data);else{V.sort((ee,me)=>ee.start-me.start);let Se=0;for(let ee=1;ee<V.length;ee++){const me=V[Se],Oe=V[ee],Ue=me.start+me.count,le=Y(Oe.start,b.width,4),Ne=Y(me.start,b.width,4);Oe.start<=Ue+1&&le===Ne&&Y(Oe.start+Oe.count-1,b.width,4)===le?me.count=Math.max(me.count,Oe.start+Oe.count-me.start):(++Se,V[Se]=Oe)}V.length=Se+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let ee=0,me=V.length;ee<me;ee++){const Oe=V[ee],Ue=Math.floor(Oe.start/4),le=Math.ceil(Oe.count/4),Ne=Ue%b.width,I=Math.floor(Ue/b.width),he=le,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ne,I,he,te,B,X,b.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function Ae(x,b,B){let X=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=n.TEXTURE_3D);const J=ut(x,b),V=b.source;t.bindTexture(X,x.__webglTexture,n.TEXTURE0+B);const Se=i.get(V);if(V.version!==Se.__version||J===!0){t.activeTexture(n.TEXTURE0+B);const ue=st.getPrimaries(st.workingColorSpace),xe=b.colorSpace===mi?null:st.getPrimaries(b.colorSpace),we=b.colorSpace===mi||ue===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=v(b.image,!1,o.maxTextureSize);ee=Fe(b,ee);const me=s.convert(b.format,b.colorSpace),Oe=s.convert(b.type);let Ue=A(b.internalFormat,me,Oe,b.colorSpace,b.isVideoTexture);Ze(X,b);let le;const Ne=b.mipmaps,I=b.isVideoTexture!==!0,he=Se.__version===void 0||J===!0,te=V.dataReady,ke=F(b,ee);if(b.isDepthTexture)Ue=E(b.format===ks,b.type),he&&(I?t.texStorage2D(n.TEXTURE_2D,1,Ue,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ee.width,ee.height,0,me,Oe,null));else if(b.isDataTexture)if(Ne.length>0){I&&he&&t.texStorage2D(n.TEXTURE_2D,ke,Ue,Ne[0].width,Ne[0].height);for(let ne=0,K=Ne.length;ne<K;ne++)le=Ne[ne],I?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,le.width,le.height,me,Oe,le.data):t.texImage2D(n.TEXTURE_2D,ne,Ue,le.width,le.height,0,me,Oe,le.data);b.generateMipmaps=!1}else I?(he&&t.texStorage2D(n.TEXTURE_2D,ke,Ue,ee.width,ee.height),te&&se(b,ee,me,Oe)):t.texImage2D(n.TEXTURE_2D,0,Ue,ee.width,ee.height,0,me,Oe,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ue,Ne[0].width,Ne[0].height,ee.depth);for(let ne=0,K=Ne.length;ne<K;ne++)if(le=Ne[ne],b.format!==Dn)if(me!==null)if(I){if(te)if(b.layerUpdates.size>0){const ye=hd(le.width,le.height,b.format,b.type);for(const Ve of b.layerUpdates){const _t=le.data.subarray(Ve*ye/le.data.BYTES_PER_ELEMENT,(Ve+1)*ye/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ve,le.width,le.height,1,me,_t)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ee.depth,me,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ue,le.width,le.height,ee.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ee.depth,me,Oe,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ue,le.width,le.height,ee.depth,0,me,Oe,le.data)}else{I&&he&&t.texStorage2D(n.TEXTURE_2D,ke,Ue,Ne[0].width,Ne[0].height);for(let ne=0,K=Ne.length;ne<K;ne++)le=Ne[ne],b.format!==Dn?me!==null?I?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,le.width,le.height,me,le.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,le.width,le.height,me,Oe,le.data):t.texImage2D(n.TEXTURE_2D,ne,Ue,le.width,le.height,0,me,Oe,le.data)}else if(b.isDataArrayTexture)if(I){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,Ue,ee.width,ee.height,ee.depth),te)if(b.layerUpdates.size>0){const ne=hd(ee.width,ee.height,b.format,b.type);for(const K of b.layerUpdates){const ye=ee.data.subarray(K*ne/ee.data.BYTES_PER_ELEMENT,(K+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,me,Oe,ye)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,me,Oe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ee.width,ee.height,ee.depth,0,me,Oe,ee.data);else if(b.isData3DTexture)I?(he&&t.texStorage3D(n.TEXTURE_3D,ke,Ue,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,me,Oe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ee.width,ee.height,ee.depth,0,me,Oe,ee.data);else if(b.isFramebufferTexture){if(he)if(I)t.texStorage2D(n.TEXTURE_2D,ke,Ue,ee.width,ee.height);else{let ne=ee.width,K=ee.height;for(let ye=0;ye<ke;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ue,ne,K,0,me,Oe,null),ne>>=1,K>>=1}}else if(Ne.length>0){if(I&&he){const ne=gt(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ke,Ue,ne.width,ne.height)}for(let ne=0,K=Ne.length;ne<K;ne++)le=Ne[ne],I?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me,Oe,le):t.texImage2D(n.TEXTURE_2D,ne,Ue,me,Oe,le);b.generateMipmaps=!1}else if(I){if(he){const ne=gt(ee);t.texStorage2D(n.TEXTURE_2D,ke,Ue,ne.width,ne.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Oe,ee)}else t.texImage2D(n.TEXTURE_2D,0,Ue,me,Oe,ee);m(b)&&p(X),Se.__version=V.version,b.onUpdate&&b.onUpdate(b)}x.__version=b.version}function pe(x,b,B){if(b.image.length!==6)return;const X=ut(x,b),J=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+B);const V=i.get(J);if(J.version!==V.__version||X===!0){t.activeTexture(n.TEXTURE0+B);const Se=st.getPrimaries(st.workingColorSpace),ue=b.colorSpace===mi?null:st.getPrimaries(b.colorSpace),xe=b.colorSpace===mi||Se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,me=[];for(let K=0;K<6;K++)!we&&!ee?me[K]=v(b.image[K],!0,o.maxCubemapSize):me[K]=ee?b.image[K].image:b.image[K],me[K]=Fe(b,me[K]);const Oe=me[0],Ue=s.convert(b.format,b.colorSpace),le=s.convert(b.type),Ne=A(b.internalFormat,Ue,le,b.colorSpace),I=b.isVideoTexture!==!0,he=V.__version===void 0||X===!0,te=J.dataReady;let ke=F(b,Oe);Ze(n.TEXTURE_CUBE_MAP,b);let ne;if(we){I&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,Ne,Oe.width,Oe.height);for(let K=0;K<6;K++){ne=me[K].mipmaps;for(let ye=0;ye<ne.length;ye++){const Ve=ne[ye];b.format!==Dn?Ue!==null?I?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,Ve.width,Ve.height,Ue,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Ne,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,0,0,Ve.width,Ve.height,Ue,le,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye,Ne,Ve.width,Ve.height,0,Ue,le,Ve.data)}}}else{if(ne=b.mipmaps,I&&he){ne.length>0&&ke++;const K=gt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(ee){I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,me[K].width,me[K].height,Ue,le,me[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,me[K].width,me[K].height,0,Ue,le,me[K].data);for(let ye=0;ye<ne.length;ye++){const _t=ne[ye].image[K].image;I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,_t.width,_t.height,Ue,le,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Ne,_t.width,_t.height,0,Ue,le,_t.data)}}else{I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,le,me[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Ue,le,me[K]);for(let ye=0;ye<ne.length;ye++){const Ve=ne[ye];I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,0,0,Ue,le,Ve.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ye+1,Ne,Ue,le,Ve.image[K])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),V.__version=J.version,b.onUpdate&&b.onUpdate(b)}x.__version=b.version}function re(x,b,B,X,J,V){const Se=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),xe=A(B.internalFormat,Se,ue,B.colorSpace),we=i.get(b),ee=i.get(B);if(ee.__renderTarget=b,!we.__hasExternalTextures){const me=Math.max(1,b.width>>V),Oe=Math.max(1,b.height>>V);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,V,xe,me,Oe,b.depth,0,Se,ue,null):t.texImage2D(J,V,xe,me,Oe,0,Se,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),tt(b)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,ee.__webglTexture,0,Ee(b)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,ee.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(x,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,x),b.depthBuffer){const X=b.depthTexture,J=X&&X.isDepthTexture?X.type:null,V=E(b.stencilBuffer,J),Se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Ee(b);tt(b)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,V,b.width,b.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,V,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,V,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,x)}else{const X=b.textures;for(let J=0;J<X.length;J++){const V=X[J],Se=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),xe=A(V.internalFormat,Se,ue,V.colorSpace),we=Ee(b);B&&tt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,xe,b.width,b.height):tt(b)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,xe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,xe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(x,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);const J=X.__webglTexture,V=Ee(b);if(b.depthTexture.format===bs)tt(b)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(b.depthTexture.format===ks)tt(b)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Xe(x){const b=i.get(x),B=x.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==x.depthTexture){const X=x.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=X}if(x.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const X=x.texture.mipmaps;X&&X.length>0?Le(b.__webglFramebuffer[0],x):Le(b.__webglFramebuffer,x)}else if(B){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=n.createRenderbuffer(),de(b.__webglDepthbuffer[X],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}else{const X=x.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),de(b.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(x,b,B){const X=i.get(x);b!==void 0&&re(X.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Xe(x)}function De(x){const b=x.texture,B=i.get(x),X=i.get(b);x.addEventListener("dispose",L);const J=x.textures,V=x.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=b.version,a.memory.textures++),V){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let xe=0;xe<b.mipmaps.length;xe++)B.__webglFramebuffer[ue][xe]=n.createFramebuffer()}else B.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)B.__webglFramebuffer[ue]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ue=0,xe=J.length;ue<xe;ue++){const we=i.get(J[ue]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&tt(x)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const xe=J[ue];B.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ue]);const we=s.convert(xe.format,xe.colorSpace),ee=s.convert(xe.type),me=A(xe.internalFormat,we,ee,xe.colorSpace,x.isXRRenderTarget===!0),Oe=Ee(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,me,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,B.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),de(B.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)re(B.__webglFramebuffer[ue][xe],x,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else re(B.__webglFramebuffer[ue],x,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,xe=J.length;ue<xe;ue++){const we=J[ue],ee=i.get(we);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),Ze(n.TEXTURE_2D,we),re(B.__webglFramebuffer,x,we,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ue=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,X.__webglTexture),Ze(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)re(B.__webglFramebuffer[xe],x,b,n.COLOR_ATTACHMENT0,ue,xe);else re(B.__webglFramebuffer,x,b,n.COLOR_ATTACHMENT0,ue,0);m(b)&&p(ue),t.unbindTexture()}x.depthBuffer&&Xe(x)}function C(x){const b=x.textures;for(let B=0,X=b.length;B<X;B++){const J=b[B];if(m(J)){const V=T(x),Se=i.get(J).__webglTexture;t.bindTexture(V,Se),p(V),t.unbindTexture()}}}const vt=[],et=[];function Ye(x){if(x.samples>0){if(tt(x)===!1){const b=x.textures,B=x.width,X=x.height;let J=n.COLOR_BUFFER_BIT;const V=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(x),ue=b.length>1;if(ue)for(let we=0;we<b.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=x.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<b.length;we++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const ee=i.get(b[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,B,X,0,0,B,X,J,n.NEAREST),l===!0&&(vt.length=0,et.length=0,vt.push(n.COLOR_ATTACHMENT0+we),x.depthBuffer&&x.resolveDepthBuffer===!1&&(vt.push(V),et.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<b.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const ee=i.get(b[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const b=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ee(x){return Math.min(o.maxSamples,x.samples)}function tt(x){const b=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pe(x){const b=a.render.frame;c.get(x)!==b&&(c.set(x,b),x.update())}function Fe(x,b){const B=x.colorSpace,X=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||B!==No&&B!==mi&&(st.getTransfer(B)===pt?(X!==Dn||J!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function gt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(d.width=x.naturalWidth||x.width,d.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(d.width=x.displayWidth,d.height=x.displayHeight):(d.width=x.width,d.height=x.height),d}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Ge,this.setupRenderTarget=De,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=tt}function W1(n,e){function t(i,o=mi){let s;const a=st.getTransfer(o);if(i===Vn)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===au)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ou)return n.BYTE;if(i===su)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===ru)return n.ALPHA;if(i===lu)return n.RGB;if(i===Dn)return n.RGBA;if(i===bs)return n.DEPTH_COMPONENT;if(i===ks)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===Yl)return n.RED_INTEGER;if(i===cu)return n.RG;if(i===jl)return n.RG_INTEGER;if(i===Kl)return n.RGBA_INTEGER;if(i===ga||i===ba||i===ka||i===va)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===il||i===ol||i===sl||i===al)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===il)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===ll||i===cl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===rl||i===ll)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===ul||i===hl||i===fl||i===pl||i===_l||i===ml||i===gl||i===bl||i===kl||i===vl||i===xl||i===yl||i===Ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ul)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ml)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===Sl||i===El)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xa)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===du||i===wl||i===Tl||i===Al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Kt,s=e.properties.get(o);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Si({vertexShader:X1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new Ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends Ho{constructor(e,t){super();const i=this;let o=null,s=1,a=null,r="local-floor",l=1,d=null,c=null,u=null,f=null,_=null,g=null;const v=new $1,m=t.getContextAttributes();let p=null,T=null;const A=[],E=[],F=new We;let P=null;const L=new gn;L.viewport=new Tt;const N=new gn;N.viewport=new Tt;const S=[L,N],M=new fp;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=A[Y];return se===void 0&&(se=new Er,A[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=A[Y];return se===void 0&&(se=new Er,A[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=A[Y];return se===void 0&&(se=new Er,A[Y]=se),se.getHandSpace()};function H(Y){const se=E.indexOf(Y.inputSource);if(se===-1)return;const Ae=A[se];Ae!==void 0&&(Ae.update(Y.inputSource,Y.frame,d||a),Ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<A.length;Y++){const se=E[Y];se!==null&&(E[Y]=null,A[Y].disconnect(se))}D=null,G=null,v.reset(),e.setRenderTarget(p),_=null,f=null,u=null,o=null,T=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(Y){d=Y},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",$),o.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,pe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?ks:bs,pe=m.stencil?gs:Wi);const de={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(de),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Xi(f.textureWidth,f.textureHeight,{format:Dn,type:Vn,depthTexture:new Su(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new Xi(_.framebufferWidth,_.framebufferHeight,{format:Dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await o.requestReferenceSpace(r),ut.setContext(o),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(Y){for(let se=0;se<Y.removed.length;se++){const Ae=Y.removed[se],pe=E.indexOf(Ae);pe>=0&&(E[pe]=null,A[pe].disconnect(Ae))}for(let se=0;se<Y.added.length;se++){const Ae=Y.added[se];let pe=E.indexOf(Ae);if(pe===-1){for(let de=0;de<A.length;de++)if(de>=E.length){E.push(Ae),pe=de;break}else if(E[de]===null){E[de]=Ae,pe=de;break}if(pe===-1)break}const re=A[pe];re&&re.connect(Ae)}}const q=new U,Q=new U;function W(Y,se,Ae){q.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(Ae.matrixWorld);const pe=q.distanceTo(Q),re=se.projectionMatrix.elements,de=Ae.projectionMatrix.elements,Le=re[14]/(re[10]-1),Xe=re[14]/(re[10]+1),Ge=(re[9]+1)/re[5],De=(re[9]-1)/re[5],C=(re[8]-1)/re[0],vt=(de[8]+1)/de[0],et=Le*C,Ye=Le*vt,Ee=pe/(-C+vt),tt=Ee*-C;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(tt),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),re[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Pe=Le+Ee,Fe=Xe+Ee,gt=et-tt,x=Ye+(pe-tt),b=Ge*Xe/Fe*Pe,B=De*Xe/Fe*Pe;Y.projectionMatrix.makePerspective(gt,x,b,B,Pe,Fe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let se=Y.near,Ae=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),M.near=N.near=L.near=se,M.far=N.far=L.far=Ae,(D!==M.near||G!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,G=M.far),L.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,M.layers.mask=L.layers.mask|N.layers.mask;const pe=Y.parent,re=M.cameras;ce(M,pe);for(let de=0;de<re.length;de++)ce(re[de],pe);re.length===2?W(M,L,N):M.projectionMatrix.copy(L.projectionMatrix),_e(Y,M,pe)};function _e(Y,se,Ae){Ae===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(Ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ce=null;function Ze(Y,se){if(c=se.getViewerPose(d||a),g=se,c!==null){const Ae=c.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let pe=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Le=0;Le<Ae.length;Le++){const Xe=Ae[Le];let Ge=null;if(_!==null)Ge=_.getViewport(Xe);else{const C=u.getViewSubImage(f,Xe);Ge=C.viewport,Le===0&&(e.setRenderTargetTextures(T,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(T))}let De=S[Le];De===void 0&&(De=new gn,De.layers.enable(Le),De.viewport=new Tt,S[Le]=De),De.matrix.fromArray(Xe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Xe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Le===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(De)}const re=o.enabledFeatures;if(re&&re.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(Ae[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,o.renderState)}}for(let Ae=0;Ae<A.length;Ae++){const pe=E[Ae],re=A[Ae];pe!==null&&re!==void 0&&re.update(pe,se,d||a)}Ce&&Ce(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const ut=new Ru;ut.setAnimationLoop(Ze),this.setAnimationLoop=function(Y){Ce=Y},this.dispose=function(){}}}const Ii=new Un,j1=new ft;function K1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function o(m,p,T,A,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&_(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,T,A):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),A=T.envMap,E=T.envMapRotation;A&&(m.envMap.value=A,Ii.copy(E),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(Ii)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Z1(n,e,t,i){let o={},s={},a=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,A){const E=A.program;i.uniformBlockBinding(T,E)}function d(T,A){let E=o[T.id];E===void 0&&(g(T),E=c(T),o[T.id]=E,T.addEventListener("dispose",m));const F=A.program;i.updateUBOMapping(T,F);const P=e.render.frame;s[T.id]!==P&&(f(T),s[T.id]=P)}function c(T){const A=u();T.__bindingPointIndex=A;const E=n.createBuffer(),F=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function u(){for(let T=0;T<r;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const A=o[T.id],E=T.uniforms,F=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,L=E.length;P<L;P++){const N=Array.isArray(E[P])?E[P]:[E[P]];for(let S=0,M=N.length;S<M;S++){const D=N[S];if(_(D,P,S,F)===!0){const G=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let Z=0;Z<H.length;Z++){const q=H[Z],Q=v(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+$,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,A,E,F){const P=T.value,L=A+"_"+E;if(F[L]===void 0)return typeof P=="number"||typeof P=="boolean"?F[L]=P:F[L]=P.clone(),!0;{const N=F[L];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return F[L]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(T){const A=T.uniforms;let E=0;const F=16;for(let L=0,N=A.length;L<N;L++){const S=Array.isArray(A[L])?A[L]:[A[L]];for(let M=0,D=S.length;M<D;M++){const G=S[M],H=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Z=H.length;$<Z;$++){const q=H[$],Q=v(q),W=E%F,ce=W%Q.boundary,_e=W+ce;E+=ce,_e!==0&&F-_e<Q.storage&&(E+=F-_e),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Q.storage}}}const P=E%F;return P>0&&(E+=F-P),T.__size=E,T.__cache={},this}function v(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),A}function m(T){const A=T.target;A.removeEventListener("dispose",m);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete s[A.id]}function p(){for(const T in o)n.deleteBuffer(o[T]);a=[],o={},s={}}return{bind:l,update:d,dispose:p}}class J1{constructor(e={}){const{canvas:t=xf(),context:i=null,depth:o=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const T=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let F=!1;this._outputColorSpace=Dt;let P=0,L=0,N=null,S=-1,M=null;const D=new Tt,G=new Tt;let H=null;const $=new Ke(0);let Z=0,q=t.width,Q=t.height,W=1,ce=null,_e=null;const Ce=new Tt(0,0,q,Q),Ze=new Tt(0,0,q,Q);let ut=!1;const Y=new ic;let se=!1,Ae=!1;const pe=new ft,re=new ft,de=new U,Le=new Tt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function De(){return N===null?W:1}let C=i;function vt(y,h){return t.getContext(y,h)}try{const y={alpha:!0,depth:o,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",K,!1),C===null){const h="webgl2";if(C=vt(h,y),C===null)throw vt(h)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let et,Ye,Ee,tt,Pe,Fe,gt,x,b,B,X,J,V,Se,ue,xe,we,ee,me,Oe,Ue,le,Ne,I;function he(){et=new lm(C),et.init(),le=new W1(C,et),Ye=new tm(C,et,e,le),Ee=new G1(C,et),Ye.reverseDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),tt=new um(C),Pe=new R1,Fe=new V1(C,et,Ee,Pe,Ye,le,tt),gt=new im(E),x=new rm(E),b=new gp(C),Ne=new Q0(C,b),B=new cm(C,b,tt,Ne),X=new fm(C,B,b,tt),me=new hm(C,Ye,Fe),xe=new nm(Pe),J=new A1(E,gt,x,et,Ye,Ne,xe),V=new K1(E,Pe),Se=new L1,ue=new F1(et),ee=new J0(E,gt,x,Ee,X,_,l),we=new z1(E,X,Ye),I=new Z1(C,tt,Ye,Ee),Oe=new em(C,et,tt),Ue=new dm(C,et,tt),tt.programs=J.programs,E.capabilities=Ye,E.extensions=et,E.properties=Pe,E.renderLists=Se,E.shadowMap=we,E.state=Ee,E.info=tt}he();const te=new Y1(E,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(y){y!==void 0&&(W=y,this.setSize(q,Q,!1))},this.getSize=function(y){return y.set(q,Q)},this.setSize=function(y,h,k=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Q=h,t.width=Math.floor(y*W),t.height=Math.floor(h*W),k===!0&&(t.style.width=y+"px",t.style.height=h+"px"),this.setViewport(0,0,y,h)},this.getDrawingBufferSize=function(y){return y.set(q*W,Q*W).floor()},this.setDrawingBufferSize=function(y,h,k){q=y,Q=h,W=k,t.width=Math.floor(y*k),t.height=Math.floor(h*k),this.setViewport(0,0,y,h)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(Ce)},this.setViewport=function(y,h,k,R){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,h,k,R),Ee.viewport(D.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,h,k,R){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,h,k,R),Ee.scissor(G.copy(Ze).multiplyScalar(W).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){Ee.setScissorTest(ut=y)},this.setOpaqueSort=function(y){ce=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(y=!0,h=!0,k=!0){let R=0;if(y){let w=!1;if(N!==null){const O=N.texture.format;w=O===Kl||O===jl||O===Yl}if(w){const O=N.texture.type,j=O===Vn||O===Wi||O===ms||O===gs||O===Xl||O===ql,ie=ee.getClearColor(),oe=ee.getClearAlpha(),ve=ie.r,Te=ie.g,ae=ie.b;j?(g[0]=ve,g[1]=Te,g[2]=ae,g[3]=oe,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=ve,v[1]=Te,v[2]=ae,v[3]=oe,C.clearBufferiv(C.COLOR,0,v))}else R|=C.COLOR_BUFFER_BIT}h&&(R|=C.DEPTH_BUFFER_BIT),k&&(R|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ee.dispose(),Se.dispose(),ue.dispose(),Pe.dispose(),gt.dispose(),x.dispose(),X.dispose(),Ne.dispose(),I.dispose(),J.dispose(),te.dispose(),te.removeEventListener("sessionstart",qo),te.removeEventListener("sessionend",pn),Vt.stop()};function ke(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=tt.autoReset,h=we.enabled,k=we.autoUpdate,R=we.needsUpdate,w=we.type;he(),tt.autoReset=y,we.enabled=h,we.autoUpdate=k,we.needsUpdate=R,we.type=w}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ye(y){const h=y.target;h.removeEventListener("dispose",ye),Ve(h)}function Ve(y){_t(y),Pe.remove(y)}function _t(y){const h=Pe.get(y).programs;h!==void 0&&(h.forEach(function(k){J.releaseProgram(k)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,h,k,R,w,O){h===null&&(h=Xe);const j=w.isMesh&&w.matrixWorld.determinant()<0,ie=Qa(y,h,k,R,w);Ee.setMaterial(R,j);let oe=k.index,ve=1;if(R.wireframe===!0){if(oe=B.getWireframeAttribute(k),oe===void 0)return;ve=2}const Te=k.drawRange,ae=k.attributes.position;let Be=Te.start*ve,Je=(Te.start+Te.count)*ve;O!==null&&(Be=Math.max(Be,O.start*ve),Je=Math.min(Je,(O.start+O.count)*ve)),oe!==null?(Be=Math.max(Be,0),Je=Math.min(Je,oe.count)):ae!=null&&(Be=Math.max(Be,0),Je=Math.min(Je,ae.count));const nt=Je-Be;if(nt<0||nt===1/0)return;Ne.setup(w,R,ie,k,oe);let Re,Ie=Oe;if(oe!==null&&(Re=b.get(oe),Ie=Ue,Ie.setIndex(Re)),w.isMesh)R.wireframe===!0?(Ee.setLineWidth(R.wireframeLinewidth*De()),Ie.setMode(C.LINES)):Ie.setMode(C.TRIANGLES);else if(w.isLine){let ge=R.linewidth;ge===void 0&&(ge=1),Ee.setLineWidth(ge*De()),w.isLineSegments?Ie.setMode(C.LINES):w.isLineLoop?Ie.setMode(C.LINE_LOOP):Ie.setMode(C.LINE_STRIP)}else w.isPoints?Ie.setMode(C.POINTS):w.isSprite&&Ie.setMode(C.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)Co("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Ie.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{const ge=w._multiDrawStarts,qe=w._multiDrawCounts,$e=w._multiDrawCount,xt=oe?b.get(oe).bytesPerElement:1,zt=Pe.get(R).currentProgram.getUniforms();for(let St=0;St<$e;St++)zt.setValue(C,"_gl_DrawID",St),Ie.render(ge[St]/xt,qe[St])}else if(w.isInstancedMesh)Ie.renderInstances(Be,nt,w.count);else if(k.isInstancedBufferGeometry){const ge=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,qe=Math.min(k.instanceCount,ge);Ie.renderInstances(Be,nt,qe)}else Ie.render(Be,nt)};function rt(y,h,k){y.transparent===!0&&y.side===zn&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,eo(y,h,k),y.side=Mi,y.needsUpdate=!0,eo(y,h,k),y.side=zn):eo(y,h,k)}this.compile=function(y,h,k=null){k===null&&(k=y),p=ue.get(k),p.init(h),A.push(p),k.traverseVisible(function(w){w.isLight&&w.layers.test(h.layers)&&(p.pushLight(w),w.castShadow&&p.pushShadow(w))}),y!==k&&y.traverseVisible(function(w){w.isLight&&w.layers.test(h.layers)&&(p.pushLight(w),w.castShadow&&p.pushShadow(w))}),p.setupLights();const R=new Set;return y.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;const O=w.material;if(O)if(Array.isArray(O))for(let j=0;j<O.length;j++){const ie=O[j];rt(ie,k,w),R.add(ie)}else rt(O,k,w),R.add(O)}),p=A.pop(),R},this.compileAsync=function(y,h,k=null){const R=this.compile(y,h,k);return new Promise(w=>{function O(){if(R.forEach(function(j){Pe.get(j).currentProgram.isReady()&&R.delete(j)}),R.size===0){w(y);return}setTimeout(O,10)}et.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let fn=null;function An(y){fn&&fn(y)}function qo(){Vt.stop()}function pn(){Vt.start()}const Vt=new Ru;Vt.setAnimationLoop(An),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(y){fn=y,te.setAnimationLoop(y),y===null?Vt.stop():Vt.start()},te.addEventListener("sessionstart",qo),te.addEventListener("sessionend",pn),this.render=function(y,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(h),h=te.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,h,N),p=ue.get(y,A.length),p.init(h),A.push(p),re.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),Y.setFromProjectionMatrix(re),Ae=this.localClippingEnabled,se=xe.init(this.clippingPlanes,Ae),m=Se.get(y,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){const O=E.xr.getDepthSensingMesh();O!==null&&li(O,h,-1/0,E.sortObjects)}li(y,h,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ce,_e),Ge=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ge&&ee.addToRenderList(m,y),this.info.render.frame++,se===!0&&xe.beginShadows();const k=p.state.shadowsArray;we.render(k,y,h),se===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=m.opaque,w=m.transmissive;if(p.setupLights(),h.isArrayCamera){const O=h.cameras;if(w.length>0)for(let j=0,ie=O.length;j<ie;j++){const oe=O[j];Fs(R,w,y,oe)}Ge&&ee.render(y);for(let j=0,ie=O.length;j<ie;j++){const oe=O[j];Ji(m,y,oe,oe.viewport)}}else w.length>0&&Fs(R,w,y,h),Ge&&ee.render(y),Ji(m,y,h);N!==null&&L===0&&(Fe.updateMultisampleRenderTarget(N),Fe.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(E,y,h),Ne.resetDefaultState(),S=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],se===!0&&xe.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function li(y,h,k,R){if(y.visible===!1)return;if(y.layers.test(h.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(h);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){R&&Le.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);const j=X.update(y),ie=y.material;ie.visible&&m.push(y,j,ie,k,Le.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const j=X.update(y),ie=y.material;if(R&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Le.copy(y.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Le.copy(j.boundingSphere.center)),Le.applyMatrix4(y.matrixWorld).applyMatrix4(re)),Array.isArray(ie)){const oe=j.groups;for(let ve=0,Te=oe.length;ve<Te;ve++){const ae=oe[ve],Be=ie[ae.materialIndex];Be&&Be.visible&&m.push(y,j,Be,k,Le.z,ae)}}else ie.visible&&m.push(y,j,ie,k,Le.z,null)}}const O=y.children;for(let j=0,ie=O.length;j<ie;j++)li(O[j],h,k,R)}function Ji(y,h,k,R){const w=y.opaque,O=y.transmissive,j=y.transparent;p.setupLightsView(k),se===!0&&xe.setGlobalState(E.clippingPlanes,k),R&&Ee.viewport(D.copy(R)),w.length>0&&Qi(w,h,k),O.length>0&&Qi(O,h,k),j.length>0&&Qi(j,h,k),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Fs(y,h,k,R){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[R.id]===void 0&&(p.state.transmissionRenderTarget[R.id]=new Xi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ls:Vn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const O=p.state.transmissionRenderTarget[R.id],j=R.viewport||D;O.setSize(j.z*E.transmissionResolutionScale,j.w*E.transmissionResolutionScale);const ie=E.getRenderTarget(),oe=E.getActiveCubeFace(),ve=E.getActiveMipmapLevel();E.setRenderTarget(O),E.getClearColor($),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&ee.render(k);const Te=E.toneMapping;E.toneMapping=vi;const ae=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),p.setupLightsView(R),se===!0&&xe.setGlobalState(E.clippingPlanes,R),Qi(y,k,R),Fe.updateMultisampleRenderTarget(O),Fe.updateRenderTargetMipmap(O),et.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Je=0,nt=h.length;Je<nt;Je++){const Re=h[Je],Ie=Re.object,ge=Re.geometry,qe=Re.material,$e=Re.group;if(qe.side===zn&&Ie.layers.test(R.layers)){const xt=qe.side;qe.side=hn,qe.needsUpdate=!0,$o(Ie,k,R,ge,qe,$e),qe.side=xt,qe.needsUpdate=!0,Be=!0}}Be===!0&&(Fe.updateMultisampleRenderTarget(O),Fe.updateRenderTargetMipmap(O))}E.setRenderTarget(ie,oe,ve),E.setClearColor($,Z),ae!==void 0&&(R.viewport=ae),E.toneMapping=Te}function Qi(y,h,k){const R=h.isScene===!0?h.overrideMaterial:null;for(let w=0,O=y.length;w<O;w++){const j=y[w],ie=j.object,oe=j.geometry,ve=j.group;let Te=j.material;Te.allowOverride===!0&&R!==null&&(Te=R),ie.layers.test(k.layers)&&$o(ie,h,k,oe,Te,ve)}}function $o(y,h,k,R,w,O){y.onBeforeRender(E,h,k,R,w,O),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),w.onBeforeRender(E,h,k,R,y,O),w.transparent===!0&&w.side===zn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,E.renderBufferDirect(k,h,R,w,y,O),w.side=Mi,w.needsUpdate=!0,E.renderBufferDirect(k,h,R,w,y,O),w.side=zn):E.renderBufferDirect(k,h,R,w,y,O),y.onAfterRender(E,h,k,R,w,O)}function eo(y,h,k){h.isScene!==!0&&(h=Xe);const R=Pe.get(y),w=p.state.lights,O=p.state.shadowsArray,j=w.state.version,ie=J.getParameters(y,w.state,O,h,k),oe=J.getProgramCacheKey(ie);let ve=R.programs;R.environment=y.isMeshStandardMaterial?h.environment:null,R.fog=h.fog,R.envMap=(y.isMeshStandardMaterial?x:gt).get(y.envMap||R.environment),R.envMapRotation=R.environment!==null&&y.envMap===null?h.environmentRotation:y.envMapRotation,ve===void 0&&(y.addEventListener("dispose",ye),ve=new Map,R.programs=ve);let Te=ve.get(oe);if(Te!==void 0){if(R.currentProgram===Te&&R.lightsStateVersion===j)return Yo(y,ie),Te}else ie.uniforms=J.getUniforms(y),y.onBeforeCompile(ie,E),Te=J.acquireProgram(ie,oe),ve.set(oe,Te),R.uniforms=ie.uniforms;const ae=R.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ae.clippingPlanes=xe.uniform),Yo(y,ie),R.needsLights=Bs(y),R.lightsStateVersion=j,R.needsLights&&(ae.ambientLightColor.value=w.state.ambient,ae.lightProbe.value=w.state.probe,ae.directionalLights.value=w.state.directional,ae.directionalLightShadows.value=w.state.directionalShadow,ae.spotLights.value=w.state.spot,ae.spotLightShadows.value=w.state.spotShadow,ae.rectAreaLights.value=w.state.rectArea,ae.ltc_1.value=w.state.rectAreaLTC1,ae.ltc_2.value=w.state.rectAreaLTC2,ae.pointLights.value=w.state.point,ae.pointLightShadows.value=w.state.pointShadow,ae.hemisphereLights.value=w.state.hemi,ae.directionalShadowMap.value=w.state.directionalShadowMap,ae.directionalShadowMatrix.value=w.state.directionalShadowMatrix,ae.spotShadowMap.value=w.state.spotShadowMap,ae.spotLightMatrix.value=w.state.spotLightMatrix,ae.spotLightMap.value=w.state.spotLightMap,ae.pointShadowMap.value=w.state.pointShadowMap,ae.pointShadowMatrix.value=w.state.pointShadowMatrix),R.currentProgram=Te,R.uniformsList=null,Te}function Os(y){if(y.uniformsList===null){const h=y.currentProgram.getUniforms();y.uniformsList=ya.seqWithValue(h.seq,y.uniforms)}return y.uniformsList}function Yo(y,h){const k=Pe.get(y);k.outputColorSpace=h.outputColorSpace,k.batching=h.batching,k.batchingColor=h.batchingColor,k.instancing=h.instancing,k.instancingColor=h.instancingColor,k.instancingMorph=h.instancingMorph,k.skinning=h.skinning,k.morphTargets=h.morphTargets,k.morphNormals=h.morphNormals,k.morphColors=h.morphColors,k.morphTargetsCount=h.morphTargetsCount,k.numClippingPlanes=h.numClippingPlanes,k.numIntersection=h.numClipIntersection,k.vertexAlphas=h.vertexAlphas,k.vertexTangents=h.vertexTangents,k.toneMapping=h.toneMapping}function Qa(y,h,k,R,w){h.isScene!==!0&&(h=Xe),Fe.resetTextureUnits();const O=h.fog,j=R.isMeshStandardMaterial?h.environment:null,ie=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:No,oe=(R.isMeshStandardMaterial?x:gt).get(R.envMap||j),ve=R.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Te=!!k.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),ae=!!k.morphAttributes.position,Be=!!k.morphAttributes.normal,Je=!!k.morphAttributes.color;let nt=vi;R.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(nt=E.toneMapping);const Re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ie=Re!==void 0?Re.length:0,ge=Pe.get(R),qe=p.state.lights;if(se===!0&&(Ae===!0||y!==M)){const qt=y===M&&R.id===S;xe.setState(R,y,qt)}let $e=!1;R.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==qe.state.version||ge.outputColorSpace!==ie||w.isBatchedMesh&&ge.batching===!1||!w.isBatchedMesh&&ge.batching===!0||w.isBatchedMesh&&ge.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&ge.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&ge.instancing===!1||!w.isInstancedMesh&&ge.instancing===!0||w.isSkinnedMesh&&ge.skinning===!1||!w.isSkinnedMesh&&ge.skinning===!0||w.isInstancedMesh&&ge.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&ge.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&ge.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&ge.instancingMorph===!1&&w.morphTexture!==null||ge.envMap!==oe||R.fog===!0&&ge.fog!==O||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==xe.numPlanes||ge.numIntersection!==xe.numIntersection)||ge.vertexAlphas!==ve||ge.vertexTangents!==Te||ge.morphTargets!==ae||ge.morphNormals!==Be||ge.morphColors!==Je||ge.toneMapping!==nt||ge.morphTargetsCount!==Ie)&&($e=!0):($e=!0,ge.__version=R.version);let xt=ge.currentProgram;$e===!0&&(xt=eo(R,h,w));let zt=!1,St=!1,Fn=!1;const dt=xt.getUniforms(),Wt=ge.uniforms;if(Ee.useProgram(xt.program)&&(zt=!0,St=!0,Fn=!0),R.id!==S&&(S=R.id,St=!0),zt||M!==y){Ee.buffers.depth.getReversed()?(pe.copy(y.projectionMatrix),Mf(pe),Sf(pe),dt.setValue(C,"projectionMatrix",pe)):dt.setValue(C,"projectionMatrix",y.projectionMatrix),dt.setValue(C,"viewMatrix",y.matrixWorldInverse);const Pt=dt.map.cameraPosition;Pt!==void 0&&Pt.setValue(C,de.setFromMatrixPosition(y.matrixWorld)),Ye.logarithmicDepthBuffer&&dt.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&dt.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,St=!0,Fn=!0)}if(w.isSkinnedMesh){dt.setOptional(C,w,"bindMatrix"),dt.setOptional(C,w,"bindMatrixInverse");const qt=w.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(C,"boneTexture",qt.boneTexture,Fe))}w.isBatchedMesh&&(dt.setOptional(C,w,"batchingTexture"),dt.setValue(C,"batchingTexture",w._matricesTexture,Fe),dt.setOptional(C,w,"batchingIdTexture"),dt.setValue(C,"batchingIdTexture",w._indirectTexture,Fe),dt.setOptional(C,w,"batchingColorTexture"),w._colorsTexture!==null&&dt.setValue(C,"batchingColorTexture",w._colorsTexture,Fe));const Xt=k.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&me.update(w,k,xt),(St||ge.receiveShadow!==w.receiveShadow)&&(ge.receiveShadow=w.receiveShadow,dt.setValue(C,"receiveShadow",w.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Wt.envMap.value=oe,Wt.flipEnvMap.value=oe.isCubeTexture&&oe.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&h.environment!==null&&(Wt.envMapIntensity.value=h.environmentIntensity),St&&(dt.setValue(C,"toneMappingExposure",E.toneMappingExposure),ge.needsLights&&er(Wt,Fn),O&&R.fog===!0&&V.refreshFogUniforms(Wt,O),V.refreshMaterialUniforms(Wt,R,W,Q,p.state.transmissionRenderTarget[y.id]),ya.upload(C,Os(ge),Wt,Fe)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(ya.upload(C,Os(ge),Wt,Fe),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&dt.setValue(C,"center",w.center),dt.setValue(C,"modelViewMatrix",w.modelViewMatrix),dt.setValue(C,"normalMatrix",w.normalMatrix),dt.setValue(C,"modelMatrix",w.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const qt=R.uniformsGroups;for(let Pt=0,to=qt.length;Pt<to;Pt++){const Ai=qt[Pt];I.update(Ai,xt),I.bind(Ai,xt)}}return xt}function er(y,h){y.ambientLightColor.needsUpdate=h,y.lightProbe.needsUpdate=h,y.directionalLights.needsUpdate=h,y.directionalLightShadows.needsUpdate=h,y.pointLights.needsUpdate=h,y.pointLightShadows.needsUpdate=h,y.spotLights.needsUpdate=h,y.spotLightShadows.needsUpdate=h,y.rectAreaLights.needsUpdate=h,y.hemisphereLights.needsUpdate=h}function Bs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,h,k){const R=Pe.get(y);R.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),Pe.get(y.texture).__webglTexture=h,Pe.get(y.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:k,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,h){const k=Pe.get(y);k.__webglFramebuffer=h,k.__useDefaultFramebuffer=h===void 0};const tr=C.createFramebuffer();this.setRenderTarget=function(y,h=0,k=0){N=y,P=h,L=k;let R=!0,w=null,O=!1,j=!1;if(y){const oe=Pe.get(y);if(oe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),R=!1;else if(oe.__webglFramebuffer===void 0)Fe.setupRenderTarget(y);else if(oe.__hasExternalTextures)Fe.rebindTextures(y,Pe.get(y.texture).__webglTexture,Pe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ae=y.depthTexture;if(oe.__boundDepthTexture!==ae){if(ae!==null&&Pe.has(ae)&&(y.width!==ae.image.width||y.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(y)}}const ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(j=!0);const Te=Pe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[h])?w=Te[h][k]:w=Te[h],O=!0):y.samples>0&&Fe.useMultisampledRTT(y)===!1?w=Pe.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?w=Te[k]:w=Te,D.copy(y.viewport),G.copy(y.scissor),H=y.scissorTest}else D.copy(Ce).multiplyScalar(W).floor(),G.copy(Ze).multiplyScalar(W).floor(),H=ut;if(k!==0&&(w=tr),Ee.bindFramebuffer(C.FRAMEBUFFER,w)&&R&&Ee.drawBuffers(y,w),Ee.viewport(D),Ee.scissor(G),Ee.setScissorTest(H),O){const oe=Pe.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+h,oe.__webglTexture,k)}else if(j){const oe=Pe.get(y.texture),ve=h;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,oe.__webglTexture,k,ve)}else if(y!==null&&k!==0){const oe=Pe.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,oe.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(y,h,k,R,w,O,j,ie=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&j!==void 0&&(oe=oe[j]),oe){Ee.bindFramebuffer(C.FRAMEBUFFER,oe);try{const ve=y.textures[ie],Te=ve.format,ae=ve.type;if(!Ye.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}h>=0&&h<=y.width-R&&k>=0&&k<=y.height-w&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ie),C.readPixels(h,k,R,w,le.convert(Te),le.convert(ae),O))}finally{const ve=N!==null?Pe.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(y,h,k,R,w,O,j,ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&j!==void 0&&(oe=oe[j]),oe)if(h>=0&&h<=y.width-R&&k>=0&&k<=y.height-w){Ee.bindFramebuffer(C.FRAMEBUFFER,oe);const ve=y.textures[ie],Te=ve.format,ae=ve.type;if(!Ye.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.bufferData(C.PIXEL_PACK_BUFFER,O.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ie),C.readPixels(h,k,R,w,le.convert(Te),le.convert(ae),0);const Je=N!==null?Pe.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,Je);const nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await yf(C,nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Be),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,O),C.deleteBuffer(Be),C.deleteSync(nt),O}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,h=null,k=0){const R=Math.pow(2,-k),w=Math.floor(y.image.width*R),O=Math.floor(y.image.height*R),j=h!==null?h.x:0,ie=h!==null?h.y:0;Fe.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,j,ie,w,O),Ee.unbindTexture()};const nr=C.createFramebuffer(),ir=C.createFramebuffer();this.copyTextureToTexture=function(y,h,k=null,R=null,w=0,O=null){O===null&&(w!==0?(Co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),O=w,w=0):O=0);let j,ie,oe,ve,Te,ae,Be,Je,nt;const Re=y.isCompressedTexture?y.mipmaps[O]:y.image;if(k!==null)j=k.max.x-k.min.x,ie=k.max.y-k.min.y,oe=k.isBox3?k.max.z-k.min.z:1,ve=k.min.x,Te=k.min.y,ae=k.isBox3?k.min.z:0;else{const Xt=Math.pow(2,-w);j=Math.floor(Re.width*Xt),ie=Math.floor(Re.height*Xt),y.isDataArrayTexture?oe=Re.depth:y.isData3DTexture?oe=Math.floor(Re.depth*Xt):oe=1,ve=0,Te=0,ae=0}R!==null?(Be=R.x,Je=R.y,nt=R.z):(Be=0,Je=0,nt=0);const Ie=le.convert(h.format),ge=le.convert(h.type);let qe;h.isData3DTexture?(Fe.setTexture3D(h,0),qe=C.TEXTURE_3D):h.isDataArrayTexture||h.isCompressedArrayTexture?(Fe.setTexture2DArray(h,0),qe=C.TEXTURE_2D_ARRAY):(Fe.setTexture2D(h,0),qe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,h.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,h.unpackAlignment);const $e=C.getParameter(C.UNPACK_ROW_LENGTH),xt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zt=C.getParameter(C.UNPACK_SKIP_PIXELS),St=C.getParameter(C.UNPACK_SKIP_ROWS),Fn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ve),C.pixelStorei(C.UNPACK_SKIP_ROWS,Te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ae);const dt=y.isDataArrayTexture||y.isData3DTexture,Wt=h.isDataArrayTexture||h.isData3DTexture;if(y.isDepthTexture){const Xt=Pe.get(y),qt=Pe.get(h),Pt=Pe.get(Xt.__renderTarget),to=Pe.get(qt.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,Pt.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,to.__webglFramebuffer);for(let Ai=0;Ai<oe;Ai++)dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(y).__webglTexture,w,ae+Ai),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.get(h).__webglTexture,O,nt+Ai)),C.blitFramebuffer(ve,Te,j,ie,Be,Je,j,ie,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(w!==0||y.isRenderTargetTexture||Pe.has(y)){const Xt=Pe.get(y),qt=Pe.get(h);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,nr),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,ir);for(let Pt=0;Pt<oe;Pt++)dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,w,ae+Pt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,w),Wt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,O,nt+Pt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,O),w!==0?C.blitFramebuffer(ve,Te,j,ie,Be,Je,j,ie,C.COLOR_BUFFER_BIT,C.NEAREST):Wt?C.copyTexSubImage3D(qe,O,Be,Je,nt+Pt,ve,Te,j,ie):C.copyTexSubImage2D(qe,O,Be,Je,ve,Te,j,ie);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Wt?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(qe,O,Be,Je,nt,j,ie,oe,Ie,ge,Re.data):h.isCompressedArrayTexture?C.compressedTexSubImage3D(qe,O,Be,Je,nt,j,ie,oe,Ie,Re.data):C.texSubImage3D(qe,O,Be,Je,nt,j,ie,oe,Ie,ge,Re):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Be,Je,j,ie,Ie,ge,Re.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Be,Je,Re.width,Re.height,Ie,Re.data):C.texSubImage2D(C.TEXTURE_2D,O,Be,Je,j,ie,Ie,ge,Re);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,St),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fn),O===0&&h.generateMipmaps&&C.generateMipmap(qe),Ee.unbindTexture()},this.copyTextureToTexture3D=function(y,h,k=null,R=null,w=0){return Co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,h,k,R,w)},this.initRenderTarget=function(y){Pe.get(y).__webglFramebuffer===void 0&&Fe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Fe.setTextureCube(y,0):y.isData3DTexture?Fe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Fe.setTexture2DArray(y,0):Fe.setTexture2D(y,0),Ee.unbindTexture()},this.resetState=function(){P=0,L=0,N=null,Ee.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function Q1(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),o=new Set(Object.keys(n[0].morphAttributes)),s={},a={},r=n[0].morphTargetsRelative,l=new Mn;let d=0;for(let c=0;c<n.length;++c){const u=n[c];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in u.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(u.attributes[_]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in u.morphAttributes){if(!o.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[_]===void 0&&(a[_]=[]),a[_].push(u.morphAttributes[_])}if(e){let _;if(t)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,_,c),d+=_}}if(t){let c=0;const u=[];for(let f=0;f<n.length;++f){const _=n[f].index;for(let g=0;g<_.count;++g)u.push(_.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(u)}for(const c in s){const u=Fd(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in a){const u=a[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){const _=[];for(let v=0;v<a[c].length;++v)_.push(a[c][v][f]);const g=Fd(_);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Fd(n){let e,t,i,o=-1,s=0;for(let d=0;d<n.length;++d){const c=n[d];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=c.gpuType),o!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const a=new e(s),r=new vn(a,t,i);let l=0;for(let d=0;d<n.length;++d){const c=n[d];if(c.isInterleavedBufferAttribute){const u=l/t;for(let f=0,_=c.count;f<_;f++)for(let g=0;g<t;g++){const v=c.getComponent(f,g);r.setComponent(f+u,g,v)}}else a.set(c.array,l);l+=c.count*t}return o!==void 0&&(r.gpuType=o),r}const Iu=n=>n.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),Ei=(n,e)=>{const t=Number.parseInt(n.slice(1),16),i=o=>Math.max(0,Math.min(255,(t>>o&255)+e));return`#${[16,8,0].map(o=>i(o).toString(16).padStart(2,"0")).join("")}`},qi=[],wt=(n,e,t,i={})=>{qi.push({id:n,label:i.label||Iu(n),color:e,accent:i.accent||Ei(e,-24),category:t,transparent:!!i.transparent})};[["grass_block","#698546"],["dirt","#765039"],["coarse_dirt","#6b4934"],["podzol","#59422d"],["mycelium","#6f616a"],["rooted_dirt","#725239"],["mud","#3e4245"],["packed_mud","#876e50"],["mud_bricks","#8a684c"],["clay","#9ca6ad"],["gravel","#77736f"],["sand","#d9ca8c"],["red_sand","#b9652e"],["suspicious_sand","#cdbc80"],["suspicious_gravel","#77716d"],["snow_block","#edf3f3"],["powder_snow","#f2f7f7"],["ice","#7dafdf"],["packed_ice","#5d93cf"],["blue_ice","#3f74cc"],["moss_block","#617d31"],["moss_carpet","#6e8b38"],["calcite","#ddd9cf"],["tuff","#59625d"],["dripstone_block","#866858"],["pointed_dripstone","#8e6d58"],["magma_block","#9a3f1f"],["obsidian","#252033"],["crying_obsidian","#392260"],["netherrack","#703538"],["soul_sand","#4b3a31"],["soul_soil","#40342e"],["basalt","#48474a"],["smooth_basalt","#55545a"],["blackstone","#29272c"],["end_stone","#d8d89c"],["sculk","#0c3439"],["sculk_catalyst","#174950"]].forEach(([n,e])=>wt(n,e,"Natural",{transparent:["ice","powder_snow"].includes(n)}));[["stone","#7c817c"],["cobblestone","#6f736f"],["mossy_cobblestone","#63715a"],["smooth_stone","#969a96"],["stone_bricks","#787b78"],["mossy_stone_bricks","#697261"],["cracked_stone_bricks","#70736f"],["chiseled_stone_bricks","#777a76"],["deepslate","#4c5052"],["cobbled_deepslate","#45494b"],["polished_deepslate","#55595a"],["deepslate_bricks","#414547"],["cracked_deepslate_bricks","#3e4244"],["deepslate_tiles","#353a3c"],["cracked_deepslate_tiles","#34383a"],["chiseled_deepslate","#414648"],["andesite","#858786"],["polished_andesite","#929493"],["diorite","#b5b5b1"],["polished_diorite","#c0c0bb"],["granite","#9a6858"],["polished_granite","#a87362"],["bricks","#965746"],["prismarine","#65a394"],["prismarine_bricks","#6cb2a2"],["dark_prismarine","#315d50"],["sea_lantern","#b8d6c8"],["quartz_block","#e5e0d5"],["smooth_quartz","#eee9df"],["quartz_bricks","#ded9ce"],["chiseled_quartz","#ddd8cd"],["purpur_block","#a276a4"],["purpur_pillar","#a77baa"],["end_stone_bricks","#c9ca8e"]].forEach(([n,e])=>wt(n,e,"Stone"));const eg=[["oak","#9a7546","#55713c"],["spruce","#65482d","#365536"],["birch","#c4b77b","#6f8548"],["jungle","#9a7047","#4c753b"],["acacia","#a85b39","#62713b"],["dark_oak","#4c3524","#30472f"],["mangrove","#743d37","#4b693f"],["cherry","#d39b94","#d58391"],["pale_oak","#c2bfb1","#81907c"],["crimson","#713749","#8b3153"],["warped","#2f7772","#1f8b78"],["bamboo","#c0a845","#7d9341"]],tg=[["planks",8],["log",-22],["stripped_log",12],["wood",-30],["stripped_wood",2],["leaves",0],["stairs",6],["slab",10],["fence",-2],["fence_gate",-5],["door",4],["trapdoor",-4],["pressure_plate",12],["button",-12],["sign",14],["hanging_sign",-8]];for(const[n,e,t]of eg)for(const[i,o]of tg){let s=`${n}_${i}`,a=Ei(e,o),r;i==="leaves"&&(a=t,r=n==="crimson"?"Nether Wart Block":n==="warped"?"Warped Wart Block":n==="bamboo"?"Bamboo Shoots":`${Iu(n)} Leaves`),(n==="crimson"||n==="warped")&&(s=s.replace("_stripped_log","_stripped_stem").replace("_log","_stem").replace("_stripped_wood","_stripped_hyphae").replace("_wood","_hyphae")),n==="bamboo"&&(s=s.replace("bamboo_stripped_log","stripped_bamboo_block").replace("bamboo_log","bamboo_block").replace("bamboo_stripped_wood","chiseled_bamboo").replace("bamboo_wood","bamboo_mosaic")),wt(s,a,"Wood",{label:r,accent:Ei(a,i==="leaves"?24:-28),transparent:i==="leaves"})}const Uu=[["white","#e7e7df"],["light_gray","#9d9d97"],["gray","#51565a"],["black","#25282c"],["brown","#754b2f"],["red","#a12e32"],["orange","#d66a21"],["yellow","#e5bd27"],["lime","#70ae32"],["green","#4d6f2a"],["cyan","#238693"],["light_blue","#54a7cf"],["blue","#354d9a"],["purple","#713c91"],["magenta","#a94ca7"],["pink","#d27b99"]];for(const[n,e]of Uu)wt(`${n}_wool`,e,"Colored"),wt(`${n}_terracotta`,Ei(e,-12),"Colored",{accent:"#704c3e"}),wt(`${n}_concrete`,Ei(e,6),"Colored");wt("glass","#b9d8db","Glass",{accent:"#edfafa",transparent:!0});for(const[n,e]of Uu)wt(`${n}_stained_glass`,e,"Glass",{accent:Ei(e,32),transparent:!0});[["coal_ore","#666966"],["deepslate_coal_ore","#444849"],["iron_ore","#8d8177"],["deepslate_iron_ore","#5c5652"],["copper_ore","#8a7567"],["deepslate_copper_ore","#5b5651"],["gold_ore","#8b8161"],["deepslate_gold_ore","#5d584b"],["redstone_ore","#776466"],["deepslate_redstone_ore","#51484a"],["emerald_ore","#6d8273"],["deepslate_emerald_ore","#4b5850"],["lapis_ore","#606d83"],["deepslate_lapis_ore","#48505d"],["diamond_ore","#6c8b8a"],["deepslate_diamond_ore","#4b6060"],["nether_gold_ore","#82463b"],["nether_quartz_ore","#864d4d"],["coal_block","#252729"],["raw_iron_block","#9a806c"],["iron_block","#c5c7c2"],["raw_copper_block","#9c684b"],["copper_block","#b46847"],["raw_gold_block","#c29a42"],["gold_block","#e1b82f"],["redstone_block","#a11c16"],["emerald_block","#27a65d"],["lapis_block","#27549e"],["diamond_block","#45bfc2"],["netherite_block","#454043"]].forEach(([n,e])=>wt(n,e,"Minerals",{accent:n.includes("ore")?Ei(e,38):Ei(e,-30)}));wt("water","#3f76c7","Natural",{transparent:!0});wt("chest","#9c6a32","Wood");wt("crafting_table","#a57843","Wood");wt("furnace","#777777","Stone");wt("iron_ingot","#d8d8d8","Minerals");wt("gold_ingot","#e1b935","Minerals");wt("copper_ingot","#bd754e","Minerals");wt("red_bed","#b52b2b","Colored");wt("bedrock","#484848","Stone");wt("dirt_path","#896b45","Natural");wt("bell","#d9aa2f","Structures");wt("blast_furnace","#55585a","Structures");wt("grindstone","#77736f","Structures");[["cobblestone_slab","#6f736f"],["cobblestone_stairs","#6f736f"],["cobblestone_wall","#6f736f"],["stone_slab","#969a96"],["stone_brick_slab","#787b78"],["stone_brick_stairs","#787b78"],["torch","#dfb45a"],["redstone_torch","#a72b22"],["white_carpet","#e7e7df"],["light_gray_carpet","#9d9d97"],["white_wall_banner","#e7e7df"]].forEach(([n,e])=>wt(n,e,"Structures"));if(new Set(qi.map(n=>n.id)).size!==qi.length)throw new Error("Duplicate block IDs in the catalog.");const Dl=Object.freeze(qi),Bt=Object.freeze({...Object.fromEntries(qi.map(n=>[n.id,n])),red_bed_head:{...qi.find(n=>n.id==="red_bed"),id:"red_bed_head"}}),ng=Object.freeze(["All",...new Set(qi.map(n=>n.category))]),ig=JSON.parse('["acacia_door_bottom","acacia_door_top","acacia_leaves","acacia_log","acacia_log_top","acacia_planks","acacia_sapling","acacia_trapdoor","activator_rail","activator_rail_on","allium","amethyst_block","amethyst_cluster","ancient_debris_side","ancient_debris_top","andesite","anvil","anvil_top","attached_melon_stem","attached_pumpkin_stem","azalea_leaves","azalea_plant","azalea_side","azalea_top","azure_bluet","bamboo_block","bamboo_block_top","bamboo_door_bottom","bamboo_door_top","bamboo_fence","bamboo_fence_gate","bamboo_fence_gate_particle","bamboo_fence_particle","bamboo_large_leaves","bamboo_mosaic","bamboo_planks","bamboo_singleleaf","bamboo_small_leaves","bamboo_stage0","bamboo_stalk","bamboo_trapdoor","barrel_bottom","barrel_side","barrel_top","barrel_top_open","basalt_side","basalt_top","beacon","bedrock","bee_nest_bottom","bee_nest_front","bee_nest_front_honey","bee_nest_side","bee_nest_top","beehive_end","beehive_front","beehive_front_honey","beehive_side","beetroots_stage0","beetroots_stage1","beetroots_stage2","beetroots_stage3","bell_bottom","bell_side","bell_top","big_dripleaf_side","big_dripleaf_stem","big_dripleaf_tip","big_dripleaf_top","birch_door_bottom","birch_door_top","birch_leaves","birch_log","birch_log_top","birch_planks","birch_sapling","birch_trapdoor","black_candle","black_candle_lit","black_concrete","black_concrete_powder","black_glazed_terracotta","black_shulker_box","black_stained_glass","black_stained_glass_pane_top","black_terracotta","black_wool","blackstone","blackstone_top","blast_furnace_front","blast_furnace_front_on","blast_furnace_side","blast_furnace_top","blue_candle","blue_candle_lit","blue_concrete","blue_concrete_powder","blue_glazed_terracotta","blue_ice","blue_orchid","blue_shulker_box","blue_stained_glass","blue_stained_glass_pane_top","blue_terracotta","blue_wool","bone_block_side","bone_block_top","bookshelf","brain_coral","brain_coral_block","brain_coral_fan","brewing_stand","brewing_stand_base","bricks","brown_candle","brown_candle_lit","brown_concrete","brown_concrete_powder","brown_glazed_terracotta","brown_mushroom","brown_mushroom_block","brown_shulker_box","brown_stained_glass","brown_stained_glass_pane_top","brown_terracotta","brown_wool","bubble_coral","bubble_coral_block","bubble_coral_fan","budding_amethyst","bush","cactus_bottom","cactus_flower","cactus_side","cactus_top","cake_bottom","cake_inner","cake_side","cake_top","calcite","calibrated_sculk_sensor_amethyst","calibrated_sculk_sensor_input_side","calibrated_sculk_sensor_top","campfire_fire","campfire_log","campfire_log_lit","candle","candle_lit","carrots_stage0","carrots_stage1","carrots_stage2","carrots_stage3","cartography_table_side1","cartography_table_side2","cartography_table_side3","cartography_table_top","carved_pumpkin","cauldron_bottom","cauldron_inner","cauldron_side","cauldron_top","cave_vines","cave_vines_lit","cave_vines_plant","cave_vines_plant_lit","chain","chain_command_block_back","chain_command_block_conditional","chain_command_block_front","chain_command_block_side","cherry_door_bottom","cherry_door_top","cherry_leaves","cherry_log","cherry_log_top","cherry_planks","cherry_sapling","cherry_trapdoor","chipped_anvil_top","chiseled_bookshelf_empty","chiseled_bookshelf_occupied","chiseled_bookshelf_side","chiseled_bookshelf_top","chiseled_copper","chiseled_deepslate","chiseled_nether_bricks","chiseled_polished_blackstone","chiseled_quartz_block","chiseled_quartz_block_top","chiseled_red_sandstone","chiseled_resin_bricks","chiseled_sandstone","chiseled_stone_bricks","chiseled_tuff","chiseled_tuff_bricks","chiseled_tuff_bricks_top","chiseled_tuff_top","chorus_flower","chorus_flower_dead","chorus_plant","clay","closed_eyeblossom","coal_block","coal_ore","coarse_dirt","cobbled_deepslate","cobblestone","cobweb","cocoa_stage0","cocoa_stage1","cocoa_stage2","command_block_back","command_block_conditional","command_block_front","command_block_side","comparator","comparator_on","composter_bottom","composter_compost","composter_ready","composter_side","composter_top","conduit","copper_block","copper_bulb","copper_bulb_lit","copper_bulb_lit_powered","copper_bulb_powered","copper_door_bottom","copper_door_top","copper_grate","copper_ore","copper_trapdoor","cornflower","cracked_deepslate_bricks","cracked_deepslate_tiles","cracked_nether_bricks","cracked_polished_blackstone_bricks","cracked_stone_bricks","crafter_bottom","crafter_east","crafter_east_crafting","crafter_east_triggered","crafter_north","crafter_north_crafting","crafter_south","crafter_south_triggered","crafter_top","crafter_top_crafting","crafter_top_triggered","crafter_west","crafter_west_crafting","crafter_west_triggered","crafting_table_front","crafting_table_side","crafting_table_top","creaking_heart","creaking_heart_awake","creaking_heart_dormant","creaking_heart_top","creaking_heart_top_awake","creaking_heart_top_dormant","crimson_door_bottom","crimson_door_top","crimson_fungus","crimson_nylium","crimson_nylium_side","crimson_planks","crimson_roots","crimson_roots_pot","crimson_stem","crimson_stem_top","crimson_trapdoor","crying_obsidian","cut_copper","cut_red_sandstone","cut_sandstone","cyan_candle","cyan_candle_lit","cyan_concrete","cyan_concrete_powder","cyan_glazed_terracotta","cyan_shulker_box","cyan_stained_glass","cyan_stained_glass_pane_top","cyan_terracotta","cyan_wool","damaged_anvil_top","dandelion","dark_oak_door_bottom","dark_oak_door_top","dark_oak_leaves","dark_oak_log","dark_oak_log_top","dark_oak_planks","dark_oak_sapling","dark_oak_trapdoor","dark_prismarine","daylight_detector_inverted_top","daylight_detector_side","daylight_detector_top","dead_brain_coral","dead_brain_coral_block","dead_brain_coral_fan","dead_bubble_coral","dead_bubble_coral_block","dead_bubble_coral_fan","dead_bush","dead_fire_coral","dead_fire_coral_block","dead_fire_coral_fan","dead_horn_coral","dead_horn_coral_block","dead_horn_coral_fan","dead_tube_coral","dead_tube_coral_block","dead_tube_coral_fan","debug","debug2","deepslate","deepslate_bricks","deepslate_coal_ore","deepslate_copper_ore","deepslate_diamond_ore","deepslate_emerald_ore","deepslate_gold_ore","deepslate_iron_ore","deepslate_lapis_ore","deepslate_redstone_ore","deepslate_tiles","deepslate_top","destroy_stage_0","destroy_stage_1","destroy_stage_2","destroy_stage_3","destroy_stage_4","destroy_stage_5","destroy_stage_6","destroy_stage_7","destroy_stage_8","destroy_stage_9","detector_rail","detector_rail_on","diamond_block","diamond_ore","diorite","dirt","dirt_path_side","dirt_path_top","dispenser_front","dispenser_front_vertical","dragon_egg","dried_ghast_hydration_0_bottom","dried_ghast_hydration_0_east","dried_ghast_hydration_0_north","dried_ghast_hydration_0_south","dried_ghast_hydration_0_tentacles","dried_ghast_hydration_0_top","dried_ghast_hydration_0_west","dried_ghast_hydration_1_bottom","dried_ghast_hydration_1_east","dried_ghast_hydration_1_north","dried_ghast_hydration_1_south","dried_ghast_hydration_1_tentacles","dried_ghast_hydration_1_top","dried_ghast_hydration_1_west","dried_ghast_hydration_2_bottom","dried_ghast_hydration_2_east","dried_ghast_hydration_2_north","dried_ghast_hydration_2_south","dried_ghast_hydration_2_tentacles","dried_ghast_hydration_2_top","dried_ghast_hydration_2_west","dried_ghast_hydration_3_bottom","dried_ghast_hydration_3_east","dried_ghast_hydration_3_north","dried_ghast_hydration_3_south","dried_ghast_hydration_3_tentacles","dried_ghast_hydration_3_top","dried_ghast_hydration_3_west","dried_kelp_bottom","dried_kelp_side","dried_kelp_top","dripstone_block","dropper_front","dropper_front_vertical","emerald_block","emerald_ore","enchanting_table_bottom","enchanting_table_side","enchanting_table_top","end_portal_frame_eye","end_portal_frame_side","end_portal_frame_top","end_rod","end_stone","end_stone_bricks","exposed_chiseled_copper","exposed_copper","exposed_copper_bulb","exposed_copper_bulb_lit","exposed_copper_bulb_lit_powered","exposed_copper_bulb_powered","exposed_copper_door_bottom","exposed_copper_door_top","exposed_copper_grate","exposed_copper_trapdoor","exposed_cut_copper","farmland","farmland_moist","fern","fire_0","fire_1","fire_coral","fire_coral_block","fire_coral_fan","firefly_bush","firefly_bush_emissive","fletching_table_front","fletching_table_side","fletching_table_top","flower_pot","flowering_azalea_leaves","flowering_azalea_side","flowering_azalea_top","frogspawn","frosted_ice_0","frosted_ice_1","frosted_ice_2","frosted_ice_3","furnace_front","furnace_front_on","furnace_side","furnace_top","gilded_blackstone","glass","glass_pane_top","glow_item_frame","glow_lichen","glowstone","gold_block","gold_ore","granite","grass_block_side","grass_block_side_overlay","grass_block_snow","grass_block_top","gravel","gray_candle","gray_candle_lit","gray_concrete","gray_concrete_powder","gray_glazed_terracotta","gray_shulker_box","gray_stained_glass","gray_stained_glass_pane_top","gray_terracotta","gray_wool","green_candle","green_candle_lit","green_concrete","green_concrete_powder","green_glazed_terracotta","green_shulker_box","green_stained_glass","green_stained_glass_pane_top","green_terracotta","green_wool","grindstone_pivot","grindstone_round","grindstone_side","hanging_roots","hay_block_side","hay_block_top","heavy_core","honey_block_bottom","honey_block_side","honey_block_top","honeycomb_block","hopper_inside","hopper_outside","hopper_top","horn_coral","horn_coral_block","horn_coral_fan","ice","iron_bars","iron_block","iron_door_bottom","iron_door_top","iron_ore","iron_trapdoor","item_frame","jack_o_lantern","jigsaw_bottom","jigsaw_lock","jigsaw_side","jigsaw_top","jukebox_side","jukebox_top","jungle_door_bottom","jungle_door_top","jungle_leaves","jungle_log","jungle_log_top","jungle_planks","jungle_sapling","jungle_trapdoor","kelp","kelp_plant","ladder","lantern","lapis_block","lapis_ore","large_amethyst_bud","large_fern_bottom","large_fern_top","lava_flow","lava_still","leaf_litter","lectern_base","lectern_front","lectern_sides","lectern_top","lever","light_blue_candle","light_blue_candle_lit","light_blue_concrete","light_blue_concrete_powder","light_blue_glazed_terracotta","light_blue_shulker_box","light_blue_stained_glass","light_blue_stained_glass_pane_top","light_blue_terracotta","light_blue_wool","light_gray_candle","light_gray_candle_lit","light_gray_concrete","light_gray_concrete_powder","light_gray_glazed_terracotta","light_gray_shulker_box","light_gray_stained_glass","light_gray_stained_glass_pane_top","light_gray_terracotta","light_gray_wool","lightning_rod","lightning_rod_on","lilac_bottom","lilac_top","lily_of_the_valley","lily_pad","lime_candle","lime_candle_lit","lime_concrete","lime_concrete_powder","lime_glazed_terracotta","lime_shulker_box","lime_stained_glass","lime_stained_glass_pane_top","lime_terracotta","lime_wool","lodestone_side","lodestone_top","loom_bottom","loom_front","loom_side","loom_top","magenta_candle","magenta_candle_lit","magenta_concrete","magenta_concrete_powder","magenta_glazed_terracotta","magenta_shulker_box","magenta_stained_glass","magenta_stained_glass_pane_top","magenta_terracotta","magenta_wool","magma","mangrove_door_bottom","mangrove_door_top","mangrove_leaves","mangrove_log","mangrove_log_top","mangrove_planks","mangrove_propagule","mangrove_propagule_hanging","mangrove_roots_side","mangrove_roots_top","mangrove_trapdoor","medium_amethyst_bud","melon_side","melon_stem","melon_top","moss_block","mossy_cobblestone","mossy_stone_bricks","mud","mud_bricks","muddy_mangrove_roots_side","muddy_mangrove_roots_top","mushroom_block_inside","mushroom_stem","mycelium_side","mycelium_top","nether_bricks","nether_gold_ore","nether_portal","nether_quartz_ore","nether_sprouts","nether_wart_block","nether_wart_stage0","nether_wart_stage1","nether_wart_stage2","netherite_block","netherrack","note_block","oak_door_bottom","oak_door_top","oak_leaves","oak_log","oak_log_top","oak_planks","oak_sapling","oak_trapdoor","observer_back","observer_back_on","observer_front","observer_side","observer_top","obsidian","ochre_froglight_side","ochre_froglight_top","open_eyeblossom","open_eyeblossom_emissive","orange_candle","orange_candle_lit","orange_concrete","orange_concrete_powder","orange_glazed_terracotta","orange_shulker_box","orange_stained_glass","orange_stained_glass_pane_top","orange_terracotta","orange_tulip","orange_wool","oxeye_daisy","oxidized_chiseled_copper","oxidized_copper","oxidized_copper_bulb","oxidized_copper_bulb_lit","oxidized_copper_bulb_lit_powered","oxidized_copper_bulb_powered","oxidized_copper_door_bottom","oxidized_copper_door_top","oxidized_copper_grate","oxidized_copper_trapdoor","oxidized_cut_copper","packed_ice","packed_mud","pale_hanging_moss","pale_hanging_moss_tip","pale_moss_block","pale_moss_carpet","pale_moss_carpet_side_small","pale_moss_carpet_side_tall","pale_oak_door_bottom","pale_oak_door_top","pale_oak_leaves","pale_oak_log","pale_oak_log_top","pale_oak_planks","pale_oak_sapling","pale_oak_trapdoor","pearlescent_froglight_side","pearlescent_froglight_top","peony_bottom","peony_top","pink_candle","pink_candle_lit","pink_concrete","pink_concrete_powder","pink_glazed_terracotta","pink_petals","pink_petals_stem","pink_shulker_box","pink_stained_glass","pink_stained_glass_pane_top","pink_terracotta","pink_tulip","pink_wool","piston_bottom","piston_inner","piston_side","piston_top","piston_top_sticky","pitcher_crop_bottom","pitcher_crop_bottom_stage_1","pitcher_crop_bottom_stage_2","pitcher_crop_bottom_stage_3","pitcher_crop_bottom_stage_4","pitcher_crop_side","pitcher_crop_top","pitcher_crop_top_stage_3","pitcher_crop_top_stage_4","podzol_side","podzol_top","pointed_dripstone_down_base","pointed_dripstone_down_frustum","pointed_dripstone_down_middle","pointed_dripstone_down_tip","pointed_dripstone_down_tip_merge","pointed_dripstone_up_base","pointed_dripstone_up_frustum","pointed_dripstone_up_middle","pointed_dripstone_up_tip","pointed_dripstone_up_tip_merge","polished_andesite","polished_basalt_side","polished_basalt_top","polished_blackstone","polished_blackstone_bricks","polished_deepslate","polished_diorite","polished_granite","polished_tuff","poppy","potatoes_stage0","potatoes_stage1","potatoes_stage2","potatoes_stage3","potted_azalea_bush_plant","potted_azalea_bush_side","potted_azalea_bush_top","potted_flowering_azalea_bush_plant","potted_flowering_azalea_bush_side","potted_flowering_azalea_bush_top","powder_snow","powered_rail","powered_rail_on","prismarine","prismarine_bricks","pumpkin_side","pumpkin_stem","pumpkin_top","purple_candle","purple_candle_lit","purple_concrete","purple_concrete_powder","purple_glazed_terracotta","purple_shulker_box","purple_stained_glass","purple_stained_glass_pane_top","purple_terracotta","purple_wool","purpur_block","purpur_pillar","purpur_pillar_top","quartz_block_bottom","quartz_block_side","quartz_block_top","quartz_bricks","quartz_pillar","quartz_pillar_top","rail","rail_corner","raw_copper_block","raw_gold_block","raw_iron_block","red_candle","red_candle_lit","red_concrete","red_concrete_powder","red_glazed_terracotta","red_mushroom","red_mushroom_block","red_nether_bricks","red_sand","red_sandstone","red_sandstone_bottom","red_sandstone_top","red_shulker_box","red_stained_glass","red_stained_glass_pane_top","red_terracotta","red_tulip","red_wool","redstone_block","redstone_dust_dot","redstone_dust_line0","redstone_dust_line1","redstone_dust_overlay","redstone_lamp","redstone_lamp_on","redstone_ore","redstone_torch","redstone_torch_off","reinforced_deepslate_bottom","reinforced_deepslate_side","reinforced_deepslate_top","repeater","repeater_on","repeating_command_block_back","repeating_command_block_conditional","repeating_command_block_front","repeating_command_block_side","resin_block","resin_bricks","resin_clump","respawn_anchor_bottom","respawn_anchor_side0","respawn_anchor_side1","respawn_anchor_side2","respawn_anchor_side3","respawn_anchor_side4","respawn_anchor_top","respawn_anchor_top_off","rooted_dirt","rose_bush_bottom","rose_bush_top","sand","sandstone","sandstone_bottom","sandstone_top","scaffolding_bottom","scaffolding_side","scaffolding_top","sculk","sculk_catalyst_bottom","sculk_catalyst_side","sculk_catalyst_side_bloom","sculk_catalyst_top","sculk_catalyst_top_bloom","sculk_sensor_bottom","sculk_sensor_side","sculk_sensor_tendril_active","sculk_sensor_tendril_inactive","sculk_sensor_top","sculk_shrieker_bottom","sculk_shrieker_can_summon_inner_top","sculk_shrieker_inner_top","sculk_shrieker_side","sculk_shrieker_top","sculk_vein","sea_lantern","sea_pickle","seagrass","short_dry_grass","short_grass","shroomlight","shulker_box","slime_block","small_amethyst_bud","small_dripleaf_side","small_dripleaf_stem_bottom","small_dripleaf_stem_top","small_dripleaf_top","smithing_table_bottom","smithing_table_front","smithing_table_side","smithing_table_top","smoker_bottom","smoker_front","smoker_front_on","smoker_side","smoker_top","smooth_basalt","smooth_stone","smooth_stone_slab_side","sniffer_egg_not_cracked_bottom","sniffer_egg_not_cracked_east","sniffer_egg_not_cracked_north","sniffer_egg_not_cracked_south","sniffer_egg_not_cracked_top","sniffer_egg_not_cracked_west","sniffer_egg_slightly_cracked_bottom","sniffer_egg_slightly_cracked_east","sniffer_egg_slightly_cracked_north","sniffer_egg_slightly_cracked_south","sniffer_egg_slightly_cracked_top","sniffer_egg_slightly_cracked_west","sniffer_egg_very_cracked_bottom","sniffer_egg_very_cracked_east","sniffer_egg_very_cracked_north","sniffer_egg_very_cracked_south","sniffer_egg_very_cracked_top","sniffer_egg_very_cracked_west","snow","soul_campfire_fire","soul_campfire_log_lit","soul_fire_0","soul_fire_1","soul_lantern","soul_sand","soul_soil","soul_torch","spawner","sponge","spore_blossom","spore_blossom_base","spruce_door_bottom","spruce_door_top","spruce_leaves","spruce_log","spruce_log_top","spruce_planks","spruce_sapling","spruce_trapdoor","stone","stone_bricks","stonecutter_bottom","stonecutter_saw","stonecutter_side","stonecutter_top","stripped_acacia_log","stripped_acacia_log_top","stripped_bamboo_block","stripped_bamboo_block_top","stripped_birch_log","stripped_birch_log_top","stripped_cherry_log","stripped_cherry_log_top","stripped_crimson_stem","stripped_crimson_stem_top","stripped_dark_oak_log","stripped_dark_oak_log_top","stripped_jungle_log","stripped_jungle_log_top","stripped_mangrove_log","stripped_mangrove_log_top","stripped_oak_log","stripped_oak_log_top","stripped_pale_oak_log","stripped_pale_oak_log_top","stripped_spruce_log","stripped_spruce_log_top","stripped_warped_stem","stripped_warped_stem_top","structure_block","structure_block_corner","structure_block_data","structure_block_load","structure_block_save","sugar_cane","sunflower_back","sunflower_bottom","sunflower_front","sunflower_top","suspicious_gravel_0","suspicious_gravel_1","suspicious_gravel_2","suspicious_gravel_3","suspicious_sand_0","suspicious_sand_1","suspicious_sand_2","suspicious_sand_3","sweet_berry_bush_stage0","sweet_berry_bush_stage1","sweet_berry_bush_stage2","sweet_berry_bush_stage3","tall_dry_grass","tall_grass_bottom","tall_grass_top","tall_seagrass_bottom","tall_seagrass_top","target_side","target_top","terracotta","test_block_accept","test_block_fail","test_block_log","test_block_start","test_instance_block","tinted_glass","tnt_bottom","tnt_side","tnt_top","torch","torchflower","torchflower_crop_stage0","torchflower_crop_stage1","trial_spawner_bottom","trial_spawner_side_active","trial_spawner_side_active_ominous","trial_spawner_side_inactive","trial_spawner_side_inactive_ominous","trial_spawner_top_active","trial_spawner_top_active_ominous","trial_spawner_top_ejecting_reward","trial_spawner_top_ejecting_reward_ominous","trial_spawner_top_inactive","trial_spawner_top_inactive_ominous","tripwire","tripwire_hook","tube_coral","tube_coral_block","tube_coral_fan","tuff","tuff_bricks","turtle_egg","turtle_egg_slightly_cracked","turtle_egg_very_cracked","twisting_vines","twisting_vines_plant","vault_bottom","vault_bottom_ominous","vault_front_ejecting","vault_front_ejecting_ominous","vault_front_off","vault_front_off_ominous","vault_front_on","vault_front_on_ominous","vault_side_off","vault_side_off_ominous","vault_side_on","vault_side_on_ominous","vault_top","vault_top_ejecting","vault_top_ejecting_ominous","vault_top_ominous","verdant_froglight_side","verdant_froglight_top","vine","warped_door_bottom","warped_door_top","warped_fungus","warped_nylium","warped_nylium_side","warped_planks","warped_roots","warped_roots_pot","warped_stem","warped_stem_top","warped_trapdoor","warped_wart_block","water_flow","water_overlay","water_still","weathered_chiseled_copper","weathered_copper","weathered_copper_bulb","weathered_copper_bulb_lit","weathered_copper_bulb_lit_powered","weathered_copper_bulb_powered","weathered_copper_door_bottom","weathered_copper_door_top","weathered_copper_grate","weathered_copper_trapdoor","weathered_cut_copper","weeping_vines","weeping_vines_plant","wet_sponge","wheat_stage0","wheat_stage1","wheat_stage2","wheat_stage3","wheat_stage4","wheat_stage5","wheat_stage6","wheat_stage7","white_candle","white_candle_lit","white_concrete","white_concrete_powder","white_glazed_terracotta","white_shulker_box","white_stained_glass","white_stained_glass_pane_top","white_terracotta","white_tulip","white_wool","wildflowers","wildflowers_stem","wither_rose","yellow_candle","yellow_candle_lit","yellow_concrete","yellow_concrete_powder","yellow_glazed_terracotta","yellow_shulker_box","yellow_stained_glass","yellow_stained_glass_pane_top","yellow_terracotta","yellow_wool"]');function hs(n,e,t,i,o,s=3){const a=Math.floor(t+.5),r=Math.floor(i+.5);if(a<e.minX||a>=e.maxX||r<e.minZ||r>=e.maxZ)return null;const l=Math.floor(o+.5);for(let d=l+s;d>=l-s;d--){const c=n(a,d,r);if(c&&!c.includes("leaves")&&!n(a,d+1,r)&&!n(a,d+2,r))return d+.5}return null}const og=JSON.parse('{"size":[15,21,15],"blocks":[[1,0,4,"dark_oak_log",0],[1,0,10,"dark_oak_log",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[2,0,10,"cobblestone",0],[2,0,11,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"birch_planks",0],[3,0,5,"birch_planks",0],[3,0,6,"birch_planks",0],[3,0,7,"birch_planks",0],[3,0,8,"birch_planks",0],[3,0,9,"birch_planks",0],[3,0,10,"birch_planks",0],[3,0,11,"cobblestone",0],[3,0,12,"cobblestone",0],[4,0,1,"dark_oak_log",0],[4,0,2,"cobblestone",0],[4,0,3,"birch_planks",0],[4,0,4,"birch_planks",0],[4,0,5,"birch_planks",0],[4,0,6,"birch_planks",0],[4,0,7,"birch_planks",0],[4,0,8,"birch_planks",0],[4,0,9,"birch_planks",0],[4,0,10,"birch_planks",0],[4,0,11,"birch_planks",0],[4,0,12,"cobblestone",0],[4,0,13,"dark_oak_log",0],[5,0,2,"cobblestone",0],[5,0,3,"birch_planks",0],[5,0,4,"birch_planks",0],[5,0,5,"birch_planks",0],[5,0,6,"birch_planks",0],[5,0,7,"birch_planks",0],[5,0,8,"birch_planks",0],[5,0,9,"birch_planks",0],[5,0,10,"birch_planks",0],[5,0,11,"birch_planks",0],[5,0,12,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"birch_planks",0],[6,0,4,"birch_planks",0],[6,0,5,"birch_planks",0],[6,0,6,"birch_planks",0],[6,0,7,"birch_planks",0],[6,0,8,"birch_planks",0],[6,0,9,"birch_planks",0],[6,0,10,"birch_planks",0],[6,0,11,"birch_planks",0],[6,0,12,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"birch_planks",0],[7,0,4,"birch_planks",0],[7,0,5,"birch_planks",0],[7,0,6,"birch_planks",0],[7,0,7,"birch_planks",0],[7,0,8,"birch_planks",0],[7,0,9,"birch_planks",0],[7,0,10,"birch_planks",0],[7,0,11,"birch_planks",0],[7,0,12,"birch_planks",0],[8,0,2,"cobblestone",0],[8,0,3,"birch_planks",0],[8,0,4,"birch_planks",0],[8,0,5,"birch_planks",0],[8,0,6,"birch_planks",0],[8,0,7,"birch_planks",0],[8,0,8,"birch_planks",0],[8,0,9,"birch_planks",0],[8,0,10,"birch_planks",0],[8,0,11,"birch_planks",0],[8,0,12,"cobblestone",0],[9,0,2,"cobblestone",0],[9,0,3,"birch_planks",0],[9,0,4,"birch_planks",0],[9,0,5,"birch_planks",0],[9,0,6,"birch_planks",0],[9,0,7,"birch_planks",0],[9,0,8,"birch_planks",0],[9,0,9,"birch_planks",0],[9,0,10,"birch_planks",0],[9,0,11,"birch_planks",0],[9,0,12,"cobblestone",0],[10,0,1,"dark_oak_log",0],[10,0,2,"cobblestone",0],[10,0,3,"birch_planks",0],[10,0,4,"birch_planks",0],[10,0,5,"birch_planks",0],[10,0,6,"birch_planks",0],[10,0,7,"birch_planks",0],[10,0,8,"birch_planks",0],[10,0,9,"birch_planks",0],[10,0,10,"birch_planks",0],[10,0,11,"birch_planks",0],[10,0,12,"cobblestone",0],[10,0,13,"dark_oak_log",0],[11,0,2,"cobblestone",0],[11,0,3,"birch_planks",0],[11,0,4,"birch_planks",0],[11,0,5,"birch_planks",0],[11,0,6,"birch_planks",0],[11,0,7,"birch_planks",0],[11,0,8,"birch_planks",0],[11,0,9,"birch_planks",0],[11,0,10,"birch_planks",0],[11,0,11,"cobblestone",0],[11,0,12,"cobblestone",0],[12,0,3,"cobblestone",0],[12,0,4,"cobblestone",0],[12,0,5,"cobblestone",0],[12,0,6,"cobblestone",0],[12,0,7,"cobblestone",0],[12,0,8,"cobblestone",0],[12,0,9,"cobblestone",0],[12,0,10,"cobblestone",0],[12,0,11,"cobblestone",0],[13,0,4,"dark_oak_log",0],[13,0,10,"dark_oak_log",0],[1,1,4,"dark_oak_log",0],[1,1,10,"dark_oak_log",0],[2,1,3,"cobblestone",0],[2,1,4,"cobblestone",0],[2,1,5,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,7,"cobblestone",0],[2,1,8,"cobblestone",0],[2,1,9,"cobblestone",0],[2,1,10,"cobblestone",0],[2,1,11,"cobblestone",0],[3,1,2,"cobblestone",0],[3,1,3,"cobblestone",0],[3,1,11,"cobblestone",0],[3,1,12,"cobblestone",0],[4,1,1,"dark_oak_log",0],[4,1,2,"cobblestone",0],[4,1,12,"cobblestone",0],[4,1,13,"dark_oak_log",0],[5,1,2,"cobblestone",0],[5,1,12,"cobblestone",0],[6,1,2,"cobblestone",0],[6,1,12,"cobblestone",0],[7,1,2,"cobblestone",0],[8,1,2,"cobblestone",0],[8,1,12,"cobblestone",0],[9,1,2,"cobblestone",0],[9,1,12,"cobblestone",0],[10,1,1,"dark_oak_log",0],[10,1,2,"cobblestone",0],[10,1,4,"birch_planks",0],[10,1,5,"cobblestone",0],[10,1,12,"cobblestone",0],[10,1,13,"dark_oak_log",0],[11,1,2,"cobblestone",0],[11,1,3,"cobblestone",0],[11,1,11,"cobblestone",0],[11,1,12,"cobblestone",0],[12,1,3,"cobblestone",0],[12,1,4,"cobblestone",0],[12,1,5,"cobblestone",0],[12,1,6,"cobblestone",0],[12,1,7,"cobblestone",0],[12,1,8,"cobblestone",0],[12,1,9,"cobblestone",0],[12,1,10,"cobblestone",0],[12,1,11,"cobblestone",0],[13,1,4,"dark_oak_log",0],[13,1,10,"dark_oak_log",0],[1,2,4,"dark_oak_log",0],[1,2,10,"dark_oak_log",0],[2,2,3,"cobblestone",0],[2,2,4,"cobblestone",0],[2,2,5,"cobblestone",0],[2,2,7,"cobblestone",0],[2,2,9,"cobblestone",0],[2,2,10,"cobblestone",0],[2,2,11,"cobblestone",0],[3,2,2,"cobblestone",0],[3,2,3,"cobblestone",0],[3,2,11,"cobblestone",0],[3,2,12,"cobblestone",0],[4,2,1,"dark_oak_log",0],[4,2,2,"cobblestone",0],[4,2,12,"cobblestone",0],[4,2,13,"dark_oak_log",0],[5,2,2,"cobblestone",0],[5,2,12,"cobblestone",0],[6,2,12,"cobblestone",0],[7,2,2,"cobblestone",0],[8,2,12,"cobblestone",0],[9,2,2,"cobblestone",0],[9,2,12,"cobblestone",0],[10,2,1,"dark_oak_log",0],[10,2,2,"cobblestone",0],[10,2,6,"cobblestone",0],[10,2,12,"cobblestone",0],[10,2,13,"dark_oak_log",0],[11,2,2,"cobblestone",0],[11,2,3,"cobblestone",0],[11,2,11,"cobblestone",0],[11,2,12,"cobblestone",0],[12,2,3,"cobblestone",0],[12,2,4,"cobblestone",0],[12,2,5,"cobblestone",0],[12,2,7,"cobblestone",0],[12,2,9,"cobblestone",0],[12,2,10,"cobblestone",0],[12,2,11,"cobblestone",0],[13,2,4,"dark_oak_log",0],[13,2,10,"dark_oak_log",0],[2,3,4,"cobblestone",0],[2,3,5,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"cobblestone",0],[2,3,8,"cobblestone",0],[2,3,9,"cobblestone",0],[2,3,10,"cobblestone",0],[3,3,3,"cobblestone",0],[3,3,11,"cobblestone",0],[4,3,2,"cobblestone",0],[4,3,12,"cobblestone",0],[5,3,2,"cobblestone",0],[5,3,12,"cobblestone",0],[6,3,2,"cobblestone",0],[6,3,12,"cobblestone",0],[7,3,2,"cobblestone",0],[7,3,12,"cobblestone",0],[8,3,2,"cobblestone",0],[8,3,12,"cobblestone",0],[9,3,2,"cobblestone",0],[9,3,12,"cobblestone",0],[10,3,2,"cobblestone",0],[10,3,7,"cobblestone",0],[10,3,12,"cobblestone",0],[11,3,3,"cobblestone",0],[11,3,11,"cobblestone",0],[12,3,4,"cobblestone",0],[12,3,5,"cobblestone",0],[12,3,6,"cobblestone",0],[12,3,7,"cobblestone",0],[12,3,8,"cobblestone",0],[12,3,9,"cobblestone",0],[12,3,10,"cobblestone",0],[3,4,4,"cobblestone",0],[3,4,5,"dark_oak_planks",0],[3,4,6,"dark_oak_planks",0],[3,4,7,"dark_oak_planks",0],[3,4,8,"dark_oak_planks",0],[3,4,9,"dark_oak_planks",0],[3,4,10,"cobblestone",0],[4,4,3,"cobblestone",0],[4,4,11,"cobblestone",0],[5,4,3,"dark_oak_planks",0],[5,4,11,"dark_oak_planks",0],[6,4,3,"dark_oak_planks",0],[6,4,11,"dark_oak_planks",0],[7,4,3,"dark_oak_planks",0],[7,4,11,"dark_oak_planks",0],[8,4,3,"dark_oak_planks",0],[8,4,11,"dark_oak_planks",0],[9,4,3,"dark_oak_planks",0],[9,4,11,"dark_oak_planks",0],[10,4,3,"cobblestone",0],[10,4,8,"cobblestone",0],[10,4,11,"cobblestone",0],[11,4,4,"cobblestone",0],[11,4,5,"dark_oak_planks",0],[11,4,6,"dark_oak_planks",0],[11,4,7,"dark_oak_planks",0],[11,4,8,"dark_oak_planks",0],[11,4,9,"dark_oak_planks",0],[11,4,10,"cobblestone",0],[3,5,4,"dark_oak_log",0],[3,5,5,"dark_oak_planks",0],[3,5,6,"birch_planks",0],[3,5,7,"dark_oak_log",0],[3,5,8,"birch_planks",0],[3,5,9,"dark_oak_planks",0],[3,5,10,"dark_oak_log",0],[4,5,3,"dark_oak_log",0],[4,5,4,"birch_planks",0],[4,5,5,"birch_planks",0],[4,5,6,"birch_planks",0],[4,5,7,"birch_planks",0],[4,5,8,"birch_planks",0],[4,5,9,"birch_planks",0],[4,5,10,"birch_planks",0],[4,5,11,"dark_oak_log",0],[5,5,3,"dark_oak_planks",0],[5,5,4,"birch_planks",0],[5,5,5,"birch_planks",0],[5,5,6,"birch_planks",0],[5,5,7,"birch_planks",0],[5,5,8,"birch_planks",0],[5,5,9,"birch_planks",0],[5,5,10,"birch_planks",0],[5,5,11,"dark_oak_planks",0],[6,5,3,"birch_planks",0],[6,5,4,"birch_planks",0],[6,5,5,"birch_planks",0],[6,5,6,"birch_planks",0],[6,5,7,"birch_planks",0],[6,5,8,"birch_planks",0],[6,5,9,"birch_planks",0],[6,5,10,"birch_planks",0],[6,5,11,"birch_planks",0],[7,5,3,"dark_oak_log",0],[7,5,4,"birch_planks",0],[7,5,5,"birch_planks",0],[7,5,6,"birch_planks",0],[7,5,7,"birch_planks",0],[7,5,8,"birch_planks",0],[7,5,9,"birch_planks",0],[7,5,10,"birch_planks",0],[7,5,11,"dark_oak_log",0],[8,5,3,"birch_planks",0],[8,5,4,"birch_planks",0],[8,5,5,"birch_planks",0],[8,5,6,"birch_planks",0],[8,5,7,"birch_planks",0],[8,5,8,"birch_planks",0],[8,5,9,"birch_planks",0],[8,5,10,"birch_planks",0],[8,5,11,"birch_planks",0],[9,5,3,"dark_oak_planks",0],[9,5,4,"birch_planks",0],[9,5,6,"birch_planks",0],[9,5,7,"birch_planks",0],[9,5,8,"birch_planks",0],[9,5,9,"birch_planks",0],[9,5,10,"birch_planks",0],[9,5,11,"dark_oak_planks",0],[10,5,3,"dark_oak_log",0],[10,5,4,"birch_planks",0],[10,5,9,"birch_planks",0],[10,5,10,"birch_planks",0],[10,5,11,"dark_oak_log",0],[11,5,4,"dark_oak_log",0],[11,5,5,"dark_oak_planks",0],[11,5,6,"birch_planks",0],[11,5,7,"dark_oak_log",0],[11,5,8,"birch_planks",0],[11,5,9,"dark_oak_planks",0],[11,5,10,"dark_oak_log",0],[3,6,4,"dark_oak_log",0],[3,6,5,"dark_oak_planks",0],[3,6,9,"dark_oak_planks",0],[3,6,10,"dark_oak_log",0],[4,6,3,"dark_oak_log",0],[4,6,9,"cobblestone",0],[4,6,10,"birch_planks",0],[4,6,11,"dark_oak_log",0],[5,6,3,"dark_oak_planks",0],[5,6,11,"dark_oak_planks",0],[9,6,3,"dark_oak_planks",0],[9,6,11,"dark_oak_planks",0],[10,6,3,"dark_oak_log",0],[10,6,11,"dark_oak_log",0],[11,6,4,"dark_oak_log",0],[11,6,5,"dark_oak_planks",0],[11,6,9,"dark_oak_planks",0],[11,6,10,"dark_oak_log",0],[3,7,4,"dark_oak_log",0],[3,7,5,"dark_oak_planks",0],[3,7,9,"dark_oak_planks",0],[3,7,10,"dark_oak_log",0],[4,7,3,"dark_oak_log",0],[4,7,11,"dark_oak_log",0],[5,7,3,"dark_oak_planks",0],[5,7,11,"dark_oak_planks",0],[9,7,3,"dark_oak_planks",0],[9,7,11,"dark_oak_planks",0],[10,7,3,"dark_oak_log",0],[10,7,11,"dark_oak_log",0],[11,7,4,"dark_oak_log",0],[11,7,5,"dark_oak_planks",0],[11,7,9,"dark_oak_planks",0],[11,7,10,"dark_oak_log",0],[3,8,4,"dark_oak_log",0],[3,8,5,"dark_oak_planks",0],[3,8,6,"dark_oak_planks",0],[3,8,8,"dark_oak_planks",0],[3,8,9,"dark_oak_planks",0],[3,8,10,"dark_oak_log",0],[4,8,3,"dark_oak_log",0],[4,8,11,"dark_oak_log",0],[5,8,3,"dark_oak_planks",0],[5,8,11,"dark_oak_planks",0],[6,8,3,"dark_oak_planks",0],[6,8,11,"dark_oak_planks",0],[8,8,3,"dark_oak_planks",0],[8,8,11,"dark_oak_planks",0],[9,8,3,"dark_oak_planks",0],[9,8,11,"dark_oak_planks",0],[10,8,3,"dark_oak_log",0],[10,8,11,"dark_oak_log",0],[11,8,4,"dark_oak_log",0],[11,8,5,"dark_oak_planks",0],[11,8,6,"dark_oak_planks",0],[11,8,8,"dark_oak_planks",0],[11,8,9,"dark_oak_planks",0],[11,8,10,"dark_oak_log",0],[3,9,4,"dark_oak_log",0],[3,9,5,"dark_oak_planks",0],[3,9,6,"dark_oak_planks",0],[3,9,7,"dark_oak_log",0],[3,9,8,"dark_oak_planks",0],[3,9,9,"dark_oak_planks",0],[3,9,10,"dark_oak_log",0],[4,9,3,"dark_oak_log",0],[4,9,4,"birch_planks",0],[4,9,5,"birch_planks",0],[4,9,6,"birch_planks",0],[4,9,11,"dark_oak_log",0],[5,9,3,"dark_oak_planks",0],[5,9,4,"birch_planks",0],[5,9,5,"birch_planks",0],[5,9,6,"birch_planks",0],[5,9,7,"birch_planks",0],[5,9,8,"birch_planks",0],[5,9,9,"birch_planks",0],[5,9,11,"dark_oak_planks",0],[6,9,3,"dark_oak_planks",0],[6,9,4,"birch_planks",0],[6,9,5,"birch_planks",0],[6,9,6,"birch_planks",0],[6,9,7,"birch_planks",0],[6,9,8,"birch_planks",0],[6,9,9,"birch_planks",0],[6,9,10,"birch_planks",0],[6,9,11,"dark_oak_planks",0],[7,9,3,"dark_oak_log",0],[7,9,4,"birch_planks",0],[7,9,5,"birch_planks",0],[7,9,6,"birch_planks",0],[7,9,7,"birch_planks",0],[7,9,8,"birch_planks",0],[7,9,9,"birch_planks",0],[7,9,10,"birch_planks",0],[7,9,11,"dark_oak_log",0],[8,9,3,"dark_oak_planks",0],[8,9,4,"birch_planks",0],[8,9,5,"birch_planks",0],[8,9,6,"birch_planks",0],[8,9,7,"birch_planks",0],[8,9,8,"birch_planks",0],[8,9,9,"birch_planks",0],[8,9,10,"birch_planks",0],[8,9,11,"dark_oak_planks",0],[9,9,3,"dark_oak_planks",0],[9,9,4,"birch_planks",0],[9,9,5,"birch_planks",0],[9,9,6,"birch_planks",0],[9,9,7,"birch_planks",0],[9,9,8,"birch_planks",0],[9,9,9,"birch_planks",0],[9,9,10,"birch_planks",0],[9,9,11,"dark_oak_planks",0],[10,9,3,"dark_oak_log",0],[10,9,4,"birch_planks",0],[10,9,5,"birch_planks",0],[10,9,6,"birch_planks",0],[10,9,7,"birch_planks",0],[10,9,8,"birch_planks",0],[10,9,9,"birch_planks",0],[10,9,10,"birch_planks",0],[10,9,11,"dark_oak_log",0],[11,9,4,"dark_oak_log",0],[11,9,5,"dark_oak_planks",0],[11,9,6,"dark_oak_planks",0],[11,9,7,"dark_oak_log",0],[11,9,8,"dark_oak_planks",0],[11,9,9,"dark_oak_planks",0],[11,9,10,"dark_oak_log",0],[3,10,4,"dark_oak_log",0],[3,10,5,"dark_oak_planks",0],[3,10,6,"dark_oak_log",0],[3,10,7,"dark_oak_planks",0],[3,10,8,"dark_oak_log",0],[3,10,9,"dark_oak_planks",0],[3,10,10,"dark_oak_log",0],[4,10,3,"dark_oak_log",0],[4,10,11,"dark_oak_log",0],[5,10,3,"dark_oak_planks",0],[5,10,11,"dark_oak_planks",0],[6,10,3,"dark_oak_log",0],[6,10,11,"dark_oak_log",0],[7,10,3,"dark_oak_planks",0],[7,10,11,"dark_oak_planks",0],[8,10,3,"dark_oak_log",0],[8,10,11,"dark_oak_log",0],[9,10,3,"dark_oak_planks",0],[9,10,11,"dark_oak_planks",0],[10,10,3,"dark_oak_log",0],[10,10,5,"birch_planks",0],[10,10,11,"dark_oak_log",0],[11,10,4,"dark_oak_log",0],[11,10,5,"dark_oak_planks",0],[11,10,6,"dark_oak_log",0],[11,10,7,"dark_oak_planks",0],[11,10,8,"dark_oak_log",0],[11,10,9,"dark_oak_planks",0],[11,10,10,"dark_oak_log",0],[3,11,4,"cobblestone",0],[3,11,5,"dark_oak_planks",0],[3,11,6,"dark_oak_planks",0],[3,11,7,"dark_oak_log",0],[3,11,8,"dark_oak_planks",0],[3,11,9,"dark_oak_planks",0],[3,11,10,"cobblestone",0],[4,11,3,"cobblestone",0],[4,11,11,"cobblestone",0],[5,11,3,"dark_oak_planks",0],[5,11,11,"dark_oak_planks",0],[6,11,3,"dark_oak_planks",0],[6,11,11,"dark_oak_planks",0],[7,11,3,"dark_oak_log",0],[7,11,11,"dark_oak_log",0],[8,11,3,"dark_oak_planks",0],[8,11,11,"dark_oak_planks",0],[9,11,3,"dark_oak_planks",0],[9,11,11,"dark_oak_planks",0],[10,11,3,"cobblestone",0],[10,11,11,"cobblestone",0],[11,11,4,"cobblestone",0],[11,11,5,"dark_oak_planks",0],[11,11,6,"dark_oak_planks",0],[11,11,7,"dark_oak_log",0],[11,11,8,"dark_oak_planks",0],[11,11,9,"dark_oak_planks",0],[11,11,10,"cobblestone",0],[2,12,4,"cobblestone",0],[2,12,10,"cobblestone",0],[3,12,3,"cobblestone",0],[3,12,4,"cobblestone",0],[3,12,5,"cobblestone",0],[3,12,6,"cobblestone",0],[3,12,7,"cobblestone",0],[3,12,8,"cobblestone",0],[3,12,9,"cobblestone",0],[3,12,10,"cobblestone",0],[3,12,11,"cobblestone",0],[4,12,2,"cobblestone",0],[4,12,3,"cobblestone",0],[4,12,11,"cobblestone",0],[4,12,12,"cobblestone",0],[5,12,3,"cobblestone",0],[5,12,11,"cobblestone",0],[6,12,3,"cobblestone",0],[6,12,11,"cobblestone",0],[7,12,3,"cobblestone",0],[7,12,11,"cobblestone",0],[8,12,3,"cobblestone",0],[8,12,11,"cobblestone",0],[9,12,3,"cobblestone",0],[9,12,11,"cobblestone",0],[10,12,2,"cobblestone",0],[10,12,3,"cobblestone",0],[10,12,11,"cobblestone",0],[10,12,12,"cobblestone",0],[11,12,3,"cobblestone",0],[11,12,4,"cobblestone",0],[11,12,5,"cobblestone",0],[11,12,6,"cobblestone",0],[11,12,7,"cobblestone",0],[11,12,8,"cobblestone",0],[11,12,9,"cobblestone",0],[11,12,10,"cobblestone",0],[11,12,11,"cobblestone",0],[12,12,4,"cobblestone",0],[12,12,10,"cobblestone",0],[1,13,3,"dark_oak_log",0],[1,13,4,"dark_oak_log",0],[1,13,5,"dark_oak_log",0],[1,13,6,"dark_oak_log",0],[1,13,7,"dark_oak_log",0],[1,13,8,"dark_oak_log",0],[1,13,9,"dark_oak_log",0],[1,13,10,"dark_oak_log",0],[1,13,11,"dark_oak_log",0],[2,13,2,"cobblestone",0],[2,13,3,"birch_planks",0],[2,13,4,"birch_planks",0],[2,13,5,"birch_planks",0],[2,13,6,"birch_planks",0],[2,13,7,"birch_planks",0],[2,13,8,"birch_planks",0],[2,13,9,"birch_planks",0],[2,13,10,"birch_planks",0],[2,13,11,"birch_planks",0],[2,13,12,"cobblestone",0],[3,13,1,"dark_oak_log",0],[3,13,2,"birch_planks",0],[3,13,3,"birch_planks",0],[3,13,4,"birch_planks",0],[3,13,5,"birch_planks",0],[3,13,6,"birch_planks",0],[3,13,7,"birch_planks",0],[3,13,8,"birch_planks",0],[3,13,9,"birch_planks",0],[3,13,10,"birch_planks",0],[3,13,11,"birch_planks",0],[3,13,12,"birch_planks",0],[3,13,13,"dark_oak_log",0],[4,13,1,"dark_oak_log",0],[4,13,2,"birch_planks",0],[4,13,3,"birch_planks",0],[4,13,4,"birch_planks",0],[4,13,5,"birch_planks",0],[4,13,6,"birch_planks",0],[4,13,7,"birch_planks",0],[4,13,8,"birch_planks",0],[4,13,9,"birch_planks",0],[4,13,10,"birch_planks",0],[4,13,11,"birch_planks",0],[4,13,12,"birch_planks",0],[4,13,13,"dark_oak_log",0],[5,13,1,"dark_oak_log",0],[5,13,2,"birch_planks",0],[5,13,3,"birch_planks",0],[5,13,4,"birch_planks",0],[5,13,5,"birch_planks",0],[5,13,6,"birch_planks",0],[5,13,7,"birch_planks",0],[5,13,8,"birch_planks",0],[5,13,9,"birch_planks",0],[5,13,10,"birch_planks",0],[5,13,11,"birch_planks",0],[5,13,12,"birch_planks",0],[5,13,13,"dark_oak_log",0],[6,13,1,"dark_oak_log",0],[6,13,2,"birch_planks",0],[6,13,3,"birch_planks",0],[6,13,4,"birch_planks",0],[6,13,5,"birch_planks",0],[6,13,6,"birch_planks",0],[6,13,7,"birch_planks",0],[6,13,8,"birch_planks",0],[6,13,9,"birch_planks",0],[6,13,10,"birch_planks",0],[6,13,11,"birch_planks",0],[6,13,12,"birch_planks",0],[6,13,13,"dark_oak_log",0],[7,13,1,"dark_oak_log",0],[7,13,2,"birch_planks",0],[7,13,3,"birch_planks",0],[7,13,4,"birch_planks",0],[7,13,5,"birch_planks",0],[7,13,6,"birch_planks",0],[7,13,7,"birch_planks",0],[7,13,8,"birch_planks",0],[7,13,9,"birch_planks",0],[7,13,10,"birch_planks",0],[7,13,11,"birch_planks",0],[7,13,12,"birch_planks",0],[7,13,13,"dark_oak_log",0],[8,13,1,"dark_oak_log",0],[8,13,2,"birch_planks",0],[8,13,3,"birch_planks",0],[8,13,4,"birch_planks",0],[8,13,5,"birch_planks",0],[8,13,6,"birch_planks",0],[8,13,7,"birch_planks",0],[8,13,8,"birch_planks",0],[8,13,9,"birch_planks",0],[8,13,10,"birch_planks",0],[8,13,11,"birch_planks",0],[8,13,12,"birch_planks",0],[8,13,13,"dark_oak_log",0],[9,13,1,"dark_oak_log",0],[9,13,2,"birch_planks",0],[9,13,3,"birch_planks",0],[9,13,4,"birch_planks",0],[9,13,6,"birch_planks",0],[9,13,7,"birch_planks",0],[9,13,8,"birch_planks",0],[9,13,9,"birch_planks",0],[9,13,10,"birch_planks",0],[9,13,11,"birch_planks",0],[9,13,12,"birch_planks",0],[9,13,13,"dark_oak_log",0],[10,13,1,"dark_oak_log",0],[10,13,2,"birch_planks",0],[10,13,3,"birch_planks",0],[10,13,4,"birch_planks",0],[10,13,9,"birch_planks",0],[10,13,10,"birch_planks",0],[10,13,11,"birch_planks",0],[10,13,12,"birch_planks",0],[10,13,13,"dark_oak_log",0],[11,13,1,"dark_oak_log",0],[11,13,2,"birch_planks",0],[11,13,3,"birch_planks",0],[11,13,4,"birch_planks",0],[11,13,5,"birch_planks",0],[11,13,6,"birch_planks",0],[11,13,7,"birch_planks",0],[11,13,8,"birch_planks",0],[11,13,9,"birch_planks",0],[11,13,10,"birch_planks",0],[11,13,11,"birch_planks",0],[11,13,12,"birch_planks",0],[11,13,13,"dark_oak_log",0],[12,13,2,"cobblestone",0],[12,13,3,"birch_planks",0],[12,13,4,"birch_planks",0],[12,13,5,"birch_planks",0],[12,13,6,"birch_planks",0],[12,13,7,"birch_planks",0],[12,13,8,"birch_planks",0],[12,13,9,"birch_planks",0],[12,13,10,"birch_planks",0],[12,13,11,"birch_planks",0],[12,13,12,"cobblestone",0],[13,13,3,"dark_oak_log",0],[13,13,4,"dark_oak_log",0],[13,13,5,"dark_oak_log",0],[13,13,6,"dark_oak_log",0],[13,13,7,"dark_oak_log",0],[13,13,8,"dark_oak_log",0],[13,13,9,"dark_oak_log",0],[13,13,10,"dark_oak_log",0],[13,13,11,"dark_oak_log",0],[4,14,4,"dark_oak_log",0],[4,14,10,"dark_oak_log",0],[10,14,4,"dark_oak_log",0],[10,14,10,"dark_oak_log",0],[4,15,4,"dark_oak_log",0],[4,15,10,"dark_oak_log",0],[10,15,4,"dark_oak_log",0],[10,15,10,"dark_oak_log",0],[2,16,2,"dark_oak_planks",0],[2,16,12,"dark_oak_planks",0],[4,16,4,"dark_oak_log",0],[4,16,10,"dark_oak_log",0],[10,16,4,"dark_oak_log",0],[10,16,10,"dark_oak_log",0],[12,16,2,"dark_oak_planks",0],[12,16,12,"dark_oak_planks",0],[2,17,2,"dark_oak_planks",0],[2,17,3,"dark_oak_planks",0],[2,17,12,"dark_oak_planks",0],[3,17,2,"dark_oak_planks",0],[3,17,3,"dark_oak_planks",0],[3,17,11,"dark_oak_planks",0],[4,17,4,"dark_oak_log",0],[4,17,10,"dark_oak_log",0],[10,17,4,"dark_oak_log",0],[10,17,10,"dark_oak_log",0],[11,17,2,"dark_oak_planks",0],[11,17,3,"dark_oak_planks",0],[11,17,11,"dark_oak_planks",0],[11,17,12,"dark_oak_planks",0],[12,17,2,"dark_oak_planks",0],[12,17,3,"dark_oak_planks",0],[12,17,11,"dark_oak_planks",0],[12,17,12,"dark_oak_planks",0],[2,18,3,"dark_oak_planks",0],[2,18,4,"dark_oak_planks",0],[2,18,5,"dark_oak_planks",0],[2,18,9,"dark_oak_planks",0],[2,18,10,"dark_oak_planks",0],[2,18,11,"dark_oak_planks",0],[3,18,2,"dark_oak_planks",0],[3,18,3,"dark_oak_planks",0],[3,18,4,"dark_oak_planks",0],[3,18,5,"dark_oak_planks",0],[3,18,9,"dark_oak_planks",0],[3,18,10,"dark_oak_planks",0],[3,18,11,"dark_oak_planks",0],[3,18,12,"dark_oak_planks",0],[4,18,2,"dark_oak_planks",0],[4,18,3,"dark_oak_planks",0],[4,18,4,"dark_oak_planks",0],[4,18,5,"dark_oak_planks",0],[4,18,9,"dark_oak_planks",0],[4,18,10,"dark_oak_planks",0],[4,18,11,"dark_oak_planks",0],[4,18,12,"dark_oak_planks",0],[5,18,2,"dark_oak_planks",0],[5,18,3,"dark_oak_planks",0],[5,18,4,"dark_oak_planks",0],[5,18,5,"dark_oak_planks",0],[5,18,9,"dark_oak_planks",0],[5,18,10,"dark_oak_planks",0],[5,18,11,"dark_oak_planks",0],[5,18,12,"dark_oak_planks",0],[9,18,2,"dark_oak_planks",0],[9,18,3,"dark_oak_planks",0],[9,18,4,"dark_oak_planks",0],[9,18,5,"dark_oak_planks",0],[9,18,9,"dark_oak_planks",0],[9,18,10,"dark_oak_planks",0],[9,18,11,"dark_oak_planks",0],[9,18,12,"dark_oak_planks",0],[10,18,2,"dark_oak_planks",0],[10,18,3,"dark_oak_planks",0],[10,18,4,"dark_oak_planks",0],[10,18,5,"dark_oak_planks",0],[10,18,9,"dark_oak_planks",0],[10,18,10,"dark_oak_planks",0],[10,18,11,"dark_oak_planks",0],[10,18,12,"dark_oak_planks",0],[11,18,2,"dark_oak_planks",0],[11,18,3,"dark_oak_planks",0],[11,18,4,"dark_oak_planks",0],[11,18,5,"dark_oak_planks",0],[11,18,9,"dark_oak_planks",0],[11,18,10,"dark_oak_planks",0],[11,18,11,"dark_oak_planks",0],[11,18,12,"dark_oak_planks",0],[12,18,3,"dark_oak_planks",0],[12,18,4,"dark_oak_planks",0],[12,18,5,"dark_oak_planks",0],[12,18,9,"dark_oak_planks",0],[12,18,10,"dark_oak_planks",0],[12,18,11,"dark_oak_planks",0],[2,19,4,"dark_oak_planks",0],[2,19,5,"dark_oak_planks",0],[2,19,6,"dark_oak_planks",0],[2,19,7,"dark_oak_planks",0],[2,19,8,"dark_oak_planks",0],[2,19,9,"dark_oak_planks",0],[2,19,10,"dark_oak_planks",0],[3,19,3,"dark_oak_planks",0],[3,19,4,"dark_oak_planks",0],[3,19,5,"dark_oak_planks",0],[3,19,6,"dark_oak_planks",0],[3,19,7,"dark_oak_planks",0],[3,19,8,"dark_oak_planks",0],[3,19,9,"dark_oak_planks",0],[3,19,10,"dark_oak_planks",0],[3,19,11,"dark_oak_planks",0],[4,19,2,"dark_oak_planks",0],[4,19,3,"dark_oak_planks",0],[4,19,4,"dark_oak_planks",0],[4,19,5,"dark_oak_planks",0],[4,19,6,"dark_oak_planks",0],[4,19,7,"dark_oak_planks",0],[4,19,8,"dark_oak_planks",0],[4,19,9,"dark_oak_planks",0],[4,19,10,"dark_oak_planks",0],[4,19,11,"dark_oak_planks",0],[4,19,12,"dark_oak_planks",0],[5,19,2,"dark_oak_planks",0],[5,19,3,"dark_oak_planks",0],[5,19,4,"dark_oak_planks",0],[5,19,5,"dark_oak_planks",0],[5,19,6,"dark_oak_planks",0],[5,19,8,"dark_oak_planks",0],[5,19,9,"dark_oak_planks",0],[5,19,10,"dark_oak_planks",0],[5,19,11,"dark_oak_planks",0],[5,19,12,"dark_oak_planks",0],[6,19,2,"dark_oak_planks",0],[6,19,3,"dark_oak_planks",0],[6,19,4,"dark_oak_planks",0],[6,19,5,"dark_oak_planks",0],[6,19,9,"dark_oak_planks",0],[6,19,10,"dark_oak_planks",0],[6,19,11,"dark_oak_planks",0],[6,19,12,"dark_oak_planks",0],[7,19,2,"dark_oak_planks",0],[7,19,3,"dark_oak_planks",0],[7,19,4,"dark_oak_planks",0],[7,19,10,"dark_oak_planks",0],[7,19,11,"dark_oak_planks",0],[7,19,12,"dark_oak_planks",0],[8,19,2,"dark_oak_planks",0],[8,19,3,"dark_oak_planks",0],[8,19,4,"dark_oak_planks",0],[8,19,5,"dark_oak_planks",0],[8,19,9,"dark_oak_planks",0],[8,19,10,"dark_oak_planks",0],[8,19,11,"dark_oak_planks",0],[8,19,12,"dark_oak_planks",0],[9,19,2,"dark_oak_planks",0],[9,19,3,"dark_oak_planks",0],[9,19,4,"dark_oak_planks",0],[9,19,5,"dark_oak_planks",0],[9,19,6,"dark_oak_planks",0],[9,19,8,"dark_oak_planks",0],[9,19,9,"dark_oak_planks",0],[9,19,10,"dark_oak_planks",0],[9,19,11,"dark_oak_planks",0],[9,19,12,"dark_oak_planks",0],[10,19,2,"dark_oak_planks",0],[10,19,3,"dark_oak_planks",0],[10,19,4,"dark_oak_planks",0],[10,19,5,"dark_oak_planks",0],[10,19,6,"dark_oak_planks",0],[10,19,7,"dark_oak_planks",0],[10,19,8,"dark_oak_planks",0],[10,19,9,"dark_oak_planks",0],[10,19,10,"dark_oak_planks",0],[10,19,11,"dark_oak_planks",0],[10,19,12,"dark_oak_planks",0],[11,19,3,"dark_oak_planks",0],[11,19,4,"dark_oak_planks",0],[11,19,5,"dark_oak_planks",0],[11,19,6,"dark_oak_planks",0],[11,19,7,"dark_oak_planks",0],[11,19,8,"dark_oak_planks",0],[11,19,9,"dark_oak_planks",0],[11,19,10,"dark_oak_planks",0],[11,19,11,"dark_oak_planks",0],[12,19,4,"dark_oak_planks",0],[12,19,5,"dark_oak_planks",0],[12,19,6,"dark_oak_planks",0],[12,19,7,"dark_oak_planks",0],[12,19,8,"dark_oak_planks",0],[12,19,9,"dark_oak_planks",0],[12,19,10,"dark_oak_planks",0],[3,20,5,"dark_oak_planks",0],[3,20,6,"dark_oak_planks",0],[3,20,7,"dark_oak_planks",0],[3,20,8,"dark_oak_planks",0],[3,20,9,"dark_oak_planks",0],[4,20,4,"dark_oak_planks",0],[4,20,5,"dark_oak_planks",0],[4,20,6,"dark_oak_planks",0],[4,20,7,"dark_oak_planks",0],[4,20,8,"dark_oak_planks",0],[4,20,9,"dark_oak_planks",0],[4,20,10,"dark_oak_planks",0],[5,20,3,"dark_oak_planks",0],[5,20,4,"dark_oak_planks",0],[5,20,5,"dark_oak_planks",0],[5,20,6,"dark_oak_planks",0],[5,20,7,"dark_oak_planks",0],[5,20,8,"dark_oak_planks",0],[5,20,9,"dark_oak_planks",0],[5,20,10,"dark_oak_planks",0],[5,20,11,"dark_oak_planks",0],[6,20,3,"dark_oak_planks",0],[6,20,4,"dark_oak_planks",0],[6,20,5,"dark_oak_planks",0],[6,20,6,"dark_oak_planks",0],[6,20,7,"dark_oak_planks",0],[6,20,8,"dark_oak_planks",0],[6,20,9,"dark_oak_planks",0],[6,20,10,"dark_oak_planks",0],[6,20,11,"dark_oak_planks",0],[7,20,3,"dark_oak_planks",0],[7,20,4,"dark_oak_planks",0],[7,20,5,"dark_oak_planks",0],[7,20,6,"dark_oak_planks",0],[7,20,7,"dark_oak_planks",0],[7,20,8,"dark_oak_planks",0],[7,20,9,"dark_oak_planks",0],[7,20,10,"dark_oak_planks",0],[7,20,11,"dark_oak_planks",0],[8,20,3,"dark_oak_planks",0],[8,20,4,"dark_oak_planks",0],[8,20,5,"dark_oak_planks",0],[8,20,6,"dark_oak_planks",0],[8,20,7,"dark_oak_planks",0],[8,20,8,"dark_oak_planks",0],[8,20,9,"dark_oak_planks",0],[8,20,10,"dark_oak_planks",0],[8,20,11,"dark_oak_planks",0],[9,20,3,"dark_oak_planks",0],[9,20,4,"dark_oak_planks",0],[9,20,5,"dark_oak_planks",0],[9,20,6,"dark_oak_planks",0],[9,20,7,"dark_oak_planks",0],[9,20,8,"dark_oak_planks",0],[9,20,9,"dark_oak_planks",0],[9,20,10,"dark_oak_planks",0],[9,20,11,"dark_oak_planks",0],[10,20,4,"dark_oak_planks",0],[10,20,5,"dark_oak_planks",0],[10,20,6,"dark_oak_planks",0],[10,20,7,"dark_oak_planks",0],[10,20,8,"dark_oak_planks",0],[10,20,9,"dark_oak_planks",0],[10,20,10,"dark_oak_planks",0],[11,20,5,"dark_oak_planks",0],[11,20,6,"dark_oak_planks",0],[11,20,7,"dark_oak_planks",0],[11,20,8,"dark_oak_planks",0],[11,20,9,"dark_oak_planks",0],[3,1,5,"dark_oak_slab",0],[3,1,6,"dark_oak_slab",0],[3,1,7,"dark_oak_slab",0],[3,1,8,"dark_oak_slab",0],[3,1,9,"dark_oak_slab",0],[9,1,4,"cobblestone_stairs",0],[10,2,5,"cobblestone_stairs",-1.5708],[1,3,4,"dark_oak_slab",0],[1,3,10,"dark_oak_slab",0],[2,3,3,"dark_oak_fence",0],[2,3,11,"dark_oak_fence",0],[3,3,2,"dark_oak_fence",0],[3,3,4,"dark_oak_stairs",1.5708],[3,3,10,"dark_oak_stairs",-1.5708],[3,3,12,"dark_oak_fence",0],[4,3,1,"dark_oak_slab",0],[4,3,3,"dark_oak_stairs",3.14159],[4,3,11,"dark_oak_stairs",3.14159],[4,3,13,"dark_oak_slab",0],[10,3,1,"dark_oak_slab",0],[10,3,3,"dark_oak_stairs",0],[10,3,6,"cobblestone_stairs",-1.5708],[10,3,11,"dark_oak_stairs",0],[10,3,13,"dark_oak_slab",0],[11,3,2,"dark_oak_fence",0],[11,3,4,"dark_oak_stairs",1.5708],[11,3,10,"dark_oak_stairs",-1.5708],[11,3,12,"dark_oak_fence",0],[12,3,3,"dark_oak_fence",0],[12,3,11,"dark_oak_fence",0],[13,3,4,"dark_oak_slab",0],[13,3,10,"dark_oak_slab",0],[2,4,5,"dark_oak_slab",0],[2,4,6,"dark_oak_slab",0],[2,4,7,"dark_oak_slab",0],[2,4,8,"dark_oak_slab",0],[2,4,9,"dark_oak_slab",0],[5,4,2,"dark_oak_slab",0],[5,4,12,"dark_oak_slab",0],[6,4,2,"dark_oak_slab",0],[6,4,12,"dark_oak_slab",0],[7,4,2,"dark_oak_slab",0],[7,4,12,"dark_oak_slab",0],[8,4,2,"dark_oak_slab",0],[8,4,12,"dark_oak_slab",0],[9,4,2,"dark_oak_slab",0],[9,4,12,"dark_oak_slab",0],[10,4,7,"cobblestone_stairs",-1.5708],[12,4,5,"dark_oak_slab",0],[12,4,6,"dark_oak_slab",0],[12,4,7,"dark_oak_slab",0],[12,4,8,"dark_oak_slab",0],[12,4,9,"dark_oak_slab",0],[2,5,6,"cobblestone_stairs",0],[2,5,7,"cobblestone_slab",0],[2,5,8,"cobblestone_stairs",0],[6,5,2,"cobblestone_stairs",-1.5708],[6,5,12,"cobblestone_stairs",1.5708],[7,5,2,"cobblestone_slab",0],[7,5,12,"cobblestone_slab",0],[8,5,2,"cobblestone_stairs",-1.5708],[8,5,12,"cobblestone_stairs",1.5708],[10,5,8,"cobblestone_stairs",-1.5708],[12,5,6,"cobblestone_stairs",3.14159],[12,5,7,"cobblestone_slab",0],[12,5,8,"cobblestone_stairs",3.14159],[5,6,10,"cobblestone_stairs",3.14159],[4,7,9,"cobblestone_stairs",1.5708],[3,8,7,"dark_oak_slab",0],[4,8,8,"cobblestone_stairs",1.5708],[7,8,3,"dark_oak_slab",0],[7,8,11,"dark_oak_slab",0],[11,8,7,"dark_oak_slab",0],[4,9,7,"cobblestone_stairs",1.5708],[9,10,5,"cobblestone_stairs",0],[10,11,6,"cobblestone_stairs",-1.5708],[2,12,3,"dark_oak_slab",0],[2,12,5,"dark_oak_stairs",0],[2,12,6,"cobblestone_stairs",0],[2,12,7,"cobblestone_stairs",0],[2,12,8,"cobblestone_stairs",0],[2,12,9,"dark_oak_stairs",0],[2,12,11,"dark_oak_slab",0],[3,12,2,"dark_oak_slab",0],[3,12,12,"dark_oak_slab",0],[5,12,2,"dark_oak_stairs",-1.5708],[5,12,12,"dark_oak_stairs",1.5708],[6,12,2,"cobblestone_stairs",-1.5708],[6,12,12,"cobblestone_stairs",1.5708],[7,12,2,"cobblestone_stairs",-1.5708],[7,12,12,"cobblestone_stairs",1.5708],[8,12,2,"cobblestone_stairs",-1.5708],[8,12,12,"cobblestone_stairs",1.5708],[9,12,2,"dark_oak_stairs",-1.5708],[9,12,12,"dark_oak_stairs",1.5708],[10,12,7,"cobblestone_stairs",-1.5708],[11,12,2,"dark_oak_slab",0],[11,12,12,"dark_oak_slab",0],[12,12,3,"dark_oak_slab",0],[12,12,5,"dark_oak_stairs",3.14159],[12,12,6,"cobblestone_stairs",3.14159],[12,12,7,"cobblestone_stairs",3.14159],[12,12,8,"cobblestone_stairs",3.14159],[12,12,9,"dark_oak_stairs",3.14159],[12,12,11,"dark_oak_slab",0],[10,13,8,"cobblestone_stairs",-1.5708],[1,14,3,"dark_oak_fence",0],[1,14,4,"dark_oak_fence",0],[1,14,5,"dark_oak_fence",0],[1,14,6,"dark_oak_fence",0],[1,14,8,"dark_oak_fence",0],[1,14,9,"dark_oak_fence",0],[1,14,10,"dark_oak_fence",0],[1,14,11,"dark_oak_fence",0],[2,14,2,"cobblestone",0],[2,14,3,"dark_oak_fence",0],[2,14,11,"dark_oak_fence",0],[2,14,12,"cobblestone",0],[3,14,1,"dark_oak_fence",0],[3,14,2,"dark_oak_fence",0],[3,14,12,"dark_oak_fence",0],[3,14,13,"dark_oak_fence",0],[4,14,1,"dark_oak_fence",0],[4,14,13,"dark_oak_fence",0],[5,14,1,"dark_oak_fence",0],[5,14,13,"dark_oak_fence",0],[6,14,1,"dark_oak_fence",0],[6,14,13,"dark_oak_fence",0],[8,14,1,"dark_oak_fence",0],[8,14,13,"dark_oak_fence",0],[9,14,1,"dark_oak_fence",0],[9,14,13,"dark_oak_fence",0],[10,14,1,"dark_oak_fence",0],[10,14,13,"dark_oak_fence",0],[11,14,1,"dark_oak_fence",0],[11,14,2,"dark_oak_fence",0],[11,14,12,"dark_oak_fence",0],[11,14,13,"dark_oak_fence",0],[12,14,2,"cobblestone",0],[12,14,3,"dark_oak_fence",0],[12,14,11,"dark_oak_fence",0],[12,14,12,"cobblestone",0],[13,14,3,"dark_oak_fence",0],[13,14,4,"dark_oak_fence",0],[13,14,5,"dark_oak_fence",0],[13,14,6,"dark_oak_fence",0],[13,14,8,"dark_oak_fence",0],[13,14,9,"dark_oak_fence",0],[13,14,10,"dark_oak_fence",0],[13,14,11,"dark_oak_fence",0],[2,15,2,"cobblestone",0],[2,15,12,"cobblestone",0],[12,15,2,"cobblestone",0],[12,15,12,"cobblestone",0],[2,18,2,"torch",0],[2,18,12,"torch",0],[12,18,2,"torch",0],[12,18,12,"torch",0],[7,1,13,"cobblestone",0],[0,13,4,"white_wall_banner",3.14159],[0,13,10,"white_wall_banner",3.14159],[4,13,0,"white_wall_banner",1.5708],[4,13,14,"white_wall_banner",-1.5708],[10,13,0,"white_wall_banner",1.5708],[10,13,14,"white_wall_banner",-1.5708],[14,13,4,"white_wall_banner",0],[14,13,10,"white_wall_banner",0],[9,14,10,"chest",3.14159]]}'),sg={size:[6,10,6],blocks:[[0,0,0,"netherrack",0],[0,0,1,"netherrack",0],[0,0,2,"netherrack",0],[0,0,3,"netherrack",0],[0,0,4,"netherrack",0],[0,0,5,"netherrack",0],[1,0,0,"netherrack",0],[1,0,1,"netherrack",0],[1,0,2,"netherrack",0],[1,0,3,"netherrack",0],[1,0,4,"netherrack",0],[1,0,5,"netherrack",0],[2,0,0,"netherrack",0],[2,0,1,"netherrack",0],[2,0,3,"netherrack",0],[2,0,4,"netherrack",0],[2,0,5,"netherrack",0],[3,0,0,"netherrack",0],[3,0,1,"netherrack",0],[3,0,2,"netherrack",0],[3,0,3,"netherrack",0],[3,0,4,"netherrack",0],[3,0,5,"netherrack",0],[4,0,0,"netherrack",0],[4,0,1,"netherrack",0],[4,0,2,"netherrack",0],[4,0,3,"netherrack",0],[4,0,4,"netherrack",0],[4,0,5,"netherrack",0],[5,0,0,"netherrack",0],[5,0,1,"netherrack",0],[5,0,2,"netherrack",0],[5,0,3,"netherrack",0],[5,0,4,"netherrack",0],[5,0,5,"netherrack",0],[1,1,1,"stone",0],[1,1,2,"stone",0],[1,1,3,"stone",0],[1,1,4,"stone",0],[2,1,0,"stone_slab",0],[2,1,1,"stone",0],[2,1,2,"stone",0],[2,1,3,"stone",0],[2,1,4,"stone_slab",0],[2,1,5,"stone_slab",0],[3,1,0,"stone_bricks",0],[3,1,1,"netherrack",0],[3,1,3,"netherrack",0],[3,1,4,"cracked_stone_bricks",0],[3,1,5,"stone_bricks",0],[4,1,1,"netherrack",0],[4,1,2,"netherrack",0],[4,1,3,"netherrack",0],[4,1,4,"netherrack",0],[4,1,5,"netherrack",0],[5,1,1,"netherrack",0],[5,1,2,"netherrack",0],[5,1,3,"netherrack",0],[5,1,4,"netherrack",0],[5,1,5,"netherrack",0],[3,2,0,"stone_bricks",0],[3,2,1,"obsidian",0],[3,2,2,"obsidian",0],[3,2,3,"obsidian",0],[3,2,4,"obsidian",0],[3,2,5,"stone_bricks",0],[4,2,2,"netherrack",0],[4,2,3,"netherrack",0],[4,2,4,"netherrack",0],[4,2,5,"netherrack",0],[3,3,0,"chiseled_stone_bricks",0],[3,3,1,"obsidian",0],[3,3,4,"obsidian",0],[3,3,5,"chiseled_stone_bricks",0],[4,3,3,"netherrack",0],[4,3,4,"netherrack",0],[3,4,0,"stone_bricks",0],[3,4,1,"obsidian",0],[3,4,5,"stone_bricks",0],[4,4,4,"netherrack",0],[3,5,0,"chiseled_stone_bricks",0],[3,5,1,"obsidian",0],[3,6,0,"stone_bricks",0],[3,6,1,"obsidian",0],[3,6,2,"obsidian",0],[3,6,3,"obsidian",0],[3,7,0,"stone_bricks",0],[3,7,1,"stone_bricks",0],[3,7,2,"gold_block",0],[3,7,3,"gold_block",0],[0,1,1,"stone_slab",0],[0,1,2,"stone_slab",0],[0,1,3,"stone_slab",0],[0,1,4,"stone_slab",0],[1,1,0,"stone_slab",0],[1,1,5,"stone_slab",0],[4,1,0,"stone_slab",0],[2,2,1,"stone_brick_stairs",-1.5708],[2,2,2,"stone_brick_stairs",0],[2,2,3,"stone_brick_stairs",0],[2,2,4,"stone_brick_stairs",1.5708],[2,7,2,"stone_brick_slab",0],[3,8,2,"stone_brick_stairs",-1.5708],[3,8,3,"stone_brick_stairs",1.5708],[2,0,2,"cobblestone",0],[2,2,0,"chest",3.14159]]},ag={size:[7,5,8],blocks:[[0,0,3,"snow_block",0],[0,0,4,"snow_block",0],[0,0,5,"snow_block",0],[1,0,2,"snow_block",0],[1,0,3,"snow_block",0],[1,0,4,"snow_block",0],[1,0,5,"snow_block",0],[1,0,6,"snow_block",0],[2,0,0,"snow_block",0],[2,0,1,"snow_block",0],[2,0,2,"snow_block",0],[2,0,3,"snow_block",0],[2,0,4,"snow_block",0],[2,0,5,"snow_block",0],[2,0,6,"snow_block",0],[2,0,7,"snow_block",0],[3,0,0,"snow_block",0],[3,0,1,"snow_block",0],[3,0,2,"snow_block",0],[3,0,3,"snow_block",0],[3,0,4,"snow_block",0],[3,0,6,"snow_block",0],[3,0,7,"snow_block",0],[4,0,0,"snow_block",0],[4,0,1,"snow_block",0],[4,0,2,"snow_block",0],[4,0,3,"snow_block",0],[4,0,4,"snow_block",0],[4,0,5,"snow_block",0],[4,0,6,"snow_block",0],[4,0,7,"snow_block",0],[5,0,2,"snow_block",0],[5,0,3,"snow_block",0],[5,0,4,"snow_block",0],[5,0,5,"snow_block",0],[5,0,6,"snow_block",0],[6,0,3,"snow_block",0],[6,0,4,"snow_block",0],[6,0,5,"snow_block",0],[0,1,3,"snow_block",0],[0,1,4,"ice",0],[0,1,5,"snow_block",0],[1,1,2,"snow_block",0],[1,1,5,"crafting_table",0],[1,1,6,"snow_block",0],[2,1,0,"snow_block",0],[2,1,1,"snow_block",0],[2,1,7,"snow_block",0],[3,1,7,"snow_block",0],[4,1,0,"snow_block",0],[4,1,1,"snow_block",0],[4,1,7,"snow_block",0],[5,1,2,"snow_block",0],[5,1,6,"snow_block",0],[6,1,3,"snow_block",0],[6,1,4,"ice",0],[6,1,5,"snow_block",0],[0,2,3,"snow_block",0],[0,2,4,"snow_block",0],[0,2,5,"snow_block",0],[1,2,2,"snow_block",0],[1,2,6,"snow_block",0],[2,2,0,"snow_block",0],[2,2,1,"snow_block",0],[2,2,7,"snow_block",0],[3,2,7,"snow_block",0],[4,2,0,"snow_block",0],[4,2,1,"snow_block",0],[4,2,7,"snow_block",0],[5,2,2,"snow_block",0],[5,2,6,"snow_block",0],[6,2,3,"snow_block",0],[6,2,4,"snow_block",0],[6,2,5,"snow_block",0],[1,3,3,"snow_block",0],[1,3,4,"snow_block",0],[1,3,5,"snow_block",0],[2,3,2,"snow_block",0],[2,3,6,"snow_block",0],[3,3,0,"snow_block",0],[3,3,1,"snow_block",0],[3,3,2,"snow_block",0],[3,3,6,"snow_block",0],[4,3,2,"snow_block",0],[4,3,6,"snow_block",0],[5,3,3,"snow_block",0],[5,3,4,"snow_block",0],[5,3,5,"snow_block",0],[2,4,3,"snow_block",0],[2,4,4,"snow_block",0],[2,4,5,"snow_block",0],[3,4,3,"snow_block",0],[3,4,4,"snow_block",0],[3,4,5,"snow_block",0],[4,4,3,"snow_block",0],[4,4,4,"snow_block",0],[4,4,5,"snow_block",0],[3,0,5,"oak_trapdoor",1.5708],[1,1,4,"redstone_torch",0],[2,1,3,"white_carpet",0],[2,1,4,"white_carpet",0],[2,1,5,"white_carpet",0],[2,1,6,"light_gray_carpet",0],[3,1,3,"white_carpet",0],[3,1,4,"white_carpet",0],[3,1,5,"white_carpet",0],[3,1,6,"light_gray_carpet",0],[4,1,3,"white_carpet",0],[4,1,4,"white_carpet",0],[4,1,5,"white_carpet",0],[4,1,6,"light_gray_carpet",0],[1,1,3,"furnace",0],[5,1,4,"red_bed",-1.5708],[5,1,5,"red_bed",-1.5708]]},rg=JSON.parse('{"size":[9,21,28],"blocks":[[4,0,9,"spruce_planks",0],[4,0,10,"spruce_planks",0],[4,0,11,"spruce_planks",0],[4,0,12,"spruce_planks",0],[4,0,13,"spruce_planks",0],[4,0,14,"spruce_planks",0],[4,0,15,"spruce_planks",0],[4,0,16,"spruce_planks",0],[4,0,17,"spruce_planks",0],[4,0,18,"spruce_planks",0],[4,0,19,"spruce_planks",0],[4,0,20,"spruce_planks",0],[4,0,25,"spruce_planks",0],[4,0,26,"spruce_planks",0],[3,1,9,"spruce_planks",0],[3,1,10,"spruce_planks",0],[3,1,11,"spruce_planks",0],[3,1,12,"spruce_planks",0],[3,1,13,"spruce_planks",0],[3,1,14,"spruce_planks",0],[3,1,15,"spruce_planks",0],[3,1,16,"spruce_planks",0],[3,1,17,"spruce_planks",0],[3,1,18,"spruce_planks",0],[3,1,19,"spruce_planks",0],[3,1,20,"spruce_planks",0],[4,1,7,"spruce_planks",0],[4,1,8,"oak_planks",0],[4,1,9,"spruce_planks",0],[4,1,10,"spruce_planks",0],[4,1,11,"oak_planks",0],[4,1,12,"spruce_planks",0],[4,1,13,"spruce_planks",0],[4,1,14,"spruce_planks",0],[4,1,15,"spruce_planks",0],[4,1,16,"oak_planks",0],[4,1,17,"spruce_planks",0],[4,1,18,"spruce_planks",0],[4,1,19,"spruce_planks",0],[4,1,20,"oak_planks",0],[4,1,21,"oak_planks",0],[4,1,22,"spruce_planks",0],[4,1,23,"spruce_planks",0],[4,1,25,"spruce_planks",0],[4,1,26,"spruce_planks",0],[5,1,9,"spruce_planks",0],[5,1,10,"spruce_planks",0],[5,1,11,"spruce_planks",0],[5,1,12,"spruce_planks",0],[5,1,13,"spruce_planks",0],[5,1,14,"spruce_planks",0],[5,1,15,"spruce_planks",0],[5,1,16,"spruce_planks",0],[5,1,17,"spruce_planks",0],[5,1,18,"spruce_planks",0],[5,1,19,"spruce_planks",0],[5,1,20,"spruce_planks",0],[2,2,9,"oak_planks",0],[2,2,10,"oak_planks",0],[2,2,11,"oak_planks",0],[2,2,13,"oak_planks",0],[2,2,14,"oak_planks",0],[2,2,16,"oak_planks",0],[2,2,17,"oak_planks",0],[2,2,19,"oak_planks",0],[2,2,20,"oak_planks",0],[3,2,8,"oak_planks",0],[3,2,20,"oak_planks",0],[3,2,21,"oak_planks",0],[3,2,22,"oak_planks",0],[3,2,23,"oak_planks",0],[4,2,6,"spruce_planks",0],[4,2,7,"oak_planks",0],[4,2,8,"oak_planks",0],[4,2,11,"oak_log",0],[4,2,16,"oak_log",0],[4,2,20,"oak_planks",0],[4,2,21,"oak_planks",0],[4,2,22,"oak_planks",0],[4,2,23,"oak_planks",0],[4,2,24,"spruce_planks",0],[4,2,26,"spruce_planks",0],[5,2,8,"oak_planks",0],[5,2,16,"oak_planks",0],[5,2,20,"oak_planks",0],[5,2,21,"oak_planks",0],[5,2,22,"oak_planks",0],[5,2,23,"oak_planks",0],[6,2,9,"oak_planks",0],[6,2,10,"oak_planks",0],[6,2,11,"oak_planks",0],[6,2,13,"oak_planks",0],[6,2,14,"oak_planks",0],[6,2,16,"oak_planks",0],[6,2,17,"oak_planks",0],[6,2,19,"oak_planks",0],[6,2,20,"oak_planks",0],[1,3,9,"oak_planks",0],[1,3,10,"oak_planks",0],[1,3,11,"oak_planks",0],[1,3,13,"oak_planks",0],[1,3,14,"oak_planks",0],[1,3,16,"oak_planks",0],[1,3,17,"oak_planks",0],[1,3,19,"oak_planks",0],[1,3,20,"oak_planks",0],[2,3,8,"oak_planks",0],[2,3,9,"oak_planks",0],[2,3,10,"oak_planks",0],[2,3,11,"oak_planks",0],[2,3,13,"oak_planks",0],[2,3,14,"oak_planks",0],[2,3,16,"oak_planks",0],[2,3,17,"oak_planks",0],[2,3,19,"oak_planks",0],[2,3,20,"oak_planks",0],[2,3,21,"spruce_planks",0],[2,3,22,"spruce_planks",0],[2,3,23,"spruce_planks",0],[2,3,24,"spruce_planks",0],[3,3,7,"oak_planks",0],[3,3,20,"spruce_planks",0],[3,3,21,"spruce_planks",0],[3,3,22,"spruce_planks",0],[3,3,23,"spruce_planks",0],[3,3,24,"spruce_planks",0],[4,3,5,"oak_planks",0],[4,3,6,"oak_planks",0],[4,3,7,"oak_planks",0],[4,3,11,"oak_log",0],[4,3,16,"oak_log",0],[4,3,20,"spruce_planks",0],[4,3,21,"spruce_planks",0],[4,3,22,"spruce_planks",0],[4,3,23,"spruce_planks",0],[4,3,24,"spruce_planks",0],[5,3,7,"oak_planks",0],[5,3,16,"oak_planks",0],[5,3,20,"spruce_planks",0],[5,3,21,"spruce_planks",0],[5,3,22,"spruce_planks",0],[5,3,23,"spruce_planks",0],[5,3,24,"spruce_planks",0],[6,3,8,"oak_planks",0],[6,3,9,"oak_planks",0],[6,3,10,"oak_planks",0],[6,3,11,"oak_planks",0],[6,3,13,"oak_planks",0],[6,3,14,"oak_planks",0],[6,3,16,"oak_planks",0],[6,3,17,"oak_planks",0],[6,3,19,"oak_planks",0],[6,3,20,"oak_planks",0],[6,3,21,"spruce_planks",0],[6,3,22,"spruce_planks",0],[6,3,23,"spruce_planks",0],[6,3,24,"spruce_planks",0],[7,3,9,"oak_planks",0],[7,3,10,"oak_planks",0],[7,3,11,"oak_planks",0],[7,3,13,"oak_planks",0],[7,3,14,"oak_planks",0],[7,3,16,"oak_planks",0],[7,3,17,"oak_planks",0],[7,3,19,"oak_planks",0],[7,3,20,"oak_planks",0],[1,4,8,"oak_planks",0],[1,4,17,"spruce_planks",0],[1,4,18,"spruce_planks",0],[1,4,19,"oak_planks",0],[1,4,20,"oak_planks",0],[1,4,21,"oak_planks",0],[1,4,22,"oak_planks",0],[1,4,23,"oak_planks",0],[1,4,24,"oak_planks",0],[2,4,7,"oak_planks",0],[2,4,8,"oak_planks",0],[2,4,19,"oak_planks",0],[2,4,25,"oak_planks",0],[3,4,5,"oak_planks",0],[3,4,6,"oak_planks",0],[3,4,7,"oak_planks",0],[3,4,8,"spruce_planks",0],[3,4,19,"oak_planks",0],[3,4,25,"oak_planks",0],[4,4,4,"spruce_planks",0],[4,4,5,"oak_planks",0],[4,4,6,"oak_planks",0],[4,4,7,"oak_log",0],[4,4,8,"spruce_planks",0],[4,4,11,"oak_log",0],[4,4,16,"oak_log",0],[4,4,25,"oak_planks",0],[5,4,5,"oak_planks",0],[5,4,6,"oak_planks",0],[5,4,7,"oak_planks",0],[5,4,8,"spruce_planks",0],[5,4,19,"oak_planks",0],[5,4,25,"oak_planks",0],[6,4,7,"oak_planks",0],[6,4,8,"oak_planks",0],[6,4,19,"oak_planks",0],[6,4,25,"oak_planks",0],[7,4,8,"oak_planks",0],[7,4,17,"spruce_planks",0],[7,4,18,"spruce_planks",0],[7,4,19,"oak_planks",0],[7,4,20,"oak_planks",0],[7,4,21,"oak_planks",0],[7,4,22,"oak_planks",0],[7,4,23,"oak_planks",0],[7,4,24,"oak_planks",0],[0,5,9,"oak_planks",0],[0,5,10,"oak_planks",0],[0,5,18,"oak_planks",0],[0,5,19,"oak_planks",0],[0,5,20,"oak_planks",0],[1,5,7,"oak_planks",0],[1,5,8,"oak_planks",0],[1,5,19,"oak_planks",0],[1,5,20,"oak_planks",0],[1,5,21,"oak_planks",0],[1,5,23,"oak_planks",0],[1,5,24,"oak_planks",0],[2,5,5,"oak_planks",0],[2,5,6,"spruce_planks",0],[2,5,7,"oak_planks",0],[2,5,19,"oak_planks",0],[2,5,25,"oak_planks",0],[3,5,4,"oak_planks",0],[3,5,5,"spruce_planks",0],[3,5,6,"spruce_planks",0],[3,5,19,"oak_planks",0],[4,5,3,"spruce_planks",0],[4,5,4,"oak_planks",0],[4,5,5,"spruce_planks",0],[4,5,6,"spruce_planks",0],[4,5,7,"oak_log",0],[4,5,11,"oak_log",0],[4,5,16,"oak_log",0],[4,5,26,"oak_planks",0],[5,5,4,"oak_planks",0],[5,5,5,"spruce_planks",0],[5,5,6,"spruce_planks",0],[5,5,19,"oak_planks",0],[6,5,5,"oak_planks",0],[6,5,6,"spruce_planks",0],[6,5,7,"oak_planks",0],[6,5,19,"oak_planks",0],[6,5,25,"oak_planks",0],[7,5,7,"oak_planks",0],[7,5,8,"oak_planks",0],[7,5,19,"oak_planks",0],[7,5,20,"oak_planks",0],[7,5,21,"oak_planks",0],[7,5,23,"oak_planks",0],[7,5,24,"oak_planks",0],[8,5,9,"oak_planks",0],[8,5,10,"oak_planks",0],[8,5,18,"oak_planks",0],[8,5,19,"oak_planks",0],[8,5,20,"oak_planks",0],[0,6,8,"oak_planks",0],[0,6,19,"oak_planks",0],[0,6,20,"oak_planks",0],[0,6,21,"oak_planks",0],[0,6,23,"oak_planks",0],[1,6,6,"oak_planks",0],[1,6,7,"oak_planks",0],[1,6,20,"spruce_planks",0],[1,6,24,"oak_planks",0],[1,6,25,"oak_planks",0],[2,6,5,"oak_planks",0],[2,6,19,"oak_planks",0],[3,6,4,"oak_planks",0],[3,6,19,"oak_planks",0],[3,6,26,"oak_planks",0],[4,6,3,"spruce_planks",0],[4,6,7,"oak_log",0],[4,6,11,"oak_log",0],[4,6,16,"oak_log",0],[5,6,4,"oak_planks",0],[5,6,19,"oak_planks",0],[5,6,26,"oak_planks",0],[6,6,5,"oak_planks",0],[6,6,19,"oak_planks",0],[7,6,6,"oak_planks",0],[7,6,7,"oak_planks",0],[7,6,20,"spruce_planks",0],[7,6,24,"oak_planks",0],[7,6,25,"oak_planks",0],[8,6,8,"oak_planks",0],[8,6,19,"oak_planks",0],[8,6,20,"oak_planks",0],[8,6,21,"oak_planks",0],[8,6,23,"oak_planks",0],[0,7,21,"oak_planks",0],[0,7,22,"oak_planks",0],[0,7,23,"oak_planks",0],[1,7,21,"spruce_planks",0],[1,7,23,"spruce_planks",0],[1,7,24,"oak_planks",0],[1,7,25,"oak_planks",0],[2,7,25,"spruce_planks",0],[2,7,26,"oak_planks",0],[3,7,21,"spruce_planks",0],[3,7,26,"oak_planks",0],[4,7,2,"spruce_planks",0],[4,7,7,"oak_log",0],[4,7,11,"oak_log",0],[4,7,16,"oak_log",0],[4,7,21,"spruce_planks",0],[4,7,27,"oak_planks",0],[5,7,21,"spruce_planks",0],[5,7,26,"oak_planks",0],[6,7,25,"spruce_planks",0],[6,7,26,"oak_planks",0],[7,7,21,"spruce_planks",0],[7,7,23,"spruce_planks",0],[7,7,24,"oak_planks",0],[7,7,25,"oak_planks",0],[8,7,21,"oak_planks",0],[8,7,22,"oak_planks",0],[8,7,23,"oak_planks",0],[1,8,21,"oak_planks",0],[1,8,25,"oak_planks",0],[2,8,26,"oak_planks",0],[3,8,21,"oak_planks",0],[4,8,7,"oak_log",0],[4,8,11,"oak_log",0],[4,8,16,"oak_log",0],[4,8,21,"oak_planks",0],[5,8,21,"oak_planks",0],[6,8,26,"oak_planks",0],[7,8,21,"oak_planks",0],[7,8,25,"oak_planks",0],[4,9,7,"oak_log",0],[4,9,11,"oak_log",0],[4,9,16,"oak_log",0],[1,10,6,"oak_log",0],[2,10,6,"oak_log",0],[3,10,6,"oak_log",0],[4,10,6,"oak_log",0],[4,10,7,"oak_log",0],[4,10,11,"oak_log",0],[4,10,16,"oak_log",0],[5,10,6,"oak_log",0],[6,10,6,"oak_log",0],[4,11,7,"oak_log",0],[4,11,11,"oak_log",0],[4,11,16,"oak_log",0],[4,12,7,"oak_log",0],[4,12,11,"oak_log",0],[4,12,16,"oak_log",0],[4,13,7,"oak_log",0],[4,13,11,"oak_log",0],[4,13,16,"oak_log",0],[1,14,15,"oak_log",0],[2,14,15,"oak_log",0],[3,14,6,"oak_log",0],[3,14,15,"oak_log",0],[4,14,6,"oak_log",0],[4,14,7,"oak_log",0],[4,14,11,"oak_log",0],[4,14,15,"oak_log",0],[4,14,16,"oak_log",0],[5,14,6,"oak_log",0],[5,14,15,"oak_log",0],[6,14,6,"oak_log",0],[6,14,15,"oak_log",0],[7,14,6,"oak_log",0],[7,14,15,"oak_log",0],[4,15,7,"oak_log",0],[4,15,11,"oak_log",0],[4,15,16,"oak_log",0],[4,16,7,"oak_log",0],[4,16,11,"oak_log",0],[4,16,16,"oak_log",0],[4,17,7,"oak_log",0],[4,17,11,"oak_log",0],[4,17,16,"oak_log",0],[4,18,11,"oak_log",0],[4,19,11,"oak_log",0],[4,20,11,"oak_log",0],[4,0,8,"spruce_stairs",-1.5708],[4,0,21,"spruce_stairs",1.5708],[2,1,9,"oak_stairs",0],[2,1,10,"oak_stairs",0],[2,1,11,"oak_stairs",0],[2,1,12,"oak_stairs",0],[2,1,13,"oak_stairs",0],[2,1,14,"oak_stairs",0],[2,1,15,"oak_stairs",0],[2,1,16,"oak_stairs",0],[2,1,17,"oak_stairs",0],[2,1,18,"oak_stairs",0],[2,1,19,"oak_stairs",0],[2,1,20,"oak_stairs",0],[3,1,8,"oak_stairs",0],[3,1,21,"oak_stairs",0],[3,1,22,"oak_stairs",0],[3,1,23,"oak_stairs",0],[4,1,6,"spruce_stairs",-1.5708],[4,1,24,"spruce_stairs",1.5708],[5,1,8,"oak_stairs",3.14159],[5,1,21,"oak_stairs",3.14159],[5,1,22,"oak_stairs",3.14159],[5,1,23,"oak_stairs",3.14159],[6,1,9,"oak_stairs",3.14159],[6,1,10,"oak_stairs",3.14159],[6,1,11,"oak_stairs",3.14159],[6,1,12,"oak_stairs",3.14159],[6,1,13,"oak_stairs",3.14159],[6,1,14,"oak_stairs",3.14159],[6,1,15,"oak_stairs",3.14159],[6,1,16,"oak_stairs",3.14159],[6,1,17,"oak_stairs",3.14159],[6,1,18,"oak_stairs",3.14159],[6,1,19,"oak_stairs",3.14159],[6,1,20,"oak_stairs",3.14159],[1,2,9,"oak_stairs",0],[1,2,10,"oak_stairs",0],[1,2,11,"oak_stairs",0],[1,2,12,"oak_stairs",0],[1,2,13,"oak_stairs",0],[1,2,14,"oak_stairs",0],[1,2,15,"oak_stairs",0],[1,2,16,"oak_stairs",0],[1,2,17,"oak_stairs",0],[1,2,18,"oak_stairs",0],[1,2,19,"oak_stairs",0],[1,2,20,"oak_stairs",0],[2,2,8,"oak_stairs",0],[2,2,12,"oak_stairs",3.14159],[2,2,15,"oak_stairs",3.14159],[2,2,18,"oak_stairs",3.14159],[2,2,21,"oak_stairs",0],[2,2,22,"oak_stairs",0],[2,2,23,"oak_stairs",1.5708],[2,2,24,"oak_slab",0],[3,2,7,"oak_stairs",0],[3,2,16,"oak_planks",-1.5708],[3,2,19,"oak_stairs",-1.5708],[3,2,24,"oak_stairs",1.5708],[4,2,5,"spruce_stairs",-1.5708],[4,2,19,"oak_stairs",-1.5708],[4,2,25,"spruce_fence",0],[5,2,7,"oak_stairs",3.14159],[5,2,19,"oak_stairs",-1.5708],[5,2,24,"oak_stairs",1.5708],[6,2,8,"oak_stairs",3.14159],[6,2,12,"oak_stairs",0],[6,2,15,"oak_stairs",0],[6,2,18,"oak_stairs",0],[6,2,21,"oak_stairs",3.14159],[6,2,22,"oak_stairs",3.14159],[6,2,23,"oak_stairs",1.5708],[6,2,24,"oak_slab",0],[7,2,9,"oak_stairs",3.14159],[7,2,10,"oak_stairs",3.14159],[7,2,11,"oak_stairs",3.14159],[7,2,12,"oak_stairs",3.14159],[7,2,13,"oak_stairs",3.14159],[7,2,14,"oak_stairs",3.14159],[7,2,15,"oak_stairs",3.14159],[7,2,16,"oak_stairs",3.14159],[7,2,17,"oak_stairs",3.14159],[7,2,18,"oak_stairs",3.14159],[7,2,19,"oak_stairs",3.14159],[7,2,20,"oak_stairs",3.14159],[1,3,8,"oak_stairs",0],[1,3,21,"oak_stairs",0],[1,3,22,"oak_stairs",0],[1,3,23,"oak_stairs",0],[1,3,24,"oak_stairs",0],[2,3,7,"oak_stairs",0],[2,3,25,"oak_stairs",1.5708],[3,3,5,"oak_stairs",0],[3,3,6,"oak_stairs",0],[3,3,8,"oak_stairs",1.5708],[3,3,16,"oak_planks",0],[3,3,19,"oak_stairs",-1.5708],[3,3,25,"oak_stairs",1.5708],[4,3,4,"spruce_stairs",-1.5708],[4,3,8,"oak_stairs",1.5708],[4,3,19,"oak_stairs",-1.5708],[4,3,25,"spruce_fence",0],[5,3,5,"oak_stairs",3.14159],[5,3,6,"oak_stairs",3.14159],[5,3,8,"oak_stairs",1.5708],[5,3,19,"oak_stairs",-1.5708],[5,3,25,"oak_stairs",1.5708],[6,3,7,"oak_stairs",3.14159],[6,3,25,"oak_stairs",1.5708],[7,3,8,"oak_stairs",3.14159],[7,3,21,"oak_stairs",3.14159],[7,3,22,"oak_stairs",3.14159],[7,3,23,"oak_stairs",3.14159],[7,3,24,"oak_stairs",3.14159],[0,4,9,"oak_stairs",0],[0,4,10,"oak_stairs",0],[0,4,11,"oak_stairs",0],[0,4,12,"oak_stairs",0],[0,4,13,"oak_stairs",0],[0,4,14,"oak_stairs",0],[0,4,15,"oak_stairs",0],[0,4,16,"oak_stairs",0],[0,4,17,"oak_stairs",0],[0,4,18,"oak_stairs",0],[0,4,19,"oak_stairs",0],[0,4,20,"oak_stairs",0],[1,4,7,"oak_stairs",0],[1,4,9,"spruce_slab",0],[1,4,10,"spruce_slab",0],[1,4,11,"spruce_slab",0],[1,4,12,"spruce_slab",0],[1,4,13,"spruce_slab",0],[1,4,14,"spruce_slab",0],[1,4,15,"spruce_slab",0],[1,4,16,"spruce_slab",0],[2,4,5,"oak_stairs",0],[2,4,6,"oak_stairs",0],[2,4,9,"spruce_slab",0],[2,4,10,"spruce_slab",0],[2,4,11,"spruce_slab",0],[2,4,12,"spruce_slab",0],[2,4,13,"spruce_slab",0],[2,4,14,"spruce_slab",0],[2,4,15,"spruce_slab",0],[2,4,16,"spruce_slab",0],[2,4,17,"spruce_slab",0],[2,4,18,"spruce_slab",0],[2,4,20,"oak_stairs",3.14159],[3,4,4,"oak_stairs",-1.5708],[3,4,9,"oak_trapdoor",0],[3,4,10,"oak_trapdoor",0],[3,4,11,"spruce_slab",0],[3,4,12,"oak_trapdoor",-1.5708],[3,4,13,"oak_trapdoor",0],[3,4,14,"oak_trapdoor",0],[3,4,15,"oak_trapdoor",1.5708],[3,4,16,"spruce_slab",0],[3,4,17,"spruce_slab",0],[3,4,18,"spruce_slab",0],[3,4,23,"oak_stairs",3.14159],[4,4,3,"spruce_stairs",-1.5708],[4,4,9,"oak_trapdoor",-1.5708],[4,4,10,"oak_trapdoor",1.5708],[4,4,12,"oak_trapdoor",-1.5708],[4,4,15,"oak_trapdoor",1.5708],[4,4,17,"spruce_slab",0],[4,4,18,"spruce_slab",0],[4,4,19,"spruce_slab",0],[4,4,23,"oak_slab",0],[4,4,26,"oak_stairs",1.5708],[5,4,4,"oak_stairs",-1.5708],[5,4,9,"oak_trapdoor",3.14159],[5,4,10,"oak_trapdoor",3.14159],[5,4,11,"spruce_slab",0],[5,4,12,"oak_trapdoor",-1.5708],[5,4,13,"oak_trapdoor",3.14159],[5,4,14,"oak_trapdoor",3.14159],[5,4,15,"oak_trapdoor",1.5708],[5,4,16,"spruce_slab",0],[5,4,17,"spruce_slab",0],[5,4,18,"spruce_slab",0],[5,4,23,"oak_stairs",0],[6,4,5,"oak_stairs",3.14159],[6,4,6,"oak_stairs",3.14159],[6,4,9,"spruce_slab",0],[6,4,10,"spruce_slab",0],[6,4,11,"spruce_slab",0],[6,4,12,"spruce_slab",0],[6,4,13,"spruce_slab",0],[6,4,14,"spruce_slab",0],[6,4,15,"spruce_slab",0],[6,4,16,"spruce_slab",0],[6,4,17,"spruce_slab",0],[6,4,18,"spruce_slab",0],[6,4,20,"oak_stairs",0],[7,4,7,"oak_stairs",3.14159],[7,4,9,"spruce_slab",0],[7,4,10,"spruce_slab",0],[7,4,11,"spruce_slab",0],[7,4,12,"spruce_slab",0],[7,4,13,"spruce_slab",0],[7,4,14,"spruce_slab",0],[7,4,15,"spruce_slab",0],[7,4,16,"spruce_slab",0],[8,4,9,"oak_stairs",3.14159],[8,4,10,"oak_stairs",3.14159],[8,4,11,"oak_stairs",3.14159],[8,4,12,"oak_stairs",3.14159],[8,4,13,"oak_stairs",3.14159],[8,4,14,"oak_stairs",3.14159],[8,4,15,"oak_stairs",3.14159],[8,4,16,"oak_stairs",3.14159],[8,4,17,"oak_stairs",3.14159],[8,4,18,"oak_stairs",3.14159],[8,4,19,"oak_stairs",3.14159],[8,4,20,"oak_stairs",3.14159],[0,5,8,"oak_stairs",-1.5708],[0,5,11,"spruce_fence",0],[0,5,12,"spruce_fence",0],[0,5,13,"spruce_fence",0],[0,5,15,"spruce_fence",0],[0,5,16,"spruce_fence",0],[0,5,17,"spruce_fence",0],[0,5,21,"oak_stairs",0],[0,5,22,"oak_stairs",0],[0,5,23,"oak_stairs",1.5708],[1,5,6,"oak_stairs",0],[1,5,18,"spruce_stairs",-1.5708],[1,5,22,"oak_stairs",3.14159],[1,5,25,"oak_stairs",1.5708],[3,5,3,"oak_stairs",-1.5708],[3,5,7,"spruce_stairs",1.5708],[3,5,25,"oak_stairs",-1.5708],[3,5,26,"oak_stairs",1.5708],[4,5,25,"oak_stairs",-1.5708],[5,5,3,"oak_stairs",-1.5708],[5,5,7,"spruce_stairs",1.5708],[5,5,25,"oak_stairs",-1.5708],[5,5,26,"oak_stairs",1.5708],[7,5,6,"oak_stairs",3.14159],[7,5,18,"spruce_stairs",-1.5708],[7,5,22,"oak_stairs",0],[7,5,25,"oak_stairs",1.5708],[8,5,8,"oak_stairs",-1.5708],[8,5,11,"spruce_fence",0],[8,5,12,"spruce_fence",0],[8,5,13,"spruce_fence",0],[8,5,15,"spruce_fence",0],[8,5,16,"spruce_fence",0],[8,5,17,"spruce_fence",0],[8,5,21,"oak_stairs",3.14159],[8,5,22,"oak_stairs",3.14159],[8,5,23,"oak_stairs",1.5708],[0,6,9,"oak_stairs",1.5708],[0,6,18,"oak_stairs",-1.5708],[1,6,8,"oak_stairs",1.5708],[1,6,19,"spruce_stairs",-1.5708],[1,6,21,"oak_fence",0],[1,6,23,"oak_fence",0],[2,6,20,"spruce_slab",0],[2,6,25,"oak_fence",0],[2,6,26,"oak_stairs",1.5708],[3,6,2,"spruce_fence",0],[3,6,3,"oak_stairs",-1.5708],[3,6,20,"spruce_slab",0],[4,6,2,"spruce_stairs",-1.5708],[4,6,4,"spruce_stairs",1.5708],[4,6,20,"spruce_slab",0],[5,6,2,"spruce_fence",0],[5,6,3,"oak_stairs",-1.5708],[5,6,20,"spruce_slab",0],[6,6,20,"spruce_slab",0],[6,6,25,"oak_fence",0],[6,6,26,"oak_stairs",1.5708],[7,6,8,"oak_stairs",1.5708],[7,6,19,"spruce_slab",0],[7,6,21,"oak_fence",0],[7,6,23,"oak_fence",0],[8,6,9,"oak_stairs",1.5708],[8,6,18,"oak_stairs",-1.5708],[0,7,20,"oak_stairs",-1.5708],[1,7,22,"spruce_stairs",3.14159],[2,7,19,"spruce_fence",0],[2,7,21,"spruce_stairs",-1.5708],[2,7,22,"spruce_slab",0],[2,7,23,"spruce_slab",0],[2,7,24,"spruce_slab",0],[3,7,2,"spruce_fence",0],[3,7,3,"spruce_fence",0],[3,7,4,"spruce_fence",0],[3,7,19,"spruce_fence",0],[3,7,22,"spruce_slab",0],[3,7,23,"spruce_slab",0],[3,7,24,"spruce_slab",0],[3,7,25,"spruce_stairs",-1.5708],[3,7,27,"oak_stairs",1.5708],[4,7,1,"spruce_stairs",-1.5708],[4,7,3,"spruce_stairs",1.5708],[4,7,19,"oak_slab",0],[4,7,20,"oak_stairs",-1.5708],[4,7,22,"spruce_slab",0],[4,7,23,"spruce_slab",0],[4,7,24,"spruce_slab",0],[4,7,25,"spruce_slab",0],[4,7,26,"spruce_slab",0],[5,7,2,"spruce_fence",0],[5,7,3,"spruce_fence",0],[5,7,4,"spruce_fence",0],[5,7,19,"spruce_fence",0],[5,7,22,"spruce_slab",0],[5,7,23,"spruce_slab",0],[5,7,24,"spruce_slab",0],[5,7,25,"spruce_stairs",-1.5708],[5,7,27,"oak_stairs",1.5708],[6,7,19,"spruce_fence",0],[6,7,21,"spruce_stairs",-1.5708],[6,7,22,"spruce_slab",0],[6,7,23,"spruce_slab",0],[6,7,24,"spruce_slab",0],[7,7,22,"spruce_stairs",0],[8,7,20,"oak_stairs",-1.5708],[0,8,21,"oak_stairs",0],[0,8,22,"oak_stairs",0],[0,8,23,"oak_stairs",0],[1,8,23,"spruce_fence",0],[1,8,24,"spruce_fence",0],[3,8,26,"spruce_fence",0],[3,8,27,"spruce_fence",0],[4,8,0,"spruce_stairs",-1.5708],[4,8,1,"spruce_stairs",1.5708],[4,8,27,"spruce_fence",0],[5,8,26,"spruce_fence",0],[5,8,27,"spruce_fence",0],[7,8,23,"spruce_fence",0],[7,8,24,"spruce_fence",0],[8,8,21,"oak_stairs",3.14159],[8,8,22,"oak_stairs",3.14159],[8,8,23,"oak_stairs",3.14159],[4,2,9,"chest",-1.5708],[5,2,18,"chest",3.14159],[6,4,24,"chest",1.5708]]}'),lg={size:[5,5,5],blocks:[[0,0,1,"mud_bricks",0],[0,0,2,"mud_bricks",0],[0,0,3,"mud_bricks",0],[1,0,0,"mud_bricks",0],[1,0,1,"mud_bricks",0],[1,0,2,"mud_bricks",0],[1,0,3,"mud_bricks",0],[1,0,4,"mud_bricks",0],[2,0,0,"mud_bricks",0],[2,0,1,"mud_bricks",0],[2,0,2,"mud_bricks",0],[2,0,3,"mud_bricks",0],[2,0,4,"mud_bricks",0],[3,0,0,"mud_bricks",0],[3,0,1,"mud_bricks",0],[3,0,2,"mud_bricks",0],[3,0,3,"mud_bricks",0],[3,0,4,"mud_bricks",0],[4,0,1,"mud_bricks",0],[4,0,2,"mud_bricks",0],[4,0,3,"mud_bricks",0],[0,1,1,"mud_bricks",0],[0,1,2,"mud_bricks",0],[0,1,3,"mud_bricks",0],[1,1,0,"mud_bricks",0],[1,1,1,"blue_terracotta",0],[1,1,2,"gravel",0],[1,1,3,"gravel",0],[1,1,4,"mud_bricks",0],[2,1,1,"gravel",0],[2,1,3,"gravel",0],[2,1,4,"mud_bricks",0],[3,1,0,"mud_bricks",0],[3,1,1,"blue_terracotta",0],[3,1,2,"blue_terracotta",0],[3,1,3,"red_terracotta",0],[3,1,4,"mud_bricks",0],[4,1,1,"mud_bricks",0],[4,1,2,"mud_bricks",0],[4,1,3,"mud_bricks",0],[0,2,1,"mud_bricks",0],[0,2,2,"mud_bricks",0],[0,2,3,"mud_bricks",0],[1,2,0,"mud_bricks",0],[1,2,1,"gravel",0],[1,2,2,"gravel",0],[1,2,3,"gravel",0],[1,2,4,"mud_bricks",0],[2,2,0,"gravel",0],[2,2,1,"gravel",0],[2,2,2,"gravel",0],[2,2,3,"gravel",0],[2,2,4,"mud_bricks",0],[3,2,0,"mud_bricks",0],[3,2,1,"blue_terracotta",0],[3,2,2,"gravel",0],[3,2,3,"gravel",0],[3,2,4,"mud_bricks",0],[4,2,1,"mud_bricks",0],[4,2,2,"mud_bricks",0],[4,2,3,"mud_bricks",0],[0,3,1,"red_terracotta",0],[0,3,2,"red_terracotta",0],[0,3,3,"red_terracotta",0],[1,3,0,"red_terracotta",0],[1,3,1,"gravel",0],[1,3,2,"gravel",0],[1,3,3,"gravel",0],[1,3,4,"red_terracotta",0],[2,3,0,"gravel",0],[2,3,1,"gravel",0],[2,3,2,"gravel",0],[2,3,3,"gravel",0],[2,3,4,"red_terracotta",0],[3,3,0,"red_terracotta",0],[3,3,1,"gravel",0],[3,3,2,"gravel",0],[3,3,3,"gravel",0],[4,3,1,"gravel",0],[4,3,2,"gravel",0],[4,3,3,"red_terracotta",0],[1,4,0,"blue_terracotta",0],[1,4,1,"blue_terracotta",0],[1,4,2,"blue_terracotta",0],[1,4,3,"blue_terracotta",0],[2,4,0,"blue_terracotta",0],[2,4,1,"gravel",0],[2,4,2,"gravel",0],[2,4,3,"blue_terracotta",0],[3,4,0,"blue_terracotta",0],[3,4,1,"gravel",0],[3,4,2,"gravel",0],[4,4,1,"gravel",0],[4,4,2,"gravel",0],[2,1,0,"cobblestone",0]]},cg={size:[7,8,7],blocks:[[0,0,0,"birch_planks",0],[0,0,1,"birch_planks",0],[0,0,2,"birch_planks",0],[0,0,3,"birch_planks",0],[0,0,4,"birch_planks",0],[0,0,5,"birch_planks",0],[0,0,6,"birch_planks",0],[1,0,0,"birch_planks",0],[1,0,1,"birch_planks",0],[1,0,2,"birch_planks",0],[1,0,3,"birch_planks",0],[1,0,4,"birch_planks",0],[1,0,5,"birch_planks",0],[1,0,6,"birch_planks",0],[2,0,0,"birch_planks",0],[2,0,1,"birch_planks",0],[2,0,2,"birch_planks",0],[2,0,3,"birch_planks",0],[2,0,4,"birch_planks",0],[2,0,5,"birch_planks",0],[2,0,6,"birch_planks",0],[3,0,0,"birch_planks",0],[3,0,1,"birch_planks",0],[3,0,2,"birch_planks",0],[3,0,3,"birch_planks",0],[3,0,4,"birch_planks",0],[3,0,5,"birch_planks",0],[3,0,6,"birch_planks",0],[4,0,0,"birch_planks",0],[4,0,1,"birch_planks",0],[4,0,2,"birch_planks",0],[4,0,3,"birch_planks",0],[4,0,4,"birch_planks",0],[4,0,5,"birch_planks",0],[4,0,6,"birch_planks",0],[5,0,0,"birch_planks",0],[5,0,1,"birch_planks",0],[5,0,2,"birch_planks",0],[5,0,3,"birch_planks",0],[5,0,4,"birch_planks",0],[5,0,5,"birch_planks",0],[5,0,6,"birch_planks",0],[6,0,0,"birch_planks",0],[6,0,1,"birch_planks",0],[6,0,2,"birch_planks",0],[6,0,3,"birch_planks",0],[6,0,4,"birch_planks",0],[6,0,5,"birch_planks",0],[6,0,6,"birch_planks",0],[0,1,0,"cobblestone",0],[0,1,1,"cobblestone",0],[0,1,2,"cobblestone",0],[0,1,3,"cobblestone",0],[0,1,4,"cobblestone",0],[0,1,5,"cobblestone",0],[0,1,6,"cobblestone",0],[1,1,0,"cobblestone",0],[1,1,1,"cobblestone",0],[1,1,2,"cobblestone",0],[1,1,3,"cobblestone",0],[1,1,4,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"cobblestone",0],[2,1,0,"cobblestone",0],[2,1,6,"cobblestone",0],[3,1,0,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,0,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,0,"cobblestone",0],[5,1,6,"cobblestone",0],[6,1,0,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,5,"cobblestone",0],[6,1,6,"cobblestone",0],[0,2,0,"cobblestone",0],[0,2,6,"cobblestone",0],[2,2,0,"cobblestone",0],[2,2,6,"cobblestone",0],[3,2,0,"cobblestone",0],[3,2,6,"cobblestone",0],[4,2,0,"cobblestone",0],[4,2,6,"cobblestone",0],[5,2,0,"cobblestone",0],[5,2,6,"cobblestone",0],[6,2,0,"cobblestone",0],[6,2,1,"cobblestone",0],[6,2,5,"cobblestone",0],[6,2,6,"cobblestone",0],[0,2,1,"cobblestone_stairs",3.14159],[0,2,2,"cobblestone_stairs",3.14159],[0,2,3,"cobblestone_stairs",3.14159],[0,2,4,"cobblestone_stairs",3.14159],[0,2,5,"cobblestone_stairs",3.14159],[1,2,0,"cobblestone_stairs",1.5708],[1,2,6,"cobblestone_stairs",-1.5708],[0,3,0,"cobblestone",0],[0,3,6,"cobblestone",0],[0,4,0,"cobblestone",0],[0,4,6,"cobblestone",0],[0,5,0,"cobblestone",0],[0,5,6,"cobblestone",0],[0,6,0,"cobblestone",0],[0,6,6,"cobblestone",0],[0,7,0,"cobblestone",0],[0,7,6,"cobblestone",0]]},dg={size:[7,7,7],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"oak_planks",0],[2,0,3,"oak_planks",0],[2,0,4,"oak_planks",0],[2,0,5,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"oak_planks",0],[3,0,4,"oak_planks",0],[3,0,5,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"oak_planks",0],[4,0,3,"oak_planks",0],[4,0,4,"oak_planks",0],[4,0,5,"cobblestone",0],[5,0,1,"oak_log",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,4,"cobblestone",0],[1,1,5,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,5,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,5,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,5,"cobblestone",0],[5,1,1,"oak_log",0],[5,1,2,"cobblestone",0],[5,1,3,"cobblestone",0],[5,1,4,"cobblestone",0],[5,1,5,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"cobblestone",0],[1,2,4,"cobblestone",0],[1,2,5,"oak_log",0],[2,2,1,"cobblestone",0],[2,2,5,"cobblestone",0],[4,2,1,"cobblestone",0],[4,2,5,"cobblestone",0],[5,2,1,"oak_log",0],[5,2,2,"cobblestone",0],[5,2,4,"cobblestone",0],[5,2,5,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"oak_log",0],[2,3,1,"cobblestone",0],[2,3,5,"cobblestone",0],[3,3,1,"cobblestone",0],[3,3,5,"cobblestone",0],[4,3,1,"cobblestone",0],[4,3,5,"cobblestone",0],[5,3,1,"oak_log",0],[5,3,2,"cobblestone",0],[5,3,3,"cobblestone",0],[5,3,4,"cobblestone",0],[5,3,5,"oak_log",0],[1,4,1,"oak_planks",0],[1,4,2,"oak_planks",0],[1,4,3,"oak_planks",0],[1,4,4,"oak_planks",0],[1,4,5,"oak_planks",0],[2,4,1,"oak_planks",0],[2,4,5,"oak_planks",0],[3,4,1,"oak_planks",0],[3,4,5,"oak_planks",0],[4,4,1,"oak_planks",0],[4,4,5,"oak_planks",0],[5,4,1,"oak_planks",0],[5,4,2,"oak_planks",0],[5,4,3,"oak_planks",0],[5,4,4,"oak_planks",0],[5,4,5,"oak_planks",0],[2,5,2,"oak_planks",0],[2,5,3,"oak_planks",0],[2,5,4,"oak_planks",0],[3,5,2,"oak_planks",0],[3,5,4,"oak_planks",0],[4,5,2,"oak_planks",0],[4,5,3,"oak_planks",0],[4,5,4,"oak_planks",0],[3,6,3,"oak_planks",0],[1,1,3,"oak_planks",0],[4,1,4,"oak_stairs",0],[0,2,2,"torch",3.14159],[0,2,4,"torch",3.14159],[1,2,3,"oak_planks",0],[3,2,1,"glass",0],[3,2,5,"glass",0],[5,2,3,"glass",0],[4,3,3,"torch",3.14159],[0,4,0,"oak_stairs",-1.5708],[0,4,1,"oak_stairs",0],[0,4,2,"oak_stairs",0],[0,4,3,"oak_stairs",0],[0,4,4,"oak_stairs",0],[0,4,5,"oak_stairs",0],[0,4,6,"oak_stairs",0],[1,4,0,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,0,"oak_stairs",-1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,0,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,0,"oak_stairs",-1.5708],[4,4,6,"oak_stairs",1.5708],[5,4,0,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,0,"oak_stairs",3.14159],[6,4,1,"oak_stairs",3.14159],[6,4,2,"oak_stairs",3.14159],[6,4,3,"oak_stairs",3.14159],[6,4,4,"oak_stairs",3.14159],[6,4,5,"oak_stairs",3.14159],[6,4,6,"oak_stairs",1.5708],[1,5,1,"oak_stairs",0],[1,5,2,"oak_stairs",0],[1,5,3,"oak_stairs",0],[1,5,4,"oak_stairs",0],[1,5,5,"oak_stairs",0],[2,5,1,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,1,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,1,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,1,"oak_stairs",-1.5708],[5,5,2,"oak_stairs",3.14159],[5,5,3,"oak_stairs",3.14159],[5,5,4,"oak_stairs",3.14159],[5,5,5,"oak_stairs",1.5708],[2,6,2,"oak_stairs",0],[2,6,3,"oak_stairs",0],[2,6,4,"oak_stairs",0],[3,6,2,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,2,"oak_stairs",-1.5708],[4,6,3,"oak_stairs",3.14159],[4,6,4,"oak_stairs",3.14159],[0,0,3,"cobblestone",0],[3,0,3,"cobblestone",0],[3,1,2,"red_bed",0],[4,1,2,"red_bed",0]]},ug=JSON.parse('{"size":[11,10,17],"blocks":[[1,0,7,"cobblestone",0],[1,0,8,"cobblestone",0],[1,0,9,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[2,0,10,"cobblestone",0],[3,0,1,"oak_log",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"oak_log",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[3,0,8,"cobblestone",0],[3,0,9,"cobblestone",0],[3,0,10,"cobblestone",0],[3,0,11,"oak_log",0],[3,0,12,"cobblestone",0],[3,0,13,"cobblestone",0],[3,0,14,"cobblestone",0],[3,0,15,"oak_log",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[4,0,8,"cobblestone",0],[4,0,9,"cobblestone",0],[4,0,10,"cobblestone",0],[4,0,11,"cobblestone",0],[4,0,12,"cobblestone",0],[4,0,13,"cobblestone",0],[4,0,14,"cobblestone",0],[4,0,15,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[5,0,8,"cobblestone",0],[5,0,9,"cobblestone",0],[5,0,10,"cobblestone",0],[5,0,11,"cobblestone",0],[5,0,12,"cobblestone",0],[5,0,13,"cobblestone",0],[5,0,14,"cobblestone",0],[5,0,15,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[6,0,7,"cobblestone",0],[6,0,8,"cobblestone",0],[6,0,9,"cobblestone",0],[6,0,10,"cobblestone",0],[6,0,11,"cobblestone",0],[6,0,12,"cobblestone",0],[6,0,13,"cobblestone",0],[6,0,14,"cobblestone",0],[6,0,15,"cobblestone",0],[7,0,1,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,8,"cobblestone",0],[7,0,9,"cobblestone",0],[7,0,10,"cobblestone",0],[7,0,11,"cobblestone",0],[7,0,12,"cobblestone",0],[7,0,13,"cobblestone",0],[7,0,14,"cobblestone",0],[7,0,15,"cobblestone",0],[8,0,1,"cobblestone",0],[8,0,2,"cobblestone",0],[8,0,3,"cobblestone",0],[8,0,4,"cobblestone",0],[8,0,5,"cobblestone",0],[8,0,6,"cobblestone",0],[8,0,7,"cobblestone",0],[8,0,8,"cobblestone",0],[8,0,9,"cobblestone",0],[8,0,10,"cobblestone",0],[8,0,11,"cobblestone",0],[8,0,12,"cobblestone",0],[8,0,13,"cobblestone",0],[8,0,14,"cobblestone",0],[8,0,15,"cobblestone",0],[9,0,1,"oak_log",0],[9,0,2,"cobblestone",0],[9,0,3,"cobblestone",0],[9,0,4,"cobblestone",0],[9,0,5,"cobblestone",0],[9,0,6,"cobblestone",0],[9,0,7,"cobblestone",0],[9,0,8,"cobblestone",0],[9,0,9,"cobblestone",0],[9,0,10,"cobblestone",0],[9,0,11,"cobblestone",0],[9,0,12,"cobblestone",0],[9,0,13,"cobblestone",0],[9,0,14,"cobblestone",0],[9,0,15,"oak_log",0],[1,1,7,"cobblestone",0],[1,1,9,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,10,"cobblestone",0],[3,1,1,"oak_log",0],[3,1,2,"oak_planks",0],[3,1,3,"oak_planks",0],[3,1,4,"oak_planks",0],[3,1,5,"oak_log",0],[3,1,11,"oak_log",0],[3,1,12,"oak_planks",0],[3,1,13,"oak_planks",0],[3,1,14,"oak_planks",0],[3,1,15,"oak_log",0],[4,1,1,"oak_planks",0],[4,1,15,"oak_planks",0],[5,1,1,"oak_planks",0],[5,1,4,"cobblestone",0],[5,1,5,"cobblestone",0],[5,1,11,"cobblestone",0],[5,1,12,"cobblestone",0],[5,1,15,"oak_planks",0],[6,1,1,"oak_planks",0],[6,1,15,"oak_planks",0],[7,1,1,"oak_planks",0],[7,1,15,"oak_planks",0],[8,1,1,"oak_planks",0],[8,1,15,"oak_planks",0],[9,1,1,"oak_log",0],[9,1,2,"oak_planks",0],[9,1,3,"oak_planks",0],[9,1,4,"oak_planks",0],[9,1,5,"oak_planks",0],[9,1,6,"oak_planks",0],[9,1,7,"oak_planks",0],[9,1,8,"oak_planks",0],[9,1,9,"oak_planks",0],[9,1,10,"oak_planks",0],[9,1,11,"oak_planks",0],[9,1,12,"oak_planks",0],[9,1,13,"oak_planks",0],[9,1,14,"oak_planks",0],[9,1,15,"oak_log",0],[1,2,7,"cobblestone",0],[1,2,9,"cobblestone",0],[2,2,6,"cobblestone",0],[2,2,10,"cobblestone",0],[3,2,1,"oak_log",0],[3,2,2,"oak_planks",0],[3,2,4,"oak_planks",0],[3,2,5,"oak_log",0],[3,2,11,"oak_log",0],[3,2,12,"oak_planks",0],[3,2,14,"oak_planks",0],[3,2,15,"oak_log",0],[4,2,1,"oak_planks",0],[4,2,15,"oak_planks",0],[5,2,1,"oak_log",0],[5,2,5,"cobblestone",0],[5,2,11,"cobblestone",0],[5,2,15,"oak_log",0],[7,2,1,"oak_log",0],[7,2,15,"oak_log",0],[8,2,1,"oak_planks",0],[8,2,15,"oak_planks",0],[9,2,1,"oak_log",0],[9,2,2,"oak_planks",0],[9,2,3,"oak_log",0],[9,2,5,"oak_log",0],[9,2,6,"oak_planks",0],[9,2,7,"oak_log",0],[9,2,9,"oak_log",0],[9,2,10,"oak_planks",0],[9,2,11,"oak_log",0],[9,2,13,"oak_log",0],[9,2,14,"oak_planks",0],[9,2,15,"oak_log",0],[1,3,7,"cobblestone",0],[1,3,8,"cobblestone",0],[1,3,9,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"oak_planks",0],[2,3,8,"oak_planks",0],[2,3,9,"oak_planks",0],[2,3,10,"cobblestone",0],[3,3,1,"oak_log",0],[3,3,2,"oak_planks",0],[3,3,3,"oak_planks",0],[3,3,4,"oak_planks",0],[3,3,5,"oak_log",0],[3,3,6,"oak_planks",0],[3,3,7,"oak_planks",0],[3,3,8,"oak_planks",0],[3,3,9,"oak_planks",0],[3,3,10,"oak_planks",0],[3,3,11,"oak_log",0],[3,3,12,"oak_planks",0],[3,3,13,"oak_planks",0],[3,3,14,"oak_planks",0],[3,3,15,"oak_log",0],[4,3,1,"oak_planks",0],[4,3,6,"oak_planks",0],[4,3,7,"oak_planks",0],[4,3,8,"oak_planks",0],[4,3,9,"oak_planks",0],[4,3,10,"oak_planks",0],[4,3,15,"oak_planks",0],[5,3,1,"oak_planks",0],[5,3,6,"oak_planks",0],[5,3,7,"oak_planks",0],[5,3,8,"oak_planks",0],[5,3,9,"oak_planks",0],[5,3,10,"oak_planks",0],[5,3,15,"oak_planks",0],[6,3,1,"oak_planks",0],[6,3,15,"oak_planks",0],[7,3,1,"oak_planks",0],[7,3,15,"oak_planks",0],[8,3,1,"oak_planks",0],[8,3,15,"oak_planks",0],[9,3,1,"oak_log",0],[9,3,2,"oak_planks",0],[9,3,3,"oak_planks",0],[9,3,4,"oak_planks",0],[9,3,5,"oak_planks",0],[9,3,6,"oak_planks",0],[9,3,7,"oak_planks",0],[9,3,8,"oak_planks",0],[9,3,9,"oak_planks",0],[9,3,10,"oak_planks",0],[9,3,11,"oak_planks",0],[9,3,12,"oak_planks",0],[9,3,13,"oak_planks",0],[9,3,14,"oak_planks",0],[9,3,15,"oak_log",0],[3,4,1,"oak_log",0],[3,4,2,"oak_log",0],[3,4,3,"oak_log",0],[3,4,4,"oak_log",0],[3,4,5,"oak_log",0],[3,4,6,"oak_planks",0],[3,4,8,"oak_planks",0],[3,4,10,"oak_planks",0],[3,4,11,"oak_log",0],[3,4,12,"oak_log",0],[3,4,13,"oak_log",0],[3,4,14,"oak_log",0],[3,4,15,"oak_log",0],[4,4,1,"oak_log",0],[4,4,15,"oak_log",0],[5,4,1,"oak_log",0],[5,4,15,"oak_log",0],[6,4,1,"oak_log",0],[6,4,15,"oak_log",0],[7,4,1,"oak_log",0],[7,4,15,"oak_log",0],[8,4,1,"oak_log",0],[8,4,15,"oak_log",0],[9,4,1,"oak_log",0],[9,4,2,"oak_log",0],[9,4,3,"oak_log",0],[9,4,4,"oak_log",0],[9,4,5,"oak_log",0],[9,4,6,"oak_log",0],[9,4,7,"oak_log",0],[9,4,8,"oak_log",0],[9,4,9,"oak_log",0],[9,4,10,"oak_log",0],[9,4,11,"oak_log",0],[9,4,12,"oak_log",0],[9,4,13,"oak_log",0],[9,4,14,"oak_log",0],[9,4,15,"oak_log",0],[3,5,1,"oak_log",0],[3,5,2,"oak_planks",0],[3,5,3,"oak_planks",0],[3,5,4,"oak_planks",0],[3,5,5,"oak_log",0],[3,5,6,"oak_planks",0],[3,5,8,"oak_planks",0],[3,5,10,"oak_planks",0],[3,5,11,"oak_log",0],[3,5,12,"oak_planks",0],[3,5,13,"oak_planks",0],[3,5,14,"oak_planks",0],[3,5,15,"oak_log",0],[4,5,1,"oak_planks",0],[4,5,15,"oak_planks",0],[5,5,1,"oak_planks",0],[5,5,15,"oak_planks",0],[6,5,1,"oak_planks",0],[6,5,15,"oak_planks",0],[7,5,1,"oak_planks",0],[7,5,15,"oak_planks",0],[8,5,1,"oak_planks",0],[8,5,15,"oak_planks",0],[9,5,1,"oak_log",0],[9,5,2,"oak_planks",0],[9,5,3,"oak_planks",0],[9,5,4,"oak_planks",0],[9,5,5,"oak_planks",0],[9,5,6,"oak_planks",0],[9,5,7,"oak_planks",0],[9,5,8,"oak_planks",0],[9,5,9,"oak_planks",0],[9,5,10,"oak_planks",0],[9,5,11,"oak_planks",0],[9,5,12,"oak_planks",0],[9,5,13,"oak_planks",0],[9,5,14,"oak_planks",0],[9,5,15,"oak_log",0],[3,6,5,"oak_log",0],[3,6,6,"oak_planks",0],[3,6,7,"oak_planks",0],[3,6,8,"oak_planks",0],[3,6,9,"oak_planks",0],[3,6,10,"oak_planks",0],[3,6,11,"oak_log",0],[4,6,1,"oak_planks",0],[4,6,2,"oak_planks",0],[4,6,3,"oak_planks",0],[4,6,4,"oak_planks",0],[4,6,5,"oak_planks",0],[4,6,11,"oak_planks",0],[4,6,12,"oak_planks",0],[4,6,13,"oak_planks",0],[4,6,14,"oak_planks",0],[4,6,15,"oak_planks",0],[5,6,1,"oak_planks",0],[5,6,15,"oak_planks",0],[6,6,1,"oak_planks",0],[6,6,15,"oak_planks",0],[7,6,1,"oak_planks",0],[7,6,15,"oak_planks",0],[8,6,1,"oak_planks",0],[8,6,2,"oak_planks",0],[8,6,3,"oak_planks",0],[8,6,4,"oak_planks",0],[8,6,5,"oak_planks",0],[8,6,6,"oak_planks",0],[8,6,7,"oak_planks",0],[8,6,8,"oak_planks",0],[8,6,9,"oak_planks",0],[8,6,10,"oak_planks",0],[8,6,11,"oak_planks",0],[8,6,12,"oak_planks",0],[8,6,13,"oak_planks",0],[8,6,14,"oak_planks",0],[8,6,15,"oak_planks",0],[3,7,6,"oak_log",0],[3,7,7,"oak_log",0],[3,7,8,"oak_log",0],[3,7,9,"oak_log",0],[3,7,10,"oak_log",0],[4,7,6,"oak_planks",0],[4,7,10,"oak_planks",0],[5,7,1,"oak_log",0],[5,7,2,"oak_planks",0],[5,7,3,"oak_planks",0],[5,7,4,"oak_planks",0],[5,7,5,"oak_planks",0],[5,7,6,"oak_planks",0],[5,7,10,"oak_planks",0],[5,7,11,"oak_planks",0],[5,7,12,"oak_planks",0],[5,7,13,"oak_planks",0],[5,7,14,"oak_planks",0],[5,7,15,"oak_log",0],[6,7,1,"oak_log",0],[6,7,15,"oak_log",0],[7,7,1,"oak_log",0],[7,7,2,"oak_planks",0],[7,7,3,"oak_planks",0],[7,7,4,"oak_planks",0],[7,7,5,"oak_planks",0],[7,7,6,"oak_planks",0],[7,7,7,"oak_planks",0],[7,7,8,"oak_planks",0],[7,7,9,"oak_planks",0],[7,7,10,"oak_planks",0],[7,7,11,"oak_planks",0],[7,7,12,"oak_planks",0],[7,7,13,"oak_planks",0],[7,7,14,"oak_planks",0],[7,7,15,"oak_log",0],[3,8,7,"oak_planks",0],[3,8,8,"oak_planks",0],[3,8,9,"oak_planks",0],[4,8,7,"oak_planks",0],[4,8,9,"oak_planks",0],[5,8,7,"oak_planks",0],[5,8,9,"oak_planks",0],[6,8,0,"oak_planks",0],[6,8,1,"oak_planks",0],[6,8,2,"oak_planks",0],[6,8,3,"oak_planks",0],[6,8,4,"oak_planks",0],[6,8,5,"oak_planks",0],[6,8,6,"oak_planks",0],[6,8,7,"oak_planks",0],[6,8,8,"oak_planks",0],[6,8,9,"oak_planks",0],[6,8,10,"oak_planks",0],[6,8,11,"oak_planks",0],[6,8,12,"oak_planks",0],[6,8,13,"oak_planks",0],[6,8,14,"oak_planks",0],[6,8,15,"oak_planks",0],[6,8,16,"oak_planks",0],[2,9,8,"oak_planks",0],[3,9,8,"oak_planks",0],[4,9,8,"oak_planks",0],[5,9,8,"oak_planks",0],[1,1,8,"oak_planks",0],[5,1,3,"cobblestone_stairs",-1.5708],[5,1,13,"cobblestone_stairs",1.5708],[7,1,2,"oak_stairs",1.5708],[7,1,14,"oak_stairs",-1.5708],[8,1,2,"oak_stairs",1.5708],[8,1,3,"oak_stairs",0],[8,1,4,"oak_stairs",0],[8,1,12,"oak_stairs",0],[8,1,13,"oak_stairs",0],[8,1,14,"oak_stairs",-1.5708],[0,2,7,"torch",3.14159],[0,2,9,"torch",3.14159],[1,2,8,"oak_planks",0],[2,2,1,"torch",3.14159],[2,2,15,"torch",3.14159],[3,2,3,"glass",0],[3,2,13,"glass",0],[5,2,4,"cobblestone_stairs",-1.5708],[5,2,12,"cobblestone_stairs",1.5708],[6,2,1,"glass",0],[6,2,15,"glass",0],[9,2,4,"glass",0],[9,2,8,"glass",0],[9,2,12,"glass",0],[10,2,6,"torch",0],[10,2,10,"torch",0],[5,3,5,"cobblestone_stairs",-1.5708],[5,3,11,"cobblestone_stairs",1.5708],[6,3,6,"torch",0],[6,3,10,"torch",0],[1,4,7,"oak_fence",0],[1,4,8,"oak_fence",0],[1,4,9,"oak_fence",0],[2,4,6,"oak_fence",0],[2,4,10,"oak_fence",0],[3,4,7,"oak_planks",0],[3,4,9,"oak_planks",0],[4,4,8,"oak_stairs",3.14159],[2,5,0,"oak_stairs",0],[2,5,1,"oak_stairs",0],[2,5,2,"oak_stairs",0],[2,5,3,"oak_stairs",0],[2,5,4,"oak_stairs",0],[2,5,12,"oak_stairs",0],[2,5,13,"oak_stairs",0],[2,5,14,"oak_stairs",0],[2,5,15,"oak_stairs",0],[2,5,16,"oak_stairs",0],[3,5,0,"oak_stairs",3.14159],[3,5,7,"oak_planks",0],[3,5,9,"oak_planks",0],[3,5,16,"oak_stairs",3.14159],[9,5,0,"oak_stairs",0],[9,5,16,"oak_stairs",0],[10,5,0,"oak_stairs",3.14159],[10,5,1,"oak_stairs",3.14159],[10,5,2,"oak_stairs",3.14159],[10,5,3,"oak_stairs",3.14159],[10,5,4,"oak_stairs",3.14159],[10,5,5,"oak_stairs",3.14159],[10,5,6,"oak_stairs",3.14159],[10,5,7,"oak_stairs",3.14159],[10,5,8,"oak_stairs",3.14159],[10,5,9,"oak_stairs",3.14159],[10,5,10,"oak_stairs",3.14159],[10,5,11,"oak_stairs",3.14159],[10,5,12,"oak_stairs",3.14159],[10,5,13,"oak_stairs",3.14159],[10,5,14,"oak_stairs",3.14159],[10,5,15,"oak_stairs",3.14159],[10,5,16,"oak_stairs",3.14159],[3,6,0,"oak_stairs",0],[3,6,1,"oak_stairs",0],[3,6,2,"oak_stairs",0],[3,6,3,"oak_stairs",0],[3,6,4,"oak_stairs",0],[3,6,12,"oak_stairs",0],[3,6,13,"oak_stairs",0],[3,6,14,"oak_stairs",0],[3,6,15,"oak_stairs",0],[3,6,16,"oak_stairs",0],[4,6,0,"oak_stairs",3.14159],[4,6,16,"oak_stairs",3.14159],[6,6,2,"torch",-1.5708],[6,6,14,"torch",1.5708],[8,6,0,"oak_stairs",0],[8,6,16,"oak_stairs",0],[9,6,0,"oak_stairs",3.14159],[9,6,1,"oak_stairs",3.14159],[9,6,2,"oak_stairs",3.14159],[9,6,3,"oak_stairs",3.14159],[9,6,4,"oak_stairs",3.14159],[9,6,5,"oak_stairs",3.14159],[9,6,6,"oak_stairs",3.14159],[9,6,7,"oak_stairs",3.14159],[9,6,8,"oak_stairs",3.14159],[9,6,9,"oak_stairs",3.14159],[9,6,10,"oak_stairs",3.14159],[9,6,11,"oak_stairs",3.14159],[9,6,12,"oak_stairs",3.14159],[9,6,13,"oak_stairs",3.14159],[9,6,14,"oak_stairs",3.14159],[9,6,15,"oak_stairs",3.14159],[9,6,16,"oak_stairs",3.14159],[2,7,5,"oak_stairs",-1.5708],[2,7,6,"oak_stairs",1.5708],[2,7,10,"oak_stairs",-1.5708],[2,7,11,"oak_stairs",1.5708],[3,7,5,"oak_stairs",-1.5708],[3,7,11,"oak_stairs",1.5708],[4,7,0,"oak_stairs",0],[4,7,1,"oak_stairs",0],[4,7,2,"oak_stairs",0],[4,7,3,"oak_stairs",0],[4,7,4,"oak_stairs",0],[4,7,5,"oak_stairs",-1.5708],[4,7,11,"oak_stairs",0],[4,7,12,"oak_stairs",0],[4,7,13,"oak_stairs",0],[4,7,14,"oak_stairs",0],[4,7,15,"oak_stairs",0],[4,7,16,"oak_stairs",0],[5,7,0,"oak_stairs",3.14159],[5,7,16,"oak_stairs",3.14159],[7,7,0,"oak_stairs",0],[7,7,16,"oak_stairs",0],[8,7,0,"oak_stairs",3.14159],[8,7,1,"oak_stairs",3.14159],[8,7,2,"oak_stairs",3.14159],[8,7,3,"oak_stairs",3.14159],[8,7,4,"oak_stairs",3.14159],[8,7,5,"oak_stairs",3.14159],[8,7,6,"oak_stairs",3.14159],[8,7,7,"oak_stairs",3.14159],[8,7,8,"oak_stairs",3.14159],[8,7,9,"oak_stairs",3.14159],[8,7,10,"oak_stairs",3.14159],[8,7,11,"oak_stairs",3.14159],[8,7,12,"oak_stairs",3.14159],[8,7,13,"oak_stairs",3.14159],[8,7,14,"oak_stairs",3.14159],[8,7,15,"oak_stairs",3.14159],[8,7,16,"oak_stairs",3.14159],[2,8,6,"oak_stairs",-1.5708],[2,8,7,"oak_stairs",1.5708],[2,8,9,"oak_stairs",-1.5708],[2,8,10,"oak_stairs",1.5708],[3,8,6,"oak_stairs",-1.5708],[3,8,10,"oak_stairs",1.5708],[4,8,6,"oak_stairs",-1.5708],[4,8,10,"oak_stairs",1.5708],[5,8,0,"oak_stairs",0],[5,8,1,"oak_stairs",0],[5,8,2,"oak_stairs",0],[5,8,3,"oak_stairs",0],[5,8,4,"oak_stairs",0],[5,8,5,"oak_stairs",0],[5,8,6,"oak_stairs",-1.5708],[5,8,10,"oak_stairs",1.5708],[5,8,11,"oak_stairs",0],[5,8,12,"oak_stairs",0],[5,8,13,"oak_stairs",0],[5,8,14,"oak_stairs",0],[5,8,15,"oak_stairs",0],[5,8,16,"oak_stairs",0],[7,8,0,"oak_stairs",3.14159],[7,8,1,"oak_stairs",3.14159],[7,8,2,"oak_stairs",3.14159],[7,8,3,"oak_stairs",3.14159],[7,8,4,"oak_stairs",3.14159],[7,8,5,"oak_stairs",3.14159],[7,8,6,"oak_stairs",3.14159],[7,8,7,"oak_stairs",3.14159],[7,8,8,"oak_stairs",3.14159],[7,8,9,"oak_stairs",3.14159],[7,8,10,"oak_stairs",3.14159],[7,8,11,"oak_stairs",3.14159],[7,8,12,"oak_stairs",3.14159],[7,8,13,"oak_stairs",3.14159],[7,8,14,"oak_stairs",3.14159],[7,8,15,"oak_stairs",3.14159],[7,8,16,"oak_stairs",3.14159],[2,9,7,"oak_stairs",-1.5708],[2,9,9,"oak_stairs",1.5708],[3,9,7,"oak_stairs",-1.5708],[3,9,9,"oak_stairs",1.5708],[4,9,7,"oak_stairs",-1.5708],[4,9,9,"oak_stairs",1.5708],[5,9,7,"oak_stairs",-1.5708],[5,9,9,"oak_stairs",1.5708],[6,9,7,"oak_stairs",3.14159],[6,9,8,"oak_stairs",3.14159],[6,9,9,"oak_stairs",3.14159],[0,0,8,"cobblestone",0]]}'),hg={size:[11,8,12],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"oak_planks",0],[2,0,3,"oak_planks",0],[2,0,4,"oak_planks",0],[2,0,5,"oak_planks",0],[2,0,6,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"oak_planks",0],[3,0,3,"oak_planks",0],[3,0,4,"oak_planks",0],[3,0,5,"oak_planks",0],[3,0,6,"cobblestone",0],[3,0,7,"oak_log",0],[3,0,8,"oak_log",0],[3,0,9,"oak_log",0],[3,0,10,"oak_log",0],[3,0,11,"oak_log",0],[4,0,1,"cobblestone",0],[4,0,2,"oak_planks",0],[4,0,3,"oak_planks",0],[4,0,4,"oak_planks",0],[4,0,5,"oak_planks",0],[4,0,6,"cobblestone",0],[4,0,7,"grass_block",0],[4,0,8,"grass_block",0],[4,0,9,"grass_block",0],[4,0,10,"grass_block",0],[4,0,11,"oak_log",0],[5,0,1,"oak_log",0],[5,0,2,"oak_planks",0],[5,0,3,"oak_planks",0],[5,0,4,"oak_planks",0],[5,0,5,"oak_planks",0],[5,0,6,"cobblestone",0],[5,0,7,"dirt",0],[5,0,8,"grass_block",0],[5,0,9,"grass_block",0],[5,0,10,"grass_block",0],[5,0,11,"oak_log",0],[6,0,1,"cobblestone",0],[6,0,5,"oak_planks",0],[6,0,6,"cobblestone",0],[6,0,7,"dirt",0],[6,0,8,"grass_block",0],[6,0,10,"grass_block",0],[6,0,11,"oak_log",0],[7,0,1,"cobblestone",0],[7,0,5,"oak_planks",0],[7,0,6,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,8,"grass_block",0],[7,0,9,"grass_block",0],[7,0,10,"grass_block",0],[7,0,11,"oak_log",0],[8,0,1,"cobblestone",0],[8,0,5,"oak_planks",0],[8,0,6,"cobblestone",0],[8,0,7,"grass_block",0],[8,0,8,"grass_block",0],[8,0,9,"grass_block",0],[8,0,10,"grass_block",0],[8,0,11,"oak_log",0],[9,0,1,"oak_log",0],[9,0,2,"cobblestone",0],[9,0,3,"cobblestone",0],[9,0,4,"cobblestone",0],[9,0,5,"cobblestone",0],[9,0,6,"oak_log",0],[9,0,7,"oak_log",0],[9,0,8,"oak_log",0],[9,0,9,"oak_log",0],[9,0,10,"oak_log",0],[9,0,11,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,5,"oak_planks",0],[2,1,6,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,1,"oak_log",0],[5,1,6,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,6,"cobblestone",0],[7,1,1,"cobblestone",0],[8,1,1,"cobblestone",0],[8,1,6,"cobblestone",0],[9,1,1,"oak_log",0],[9,1,2,"cobblestone",0],[9,1,3,"cobblestone",0],[9,1,4,"cobblestone",0],[9,1,5,"cobblestone",0],[9,1,6,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"oak_log",0],[1,2,5,"oak_log",0],[1,2,6,"oak_log",0],[2,2,1,"oak_log",0],[2,2,6,"oak_log",0],[4,2,1,"oak_log",0],[5,2,1,"oak_log",0],[5,2,6,"oak_log",0],[6,2,1,"oak_log",0],[6,2,6,"oak_log",0],[8,2,1,"oak_log",0],[8,2,6,"cobblestone",0],[9,2,1,"oak_log",0],[9,2,2,"oak_log",0],[9,2,5,"oak_log",0],[9,2,6,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"cobblestone",0],[1,3,6,"oak_log",0],[2,3,1,"oak_planks",0],[2,3,6,"oak_planks",0],[3,3,1,"oak_planks",0],[3,3,6,"oak_planks",0],[4,3,1,"oak_planks",0],[4,3,6,"oak_planks",0],[5,3,1,"oak_planks",0],[5,3,6,"oak_planks",0],[6,3,1,"oak_planks",0],[6,3,6,"oak_planks",0],[7,3,1,"oak_planks",0],[7,3,6,"oak_planks",0],[8,3,1,"oak_planks",0],[8,3,6,"oak_planks",0],[9,3,1,"oak_log",0],[9,3,2,"cobblestone",0],[9,3,3,"cobblestone",0],[9,3,4,"cobblestone",0],[9,3,5,"cobblestone",0],[9,3,6,"oak_log",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[2,4,2,"oak_planks",0],[2,4,5,"oak_planks",0],[3,4,2,"oak_planks",0],[3,4,5,"oak_planks",0],[4,4,2,"oak_planks",0],[4,4,5,"oak_planks",0],[5,4,2,"oak_planks",0],[5,4,5,"oak_planks",0],[6,4,2,"oak_planks",0],[6,4,5,"oak_planks",0],[7,4,2,"oak_planks",0],[7,4,5,"oak_planks",0],[8,4,2,"oak_planks",0],[9,4,2,"cobblestone",0],[9,4,3,"cobblestone",0],[9,4,4,"cobblestone",0],[9,4,5,"cobblestone",0],[1,5,3,"cobblestone",0],[1,5,4,"cobblestone",0],[2,5,3,"oak_planks",0],[2,5,4,"oak_planks",0],[3,5,3,"oak_planks",0],[3,5,4,"oak_planks",0],[4,5,3,"oak_planks",0],[4,5,4,"oak_planks",0],[5,5,3,"oak_planks",0],[5,5,4,"oak_planks",0],[6,5,3,"oak_planks",0],[6,5,4,"oak_planks",0],[7,5,3,"oak_planks",0],[7,5,4,"oak_planks",0],[8,5,3,"oak_planks",0],[8,5,4,"oak_planks",0],[8,5,5,"cobblestone",0],[9,5,3,"cobblestone",0],[9,5,4,"cobblestone",0],[0,0,4,"oak_stairs",0],[1,1,3,"oak_planks",0],[1,1,4,"oak_planks",0],[2,1,2,"oak_stairs",3.14159],[3,1,2,"oak_fence",0],[3,1,7,"oak_fence",0],[3,1,8,"oak_fence",0],[3,1,9,"oak_fence",0],[3,1,10,"oak_fence",0],[3,1,11,"oak_fence",0],[4,1,2,"oak_stairs",0],[4,1,11,"oak_fence",0],[5,1,11,"oak_fence",0],[6,1,11,"oak_fence",0],[7,1,6,"oak_planks",1.5708],[7,1,11,"oak_fence",0],[8,1,11,"oak_fence",0],[9,1,7,"oak_fence",0],[9,1,8,"oak_fence",0],[9,1,9,"oak_fence",0],[9,1,10,"oak_fence",0],[9,1,11,"oak_fence",0],[0,2,2,"torch",3.14159],[0,2,5,"torch",3.14159],[1,2,3,"oak_planks",0],[1,2,4,"oak_planks",0],[2,2,5,"red_wool",0],[3,2,1,"glass",0],[3,2,2,"oak_pressure_plate",0],[3,2,6,"glass",0],[3,2,11,"torch",0],[4,2,6,"glass",0],[5,2,0,"torch",1.5708],[7,2,1,"glass",0],[7,2,6,"oak_planks",1.5708],[8,2,5,"cobblestone_wall",0],[9,2,3,"glass",0],[9,2,4,"glass",0],[9,2,11,"torch",0],[0,3,0,"oak_stairs",-1.5708],[0,3,1,"oak_stairs",1.5708],[0,3,6,"oak_stairs",-1.5708],[0,3,7,"oak_stairs",1.5708],[1,3,0,"oak_stairs",-1.5708],[1,3,7,"oak_stairs",1.5708],[2,3,0,"oak_stairs",-1.5708],[2,3,7,"oak_stairs",1.5708],[3,3,0,"oak_stairs",-1.5708],[3,3,2,"torch",-1.5708],[3,3,7,"oak_stairs",1.5708],[4,3,0,"oak_stairs",-1.5708],[4,3,7,"oak_stairs",1.5708],[5,3,0,"oak_stairs",-1.5708],[5,3,7,"oak_stairs",1.5708],[6,3,0,"oak_stairs",-1.5708],[6,3,7,"oak_stairs",1.5708],[7,3,0,"oak_stairs",-1.5708],[7,3,5,"torch",1.5708],[7,3,7,"oak_stairs",1.5708],[8,3,0,"oak_stairs",-1.5708],[8,3,5,"cobblestone_wall",0],[8,3,7,"oak_stairs",1.5708],[9,3,0,"oak_stairs",-1.5708],[9,3,7,"oak_stairs",1.5708],[10,3,0,"oak_stairs",-1.5708],[10,3,1,"oak_stairs",1.5708],[10,3,6,"oak_stairs",-1.5708],[10,3,7,"oak_stairs",1.5708],[0,4,1,"oak_stairs",-1.5708],[0,4,2,"oak_stairs",1.5708],[0,4,5,"oak_stairs",-1.5708],[0,4,6,"oak_stairs",1.5708],[1,4,1,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,1,"oak_stairs",-1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,1,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,1,"oak_stairs",-1.5708],[4,4,6,"oak_stairs",1.5708],[5,4,1,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,1,"oak_stairs",-1.5708],[6,4,6,"oak_stairs",1.5708],[7,4,1,"oak_stairs",-1.5708],[7,4,6,"oak_stairs",1.5708],[8,4,1,"oak_stairs",-1.5708],[8,4,5,"cobblestone_wall",0],[8,4,6,"oak_stairs",1.5708],[9,4,1,"oak_stairs",-1.5708],[9,4,6,"oak_stairs",1.5708],[10,4,1,"oak_stairs",-1.5708],[10,4,2,"oak_stairs",1.5708],[10,4,5,"oak_stairs",-1.5708],[10,4,6,"oak_stairs",1.5708],[0,5,2,"oak_stairs",-1.5708],[0,5,3,"oak_stairs",1.5708],[0,5,4,"oak_stairs",-1.5708],[0,5,5,"oak_stairs",1.5708],[1,5,2,"oak_stairs",-1.5708],[1,5,5,"oak_stairs",1.5708],[2,5,2,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,2,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,2,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,2,"oak_stairs",-1.5708],[5,5,5,"oak_stairs",1.5708],[6,5,2,"oak_stairs",-1.5708],[6,5,5,"oak_stairs",1.5708],[7,5,2,"oak_stairs",-1.5708],[7,5,5,"oak_stairs",1.5708],[8,5,2,"oak_stairs",-1.5708],[9,5,2,"oak_stairs",-1.5708],[9,5,5,"oak_stairs",1.5708],[10,5,2,"oak_stairs",-1.5708],[10,5,3,"oak_stairs",1.5708],[10,5,4,"oak_stairs",-1.5708],[10,5,5,"oak_stairs",1.5708],[0,6,3,"oak_stairs",-1.5708],[0,6,4,"oak_stairs",1.5708],[1,6,3,"oak_stairs",-1.5708],[1,6,4,"oak_stairs",1.5708],[2,6,3,"oak_stairs",-1.5708],[2,6,4,"oak_stairs",1.5708],[3,6,3,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,3,"oak_stairs",-1.5708],[4,6,4,"oak_stairs",1.5708],[5,6,3,"oak_stairs",-1.5708],[5,6,4,"oak_stairs",1.5708],[6,6,3,"oak_stairs",-1.5708],[6,6,4,"oak_stairs",1.5708],[7,6,3,"oak_stairs",-1.5708],[7,6,4,"oak_stairs",1.5708],[8,6,3,"oak_stairs",-1.5708],[8,6,4,"oak_stairs",1.5708],[8,6,5,"cobblestone_wall",0],[9,6,3,"oak_stairs",-1.5708],[9,6,4,"oak_stairs",1.5708],[10,6,3,"oak_stairs",-1.5708],[10,6,4,"oak_stairs",1.5708],[8,7,5,"cobblestone_wall",0],[0,0,3,"cobblestone",0],[6,0,9,"cobblestone",0]]},fg={size:[9,7,16],blocks:[[0,0,0,"grass_block",0],[0,0,1,"grass_block",0],[0,0,2,"grass_block",0],[0,0,3,"grass_block",0],[0,0,4,"grass_block",0],[0,0,5,"grass_block",0],[1,0,0,"grass_block",0],[1,0,1,"grass_block",0],[1,0,2,"grass_block",0],[1,0,3,"grass_block",0],[1,0,4,"grass_block",0],[1,0,5,"grass_block",0],[2,0,0,"grass_block",0],[2,0,1,"grass_block",0],[2,0,3,"grass_block",0],[2,0,4,"grass_block",0],[2,0,5,"dirt",0],[2,0,6,"dirt",0],[2,0,7,"grass_block",0],[2,0,8,"dirt",0],[2,0,9,"dirt",0],[2,0,10,"dirt",0],[2,0,11,"dirt",0],[2,0,12,"dirt",0],[2,0,13,"dirt",0],[2,0,14,"dirt",0],[3,0,0,"grass_block",0],[3,0,1,"grass_block",0],[3,0,2,"grass_block",0],[3,0,3,"dirt",0],[3,0,4,"grass_block",0],[3,0,5,"grass_block",0],[3,0,6,"grass_block",0],[3,0,7,"grass_block",0],[3,0,8,"dirt",0],[3,0,9,"dirt",0],[3,0,10,"grass_block",0],[3,0,11,"grass_block",0],[3,0,12,"dirt",0],[3,0,13,"grass_block",0],[3,0,14,"dirt",0],[4,0,0,"grass_block",0],[4,0,1,"grass_block",0],[4,0,2,"grass_block",0],[4,0,3,"grass_block",0],[4,0,4,"grass_block",0],[4,0,5,"grass_block",0],[4,0,6,"grass_block",0],[4,0,7,"grass_block",0],[4,0,8,"grass_block",0],[4,0,9,"grass_block",0],[4,0,11,"grass_block",0],[4,0,12,"dirt",0],[4,0,13,"dirt",0],[4,0,14,"dirt",0],[5,0,0,"grass_block",0],[5,0,1,"grass_block",0],[5,0,2,"grass_block",0],[5,0,3,"grass_block",0],[5,0,4,"grass_block",0],[5,0,5,"dirt",0],[5,0,6,"grass_block",0],[5,0,7,"grass_block",0],[5,0,8,"grass_block",0],[5,0,9,"grass_block",0],[5,0,10,"grass_block",0],[5,0,11,"grass_block",0],[5,0,12,"dirt",0],[5,0,13,"dirt",0],[5,0,14,"dirt",0],[6,0,0,"grass_block",0],[6,0,2,"grass_block",0],[6,0,3,"grass_block",0],[6,0,4,"grass_block",0],[6,0,5,"dirt",0],[6,0,6,"dirt",0],[6,0,7,"dirt",0],[6,0,8,"dirt",0],[6,0,9,"dirt",0],[6,0,10,"dirt",0],[6,0,11,"dirt",0],[6,0,12,"dirt",0],[6,0,13,"dirt",0],[6,0,14,"dirt",0],[7,0,0,"grass_block",0],[7,0,1,"grass_block",0],[7,0,2,"grass_block",0],[7,0,3,"grass_block",0],[7,0,4,"grass_block",0],[7,0,5,"grass_block",0],[8,0,0,"grass_block",0],[8,0,1,"grass_block",0],[8,0,2,"grass_block",0],[8,0,3,"grass_block",0],[8,0,4,"grass_block",0],[8,0,5,"grass_block",0],[2,1,5,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,8,"cobblestone",0],[2,1,9,"cobblestone",0],[2,1,10,"cobblestone",0],[2,1,11,"cobblestone",0],[2,1,12,"cobblestone",0],[2,1,13,"cobblestone",0],[2,1,14,"cobblestone",0],[3,1,12,"oak_log",0],[3,1,14,"cobblestone",0],[4,1,12,"oak_log",0],[4,1,14,"cobblestone",0],[5,1,12,"oak_log",0],[5,1,14,"cobblestone",0],[6,1,5,"cobblestone",0],[6,1,6,"cobblestone",0],[6,1,7,"cobblestone",0],[6,1,8,"cobblestone",0],[6,1,9,"cobblestone",0],[6,1,10,"cobblestone",0],[6,1,11,"cobblestone",0],[6,1,12,"cobblestone",0],[6,1,13,"cobblestone",0],[6,1,14,"cobblestone",0],[2,2,5,"cobblestone",0],[2,2,6,"cobblestone",0],[2,2,8,"cobblestone",0],[2,2,9,"oak_log",0],[2,2,11,"oak_log",0],[2,2,13,"oak_log",0],[2,2,14,"cobblestone",0],[3,2,14,"oak_log",0],[5,2,14,"oak_log",0],[6,2,5,"cobblestone",0],[6,2,6,"cobblestone",0],[6,2,7,"cobblestone",0],[6,2,8,"oak_log",0],[6,2,10,"oak_log",0],[6,2,12,"oak_log",0],[6,2,13,"cobblestone",0],[6,2,14,"cobblestone",0],[2,3,5,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"cobblestone",0],[2,3,8,"cobblestone",0],[2,3,9,"cobblestone",0],[2,3,10,"cobblestone",0],[2,3,11,"cobblestone",0],[2,3,12,"cobblestone",0],[2,3,13,"cobblestone",0],[2,3,14,"cobblestone",0],[3,3,14,"cobblestone",0],[4,3,14,"cobblestone",0],[5,3,14,"cobblestone",0],[6,3,5,"cobblestone",0],[6,3,6,"cobblestone",0],[6,3,7,"cobblestone",0],[6,3,8,"cobblestone",0],[6,3,9,"cobblestone",0],[6,3,10,"cobblestone",0],[6,3,11,"cobblestone",0],[6,3,12,"cobblestone",0],[6,3,13,"cobblestone",0],[6,3,14,"cobblestone",0],[2,4,5,"cobblestone",0],[2,4,6,"cobblestone",0],[2,4,7,"cobblestone",0],[2,4,8,"cobblestone",0],[2,4,9,"cobblestone",0],[2,4,10,"cobblestone",0],[2,4,11,"cobblestone",0],[2,4,12,"cobblestone",0],[2,4,13,"cobblestone",0],[2,4,14,"cobblestone",0],[3,4,5,"cobblestone",0],[3,4,14,"cobblestone",0],[4,4,5,"cobblestone",0],[4,4,14,"cobblestone",0],[5,4,5,"cobblestone",0],[5,4,14,"cobblestone",0],[6,4,5,"cobblestone",0],[6,4,6,"cobblestone",0],[6,4,7,"cobblestone",0],[6,4,8,"cobblestone",0],[6,4,9,"cobblestone",0],[6,4,10,"cobblestone",0],[6,4,11,"cobblestone",0],[6,4,12,"cobblestone",0],[6,4,13,"cobblestone",0],[6,4,14,"cobblestone",0],[3,5,5,"cobblestone",0],[3,5,14,"cobblestone",0],[4,5,5,"cobblestone",0],[4,5,14,"cobblestone",0],[5,5,5,"cobblestone",0],[5,5,14,"cobblestone",0],[4,6,4,"oak_planks",0],[4,6,5,"oak_planks",0],[4,6,6,"oak_planks",0],[4,6,7,"oak_planks",0],[4,6,8,"oak_planks",0],[4,6,9,"oak_planks",0],[4,6,10,"oak_planks",0],[4,6,11,"oak_planks",0],[4,6,12,"oak_planks",0],[4,6,13,"oak_planks",0],[4,6,14,"oak_planks",0],[4,6,15,"oak_planks",0],[0,1,0,"oak_fence",0],[0,1,1,"oak_fence",0],[0,1,2,"oak_fence",0],[0,1,3,"oak_fence",0],[0,1,4,"oak_fence",0],[0,1,5,"oak_fence",0],[1,1,0,"oak_fence",0],[1,1,5,"oak_fence",0],[2,1,0,"oak_fence",0],[2,1,7,"oak_planks",0],[3,1,0,"oak_fence",0],[3,1,13,"water",0],[4,1,0,"oak_fence",0],[4,1,13,"water",0],[5,1,0,"oak_fence",0],[5,1,13,"water",0],[6,1,0,"oak_fence",0],[7,1,0,"oak_fence",0],[7,1,5,"oak_fence",0],[8,1,0,"oak_fence",0],[8,1,1,"oak_fence",0],[8,1,2,"oak_fence",0],[8,1,3,"oak_fence",0],[8,1,4,"oak_fence",0],[8,1,5,"oak_fence",0],[0,2,0,"torch",0],[0,2,5,"torch",0],[2,2,7,"oak_planks",0],[2,2,10,"glass",0],[2,2,12,"glass",0],[4,2,14,"glass",0],[6,2,9,"glass",0],[6,2,11,"glass",0],[8,2,0,"torch",0],[8,2,5,"torch",0],[3,3,5,"cobblestone_stairs",3.14159],[5,3,5,"cobblestone_stairs",0],[1,4,4,"oak_stairs",0],[1,4,5,"oak_stairs",0],[1,4,6,"oak_stairs",0],[1,4,7,"oak_stairs",0],[1,4,8,"oak_stairs",0],[1,4,9,"oak_stairs",0],[1,4,10,"oak_stairs",0],[1,4,11,"oak_stairs",0],[1,4,12,"oak_stairs",0],[1,4,13,"oak_stairs",0],[1,4,14,"oak_stairs",0],[1,4,15,"oak_stairs",0],[2,4,4,"oak_stairs",3.14159],[2,4,15,"oak_stairs",3.14159],[3,4,10,"torch",0],[4,4,4,"torch",1.5708],[4,4,6,"torch",-1.5708],[4,4,13,"torch",1.5708],[5,4,10,"torch",3.14159],[6,4,4,"oak_stairs",0],[6,4,15,"oak_stairs",0],[7,4,4,"oak_stairs",3.14159],[7,4,5,"oak_stairs",3.14159],[7,4,6,"oak_stairs",3.14159],[7,4,7,"oak_stairs",3.14159],[7,4,8,"oak_stairs",3.14159],[7,4,9,"oak_stairs",3.14159],[7,4,10,"oak_stairs",3.14159],[7,4,11,"oak_stairs",3.14159],[7,4,12,"oak_stairs",3.14159],[7,4,13,"oak_stairs",3.14159],[7,4,14,"oak_stairs",3.14159],[7,4,15,"oak_stairs",3.14159],[2,5,4,"oak_stairs",0],[2,5,5,"oak_stairs",0],[2,5,6,"oak_stairs",0],[2,5,7,"oak_stairs",0],[2,5,8,"oak_stairs",0],[2,5,9,"oak_stairs",0],[2,5,10,"oak_stairs",0],[2,5,11,"oak_stairs",0],[2,5,12,"oak_stairs",0],[2,5,13,"oak_stairs",0],[2,5,14,"oak_stairs",0],[2,5,15,"oak_stairs",0],[3,5,4,"oak_stairs",3.14159],[3,5,15,"oak_stairs",3.14159],[4,5,15,"torch",-1.5708],[5,5,4,"oak_stairs",0],[5,5,15,"oak_stairs",0],[6,5,4,"oak_stairs",3.14159],[6,5,5,"oak_stairs",3.14159],[6,5,6,"oak_stairs",3.14159],[6,5,7,"oak_stairs",3.14159],[6,5,8,"oak_stairs",3.14159],[6,5,9,"oak_stairs",3.14159],[6,5,10,"oak_stairs",3.14159],[6,5,11,"oak_stairs",3.14159],[6,5,12,"oak_stairs",3.14159],[6,5,13,"oak_stairs",3.14159],[6,5,14,"oak_stairs",3.14159],[6,5,15,"oak_stairs",3.14159],[3,6,4,"oak_stairs",0],[3,6,5,"oak_stairs",0],[3,6,6,"oak_stairs",0],[3,6,7,"oak_stairs",0],[3,6,8,"oak_stairs",0],[3,6,9,"oak_stairs",0],[3,6,10,"oak_stairs",0],[3,6,11,"oak_stairs",0],[3,6,12,"oak_stairs",0],[3,6,13,"oak_stairs",0],[3,6,14,"oak_stairs",0],[3,6,15,"oak_stairs",0],[5,6,4,"oak_stairs",3.14159],[5,6,5,"oak_stairs",3.14159],[5,6,6,"oak_stairs",3.14159],[5,6,7,"oak_stairs",3.14159],[5,6,8,"oak_stairs",3.14159],[5,6,9,"oak_stairs",3.14159],[5,6,10,"oak_stairs",3.14159],[5,6,11,"oak_stairs",3.14159],[5,6,12,"oak_stairs",3.14159],[5,6,13,"oak_stairs",3.14159],[5,6,14,"oak_stairs",3.14159],[5,6,15,"oak_stairs",3.14159],[0,0,11,"cobblestone",0],[0,0,15,"cobblestone",0],[2,0,2,"cobblestone",0],[4,0,10,"cobblestone",0],[6,0,1,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,14,"cobblestone",0],[0,1,8,"cobblestone",0]]},pg={size:[9,4,9],blocks:[[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[2,1,3,"cobblestone",0],[2,1,4,"cobblestone",0],[2,1,5,"cobblestone",0],[3,1,2,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,2,"cobblestone",0],[4,1,4,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,2,"cobblestone",0],[5,1,6,"cobblestone",0],[6,1,3,"cobblestone",0],[6,1,4,"cobblestone",0],[6,1,5,"cobblestone",0],[4,2,4,"cobblestone",0],[0,0,1,"dirt_path",0],[0,0,2,"dirt_path",0],[0,0,3,"dirt_path",0],[0,0,4,"dirt_path",0],[0,0,5,"dirt_path",0],[0,0,7,"dirt_path",0],[1,0,0,"dirt_path",0],[1,0,1,"dirt_path",0],[1,0,3,"dirt_path",0],[1,0,4,"dirt_path",0],[1,0,5,"dirt_path",0],[1,0,6,"dirt_path",0],[1,0,7,"dirt_path",0],[1,0,8,"dirt_path",0],[2,0,0,"dirt_path",0],[2,0,8,"dirt_path",0],[3,0,0,"dirt_path",0],[3,0,1,"dirt_path",0],[3,0,7,"dirt_path",0],[3,0,8,"dirt_path",0],[4,0,0,"dirt_path",0],[4,0,1,"dirt_path",0],[4,0,7,"dirt_path",0],[4,0,8,"dirt_path",0],[5,0,0,"dirt_path",0],[5,0,1,"dirt_path",0],[5,0,7,"dirt_path",0],[5,0,8,"dirt_path",0],[6,0,0,"dirt_path",0],[6,0,1,"dirt_path",0],[6,0,7,"dirt_path",0],[6,0,8,"dirt_path",0],[7,0,0,"dirt_path",0],[7,0,1,"dirt_path",0],[7,0,3,"dirt_path",0],[7,0,4,"dirt_path",0],[7,0,5,"dirt_path",0],[7,0,6,"dirt_path",0],[7,0,8,"dirt_path",0],[8,0,1,"dirt_path",0],[8,0,2,"dirt_path",0],[8,0,3,"dirt_path",0],[8,0,4,"dirt_path",0],[8,0,5,"dirt_path",0],[8,0,6,"dirt_path",0],[8,0,7,"dirt_path",0],[2,1,2,"torch",0],[2,1,6,"torch",0],[3,1,3,"water",0],[3,1,4,"water",0],[3,1,5,"water",0],[4,1,3,"water",0],[4,1,5,"water",0],[5,1,3,"water",0],[5,1,4,"water",0],[5,1,5,"water",0],[6,1,2,"torch",0],[6,1,6,"torch",0],[3,2,4,"water",0],[4,2,3,"water",0],[4,2,5,"water",0],[5,2,4,"water",0],[3,3,4,"water",0],[4,3,3,"water",0],[4,3,4,"water",0],[4,3,5,"water",0],[5,3,4,"water",0],[0,0,6,"cobblestone",0],[1,0,2,"cobblestone",0],[2,0,1,"cobblestone",0],[2,0,7,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,7,"cobblestone",0],[0,1,4,"cobblestone",0],[4,1,0,"cobblestone",0],[4,1,8,"cobblestone",0],[8,1,4,"cobblestone",0],[4,2,2,"bell",-1.5708]]},_g={size:[9,8,8],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"bricks",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[7,0,1,"oak_log",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,2,"smooth_stone",0],[2,1,6,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,2,"smooth_stone",0],[3,1,5,"cobblestone",0],[3,1,6,"cobblestone",0],[3,1,7,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,2,"smooth_stone",0],[4,1,7,"cobblestone",0],[5,1,1,"cobblestone",0],[5,1,2,"smooth_stone",0],[5,1,5,"cobblestone",0],[5,1,6,"cobblestone",0],[5,1,7,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,2,"smooth_stone",0],[6,1,3,"smooth_stone",0],[6,1,4,"smooth_stone",0],[6,1,5,"smooth_stone",0],[6,1,6,"cobblestone",0],[7,1,1,"oak_log",0],[7,1,2,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"cobblestone",0],[1,2,5,"cobblestone",0],[1,2,6,"oak_log",0],[2,2,1,"oak_log",0],[2,2,6,"cobblestone",0],[3,2,5,"cobblestone",0],[3,2,6,"cobblestone",0],[4,2,1,"oak_log",0],[4,2,6,"bricks",0],[5,2,5,"cobblestone",0],[5,2,6,"cobblestone",0],[6,2,1,"oak_log",0],[6,2,6,"cobblestone",0],[7,2,1,"oak_log",0],[7,2,2,"oak_log",0],[7,2,5,"oak_log",0],[7,2,6,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"cobblestone",0],[1,3,6,"oak_log",0],[2,3,1,"cobblestone",0],[2,3,6,"cobblestone",0],[3,3,1,"cobblestone",0],[3,3,6,"cobblestone",0],[4,3,1,"cobblestone",0],[4,3,5,"cobblestone",0],[4,3,6,"cobblestone",0],[5,3,1,"cobblestone",0],[5,3,6,"cobblestone",0],[6,3,1,"cobblestone",0],[6,3,6,"cobblestone",0],[7,3,1,"oak_log",0],[7,3,2,"cobblestone",0],[7,3,3,"cobblestone",0],[7,3,4,"cobblestone",0],[7,3,5,"cobblestone",0],[7,3,6,"oak_log",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[4,4,6,"cobblestone",0],[7,4,2,"cobblestone",0],[7,4,3,"cobblestone",0],[7,4,4,"cobblestone",0],[7,4,5,"cobblestone",0],[1,5,3,"cobblestone",0],[1,5,4,"cobblestone",0],[4,5,6,"cobblestone",0],[7,5,3,"cobblestone",0],[7,5,4,"cobblestone",0],[4,6,6,"cobblestone",0],[0,0,3,"cobblestone_stairs",0],[1,1,3,"oak_planks",0],[1,1,4,"oak_planks",0],[0,2,2,"torch",3.14159],[0,2,5,"torch",3.14159],[1,2,3,"oak_planks",0],[1,2,4,"oak_planks",0],[3,2,1,"glass",0],[3,2,7,"cobblestone_stairs",0],[4,2,2,"torch",-1.5708],[4,2,7,"cobblestone_stairs",1.5708],[5,2,1,"glass",0],[5,2,7,"cobblestone_stairs",3.14159],[7,2,3,"glass",0],[7,2,4,"glass",0],[0,3,0,"oak_stairs",-1.5708],[0,3,1,"oak_stairs",1.5708],[0,3,6,"oak_stairs",-1.5708],[0,3,7,"oak_stairs",1.5708],[1,3,0,"oak_stairs",-1.5708],[1,3,7,"oak_stairs",1.5708],[2,3,0,"oak_stairs",-1.5708],[2,3,7,"oak_stairs",3.14159],[3,3,0,"oak_stairs",-1.5708],[3,3,5,"cobblestone_stairs",0],[3,3,7,"oak_slab",0],[4,3,0,"oak_stairs",-1.5708],[4,3,7,"oak_slab",0],[5,3,0,"oak_stairs",-1.5708],[5,3,5,"cobblestone_stairs",3.14159],[5,3,7,"oak_slab",0],[6,3,0,"oak_stairs",-1.5708],[6,3,7,"oak_stairs",0],[7,3,0,"oak_stairs",-1.5708],[7,3,7,"oak_stairs",1.5708],[8,3,0,"oak_stairs",-1.5708],[8,3,1,"oak_stairs",1.5708],[8,3,6,"oak_stairs",-1.5708],[8,3,7,"oak_stairs",1.5708],[0,4,1,"oak_stairs",-1.5708],[0,4,2,"oak_stairs",1.5708],[0,4,5,"oak_stairs",-1.5708],[0,4,6,"oak_stairs",1.5708],[1,4,1,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,1,"oak_stairs",-1.5708],[2,4,5,"torch",1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,1,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,1,"oak_stairs",-1.5708],[4,4,5,"cobblestone_stairs",-1.5708],[5,4,1,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,1,"oak_stairs",-1.5708],[6,4,5,"torch",1.5708],[6,4,6,"oak_stairs",1.5708],[7,4,1,"oak_stairs",-1.5708],[7,4,6,"oak_stairs",1.5708],[8,4,1,"oak_stairs",-1.5708],[8,4,2,"oak_stairs",1.5708],[8,4,5,"oak_stairs",-1.5708],[8,4,6,"oak_stairs",1.5708],[0,5,2,"oak_stairs",-1.5708],[0,5,3,"oak_stairs",1.5708],[0,5,4,"oak_stairs",-1.5708],[0,5,5,"oak_stairs",1.5708],[1,5,2,"oak_stairs",-1.5708],[1,5,5,"oak_stairs",1.5708],[2,5,2,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,2,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,2,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,2,"oak_stairs",-1.5708],[5,5,5,"oak_stairs",1.5708],[6,5,2,"oak_stairs",-1.5708],[6,5,5,"oak_stairs",1.5708],[7,5,2,"oak_stairs",-1.5708],[7,5,5,"oak_stairs",1.5708],[8,5,2,"oak_stairs",-1.5708],[8,5,3,"oak_stairs",1.5708],[8,5,4,"oak_stairs",-1.5708],[8,5,5,"oak_stairs",1.5708],[0,6,3,"oak_stairs",-1.5708],[0,6,4,"oak_stairs",1.5708],[1,6,3,"oak_stairs",-1.5708],[1,6,4,"oak_stairs",1.5708],[2,6,3,"oak_stairs",-1.5708],[2,6,4,"oak_stairs",1.5708],[3,6,3,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,3,"oak_stairs",-1.5708],[4,6,4,"oak_stairs",1.5708],[5,6,3,"oak_stairs",-1.5708],[5,6,4,"oak_stairs",1.5708],[6,6,3,"oak_stairs",-1.5708],[6,6,4,"oak_stairs",1.5708],[7,6,3,"oak_stairs",-1.5708],[7,6,4,"oak_stairs",1.5708],[8,6,3,"oak_stairs",-1.5708],[8,6,4,"oak_stairs",1.5708],[4,7,6,"cobblestone_wall",0],[0,0,4,"cobblestone",0],[4,1,6,"blast_furnace",1.5708]]},mg={size:[9,8,11],blocks:[[1,0,0,"cobblestone",0],[1,0,1,"cobblestone",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[1,0,7,"cobblestone",0],[1,0,8,"cobblestone",0],[1,0,9,"oak_log",0],[2,0,0,"cobblestone",0],[2,0,1,"cobblestone",0],[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[3,0,0,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[3,0,8,"cobblestone",0],[3,0,9,"cobblestone",0],[4,0,0,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[4,0,8,"cobblestone",0],[4,0,9,"cobblestone",0],[5,0,0,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[5,0,8,"cobblestone",0],[5,0,9,"cobblestone",0],[6,0,0,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[6,0,7,"cobblestone",0],[6,0,8,"cobblestone",0],[6,0,9,"cobblestone",0],[7,0,0,"cobblestone",0],[7,0,1,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"oak_log",0],[7,0,7,"cobblestone",0],[7,0,8,"cobblestone",0],[7,0,9,"oak_log",0],[1,1,6,"oak_log",0],[1,1,7,"oak_planks",0],[1,1,8,"oak_planks",0],[1,1,9,"oak_log",0],[2,1,9,"oak_planks",0],[3,1,6,"oak_planks",0],[3,1,9,"oak_planks",0],[4,1,3,"cobblestone",0],[4,1,4,"cobblestone",0],[4,1,5,"oak_log",0],[4,1,9,"oak_planks",0],[5,1,0,"cobblestone",0],[5,1,1,"cobblestone",0],[5,1,2,"cobblestone",0],[5,1,3,"cobblestone",0],[5,1,9,"oak_planks",0],[6,1,0,"cobblestone",0],[6,1,3,"cobblestone",0],[6,1,8,"oak_planks",0],[6,1,9,"oak_planks",0],[7,1,0,"cobblestone",0],[7,1,1,"cobblestone",0],[7,1,2,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"oak_log",0],[7,1,7,"oak_planks",0],[7,1,8,"oak_planks",0],[7,1,9,"oak_log",0],[1,2,6,"oak_log",0],[1,2,7,"oak_planks",0],[1,2,8,"oak_planks",0],[1,2,9,"oak_log",0],[2,2,9,"oak_planks",0],[3,2,6,"oak_planks",0],[4,2,4,"cobblestone",0],[4,2,5,"oak_log",0],[4,2,9,"oak_planks",0],[5,2,3,"cobblestone",0],[6,2,3,"cobblestone",0],[6,2,9,"oak_planks",0],[7,2,0,"cobblestone",0],[7,2,1,"cobblestone",0],[7,2,2,"cobblestone",0],[7,2,3,"oak_log",0],[7,2,5,"oak_log",0],[7,2,6,"oak_log",0],[7,2,7,"oak_planks",0],[7,2,8,"oak_planks",0],[7,2,9,"oak_log",0],[1,3,6,"oak_log",0],[1,3,7,"oak_planks",0],[1,3,8,"oak_planks",0],[1,3,9,"oak_log",0],[2,3,6,"oak_planks",0],[2,3,9,"oak_planks",0],[3,3,6,"oak_planks",0],[3,3,9,"oak_planks",0],[4,3,4,"cobblestone",0],[4,3,5,"oak_log",0],[4,3,9,"oak_planks",0],[5,3,0,"cobblestone",0],[5,3,1,"cobblestone",0],[5,3,2,"cobblestone",0],[5,3,3,"cobblestone",0],[5,3,9,"oak_planks",0],[6,3,0,"cobblestone",0],[6,3,1,"cobblestone",0],[6,3,2,"cobblestone",0],[6,3,3,"cobblestone",0],[6,3,9,"oak_planks",0],[7,3,0,"cobblestone",0],[7,3,1,"cobblestone",0],[7,3,2,"cobblestone",0],[7,3,3,"cobblestone",0],[7,3,4,"cobblestone",0],[7,3,5,"cobblestone",0],[7,3,6,"oak_log",0],[7,3,7,"oak_planks",0],[7,3,8,"oak_planks",0],[7,3,9,"oak_log",0],[1,4,0,"cobblestone",0],[1,4,1,"cobblestone",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[1,4,6,"oak_log",0],[1,4,7,"oak_log",0],[1,4,8,"oak_log",0],[1,4,9,"oak_log",0],[2,4,0,"cobblestone",0],[2,4,1,"cobblestone",0],[2,4,2,"cobblestone",0],[2,4,3,"cobblestone",0],[2,4,4,"cobblestone",0],[2,4,5,"cobblestone",0],[2,4,6,"cobblestone",0],[2,4,7,"cobblestone",0],[2,4,8,"cobblestone",0],[2,4,9,"oak_log",0],[3,4,0,"cobblestone",0],[3,4,1,"cobblestone",0],[3,4,2,"cobblestone",0],[3,4,3,"cobblestone",0],[3,4,4,"cobblestone",0],[3,4,5,"cobblestone",0],[3,4,6,"cobblestone",0],[3,4,7,"cobblestone",0],[3,4,8,"cobblestone",0],[3,4,9,"oak_log",0],[4,4,0,"cobblestone",0],[4,4,1,"cobblestone",0],[4,4,2,"cobblestone",0],[4,4,3,"cobblestone",0],[4,4,4,"cobblestone",0],[4,4,5,"cobblestone",0],[4,4,6,"cobblestone",0],[4,4,7,"cobblestone",0],[4,4,8,"cobblestone",0],[4,4,9,"oak_log",0],[5,4,0,"cobblestone",0],[5,4,1,"cobblestone",0],[5,4,2,"cobblestone",0],[5,4,3,"cobblestone",0],[5,4,4,"cobblestone",0],[5,4,5,"cobblestone",0],[5,4,6,"cobblestone",0],[5,4,7,"cobblestone",0],[5,4,8,"cobblestone",0],[5,4,9,"oak_log",0],[6,4,0,"cobblestone",0],[6,4,1,"cobblestone",0],[6,4,2,"cobblestone",0],[6,4,3,"cobblestone",0],[6,4,4,"cobblestone",0],[6,4,5,"cobblestone",0],[6,4,6,"cobblestone",0],[6,4,7,"cobblestone",0],[6,4,8,"cobblestone",0],[6,4,9,"oak_log",0],[7,4,0,"cobblestone",0],[7,4,1,"cobblestone",0],[7,4,2,"cobblestone",0],[7,4,3,"cobblestone",0],[7,4,4,"cobblestone",0],[7,4,5,"cobblestone",0],[7,4,6,"oak_log",0],[7,4,7,"oak_log",0],[7,4,8,"oak_log",0],[7,4,9,"oak_log",0],[1,5,6,"oak_log",0],[1,5,7,"oak_planks",0],[1,5,8,"oak_planks",0],[1,5,9,"oak_log",0],[2,5,9,"oak_planks",0],[3,5,9,"oak_planks",0],[4,5,9,"oak_planks",0],[5,5,9,"oak_planks",0],[6,5,1,"cobblestone",0],[6,5,2,"cobblestone",0],[6,5,9,"oak_planks",0],[7,5,6,"oak_log",0],[7,5,7,"oak_planks",0],[7,5,8,"oak_planks",0],[7,5,9,"oak_log",0],[1,6,7,"oak_planks",0],[1,6,8,"oak_planks",0],[7,6,7,"oak_planks",0],[7,6,8,"oak_planks",0],[0,0,1,"cobblestone_stairs",0],[0,0,2,"cobblestone_stairs",0],[1,1,0,"oak_fence",0],[1,1,4,"oak_fence",0],[2,1,1,"grindstone",0],[2,1,6,"oak_planks",-1.5708],[5,1,7,"oak_fence",0],[5,1,8,"oak_stairs",-1.5708],[6,1,1,"magma_block",0],[6,1,2,"magma_block",0],[6,1,7,"oak_stairs",0],[1,2,0,"oak_fence",0],[1,2,4,"oak_fence",0],[2,2,6,"oak_planks",-1.5708],[3,2,5,"torch",1.5708],[3,2,9,"glass",0],[4,2,10,"torch",-1.5708],[5,2,0,"cobblestone",0],[5,2,7,"oak_pressure_plate",0],[5,2,9,"glass",0],[6,2,0,"cobblestone",0],[6,2,8,"torch",3.14159],[7,2,4,"glass",0],[8,2,1,"torch",0],[1,3,0,"oak_fence",0],[1,3,4,"oak_fence",0],[0,5,5,"oak_stairs",-1.5708],[0,5,6,"oak_stairs",1.5708],[0,5,9,"oak_stairs",-1.5708],[0,5,10,"oak_stairs",1.5708],[1,5,0,"stone_slab",0],[1,5,1,"stone_slab",0],[1,5,2,"stone_slab",0],[1,5,3,"stone_slab",0],[1,5,4,"stone_slab",0],[1,5,5,"oak_stairs",-1.5708],[1,5,10,"oak_stairs",1.5708],[2,5,0,"stone_slab",0],[2,5,5,"oak_stairs",-1.5708],[2,5,10,"oak_stairs",1.5708],[3,5,0,"stone_slab",0],[3,5,5,"oak_stairs",-1.5708],[3,5,10,"oak_stairs",1.5708],[4,5,0,"stone_slab",0],[4,5,3,"torch",0],[4,5,5,"oak_stairs",-1.5708],[4,5,10,"oak_stairs",1.5708],[5,5,0,"stone_slab",0],[5,5,5,"oak_stairs",-1.5708],[5,5,10,"oak_stairs",1.5708],[6,5,0,"stone_slab",0],[6,5,5,"oak_stairs",-1.5708],[6,5,10,"oak_stairs",1.5708],[7,5,0,"stone_slab",0],[7,5,1,"stone_slab",0],[7,5,2,"stone_slab",0],[7,5,3,"stone_slab",0],[7,5,4,"stone_slab",0],[7,5,5,"oak_stairs",-1.5708],[7,5,10,"oak_stairs",1.5708],[8,5,5,"oak_stairs",-1.5708],[8,5,6,"oak_stairs",1.5708],[8,5,9,"oak_stairs",-1.5708],[8,5,10,"oak_stairs",1.5708],[0,6,6,"oak_stairs",-1.5708],[0,6,7,"oak_stairs",1.5708],[0,6,8,"oak_stairs",-1.5708],[0,6,9,"oak_stairs",1.5708],[1,6,6,"oak_stairs",-1.5708],[1,6,9,"oak_stairs",1.5708],[2,6,6,"oak_stairs",-1.5708],[2,6,9,"oak_stairs",1.5708],[3,6,6,"oak_stairs",-1.5708],[3,6,9,"oak_stairs",1.5708],[4,6,6,"oak_stairs",-1.5708],[4,6,9,"oak_stairs",1.5708],[5,6,6,"oak_stairs",-1.5708],[5,6,9,"oak_stairs",1.5708],[6,6,1,"cobblestone_wall",0],[6,6,6,"oak_stairs",-1.5708],[6,6,9,"oak_stairs",1.5708],[7,6,6,"oak_stairs",-1.5708],[7,6,9,"oak_stairs",1.5708],[8,6,6,"oak_stairs",-1.5708],[8,6,7,"oak_stairs",1.5708],[8,6,8,"oak_stairs",-1.5708],[8,6,9,"oak_stairs",1.5708],[0,7,7,"oak_stairs",-1.5708],[0,7,8,"oak_stairs",1.5708],[1,7,7,"oak_stairs",-1.5708],[1,7,8,"oak_stairs",1.5708],[2,7,7,"oak_stairs",-1.5708],[2,7,8,"oak_stairs",1.5708],[3,7,7,"oak_stairs",-1.5708],[3,7,8,"oak_stairs",1.5708],[4,7,7,"oak_stairs",-1.5708],[4,7,8,"oak_stairs",1.5708],[5,7,7,"oak_stairs",-1.5708],[5,7,8,"oak_stairs",1.5708],[6,7,7,"oak_stairs",-1.5708],[6,7,8,"oak_stairs",1.5708],[7,7,7,"oak_stairs",-1.5708],[7,7,8,"oak_stairs",1.5708],[8,7,7,"oak_stairs",-1.5708],[8,7,8,"oak_stairs",1.5708],[0,0,3,"cobblestone",0],[6,1,4,"chest",-1.5708],[4,2,3,"furnace",3.14159],[4,3,3,"furnace",3.14159]]},gg={size:[16,2,16],blocks:[[7,0,0,"dirt_path",0],[7,0,1,"dirt_path",0],[7,0,2,"dirt_path",0],[7,0,3,"dirt_path",0],[7,0,4,"dirt_path",0],[7,0,5,"dirt_path",0],[7,0,6,"dirt_path",0],[7,0,7,"dirt_path",0],[7,0,8,"dirt_path",0],[7,0,9,"dirt_path",0],[7,0,10,"dirt_path",0],[7,0,11,"dirt_path",0],[7,0,12,"dirt_path",0],[7,0,13,"dirt_path",0],[7,0,14,"dirt_path",0],[7,0,15,"dirt_path",0],[8,0,0,"dirt_path",0],[8,0,1,"dirt_path",0],[8,0,2,"dirt_path",0],[8,0,3,"dirt_path",0],[8,0,4,"dirt_path",0],[8,0,5,"dirt_path",0],[8,0,6,"dirt_path",0],[8,0,7,"dirt_path",0],[8,0,8,"dirt_path",0],[8,0,9,"dirt_path",0],[8,0,10,"dirt_path",0],[8,0,11,"dirt_path",0],[8,0,12,"dirt_path",0],[8,0,13,"dirt_path",0],[8,0,14,"dirt_path",0],[8,0,15,"dirt_path",0],[9,0,0,"dirt_path",0],[9,0,1,"dirt_path",0],[9,0,2,"dirt_path",0],[9,0,3,"dirt_path",0],[9,0,4,"dirt_path",0],[9,0,5,"dirt_path",0],[9,0,6,"dirt_path",0],[9,0,7,"dirt_path",0],[9,0,8,"dirt_path",0],[9,0,9,"dirt_path",0],[9,0,10,"dirt_path",0],[9,0,11,"dirt_path",0],[9,0,12,"dirt_path",0],[9,0,13,"dirt_path",0],[9,0,14,"dirt_path",0],[9,0,15,"dirt_path",0],[10,0,7,"dirt_path",0],[10,0,8,"dirt_path",0],[10,0,9,"dirt_path",0],[11,0,7,"dirt_path",0],[11,0,8,"dirt_path",0],[11,0,9,"dirt_path",0],[12,0,7,"dirt_path",0],[12,0,8,"dirt_path",0],[12,0,9,"dirt_path",0],[13,0,7,"dirt_path",0],[13,0,8,"dirt_path",0],[13,0,9,"dirt_path",0],[14,0,7,"dirt_path",0],[14,0,8,"dirt_path",0],[14,0,9,"dirt_path",0],[15,0,7,"dirt_path",0],[15,0,8,"dirt_path",0],[15,0,9,"dirt_path",0],[13,0,12,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"cobblestone",0],[7,1,7,"cobblestone",0],[7,1,11,"cobblestone",0],[7,1,12,"cobblestone",0],[8,1,0,"cobblestone",0],[8,1,15,"cobblestone",0],[9,1,3,"cobblestone",0],[9,1,4,"cobblestone",0],[15,1,8,"cobblestone",0]]},ji={outpost:og,portal:sg,igloo:ag,shipwreck:rg,trail:lg,mansion:cg,village_house:dg,village_library:ug,village_butcher:hg,village_stable:fg,village_fountain:pg,village_armorer:_g,village_weaponsmith:mg,village_crossroad:gg},ss={width:.62,height:1.72,eye:1.58},bg=30,kg=6.4,vg=9.4,xg=10.4,yg=16,Mg=5,Od=.0022,Bd=2.3,Or=2.6,Sg=-7,Eg=.28,Me={teal:6547157,yellow:16765286,coral:16735309,blue:7645183,purple:11766783,lime:10215773,white:16055295,gold:16763196,lava:16730655},Jn=(n,e,t)=>Math.min(t,Math.max(e,n));function cs(n){if(n==null||!Number.isFinite(n))return"–";const e=Math.max(0,n),t=Math.floor(e/60),o=(e-t*60).toFixed(1).padStart(4,"0");return`${String(t).padStart(2,"0")}:${o}`}function Br(n,{color:e="#ffffff",background:t="rgba(10, 20, 30, .72)",accent:i="#ffd166"}={}){const o=document.createElement("canvas");o.width=512,o.height=128;const s=o.getContext("2d");s.fillStyle=t,s.beginPath(),s.roundRect(8,26,496,76,26),s.fill(),s.strokeStyle=i,s.lineWidth=4,s.stroke(),s.font='700 44px "Trebuchet MS", "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(n,256,66);const a=new oc(o);a.colorSpace=Dt,a.anisotropy=4;const r=new Kf(new xu({map:a,transparent:!0,depthWrite:!1}));return r.scale.set(3.4,.85,1),r}function wg(n,{accent:e="#8ecbff"}={}){const t=document.createElement("canvas");t.width=1024,t.height=256;const i=t.getContext("2d");i.fillStyle="rgba(8, 16, 24, .62)",i.beginPath(),i.roundRect(16,40,992,176,40),i.fill(),i.strokeStyle=e,i.lineWidth=6,i.stroke(),i.font='700 88px "Trebuchet MS", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ffffff",i.fillText(n,512,128);const o=new oc(t);o.colorSpace=Dt,o.anisotropy=4;const s=new kt(new Ds(9,2.25),new Vo({map:o,transparent:!0,depthWrite:!1,side:zn}));return s.rotation.x=-Math.PI/2,s}function En(n,e,t,i,o=0,s=0){const a=new Mt(n,e,t),r=new rs({color:i,roughness:.56,metalness:.04,emissive:o,emissiveIntensity:s}),l=new kt(a,r);return l.castShadow=!1,l.receiveShadow=!1,l}function Tg({canvas:n,renderer:e,getBest:t,onFinish:i,onExit:o,onlineCount:s=12}){const a=new vu,r=new Ke(9358335);a.background=r,a.fog=new za(r.clone(),70,260);const l=new gn(76,innerWidth/innerHeight,.08,400);l.rotation.order="YXZ";const d=[{name:"Sunny Sprint",sky:9358335,fog:10474495,hemiSky:14676479,hemiGround:4938339,hemi:1.65,sun:16774366,sunPower:2.15,cloud:16777215,palette:[Me.teal,Me.lime,Me.yellow,Me.purple,Me.blue,Me.coral],spawn:Me.white,trim:Me.coral,checkpoint:Me.blue,accent:"#8ecbff",startLine:Me.teal},{name:"Sunset Ridge",sky:16096098,fog:16298876,hemiSky:16766648,hemiGround:6044206,hemi:1.5,sun:16760954,sunPower:2.3,cloud:16770255,palette:[Me.coral,Me.yellow,Me.gold,16747586,Me.teal,Me.purple],spawn:16773346,trim:16742973,checkpoint:16754253,accent:"#ffb066",startLine:Me.yellow},{name:"Neon Night",sky:1448755,fog:2041671,hemiSky:5201310,hemiGround:1053471,hemi:.95,sun:12174591,sunPower:1.25,cloud:3752043,palette:[Me.teal,Me.purple,Me.blue,16735472,Me.lime,Me.yellow],spawn:2831189,trim:16735472,checkpoint:8215807,accent:"#a78bfa",startLine:8119243},{name:"Toxic Wastes",sky:10473066,fog:11787390,hemiSky:15138767,hemiGround:4148522,hemi:1.6,sun:15925206,sunPower:2.2,cloud:15794144,palette:[Me.lime,11985738,Me.teal,Me.yellow,7319098,Me.coral],spawn:15004364,trim:6064686,checkpoint:9425231,accent:"#a3e635",startLine:Me.lime},{name:"Candy Clouds",sky:16762594,fog:16767212,hemiSky:16773368,hemiGround:7030369,hemi:1.7,sun:16770802,sunPower:2.1,cloud:16774907,palette:[16752331,Me.purple,Me.yellow,Me.teal,16740264,Me.blue],spawn:16774394,trim:16740264,checkpoint:13992191,accent:"#ff9ecb",startLine:16752331},{name:"Void Ascent",sky:2760509,fog:3615311,hemiSky:9206456,hemiGround:1709092,hemi:1.05,sun:14207231,sunPower:1.4,cloud:4865385,palette:[Me.purple,Me.blue,Me.teal,16743129,Me.lime,Me.yellow],spawn:3878741,trim:16743129,checkpoint:10980346,accent:"#c4b5fd",startLine:11766783}];let c=d[0];const u=new Tu(14676479,4938339,1.65);a.add(u);const f=new Cl(16774366,2.15);f.position.set(24,46,18),a.add(f);const _=new Cl(9425919,.9);_.position.set(-30,22,-40),a.add(_);const g=[],v=[],m=[],p=[];let T=1,A=null,E=new U(0,.06,4.5),F=null,P=null,L=null,N=null,S=new rn;a.add(S);function M(h){let k=h>>>0;return function(){k=k+1831565813|0;let w=Math.imul(k^k>>>15,1|k);return w=w+Math.imul(w^w>>>7,61|w)^w,((w^w>>>14)>>>0)/4294967296}}function D(h){for(h.traverse(k=>{if(k.geometry&&k.geometry.dispose(),k.material){const R=Array.isArray(k.material)?k.material:[k.material];for(const w of R)w.map&&w.map.dispose(),w.dispose()}});h.children.length;)h.remove(h.children[0])}function G({x:h=0,z:k=0,top:R=0,w=3,d:O=3,h:j=1.1,color:ie=Me.teal,emissive:oe=0,emissiveIntensity:ve=.25,move:Te=null}){const ae={x:h,z:k,top:R,w,d:O,h:j,color:ie,baseX:h,baseY:R-j/2,baseZ:k,move:Te,prev:new U,delta:new U,mesh:En(w,j,O,ie,oe||ie,ve)};return ae.mesh.position.set(h,R-j/2,k),S.add(ae.mesh),ae.minX=h-w/2,ae.maxX=h+w/2,ae.minY=R-j,ae.maxY=R,ae.minZ=k-O/2,ae.maxZ=k+O/2,ae.prev.set(h,R-j/2,k),g.push(ae),ae}function H({x:h=0,z:k=0,y:R=0,w=10,h:O=2,d:j=10,color:ie=Me.lava}){const oe=En(w,O,j,ie,ie,.9);oe.position.set(h,R,k),S.add(oe),v.push({minX:h-w/2,maxX:h+w/2,minY:R-O/2,maxY:R+O/2,minZ:k-j/2,maxZ:k+j/2})}function $(h,k){const R=new kt(new Ca(1.15,.11,10,32),new rs({color:Me.yellow,emissive:Me.yellow,emissiveIntensity:.9,roughness:.4}));R.rotation.x=-Math.PI/2,R.position.set(k.x,k.top+.09,k.z),S.add(R);const w=En(.32,3.4,.32,Me.yellow,Me.yellow,.85);w.position.set(k.x,k.top+1.7,k.z),S.add(w);const O=Br(`CHECKPOINT ${h}`,{accent:"#ffd166"});O.position.set(k.x,k.top+3.4,k.z),S.add(O),m.push({index:h,platform:k,x:k.x,z:k.z,top:k.top,ring:R,beam:w,label:O,respawn:new U(k.x,k.top+.06,k.z)})}function Z(h,k){const R=En(9,.1,.55,k.startLine,k.startLine,.8);R.position.set(h.x,h.top+.09,h.z+1.2),S.add(R);for(const[O,j,ie,oe]of[[0,-7.7,15,.5],[0,7.7,15,.5],[-7.7,0,.5,15],[7.7,0,.5,15]]){const ve=En(ie,.16,oe,k.trim,k.trim,.45);ve.position.set(h.x+O,h.top+.06,h.z+j),S.add(ve)}P=new kt(new Ca(1.2,.09,10,32),new rs({color:Me.yellow,emissive:Me.yellow,emissiveIntensity:.75,roughness:.45})),P.rotation.x=-Math.PI/2,P.position.set(h.x,h.top+.08,h.z+.6),S.add(P);const w=wg(`LEVEL ${T} · ${k.name}`,{accent:k.accent});w.position.set(h.x,h.top+.04,h.z-1.6),S.add(w),L=new kt(new sc(.65,1.3,4),new rs({color:Me.yellow,emissive:Me.yellow,emissiveIntensity:.7,roughness:.4})),L.position.set(h.x,h.top+1.2,h.z-5.6),L.rotation.x=Math.PI/2,S.add(L)}function q(h){for(const w of[-1,1]){const O=En(.9,5.4,.9,Me.coral,Me.coral,.4);O.position.set(h.x+w*4.1,h.top+2.7,h.z-4.5),S.add(O)}const k=En(9.4,1.5,.6,Me.coral,Me.coral,.5);k.position.set(h.x,h.top+5.5,h.z-4.5),S.add(k);const R=Br("FINISH",{accent:"#ff5c4d"});R.scale.set(4.6,1.15,1),R.position.set(h.x,h.top+7.1,h.z-4.5),S.add(R),N=new kt(new Ha(Or*.62,Or*.62,.12,36),new rs({color:Me.gold,emissive:Me.gold,emissiveIntensity:.7,roughness:.4})),N.position.set(h.x,h.top+.07,h.z),S.add(N),A={x:h.x,z:h.z,top:h.top,radius:Or}}const Q=[],W=[Me.teal,Me.yellow,Me.coral,Me.blue,Me.purple,Me.lime];for(let h=0;h<26;h++){const k=.6+h%5*.35,R=En(1.6+h%4,1.6+h%3,1.6+h%2,W[h%W.length],0,0),w=h/26*Math.PI*2,O=34+h%6*11;R.position.set(Math.cos(w)*O,8+h%7*5.5,-40+Math.sin(w)*O),R.rotation.set(h*.4,h*.7,h*.2),a.add(R),Q.push({mesh:R,spin:.04+k*.02,baseY:R.position.y})}for(let h=0;h<9;h++){const k=En(6+h%4*2,1.1,3+h%3,16777215,10467273,.05);k.material.transparent=!0,k.material.opacity=.85,k.position.set(-70+h*17,13+h%4*6,24-h%5*22),a.add(k),Q.push({mesh:k,drift:.6+h%3*.3,baseY:k.position.y,baseX:k.position.x,cloud:!0})}function ce(h){return h.platform?{x:h.platform.mesh.position.x+(h.dx||0),y:h.platform.maxY,z:h.platform.mesh.position.z+(h.dz||0)}:h}function _e({name:h,shirt:k,accent:R,route:w,speed:O,startIndex:j=0,direction:ie=1,hop:oe=.9,missChance:ve=.16,checkpoints:Te=[0]}){if(!w.length)return null;const ae=new rn,Be=En(.66,.9,.42,k,0,0);Be.position.y=.95;const Je=En(.52,.52,.52,15778973,0,0);Je.position.y=1.68;const nt=(dt,Wt,Xt,qt)=>{const Pt=new rn;Pt.position.y=qt;const to=En(dt,Wt,dt*.95,Xt,0,0);return to.position.y=-Wt/2,Pt.add(to),ae.add(Pt),Pt},Re=nt(.24,.62,3095383,.62);Re.position.x=-.16;const Ie=nt(.24,.62,3095383,.62);Ie.position.x=.16;const ge=nt(.2,.52,k,1.32);ge.position.x=-.45;const qe=nt(.2,.52,k,1.32);qe.position.x=.45,ae.add(Be,Je);const $e=Br(h,{accent:R});$e.position.y=2.28,$e.scale.set(1.9,.475,1),ae.add($e);const xt=Math.min(w.length-1,Math.max(0,j)),zt=ce(w[xt]);ae.position.set(zt.x,zt.y,zt.z),S.add(ae);const St={name:h,group:ae,route:w,speed:O,hop:oe,index:xt,next:Math.min(w.length-1,xt+ie),direction:ie,t:0,from:new U(zt.x,zt.y,zt.z),duration:.6,phase:Math.random()*Math.PI*2,legLeft:Re,legRight:Ie,armLeft:ge,armRight:qe,distance:0,state:"run",miss:!1,missAt:0,missChance:ve,checkpoints:Te,vy:0,fallVx:0,fallVz:0,falls:0,respawnAt:0},Fn=ce(w[St.next]);return St.distance=Math.hypot(Fn.x-zt.x,Fn.z-zt.z),St.duration=Math.max(.28,St.distance/St.speed),p.push(St),St}function Ce(h,k){for(const R of g)if(h>=R.minX&&h<=R.maxX&&k>=R.minZ&&k<=R.maxZ)return!0;return!1}let Ze=-1/0;function ut(h){h.falls++;let k=h.checkpoints[0]??0;for(const j of h.checkpoints)j<=h.index&&(k=j);const R=ce(h.route[k]);h.group.position.set(R.x,R.y,R.z),h.index=k,h.direction=1,h.next=Math.min(h.route.length-1,k+1),h.t=0,h.from.copy(h.group.position),h.state="run",h.miss=!1,h.vy=0;const w=ce(h.route[h.next]);h.distance=Math.hypot(w.x-R.x,w.z-R.z),h.duration=Math.max(.28,h.distance/h.speed);const O=h.checkpoints.indexOf(k);Fe-Ze>6&&(Ze=Fe,b(`${h.name} fell! · ${O>0?`back at checkpoint ${O}`:"back at the start"}`))}function Y(h){h.index=h.next,(h.index+h.direction<0||h.index+h.direction>=h.route.length)&&(h.direction*=-1),h.next=Math.min(h.route.length-1,Math.max(0,h.index+h.direction)),h.t=0,h.from.copy(h.group.position);const k=ce(h.route[h.next]);h.distance=Math.hypot(k.x-h.from.x,k.z-h.from.z),h.duration=Math.max(.28,h.distance/h.speed);const R=(h.from.x+k.x)/2,w=(h.from.z+k.z)/2,O=h.distance>2&&!Ce(R,w);h.miss=O&&Math.random()<h.missChance,h.missAt=h.miss?.42+Math.random()*.28:0}function se(h,k){if(h.state==="falling"){h.vy-=30*k,h.group.position.x+=h.fallVx*k,h.group.position.z+=h.fallVz*k,h.group.position.y+=h.vy*k,h.phase+=k*14;const Be=Math.sin(h.phase)*1.15;h.legLeft.rotation.x=Be,h.legRight.rotation.x=-Be,h.armLeft.rotation.x=-2.4,h.armRight.rotation.x=-2.4,h.group.position.y<-7&&ut(h);return}const R=ce(h.route[h.next]);if(h.t+=k/h.duration,h.miss&&h.t>=h.missAt&&!h.missed){h.missed=!0,h.state="falling",h.vy=.4;const Be=R.x-h.from.x,Je=R.z-h.from.z,nt=Math.hypot(Be,Je)||1;h.fallVx=Be/nt*h.speed*.85,h.fallVz=Je/nt*h.speed*.85;return}if(h.t>=1){h.t=0,h.missed=!1,h.group.position.set(R.x,R.y,R.z),Y(h);return}const w=h.t,O=h.from.x+(R.x-h.from.x)*w,j=h.from.z+(R.z-h.from.z)*w,ie=h.from.y+(R.y-h.from.y)*w,oe=Math.sin(Math.PI*w)*h.hop;h.group.position.set(O,ie+oe,j);const ve=R.x-h.from.x,Te=R.z-h.from.z;Math.abs(ve)+Math.abs(Te)>.001&&(h.group.rotation.y=Math.atan2(ve,Te)),h.phase+=k*(h.speed*2.4);const ae=Math.sin(h.phase)*.75;h.legLeft.rotation.x=ae,h.legRight.rotation.x=-ae,h.armLeft.rotation.x=-ae*.8,h.armRight.rotation.x=ae*.8}function Ae(){const h=g.map(w=>({platform:w})),k=[0,...m.map(w=>g.indexOf(w.platform)).filter(w=>w>0)],R=h.slice(0,Math.min(5,h.length));_e({name:"NoobMaster99",shirt:6547157,accent:"#63e6d5",route:R,speed:3.1,startIndex:1,direction:1,hop:.7,missChance:.15,checkpoints:[0]}),_e({name:"BlockBuilder",shirt:16765286,accent:"#ffd166",route:h,speed:3.7,startIndex:Math.min(2,h.length-1),direction:1,hop:.95,missChance:.07,checkpoints:k}),_e({name:"xX_Runner_Xx",shirt:16735309,accent:"#ff5c4d",route:h,speed:4.6,startIndex:Math.min(k[1]??2,h.length-1),direction:1,hop:1,missChance:.08,checkpoints:k})}function pe(h){T=Math.max(1,Math.floor(Number(h)||1)),D(S),g.length=0,v.length=0,m.length=0,p.length=0,A=null,N=null,P=null,L=null;const k=M(T*7919+104729|0),R=Math.min(1,(T-1)/12),w=3+Math.min(2,Math.floor((T-1)/3)),O=d[(T-1)%d.length];c=O,a.background.set(O.sky),a.fog.color.set(O.fog),a.fog.near=70,a.fog.far=260,u.color.set(O.hemiSky),u.groundColor.set(O.hemiGround),u.intensity=O.hemi,f.color.set(O.sun),f.intensity=O.sunPower,_.color.set(O.accent),_.intensity=.55+(O.sunPower-2)*.2,Q.forEach((Ie,ge)=>{const qe=Ie.cloud?O.cloud:O.palette[ge%O.palette.length];Ie.mesh.material.color.set(qe),Ie.cloud||Ie.mesh.material.emissive.set(qe)}),F=G({x:0,z:0,top:0,w:16,d:16,h:1.6,color:O.spawn,emissive:O.trim,emissiveIntensity:.12}),E=new U(0,F.top+.06,4.5),Z(F,O);let j=0,ie=-8.5,oe=0,ve=4,Te=0;const ae=()=>{const Ie=Jn(3.3-R*.9-k()*.4,2.2,3.3),ge=Ie/2,qe=Math.sin(Te*1.15+T*.7)*(.9+R*1.1);let $e=(k()*2-1)*(1+R*1.5)+qe,xt=ve+ge+1.1+k()*(.5+R*.6);const zt=Math.hypot($e,xt);if(zt>4.1){const Xt=4.1/zt;$e*=Xt,xt*=Xt}const St=.15+k()*(.5+R*.25),Fn=k()<.05+R*.45,dt=k()<.62?"x":"y",Wt=Fn?{axis:dt,amp:dt==="y"?.5+k()*.6:Math.min(2.3,1.2+k()*(.9+R*.8)),speed:.9+k()*(.5+R*.7),phase:k()*Math.PI*2}:null;j=Jn(j+$e,-15,15),ie-=xt,oe+=St,G({x:j,z:ie,top:oe,w:Ie,d:Ie,color:O.palette[Te++%O.palette.length],move:Wt}),ve=ge};for(let Ie=0;Ie<w;Ie++){const ge=3+Math.min(4,Math.floor(R*4+k()*2));for(let xt=0;xt<ge;xt++)ae();const qe=6.5;ie-=ve+2+qe/2,oe+=.35,j=Jn(j+(k()*2-1)*1.5,-13,13);const $e=G({x:j,z:ie,top:oe,w:qe,d:qe,color:O.checkpoint});$(m.length+1,$e),Ie>0&&H({x:Jn(j,-10,10),z:ie+10,y:.9,w:30,h:1.8,d:24}),ve=qe/2}const Be=2+Math.min(3,Math.floor(R*3+k()*2));for(let Ie=0;Ie<Be;Ie++)ae();const Je=5;ie-=ve+2.2+Je,oe+=.5,j=Jn(j+(k()*2-1)*1.2,-10,10);const nt=G({x:j,z:ie,top:oe,w:Je*2,d:Je*2,h:1.4,color:Me.gold,emissive:Me.gold,emissiveIntensity:.28});if(q(nt),Ae(),de?.serverLabel){const Ie=innerWidth<620;de.serverLabel.textContent=Ie?`L${T} · ${c.name}`:`Roblox Server · ${c.name} · Level ${T} · ${s} online`}const Re=document.querySelector(".parkour-server-line");Re&&(Re.textContent=`Parkour Obby · ${c.name} · Level ${T}`),gt=t?.(T)??null,V()}const re=new Set,de={screen:document.querySelector("#parkour-screen"),timer:document.querySelector("#parkour-timer"),checkpoints:document.querySelector("#parkour-checkpoints"),best:document.querySelector("#parkour-best-hud"),objective:document.querySelector("#parkour-objective"),toast:document.querySelector("#parkour-toast"),hint:document.querySelector("#parkour-click-hint"),pause:document.querySelector("#parkour-pause"),finish:document.querySelector("#parkour-finish"),finishTime:document.querySelector("#parkour-finish-time"),finishBest:document.querySelector("#parkour-finish-best"),finishTitle:document.querySelector("#parkour-finish-title"),serverLabel:document.querySelector("#parkour-server-label")},Le=matchMedia("(pointer: coarse)").matches;let Xe=!1,Ge=!1,De=!1,C=!1,vt=!1,et=0,Ye=0,Ee=0,tt=0,Pe=0,Fe=0,gt=t?.()??null;const x={position:E.clone(),velocity:new U,yaw:0,pitch:-.05,onGround:!1,ground:null,jumpBuffer:0};function b(h){de.toast&&(de.toast.textContent=h,de.toast.classList.add("show"),clearTimeout(Ee),Ee=setTimeout(()=>de.toast.classList.remove("show"),2200))}function B(h,k){h&&(h.hidden=!k,h.style.display=k?"":"none")}function X(){if(!de.hint)return;const h=Xe&&!Le&&!vt&&!Ge&&!De;de.hint.hidden=!h,de.hint.style.display=h?"":"none"}function J(){return De?`Level ${T} complete!`:Ye>=m.length?`Level ${T} · Reach the finish line`:Ye===0?C?`Level ${T} · Reach checkpoint 1`:`Level ${T} · Move to start the timer`:`Checkpoint ${Ye} reached · head for checkpoint ${Ye+1}`}function V(){de.timer&&(de.timer.textContent=cs(C||De?et:0)),de.checkpoints&&(de.checkpoints.textContent=`Checkpoint ${Ye}/${m.length}`),de.best&&(de.best.textContent=`Best L${T} ${gt!=null?cs(gt):"–"}`),de.objective&&(de.objective.textContent=J())}function Se(h){C=h,V()}function ue(){return Ye>0?m[Ye-1].respawn:E}function xe(h="You fell!"){tt>0||(tt=Eg,x.position.copy(ue()).add(new U(0,.1,.6)),x.velocity.set(0,0,0),x.onGround=!1,x.ground=null,b(`${h} · back to ${Ye>0?`checkpoint ${Ye}`:"the start"}`))}function we(){x.position.copy(E),x.velocity.set(0,0,0),x.yaw=0,x.pitch=-.05,x.onGround=!1,x.ground=null,x.jumpBuffer=0,et=0,Fe=0,Ye=0,De=!1,Ge=!1,C=!1,tt=0,re.clear(),B(de.pause,!1),B(de.finish,!1),gt=t?.(T)??null;for(const h of m)h.ring.visible=!0;V(),X()}function ee(){!Xe||Ge||De||(Ge=!0,re.clear(),B(de.pause,!0),X(),document.pointerLockElement===n&&document.exitPointerLock())}function me(){!Xe||!Ge||(Ge=!1,B(de.pause,!1),X(),Ne())}function Oe(){we(),B(de.pause,!1),B(de.finish,!1),X(),Ne()}function Ue(){Bs(),o?.()}function le(){li||(li=!0,de.hint&&(de.hint.textContent="Drag to look · WASD to move"),b("Mouse capture blocked · drag to look around"),X())}function Ne(){if(Le||li)return;const h=performance.now();if(!(h-Ji<500)){Ji=h;try{const k=n.requestPointerLock();k?.catch?.(le),k||setTimeout(()=>{document.pointerLockElement!==n&&le()},350)}catch{le()}}}function I(){De=!0,Ge=!1,C=!1,B(de.pause,!1),X(),document.pointerLockElement===n&&document.exitPointerLock();const h=i?.(T,et)||{isBest:!1,best:et};gt=h.best,de.finishTitle&&(de.finishTitle.textContent=`Level ${T} Complete!`),de.finishTime&&(de.finishTime.textContent=cs(et)),de.finishBest&&(de.finishBest.textContent=h.isBest?"New best time!":`Best ${cs(h.best)}`),B(de.finish,!0),V()}new U;function he(h){for(const k of g){k.prev.copy(k.mesh.position);let R=0,w=0,O=0;if(k.move){const j=Math.sin(h*k.move.speed+(k.move.phase||0))*k.move.amp;k.move.axis==="x"?R=j:k.move.axis==="y"?w=j:O=j}k.mesh.position.set(k.baseX+R,k.baseY+w,k.baseZ+O),k.minX=k.baseX+R-k.w/2,k.maxX=k.baseX+R+k.w/2,k.minY=k.baseY+w-k.h/2,k.maxY=k.baseY+w+k.h/2,k.minZ=k.baseZ+O-k.d/2,k.maxZ=k.baseZ+O+k.d/2,k.delta.copy(k.mesh.position).sub(k.prev)}}function te(){const h=ss.width/2;return{minX:x.position.x-h,maxX:x.position.x+h,minY:x.position.y,maxY:x.position.y+ss.height,minZ:x.position.z-h,maxZ:x.position.z+h}}function ke(h,k){return h.minX<k.maxX&&h.maxX>k.minX&&h.minY<k.maxY&&h.maxY>k.minY&&h.minZ<k.maxZ&&h.maxZ>k.minZ}function ne(h,k){return h.minX<k.maxX&&h.maxX>k.minX&&h.minY<k.maxY&&h.maxY>k.minY&&h.minZ<k.maxZ&&h.maxZ>k.minZ}function K(h,k,R){let w=null;for(const O of g){if(h<O.minX||h>O.maxX||k<O.minZ||k>O.maxZ)continue;const j=R-O.maxY;j>=-.35&&j<=1.2&&(!w||O.maxY>w.maxY)&&(w=O)}return w}function ye(h){const k=ss.width/2,R=new U(-Math.sin(x.yaw),0,-Math.cos(x.yaw)),w=new U(Math.cos(x.yaw),0,-Math.sin(x.yaw)),O=new U;re.has("forward")&&O.add(R),re.has("back")&&O.sub(R),re.has("right")&&O.add(w),re.has("left")&&O.sub(w),O.lengthSq()>1&&O.normalize();const j=re.has("sprint")?vg:kg,ie=O.x*j,oe=O.z*j,ve=x.onGround?yg:Mg,Te=Jn(ve*h,0,1);x.velocity.x+=(ie-x.velocity.x)*Te,x.velocity.z+=(oe-x.velocity.z)*Te,O.lengthSq()>.01&&!C&&Se(!0),x.jumpBuffer>0&&(x.jumpBuffer-=h),re.has("jump")&&x.onGround&&(x.velocity.y=xg,x.onGround=!1,x.ground=null,x.jumpBuffer=0,C||Se(!0)),x.velocity.y=Math.max(x.velocity.y-bg*h,-26),x.ground&&x.position.add(x.ground.delta);const Be=(Re,Ie)=>{if(!Ie)return;x.position[Re]+=Ie;const ge=te();for(const qe of g)ke(ge,qe)&&(Re==="x"?(x.position.x=Ie>0?qe.minX-k-.001:qe.maxX+k+.001,x.velocity.x=0):Re==="z"&&(x.position.z=Ie>0?qe.minZ-k-.001:qe.maxZ+k+.001,x.velocity.z=0),ge.minX=x.position.x-k,ge.maxX=x.position.x+k,ge.minZ=x.position.z-k,ge.maxZ=x.position.z+k)},Je=x.position.y;x.position.y+=x.velocity.y*h,x.onGround=!1,x.ground=null;let nt=te();for(const Re of g)ke(nt,Re)&&(x.velocity.y<=0?(x.position.y=Re.maxY,x.velocity.y=0,x.onGround=!0,x.ground=Re):(x.position.y=Re.minY-ss.height-.001,x.velocity.y=0),nt=te());if(Be("x",x.velocity.x*h),Be("z",x.velocity.z*h),!x.onGround&&x.velocity.y<=0){const Re=K(x.position.x,x.position.z,Je);Re&&x.position.y<=Re.maxY+.08&&(x.position.y=Re.maxY,x.velocity.y=0,x.onGround=!0,x.ground=Re)}nt=te();for(const Re of v)if(ne(nt,Re)){xe("You touched the lava!");return}if(x.position.y<Sg){xe("You fell!");return}for(const Re of m)Re.index<=Ye||Math.abs(x.position.x-Re.x)<Bd&&Math.abs(x.position.z-Re.z)<Bd&&Math.abs(x.position.y-Re.top)<1.6&&(Ye=Re.index,Re.ring.material.color.set(Me.teal),Re.ring.material.emissive.set(Me.teal),Re.beam.material.color.set(Me.teal),Re.beam.material.emissive.set(Me.teal),b(`Checkpoint ${Ye} reached!`),V());A&&!De&&Math.abs(x.position.x-A.x)<A.radius&&Math.abs(x.position.z-A.z)<A.radius&&Math.abs(x.position.y-A.top)<1.6&&I()}function Ve(h){const k=Math.hypot(x.velocity.x,x.velocity.z);x.onGround&&k>1&&(Pe+=h*k*1.9);const R=x.onGround?Math.sin(Pe)*.028:0;l.position.set(x.position.x,x.position.y+ss.eye+R,x.position.z),l.rotation.set(x.pitch,x.yaw,0)}const _t=h=>{if(!Xe)return;const k=h.target?.tagName;if(!(k==="INPUT"||k==="TEXTAREA")){if(h.code==="Escape"){if(h.preventDefault(),De)return;Ge?me():ee();return}Ge||De||(h.code==="KeyW"||h.code==="ArrowUp"?(re.add("forward"),h.preventDefault()):h.code==="KeyS"||h.code==="ArrowDown"?(re.add("back"),h.preventDefault()):h.code==="KeyA"||h.code==="ArrowLeft"?(re.add("left"),h.preventDefault()):h.code==="KeyD"||h.code==="ArrowRight"?(re.add("right"),h.preventDefault()):h.code==="Space"?(re.add("jump"),x.jumpBuffer=.14,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?re.add("sprint"):h.code==="KeyR"&&xe("Respawned"))}},rt=h=>{h.code==="KeyW"||h.code==="ArrowUp"?re.delete("forward"):h.code==="KeyS"||h.code==="ArrowDown"?re.delete("back"):h.code==="KeyA"||h.code==="ArrowLeft"?re.delete("left"):h.code==="KeyD"||h.code==="ArrowRight"?re.delete("right"):h.code==="Space"?re.delete("jump"):(h.code==="ShiftLeft"||h.code==="ShiftRight")&&re.delete("sprint")},fn=h=>{!Xe||!vt||(x.yaw-=h.movementX*Od,x.pitch=Jn(x.pitch-h.movementY*Od,-1.45,1.45))},An=()=>{vt=document.pointerLockElement===n,vt&&(Vt=null),X(),Xe&&!vt&&!Ge&&!De&&ee()},qo=h=>{!Xe||Le||h.target.closest?.("button")&&h.target.closest(".parkour-panel-actions, #parkour-click-hint")||!vt&&!Ge&&!De&&(h.preventDefault(),Ne())},pn={id:null,x:0,y:0};let Vt=null,li=!1,Ji=0;const Fs=h=>{!Xe||!Le||h.target.closest?.("button")||(pn.id=h.pointerId,pn.x=h.clientX,pn.y=h.clientY)},Qi=h=>{!Xe||!Le||pn.id!==h.pointerId||(x.yaw-=(h.clientX-pn.x)*.007,x.pitch=Jn(x.pitch-(h.clientY-pn.y)*.007,-1.45,1.45),pn.x=h.clientX,pn.y=h.clientY)},$o=h=>{pn.id===h.pointerId&&(pn.id=null)},eo=h=>{!Xe||Le||Ge||De||h.target.closest?.("button:not(#parkour-click-hint), a, input")||vt||(Ne(),(h.pointerType==="mouse"||h.pointerType==="")&&(Vt={x:h.clientX,y:h.clientY}))},Os=h=>{!Xe||!Vt||vt||Ge||De||(de.hint&&!de.hint.hidden&&(de.hint.hidden=!0,de.hint.style.display="none"),x.yaw-=(h.clientX-Vt.x)*.0028,x.pitch=Jn(x.pitch-(h.clientY-Vt.y)*.0028,-1.45,1.45),Vt.x=h.clientX,Vt.y=h.clientY)},Yo=()=>{Vt=null};document.addEventListener("keydown",_t),document.addEventListener("keyup",rt),document.addEventListener("mousemove",fn),document.addEventListener("pointerlockchange",An),document.addEventListener("pointerlockerror",le),document.addEventListener("pointerdown",eo),document.addEventListener("pointermove",Os),document.addEventListener("pointerup",Yo),document.addEventListener("pointercancel",Yo),de.screen?.addEventListener("pointerdown",qo),n.addEventListener("pointerdown",qo),n.addEventListener("pointerdown",Fs),n.addEventListener("pointermove",Qi),n.addEventListener("pointerup",$o),n.addEventListener("pointercancel",$o);for(const h of document.querySelectorAll("[data-parkour-move]")){const k=h.dataset.parkourMove,R=O=>{O.preventDefault(),!(!Xe||Ge||De)&&(re.add(k),Se(!0),h.setPointerCapture?.(O.pointerId))},w=O=>{re.delete(k),h.hasPointerCapture?.(O.pointerId)&&h.releasePointerCapture(O.pointerId)};h.addEventListener("pointerdown",R),h.addEventListener("pointerup",w),h.addEventListener("pointercancel",w),h.addEventListener("pointerleave",w)}for(const h of document.querySelectorAll("[data-parkour-jump]")){h.addEventListener("pointerdown",k=>{k.preventDefault(),!(!Xe||Ge||De)&&(re.add("jump"),x.jumpBuffer=.16,Se(!0))});for(const k of["pointerup","pointercancel","pointerleave"])h.addEventListener(k,()=>re.delete("jump"))}for(const h of document.querySelectorAll("[data-parkour-action]"))h.addEventListener("click",()=>{const k=h.dataset.parkourAction;k==="resume"?me():k==="restart"?Oe():k==="next"?er():k==="menu"&&Ue()});de.hint?.addEventListener("click",h=>{h.preventDefault(),Ne()});function Qa(h=1){Xe=!0,li=!1,Vt=null,Ji=0,de.hint&&(de.hint.textContent="Click to play · ESC for menu"),pe(h),we(),X(),Ne()}function er(){Xe&&(pe(T+1),we(),B(de.pause,!1),B(de.finish,!1),X(),Ne(),b(`Level ${T}`))}function Bs(){Xe=!1,Ge=!1,De=!1,C=!1,re.clear(),B(de.pause,!1),B(de.finish,!1),X(),document.pointerLockElement===n&&document.exitPointerLock()}function tr(h){if(Xe){if(!Ge&&!De&&(Fe+=h),tt>0&&(tt=Math.max(0,tt-h)),!Ge&&!De)he(Fe),C&&(et+=h),ye(h),V();else for(const k of g)k.delta.set(0,0,0);for(const k of Q)k.mesh.rotation.y+=k.spin*(k.spin?1:0)*h,k.drift?k.mesh.position.x=k.baseX+Math.sin(Fe*.08*k.drift)*9:k.mesh.position.y=k.baseY+Math.sin(Fe*.5+k.mesh.position.x)*.35;if(!Ge&&!De)for(const k of p)se(k,h);N&&(N.rotation.y+=h*.9);for(const k of m)k.ring.rotation.z+=h*1.4,k.ring.scale.setScalar(1+Math.sin(Fe*2+k.index)*.04),k.beam.position.y=k.top+1.7+Math.sin(Fe*1.5+k.index)*.12;P&&(P.rotation.z+=h*.6),L&&(L.position.y=F.top+1.2+Math.sin(Fe*2.4)*.18),Ve(h)}}const nr=new We;function ir(){const h=e.getSize(nr);if(h.x>0&&h.y>0){const k=h.x/h.y;Math.abs(l.aspect-k)>5e-4&&(l.aspect=k,l.updateProjectionMatrix())}e.render(a,l)}const y={start:Qa,stop:Bs,update:tr,render:ir,get active(){return Xe},get paused(){return Ge},get finished(){return De},get state(){return{level:T,checkpointIndex:Ye,checkpoints:m.length,elapsed:et,running:C,finished:De,paused:Ge,yaw:x.yaw,pitch:x.pitch,position:x.position.toArray()}}};return pe(1),he(0),V(),y}const Ag="/blockbound/",Va=n=>`${Ag}${String(n).replace(/^\/+/,"")}`,It=document.querySelector("#world");It.tabIndex=0;const Wn=new J1({canvas:It,antialias:!0});Wn.setPixelRatio(Math.min(devicePixelRatio,1.75));Wn.setSize(innerWidth,innerHeight);Wn.shadowMap.enabled=!0;Wn.shadowMap.type=tu;Wn.outputColorSpace=Dt;Wn.toneMapping=nu;Wn.toneMappingExposure=1.06;const ln=new vu;ln.background=new Ke(10205381);ln.fog=new za(10205381,32,76);const Yt=new gn(72,innerWidth/innerHeight,.08,180);Yt.rotation.order="YXZ";ln.add(Yt);const Nu=new Tu(13492712,5916983,2.1);ln.add(Nu);const wn=new Cl(16770493,2.4);wn.position.set(-28,48,20);wn.castShadow=!0;wn.shadow.mapSize.set(2048,2048);wn.shadow.camera.left=-45;wn.shadow.camera.right=45;wn.shadow.camera.top=45;wn.shadow.camera.bottom=-45;ln.add(wn);ln.add(wn.target);function Rg(n,e,t=null,i="",o="side"){const a=document.createElement("canvas");a.width=a.height=16;const r=a.getContext("2d");r.fillStyle=n,r.fillRect(0,0,16,16),t&&(r.fillStyle=t,r.fillRect(0,0,16,4));let l=n.charCodeAt(1)*97;for(let c=0;c<42;c++){l=l*16807%2147483647;const u=l%16;l=l*16807%2147483647;const f=l%16;r.globalAlpha=.22+l%30/100,r.fillStyle=e[l%e.length],r.fillRect(u,f,l%3===0?2:1,1)}if(r.globalAlpha=1,i==="chest")r.fillStyle="#563516",r.fillRect(0,0,16,2),r.fillRect(0,8,16,1),r.fillRect(0,14,16,2),r.fillStyle="#d9c37c",r.fillRect(7,7,2,3);else if(i==="red_bed")r.fillStyle=o==="top"?"#b52828":"#873b2a",r.fillRect(0,0,16,16),r.fillStyle="#ece9df",r.fillRect(0,0,16,o==="top"?4:3);else if(i==="grass_block"&&o==="side")r.fillStyle="#548332",r.fillRect(0,0,16,4),r.fillRect(2,4,3,2),r.fillRect(10,4,2,3);else if(i.endsWith("_log"))if(o==="top")r.fillStyle="#bd9860",r.fillRect(0,0,16,16),r.strokeStyle="#795331",r.strokeRect(2.5,2.5,11,11),r.strokeRect(5.5,5.5,5,5);else{r.fillStyle=i.startsWith("birch")?"#625d52":"#4b3421";for(const c of[1,5,10,14])r.fillRect(c,0,1,16),r.fillRect((c+1)%16,3,1,5)}else if(i.endsWith("_planks")){r.fillStyle="#553b27";for(const c of[0,5,10,15])r.fillRect(0,c,16,1);r.fillRect(5,1,1,4),r.fillRect(11,6,1,4),r.fillRect(3,11,1,4)}else if(i==="stone_bricks"||i==="bricks"){r.fillStyle=i==="bricks"?"#674039":"#555b57";for(const c of[0,5,10,15])r.fillRect(0,c,16,1);r.fillRect(7,1,1,4),r.fillRect(3,6,1,4),r.fillRect(12,6,1,4),r.fillRect(7,11,1,4)}else if(i.endsWith("_leaves")){r.fillStyle="#365c2d";for(const[c,u]of[[1,1],[8,2],[4,6],[12,8],[1,12],[9,13]])r.fillRect(c,u,3,2)}const d=new oc(a);return d.magFilter=Ut,d.minFilter=Vl,d.colorSpace=Dt,d}const ma={},Mo=new Set(ig),zr=new Map,Fu=new Eu;function lc(n,e="side"){if(n={suspicious_sand:"suspicious_sand_0",suspicious_gravel:"suspicious_gravel_0",moss_carpet:"moss_block",pointed_dripstone:"pointed_dripstone_up_tip",magma_block:"magma",smooth_quartz:"quartz_block_bottom",chiseled_quartz:"chiseled_quartz_block",crimson_leaves:"nether_wart_block",warped_leaves:"warped_wart_block",bamboo_leaves:"bamboo_large_leaves",chiseled_bamboo:"bamboo_mosaic"}[n]||n,n=n.replace(/^(.*)_stripped_(log|wood|stem|hyphae)$/,"stripped_$1_$2"),n=n.replace(/_hyphae$/,"_stem").replace(/_wood$/,"_log"),n=n.replace(/_hanging_sign$/,"_planks"),n==="water")return"water_still";if(n==="dirt_path")return e==="top"?"dirt_path_top":e==="bottom"?"dirt":"dirt_path_side";if(n==="podzol")return e==="top"?"podzol_top":e==="bottom"?"dirt":"podzol_side";if(n==="mycelium")return e==="top"?"mycelium_top":e==="bottom"?"dirt":"mycelium_side";if(n==="blast_furnace")return e==="top"||e==="bottom"?"blast_furnace_top":e==="front"?"blast_furnace_front":"blast_furnace_side";if(n==="bell")return e==="top"?"bell_top":e==="bottom"?"bell_bottom":"bell_side";if(n==="grindstone")return e==="top"||e==="bottom"?"grindstone_round":"grindstone_side";if(n==="white_carpet"||n==="white_wall_banner")return"white_wool";if(n==="light_gray_carpet")return"light_gray_wool";if(n.endsWith("_wall"))return lc(n.replace(/_wall$/,""),e);if(n==="crafting_table")return e==="top"?"crafting_table_top":e==="bottom"?"oak_planks":e==="front"?"crafting_table_front":"crafting_table_side";if(n==="furnace")return e==="top"||e==="bottom"?"furnace_top":e==="front"?"furnace_front":"furnace_side";if(n==="chest"||n==="red_bed")return null;if(n==="grass_block")return e==="top"?"grass_block_top":e==="bottom"?"dirt":"grass_block_side";if(n==="snow_block")return"snow";if(n==="powder_snow")return"powder_snow";if(n==="bamboo_block"||n==="stripped_bamboo_block"){const s=e==="side"?n:`${n}_top`;if(Mo.has(s))return s}if((n.endsWith("_log")||n.endsWith("_stem")||n.endsWith("_hyphae"))&&e!=="side"&&Mo.has(`${n}_top`))return`${n}_top`;if(n.endsWith("_wood")){const s=n.replace(/_wood$/,"_log");if(Mo.has(s))return s}if(Mo.has(n))return n;const i=n.match(/^(.*)_(stairs|slab|fence|fence_gate|button|pressure_plate|sign|hanging_sign)$/);return i&&Mo.has(`${i[1]}_planks`)?`${i[1]}_planks`:[`${n}_side`,`${n}_top`,`${n}_bottom`,n.replace(/_stairs$|_slab$/,"")].find(s=>Mo.has(s))||null}function Cg(n){if(!n)return null;if(!zr.has(n)){const e=Fu.load(Va(`textures/block/${n}.png`));e.magFilter=Ut,e.minFilter=Vl,e.colorSpace=Dt,n==="water_still"&&(e.repeat.y=1/32,e.offset.y=31/32),zr.set(n,e)}return zr.get(n)}function Ou(n){if(ma[n])return ma[n];const e=Bt[n]||Bt.stone,t=o=>{const s=lc(n,o);return new Gi({map:Cg(s)||Rg(e.color,[e.accent,e.color,"#d6d0bd"],null,n,o),color:n==="water"?5079253:n==="grass_block"&&o==="top"||n.endsWith("_leaves")&&!n.startsWith("cherry")&&!n.startsWith("pale_oak")?8633170:16777215,transparent:e.transparent||n.endsWith("_leaves"),opacity:n==="water"?.7:1,alphaTest:e.transparent||n.endsWith("_leaves")?.1:0})},i=t("side");return ma[n]=[i,i,t("top"),t("bottom"),i,["furnace","blast_furnace","crafting_table"].includes(n)?t("front"):i],ma[n]}const Lg=new Mt(1,1,1),Pg=new Mt(1,.5,1),Bu=new Mt(1,.5,1);Bu.translate(0,-.25,0);const zu=new Mt(1,.5,.5);zu.translate(0,.25,.25);const Dg=Q1([Bu,zu],!1),Ig=new Mt(1,1,.1875),zd=new Mt(.25,1,.25),Ug=new Mt(.75,.125,.75),Ng=new Mt(.25,.25,.125);function Fg(n){return n.endsWith("_slab")?{geometry:Pg,offset:-.25}:n.endsWith("_stairs")?{geometry:Dg,offset:0}:n.endsWith("_door")||n.endsWith("_trapdoor")||n.endsWith("_sign")||n.endsWith("_hanging_sign")?{geometry:Ig,offset:0}:n.endsWith("_fence")||n.endsWith("_fence_gate")?{geometry:zd,offset:0}:n.endsWith("_pressure_plate")||n.endsWith("_carpet")?{geometry:Ug,offset:-.4375}:n.endsWith("_wall")?{geometry:zd,offset:0}:n.endsWith("_button")?{geometry:Ng,offset:0}:{geometry:Lg,offset:0}}function cc(n,e){const t=new Mt(...n),i=t.attributes.uv;return e.forEach(([o,s,a,r],l)=>{[[o,s],[o+a,s],[o,s+r],[o+a,s+r]].forEach(([d,c],u)=>i.setXY(l*4+u,d/64,1-c/64))}),t}const Og=cc([.875,.875,.875],[[0,33,14,10],[28,33,14,10],[14,19,14,14],[28,19,14,14],[42,33,14,10],[14,33,14,10]]),Bg=cc([1,.5625,1],[[0,28,6,16],[22,28,6,16],[6,28,16,16],[22,28,16,16],[6,44,16,6],[6,44,16,6]]),zg=cc([1,.5625,1],[[0,6,6,16],[22,6,6,16],[6,6,16,16],[22,6,16,16],[6,22,16,6],[6,22,16,6]]);function Hu(n){const e=Fu.load(Va(`textures/entity/${n}`));return e.magFilter=Ut,e.minFilter=Ut,e.colorSpace=Dt,new Gi({map:e})}const Hg=Hu("chest/normal.png"),Gg=Hu("bed/red.png"),ds=new rn;ln.add(ds);const Wa=new Map,La=new Set,So=new Map,dc=new Map,Ct=new Map,Il=[],bi=8;let ti=4,ys="",un={minX:-32,maxX:40,minZ:-32,maxZ:40};const $t=(n,e,t)=>`${n},${e},${t}`,jt=(n,e)=>{let t=n*374761393+e*668265263;return t=(t^t>>13)*1274126177,((t^t>>16)>>>0)/4294967295},Gu={plains:{label:"Plains",surface:"grass_block",soil:"dirt",sky:10205381,fog:10205381},forest:{label:"Oak Forest",surface:"grass_block",soil:"dirt",sky:8957617,fog:8957617},savanna:{label:"Savanna",surface:"grass_block",soil:"coarse_dirt",sky:12173978,fog:12173978},jungle:{label:"Jungle",surface:"grass_block",soil:"dirt",sky:7907465,fog:7907465},swamp:{label:"Swamp",surface:"grass_block",soil:"mud",sky:7441267,fog:7441267},badlands:{label:"Badlands",surface:"red_sand",soil:"red_sand",sky:12954766,fog:12954766},desert:{label:"Desert",surface:"sand",soil:"sand",sky:12175296,fog:13156e3},taiga:{label:"Taiga",surface:"podzol",soil:"dirt",sky:8691624,fog:8691624},snowy:{label:"Snowy Peaks",surface:"snow_block",soil:"stone",sky:12110546,fog:12964565}};function ai(n,e){const t=Math.sin(n*.017)+Math.cos(e*.019)+Math.sin((n-e)*.009),i=Math.sin((n+40)*.027)-Math.cos((e-20)*.023);return t>1.35?"snowy":t<-1.15?"badlands":t<-.82?"desert":t>.85&&i<-.28?"savanna":t>.52&&i>.62?"jungle":i<-.9?"swamp":i>.72?"forest":i<-.7?"taiga":"plains"}function At(n,e){const t=ai(n,e),i=Math.sin(n*.13)*1.35+Math.cos(e*.11)*1.15+Math.sin((n+e)*.055)*1.35;return Math.floor(t==="desert"||t==="badlands"?2.5+i*.48:t==="savanna"?4+i*.72:t==="jungle"?4+i*.9:t==="swamp"?1+i*.32:t==="snowy"?5+i*1.35+Math.abs(Math.sin(n*.037)*2.2):t==="taiga"?3.5+i*.8:3+i)}function Vg(n,e,t){const i=At(n,t);if(e>i||e<-16)return null;if(e===-16)return"bedrock";const o=Gu[ai(n,t)];if(e===i)return o.surface;if(e>=i-2)return o.soil;const s=jt(n*17+e*31,t*19-e*23);return s>.985?e<-7?"diamond_ore":"gold_ore":s>.96?e<-4?"redstone_ore":"iron_ore":s>.92?"coal_ore":s>.9?"copper_ore":"stone"}function nn(n,e,t){const i=$t(n,e,t);return Ct.has(i)?Ct.get(i):Wa.get(i)||null}function be(n,e,t,i){const o=$t(n,e,t);Ct.has(o)||Wa.set(o,i)}function Wg(n,e){const t=At(n,e);for(let i=t+1;i<=t+6;i++)be(n,i,e,null);for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)(i||o)&&be(n+i,t+5,e+o,"stone");be(n,t+6,e,"water"),La.add($t(n,t+6,e))}function Hd(n,e,t){const i=At(n,e),o=t==="taiga"||t==="snowy"?"spruce":t==="forest"&&jt(n+9,e-4)>.82?"birch":"oak",s=o==="spruce"?5:4;for(let a=i+1;a<=i+s;a++)be(n,a,e,`${o}_log`);if(o==="spruce"){for(let a=2;a<=5;a++){const r=a===5?0:a%2?1:2;for(let l=-r;l<=r;l++)for(let d=-r;d<=r;d++)Math.abs(l)+Math.abs(d)<=r+1&&(l||d||a===5)&&be(n+l,i+a,e+d,"spruce_leaves")}return}for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let l=3;l<=5;l++)(a||r||l>s)&&Math.abs(a)+Math.abs(r)+Math.max(0,l-4)<4&&be(n+a,i+l,e+r,`${o}_leaves`)}function Hr(n,e,t){const i=At(n,e);for(let s=-3;s<=3;s++)for(let a=-2;a<=2;a++){for(let r=i-2;r<=i;r++)be(n+s,r,e+a,t==="desert"?"sand":"cobblestone");for(let r=i+1;r<=i+7;r++)be(n+s,r,e+a,null)}if(t==="desert"){for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)be(n+s,i,e+a,"sand"),(Math.abs(s)===2||Math.abs(a)===2)&&be(n+s,i+1,e+a,"smooth_quartz");for(let s=2;s<=4;s++)for(const[a,r]of[[-2,-2],[2,-2],[-2,2],[2,2]])be(n+a,i+s,e+r,"smooth_quartz");for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)Math.abs(s)+Math.abs(a)<4&&be(n+s,i+5,e+a,"red_sand");return}if(t==="snowy"){for(let s=1;s<=5;s++)for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)(Math.abs(a)===2||Math.abs(r)===2)&&be(n+a,i+s,e+r,s===5?"snow_block":"cobblestone");for(let s=1;s<=2;s++)be(n,i+s,e-2,null);return}const o=t==="taiga"?"spruce":"oak";for(let s=-3;s<=3;s++)for(let a=-2;a<=2;a++){be(n+s,i,e+a,"cobblestone");for(let r=1;r<=3;r++){const l=Math.abs(s)===3||Math.abs(a)===2,d=a===-2&&s===0&&r<3,c=r===2&&(Math.abs(s)===3&&a===0||Math.abs(a)===2&&Math.abs(s)===2);l&&!d&&!c&&be(n+s,i+r,e+a,`${o}_planks`),c&&be(n+s,i+r,e+a,"glass")}}be(n-2,i+1,e+1,"chest"),be(n-1,i+1,e+1,"crafting_table"),be(n+1,i+1,e+1,"furnace"),be(n+2,i+1,e+1,"red_bed"),be(n+2,i+1,e,"red_bed_head");for(let s=-4;s<=4;s++)for(let a=-3;a<=3;a++){const r=i+4+Math.max(0,2-Math.abs(a));be(n+s,r,e+a,"bricks")}}function Vu(n,e){const t=At(n,e);for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){for(let s=t-2;s<=t;s++)be(n+i,s,e+o,"cobblestone");for(let s=t+1;s<=t+6;s++)be(n+i,s,e+o,null);if((Math.abs(i)===2||Math.abs(o)===2)&&be(n+i,t+1,e+o,"stone_bricks"),Math.abs(i)===2&&Math.abs(o)===2)for(let s=2;s<=4;s++)be(n+i,t+s,e+o,"oak_log");be(n+i,t+5,e+o,"oak_planks")}for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)be(n+i,t+1,e+o,"water")}function Xg(n,e){const t=At(n,e);for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){for(let s=t-2;s<=t;s++)be(n+i,s,e+o,"stone_bricks");for(let s=t+1;s<=t+5;s++)be(n+i,s,e+o,null);if(Math.abs(i)===3&&Math.abs(o)===3){const s=2+Math.floor(jt(n+i,e+o)*3);for(let a=1;a<=s;a++)be(n+i,t+a,e+o,a===1?"mossy_stone_bricks":"stone_bricks")}}}function Xn(n,e,t,i=12){return At(n,e)}const uc=[],qg=3,Wu=50,Xu=50,$g={ruins:[10,10],well:[8,8],stronghold:[14,14],pyramid:[16,16],jungle_temple:[14,14],swamp_hut:[10,10]};function qu(n,e,t,i,o){return{minX:n-t/2-o,maxX:n+t/2+o,minZ:e-i/2-o,maxZ:e+i/2+o}}function hc(n,e,t,i,o=qg){const s=qu(n,e,t,i,o);return!uc.some(a=>s.minX<a.maxX&&s.maxX>a.minX&&s.minZ<a.maxZ&&s.maxZ>a.minZ)}function fc(n,e,t,i,o=0){uc.push(qu(n,e,t,i,o))}function Yg(n,e,t,i,o,s,a){for(let r=0;r<=a;r+=2)for(let l=-r;l<=r;l+=2)for(let d=-r;d<=r;d+=2){if(Math.max(Math.abs(l),Math.abs(d))!==r)continue;const c=n+l,u=e+d;if((s?pc(c,u,Math.min(o,4)):Pa(c,u,Math.min(o,6),2))&&hc(c,u,t,i))return[c,u]}return null}function dn(n,e,t,i=null){const o=ji[n];if(!o)return!1;const[s,,a]=o.size,r=Math.ceil(Math.max(s,a)/2),l=n.startsWith("village_");if(!l){const c=n==="shipwreck",u=Yg(e,t,s,a,r,c,c?28:14);if(!u)return!1;[e,t]=u}const d=i??At(e,t);for(const[c,u,f,_,g=0]of o.blocks){const v=e+c-Math.floor(s/2),m=d+u+1,p=t+f-Math.floor(a/2);be(v,m,p,_),g&&dc.set($t(v,m,p),g)}return l||fc(e,t,s,a),!0}function Pa(n,e,t=5,i=2){let o=1/0,s=-1/0;for(let a=-t;a<=t;a++)for(let r=-t;r<=t;r++){const l=At(n+a,e+r);o=Math.min(o,l),s=Math.max(s,l)}return o>1&&s-o<=i}function pc(n,e,t=4){for(let i=-t;i<=t;i++)for(let o=-t;o<=t;o++)if(At(n+i,e+o)>=1)return!1;return!0}function jg(n,e,t=5,i=12){for(let o=0;o<=i;o+=2)for(let s=-o;s<=o;s+=2)for(let a=-o;a<=o;a+=2)if(Math.max(Math.abs(s),Math.abs(a))===o&&Pa(n+s,e+a,t))return[n+s,e+a];return null}function Kg(n,e,t=4,i=18){for(let o=0;o<=i;o+=2)for(let s=-o;s<=o;s+=2)for(let a=-o;a<=o;a+=2)if(Math.max(Math.abs(s),Math.abs(a))===o&&pc(n+s,e+a,t))return[n+s,e+a];return null}function Zg(n,e){const t=Xn(n,e,6,10);for(let i=0;i<5;i++)for(let o=-6+i;o<=6-i;o++)for(let s=-6+i;s<=6-i;s++)(i===0||Math.abs(o)===6-i||Math.abs(s)===6-i)&&be(n+o,t+i+1,e+s,i===2&&Math.abs(o)+Math.abs(s)<2?"red_sand":"sand")}function Jg(n,e){if(ji.igloo)return dn("igloo",n,e);const t=Xn(n,e,4,7);for(let i=1;i<=5;i++)for(let o=-3;o<=3;o++)for(let s=-3;s<=3;s++){const a=Math.hypot(o,s,i-2);a>2.8&&a<3.7&&be(n+o,t+i,e+s,"snow_block")}be(n,t+1,e-3,null),be(n,t+2,e-3,null),be(n,t+1,e,"red_bed"),be(n,t+1,e-1,"red_bed_head")}function Qg(n,e){const t=Xn(n,e,5,9);for(let i=-5;i<=5;i++)for(let o=-5;o<=5;o++)for(let s=1;s<=4;s++)(Math.abs(i)===5||Math.abs(o)===5||s===4)&&be(n+i,t+s,e+o,(i+o+s)%3?"mossy_cobblestone":"stone_bricks");for(let i=1;i<=3;i++)be(n,t+i,e-5,null);be(n,t+1,e+2,"chest")}function $u(n,e){if(ji.outpost)return dn("outpost",n,e);const t=Xn(n,e,4,14);for(const[i,o]of[[-3,-3],[-3,3],[3,-3],[3,3]])for(let s=1;s<=10;s++)be(n+i,t+s,e+o,"oak_log");for(let i=-4;i<=4;i++)for(let o=-4;o<=4;o++)(Math.abs(i)===4||Math.abs(o)===4)&&be(n+i,t+8,e+o,"oak_planks");for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++)be(n+i,t+10,e+o,"oak_planks");be(n,t+1,e,"chest")}function Yu(n,e){if(ji.portal)return dn("portal",n,e);const t=Xn(n,e,3,8);for(let i=1;i<=5;i++)for(const o of[-2,2])i===4&&o===2||be(n+o,t+i,e,i%3?"obsidian":"crying_obsidian");for(let i=-2;i<=2;i++)be(n+i,t+1,e,"obsidian"),be(n+i,t+6,e,"obsidian");be(n+1,t+1,e+1,"chest")}function eb(n,e){const t=Xn(n,e,4,9);for(const[i,o]of[[-3,-3],[-3,3],[3,-3],[3,3]])for(let s=1;s<=5;s++)be(n+i,t+s,e+o,"oak_log");for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++)(Math.abs(i)===3||Math.abs(o)===3||Math.abs(i)+Math.abs(o)>3)&&be(n+i,t+5,e+o,"oak_planks");be(n,t+2,e,"crafting_table")}function tb(n,e){if(!pc(n,e))return!1;if(ji.shipwreck)return dn("shipwreck",n,e);const t=Xn(n,e,6,6);for(let i=-5;i<=5;i++)for(let o=-2;o<=2;o++)(Math.abs(o)===2||Math.abs(i)>3&&o===0)&&be(n+i,t+1+Math.max(0,Math.abs(i)-3),e+o,"oak_planks");for(let i=-5;i<=5;i++)be(n+i,t+3,e,"oak_log");be(n,t+2,e,"chest")}function nb(n,e){if(ji.mansion)return dn("mansion",n,e);const t=Xn(n,e,8,12);for(let i=1;i<=6;i++)for(let o=-8;o<=8;o++)for(let s=-6;s<=6;s++)(Math.abs(o)===8||Math.abs(s)===6||i===6)&&be(n+o,t+i,e+s,i===6?"dark_oak_planks":"dark_oak_log");for(let i=1;i<=2;i++)be(n,t+i,e-6,null);be(n-3,t+1,e+2,"chest"),be(n+3,t+1,e+2,"chest")}function ib(n,e){if(ji.trail)return dn("trail",n,e);const t=Xn(n,e,4,5);for(let i=-4;i<=4;i++)for(let o=-4;o<=4;o++)jt(n+i,e+o)>.52&&be(n+i,t+1+Math.floor(jt(e+o,n+i)*3),e+o,(i+o)%2?"mud_bricks":"mossy_stone_bricks");be(n,t+1,e,"chest")}function ob(n,e){const t=Xn(n,e,5,7);for(let i=-5;i<=5;i++)for(let o=-5;o<=5;o++)for(let s=1;s<=4;s++)(Math.abs(i)===5||Math.abs(o)===5||s===4)&&be(n+i,t+s,e+o,"stone_bricks");for(let i=1;i<=2;i++)be(n,t+i,e-5,null);be(n,t+1,e,"chest")}const _c=[];function sb(n,e,t=20){const i=[];for(let o=-t;o<=t;o+=4)for(let s=-t;s<=t;s+=4){const a=n+o,r=e+s;if(Math.hypot(a,r)<26)continue;const l=ai(a,r);if(l!=="plains"&&l!=="forest"||!Pa(a,r,8,3)||!hc(a,r,Wu,Xu,4)||!Pa(a,r,12,99))continue;let d=1/0,c=-1/0,u=0,f=0;for(let _=-20;_<=20;_+=5)for(let g=-20;g<=20;g+=5){const v=At(a+_,r+g);d=Math.min(d,v),c=Math.max(c,v);const m=ai(a+_,r+g);f++,m!=="plains"&&m!=="forest"&&u++}i.push({x:a,z:r,score:c-d+u/f*4,distance:Math.hypot(o,s)})}return i.length?(i.sort((o,s)=>o.score-s.score||o.distance-s.distance),[i[0].x,i[0].z]):null}function ju(n,e,t){const o=sb(n,e,t==="plains"||t==="forest"?60:24);return o?([n,e]=o,t=ai(n,e),fc(n,e,Wu,Xu,4),_c.push({x:n,z:e}),t==="plains"||t==="forest"?(dn("village_fountain",n,e),dn("village_crossroad",n,e),dn("village_house",n+11,e),dn("village_library",n-11,e),dn("village_armorer",n,e+12),dn("village_weaponsmith",n,e-13),dn("village_butcher",n+13,e+12),dn("village_stable",n-13,e-12)):(Vu(n,e),Hr(n+10,e,t),Hr(n-10,e,t),Hr(n,e+10,t)),!0):!1}const ab=[["ruins",6],["well",5],["outpost",2],["ruined_portal",3],["trail",3],["stronghold",2],["village",1]],rb={desert:[["pyramid",8]],snowy:[["igloo",7]],forest:[["jungle_temple",6],["swamp_hut",5]],taiga:[["mansion",6]]};function lb(n,e){const t=[...ab,...rb[n]||[]],i=t.reduce((s,[,a])=>s+a,0);let o=e*i;for(const[s,a]of t)if(o-=a,o<0)return s;return t[t.length-1][0]}function cb(n,e,t,i){const o=$g[n];if(o&&!hc(e,t,o[0],o[1]))return!1;let s=!1;switch(n){case"ruins":Xg(e,t),s=!0;break;case"well":Vu(e,t),s=!0;break;case"outpost":s=$u(e,t)!==!1;break;case"ruined_portal":s=Yu(e,t)!==!1;break;case"trail":s=ib(e,t)!==!1;break;case"stronghold":ob(e,t),s=!0;break;case"village":s=ju(e,t,i);break;case"pyramid":Zg(e,t),s=!0;break;case"igloo":s=Jg(e,t)!==!1;break;case"jungle_temple":Qg(e,t),s=!0;break;case"swamp_hut":eb(e,t),s=!0;break;case"mansion":s=nb(e,t)!==!1;break}return s&&o&&fc(e,t,o[0],o[1]),s}function Ku(n,e){Wa.clear(),La.clear(),So.clear(),dc.clear(),_c.length=0,uc.length=0;const t=(n-ti)*bi,i=(n+ti+1)*bi,o=(e-ti)*bi,s=(e+ti+1)*bi;un={minX:t,maxX:i,minZ:o,maxZ:s};for(let c=t;c<i;c++)for(let u=o;u<s;u++){const f=At(c,u);for(let v=-16;v<=f;v++)be(c,v,u,Vg(c,v,u));if(f<1)for(let v=f+1;v<=1;v++)be(c,v,u,"water");const _=ai(c,u),g=_==="forest"?.965:_==="taiga"?.972:_==="plains"?.991:_==="snowy"?.988:2;jt(c,u)>g&&f>1&&Math.abs(c)+Math.abs(u)>8&&Hd(c,u,_)}t<=5&&i>5&&o<=-4&&s>-4&&Hd(5,-4,"plains"),t<=7&&i>7&&o<=5&&s>5&&Wg(7,5),t-16<=18&&i+16>18&&o-16<=-14&&s+16>-14&&ju(18,-14,"plains"),t<=28&&i>28&&o<=8&&s>8&&$u(28,8),t<=-18&&i>-18&&o<=14&&s>14&&Yu(-18,14);const a=Math.floor((t-16)/24),r=Math.ceil((i+16)/24),l=Math.floor((o-16)/24),d=Math.ceil((s+16)/24);for(let c=a;c<=r;c++)for(let u=l;u<=d;u++){let f=c*24+Math.floor(jt(c,u)*8)-4,_=u*24+Math.floor(jt(c+51,u-23)*8)-4;if(Math.abs(f)+Math.abs(_)<=38||Math.hypot(f-18,_+14)<=28)continue;if(jt(c+137,u-91)<.06){const p=Kg(f,_,4,40);if(p){tb(...p);continue}}const g=jt(c-71,u+41);if(g>.32)continue;const v=jg(f,_,5,12);if(!v)continue;[f,_]=v;const m=ai(f,_);cb(lb(m,g/.32),f,_,m)}Xa(),sh()}let Gd=0;function db(n){if(n<Gd||!bt||Gt!==null)return;Gd=n+.22;const e=Math.round(z.position.x),t=Math.round(z.position.y),i=Math.round(z.position.z);let o=!1;const s=(a,r,l,d)=>{if(r<-15||r>24||nn(a,r,l))return!1;const c=$t(a,r,l);return Ct.set(c,"water"),So.set(c,d),o=!0,wo("edit",{key:c,block:"water"}),!0};for(let a=e-12;a<=e+12;a++)for(let r=i-12;r<=i+12;r++)for(let l=t-12;l<=t+8;l++){if(nn(a,l,r)!=="water")continue;const d=$t(a,l,r);if(!La.has(d)&&!So.has(d))continue;const c=So.get(d)??(La.has(d)?0:7);if(So.has(d)||So.set(d,c),s(a,l-1,r,c)||c>=7)continue;const u=nn(a,l-1,r);if(u&&u!=="water")for(const[f,_]of[[1,0],[-1,0],[0,1],[0,-1]])s(a+f,l,r+_,c+1)}o&&Xa()}function ub(n,e,t,i){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([o,s,a])=>{const r=nn(n+o,e+s,t+a);return!r||r!==i&&Bt[r]?.transparent})}function Xa(){for(;ds.children.length;)ds.remove(ds.children[0]);Il.length=0;const n={};for(const i of Object.keys(Bt))n[i]=[];const e=new Map(Wa);for(const[i,o]of Ct){const[s,,a]=i.split(",").map(Number);s<un.minX||s>=un.maxX||a<un.minZ||a>=un.maxZ||(o?e.set(i,o):e.delete(i))}for(const[i,o]of e){const[s,a,r]=i.split(",").map(Number);ub(s,a,r,o)&&n[o]&&n[o].push({x:s,y:a,z:r})}const t=new ft;for(const[i,o]of Object.entries(n)){if(!o.length)continue;const s=i==="red_bed"||i==="red_bed_head",a=Fg(i),r=i==="chest"?Og:i==="red_bed"?Bg:i==="red_bed_head"?zg:a.geometry,l=new Qf(r,i==="chest"?Hg:s?Gg:Ou(i),o.length);l.userData.positions=o,l.userData.type=i,o.forEach((d,c)=>{t.makeRotationY(dc.get($t(d.x,d.y,d.z))||0),t.setPosition(d.x,d.y-(s?.21875:i==="chest"?.0625:0)+a.offset,d.z),l.setMatrixAt(c,t)}),l.castShadow=i.includes("log")||i.includes("leaves"),l.receiveShadow=!0,l.instanceMatrix.needsUpdate=!0,ds.add(l),Il.push(l)}}const z={position:new U(0,At(0,0)+.8,0),velocity:new U,yaw:0,pitch:0,grounded:!1,health:20,hunger:20,xp:0,level:1,highestY:0,hurtCooldown:0,hungerClock:0,regenClock:0};Yt.position.copy(z.position).add(new U(0,1.55,0));const Et={source:null,id:null,name:"Player",peers:new Map,lastSent:0},Ms=new rn;ln.add(Ms);function wo(n,e){!Et.source||Et.source.readyState!==EventSource.OPEN||fetch(`/lan/${n}?id=${encodeURIComponent(Et.id)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>ot("Connection lost. Rejoin the shared world."))}function Ss(){Et.source&&Et.source.close(),Et.source=null,Et.id=null,Ms.clear(),Et.peers.clear()}function Vd(n,e){if(n===Et.id)return;let t=Et.peers.get(n);if(!t){t=new rn;const i=new kt(new Mt(.52,.75,.28),new Gi({color:2726554})),o=new kt(new Mt(.5,.5,.5),new Gi({color:13142368}));i.position.y=.95,o.position.y=1.57,t.add(i,o);for(const s of[-.14,.14]){const a=new kt(new Mt(.2,.6,.24),new Gi({color:3361671}));a.position.set(s,.3,0),t.add(a)}Et.peers.set(n,t),Ms.add(t)}t.position.fromArray(e.position),t.rotation.y=e.yaw}function hb(){Ss(),Et.name=document.querySelector("#lan-player-name").value.trim().slice(0,16)||"Player",Et.id=crypto.randomUUID?.()||`p-${Date.now()}-${Math.floor(Math.random()*1e5)}`;const n=new EventSource(`/lan/events?id=${encodeURIComponent(Et.id)}`);Et.source=n;let e=!1;lt("connecting"),document.querySelector("#connection-title").textContent="Joining shared world...",document.querySelector("#connection-detail").textContent="Connecting on your local network",n.onmessage=t=>{if(Et.source!==n)return;const i=JSON.parse(t.data);if(i.type==="snapshot"){if(!e){let o=mt.find(s=>s.id==="shared-local-world");o||(o={id:"shared-local-world",name:"Shared World",mode:"survival",difficulty:"peaceful",peacefulDefaultApplied:!0,created:Date.now(),edits:[]},mt.push(o)),Us(o.id),e=!0}Ct.clear();for(const[o,s]of i.edits)Ct.set(o,s);ys="",Ms.clear(),Et.peers.clear();for(const[o,s]of i.players)Vd(o,s);ot("Joined the shared world")}else if(i.type==="edit")Ct.set(i.key,i.block),Xa(),mc();else if(i.type==="move")Vd(i.id,i.player);else if(i.type==="leave"){const o=Et.peers.get(i.id);o&&Ms.remove(o),Et.peers.delete(i.id)}},n.onerror=()=>{e?ot("Connection lost; reconnecting…"):(Ss(),document.querySelector("#connection-title").textContent="Could not join",document.querySelector("#connection-detail").textContent="Open the host’s game link while on the same Wi-Fi.")}}const ct=new Set;let xi=!1,Wd=0,Qt="grass_block";function xn(){return mt?.find(n=>n.id===Za)||null}function yt(){return xn()?.mode!=="creative"}function qa(){return xn()?.difficulty==="peaceful"}function Ul(n,e="the world"){if(!(!bt||!yt()||z.hurtCooldown>0)&&(z.health=Math.max(0,z.health-n),z.hurtCooldown=.65,It.classList.remove("hurt"),It.offsetWidth,It.classList.add("hurt"),In(),z.health<=0)){ot(`You were defeated by ${e}. Respawning…`);const t=xn()?.spawn,i=xn()?.spawnBed;t&&i&&["red_bed","red_bed_head"].includes(nn(...i))?z.position.fromArray(t):z.position.set(0,At(0,0)+.8,0),z.velocity.set(0,0,0),z.health=20,z.hunger=20}}function To(n){const e=Math.floor(n.x-.3+.5),t=Math.floor(n.x+.3+.5),i=Math.floor(n.y+.5),o=Math.floor(n.y+1.75+.5),s=Math.floor(n.z-.3+.5),a=Math.floor(n.z+.3+.5);for(let r=e;r<=t;r++)for(let l=i;l<=o;l++)for(let d=s;d<=a;d++)if(nn(r,l,d)&&nn(r,l,d)!=="water")return!0;return!1}function fb(n){To(z.position)&&(z.position.y=At(Math.round(z.position.x),Math.round(z.position.z))+.8,z.velocity.set(0,0,0));const e=(ct.has("ControlLeft")||ct.has("ControlRight"))&&(!yt()||z.hunger>3),t=ct.has("ShiftLeft")||ct.has("ShiftRight");z.sneaking=t;const i=t?1.45:e?6.4:4.5,o=Number(ct.has("KeyW"))-Number(ct.has("KeyS")),s=Number(ct.has("KeyD"))-Number(ct.has("KeyA")),a=Math.hypot(o,s)||1,r=Math.sin(z.yaw),l=Math.cos(z.yaw);z.velocity.x=(s/a*l-o/a*r)*i,z.velocity.z=(-(o/a)*l-s/a*r)*i,z.flying&&!yt()?z.velocity.y=ct.has("Space")?5.5:t?-5.5:0:z.velocity.y-=18*n,ct.has("Space")&&z.grounded&&!z.flying&&(z.velocity.y=7,z.grounded=!1);for(const c of["x","z"]){const u=z.position.clone();if(u[c]+=z.velocity[c]*n,!To(u))z.position[c]=u[c];else if(z.grounded){const f=u.clone();f.y+=1,To(f)?z.velocity[c]=0:z.position.copy(f)}else z.velocity[c]=0}const d=z.position.clone();if(d.y+=z.velocity.y*n,z.flying&&!yt())z.position.y=d.y,z.grounded=!1;else if(!To(d))z.position.y=d.y,z.grounded=!1,z.highestY=Math.max(z.highestY,z.position.y);else{if(z.velocity.y<0){if(!z.grounded){const c=z.highestY-z.position.y;c>3.4&&Ul(Math.ceil(c-3.4),"a hard fall")}z.grounded=!0,z.highestY=z.position.y}z.velocity.y=0}yt()&&!qa()&&(o||s)&&(z.hungerClock+=n*(e?2.4:.65),z.hungerClock>=18&&(z.hunger=Math.max(0,z.hunger-1),z.hungerClock=0,In())),z.position.y<-12&&Ul(20,"the void")}const gi=new _p;gi.far=6;const Po=new op(new sp(new Mt(1.012,1.012,1.012)),new Mu({color:16052453,transparent:!0,opacity:.92}));Po.visible=!1;ln.add(Po);let ze=null;function mc(){gi.setFromCamera(new We(0,0),Yt);const n=gi.intersectObjects(Il,!1).find(o=>o.object.userData.type!=="water"),e=document.querySelector("#block-label");if(!n||n.instanceId==null){ze=null,Po.visible=!1,e.classList.remove("visible");return}const t=n.object.userData.positions[n.instanceId];ze={...t,normal:n.face.normal.clone(),type:n.object.userData.type},Po.position.set(t.x,t.y,t.z),Po.visible=!0;const i=["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(ze.type);e.textContent=Bt[ze.type].label+(i?" · E / right-click to use":""),e.classList.add("visible")}let $i=null,gc=!1,bc=!1;const wi=document.createElement("section");wi.className="creative-inventory";wi.innerHTML='<div class="inventory-panel"><header class="inventory-header"><h2>Chest</h2><button class="inventory-close" type="button" aria-label="Close chest">×</button></header><p>Click an item to move one between your backpack and this chest.</p><h3>Chest</h3><div class="crafting-recipes" data-chest-items></div><h3>Backpack</h3><div class="crafting-recipes" data-backpack-items></div></div>';document.querySelector("#app").append(wi);function Zu(){const n=xn().chests[$i],e=(t,i)=>t.filter(([,o])=>o>0).map(([o,s])=>`<button type="button" data-transfer="${i}" data-item="${yn(o)}">${yn(Bt[o]?.label||o)} ×${s}</button>`).join("")||"<span>Empty</span>";wi.querySelector("[data-chest-items]").innerHTML=e(Object.entries(n),"backpack"),wi.querySelector("[data-backpack-items]").innerHTML=e([...at.entries()],"chest")}function Ju(){$i&&($i=null,wi.classList.remove("open"),Lt=!1,Tn(),ri(),Ns())}wi.addEventListener("click",n=>{if(n.target.closest(".inventory-close"))return Ju();const e=n.target.closest("[data-transfer]");if(!e)return;const t=e.dataset.item,i=xn().chests[$i];e.dataset.transfer==="chest"&&(at.get(t)||0)>0?(at.set(t,at.get(t)-1),i[t]=(i[t]||0)+1):e.dataset.transfer==="backpack"&&i[t]>0&&(i[t]--,at.set(t,(at.get(t)||0)+1)),Zu(),Tn()});const Qu=[["iron_ore","iron_ingot"],["gold_ore","gold_ingot"],["copper_ore","copper_ingot"],["deepslate_iron_ore","iron_ingot"],["deepslate_gold_ore","gold_ingot"],["deepslate_copper_ore","copper_ingot"],["cobblestone","stone"],["stone","smooth_stone"]],Ki=document.createElement("section");Ki.className="creative-inventory";Ki.innerHTML='<div class="station-window"><div class="station-art furnace-art"><span class="station-title">Furnace</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close furnace">×</button></div><div class="station-recipes"><p>Choose an item to smelt · 1 coal ore per item</p><div class="crafting-recipes" data-smelting></div></div></div>';document.querySelector("#app").append(Ki);function eh(){Ki.querySelector("[data-smelting]").innerHTML=Qu.map(([n,e],t)=>{const i=!yt()||(at.get(n)||0)>0&&(at.get("coal_ore")||0)>0;return`<button type="button" data-smelt="${t}" ${i?"":"disabled"}>${yn(Bt[n].label)} → ${yn(Bt[e].label)}</button>`}).join("")}function th(){gc=!1,Ki.classList.remove("open"),Lt=!1,Tn(),ri(),Ns()}Ki.addEventListener("click",n=>{if(n.target.closest(".station-close"))return th();const e=n.target.closest("[data-smelt]");if(!e)return;const t=Qu[Number(e.dataset.smelt)];if(!t)return;const[i,o]=t;if(yt()){if(!(at.get(i)>0)||!(at.get("coal_ore")>0))return;at.set(i,at.get(i)-1),at.set("coal_ore",at.get("coal_ore")-1)}at.set(o,(at.get(o)||0)+1),Tn(),eh(),ot(`Smelted ${Bt[o].label}`)});function Da(){if(ze){if(ze.type==="crafting_table"){vb();return}if(ze.type==="furnace"){gc=!0,Lt=!0,ct.clear(),document.pointerLockElement&&document.exitPointerLock(),eh(),Ki.classList.add("open");return}if(ze.type==="chest"){const n=xn();n.chests||={},$i=$t(ze.x,ze.y,ze.z),n.chests[$i]||={},Lt=!0,ct.clear(),document.pointerLockElement&&document.exitPointerLock(),Zu(),wi.classList.add("open")}else if(ze.type==="red_bed"||ze.type==="red_bed_head"){const n=ze.z+(ze.type==="red_bed_head"?1:0);xn().spawn=z.position.toArray(),xn().spawnBed=[ze.x,ze.y,n];const e=_s%240;e>=120?(_s+=240-e+10,ot("Good morning! Respawn point set.")):ot("Respawn point set. You can sleep at night."),Tn()}}}function Ia(n){if(ze){if(n){if(yt()&&(at.get(Qt)||0)<=0){ot(`Mine ${Bt[Qt].label} before placing it.`);return}const e=ze.x+Math.round(ze.normal.x),t=ze.y+Math.round(ze.normal.y),i=ze.z+Math.round(ze.normal.z),o=z.position.clone(),s=$t(e,t,i),a=Ct.has(s)?Ct.get(s):void 0;if(nn(e,t,i))return ot("There is already a block there.");if(Qt==="red_bed"&&(nn(e,t,i-1)||!nn(e,t-1,i)||!nn(e,t-1,i-1)))return ot("A bed needs two clear blocks on solid ground.");if(Ct.set(s,Qt),Qt==="red_bed"&&Ct.set($t(e,t,i-1),"red_bed_head"),To(o)){a===void 0?Ct.delete(s):Ct.set(s,a),Qt==="red_bed"&&Ct.delete($t(e,t,i-1));return}yt()&&at.set(Qt,(at.get(Qt)||0)-1),wo("edit",{key:$t(e,t,i),block:Qt}),Qt==="red_bed"&&wo("edit",{key:$t(e,t,i-1),block:"red_bed_head"})}else{if(ze.type==="water")return;if(ze.type==="bedrock"){ot("Bedrock cannot be mined.");return}if(ze.type==="chest"&&Object.values(xn()?.chests?.[$t(ze.x,ze.y,ze.z)]||{}).some(e=>e>0))return ot("Empty the chest before mining it.");if(ze.type==="red_bed"||ze.type==="red_bed_head"){const e=ze.z+(ze.type==="red_bed"?-1:1),t=$t(ze.x,ze.y,e);Ct.set(t,null),wo("edit",{key:t,block:null})}if(Ct.set($t(ze.x,ze.y,ze.z),null),wo("edit",{key:$t(ze.x,ze.y,ze.z),block:null}),yt()){const e=ze.type==="red_bed_head"?"red_bed":ze.type;at.set(e,(at.get(e)||0)+1),z.xp+=1,z.xp>=z.level*8&&(z.xp=0,z.level+=1)}}ih(),ri(),In(),Xa(),mc(),Tn()}}const yi=["grass_block","dirt","stone","oak_planks","oak_log","glass","bricks","diamond_block","redstone_block"];let Oo=0,Lt=!1,Es="All",Vi="oak_log",Ma=0;const at=new Map;let oi=0;const pb=new Vo({color:12089942}),_b=new Vo({color:4165512}),ws=new rn;ws.position.set(0,0,-1);Yt.add(ws);function nh(n,e=!1){const t=new rn,i=new kt(new Mt(.24,.48,.24),_b);i.position.y=-.08;const o=new kt(new Mt(.23,.28,.23),pb);return o.position.y=-.43,t.add(i,o),t.position.set(n,-.32,-.34),t.rotation.set(-.42,0,e?-.22:.22),t}const Ua=nh(.62),kc=nh(-.62,!0),$a=new kt(new Mt(.24,.24,.24));$a.position.set(-.03,-.58,-.11);$a.rotation.set(.35,.55,0);Ua.add($a);const Ya=new kt(new Mt(.2,.2,.2));Ya.position.set(.03,-.56,-.1);Ya.rotation.set(.25,-.5,0);kc.add(Ya);ws.add(Ua,kc);function Xd(n){const e=Ou(n)[0];return new Vo({map:e.map,color:16777215,transparent:e.transparent,opacity:e.opacity,alphaTest:e.alphaTest})}function mb(){$a.material=Xd(Qt),Ya.material=Xd(Vi);const n=document.querySelector("#offhand-icon");if(n){const e=Bt[Vi]||Bt.stone;n.setAttribute("style",vc(e))}}function ih(){Ma=1}function vc(n){const e=lc(n.id);return`--block-color:${n.color};--block-accent:${n.accent}${e?`;--block-image:url(${Va(`textures/block/${e}.png`)})`:""}`}function In(){const n=yt();document.querySelector("#survival-bars")?.classList.toggle("creative",!n);const t=xn(),i=t?.mode||"survival",o=document.querySelector("#mode-label");o&&(o.textContent=`${i.toUpperCase()} · ${(t?.difficulty||"peaceful").toUpperCase()}`);const s=document.querySelector("#food-count");s&&(s.textContent=n?`Food: ${oi} · R to eat`:"");const a=document.querySelector("#open-inventory");a&&(a.innerHTML=n?"<kbd>E</kbd> BACKPACK":`<kbd>E</kbd> ${Dl.length} BLOCKS`);const r=document.querySelector("#health-bar"),l=document.querySelector("#hunger-bar");r&&(r.innerHTML=Array.from({length:10},(u,f)=>{const _=z.health-f*2;return`<i class="heart ${_<=0?"empty":_===1?"half":""}">♥</i>`}).join("")),l&&(l.innerHTML=Array.from({length:10},(u,f)=>{const _=z.hunger-f*2;return`<i class="food ${_<=0?"empty":_===1?"half":""}">◆</i>`}).join(""));const d=Math.max(1,z.level*8);document.querySelector("#xp-fill")?.style.setProperty("width",`${z.xp/d*100}%`);const c=document.querySelector("#xp-level");c&&(c.textContent=z.level)}const Ts=new rn;ln.add(Ts);let si=[];const gb=new Eu,xc={};for(const[n,e]of Object.entries({cow:"cow/temperate_cow.png",pig:"pig/temperate_pig.png",sheep:"sheep/sheep.png",wool:"sheep/sheep_wool.png",chicken:"chicken/temperate_chicken.png",villager:"villager/villager.png"})){const t=gb.load(Va(`textures/entity/${e}`));t.magFilter=Ut,t.minFilter=Ut,t.colorSpace=Dt,xc[n]=new Gi({map:t,transparent:n==="wool",alphaTest:.1})}xc.iron_golem=new Gi({color:14144968,flatShading:!0});function qd(n,e,t,i=64){const[o,s,a]=e,[r,l]=t,d=new Mt(o/16,s/16,a/16),c=d.attributes.uv;return[[r+a+o,l+a,a,s],[r,l+a,a,s],[r+a,l,o,a],[r+a+o,l,o,a],[r+2*a+o,l+a,o,s],[r+a,l+a,o,s]].forEach(([f,_,g,v],m)=>{const p=f/64,T=(f+g)/64,A=1-_/i,E=1-(_+v)/i;[[p,A],[T,A],[p,E],[T,E]].forEach(([F,P],L)=>c.setXY(m*4+L,F,P))}),new kt(d,xc[n])}function Sa(n,e,t,i){const o=new rn,s=[],a=n==="chicken"||n==="sheep"?32:64;function r(c,u,f,_,g=a){const v=qd(c,u,f,g);return v.position.set(..._),o.add(v),v}function l(c,u,f,_){const g=new rn;g.position.set(_[0],_[1]+u[1]/32,_[2]);const v=qd(c,u,f,a);v.position.y=-u[1]/32,g.add(v),o.add(g),s.push(g)}if(n==="iron_golem"){r(n,[18,12,6],[0,0],[0,1.5,0]),r(n,[8,10,8],[0,0],[0,2.2,-.03]);for(const c of[-.69,.69])r(n,[4,30,6],[0,0],[c,1.1,0]);for(const c of[-.22,.22])l(n,[6,16,5],[0,0],[c,.5,0])}else if(n==="villager"){r(n,[8,12,6],[16,20],[0,.75,0]),r(n,[8,10,8],[0,0],[0,1.43,0]),r(n,[2,4,2],[24,0],[0,1.36,-.31]),r(n,[8,4,4],[44,22],[0,.91,-.25]);for(const c of[-.125,.125])l(n,[4,12,4],[0,22],[c,.375,0])}else if(n==="chicken"){r(n,[6,8,6],[0,9],[0,.48,0]),r(n,[4,6,3],[0,0],[0,.85,-.2]),r(n,[4,2,2],[14,0],[0,.79,-.35]),r(n,[2,2,2],[14,4],[0,.67,-.35]);for(const c of[-.14,.14])l(n,[3,5,3],[26,0],[c,.16,0]);for(const c of[-.22,.22])r(n,[1,4,6],[24,13],[c,.5,0])}else{const c=n==="cow",u=n==="sheep",_=r(u?"wool":n,c?[12,18,10]:u?[8,16,6]:[10,16,8],c?[18,4]:[28,8],[0,c?.82:.65,0],u?32:64);_.rotation.x=Math.PI/2;const g=c?1.125:.75,v=c||u?-.6875:-.625;if(r(n,c?[8,8,6]:u?[6,6,8]:[8,8,8],[0,0],[0,g,v]),n==="pig"&&r(n,[4,3,1],[16,16],[0,g-.04,v-.28]),c){for(const T of[-.22,.22])r(n,[1,3,1],[22,0],[T,1.32,v]);const p=r(n,[4,6,1],[52,0],[0,.49,.22]);p.rotation.x=Math.PI/2}u&&r("wool",[6,2,8],[0,0],[0,g+.22,v+.03],32);const m=c?12:6;for(const p of[-.22,.22])for(const T of[-.36,.36])l(n,[4,m,4],[0,16],[p,m/32,T])}const d={type:n,health:4,speed:.48,direction:jt(e,t)*Math.PI*2,turnClock:1+jt(e+5,t-8)*4,attackClock:0,legs:s};o.userData.mob=d,o.position.set(e,i,t),o.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.userData.mobRoot=o)}),Ts.add(o),si.push(o)}function oh(){if(!bt||Gt!==null||Lt)return;const n=si.filter(i=>i.position.distanceTo(z.position)<15).length;if(n>=4)return;const e=["cow","pig","sheep","chicken"];let t=0;for(const i of[0,.65,-.65,1.3,-1.3,2.2,-2.2,Math.PI]){const o=z.yaw+i,s=5+t*1.5,a=Math.round(z.position.x-Math.sin(o)*s),r=Math.round(z.position.z-Math.cos(o)*s),l=hs(nn,un,a,r,z.position.y-.5,2);if(!(l===null||si.some(d=>Math.hypot(d.position.x-a,d.position.z-r)<2))&&(Sa(e[(si.length+t)%e.length],a,r,l),++t>=Math.min(2,4-n)))break}}function sh(){Ts.clear(),si=[];for(let n=un.minX+6;n<un.maxX-6;n+=13)for(let e=un.minZ+6;e<un.maxZ-6;e+=13){const t=jt(n+77,e-33);if(t<.55||Math.hypot(n-z.position.x,e-z.position.z)<8)continue;const i=Math.round(n+jt(n,e)*4),o=Math.round(e+jt(e,n)*4),s=hs(nn,un,i,o,At(i,o),4);if(s===null)continue;const a=ai(i,o),r=t>.9?"chicken":a==="forest"?"pig":a==="taiga"||a==="snowy"?"sheep":"cow";Sa(r,i,o,s)}for(const n of _c){let e=0;for(const[s,a]of[[4,0],[-4,0],[0,-4],[4,4],[-4,-4]]){const r=n.x+s,l=n.z+a,d=hs(nn,un,r,l,At(r,l),4);if(!(d===null||si.some(c=>Math.hypot(c.position.x-r,c.position.z-l)<2))&&(Sa("villager",r,l,d),++e===3))break}const t=n.x+5,i=n.z+5,o=hs(nn,un,t,i,At(t,i),4);o!==null&&Sa("iron_golem",t,i,o)}oh()}function bb(n,e){for(const t of si){const i=t.userData.mob,o=z.position.x-t.position.x,s=z.position.z-t.position.z,a=Math.hypot(o,s);if(i.turnClock-=n,i.attackClock=Math.max(0,i.attackClock-n),i.turnClock<=0&&(i.direction+=(jt(Math.floor(t.position.x+e),Math.floor(t.position.z))-.5)*2.8,i.turnClock=2+jt(Math.floor(t.position.z),Math.floor(e*3))*5),a>3){const l=t.position.x+Math.sin(i.direction)*i.speed*n,d=t.position.z+Math.cos(i.direction)*i.speed*n,c=hs(nn,un,l,d,t.position.y-.5,1);c!==null&&Math.abs(c-t.position.y)<=1?t.position.set(l,c,d):i.direction+=Math.PI,t.rotation.y=i.direction+Math.PI,i.legs.forEach((u,f)=>{u.rotation.x=Math.sin(e*7+f*Math.PI)*.48})}else i.legs.forEach(l=>{l.rotation.x=0})}}function ah(){gi.setFromCamera(new We(0,0),Yt);const n=gi.far;gi.far=3.2;const e=gi.intersectObjects(Ts.children,!0)[0];if(gi.far=n,!e)return!1;const t=e.object.userData.mobRoot;if(!t?.userData.mob)return!1;if(t.userData.mob.health-=2,ih(),t.position.add(new U(Math.sin(z.yaw+Math.PI)*.55,.18,Math.cos(z.yaw+Math.PI)*.55)),t.userData.mob.health<=0){const i=t.userData.mob.type;Ts.remove(t),si=si.filter(o=>o!==t),z.xp+=3,yt()&&i!=="villager"?(oi+=2,ot("Collected 2 food · press R to eat")):ot(`${i[0].toUpperCase()+i.slice(1)} defeated`),In()}return!0}function ri(){const n=document.querySelector("#hotbar");n.innerHTML=yi.map((e,t)=>{const i=Bt[e]||Bt.stone,o=at.get(e)||0;return`
      <button class="slot ${t===Oo?"selected":""}" data-hotbar-index="${t}" data-block="${i.id}" type="button" title="${yn(i.label)}">
        <kbd>${t+1}</kbd><i class="block-icon" style="${vc(i)}"></i><b>${yt()?o:"∞"}</b>
      </button>`}).join(""),mb()}function Na(n){Oo=(n+yi.length)%yi.length,Qt=yi[Oo],ri()}function kb(){const n=Vi;Vi=Qt,yi[Oo]=n,Qt=n,ri(),ot(`${Bt[Vi].label} moved to offhand`)}function rh(n){Bt[n]&&(yi[Oo]=n,Qt=n,ri(),Xo())}const lh=[...["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","cherry","pale_oak"].flatMap(n=>[{input:`${n}_log`,cost:1,output:`${n}_planks`,count:4},{input:`${n}_planks`,cost:3,output:`${n}_slab`,count:6},{input:`${n}_planks`,cost:6,output:`${n}_stairs`,count:4}]),{input:"stone",cost:4,output:"stone_bricks",count:4},{input:"oak_planks",cost:8,output:"chest",count:1},{input:"oak_planks",cost:4,output:"crafting_table",count:1},{input:"cobblestone",cost:8,output:"furnace",count:1},{input:"red_wool",cost:3,output:"red_bed",count:1}],Zi=document.createElement("section");Zi.className="creative-inventory";Zi.innerHTML='<div class="station-window"><div class="station-art crafting-art"><span class="station-title">Crafting</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close crafting table">×</button></div><div class="station-recipes"><p>Choose a recipe</p><div class="crafting-recipes" data-table-recipes></div></div></div>';document.querySelector("#app").append(Zi);function vb(){bc=!0,Lt=!0,ct.clear(),document.pointerLockElement&&document.exitPointerLock(),yc(),Zi.classList.add("open")}function ch(){bc=!1,Zi.classList.remove("open"),Lt=!1,Tn(),ri(),Ns()}Zi.addEventListener("click",n=>{if(n.target.closest(".station-close"))return ch();const e=n.target.closest("[data-recipe]");e&&dh(Number(e.dataset.recipe))});function yc(){const n=document.querySelector("#crafting-recipes"),e=lh.map((t,i)=>{const o=!yt()||(at.get(t.input)||0)>=t.cost;return`<button type="button" data-recipe="${i}" ${o?"":"disabled"}>${t.cost} ${yn(Bt[t.input].label)} → ${t.count} ${yn(Bt[t.output].label)}</button>`}).join("");n.innerHTML=e,Zi.querySelector("[data-table-recipes]").innerHTML=e}function dh(n){const e=lh[n];if(e){if(yt()){const t=at.get(e.input)||0;if(t<e.cost)return;at.set(e.input,t-e.cost),at.set(e.output,(at.get(e.output)||0)+e.count),Tn()}rh(e.output),yc(),ot(`Crafted ${e.count} ${Bt[e.output].label}`)}}function Xo(){const n=document.querySelector("#block-search")?.value.trim().toLowerCase()||"",e=Dl.filter(i=>(Es==="All"||i.category===Es)&&(!n||i.label.toLowerCase().includes(n)||i.id.includes(n.replaceAll(" ","_")))&&(!yt()||(at.get(i.id)||0)>0)),t=document.querySelector("#block-grid");t&&(t.innerHTML=e.length?e.map(i=>`
    <button class="inventory-slot ${i.id===Qt?"selected":""}" data-inventory-block="${i.id}" type="button" title="${yn(i.label)}">
      <i class="block-icon" style="${vc(i)}"></i>
      <span>${yn(i.label)}${yt()?` ×${at.get(i.id)}`:""}</span>
    </button>`).join(""):'<p class="inventory-empty">Mine blocks to fill your backpack.</p>',document.querySelector("#inventory-result-count").textContent=yt()?`${e.length} collected block types`:`${e.length} / ${Dl.length} blocks`)}function xb(){const n=document.querySelector("#block-categories");n.innerHTML=ng.map(e=>`
    <button class="inventory-tab ${e===Es?"selected":""}" data-block-category="${e}" type="button">${e}</button>
  `).join(""),Xo(),ri()}function Mc(){if(!bt||Lt)return;document.querySelector(".inventory-header h2").textContent=yt()?"Backpack":"Creative Inventory",document.querySelector(".inventory-footer").innerHTML=yt()?"Mine blocks to collect them · choose a slot with <kbd>1–9</kbd> · <kbd>E</kbd> to close":"Choose a hotbar slot with <kbd>1–9</kbd>, then click a block to equip it · <kbd>E</kbd> to close",Xo(),yc(),Lt=!0,ct.clear();const n=document.querySelector("#creative-inventory");n.classList.add("open"),n.setAttribute("aria-hidden","false"),document.pointerLockElement&&document.exitPointerLock(),document.querySelector("#block-search").blur()}function uh(){if(!Lt)return;Lt=!1;const n=document.querySelector("#creative-inventory");n.classList.remove("open"),n.setAttribute("aria-hidden","true"),document.querySelector("#block-search").value="",Xo(),Ns()}const fs=document.querySelector("#app"),cn={worlds:"java-menu-worlds-v1",servers:"java-menu-servers-v1",settings:"java-menu-settings-v1",parkour:"java-menu-parkour-v1"},hh={fov:72,distance:4,volume:70,bobbing:!0,highContrast:!1,blur:!0,autoJump:!1,narrator:!1,language:"en"};function ja(n,e){try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}}function Nn(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{ot("Browser storage is unavailable.")}}const Bo="play",Hi={minecraft:{name:"Minecraft",version:"Java Edition 1.21.8",linkLabel:"/?play=minecraft",movement:!0,controls:[{keys:["W","A","S","D"],label:"Move"},{keys:["SPACE"],label:"Jump"},{keys:["SHIFT"],label:"Sprint"},{keys:["E"],label:"Inventory"},{keys:["ESC"],label:"Pause menu"}]},parkour:{name:"Parkour Obby",version:"Roblox Server · Obby #1",linkLabel:"/?play=parkour",movement:!0,controls:[{keys:["W","A","S","D"],label:"Move"},{keys:["SPACE"],label:"Jump"},{keys:["SHIFT"],label:"Sprint"},{keys:["R"],label:"Respawn at checkpoint"},{keys:["ESC"],label:"Pause menu"}]}};function As(n){const e=new URL(location.href);n?e.searchParams.set(Bo,n):e.searchParams.delete(Bo);try{history.replaceState(null,"",e)}catch{}}function Ka(){const n=ja(cn.parkour,{})||{};if(!n.levels||typeof n.levels!="object"){const e={};typeof n.best=="number"&&(e[1]=n.best),n.levels=e}return typeof n.highest!="number"&&(n.highest=Object.keys(n.levels).reduce((e,t)=>Math.max(e,Number(t)||0),0)),n}function yb(n){return Ka().levels?.[n]??null}function Mb(){return Math.max(1,(Ka().highest||0)+1)}function Sb(n,e){const t=Ka(),i=t.levels[n],o=i==null||e<i;return t.levels[n]=o?e:i,t.highest=Math.max(t.highest||0,n),t.runs=(t.runs||0)+1,Nn(cn.parkour,t),Ec(),{isBest:o,best:t.levels[n],nextLevel:n+1}}function fh(){return 6+(Math.floor(Date.now()/36e5)*7+3)%19}let He={...hh,...ja(cn.settings,{})},mt=ja(cn.worlds,[{id:"first-world",name:"My World",mode:"survival",difficulty:"peaceful",cheats:!1,created:Date.now(),lastPlayed:Date.now(),edits:[],position:[0,At(0,0)+.8,0]}]);for(const n of mt)n.peacefulDefaultApplied||(n.mode!=="hardcore"&&(n.difficulty="peaceful"),n.peacefulDefaultApplied=!0);let tn=ja(cn.servers,[{id:"local-demo",name:"Local Test Server",address:"localhost:25565"}]),Gt="launcher",Za=null,en=mt[0]?.id??null,bn=tn[0]?.id??null,Fa=null,bt=!1,$d="launcher",Yd="launcher",jd="launcher",Oa="singleplayer",Nl=null,Fl=null,Kd=null,Gr=0;ti=He.distance;Yt.fov=He.fov;Yt.updateProjectionMatrix();const Zd={en:{launch:"Play",singleplayer:"Worlds",multiplayer:"Join a World",options:"Settings",quit:"Quit",splash:"Now with more blocks!"},zh:{launch:"开始游戏",singleplayer:"世界",multiplayer:"加入世界",options:"设置",quit:"退出",splash:"方块更多了！"},es:{launch:"Jugar",singleplayer:"Mundos",multiplayer:"Unirse a un mundo",options:"Ajustes",quit:"Salir",splash:"¡Ahora con más bloques!"},de:{launch:"Spielen",singleplayer:"Welten",multiplayer:"Welt beitreten",options:"Einstellungen",quit:"Beenden",splash:"Jetzt mit mehr Blöcken!"}};function Eb(){const n=Zd[He.language]||Zd.en;document.documentElement.lang=He.language;for(const e of["launch","singleplayer","multiplayer","options","quit"])for(const t of document.querySelectorAll(`#launcher-screen [data-action="${e}"]`))t.textContent=n[e];document.querySelector("#splash-text").textContent=n.splash,document.querySelectorAll("[data-lang]").forEach(e=>e.classList.toggle("selected",e.dataset.lang===He.language))}function Ja(){ti=Number(He.distance),Yt.fov=Number(He.fov),Yt.updateProjectionMatrix(),ln.fog.near=ti*bi*.7,ln.fog.far=(ti*2+1)*bi*.9,fs.classList.toggle("high-contrast",He.highContrast),fs.classList.toggle("no-blur",!He.blur),document.querySelector("#fov-slider").value=He.fov,document.querySelector("#render-distance").value=He.distance,document.querySelector("#volume-slider").value=He.volume,document.querySelector("#fov-value").textContent=He.fov,document.querySelector("#fov-label").textContent=He.fov===72?"Normal":He.fov>=100?"Quake Pro":He.fov,document.querySelector("#distance-value").textContent=`${He.distance} chunks`,document.querySelector("#volume-value").textContent=He.volume?`${He.volume}%`:"OFF",as("#bob-toggle","View Bobbing",He.bobbing),as("#high-contrast","High Contrast",He.highContrast),as("#menu-background","Menu Background Blur",He.blur),as("#auto-jump","Auto-Jump",He.autoJump),as("#narrator","Narrator",He.narrator),document.querySelector("#fullscreen-toggle").textContent=`Fullscreen: ${document.fullscreenElement?"ON":"OFF"}`,Eb(),ys=""}function as(n,e,t){const i=document.querySelector(n);i.dataset.value=String(t),i.textContent=`${e}: ${t?"ON":"OFF"}`}function qn(){Nn(cn.settings,He),Ja()}function lt(n,{focus:e=!0}={}){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),Gt=n;const t=n?document.querySelector(`#${n}-screen`):null;t?.classList.add("active"),fs.dataset.screen=n||"game",fs.classList.toggle("gameplay",!n||bt&&n==="pause"),fs.scrollTop=0,n==="launcher"&&Ec(),e&&t&&requestAnimationFrame(()=>(t.querySelector("[data-autofocus]")||t.querySelector("button:not(:disabled), input"))?.focus({preventScroll:!0})),He.narrator&&t&&Sc(t.querySelector("h1")?.textContent||n)}function ot(n){const e=document.querySelector("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(Kd),Kd=setTimeout(()=>e.classList.remove("show"),2600)}function Sc(n){"speechSynthesis"in window&&(speechSynthesis.cancel(),speechSynthesis.speak(new SpeechSynthesisUtterance(n)))}let _i;function wb(){if(He.volume)try{_i||=new AudioContext;const n=_i.createOscillator(),e=_i.createGain();n.type="square",n.frequency.setValueAtTime(170,_i.currentTime),e.gain.setValueAtTime(He.volume/2500,_i.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,_i.currentTime+.045),n.connect(e).connect(_i.destination),n.start(),n.stop(_i.currentTime+.05)}catch{}}function ph(n){return new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(new Date(n))}function _h(){return[...mt].sort((n,e)=>(e.lastPlayed||0)-(n.lastPlayed||0))[0]||null}function Ec(){const n=_h(),e=mt.length,t=document.querySelector("#game-card-title");t&&(t.textContent=Hi.minecraft.name);const i=document.querySelector("#game-launch-link");if(i){const _=`?${Bo}=minecraft`;i.setAttribute("href",_),i.textContent=`/${_}`,i.title=`Direct launch link for ${Hi.minecraft.name}`}const o=document.querySelector('[data-game-card="minecraft"] .game-version');o&&(o.textContent=Hi.minecraft.version),document.querySelector("#launcher-world-count").textContent=`${e} world${e===1?"":"s"}`,document.querySelector("#launcher-last-played").textContent=n?`Last played ${ph(n.lastPlayed)}`:"No worlds yet",document.querySelector("#launch-hint").innerHTML=n?`Continue <strong>${yn(n.name)}</strong>`:"Create your first world to start playing";const s=Ka(),a=Math.max(1,(s.highest||0)+1),r=s.levels?.[a],l=r!=null?cs(r):null,d=document.querySelector("#parkour-launch-link");if(d){const _=`?${Bo}=parkour`;d.setAttribute("href",_),d.textContent=`/${_}`,d.title=`Direct launch link for ${Hi.parkour.name}`}const c=document.querySelector("#parkour-best");c&&(c.textContent=s.highest>0?`Level ${a} · ${l?`Best ${l}`:"not cleared"}`:"No best time yet");const u=document.querySelector("#parkour-online");u&&(u.textContent=`${fh()} online`);const f=document.querySelector("#parkour-hint");f&&(f.innerHTML=s.highest>0?`Endless levels · next up <strong>Level ${a}</strong>${s.runs?` · ${s.runs} run${s.runs===1?"":"s"}`:""}`:"Endless levels · timer · best time"),Tb()}function Ol(n){return n.map(e=>`<kbd>${e}</kbd>`).join("")}function Tb(){for(const n of document.querySelectorAll("[data-game-card]")){const e=n.dataset.gameCard,t=Hi[e];let i=n.querySelector(".game-controls-row");if(!t?.movement){i?.remove();continue}i||(i=document.createElement("p"),i.className="game-controls-row",n.querySelector(".game-details")?.append(i));const o=t.controls[0],s=t.controls[1];i.innerHTML=`
      <span class="game-controls-label">Controls</span>
      <span class="game-controls-keys">${Ol(o.keys)} <span>${o.label}</span> · ${Ol(s.keys)} <span>${s.label}</span></span>
      <button class="game-link-copy game-controls-open" type="button" data-action="game-controls" data-game="${e}">View</button>`}}let Bl=null;function Ab(n){const e=Hi[n],t=document.querySelector("#game-controls-dialog");!e||!t||(Bl=n,t.dataset.game=n,document.querySelector("#game-controls-game").textContent=`${e.name} · ${e.version}`,document.querySelector("#game-controls-list").innerHTML=e.controls.map(({keys:i,label:o})=>`<div><span>${o}</span><span class="game-controls-chips">${Ol(i)}</span></div>`).join(""),t.classList.add("open"),t.setAttribute("aria-hidden","false"),document.querySelector('[data-action="close-game-controls"]')?.focus(),He.narrator&&Sc(`Controls for ${e.name}`))}function wc(){const n=document.querySelector("#game-controls-dialog");n?.classList.contains("open")&&(n.classList.remove("open"),n.setAttribute("aria-hidden","true"),Bl&&document.querySelector(`[data-game-card="${Bl}"] [data-action="game-controls"]`)?.focus())}function Rb(){const n=_h();if(!n){Oa="launcher",Ac(),lt("create-world"),ot("Create a world to start playing");return}Us(n.id)}let ps=null;function Cb(){document.querySelector('#launcher-screen [data-action="multiplayer"]')?.remove();const e=document.querySelector(".launcher-actions");e&&(e.style.gridTemplateColumns="repeat(3, minmax(0, 1fr))")}function Lb(){ps??=Tg({canvas:It,renderer:Wn,onlineCount:fh(),getBest:n=>yb(n),onFinish:(n,e)=>Sb(n,e),onExit:()=>{lt("launcher"),As(null)}}),bt=!1,Ss(),lt("parkour",{focus:!1}),As("parkour"),ps.start(Mb())}function mh(n="minecraft"){n==="parkour"?Lb():Rb()}async function Pb(n="minecraft"){const e=new URL(`?${Bo}=${n}`,location.href).href;try{await navigator.clipboard.writeText(e),ot("Launch link copied")}catch{ot(e)}}function Is(){const n=document.querySelector("#world-list");mt.length?(mt.some(e=>e.id===en)||(en=mt[0].id),n.innerHTML=mt.map(e=>`
      <button class="list-item ${e.id===en?"selected":""}" data-world-id="${e.id}" role="option" aria-selected="${e.id===en}" type="button">
        <i class="world-icon ${e.mode}"></i>
        <span><strong>${yn(e.name)}</strong><small>${ph(e.lastPlayed)}<br>${Rs(e.mode)} · ${Rs(e.difficulty)}${e.cheats?" · Cheats":""}</small></span>
        <small>v1.21.8</small>
      </button>`).join("")):(n.innerHTML='<div class="empty-state">No worlds found.<br>Create one to begin.</div>',en=null);for(const e of["play-world","edit-world","delete-world","recreate-world"])document.querySelector(`#${e}`).disabled=!en}function zo(){const n=document.querySelector("#server-list");tn.length?(tn.some(e=>e.id===bn)||(bn=tn[0].id),n.innerHTML=tn.map(e=>`
      <button class="list-item ${e.id===bn?"selected":""}" data-server-id="${e.id}" role="option" aria-selected="${e.id===bn}" type="button">
        <i class="server-icon"></i><span><strong>${yn(e.name)}</strong><small>${yn(e.address)}</small></span><i class="ping-bars">▂▄▆█</i>
      </button>`).join("")):(n.innerHTML='<div class="empty-state">Scanning for games on your local network...</div>',bn=null);for(const e of["join-server","edit-server","delete-server"])document.querySelector(`#${e}`).disabled=!bn}function yn(n){const e=document.createElement("span");return e.textContent=String(n),e.innerHTML}const Rs=n=>n.charAt(0).toUpperCase()+n.slice(1);function Us(n){const e=mt.find(s=>s.id===n);if(!e)return;Za=e.id,en=e.id,Ct.clear();for(const[s,a]of e.edits||[])Ct.set(s,a);const t=e.position||[0,At(0,0)+.8,0];z.position.fromArray(t);const i=At(Math.round(z.position.x),Math.round(z.position.z))+.8;(z.position.y>i+.4||To(z.position))&&(z.position.y=i),z.velocity.set(0,0,0),z.yaw=e.yaw||0,z.pitch=0,z.health=e.health??20,z.hunger=qa()?20:e.hunger??20,oi=e.foodCount??0,z.xp=e.xp??0,z.level=e.level??1,z.highestY=z.position.y,at.clear();for(const[s,a]of e.inventory||[])at.set(s,a);if(Vi=e.offhand||"oak_log",e.lastPlayed=Date.now(),Nn(cn.worlds,mt),bt=!0,ys="",As("minecraft"),ri(),In(),lt(null),It.focus({preventScroll:!0}),matchMedia("(pointer: coarse)").matches)return;It.requestPointerLock()?.catch(()=>ot("Use WASD to move and E for inventory."))}function Tn(){const n=mt.find(e=>e.id===Za);n&&(n.position=z.position.toArray(),n.yaw=z.yaw,n.health=z.health,n.hunger=z.hunger,n.foodCount=oi,n.xp=z.xp,n.level=z.level,n.inventory=[...at.entries()],n.offhand=Vi,n.lastPlayed=Date.now(),n.edits=[...Ct.entries()].slice(-3e3),Nn(cn.worlds,mt))}function Ns(){if(lt(null),matchMedia("(pointer: coarse)").matches)return;It.requestPointerLock()?.catch(()=>ot("Mouse capture was blocked by the browser."))}function Db(){Tn(),Ss(),bt=!1,Za=null,document.pointerLockElement&&document.exitPointerLock(),As(!1),lt("launcher"),ot("World saved")}function gh(n,e,t){const i=document.querySelector("#confirm-dialog");document.querySelector("#confirm-title").textContent=n,document.querySelector("#confirm-message").textContent=e,Nl=t,i.classList.add("open"),i.setAttribute("aria-hidden","false"),document.querySelector("#confirm-no").focus()}function Tc(n){const e=document.querySelector("#confirm-dialog");e.classList.remove("open"),e.setAttribute("aria-hidden","true"),n&&Nl?.(),Nl=null}function Ac(n=null){const e=n?`${n.name} Copy`:"New World";document.querySelector("#world-name").value=e,document.querySelector("#folder-name").textContent=e;const t=n?.mode||"survival",i=n?.difficulty||"peaceful",o=n?.cheats||!1;Cs("game-mode",t),Cs("difficulty",i),bh("allow-cheats","Allow Cheats",o)}function Cs(n,e){const t=document.querySelector(`#${n}`);t.dataset.value=e;const i=n==="game-mode"?"Game Mode":"Difficulty";if(t.textContent=`${i}: ${Rs(e)}`,n==="game-mode"){const o={survival:"Search for resources, craft, gain levels, health and hunger.",creative:"Unlimited resources, free flying and destroy blocks instantly.",hardcore:"Survival locked to Hard difficulty. One life only."};document.querySelector("#game-mode-help").textContent=o[e],e==="hardcore"&&Cs("difficulty","hard")}}function bh(n,e,t){const i=document.querySelector(`#${n}`);i.dataset.value=String(t),i.textContent=`${e}: ${t?"ON":"OFF"}`}function kh(n){if(!n.trim())return ot("Enter a server address.");document.querySelector("#connection-detail").textContent=n,lt("connecting"),clearTimeout(Fl),Fl=setTimeout(()=>{document.querySelector("#connection-title").textContent="Failed to connect to the server",document.querySelector("#connection-detail").textContent="Native Java servers cannot connect directly to a browser client.",document.querySelector('#connecting-screen [data-action="cancel-connect"]').textContent="Back to Server List"},1300)}document.addEventListener("click",n=>{const e=n.target.closest("button");if(!e||e.disabled)return;wb();const t=e.dataset.action;if(t){if(t==="launcher"&&(bt=!1,As(!1),lt("launcher")),t==="launch"&&mh(e.dataset.game),t==="copy-launch-link"&&Pb(e.dataset.game),t==="game-controls"&&Ab(e.dataset.game),t==="close-game-controls"&&wc(),t==="singleplayer"&&(Is(),lt("singleplayer")),t==="multiplayer"&&(zo(),lt("multiplayer")),t==="create-world"&&(Oa="singleplayer",Ac(),lt("create-world")),t==="create-world-cancel"&&lt(Oa),t==="add-server"&&(Fa=null,document.querySelector("#server-form-title").textContent="Add Server",document.querySelector("#server-name").value="Minecraft Server",document.querySelector("#server-address").value="",lt("server-form")),t==="direct-connect"&&lt("direct-connect"),t==="options"&&(document.querySelector("#world-difficulty").hidden=!bt,bt&&(document.querySelector("#world-difficulty").textContent=`Difficulty: ${Rs(xn().difficulty)}`),$d=Gt==="pause"||bt&&Gt==="controls"?"pause":"launcher",lt("options")),t==="options-done"&&lt($d),t==="controls"&&lt("controls"),t==="language"&&(jd=Gt==="options"?"options":"launcher",lt("language")),t==="language-done"&&lt(jd),t==="accessibility"&&(Yd=Gt==="options"?"options":Gt==="pause"?"pause":"launcher",lt("accessibility")),t==="accessibility-done"&&lt(Yd),t==="resume"&&Ns(),t==="save-quit"&&Db(),t==="quit"){try{window.close()}catch{}lt("quit")}t==="cancel-connect"&&(Ss(),clearTimeout(Fl),document.querySelector("#connection-title").textContent="Connecting to the server...",e.textContent="Cancel",zo(),lt("multiplayer"))}});document.querySelector("#world-list").addEventListener("click",n=>{const e=n.target.closest("[data-world-id]");e&&(en=e.dataset.worldId,Is())});document.querySelector("#world-list").addEventListener("dblclick",n=>{const e=n.target.closest("[data-world-id]");e&&Us(e.dataset.worldId)});document.querySelector("#play-world").addEventListener("click",()=>Us(en));document.querySelector("#edit-world").addEventListener("click",()=>{const n=mt.find(e=>e.id===en);n&&(document.querySelector("#edit-world-name").value=n.name,lt("edit-world"))});document.querySelector("#edit-world-form").addEventListener("submit",n=>{n.preventDefault();const e=mt.find(t=>t.id===en);e&&(e.name=document.querySelector("#edit-world-name").value.trim()||"World"),Nn(cn.worlds,mt),Is(),lt("singleplayer")});document.querySelector("#delete-world").addEventListener("click",()=>{const n=mt.find(e=>e.id===en);n&&gh("Delete World?",`'${n.name}' will be lost forever! (A long time!)`,()=>{mt=mt.filter(e=>e.id!==en),en=mt[0]?.id??null,Nn(cn.worlds,mt),Is()})});document.querySelector("#recreate-world").addEventListener("click",()=>{const n=mt.find(e=>e.id===en);n&&(Oa="singleplayer",Ac(n),lt("create-world"))});document.querySelector("#world-name").addEventListener("input",n=>{document.querySelector("#folder-name").textContent=n.target.value.trim().replace(/[\\/:*?"<>|]/g,"_")||"World"});document.querySelector("#game-mode").addEventListener("click",n=>{const e=["survival","creative","hardcore"];Cs("game-mode",e[(e.indexOf(n.currentTarget.dataset.value)+1)%e.length])});document.querySelector("#world-difficulty").addEventListener("click",()=>{const n=xn();if(!n)return;if(n.mode==="hardcore")return ot("Hardcore is locked to Hard difficulty.");const e=["peaceful","easy","normal","hard"];n.difficulty=e[(e.indexOf(n.difficulty)+1)%e.length],document.querySelector("#world-difficulty").textContent=`Difficulty: ${Rs(n.difficulty)}`,qa()&&(z.hunger=20),sh(),In(),Tn()});document.querySelector("#difficulty").addEventListener("click",n=>{if(document.querySelector("#game-mode").dataset.value==="hardcore")return ot("Hardcore is locked to Hard difficulty.");const e=["peaceful","easy","normal","hard"];Cs("difficulty",e[(e.indexOf(n.currentTarget.dataset.value)+1)%e.length])});document.querySelector("#allow-cheats").addEventListener("click",n=>bh("allow-cheats","Allow Cheats",n.currentTarget.dataset.value!=="true"));document.querySelector("#world-form").addEventListener("submit",n=>{n.preventDefault();const e=document.querySelector("#world-name").value.trim()||"New World",t={id:`world-${Date.now()}`,name:e,mode:document.querySelector("#game-mode").dataset.value,difficulty:document.querySelector("#difficulty").dataset.value,cheats:document.querySelector("#allow-cheats").dataset.value==="true",created:Date.now(),lastPlayed:Date.now(),edits:[],position:[0,At(0,0)+.8,0],peacefulDefaultApplied:!0};mt.unshift(t),en=t.id,Nn(cn.worlds,mt),Us(t.id)});document.querySelector("#lan-join").addEventListener("click",hb);document.querySelector("#server-list").addEventListener("click",n=>{const e=n.target.closest("[data-server-id]");e&&(bn=e.dataset.serverId,zo())});document.querySelector("#server-list").addEventListener("dblclick",()=>document.querySelector("#join-server").click());document.querySelector("#join-server").addEventListener("click",()=>{const n=tn.find(e=>e.id===bn);n&&kh(n.address)});document.querySelector("#edit-server").addEventListener("click",()=>{const n=tn.find(e=>e.id===bn);n&&(Fa=n.id,document.querySelector("#server-form-title").textContent="Edit Server Info",document.querySelector("#server-name").value=n.name,document.querySelector("#server-address").value=n.address,lt("server-form"))});document.querySelector("#delete-server").addEventListener("click",()=>{const n=tn.find(e=>e.id===bn);n&&gh("Delete Server?",`Remove '${n.name}' from your server list?`,()=>{tn=tn.filter(e=>e.id!==bn),bn=tn[0]?.id??null,Nn(cn.servers,tn),zo()})});document.querySelector("#server-form").addEventListener("submit",n=>{n.preventDefault();const e=document.querySelector("#server-name").value.trim()||"Minecraft Server",t=document.querySelector("#server-address").value.trim();if(!t)return ot("Enter a server address.");if(Fa)Object.assign(tn.find(i=>i.id===Fa),{name:e,address:t});else{const i={id:`server-${Date.now()}`,name:e,address:t};tn.push(i),bn=i.id}Nn(cn.servers,tn),zo(),lt("multiplayer")});document.querySelector("#direct-form").addEventListener("submit",n=>{n.preventDefault(),kh(document.querySelector("#direct-address").value)});document.querySelector("#fov-slider").addEventListener("input",n=>{He.fov=Number(n.target.value),qn()});document.querySelector("#render-distance").addEventListener("input",n=>{He.distance=Number(n.target.value),qn()});document.querySelector("#volume-slider").addEventListener("input",n=>{He.volume=Number(n.target.value),qn()});document.querySelector("#bob-toggle").addEventListener("click",()=>{He.bobbing=!He.bobbing,qn()});document.querySelector("#high-contrast").addEventListener("click",()=>{He.highContrast=!He.highContrast,qn()});document.querySelector("#menu-background").addEventListener("click",()=>{He.blur=!He.blur,qn()});document.querySelector("#auto-jump").addEventListener("click",()=>{He.autoJump=!He.autoJump,qn()});document.querySelector("#narrator").addEventListener("click",()=>{He.narrator=!He.narrator,qn(),He.narrator&&Sc("Narrator on")});document.querySelector("#reset-settings").addEventListener("click",()=>{He={...hh,language:He.language},qn(),ot("Settings reset")});document.querySelector("#fullscreen-toggle").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ot("Fullscreen is unavailable.")}Ja()});document.addEventListener("fullscreenchange",Ja);document.querySelector("#language-list").addEventListener("click",n=>{const e=n.target.closest("[data-lang]");e&&(He.language=e.dataset.lang,qn())});document.querySelector("#confirm-yes").addEventListener("click",()=>Tc(!0));document.querySelector("#confirm-no").addEventListener("click",()=>Tc(!1));document.querySelector("#game-controls-dialog").addEventListener("click",n=>{n.target===document.querySelector("#game-controls-dialog")&&wc()});document.querySelector("#hotbar").addEventListener("click",n=>{const e=n.target.closest("[data-hotbar-index]");e&&Na(Number(e.dataset.hotbarIndex))});document.querySelector("#block-grid").addEventListener("click",n=>{const e=n.target.closest("[data-inventory-block]");e&&rh(e.dataset.inventoryBlock)});document.querySelector("#block-categories").addEventListener("click",n=>{const e=n.target.closest("[data-block-category]");e&&(Es=e.dataset.blockCategory,document.querySelectorAll("[data-block-category]").forEach(t=>{t.classList.toggle("selected",t.dataset.blockCategory===Es)}),Xo())});document.querySelector("#block-search").addEventListener("input",Xo);document.querySelector("#crafting-recipes").addEventListener("click",n=>{const e=n.target.closest("[data-recipe]");e&&dh(Number(e.dataset.recipe))});document.querySelector("#open-inventory").addEventListener("click",Mc);document.querySelector("#close-inventory").addEventListener("click",uh);document.addEventListener("pointerlockchange",()=>{xi=document.pointerLockElement===It,ct.clear()});document.addEventListener("mousemove",n=>{!bt||Gt!==null||Lt||(z.yaw-=n.movementX*.0022,z.pitch-=n.movementY*.0022,z.pitch=Ql.clamp(z.pitch,-Math.PI/2+.02,Math.PI/2-.02))});window.addEventListener("keydown",n=>{const e={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key?.toLowerCase?.()||n.key]||{ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key];if(document.querySelector("#confirm-dialog").classList.contains("open")&&n.code==="Escape")return Tc(!1);if(document.querySelector("#game-controls-dialog")?.classList.contains("open")&&n.code==="Escape")return wc();if(Lt){if($i){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),Ju());return}if(gc){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),th());return}if(bc){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),ch());return}if(n.code==="Escape"||n.code==="KeyE"&&n.target!==document.querySelector("#block-search"))n.preventDefault(),uh();else if(n.target!==document.querySelector("#block-search")&&n.code.startsWith("Digit")){const t=Number(n.code.slice(5))-1;t>=0&&t<yi.length&&Na(t)}return}if(!(!bt||Gt!==null)){if(n.code==="Space"&&!yt()&&!n.repeat){const t=performance.now();t-Wd<320&&(z.flying=!z.flying,z.velocity.y=0,ot(z.flying?"Flying enabled · Space up · Shift down":"Flying disabled")),Wd=t}if(e){n.preventDefault(),ct.add(e);return}if(n.code==="Escape"&&!xi){n.preventDefault(),ct.clear(),lt("pause");return}if(n.code==="KeyE"){n.preventDefault(),!n.repeat&&ze&&["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(ze.type)?Da():n.repeat||Mc();return}if(n.code==="KeyF"&&ze&&["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(ze.type)){n.preventDefault(),n.repeat||Da();return}if(n.code==="KeyT"){n.preventDefault(),n.repeat||Ia(!0);return}if(n.code==="KeyR"){if(n.preventDefault(),n.repeat||!yt())return;if(!oi)return ot("No food yet. Defeat a cow, pig, sheep or chicken to collect food.");if(z.hunger>=20)return ot("Your hunger is full.");oi--,z.hunger=Math.min(20,z.hunger+6),In(),Tn(),ot("Ate food");return}if(n.code==="KeyF"){n.preventDefault(),kb();return}if(ct.add(n.code),n.code.startsWith("Digit")){const t=Number(n.code.slice(5))-1;t>=0&&t<yi.length&&Na(t)}}});window.addEventListener("keyup",n=>{ct.delete(n.code);const e={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD"}[n.key?.toLowerCase?.()];e&&ct.delete(e);const t={ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key];t&&ct.delete(t)});document.addEventListener("mousedown",n=>{n.target===It&&(It.focus({preventScroll:!0}),!xi&&bt&&Gt===null&&!Lt&&n.target===It&&It.requestPointerLock()?.catch(()=>ot("Mouse capture is unavailable in this browser.")),!(!bt||Gt!==null||Lt)&&(n.button===0&&!ah()&&Ia(!1),n.button===2&&Da()))});document.addEventListener("contextmenu",n=>{xi&&n.preventDefault()});document.addEventListener("wheel",n=>{!xi||!bt||Gt!==null||Na(Oo+(n.deltaY>0?1:-1))},{passive:!0});document.querySelectorAll("[data-move]").forEach(n=>{const e=t=>{ct.delete(n.dataset.move),n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId)};n.addEventListener("pointerdown",t=>{t.preventDefault(),n.setPointerCapture(t.pointerId),ct.add(n.dataset.move)}),n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e)});document.querySelectorAll("[data-touch]").forEach(n=>n.addEventListener("pointerdown",e=>{if(e.preventDefault(),!bt||Gt!==null||Lt)return;const t=n.dataset.touch;t==="jump"?(ct.add("Space"),n.setPointerCapture(e.pointerId)):t==="mine"?ah()||Ia(!1):t==="place"?Ia(!0):t==="use"?Da():t==="inventory"?Mc():t==="pause"?(ct.clear(),lt("pause")):t==="eat"&&(oi&&z.hunger<20?(oi--,z.hunger=Math.min(20,z.hunger+6),In(),Tn(),ot("Ate food")):ot(oi?"Your hunger is full.":"Collect food from animals first."))}));document.querySelector('[data-touch="jump"]').addEventListener("pointerup",()=>ct.delete("Space"));document.querySelector('[data-touch="jump"]').addEventListener("pointercancel",()=>ct.delete("Space"));let Bn=null;It.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&bt&&Gt===null&&!Lt&&(n.preventDefault(),Bn={id:n.pointerId,x:n.clientX,y:n.clientY},It.setPointerCapture(n.pointerId))});It.addEventListener("pointermove",n=>{!Bn||Bn.id!==n.pointerId||(z.yaw-=(n.clientX-Bn.x)*.006,z.pitch=Ql.clamp(z.pitch-(n.clientY-Bn.y)*.006,-Math.PI/2+.02,Math.PI/2-.02),Bn.x=n.clientX,Bn.y=n.clientY)});It.addEventListener("pointerup",n=>{Bn?.id===n.pointerId&&(Bn=null)});It.addEventListener("pointercancel",()=>{Bn=null});const Jd=new pp;let _s=65,Qd=0;function zl(){const n=Math.min(Jd.getDelta(),.05);if(ps?.active){ps.update(n),ps.render(),requestAnimationFrame(zl);return}const e=Jd.elapsedTime;if(Et.source&&bt&&e-Et.lastSent>.15&&(Et.lastSent=e,wo("move",{position:z.position.toArray(),yaw:z.yaw,name:Et.name})),bt&&Gt===null&&!Lt&&(fb(n),z.hurtCooldown=Math.max(0,z.hurtCooldown-n)),bt){_s+=n,bb(n,e),db(e),e>=Qd&&(oh(),Qd=e+15),yt()&&qa()?(z.hunger!==20&&(z.hunger=20,In()),z.health<20&&(z.regenClock+=n,z.regenClock>=2&&(z.health=Math.min(20,z.health+1),z.regenClock=0,In()))):bt&&Gt===null&&!Lt&&yt()&&(z.regenClock+=n,z.hunger>=18&&z.health<20&&z.regenClock>=5?(z.health=Math.min(20,z.health+1),z.hunger=Math.max(0,z.hunger-1),z.regenClock=0,In()):z.hunger===0&&z.regenClock>=4&&(Ul(1,"starvation"),z.regenClock=0)),xi&&He.bobbing&&(ct.has("KeyW")||ct.has("KeyA")||ct.has("KeyS")||ct.has("KeyD"))&&(Gr+=n*10);const g=xi&&He.bobbing?Math.sin(Gr)*.028:0;Yt.position.copy(z.position).add(new U(0,(z.sneaking?1.27:1.55)+g,0)),Yt.rotation.set(z.pitch,z.yaw,0),ws.visible=xi,Ma=Math.max(0,Ma-n*4.8);const v=Math.sin(Ma*Math.PI);Ua.rotation.x=-.42-v*1.05,Ua.rotation.z=.22-v*.32,kc.position.y=Math.sin(Gr+Math.PI)*.015}else{ws.visible=!1;const g=18;Yt.position.set(Math.cos(e*.035)*g,12.5,Math.sin(e*.035)*g),Yt.lookAt(0,3.8,0)}const t=bt?z.position:new U(0,0,0),i=Math.floor(t.x/bi),o=Math.floor(t.z/bi),s=`${i},${o},${ti}`;s!==ys&&(ys=s,Ku(i,o));const a=ai(t.x,t.z),r=Gu[a],l=new Ke(r.sky);ln.background.lerp(l,.02),ln.fog.color.lerp(new Ke(r.fog),.02);const d=document.querySelector("#biome-label");d&&(d.textContent=r.label);const u=_s%240/240*Math.PI*2,f=Ql.clamp(Math.sin(u)*.75+.45,.22,1);wn.intensity=2.4*f,Nu.intensity=1.25+f*.85,wn.position.set(t.x+Math.cos(u)*42,12+Math.sin(u)*38,t.z+20),wn.target.position.copy(t);const _=document.querySelector("#day-label");_&&(_.textContent=`Day ${Math.floor(_s/240)+1}`),bt&&Gt===null&&!Lt?mc():(Po.visible=!1,document.querySelector("#block-label").classList.remove("visible")),document.querySelector("#coordinates").textContent=`${Math.floor(z.position.x)} / ${Math.floor(z.position.y)} / ${Math.floor(z.position.z)}`,Wn.render(ln,Yt),requestAnimationFrame(zl)}window.addEventListener("resize",()=>{Yt.aspect=innerWidth/innerHeight,Yt.updateProjectionMatrix(),Wn.setSize(innerWidth,innerHeight)});Nn(cn.worlds,mt);Nn(cn.servers,tn);Ja();Is();zo();xb();Cb();Ec();Ku(0,0);zl();const Vr=new URLSearchParams(location.search).get(Bo);Vr&&Hi[Vr]?mh(Vr):requestAnimationFrame(()=>document.querySelector("#launcher-screen [data-autofocus]")?.focus({preventScroll:!0}));
