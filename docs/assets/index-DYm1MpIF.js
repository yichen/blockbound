(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const Jl="178",Ih=0,Vc=1,Uh=2,mu=1,gu=2,ri=3,Di=0,Sn=1,Hn=2,Ri=0,Go=1,Wc=2,Xc=3,qc=4,Nh=5,Yi=100,Fh=101,Oh=102,Bh=103,zh=104,Hh=200,Gh=201,Vh=202,Wh=203,il=204,ol=205,Xh=206,qh=207,$h=208,Yh=209,jh=210,Zh=211,Kh=212,Jh=213,Qh=214,sl=0,al=1,rl=2,$o=3,ll=4,cl=5,dl=6,ul=7,Ql=0,ef=1,tf=2,Ci=0,nf=1,of=2,sf=3,bu=4,af=5,rf=6,lf=7,ku=300,Yo=301,jo=302,hl=303,fl=304,Qa=306,pl=1e3,Zi=1001,_l=1002,Xt=1003,ec=1004,Qs=1005,Zn=1006,gr=1007,Ki=1008,Jn=1009,vu=1010,xu=1011,Cs=1012,tc=1013,no=1014,Kn=1015,Xs=1016,nc=1017,ic=1018,Ls=1020,yu=35902,Mu=1021,Su=1022,Vn=1023,Ps=1026,Ds=1027,oc=1028,sc=1029,wu=1030,ac=1031,rc=1033,La=33776,Pa=33777,Da=33778,Ia=33779,ml=35840,gl=35841,bl=35842,kl=35843,vl=36196,xl=37492,yl=37496,Ml=37808,Sl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Ll=37816,Pl=37817,Dl=37818,Il=37819,Ul=37820,Nl=37821,Ua=36492,Fl=36494,Ol=36495,Eu=36283,Bl=36284,zl=36285,Hl=36286,cf=3200,df=3201,lc=0,uf=1,wi="",Ft="srgb",Zo="srgb-linear",za="linear",Et="srgb",po=7680,$c=519,hf=512,ff=513,pf=514,Tu=515,_f=516,mf=517,gf=518,bf=519,Gl=35044,Yc="300 es",li=2e3,Ha=2001;class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const s=o.indexOf(t);s!==-1&&o.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let s=0,a=o.length;s<a;s++)o[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Vo=Math.PI/180,Is=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function cc(n,e){return(n%e+e)%e}function kf(n,e,t,i,o){return i+(n-e)*(o-i)/(t-e)}function vf(n,e,t){return n!==e?(t-n)/(e-n):0}function Ss(n,e,t){return(1-t)*n+t*e}function xf(n,e,t,i){return Ss(n,e,1-Math.exp(-t*i))}function yf(n,e=1){return e-Math.abs(cc(n,e*2)-e)}function Mf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Sf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ef(n,e){return n+Math.random()*(e-n)}function Tf(n){return n*(.5-Math.random())}function Af(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(n){return n*Vo}function Cf(n){return n*Is}function Lf(n){return(n&n-1)===0&&n!==0}function Pf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Df(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function If(n,e,t,i,o){const s=Math.cos,a=Math.sin,r=s(t/2),l=a(t/2),d=s((e+i)/2),c=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),_=s((i-e)/2),g=a((i-e)/2);switch(o){case"XYX":n.set(r*c,l*u,l*f,r*d);break;case"YZY":n.set(l*f,r*c,l*u,r*d);break;case"ZXZ":n.set(l*u,l*f,r*c,r*d);break;case"XZX":n.set(r*c,l*g,l*_,r*d);break;case"YXY":n.set(l*_,r*c,l*g,r*d);break;case"ZYZ":n.set(l*g,l*_,r*c,r*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Mt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dc={DEG2RAD:Vo,RAD2DEG:Is,generateUUID:ui,clamp:ht,euclideanModulo:cc,mapLinear:kf,inverseLerp:vf,lerp:Ss,damp:xf,pingpong:yf,smoothstep:Mf,smootherstep:Sf,randInt:wf,randFloat:Ef,randFloatSpread:Tf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Lf,ceilPowerOfTwo:Pf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:If,normalize:Mt,denormalize:Gn};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*o+e.x,this.y=s*o+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,s,a,r){let l=i[o+0],d=i[o+1],c=i[o+2],u=i[o+3];const f=s[a+0],_=s[a+1],g=s[a+2],b=s[a+3];if(r===0){e[t+0]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=_,e[t+2]=g,e[t+3]=b;return}if(u!==b||l!==f||d!==_||c!==g){let m=1-r;const p=l*f+d*_+c*g+u*b,E=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const N=Math.sqrt(A),D=Math.atan2(N,p*E);m=Math.sin(m*D)/N,r=Math.sin(r*D)/N}const w=r*E;if(l=l*m+f*w,d=d*m+_*w,c=c*m+g*w,u=u*m+b*w,m===1-r){const N=1/Math.sqrt(l*l+d*d+c*c+u*u);l*=N,d*=N,c*=N,u*=N}}e[t]=l,e[t+1]=d,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,o,s,a){const r=i[o],l=i[o+1],d=i[o+2],c=i[o+3],u=s[a],f=s[a+1],_=s[a+2],g=s[a+3];return e[t]=r*g+c*u+l*_-d*f,e[t+1]=l*g+c*f+d*u-r*_,e[t+2]=d*g+c*_+r*f-l*u,e[t+3]=c*g-r*u-l*f-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,d=r(i/2),c=r(o/2),u=r(s/2),f=l(i/2),_=l(o/2),g=l(s/2);switch(a){case"XYZ":this._x=f*c*u+d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u-f*_*g;break;case"YXZ":this._x=f*c*u+d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u+f*_*g;break;case"ZXY":this._x=f*c*u-d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u-f*_*g;break;case"ZYX":this._x=f*c*u-d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u+f*_*g;break;case"YZX":this._x=f*c*u+d*_*g,this._y=d*_*u+f*c*g,this._z=d*c*g-f*_*u,this._w=d*c*u-f*_*g;break;case"XZY":this._x=f*c*u-d*_*g,this._y=d*_*u-f*c*g,this._z=d*c*g+f*_*u,this._w=d*c*u+f*_*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],s=t[8],a=t[1],r=t[5],l=t[9],d=t[2],c=t[6],u=t[10],f=i+r+u;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(c-l)*_,this._y=(s-d)*_,this._z=(a-o)*_}else if(i>r&&i>u){const _=2*Math.sqrt(1+i-r-u);this._w=(c-l)/_,this._x=.25*_,this._y=(o+a)/_,this._z=(s+d)/_}else if(r>u){const _=2*Math.sqrt(1+r-i-u);this._w=(s-d)/_,this._x=(o+a)/_,this._y=.25*_,this._z=(l+c)/_}else{const _=2*Math.sqrt(1+u-i-r);this._w=(a-o)/_,this._x=(s+d)/_,this._y=(l+c)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,s=e._z,a=e._w,r=t._x,l=t._y,d=t._z,c=t._w;return this._x=i*c+a*r+o*d-s*l,this._y=o*c+a*l+s*r-i*d,this._z=s*c+a*d+i*l-o*r,this._w=a*c-i*r-o*l-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,s=this._z,a=this._w;let r=a*e._w+i*e._x+o*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=i,this._y=o,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*o+t*this._y,this._z=_*s+t*this._z,this.normalize(),this}const d=Math.sqrt(l),c=Math.atan2(d,r),u=Math.sin((1-t)*c)/d,f=Math.sin(t*c)/d;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=o*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*o,this.y=s[1]*t+s[4]*i+s[7]*o,this.z=s[2]*t+s[5]*i+s[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*o+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*o+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*o+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*o+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,s=e.x,a=e.y,r=e.z,l=e.w,d=2*(a*o-r*i),c=2*(r*t-s*o),u=2*(s*i-a*t);return this.x=t+l*d+a*u-r*c,this.y=i+l*c+r*d-s*u,this.z=o+l*u+s*c-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o,this.y=s[1]*t+s[5]*i+s[9]*o,this.z=s[2]*t+s[6]*i+s[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=o*l-s*r,this.y=s*a-i*l,this.z=i*r-o*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return br.copy(this).projectOnVector(e),this.sub(br)}reflect(e){return this.sub(br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new F,Zc=new qs;class rt{constructor(e,t,i,o,s,a,r,l,d){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,a,r,l,d)}set(e,t,i,o,s,a,r,l,d){const c=this.elements;return c[0]=e,c[1]=o,c[2]=r,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,a=i[0],r=i[3],l=i[6],d=i[1],c=i[4],u=i[7],f=i[2],_=i[5],g=i[8],b=o[0],m=o[3],p=o[6],E=o[1],A=o[4],w=o[7],N=o[2],D=o[5],C=o[8];return s[0]=a*b+r*E+l*N,s[3]=a*m+r*A+l*D,s[6]=a*p+r*w+l*C,s[1]=d*b+c*E+u*N,s[4]=d*m+c*A+u*D,s[7]=d*p+c*w+u*C,s[2]=f*b+_*E+g*N,s[5]=f*m+_*A+g*D,s[8]=f*p+_*w+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8];return t*a*c-t*r*d-i*s*c+i*r*l+o*s*d-o*a*l}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8],u=c*a-r*d,f=r*l-c*s,_=d*s-a*l,g=t*u+i*f+o*_;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(o*d-c*i)*b,e[2]=(r*i-o*a)*b,e[3]=f*b,e[4]=(c*t-o*l)*b,e[5]=(o*s-r*t)*b,e[6]=_*b,e[7]=(i*l-d*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,s,a,r){const l=Math.cos(s),d=Math.sin(s);return this.set(i*l,i*d,-i*(l*a+d*r)+a+e,-o*d,o*l,-o*(-d*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new rt;function Au(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uf(){const n=Us("canvas");return n.style.display="block",n}const Kc={};function Wo(n){n in Kc||(Kc[n]=!0,console.warn(n))}function Nf(n,e,t){return new Promise(function(i,o){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ff(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Of(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){const n={enabled:!0,workingColorSpace:Zo,spaces:{},convert:function(o,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Et&&(o.r=hi(o.r),o.g=hi(o.g),o.b=hi(o.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(o.applyMatrix3(this.spaces[s].toXYZ),o.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(o.r=Xo(o.r),o.g=Xo(o.g),o.b=Xo(o.b))),o},workingToColorSpace:function(o,s){return this.convert(o,this.workingColorSpace,s)},colorSpaceToWorking:function(o,s){return this.convert(o,s,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wi?za:this.spaces[o].transfer},getLuminanceCoefficients:function(o,s=this.workingColorSpace){return o.fromArray(this.spaces[s].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,s,a){return o.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,s){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,s)},toWorkingColorSpace:function(o,s){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zo]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const bt=Bf();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _o;class zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_o===void 0&&(_o=Us("canvas")),_o.width=e.width,_o.height=e.height;const o=_o.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=_o}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),s=o.data;for(let a=0;a<s.length;a++)s[a]=hi(s[a]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class uc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let a=0,r=o.length;a<r;a++)o[a].isDataTexture?s.push(vr(o[a].image)):s.push(vr(o[a]))}else s=vr(o);i.url=s}return t||(e.images[this.uuid]=i),i}}function vr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;const xr=new F;class ln extends ts{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Zi,o=Zi,s=Zn,a=Ki,r=Vn,l=Jn,d=ln.DEFAULT_ANISOTROPY,c=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ui(),this.name="",this.source=new uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pl:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pl:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ku;ln.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*o+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*o+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*o+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,s;const l=e.elements,d=l[0],c=l[4],u=l[8],f=l[1],_=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(d+_+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(d+1)/2,w=(_+1)/2,N=(p+1)/2,D=(c+f)/4,C=(u+b)/4,O=(g+m)/4;return A>w&&A>N?A<.01?(i=0,o=.707106781,s=.707106781):(i=Math.sqrt(A),o=D/i,s=C/i):w>N?w<.01?(i=.707106781,o=0,s=.707106781):(o=Math.sqrt(w),i=D/o,s=O/o):N<.01?(i=.707106781,o=.707106781,s=0):(s=Math.sqrt(N),i=C/s,o=O/s),this.set(i,o,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(f-c)*(f-c));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-b)/E,this.z=(f-c)/E,this.w=Math.acos((d+_+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const o={width:e,height:t,depth:i.depth},s=new ln(o);this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new uc(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class io extends Vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ru extends ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const o=e.children;for(let s=0,a=o.length;s<a;s++)this.expandByObject(o[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),ta.subVectors(this.max,ls),mo.subVectors(e.a,ls),go.subVectors(e.b,ls),bo.subVectors(e.c,ls),bi.subVectors(go,mo),ki.subVectors(bo,go),Bi.subVectors(mo,bo);let t=[0,-bi.z,bi.y,0,-ki.z,ki.y,0,-Bi.z,Bi.y,bi.z,0,-bi.x,ki.z,0,-ki.x,Bi.z,0,-Bi.x,-bi.y,bi.x,0,-ki.y,ki.x,0,-Bi.y,Bi.x,0];return!yr(t,mo,go,bo,ta)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,mo,go,bo,ta))?!1:(na.crossVectors(bi,ki),t=[na.x,na.y,na.z],yr(t,mo,go,bo,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new F,new F,new F,new F,new F,new F,new F,new F],On=new F,ea=new ro,mo=new F,go=new F,bo=new F,bi=new F,ki=new F,Bi=new F,ls=new F,ta=new F,na=new F,zi=new F;function yr(n,e,t,i,o){for(let s=0,a=n.length-3;s<=a;s+=3){zi.fromArray(n,s);const r=o.x*Math.abs(zi.x)+o.y*Math.abs(zi.y)+o.z*Math.abs(zi.z),l=e.dot(zi),d=t.dot(zi),c=i.dot(zi);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>r)return!1}return!0}const Xf=new ro,cs=new F,Mr=new F;class ns{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xf.setFromPoints(e).getCenter(i);let o=0;for(let s=0,a=e.length;s<a;s++)o=Math.max(o,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(cs,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Mr)),this.expandByPoint(cs.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new F,Sr=new F,ia=new F,vi=new F,wr=new F,oa=new F,Er=new F;class hc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Sr.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Sr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ia),r=vi.dot(this.direction),l=-vi.dot(ia),d=vi.lengthSq(),c=Math.abs(1-a*a);let u,f,_,g;if(c>0)if(u=a*l-r,f=a*r-l,g=s*c,u>=0)if(f>=-g)if(f<=g){const b=1/c;u*=b,f*=b,_=u*(u+a*f+2*r)+f*(a*u+f+2*l)+d}else f=s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;else f=-s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;else f<=-g?(u=Math.max(0,-(-a*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),_=-u*u+f*(f+2*l)+d):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+d):(u=Math.max(0,-(a*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),_=-u*u+f*(f+2*l)+d);else f=a>0?-s:s,u=Math.max(0,-(a*f+r)),_=-u*u+f*(f+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,u),o&&o.copy(Sr).addScaledVector(ia,f),_}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),o=ni.dot(ni)-i*i,s=e.radius*e.radius;if(o>s)return null;const a=Math.sqrt(s-o),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,s,a,r,l;const d=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return d>=0?(i=(e.min.x-f.x)*d,o=(e.max.x-f.x)*d):(i=(e.max.x-f.x)*d,o=(e.min.x-f.x)*d),c>=0?(s=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),i>a||s>o||((s>i||isNaN(i))&&(i=s),(a<o||isNaN(o))&&(o=a),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||r>o)||((r>i||i!==i)&&(i=r),(l<o||o!==o)&&(o=l),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,o,s){wr.subVectors(t,e),oa.subVectors(i,e),Er.crossVectors(wr,oa);let a=this.direction.dot(Er),r;if(a>0){if(o)return null;r=1}else if(a<0)r=-1,a=-a;else return null;vi.subVectors(this.origin,e);const l=r*this.direction.dot(oa.crossVectors(vi,oa));if(l<0)return null;const d=r*this.direction.dot(wr.cross(vi));if(d<0||l+d>a)return null;const c=-r*vi.dot(Er);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,o,s,a,r,l,d,c,u,f,_,g,b,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,s,a,r,l,d,c,u,f,_,g,b,m)}set(e,t,i,o,s,a,r,l,d,c,u,f,_,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=o,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=d,p[6]=c,p[10]=u,p[14]=f,p[3]=_,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/ko.setFromMatrixColumn(e,0).length(),s=1/ko.setFromMatrixColumn(e,1).length(),a=1/ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,s=e.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(o),d=Math.sin(o),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*c,_=a*u,g=r*c,b=r*u;t[0]=l*c,t[4]=-l*u,t[8]=d,t[1]=_+g*d,t[5]=f-b*d,t[9]=-r*l,t[2]=b-f*d,t[6]=g+_*d,t[10]=a*l}else if(e.order==="YXZ"){const f=l*c,_=l*u,g=d*c,b=d*u;t[0]=f+b*r,t[4]=g*r-_,t[8]=a*d,t[1]=a*u,t[5]=a*c,t[9]=-r,t[2]=_*r-g,t[6]=b+f*r,t[10]=a*l}else if(e.order==="ZXY"){const f=l*c,_=l*u,g=d*c,b=d*u;t[0]=f-b*r,t[4]=-a*u,t[8]=g+_*r,t[1]=_+g*r,t[5]=a*c,t[9]=b-f*r,t[2]=-a*d,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const f=a*c,_=a*u,g=r*c,b=r*u;t[0]=l*c,t[4]=g*d-_,t[8]=f*d+b,t[1]=l*u,t[5]=b*d+f,t[9]=_*d-g,t[2]=-d,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*d,g=r*l,b=r*d;t[0]=l*c,t[4]=b-f*u,t[8]=g*u+_,t[1]=u,t[5]=a*c,t[9]=-r*c,t[2]=-d*c,t[6]=_*u+g,t[10]=f-b*u}else if(e.order==="XZY"){const f=a*l,_=a*d,g=r*l,b=r*d;t[0]=l*c,t[4]=-u,t[8]=d*c,t[1]=f*u+b,t[5]=a*c,t[9]=_*u-g,t[2]=g*u-_,t[6]=r*c,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qf,e,$f)}lookAt(e,t,i){const o=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),xi.crossVectors(i,wn),xi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),xi.crossVectors(i,wn)),xi.normalize(),sa.crossVectors(wn,xi),o[0]=xi.x,o[4]=sa.x,o[8]=wn.x,o[1]=xi.y,o[5]=sa.y,o[9]=wn.y,o[2]=xi.z,o[6]=sa.z,o[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,s=this.elements,a=i[0],r=i[4],l=i[8],d=i[12],c=i[1],u=i[5],f=i[9],_=i[13],g=i[2],b=i[6],m=i[10],p=i[14],E=i[3],A=i[7],w=i[11],N=i[15],D=o[0],C=o[4],O=o[8],S=o[12],M=o[1],P=o[5],q=o[9],W=o[13],Z=o[2],J=o[6],K=o[10],B=o[14],V=o[3],ue=o[7],_e=o[11],Ae=o[15];return s[0]=a*D+r*M+l*Z+d*V,s[4]=a*C+r*P+l*J+d*ue,s[8]=a*O+r*q+l*K+d*_e,s[12]=a*S+r*W+l*B+d*Ae,s[1]=c*D+u*M+f*Z+_*V,s[5]=c*C+u*P+f*J+_*ue,s[9]=c*O+u*q+f*K+_*_e,s[13]=c*S+u*W+f*B+_*Ae,s[2]=g*D+b*M+m*Z+p*V,s[6]=g*C+b*P+m*J+p*ue,s[10]=g*O+b*q+m*K+p*_e,s[14]=g*S+b*W+m*B+p*Ae,s[3]=E*D+A*M+w*Z+N*V,s[7]=E*C+A*P+w*J+N*ue,s[11]=E*O+A*q+w*K+N*_e,s[15]=E*S+A*W+w*B+N*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],s=e[12],a=e[1],r=e[5],l=e[9],d=e[13],c=e[2],u=e[6],f=e[10],_=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+s*l*u-o*d*u-s*r*f+i*d*f+o*r*_-i*l*_)+b*(+t*l*_-t*d*f+s*a*f-o*a*_+o*d*c-s*l*c)+m*(+t*d*u-t*r*_-s*a*u+i*a*_+s*r*c-i*d*c)+p*(-o*r*c-t*l*u+t*r*f+o*a*u-i*a*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],s=e[3],a=e[4],r=e[5],l=e[6],d=e[7],c=e[8],u=e[9],f=e[10],_=e[11],g=e[12],b=e[13],m=e[14],p=e[15],E=u*m*d-b*f*d+b*l*_-r*m*_-u*l*p+r*f*p,A=g*f*d-c*m*d-g*l*_+a*m*_+c*l*p-a*f*p,w=c*b*d-g*u*d+g*r*_-a*b*_-c*r*p+a*u*p,N=g*u*l-c*b*l-g*r*f+a*b*f+c*r*m-a*u*m,D=t*E+i*A+o*w+s*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=E*C,e[1]=(b*f*s-u*m*s-b*o*_+i*m*_+u*o*p-i*f*p)*C,e[2]=(r*m*s-b*l*s+b*o*d-i*m*d-r*o*p+i*l*p)*C,e[3]=(u*l*s-r*f*s-u*o*d+i*f*d+r*o*_-i*l*_)*C,e[4]=A*C,e[5]=(c*m*s-g*f*s+g*o*_-t*m*_-c*o*p+t*f*p)*C,e[6]=(g*l*s-a*m*s-g*o*d+t*m*d+a*o*p-t*l*p)*C,e[7]=(a*f*s-c*l*s+c*o*d-t*f*d-a*o*_+t*l*_)*C,e[8]=w*C,e[9]=(g*u*s-c*b*s-g*i*_+t*b*_+c*i*p-t*u*p)*C,e[10]=(a*b*s-g*r*s+g*i*d-t*b*d-a*i*p+t*r*p)*C,e[11]=(c*r*s-a*u*s-c*i*d+t*u*d+a*i*_-t*r*_)*C,e[12]=N*C,e[13]=(c*b*o-g*u*o+g*i*f-t*b*f-c*i*m+t*u*m)*C,e[14]=(g*r*o-a*b*o-g*i*l+t*b*l+a*i*m-t*r*m)*C,e[15]=(a*u*o-c*r*o+c*i*l-t*u*l-a*i*f+t*r*f)*C,this}scale(e){const t=this.elements,i=e.x,o=e.y,s=e.z;return t[0]*=i,t[4]*=o,t[8]*=s,t[1]*=i,t[5]*=o,t[9]*=s,t[2]*=i,t[6]*=o,t[10]*=s,t[3]*=i,t[7]*=o,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),s=1-i,a=e.x,r=e.y,l=e.z,d=s*a,c=s*r;return this.set(d*a+i,d*r-o*l,d*l+o*r,0,d*r+o*l,c*r+i,c*l-o*a,0,d*l-o*r,c*l+o*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,s,a){return this.set(1,i,s,0,e,1,a,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,d=s+s,c=a+a,u=r+r,f=s*d,_=s*c,g=s*u,b=a*c,m=a*u,p=r*u,E=l*d,A=l*c,w=l*u,N=i.x,D=i.y,C=i.z;return o[0]=(1-(b+p))*N,o[1]=(_+w)*N,o[2]=(g-A)*N,o[3]=0,o[4]=(_-w)*D,o[5]=(1-(f+p))*D,o[6]=(m+E)*D,o[7]=0,o[8]=(g+A)*C,o[9]=(m-E)*C,o[10]=(1-(f+b))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let s=ko.set(o[0],o[1],o[2]).length();const a=ko.set(o[4],o[5],o[6]).length(),r=ko.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),e.x=o[12],e.y=o[13],e.z=o[14],Bn.copy(this);const d=1/s,c=1/a,u=1/r;return Bn.elements[0]*=d,Bn.elements[1]*=d,Bn.elements[2]*=d,Bn.elements[4]*=c,Bn.elements[5]*=c,Bn.elements[6]*=c,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=r,this}makePerspective(e,t,i,o,s,a,r=li){const l=this.elements,d=2*s/(t-e),c=2*s/(i-o),u=(t+e)/(t-e),f=(i+o)/(i-o);let _,g;if(r===li)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===Ha)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,o,s,a,r=li){const l=this.elements,d=1/(t-e),c=1/(i-o),u=1/(a-s),f=(t+e)*d,_=(i+o)*c;let g,b;if(r===li)g=(a+s)*u,b=-2*u;else if(r===Ha)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ko=new F,Bn=new wt,qf=new F(0,0,0),$f=new F(1,1,1),xi=new F,sa=new F,wn=new F,ed=new wt,td=new qs;class Xn{constructor(e=0,t=0,i=0,o=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,s=o[0],a=o[4],r=o[8],l=o[1],d=o[5],c=o[9],u=o[2],f=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(ht(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-c,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(r,_),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,_));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-c,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const nd=new F,vo=new qs,ii=new wt,aa=new F,ds=new F,jf=new F,Zf=new qs,id=new F(1,0,0),od=new F(0,1,0),sd=new F(0,0,1),ad={type:"added"},Kf={type:"removed"},xo={type:"childadded",child:null},Tr={type:"childremoved",child:null};class qt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new F,t=new Xn,i=new qs,o=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new wt},normalMatrix:{value:new rt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?aa.copy(e):aa.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ds,aa,this.up):ii.lookAt(aa,ds,this.up),this.quaternion.setFromRotationMatrix(ii),o&&(ii.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(ii),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ad),xo.child=e,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ad),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(r=>({...r})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const u=l[d];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,d=this.material.length;l<d;l++)r.push(s(e.materials,this.material[l]));o.material=r}else o.material=s(e.materials,this.material);if(this.children.length>0){o.children=[];for(let r=0;r<this.children.length;r++)o.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];o.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),d=a(e.textures),c=a(e.images),u=a(e.shapes),f=a(e.skeletons),_=a(e.animations),g=a(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=o,i;function a(r){const l=[];for(const d in r){const c=r[d];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}qt.DEFAULT_UP=new F(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new F,oi=new F,Ar=new F,si=new F,yo=new F,Mo=new F,rd=new F,Rr=new F,Cr=new F,Lr=new F,Pr=new Ot,Dr=new Ot,Ir=new Ot;class An{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),zn.subVectors(e,t),o.cross(zn);const s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(e,t,i,o,s){zn.subVectors(o,t),oi.subVectors(i,t),Ar.subVectors(e,t);const a=zn.dot(zn),r=zn.dot(oi),l=zn.dot(Ar),d=oi.dot(oi),c=oi.dot(Ar),u=a*d-r*r;if(u===0)return s.set(0,0,0),null;const f=1/u,_=(d*l-r*c)*f,g=(a*c-r*l)*f;return s.set(1-_-g,g,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,o,s,a,r,l){return this.getBarycoord(e,t,i,o,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(r,si.z),l)}static getInterpolatedAttribute(e,t,i,o,s,a){return Pr.setScalar(0),Dr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(e,t),Dr.fromBufferAttribute(e,i),Ir.fromBufferAttribute(e,o),a.setScalar(0),a.addScaledVector(Pr,s.x),a.addScaledVector(Dr,s.y),a.addScaledVector(Ir,s.z),a}static isFrontFacing(e,t,i,o){return zn.subVectors(i,t),oi.subVectors(e,t),zn.cross(oi).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),zn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,o,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,s=this.c;let a,r;yo.subVectors(o,i),Mo.subVectors(s,i),Rr.subVectors(e,i);const l=yo.dot(Rr),d=Mo.dot(Rr);if(l<=0&&d<=0)return t.copy(i);Cr.subVectors(e,o);const c=yo.dot(Cr),u=Mo.dot(Cr);if(c>=0&&u<=c)return t.copy(o);const f=l*u-c*d;if(f<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(yo,a);Lr.subVectors(e,s);const _=yo.dot(Lr),g=Mo.dot(Lr);if(g>=0&&_<=g)return t.copy(s);const b=_*d-l*g;if(b<=0&&d>=0&&g<=0)return r=d/(d-g),t.copy(i).addScaledVector(Mo,r);const m=c*g-_*u;if(m<=0&&u-c>=0&&_-g>=0)return rd.subVectors(s,o),r=(u-c)/(u-c+(_-g)),t.copy(o).addScaledVector(rd,r);const p=1/(m+b+f);return a=b*p,r=f*p,t.copy(i).addScaledVector(yo,a).addScaledVector(Mo,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Ur(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=bt.workingColorSpace){if(e=cc(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ur(a,s,e+1/3),this.g=Ur(a,s,e),this.b=Ur(a,s,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ft){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=o[1],r=o[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=o[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=Cu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return bt.workingToColorSpace(un.copy(this),e),Math.round(ht(un.r*255,0,255))*65536+Math.round(ht(un.g*255,0,255))*256+Math.round(ht(un.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(un.copy(this),t);const i=un.r,o=un.g,s=un.b,a=Math.max(i,o,s),r=Math.min(i,o,s);let l,d;const c=(r+a)/2;if(r===a)l=0,d=0;else{const u=a-r;switch(d=c<=.5?u/(a+r):u/(2-a-r),a){case i:l=(o-s)/u+(o<s?6:0);break;case o:l=(s-i)/u+2;break;case s:l=(i-o)/u+4;break}l/=6}return e.h=l,e.s=d,e.l=c,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Ft){bt.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,o=un.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ra);const i=Ss(yi.h,ra.h,t),o=Ss(yi.s,ra.s,t),s=Ss(yi.l,ra.l,t);return this.setHSL(i,o,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*o,this.g=s[1]*t+s[4]*i+s[7]*o,this.b=s[2]*t+s[5]*i+s[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new st;st.NAMES=Cu;let Jf=0;class Fi extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Go,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=ol,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Go&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(i.stencilFail=this.stencilFail),this.stencilZFail!==po&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=o(e.textures),a=o(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let s=0;s!==o;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new F,la=new Qe;let Qf=0;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),o=Mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),o=Mt(o,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class Lu extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pu extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ep=0;const Dn=new wt,Nr=new qt,So=new F,En=new ro,us=new ro,Kt=new F;class Pn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Pu:Lu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,s=e.length;o<s;o++){const a=e[o];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const s=e[o];t.setXYZ(o,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];us.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(En.min,us.min),En.expandByPoint(Kt),Kt.addVectors(En.max,us.max),En.expandByPoint(Kt)):(En.expandByPoint(us.min),En.expandByPoint(us.max))}En.getCenter(i);let o=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),o=Math.max(o,i.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let d=0,c=r.count;d<c;d++)Kt.fromBufferAttribute(r,d),l&&(So.fromBufferAttribute(e,d),Kt.add(So)),o=Math.max(o,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let O=0;O<i.count;O++)r[O]=new F,l[O]=new F;const d=new F,c=new F,u=new F,f=new Qe,_=new Qe,g=new Qe,b=new F,m=new F;function p(O,S,M){d.fromBufferAttribute(i,O),c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,O),_.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),c.sub(d),u.sub(d),_.sub(f),g.sub(f);const P=1/(_.x*g.y-g.x*_.y);isFinite(P)&&(b.copy(c).multiplyScalar(g.y).addScaledVector(u,-_.y).multiplyScalar(P),m.copy(u).multiplyScalar(_.x).addScaledVector(c,-g.x).multiplyScalar(P),r[O].add(b),r[S].add(b),r[M].add(b),l[O].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,S=E.length;O<S;++O){const M=E[O],P=M.start,q=M.count;for(let W=P,Z=P+q;W<Z;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const A=new F,w=new F,N=new F,D=new F;function C(O){N.fromBufferAttribute(o,O),D.copy(N);const S=r[O];A.copy(S),A.sub(N.multiplyScalar(N.dot(S))).normalize(),w.crossVectors(D,S);const P=w.dot(l[O])<0?-1:1;a.setXYZW(O,A.x,A.y,A.z,P)}for(let O=0,S=E.length;O<S;++O){const M=E[O],P=M.start,q=M.count;for(let W=P,Z=P+q;W<Z;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const o=new F,s=new F,a=new F,r=new F,l=new F,d=new F,c=new F,u=new F;if(e)for(let f=0,_=e.count;f<_;f+=3){const g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);o.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),c.subVectors(a,s),u.subVectors(o,s),c.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),d.fromBufferAttribute(i,m),r.add(c),l.add(c),d.add(c),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let f=0,_=t.count;f<_;f+=3)o.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,s),u.subVectors(o,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(r,l){const d=r.array,c=r.itemSize,u=r.normalized,f=new d.constructor(l.length*c);let _=0,g=0;for(let b=0,m=l.length;b<m;b++){r.isInterleavedBufferAttribute?_=l[b]*r.data.stride+r.offset:_=l[b]*c;for(let p=0;p<c;p++)f[g++]=d[_++]}return new Rn(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,o=this.attributes;for(const r in o){const l=o[r],d=e(l,i);t.setAttribute(r,d)}const s=this.morphAttributes;for(const r in s){const l=[],d=s[r];for(let c=0,u=d.length;c<u;c++){const f=d[c],_=e(f,i);l.push(_)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const d=a[r];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(e[d]=l[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const d=i[l];e.data.attributes[l]=d.toJSON(e.data)}const o={};let s=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let u=0,f=d.length;u<f;u++){const _=d[u];c.push(_.toJSON(e.data))}c.length>0&&(o[l]=c,s=!0)}s&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const d in o){const c=o[d];this.setAttribute(d,c.clone(t))}const s=e.morphAttributes;for(const d in s){const c=[],u=s[d];for(let f=0,_=u.length;f<_;f++)c.push(u[f].clone(t));this.morphAttributes[d]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,c=a.length;d<c;d++){const u=a[d];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ld=new wt,Hi=new hc,ca=new ns,cd=new F,da=new F,ua=new F,ha=new F,Fr=new F,fa=new F,dd=new F,pa=new F;class St extends qt{constructor(e=new Pn,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const r=this.morphTargetInfluences;if(s&&r){fa.set(0,0,0);for(let l=0,d=s.length;l<d;l++){const c=r[l],u=s[l];c!==0&&(Fr.fromBufferAttribute(u,e),a?fa.addScaledVector(Fr,c):fa.addScaledVector(Fr.sub(t),c))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(ca.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(ca,cd)===null||Hi.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(ld),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let o;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,d=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,_=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,_.start),A=Math.min(r.count,Math.min(m.start+m.count,_.start+_.count));for(let w=E,N=A;w<N;w+=3){const D=r.getX(w),C=r.getX(w+1),O=r.getX(w+2);o=_a(this,p,e,i,d,c,u,D,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),b=Math.min(r.count,_.start+_.count);for(let m=g,p=b;m<p;m+=3){const E=r.getX(m),A=r.getX(m+1),w=r.getX(m+2);o=_a(this,a,e,i,d,c,u,E,A,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=a[m.materialIndex],E=Math.max(m.start,_.start),A=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let w=E,N=A;w<N;w+=3){const D=w,C=w+1,O=w+2;o=_a(this,p,e,i,d,c,u,D,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let m=g,p=b;m<p;m+=3){const E=m,A=m+1,w=m+2;o=_a(this,a,e,i,d,c,u,E,A,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function tp(n,e,t,i,o,s,a,r){let l;if(e.side===Sn?l=i.intersectTriangle(a,s,o,!0,r):l=i.intersectTriangle(o,s,a,e.side===Di,r),l===null)return null;pa.copy(r),pa.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(pa);return d<t.near||d>t.far?null:{distance:d,point:pa.clone(),object:n}}function _a(n,e,t,i,o,s,a,r,l,d){n.getVertexPosition(r,da),n.getVertexPosition(l,ua),n.getVertexPosition(d,ha);const c=tp(n,e,t,i,da,ua,ha,dd);if(c){const u=new F;An.getBarycoord(dd,da,ua,ha,u),o&&(c.uv=An.getInterpolatedAttribute(o,r,l,d,u,new Qe)),s&&(c.uv1=An.getInterpolatedAttribute(s,r,l,d,u,new Qe)),a&&(c.normal=An.getInterpolatedAttribute(a,r,l,d,u,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:r,b:l,c:d,normal:new F,materialIndex:0};An.getNormal(da,ua,ha,f.normal),c.face=f,c.barycoord=u}return c}class Ct extends Pn{constructor(e=1,t=1,i=1,o=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:s,depthSegments:a};const r=this;o=Math.floor(o),s=Math.floor(s),a=Math.floor(a);const l=[],d=[],c=[],u=[];let f=0,_=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,o,a,2),g("x","z","y",1,-1,e,i,-t,o,a,3),g("x","y","z",1,-1,e,t,i,o,s,4),g("x","y","z",-1,-1,e,t,-i,o,s,5),this.setIndex(l),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(c,3)),this.setAttribute("uv",new mn(u,2));function g(b,m,p,E,A,w,N,D,C,O,S){const M=w/C,P=N/O,q=w/2,W=N/2,Z=D/2,J=C+1,K=O+1;let B=0,V=0;const ue=new F;for(let _e=0;_e<K;_e++){const Ae=_e*P-W;for(let Oe=0;Oe<J;Oe++){const Je=Oe*M-q;ue[b]=Je*E,ue[m]=Ae*A,ue[p]=Z,d.push(ue.x,ue.y,ue.z),ue[b]=0,ue[m]=0,ue[p]=D>0?1:-1,c.push(ue.x,ue.y,ue.z),u.push(Oe/C),u.push(1-_e/O),B+=1}}for(let _e=0;_e<O;_e++)for(let Ae=0;Ae<C;Ae++){const Oe=f+Ae+J*_e,Je=f+Ae+J*(_e+1),j=f+(Ae+1)+J*(_e+1),re=f+(Ae+1)+J*_e;l.push(Oe,Je,re),l.push(Je,j,re),V+=6}r.addGroup(_,V,S),_+=V,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function kn(n){const e={};for(let t=0;t<n.length;t++){const i=Ko(n[t]);for(const o in i)e[o]=i[o]}return e}function np(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Du(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const ip={clone:Ko,merge:kn};var op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const a=this.uniforms[o].value;a&&a.isTexture?t.uniforms[o]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[o]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[o]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[o]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[o]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[o]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[o]={type:"m4",value:a.toArray()}:t.uniforms[o]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Iu extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new F,ud=new Qe,hd=new Qe;class Mn extends Iu{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,ud,hd),t.subVectors(hd,ud)}setViewOffset(e,t,i,o,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,s=-.5*o;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,d=a.fullHeight;s+=a.offsetX*o/l,t-=a.offsetY*i/d,o*=a.width/l,i*=a.height/d}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wo=-90,Eo=1;class ap extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Mn(wo,Eo,e,t);o.layers=this.layers,this.add(o);const s=new Mn(wo,Eo,e,t);s.layers=this.layers,this.add(s);const a=new Mn(wo,Eo,e,t);a.layers=this.layers,this.add(a);const r=new Mn(wo,Eo,e,t);r.layers=this.layers,this.add(r);const l=new Mn(wo,Eo,e,t);l.layers=this.layers,this.add(l);const d=new Mn(wo,Eo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,s,a,r,l]=t;for(const d of t)this.remove(d);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,d,c]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,s),e.setRenderTarget(i,1,o),e.render(t,a),e.setRenderTarget(i,2,o),e.render(t,r),e.setRenderTarget(i,3,o),e.render(t,l),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,o),e.render(t,c),e.setRenderTarget(u,f,_),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uu extends ln{constructor(e=[],t=Yo,i,o,s,a,r,l,d,c){super(e,t,i,o,s,a,r,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends io{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Uu(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ct(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ri});s.uniforms.tEquirect.value=t;const a=new St(o,s),r=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Zn),new ap(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,o);e.setRenderTarget(s)}}class rn extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,s=null,a=null;const r=this._targetRay,l=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),p=this._getHandJoint(d,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=d.joints["index-finger-tip"],u=d.joints["thumb-tip"],f=c.position.distanceTo(u.position),_=.02,g=.005;d.inputState.pinching&&f>_+g?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&f<=_-g&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&s!==null&&(o=s),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return r!==null&&(r.visible=o!==null),l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $s{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=i}clone(){return new $s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pc extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,s=this.stride;o<s;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new F;class Ga{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),o=Mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),i=Mt(i,this.array),o=Mt(o,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[o+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _c extends Fi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const hs=new F,Ao=new F,Ro=new F,Co=new Qe,fs=new Qe,Nu=new wt,ma=new F,ps=new F,ga=new F,fd=new Qe,Br=new Qe,pd=new Qe;class Fu extends qt{constructor(e=new _c){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new Pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cp(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new Ga(i,3,0,!1)),To.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=To,this.material=e,this.center=new Qe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),Nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ro.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Ro.z);const i=this.material.rotation;let o,s;i!==0&&(s=Math.cos(i),o=Math.sin(i));const a=this.center;ba(ma.set(-.5,-.5,0),Ro,a,Ao,o,s),ba(ps.set(.5,-.5,0),Ro,a,Ao,o,s),ba(ga.set(.5,.5,0),Ro,a,Ao,o,s),fd.set(0,0),Br.set(1,0),pd.set(1,1);let r=e.ray.intersectTriangle(ma,ps,ga,!1,hs);if(r===null&&(ba(ps.set(-.5,.5,0),Ro,a,Ao,o,s),Br.set(0,1),r=e.ray.intersectTriangle(ma,ga,ps,!1,hs),r===null))return;const l=e.ray.origin.distanceTo(hs);l<e.near||l>e.far||t.push({distance:l,point:hs.clone(),uv:An.getInterpolation(hs,ma,ps,ga,fd,Br,pd,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ba(n,e,t,i,o,s){Co.subVectors(n,t).addScalar(.5).multiply(i),o!==void 0?(fs.x=s*Co.x-o*Co.y,fs.y=o*Co.x+s*Co.y):fs.copy(Co),n.copy(e),n.x+=fs.x,n.y+=fs.y,n.applyMatrix4(Nu)}class dp extends ln{constructor(e=null,t=1,i=1,o,s,a,r,l,d=Xt,c=Xt,u,f){super(null,a,r,l,d,c,o,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _d extends Rn{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lo=new wt,md=new wt,ka=[],gd=new ro,up=new wt,_s=new St,ms=new ns;class hp extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _d(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,up)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ro),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lo),gd.copy(e.boundingBox).applyMatrix4(Lo),this.boundingBox.union(gd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Lo),ms.copy(e.boundingSphere).applyMatrix4(Lo),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let r=0;r<i.length;r++)i[r]=o[a+r]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(i),e.ray.intersectsSphere(ms)!==!1))for(let s=0;s<o;s++){this.getMatrixAt(s,Lo),md.multiplyMatrices(i,Lo),_s.matrixWorld=md,_s.raycast(e,ka);for(let a=0,r=ka.length;a<r;a++){const l=ka[a];l.instanceId=s,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new dp(new Float32Array(o*this.count),o,this.count,oc,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let d=0;d<i.length;d++)a+=i[d];const r=this.geometry.morphTargetsRelative?1:1-a,l=o*e;s[l]=r,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zr=new F,fp=new F,pp=new rt;class qi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=zr.subVectors(i,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zr),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pp.getNormalMatrix(e),o=this.coplanarPoint(zr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ns,_p=new Qe(.5,.5),va=new F;class mc{constructor(e=new qi,t=new qi,i=new qi,o=new qi,s=new qi,a=new qi){this.planes=[e,t,i,o,s,a]}set(e,t,i,o,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(o),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){const i=this.planes,o=e.elements,s=o[0],a=o[1],r=o[2],l=o[3],d=o[4],c=o[5],u=o[6],f=o[7],_=o[8],g=o[9],b=o[10],m=o[11],p=o[12],E=o[13],A=o[14],w=o[15];if(i[0].setComponents(l-s,f-d,m-_,w-p).normalize(),i[1].setComponents(l+s,f+d,m+_,w+p).normalize(),i[2].setComponents(l+a,f+c,m+g,w+E).normalize(),i[3].setComponents(l-a,f-c,m-g,w-E).normalize(),i[4].setComponents(l-r,f-u,m-b,w-A).normalize(),t===li)i[5].setComponents(l+r,f+u,m+b,w+A).normalize();else if(t===Ha)i[5].setComponents(r,u,b,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const t=_p.distanceTo(e.center);return Gi.radius=.7071067811865476+t,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(va.x=o.normal.x>0?e.max.x:e.min.x,va.y=o.normal.y>0?e.max.y:e.min.y,va.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ou extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new F,Wa=new F,bd=new wt,gs=new hc,xa=new ns,Hr=new F,kd=new F;class mp extends qt{constructor(e=new Pn,t=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,s=t.count;o<s;o++)Va.fromBufferAttribute(t,o-1),Wa.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xa.copy(i.boundingSphere),xa.applyMatrix4(o),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;bd.copy(o).invert(),gs.copy(e.ray).applyMatrix4(bd);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,d=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const _=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let b=_,m=g-1;b<m;b+=d){const p=c.getX(b),E=c.getX(b+1),A=ya(this,e,gs,l,p,E,b);A&&t.push(A)}if(this.isLineLoop){const b=c.getX(g-1),m=c.getX(_),p=ya(this,e,gs,l,b,m,g-1);p&&t.push(p)}}else{const _=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=_,m=g-1;b<m;b+=d){const p=ya(this,e,gs,l,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=ya(this,e,gs,l,g-1,_,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=o.length;s<a;s++){const r=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function ya(n,e,t,i,o,s,a){const r=n.geometry.attributes.position;if(Va.fromBufferAttribute(r,o),Wa.fromBufferAttribute(r,s),t.distanceSqToSegment(Va,Wa,Hr,kd)>i)return;Hr.applyMatrix4(n.matrixWorld);const d=e.ray.origin.distanceTo(Hr);if(!(d<e.near||d>e.far))return{distance:d,point:kd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const vd=new F,xd=new F;class gp extends mp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,s=t.count;o<s;o+=2)vd.fromBufferAttribute(t,o),xd.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+vd.distanceTo(xd);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class os extends ln{constructor(e,t,i,o,s,a,r,l,d){super(e,t,i,o,s,a,r,l,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bu extends ln{constructor(e,t,i=no,o,s,a,r=Xt,l=Xt,d,c=Ps,u=1){if(c!==Ps&&c!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,o,s,a,r,l,c,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class er extends Pn{constructor(e=1,t=1,i=1,o=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const d=this;o=Math.floor(o),s=Math.floor(s);const c=[],u=[],f=[],_=[];let g=0;const b=[],m=i/2;let p=0;E(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new mn(u,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(_,2));function E(){const w=new F,N=new F;let D=0;const C=(t-e)/i;for(let O=0;O<=s;O++){const S=[],M=O/s,P=M*(t-e)+e;for(let q=0;q<=o;q++){const W=q/o,Z=W*l+r,J=Math.sin(Z),K=Math.cos(Z);N.x=P*J,N.y=-M*i+m,N.z=P*K,u.push(N.x,N.y,N.z),w.set(J,C,K).normalize(),f.push(w.x,w.y,w.z),_.push(W,1-M),S.push(g++)}b.push(S)}for(let O=0;O<o;O++)for(let S=0;S<s;S++){const M=b[S][O],P=b[S+1][O],q=b[S+1][O+1],W=b[S][O+1];(e>0||S!==0)&&(c.push(M,P,W),D+=3),(t>0||S!==s-1)&&(c.push(P,q,W),D+=3)}d.addGroup(p,D,0),p+=D}function A(w){const N=g,D=new Qe,C=new F;let O=0;const S=w===!0?e:t,M=w===!0?1:-1;for(let q=1;q<=o;q++)u.push(0,m*M,0),f.push(0,M,0),_.push(.5,.5),g++;const P=g;for(let q=0;q<=o;q++){const Z=q/o*l+r,J=Math.cos(Z),K=Math.sin(Z);C.x=S*K,C.y=m*M,C.z=S*J,u.push(C.x,C.y,C.z),f.push(0,M,0),D.x=J*.5+.5,D.y=K*.5*M+.5,_.push(D.x,D.y),g++}for(let q=0;q<o;q++){const W=N+q,Z=P+q;w===!0?c.push(Z,Z+1,W):c.push(Z+1,Z,W),O+=3}d.addGroup(p,O,w===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gc extends er{constructor(e=1,t=1,i=32,o=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,i,o,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new gc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ma=new F,Sa=new F,Gr=new F,wa=new An;class bp extends Pn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),s=Math.cos(Vo*t),a=e.getIndex(),r=e.getAttribute("position"),l=a?a.count:r.count,d=[0,0,0],c=["a","b","c"],u=new Array(3),f={},_=[];for(let g=0;g<l;g+=3){a?(d[0]=a.getX(g),d[1]=a.getX(g+1),d[2]=a.getX(g+2)):(d[0]=g,d[1]=g+1,d[2]=g+2);const{a:b,b:m,c:p}=wa;if(b.fromBufferAttribute(r,d[0]),m.fromBufferAttribute(r,d[1]),p.fromBufferAttribute(r,d[2]),wa.getNormal(Gr),u[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,u[1]=`${Math.round(m.x*o)},${Math.round(m.y*o)},${Math.round(m.z*o)}`,u[2]=`${Math.round(p.x*o)},${Math.round(p.y*o)},${Math.round(p.z*o)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const A=(E+1)%3,w=u[E],N=u[A],D=wa[c[E]],C=wa[c[A]],O=`${w}_${N}`,S=`${N}_${w}`;S in f&&f[S]?(Gr.dot(f[S].normal)<=s&&(_.push(D.x,D.y,D.z),_.push(C.x,C.y,C.z)),f[S]=null):O in f||(f[O]={index0:d[E],index1:d[A],normal:Gr.clone()})}}for(const g in f)if(f[g]){const{index0:b,index1:m}=f[g];Ma.fromBufferAttribute(r,b),Sa.fromBufferAttribute(r,m),_.push(Ma.x,Ma.y,Ma.z),_.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new mn(_,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ss extends Pn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const s=e/2,a=t/2,r=Math.floor(i),l=Math.floor(o),d=r+1,c=l+1,u=e/r,f=t/l,_=[],g=[],b=[],m=[];for(let p=0;p<c;p++){const E=p*f-a;for(let A=0;A<d;A++){const w=A*u-s;g.push(w,-E,0),b.push(0,0,1),m.push(A/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<r;E++){const A=E+d*p,w=E+d*(p+1),N=E+1+d*(p+1),D=E+1+d*p;_.push(A,w,D),_.push(w,N,D)}this.setIndex(_),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ns extends Pn{constructor(e=1,t=.4,i=12,o=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:s},i=Math.floor(i),o=Math.floor(o);const a=[],r=[],l=[],d=[],c=new F,u=new F,f=new F;for(let _=0;_<=i;_++)for(let g=0;g<=o;g++){const b=g/o*s,m=_/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),c.x=e*Math.cos(b),c.y=e*Math.sin(b),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),d.push(g/o),d.push(_/i)}for(let _=1;_<=i;_++)for(let g=1;g<=o;g++){const b=(o+1)*_+g-1,m=(o+1)*(_-1)+g-1,p=(o+1)*(_-1)+g,E=(o+1)*_+g;a.push(b,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new mn(r,3)),this.setAttribute("normal",new mn(l,3)),this.setAttribute("uv",new mn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ci extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qi extends Fi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kp extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xp{constructor(e,t,i){const o=this;let s=!1,a=0,r=0,l;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){r++,s===!1&&o.onStart!==void 0&&o.onStart(c,a,r),s=!0},this.itemEnd=function(c){a++,o.onProgress!==void 0&&o.onProgress(c,a,r),a===r&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(c){o.onError!==void 0&&o.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return d.push(c,u),this},this.removeHandler=function(c){const u=d.indexOf(c);return u!==-1&&d.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=d.length;u<f;u+=2){const _=d[u],g=d[u+1];if(_.global&&(_.lastIndex=0),_.test(c))return g}return null}}}const yp=new xp;class bc{constructor(e){this.manager=e!==void 0?e:yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,s){i.load(e,o,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Po=new WeakMap;class Mp extends bc{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Po.get(a);u===void 0&&(u=[],Po.set(a,u)),u.push({onLoad:t,onError:o})}return a}const r=Us("img");function l(){c(),t&&t(this);const u=Po.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onLoad&&_.onLoad(this)}Po.delete(this),s.manager.itemEnd(e)}function d(u){c(),o&&o(u),Vr.remove(`image:${e}`);const f=Po.get(this)||[];for(let _=0;_<f.length;_++){const g=f[_];g.onError&&g.onError(u)}Po.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){r.removeEventListener("load",l,!1),r.removeEventListener("error",d,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),Vr.add(`image:${e}`,r),s.manager.itemStart(e),r.src=e,r}}class zu extends bc{constructor(e){super(e)}load(e,t,i,o){const s=new ln,a=new Mp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},i,o),s}}class Hu extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kc extends Hu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wr=new wt,yd=new F,Md=new F;class Sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vc extends Iu{constructor(e=-1,t=1,i=1,o=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let s=i-e,a=i+e,r=o+t,l=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,r-=c*this.view.offsetY,l=r-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wp extends Sp{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fs extends Hu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ep extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Sd=new wt;class Ap{constructor(e,t,i=0,o=1/0){this.ray=new hc(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sd),this}intersectObject(e,t=!0,i=[]){return Vl(e,this,i,t),i.sort(wd),i}intersectObjects(e,t=!0,i=[]){for(let o=0,s=e.length;o<s;o++)Vl(e[o],this,i,t);return i.sort(wd),i}}function wd(n,e){return n.distance-e.distance}function Vl(n,e,t,i){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const s=n.children;for(let a=0,r=s.length;a<r;a++)Vl(s[a],e,t,!0)}}function Ed(n,e,t,i){const o=Rp(i);switch(t){case Mu:return n*e;case oc:return n*e/o.components*o.byteLength;case sc:return n*e/o.components*o.byteLength;case wu:return n*e*2/o.components*o.byteLength;case ac:return n*e*2/o.components*o.byteLength;case Su:return n*e*3/o.components*o.byteLength;case Vn:return n*e*4/o.components*o.byteLength;case rc:return n*e*4/o.components*o.byteLength;case La:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:case kl:return Math.max(n,16)*Math.max(e,8)/4;case ml:case bl:return Math.max(n,8)*Math.max(e,8)/2;case vl:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eu:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rp(n){switch(n){case Jn:case vu:return{byteLength:1,components:1};case Cs:case xu:case Xs:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case no:case tc:case Kn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function Gu(){let n=null,e=!1,t=null,i=null;function o(s,a){t(s,a),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cp(n){const e=new WeakMap;function t(r,l){const d=r.array,c=r.usage,u=d.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,d,c),r.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=n.HALF_FLOAT;else if(d instanceof Uint16Array)r.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,d){const c=l.array,u=l.updateRanges;if(n.bindBuffer(d,r),u.length===0)n.bufferSubData(d,0,c);else{u.sort((_,g)=>_.start-g.start);let f=0;for(let _=1;_<u.length;_++){const g=u[f],b=u[_];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,u[f]=b)}u.length=f+1;for(let _=0,g=u.length;_<g;_++){const b=u[_];n.bufferSubData(d,b.start*c.BYTES_PER_ELEMENT,c,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function o(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(n.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const c=e.get(r);(!c||c.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const d=e.get(r);if(d===void 0)e.set(r,t(r,l));else if(d.version<r.version){if(d.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,r,l),d.version=r.version}}return{get:o,remove:s,update:a}}var Lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fp=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Xp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e_=`#define PI 3.141592653589793
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
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,__=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
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
}`,k_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A_=`PhysicalMaterial material;
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
#endif`,R_=`struct PhysicalMaterial {
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
}`,C_=`
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,e0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_0=`float getShadowMask() {
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
}`,m0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`#include <common>
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
}`,F0=`#if DEPTH_PACKING == 3200
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
}`,O0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,Y0=`#define MATCAP
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
}`,j0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,J0=`#define PHONG
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
}`,Q0=`#define PHONG
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
}`,em=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,nm=`#define TOON
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
}`,im=`#define TOON
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
}`,om=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Lp,alphahash_pars_fragment:Pp,alphamap_fragment:Dp,alphamap_pars_fragment:Ip,alphatest_fragment:Up,alphatest_pars_fragment:Np,aomap_fragment:Fp,aomap_pars_fragment:Op,batching_pars_vertex:Bp,batching_vertex:zp,begin_vertex:Hp,beginnormal_vertex:Gp,bsdfs:Vp,iridescence_fragment:Wp,bumpmap_pars_fragment:Xp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:jp,color_fragment:Zp,color_pars_fragment:Kp,color_pars_vertex:Jp,color_vertex:Qp,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:o_,emissivemap_fragment:s_,emissivemap_pars_fragment:a_,colorspace_fragment:r_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:d_,envmap_pars_fragment:u_,envmap_pars_vertex:h_,envmap_physical_pars_fragment:M_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:__,fog_fragment:m_,fog_pars_fragment:g_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:k_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:x_,lights_pars_begin:y_,lights_toon_fragment:S_,lights_toon_pars_fragment:w_,lights_phong_fragment:E_,lights_phong_pars_fragment:T_,lights_physical_fragment:A_,lights_physical_pars_fragment:R_,lights_fragment_begin:C_,lights_fragment_maps:L_,lights_fragment_end:P_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:U_,logdepthbuf_vertex:N_,map_fragment:F_,map_pars_fragment:O_,map_particle_fragment:B_,map_particle_pars_fragment:z_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:G_,morphinstance_vertex:V_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:q_,morphtarget_vertex:$_,normal_fragment_begin:Y_,normal_fragment_maps:j_,normal_pars_fragment:Z_,normal_pars_vertex:K_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:e0,clearcoat_normal_fragment_maps:t0,clearcoat_pars_fragment:n0,iridescence_pars_fragment:i0,opaque_fragment:o0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:r0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:f0,shadowmap_vertex:p0,shadowmask_pars_fragment:_0,skinbase_vertex:m0,skinning_pars_vertex:g0,skinning_vertex:b0,skinnormal_vertex:k0,specularmap_fragment:v0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:w0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:A0,worldpos_vertex:R0,background_vert:C0,background_frag:L0,backgroundCube_vert:P0,backgroundCube_frag:D0,cube_vert:I0,cube_frag:U0,depth_vert:N0,depth_frag:F0,distanceRGBA_vert:O0,distanceRGBA_frag:B0,equirect_vert:z0,equirect_frag:H0,linedashed_vert:G0,linedashed_frag:V0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:q0,meshlambert_frag:$0,meshmatcap_vert:Y0,meshmatcap_frag:j0,meshnormal_vert:Z0,meshnormal_frag:K0,meshphong_vert:J0,meshphong_frag:Q0,meshphysical_vert:em,meshphysical_frag:tm,meshtoon_vert:nm,meshtoon_frag:im,points_vert:om,points_frag:sm,shadow_vert:am,shadow_frag:rm,sprite_vert:lm,sprite_frag:cm},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Yn={basic:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:kn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:kn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:kn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:kn([ve.points,ve.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:kn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:kn([ve.common,ve.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:kn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:kn([ve.sprite,ve.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:kn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:kn([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Yn.physical={uniforms:kn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ea={r:0,b:0,g:0},Vi=new Xn,dm=new wt;function um(n,e,t,i,o,s,a){const r=new st(0);let l=s===!0?0:1,d,c,u=null,f=0,_=null;function g(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?t:e).get(w)),w}function b(A){let w=!1;const N=g(A);N===null?p(r,l):N&&N.isColor&&(p(N,1),w=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,w){const N=g(w);N&&(N.isCubeTexture||N.mapping===Qa)?(c===void 0&&(c=new St(new Ct(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ko(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(c)),Vi.copy(w.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),c.material.uniforms.envMap.value=N,c.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(Vi)),c.material.toneMapped=bt.getTransfer(N.colorSpace)!==Et,(u!==N||f!==N.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,u=N,f=N.version,_=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new St(new ss(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ko(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=bt.getTransfer(N.colorSpace)!==Et,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(u!==N||f!==N.version||_!==n.toneMapping)&&(d.material.needsUpdate=!0,u=N,f=N.version,_=n.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function p(A,w){A.getRGB(Ea,Du(n)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,w,a)}function E(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,w=1){r.set(A),l=w,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(r,l)},render:b,addToRenderList:m,dispose:E}}function hm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=f(null);let s=o,a=!1;function r(M,P,q,W,Z){let J=!1;const K=u(W,q,P);s!==K&&(s=K,d(s.object)),J=_(M,W,q,Z),J&&g(M,W,q,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,w(M,P,q,W),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function d(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function u(M,P,q){const W=q.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let J=Z[P.id];J===void 0&&(J={},Z[P.id]=J);let K=J[W];return K===void 0&&(K=f(l()),J[W]=K),K}function f(M){const P=[],q=[],W=[];for(let Z=0;Z<t;Z++)P[Z]=0,q[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:W,object:M,attributes:{},index:null}}function _(M,P,q,W){const Z=s.attributes,J=P.attributes;let K=0;const B=q.getAttributes();for(const V in B)if(B[V].location>=0){const _e=Z[V];let Ae=J[V];if(Ae===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;K++}return s.attributesNum!==K||s.index!==W}function g(M,P,q,W){const Z={},J=P.attributes;let K=0;const B=q.getAttributes();for(const V in B)if(B[V].location>=0){let _e=J[V];_e===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),Z[V]=Ae,K++}s.attributes=Z,s.attributesNum=K,s.index=W}function b(){const M=s.newAttributes;for(let P=0,q=M.length;P<q;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const q=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;q[M]=1,W[M]===0&&(n.enableVertexAttribArray(M),W[M]=1),Z[M]!==P&&(n.vertexAttribDivisor(M,P),Z[M]=P)}function E(){const M=s.newAttributes,P=s.enabledAttributes;for(let q=0,W=P.length;q<W;q++)P[q]!==M[q]&&(n.disableVertexAttribArray(q),P[q]=0)}function A(M,P,q,W,Z,J,K){K===!0?n.vertexAttribIPointer(M,P,q,Z,J):n.vertexAttribPointer(M,P,q,W,Z,J)}function w(M,P,q,W){b();const Z=W.attributes,J=q.getAttributes(),K=P.defaultAttributeValues;for(const B in J){const V=J[B];if(V.location>=0){let ue=Z[B];if(ue===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const _e=ue.normalized,Ae=ue.itemSize,Oe=e.get(ue);if(Oe===void 0)continue;const Je=Oe.buffer,j=Oe.type,re=Oe.bytesPerElement,De=j===n.INT||j===n.UNSIGNED_INT||ue.gpuType===tc;if(ue.isInterleavedBufferAttribute){const ke=ue.data,le=ke.stride,pe=ue.offset;if(ke.isInstancedInterleavedBuffer){for(let Ue=0;Ue<V.locationSize;Ue++)p(V.location+Ue,ke.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Ue=0;Ue<V.locationSize;Ue++)m(V.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Ue=0;Ue<V.locationSize;Ue++)A(V.location+Ue,Ae/V.locationSize,j,_e,le*re,(pe+Ae/V.locationSize*Ue)*re,De)}else{if(ue.isInstancedBufferAttribute){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,ue.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ke=0;ke<V.locationSize;ke++)A(V.location+ke,Ae/V.locationSize,j,_e,Ae*re,Ae/V.locationSize*ke*re,De)}}else if(K!==void 0){const _e=K[B];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(V.location,_e);break;case 3:n.vertexAttrib3fv(V.location,_e);break;case 4:n.vertexAttrib4fv(V.location,_e);break;default:n.vertexAttrib1fv(V.location,_e)}}}}E()}function N(){O();for(const M in i){const P=i[M];for(const q in P){const W=P[q];for(const Z in W)c(W[Z].object),delete W[Z];delete P[q]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const q in P){const W=P[q];for(const Z in W)c(W[Z].object),delete W[Z];delete P[q]}delete i[M.id]}function C(M){for(const P in i){const q=i[P];if(q[M.id]===void 0)continue;const W=q[M.id];for(const Z in W)c(W[Z].object),delete W[Z];delete q[M.id]}}function O(){S(),a=!0,s!==o&&(s=o,d(s.object))}function S(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:r,reset:O,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:E}}function fm(n,e,t){let i;function o(d){i=d}function s(d,c){n.drawArrays(i,d,c),t.update(c,i,1)}function a(d,c,u){u!==0&&(n.drawArraysInstanced(i,d,c,u),t.update(c,i,u))}function r(d,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,c,0,u);let _=0;for(let g=0;g<u;g++)_+=c[g];t.update(_,i,1)}function l(d,c,u,f){if(u===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<d.length;g++)a(d[g],c[g],f[g]);else{_.multiDrawArraysInstancedWEBGL(i,d,0,c,0,f,0,u);let g=0;for(let b=0;b<u;b++)g+=c[b]*f[b];t.update(g,i,1)}}this.setMode=o,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function pm(n,e,t,i){let o;function s(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function a(C){return!(C!==Vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const O=C===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Kn&&!O)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const c=l(d);c!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",c,"instead."),d=c);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:d,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:_,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:N,maxSamples:D}}function _m(n){const e=this;let t=null,i=0,o=!1,s=!1;const a=new qi,r=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const _=u.length!==0||f||i!==0||o;return o=f,i=u.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=c(u,f,0)},this.setState=function(u,f,_){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!o||g===null||g.length===0||s&&!m)s?c(null):d();else{const E=s?0:i,A=E*4;let w=p.clippingState||null;l.value=w,w=c(g,f,A,_);for(let N=0;N!==A;++N)w[N]=t[N];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function d(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,f,_,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const p=_+b*4,E=f.matrixWorldInverse;r.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,w=_;A!==b;++A,w+=4)a.copy(u[A]).applyMatrix4(E,r),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function mm(n){let e=new WeakMap;function t(a,r){return r===hl?a.mapping=Yo:r===fl&&(a.mapping=jo),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===hl||r===fl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const d=new rp(l.height);return d.fromEquirectangularTexture(n,a),e.set(a,d),a.addEventListener("dispose",o),t(d.texture,a.mapping)}else return null}}return a}function o(a){const r=a.target;r.removeEventListener("dispose",o);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Bo=4,Td=[.125,.215,.35,.446,.526,.582],ji=20,Xr=new vc,Ad=new st;let qr=null,$r=0,Yr=0,jr=!1;const $i=(1+Math.sqrt(5))/2,Do=1/$i,Rd=[new F(-$i,Do,0),new F($i,Do,0),new F(-Do,0,$i),new F(Do,0,$i),new F(0,$i,-Do),new F(0,$i,Do),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],gm=new F;class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100,s={}){const{size:a=256,position:r=gm}=s;qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qr,$r,Yr),this._renderer.xr.enabled=jr,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Xs,format:Vn,colorSpace:Zo,depthBuffer:!1},o=Ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bm(s)),this._blurMaterial=km(s,e,t)}return o}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,i,o,s){const l=new Mn(90,1,t,i),d=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,_=u.toneMapping;u.getClearColor(Ad),u.toneMapping=Ci,u.autoClear=!1;const g=new is({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),b=new St(new Ct,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Ad),m=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(l.up.set(0,d[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[E],s.y,s.z)):A===1?(l.up.set(0,0,d[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[E],s.z)):(l.up.set(0,d[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[E]));const w=this._cubeSize;Ta(o,A*w,E>2?w:0,w,w),u.setRenderTarget(o),m&&u.render(b,l),u.render(e,l)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=_,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Yo||e.mapping===jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());const s=o?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let s=1;s<o;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Rd[(o-s-1)%Rd.length];this._blur(e,s-1,s,a,r)}t.autoClear=i}_blur(e,t,i,o,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,o,"latitudinal",s),this._halfBlur(a,e,i,i,o,"longitudinal",s)}_halfBlur(e,t,i,o,s,a,r){const l=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new St(this._lodPlanes[o],d),f=d.uniforms,_=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*ji-1),b=s/g,m=isFinite(s)?1+Math.floor(c*b):ji;m>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let E=0;for(let C=0;C<ji;++C){const O=C/b,S=Math.exp(-O*O/2);p.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const w=this._sizeLods[o],N=3*w*(o>A-Bo?o-A+Bo:0),D=4*(this._cubeSize-w);Ta(t,N,D,3*w,2*w),l.setRenderTarget(t),l.render(u,Xr)}}function bm(n){const e=[],t=[],i=[];let o=n;const s=n-Bo+1+Td.length;for(let a=0;a<s;a++){const r=Math.pow(2,o);t.push(r);let l=1/r;a>n-Bo?l=Td[a-n+Bo-1]:a===0&&(l=0),i.push(l);const d=1/(r-2),c=-d,u=1+d,f=[c,c,u,c,u,u,c,c,u,u,c,u],_=6,g=6,b=3,m=2,p=1,E=new Float32Array(b*g*_),A=new Float32Array(m*g*_),w=new Float32Array(p*g*_);for(let D=0;D<_;D++){const C=D%3*2/3-1,O=D>2?0:-1,S=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];E.set(S,b*g*D),A.set(f,m*g*D);const M=[D,D,D,D,D,D];w.set(M,p*g*D)}const N=new Pn;N.setAttribute("position",new Rn(E,b)),N.setAttribute("uv",new Rn(A,m)),N.setAttribute("faceIndex",new Rn(w,p)),e.push(N),o>Bo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ld(n,e,t){const i=new io(n,e,t);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ta(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function km(n,e,t){const i=new Float32Array(ji),o=new F(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Pd(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Dd(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function vm(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,d=l===hl||l===fl,c=l===Yo||l===jo;if(d||c){let u=e.get(r);const f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new Cd(n)),u=d?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const _=r.image;return d&&_&&_.height>0||c&&_&&o(_)?(t===null&&(t=new Cd(n)),u=d?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function o(r){let l=0;const d=6;for(let c=0;c<d;c++)r[c]!==void 0&&l++;return l===d}function s(r){const l=r.target;l.removeEventListener("dispose",s);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function xm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Wo("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function ym(n,e,t,i){const o={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete o[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return o[f.id]===!0||(f.addEventListener("dispose",a),o[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER)}function d(u){const f=[],_=u.index,g=u.attributes.position;let b=0;if(_!==null){const E=_.array;b=_.version;for(let A=0,w=E.length;A<w;A+=3){const N=E[A+0],D=E[A+1],C=E[A+2];f.push(N,D,D,C,C,N)}}else if(g!==void 0){const E=g.array;b=g.version;for(let A=0,w=E.length/3-1;A<w;A+=3){const N=A+0,D=A+1,C=A+2;f.push(N,D,D,C,C,N)}}else return;const m=new(Au(f)?Pu:Lu)(f,1);m.version=b;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function c(u){const f=s.get(u);if(f){const _=u.index;_!==null&&f.version<_.version&&d(u)}else d(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:c}}function Mm(n,e,t){let i;function o(f){i=f}let s,a;function r(f){s=f.type,a=f.bytesPerElement}function l(f,_){n.drawElements(i,_,s,f*a),t.update(_,i,1)}function d(f,_,g){g!==0&&(n.drawElementsInstanced(i,_,s,f*a,g),t.update(_,i,g))}function c(f,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=_[p];t.update(m,i,1)}function u(f,_,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)d(f[p]/a,_[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(i,_,0,s,f,0,b,0,g);let p=0;for(let E=0;E<g;E++)p+=_[E]*b[E];t.update(p,i,1)}}this.setMode=o,this.setIndex=r,this.render=l,this.renderInstances=d,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function wm(n,e,t){const i=new WeakMap,o=new Ot;function s(a,r,l){const d=a.morphTargetInfluences,c=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=c!==void 0?c.length:0;let f=i.get(r);if(f===void 0||f.count!==u){let M=function(){O.dispose(),i.delete(r),r.removeEventListener("dispose",M)};var _=M;f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,b=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],E=r.morphAttributes.normal||[],A=r.morphAttributes.color||[];let w=0;g===!0&&(w=1),b===!0&&(w=2),m===!0&&(w=3);let N=r.attributes.position.count*w,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*D*4*u),O=new Ru(C,N,D,u);O.type=Kn,O.needsUpdate=!0;const S=w*4;for(let P=0;P<u;P++){const q=p[P],W=E[P],Z=A[P],J=N*D*4*P;for(let K=0;K<q.count;K++){const B=K*S;g===!0&&(o.fromBufferAttribute(q,K),C[J+B+0]=o.x,C[J+B+1]=o.y,C[J+B+2]=o.z,C[J+B+3]=0),b===!0&&(o.fromBufferAttribute(W,K),C[J+B+4]=o.x,C[J+B+5]=o.y,C[J+B+6]=o.z,C[J+B+7]=0),m===!0&&(o.fromBufferAttribute(Z,K),C[J+B+8]=o.x,C[J+B+9]=o.y,C[J+B+10]=o.z,C[J+B+11]=Z.itemSize===4?o.w:1)}}f={count:u,texture:O,size:new Qe(N,D)},i.set(r,f),r.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<d.length;m++)g+=d[m];const b=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",d)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Em(n,e,t,i){let o=new WeakMap;function s(l){const d=i.render.frame,c=l.geometry,u=e.get(l,c);if(o.get(u)!==d&&(e.update(u),o.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),o.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,d))),l.isSkinnedMesh){const f=l.skeleton;o.get(f)!==d&&(f.update(),o.set(f,d))}return u}function a(){o=new WeakMap}function r(l){const d=l.target;d.removeEventListener("dispose",r),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:a}}const Vu=new ln,Id=new Bu(1,1),Wu=new Ru,Xu=new Wf,qu=new Uu,Ud=[],Nd=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function as(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let s=Ud[o];if(s===void 0&&(s=new Float32Array(o),Ud[o]=s),e!==0){i.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,n[a].toArray(s,r)}return s}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tr(n,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Yt(t,e)}}function Rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Yt(t,e)}}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Yt(t,e)}}function Lm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),Yt(t,i)}}function Pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Od.set(i),n.uniformMatrix3fv(this.addr,!1,Od),Yt(t,i)}}function Dm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),Yt(t,i)}}function Im(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Yt(t,e)}}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Yt(t,e)}}function Fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Yt(t,e)}}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Yt(t,e)}}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Yt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Yt(t,e)}}function Gm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let s;this.type===n.SAMPLER_2D_SHADOW?(Id.compareFunction=Tu,s=Id):s=Vu,t.setTexture2D(e||s,o)}function Vm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Xu,o)}function Wm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||qu,o)}function Xm(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Wu,o)}function qm(n){switch(n){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Lm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function $m(n,e){n.uniform1fv(this.addr,e)}function Ym(n,e){const t=as(e,this.size,2);n.uniform2fv(this.addr,t)}function jm(n,e){const t=as(e,this.size,3);n.uniform3fv(this.addr,t)}function Zm(n,e){const t=as(e,this.size,4);n.uniform4fv(this.addr,t)}function Km(n,e){const t=as(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jm(n,e){const t=as(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qm(n,e){const t=as(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e1(n,e){n.uniform1iv(this.addr,e)}function t1(n,e){n.uniform2iv(this.addr,e)}function n1(n,e){n.uniform3iv(this.addr,e)}function i1(n,e){n.uniform4iv(this.addr,e)}function o1(n,e){n.uniform1uiv(this.addr,e)}function s1(n,e){n.uniform2uiv(this.addr,e)}function a1(n,e){n.uniform3uiv(this.addr,e)}function r1(n,e){n.uniform4uiv(this.addr,e)}function l1(n,e,t){const i=this.cache,o=e.length,s=tr(t,o);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==o;++a)t.setTexture2D(e[a]||Vu,s[a])}function c1(n,e,t){const i=this.cache,o=e.length,s=tr(t,o);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==o;++a)t.setTexture3D(e[a]||Xu,s[a])}function d1(n,e,t){const i=this.cache,o=e.length,s=tr(t,o);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==o;++a)t.setTextureCube(e[a]||qu,s[a])}function u1(n,e,t){const i=this.cache,o=e.length,s=tr(t,o);$t(i,s)||(n.uniform1iv(this.addr,s),Yt(i,s));for(let a=0;a!==o;++a)t.setTexture2DArray(e[a]||Wu,s[a])}function h1(n){switch(n){case 5126:return $m;case 35664:return Ym;case 35665:return jm;case 35666:return Zm;case 35674:return Km;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return o1;case 36294:return s1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return u1}}class f1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class p1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h1(t.type)}}class _1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let s=0,a=o.length;s!==a;++s){const r=o[s];r.setValue(e,t[r.id],i)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function zd(n,e){n.seq.push(e),n.map[e.id]=e}function m1(n,e,t){const i=n.name,o=i.length;for(Zr.lastIndex=0;;){const s=Zr.exec(i),a=Zr.lastIndex;let r=s[1];const l=s[2]==="]",d=s[3];if(l&&(r=r|0),d===void 0||d==="["&&a+2===o){zd(t,d===void 0?new f1(r,n,e):new p1(r,n,e));break}else{let u=t.map[r];u===void 0&&(u=new _1(r),zd(t,u)),t=u}}}class Na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const s=e.getActiveUniform(t,o),a=e.getUniformLocation(t,s.name);m1(s,a,this)}}setValue(e,t,i,o){const s=this.map[t];s!==void 0&&s.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,s=e.length;o!==s;++o){const a=e[o];a.id in t&&i.push(a)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const g1=37297;let b1=0;function k1(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=o;a<s;a++){const r=a+1;i.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return i.join(`
`)}const Gd=new rt;function v1(n){bt._getMatrix(Gd,bt.workingColorSpace,n);const e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+k1(n.getShaderSource(e),a)}else return o}function x1(n,e){const t=v1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y1(n,e){let t;switch(e){case nf:t="Linear";break;case of:t="Reinhard";break;case sf:t="Cineon";break;case bu:t="ACESFilmic";break;case rf:t="AgX";break;case lf:t="Neutral";break;case af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Aa=new F;function M1(){bt.getLuminanceCoefficients(Aa);const n=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function w1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const s=n.getActiveAttrib(e,o),a=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:r}}return t}function ys(n){return n!==""}function Wd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(T1,R1)}const A1=new Map;function R1(n,e){let t=dt[e];if(t===void 0){const i=A1.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(n){return n.replace(C1,L1)}function L1(n,e,t,i){let o="";for(let s=parseInt(e);s<parseInt(t);s++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function $d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function P1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function D1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yo:case jo:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===jo&&(e="ENVMAP_MODE_REFRACTION"),e}function U1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case ef:e="ENVMAP_BLENDING_MIX";break;case tf:e="ENVMAP_BLENDING_ADD";break}return e}function N1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F1(n,e,t,i){const o=n.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=P1(t),d=D1(t),c=I1(t),u=U1(t),f=N1(t),_=S1(t),g=w1(s),b=o.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?y1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,x1("linearToOutputTexel",t.outputColorSpace),M1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),a=Wl(a),a=Wd(a,t),a=Xd(a,t),r=Wl(r),r=Wd(r,t),r=Xd(r,t),a=qd(a),r=qd(r),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+m+a,w=E+p+r,N=Hd(o,o.VERTEX_SHADER,A),D=Hd(o,o.FRAGMENT_SHADER,w);o.attachShader(b,N),o.attachShader(b,D),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function C(P){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(b).trim(),W=o.getShaderInfoLog(N).trim(),Z=o.getShaderInfoLog(D).trim();let J=!0,K=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,b,N,D);else{const B=Vd(o,N,"vertex"),V=Vd(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+B+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||Z==="")&&(K=!1);K&&(P.diagnostics={runnable:J,programLog:q,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:p}})}o.deleteShader(N),o.deleteShader(D),O=new Na(o,b),S=E1(o,b)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=o.getProgramParameter(b,g1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=D,this}let O1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(o)===!1&&(a.add(o),o.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new z1(e),t.set(e,i)),i}}class z1{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}}function H1(n,e,t,i,o,s,a){const r=new fc,l=new B1,d=new Set,c=[],u=o.logarithmicDepthBuffer,f=o.vertexTextures;let _=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return d.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,q,W){const Z=q.fog,J=W.geometry,K=S.isMeshStandardMaterial?q.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),V=B&&B.mapping===Qa?B.image.height:null,ue=g[S.type];S.precision!==null&&(_=o.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let Je,j,re,De;if(ue){const _t=Yn[ue];Je=_t.vertexShader,j=_t.fragmentShader}else Je=S.vertexShader,j=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);const ke=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),pe=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,ae=!!S.map,xe=!!S.matcap,Ne=!!B,R=!!S.aoMap,pt=!!S.lightMap,et=!!S.bumpMap,tt=!!S.normalMap,we=!!S.displacementMap,at=!!S.emissiveMap,Be=!!S.metalnessMap,We=!!S.roughnessMap,Tt=S.anisotropy>0,x=S.clearcoat>0,k=S.dispersion>0,H=S.iridescence>0,Y=S.sheen>0,ne=S.transmission>0,$=Tt&&!!S.anisotropyMap,Le=x&&!!S.clearcoatMap,me=x&&!!S.clearcoatNormalMap,Me=x&&!!S.clearcoatRoughnessMap,Ie=H&&!!S.iridescenceMap,ie=H&&!!S.iridescenceThicknessMap,ye=Y&&!!S.sheenColorMap,qe=Y&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,he=!!S.specularColorMap,Xe=!!S.specularIntensityMap,U=ne&&!!S.transmissionMap,ge=ne&&!!S.thicknessMap,oe=!!S.gradientMap,Se=!!S.alphaMap,se=S.alphaTest>0,ee=!!S.alphaHash,Re=!!S.extensions;let Ke=Ci;S.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const yt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:j,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:pe,instancingColor:pe&&W.instanceColor!==null,instancingMorph:pe&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Zo,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:xe,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:pt,bumpMap:et,normalMap:tt,displacementMap:f&&we,emissiveMap:at,normalMapObjectSpace:tt&&S.normalMapType===uf,normalMapTangentSpace:tt&&S.normalMapType===lc,metalnessMap:Be,roughnessMap:We,anisotropy:Tt,anisotropyMap:$,clearcoat:x,clearcoatMap:Le,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,dispersion:k,iridescence:H,iridescenceMap:Ie,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:ye,sheenRoughnessMap:qe,specularMap:Ge,specularColorMap:he,specularIntensityMap:Xe,transmission:ne,transmissionMap:U,thicknessMap:ge,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Go&&S.alphaToCoverage===!1,alphaMap:Se,alphaTest:se,alphaHash:ee,combine:S.combine,mapUv:ae&&b(S.map.channel),aoMapUv:R&&b(S.aoMap.channel),lightMapUv:pt&&b(S.lightMap.channel),bumpMapUv:et&&b(S.bumpMap.channel),normalMapUv:tt&&b(S.normalMap.channel),displacementMapUv:we&&b(S.displacementMap.channel),emissiveMapUv:at&&b(S.emissiveMap.channel),metalnessMapUv:Be&&b(S.metalnessMap.channel),roughnessMapUv:We&&b(S.roughnessMap.channel),anisotropyMapUv:$&&b(S.anisotropyMap.channel),clearcoatMapUv:Le&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&b(S.sheenRoughnessMap.channel),specularMapUv:Ge&&b(S.specularMap.channel),specularColorMapUv:he&&b(S.specularColorMap.channel),specularIntensityMapUv:Xe&&b(S.specularIntensityMap.channel),transmissionMapUv:U&&b(S.transmissionMap.channel),thicknessMapUv:ge&&b(S.thicknessMap.channel),alphaMapUv:Se&&b(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(tt||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!J.attributes.uv&&(ae||Se),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:le,skinning:W.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&bt.getTransfer(S.map.colorSpace)===Et,decodeVideoTextureEmissive:at&&S.emissiveMap.isVideoTexture===!0&&bt.getTransfer(S.emissiveMap.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hn,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=d.has(1),yt.vertexUv2s=d.has(2),yt.vertexUv3s=d.has(3),d.clear(),yt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(M,S),A(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function A(S,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),M.gradientMap&&r.enable(22),S.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reverseDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),S.push(r.mask)}function w(S){const M=g[S.type];let P;if(M){const q=Yn[M];P=ip.clone(q.uniforms)}else P=S.uniforms;return P}function N(S,M){let P;for(let q=0,W=c.length;q<W;q++){const Z=c[q];if(Z.cacheKey===M){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new F1(n,M,S,s),c.push(P)),P}function D(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:N,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:O}}function G1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let r=n.get(a);return r===void 0&&(r={},n.set(a,r)),r}function i(a){n.delete(a)}function o(a,r,l){n.get(a)[r]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:s}}function V1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jd(){const n=[];let e=0;const t=[],i=[],o=[];function s(){e=0,t.length=0,i.length=0,o.length=0}function a(u,f,_,g,b,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:_,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=_,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function r(u,f,_,g,b,m){const p=a(u,f,_,g,b,m);_.transmission>0?i.push(p):_.transparent===!0?o.push(p):t.push(p)}function l(u,f,_,g,b,m){const p=a(u,f,_,g,b,m);_.transmission>0?i.unshift(p):_.transparent===!0?o.unshift(p):t.unshift(p)}function d(u,f){t.length>1&&t.sort(u||V1),i.length>1&&i.sort(f||Yd),o.length>1&&o.sort(f||Yd)}function c(){for(let u=e,f=n.length;u<f;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:o,init:s,push:r,unshift:l,finish:c,sort:d}}function W1(){let n=new WeakMap;function e(i,o){const s=n.get(i);let a;return s===void 0?(a=new jd,n.set(i,[a])):o>=s.length?(a=new jd,s.push(a)):a=s[o],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new st};break;case"SpotLight":t={position:new F,direction:new F,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function q1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $1=0;function Y1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j1(n){const e=new X1,t=q1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new F);const o=new F,s=new wt,a=new wt;function r(d){let c=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let _=0,g=0,b=0,m=0,p=0,E=0,A=0,w=0,N=0,D=0,C=0;d.sort(Y1);for(let S=0,M=d.length;S<M;S++){const P=d[S],q=P.color,W=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=q.r*W,u+=q.g*W,f+=q.b*W;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],W);C++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,V=t.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.directionalShadow[_]=V,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=P.shadow.matrix,E++}i.directional[_]=K,_++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(q).multiplyScalar(W),K.distance=Z,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[b]=K;const B=P.shadow;if(P.map&&(i.spotLightMap[N]=P.map,N++,B.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[b]=B.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,i.spotShadow[b]=V,i.spotShadowMap[b]=J,w++}b++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(q).multiplyScalar(W),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=K,m++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const B=P.shadow,V=t.get(P);V.shadowIntensity=B.intensity,V.shadowBias=B.bias,V.shadowNormalBias=B.normalBias,V.shadowRadius=B.radius,V.shadowMapSize=B.mapSize,V.shadowCameraNear=B.camera.near,V.shadowCameraFar=B.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=P.shadow.matrix,A++}i.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(W),K.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==_||O.pointLength!==g||O.spotLength!==b||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==w||O.numSpotMaps!==N||O.numLightProbes!==C)&&(i.directional.length=_,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+N-D,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,O.directionalLength=_,O.pointLength=g,O.spotLength=b,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=w,O.numSpotMaps=N,O.numLightProbes=C,i.version=$1++)}function l(d,c){let u=0,f=0,_=0,g=0,b=0;const m=c.matrixWorldInverse;for(let p=0,E=d.length;p<E;p++){const A=d[p];if(A.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),u++}else if(A.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(m),_++}else if(A.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(m),b++}}}return{setup:r,setupView:l,state:i}}function Zd(n){const e=new j1(n),t=[],i=[];function o(c){d.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function r(){e.setup(t)}function l(c){e.setupView(t,c)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Z1(n){let e=new WeakMap;function t(o,s=0){const a=e.get(o);let r;return a===void 0?(r=new Zd(n),e.set(o,[r])):s>=a.length?(r=new Zd(n),a.push(r)):r=a[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
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
}`;function Q1(n,e,t){let i=new mc;const o=new Qe,s=new Qe,a=new Ot,r=new kp({depthPacking:df}),l=new vp,d={},c=t.maxTextureSize,u={[Di]:Sn,[Sn]:Di,[Hn]:Hn},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:K1,fragmentShader:J1}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(D,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Ri),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=p!==ri&&this.type===ri,Z=p===ri&&this.type!==ri;for(let J=0,K=D.length;J<K;J++){const B=D[J],V=B.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ue=V.getFrameExtents();if(o.multiply(ue),s.copy(V.mapSize),(o.x>c||o.y>c)&&(o.x>c&&(s.x=Math.floor(c/ue.x),o.x=s.x*ue.x,V.mapSize.x=s.x),o.y>c&&(s.y=Math.floor(c/ue.y),o.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||W===!0||Z===!0){const Ae=this.type!==ri?{minFilter:Xt,magFilter:Xt}:{};V.map!==null&&V.map.dispose(),V.map=new io(o.x,o.y,Ae),V.map.texture.name=B.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const _e=V.getViewportCount();for(let Ae=0;Ae<_e;Ae++){const Oe=V.getViewport(Ae);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),q.viewport(a),V.updateMatrices(B,Ae),i=V.getFrustum(),w(C,O,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===ri&&E(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,P)};function E(D,C){const O=e.update(b);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new io(o.x,o.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,O,f,b,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,O,_,b,null)}function A(D,C,O,S){let M=null;const P=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)M=P;else if(M=O.isPointLight===!0?l:r,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const q=M.uuid,W=C.uuid;let Z=d[q];Z===void 0&&(Z={},d[q]=Z);let J=Z[W];J===void 0&&(J=M.clone(),Z[W]=J,C.addEventListener("dispose",N)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,S===ri?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=n.properties.get(M);q.light=O}return M}function w(D,C,O,S,M){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===ri)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const W=e.update(D),Z=D.material;if(Array.isArray(Z)){const J=W.groups;for(let K=0,B=J.length;K<B;K++){const V=J[K],ue=Z[V.materialIndex];if(ue&&ue.visible){const _e=A(D,ue,S,M);D.onBeforeShadow(n,D,C,O,W,_e,V),n.renderBufferDirect(O,null,W,_e,D,V),D.onAfterShadow(n,D,C,O,W,_e,V)}}}else if(Z.visible){const J=A(D,Z,S,M);D.onBeforeShadow(n,D,C,O,W,J,null),n.renderBufferDirect(O,null,W,J,D,null),D.onAfterShadow(n,D,C,O,W,J,null)}}const q=D.children;for(let W=0,Z=q.length;W<Z;W++)w(q[W],C,O,S,M)}function N(D){D.target.removeEventListener("dispose",N);for(const O in d){const S=d[O],M=D.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const eg={[sl]:al,[rl]:dl,[ll]:ul,[$o]:cl,[al]:sl,[dl]:rl,[ul]:ll,[cl]:$o};function tg(n,e){function t(){let U=!1;const ge=new Ot;let oe=null;const Se=new Ot(0,0,0,0);return{setMask:function(se){oe!==se&&!U&&(n.colorMask(se,se,se,se),oe=se)},setLocked:function(se){U=se},setClear:function(se,ee,Re,Ke,yt){yt===!0&&(se*=Ke,ee*=Ke,Re*=Ke),ge.set(se,ee,Re,Ke),Se.equals(ge)===!1&&(n.clearColor(se,ee,Re,Ke),Se.copy(ge))},reset:function(){U=!1,oe=null,Se.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,oe=null,Se=null,se=null;return{setReversed:function(ee){if(ge!==ee){const Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ge=ee;const Ke=se;se=null,this.setClear(Ke)}},getReversed:function(){return ge},setTest:function(ee){ee?ke(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(ee){oe!==ee&&!U&&(n.depthMask(ee),oe=ee)},setFunc:function(ee){if(ge&&(ee=eg[ee]),Se!==ee){switch(ee){case sl:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ee}},setLocked:function(ee){U=ee},setClear:function(ee){se!==ee&&(ge&&(ee=1-ee),n.clearDepth(ee),se=ee)},reset:function(){U=!1,oe=null,Se=null,se=null,ge=!1}}}function o(){let U=!1,ge=null,oe=null,Se=null,se=null,ee=null,Re=null,Ke=null,yt=null;return{setTest:function(_t){U||(_t?ke(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(_t){ge!==_t&&!U&&(n.stencilMask(_t),ge=_t)},setFunc:function(_t,gn,I){(oe!==_t||Se!==gn||se!==I)&&(n.stencilFunc(_t,gn,I),oe=_t,Se=gn,se=I)},setOp:function(_t,gn,I){(ee!==_t||Re!==gn||Ke!==I)&&(n.stencilOp(_t,gn,I),ee=_t,Re=gn,Ke=I)},setLocked:function(_t){U=_t},setClear:function(_t){yt!==_t&&(n.clearStencil(_t),yt=_t)},reset:function(){U=!1,ge=null,oe=null,Se=null,se=null,ee=null,Re=null,Ke=null,yt=null}}}const s=new t,a=new i,r=new o,l=new WeakMap,d=new WeakMap;let c={},u={},f=new WeakMap,_=[],g=null,b=!1,m=null,p=null,E=null,A=null,w=null,N=null,D=null,C=new st(0,0,0),O=0,S=!1,M=null,P=null,q=null,W=null,Z=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=B>=1):V.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=B>=2);let ue=null,_e={};const Ae=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Je=new Ot().fromArray(Ae),j=new Ot().fromArray(Oe);function re(U,ge,oe,Se){const se=new Uint8Array(4),ee=n.createTexture();n.bindTexture(U,ee),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<oe;Re++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(ge+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ee}const De={};De[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ke(n.DEPTH_TEST),a.setFunc($o),et(!1),tt(Vc),ke(n.CULL_FACE),R(Ri);function ke(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function le(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function pe(U,ge){return u[U]!==ge?(n.bindFramebuffer(U,ge),u[U]=ge,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ue(U,ge){let oe=_,Se=!1;if(U){oe=f.get(ge),oe===void 0&&(oe=[],f.set(ge,oe));const se=U.textures;if(oe.length!==se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Re=se.length;ee<Re;ee++)oe[ee]=n.COLOR_ATTACHMENT0+ee;oe.length=se.length,Se=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(oe)}function ae(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const xe={[Yi]:n.FUNC_ADD,[Fh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};xe[Bh]=n.MIN,xe[zh]=n.MAX;const Ne={[Hh]:n.ZERO,[Gh]:n.ONE,[Vh]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[jh]:n.SRC_ALPHA_SATURATE,[$h]:n.DST_COLOR,[Xh]:n.DST_ALPHA,[Wh]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[Yh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[Zh]:n.CONSTANT_COLOR,[Kh]:n.ONE_MINUS_CONSTANT_COLOR,[Jh]:n.CONSTANT_ALPHA,[Qh]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,ge,oe,Se,se,ee,Re,Ke,yt,_t){if(U===Ri){b===!0&&(le(n.BLEND),b=!1);return}if(b===!1&&(ke(n.BLEND),b=!0),U!==Nh){if(U!==m||_t!==S){if((p!==Yi||w!==Yi)&&(n.blendEquation(n.FUNC_ADD),p=Yi,w=Yi),_t)switch(U){case Go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,A=null,N=null,D=null,C.set(0,0,0),O=0,m=U,S=_t}return}se=se||ge,ee=ee||oe,Re=Re||Se,(ge!==p||se!==w)&&(n.blendEquationSeparate(xe[ge],xe[se]),p=ge,w=se),(oe!==E||Se!==A||ee!==N||Re!==D)&&(n.blendFuncSeparate(Ne[oe],Ne[Se],Ne[ee],Ne[Re]),E=oe,A=Se,N=ee,D=Re),(Ke.equals(C)===!1||yt!==O)&&(n.blendColor(Ke.r,Ke.g,Ke.b,yt),C.copy(Ke),O=yt),m=U,S=!1}function pt(U,ge){U.side===Hn?le(n.CULL_FACE):ke(n.CULL_FACE);let oe=U.side===Sn;ge&&(oe=!oe),et(oe),U.blending===Go&&U.transparent===!1?R(Ri):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Se=U.stencilWrite;r.setTest(Se),Se&&(r.setMask(U.stencilWriteMask),r.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),r.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ke(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function tt(U){U!==Ih?(ke(n.CULL_FACE),U!==P&&(U===Vc?n.cullFace(n.BACK):U===Uh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),P=U}function we(U){U!==q&&(K&&n.lineWidth(U),q=U)}function at(U,ge,oe){U?(ke(n.POLYGON_OFFSET_FILL),(W!==ge||Z!==oe)&&(n.polygonOffset(ge,oe),W=ge,Z=oe)):le(n.POLYGON_OFFSET_FILL)}function Be(U){U?ke(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function We(U){U===void 0&&(U=n.TEXTURE0+J-1),ue!==U&&(n.activeTexture(U),ue=U)}function Tt(U,ge,oe){oe===void 0&&(ue===null?oe=n.TEXTURE0+J-1:oe=ue);let Se=_e[oe];Se===void 0&&(Se={type:void 0,texture:void 0},_e[oe]=Se),(Se.type!==U||Se.texture!==ge)&&(ue!==oe&&(n.activeTexture(oe),ue=oe),n.bindTexture(U,ge||De[U]),Se.type=U,Se.texture=ge)}function x(){const U=_e[ue];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function k(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function qe(U){j.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Ge(U,ge){let oe=d.get(ge);oe===void 0&&(oe=new WeakMap,d.set(ge,oe));let Se=oe.get(U);Se===void 0&&(Se=n.getUniformBlockIndex(ge,U.name),oe.set(U,Se))}function he(U,ge){const Se=d.get(ge).get(U);l.get(ge)!==Se&&(n.uniformBlockBinding(ge,Se,U.__bindingPointIndex),l.set(ge,Se))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ue=null,_e={},u={},f=new WeakMap,_=[],g=null,b=!1,m=null,p=null,E=null,A=null,w=null,N=null,D=null,C=new st(0,0,0),O=0,S=!1,M=null,P=null,q=null,W=null,Z=null,Je.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:ke,disable:le,bindFramebuffer:pe,drawBuffers:Ue,useProgram:ae,setBlending:R,setMaterial:pt,setFlipSided:et,setCullFace:tt,setLineWidth:we,setPolygonOffset:at,setScissorTest:Be,activeTexture:We,bindTexture:Tt,unbindTexture:x,compressedTexImage2D:k,compressedTexImage3D:H,texImage2D:Ie,texImage3D:ie,updateUBOMapping:Ge,uniformBlockBinding:he,texStorage2D:me,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Le,scissor:ye,viewport:qe,reset:Xe}}function ng(n,e,t,i,o,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Qe,c=new WeakMap;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,k){return _?new OffscreenCanvas(x,k):Us("canvas")}function b(x,k,H){let Y=1;const ne=Tt(x);if((ne.width>H||ne.height>H)&&(Y=H/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const $=Math.floor(Y*ne.width),Le=Math.floor(Y*ne.height);u===void 0&&(u=g($,Le));const me=k?g($,Le):u;return me.width=$,me.height=Le,me.getContext("2d").drawImage(x,0,0,$,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Le+")."),me}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function E(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,k,H,Y,ne=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let $=k;if(k===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),k===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),k===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),k===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),k===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),k===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),k===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),k===n.RGBA){const Le=ne?za:bt.getTransfer(Y);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=Le===Et?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(x,k){let H;return x?k===null||k===no||k===Ls?H=n.DEPTH24_STENCIL8:k===Kn?H=n.DEPTH32F_STENCIL8:k===Cs&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===no||k===Ls?H=n.DEPTH_COMPONENT24:k===Kn?H=n.DEPTH_COMPONENT32F:k===Cs&&(H=n.DEPTH_COMPONENT16),H}function N(x,k){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Xt&&x.minFilter!==Zn?Math.log2(Math.max(k.width,k.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?k.mipmaps.length:1}function D(x){const k=x.target;k.removeEventListener("dispose",D),O(k),k.isVideoTexture&&c.delete(k)}function C(x){const k=x.target;k.removeEventListener("dispose",C),M(k)}function O(x){const k=i.get(x);if(k.__webglInit===void 0)return;const H=x.source,Y=f.get(H);if(Y){const ne=Y[k.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(x),Object.keys(Y).length===0&&f.delete(H)}i.remove(x)}function S(x){const k=i.get(x);n.deleteTexture(k.__webglTexture);const H=x.source,Y=f.get(H);delete Y[k.__cacheKey],a.memory.textures--}function M(x){const k=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(k.__webglFramebuffer[Y]))for(let ne=0;ne<k.__webglFramebuffer[Y].length;ne++)n.deleteFramebuffer(k.__webglFramebuffer[Y][ne]);else n.deleteFramebuffer(k.__webglFramebuffer[Y]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Y])}else{if(Array.isArray(k.__webglFramebuffer))for(let Y=0;Y<k.__webglFramebuffer.length;Y++)n.deleteFramebuffer(k.__webglFramebuffer[Y]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Y=0;Y<k.__webglColorRenderbuffer.length;Y++)k.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Y]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}const H=x.textures;for(let Y=0,ne=H.length;Y<ne;Y++){const $=i.get(H[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[Y])}i.remove(x)}let P=0;function q(){P=0}function W(){const x=P;return x>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+o.maxTextures),P+=1,x}function Z(x){const k=[];return k.push(x.wrapS),k.push(x.wrapT),k.push(x.wrapR||0),k.push(x.magFilter),k.push(x.minFilter),k.push(x.anisotropy),k.push(x.internalFormat),k.push(x.format),k.push(x.type),k.push(x.generateMipmaps),k.push(x.premultiplyAlpha),k.push(x.flipY),k.push(x.unpackAlignment),k.push(x.colorSpace),k.join()}function J(x,k){const H=i.get(x);if(x.isVideoTexture&&Be(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const Y=x.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(H,x,k);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+k)}function K(x,k){const H=i.get(x);if(x.version>0&&H.__version!==x.version){De(H,x,k);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+k)}function B(x,k){const H=i.get(x);if(x.version>0&&H.__version!==x.version){De(H,x,k);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+k)}function V(x,k){const H=i.get(x);if(x.version>0&&H.__version!==x.version){ke(H,x,k);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+k)}const ue={[pl]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},_e={[Xt]:n.NEAREST,[ec]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[gr]:n.LINEAR_MIPMAP_NEAREST,[Ki]:n.LINEAR_MIPMAP_LINEAR},Ae={[hf]:n.NEVER,[bf]:n.ALWAYS,[ff]:n.LESS,[Tu]:n.LEQUAL,[pf]:n.EQUAL,[gf]:n.GEQUAL,[_f]:n.GREATER,[mf]:n.NOTEQUAL};function Oe(x,k){if(k.type===Kn&&e.has("OES_texture_float_linear")===!1&&(k.magFilter===Zn||k.magFilter===gr||k.magFilter===Qs||k.magFilter===Ki||k.minFilter===Zn||k.minFilter===gr||k.minFilter===Qs||k.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ue[k.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ue[k.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ue[k.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,_e[k.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,_e[k.minFilter]),k.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Ae[k.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===Xt||k.minFilter!==Qs&&k.minFilter!==Ki||k.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||i.get(k).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,o.getMaxAnisotropy())),i.get(k).__currentAnisotropy=k.anisotropy}}}function Je(x,k){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,k.addEventListener("dispose",D));const Y=k.source;let ne=f.get(Y);ne===void 0&&(ne={},f.set(Y,ne));const $=Z(k);if($!==x.__cacheKey){ne[$]===void 0&&(ne[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[$].usedTimes++;const Le=ne[x.__cacheKey];Le!==void 0&&(ne[x.__cacheKey].usedTimes--,Le.usedTimes===0&&S(k)),x.__cacheKey=$,x.__webglTexture=ne[$].texture}return H}function j(x,k,H){return Math.floor(Math.floor(x/H)/k)}function re(x,k,H,Y){const $=x.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,H,Y,k.data);else{$.sort((ie,ye)=>ie.start-ye.start);let Le=0;for(let ie=1;ie<$.length;ie++){const ye=$[Le],qe=$[ie],Ge=ye.start+ye.count,he=j(qe.start,k.width,4),Xe=j(ye.start,k.width,4);qe.start<=Ge+1&&he===Xe&&j(qe.start+qe.count-1,k.width,4)===he?ye.count=Math.max(ye.count,qe.start+qe.count-ye.start):(++Le,$[Le]=qe)}$.length=Le+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,k.width);for(let ie=0,ye=$.length;ie<ye;ie++){const qe=$[ie],Ge=Math.floor(qe.start/4),he=Math.ceil(qe.count/4),Xe=Ge%k.width,U=Math.floor(Ge/k.width),ge=he,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Xe,U,ge,oe,H,Y,k.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function De(x,k,H){let Y=n.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),k.isData3DTexture&&(Y=n.TEXTURE_3D);const ne=Je(x,k),$=k.source;t.bindTexture(Y,x.__webglTexture,n.TEXTURE0+H);const Le=i.get($);if($.version!==Le.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const me=bt.getPrimaries(bt.workingColorSpace),Me=k.colorSpace===wi?null:bt.getPrimaries(k.colorSpace),Ie=k.colorSpace===wi||me===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=b(k.image,!1,o.maxTextureSize);ie=We(k,ie);const ye=s.convert(k.format,k.colorSpace),qe=s.convert(k.type);let Ge=A(k.internalFormat,ye,qe,k.colorSpace,k.isVideoTexture);Oe(Y,k);let he;const Xe=k.mipmaps,U=k.isVideoTexture!==!0,ge=Le.__version===void 0||ne===!0,oe=$.dataReady,Se=N(k,ie);if(k.isDepthTexture)Ge=w(k.format===Ds,k.type),ge&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ge,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ge,ie.width,ie.height,0,ye,qe,null));else if(k.isDataTexture)if(Xe.length>0){U&&ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ge,Xe[0].width,Xe[0].height);for(let se=0,ee=Xe.length;se<ee;se++)he=Xe[se],U?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,ye,qe,he.data):t.texImage2D(n.TEXTURE_2D,se,Ge,he.width,he.height,0,ye,qe,he.data);k.generateMipmaps=!1}else U?(ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ge,ie.width,ie.height),oe&&re(k,ie,ye,qe)):t.texImage2D(n.TEXTURE_2D,0,Ge,ie.width,ie.height,0,ye,qe,ie.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){U&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ge,Xe[0].width,Xe[0].height,ie.depth);for(let se=0,ee=Xe.length;se<ee;se++)if(he=Xe[se],k.format!==Vn)if(ye!==null)if(U){if(oe)if(k.layerUpdates.size>0){const Re=Ed(he.width,he.height,k.format,k.type);for(const Ke of k.layerUpdates){const yt=he.data.subarray(Ke*Re/he.data.BYTES_PER_ELEMENT,(Ke+1)*Re/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ke,he.width,he.height,1,ye,yt)}k.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ie.depth,ye,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Ge,he.width,he.height,ie.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,he.width,he.height,ie.depth,ye,qe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Ge,he.width,he.height,ie.depth,0,ye,qe,he.data)}else{U&&ge&&t.texStorage2D(n.TEXTURE_2D,Se,Ge,Xe[0].width,Xe[0].height);for(let se=0,ee=Xe.length;se<ee;se++)he=Xe[se],k.format!==Vn?ye!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,he.width,he.height,ye,qe,he.data):t.texImage2D(n.TEXTURE_2D,se,Ge,he.width,he.height,0,ye,qe,he.data)}else if(k.isDataArrayTexture)if(U){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,Ge,ie.width,ie.height,ie.depth),oe)if(k.layerUpdates.size>0){const se=Ed(ie.width,ie.height,k.format,k.type);for(const ee of k.layerUpdates){const Re=ie.data.subarray(ee*se/ie.data.BYTES_PER_ELEMENT,(ee+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ye,qe,Re)}k.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,qe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,ie.width,ie.height,ie.depth,0,ye,qe,ie.data);else if(k.isData3DTexture)U?(ge&&t.texStorage3D(n.TEXTURE_3D,Se,Ge,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,qe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,ie.width,ie.height,ie.depth,0,ye,qe,ie.data);else if(k.isFramebufferTexture){if(ge)if(U)t.texStorage2D(n.TEXTURE_2D,Se,Ge,ie.width,ie.height);else{let se=ie.width,ee=ie.height;for(let Re=0;Re<Se;Re++)t.texImage2D(n.TEXTURE_2D,Re,Ge,se,ee,0,ye,qe,null),se>>=1,ee>>=1}}else if(Xe.length>0){if(U&&ge){const se=Tt(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Se,Ge,se.width,se.height)}for(let se=0,ee=Xe.length;se<ee;se++)he=Xe[se],U?oe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ye,qe,he):t.texImage2D(n.TEXTURE_2D,se,Ge,ye,qe,he);k.generateMipmaps=!1}else if(U){if(ge){const se=Tt(ie);t.texStorage2D(n.TEXTURE_2D,Se,Ge,se.width,se.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,qe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ge,ye,qe,ie);m(k)&&p(Y),Le.__version=$.version,k.onUpdate&&k.onUpdate(k)}x.__version=k.version}function ke(x,k,H){if(k.image.length!==6)return;const Y=Je(x,k),ne=k.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+H);const $=i.get(ne);if(ne.version!==$.__version||Y===!0){t.activeTexture(n.TEXTURE0+H);const Le=bt.getPrimaries(bt.workingColorSpace),me=k.colorSpace===wi?null:bt.getPrimaries(k.colorSpace),Me=k.colorSpace===wi||Le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,k.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,k.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=k.isCompressedTexture||k.image[0].isCompressedTexture,ie=k.image[0]&&k.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ie&&!ie?ye[ee]=b(k.image[ee],!0,o.maxCubemapSize):ye[ee]=ie?k.image[ee].image:k.image[ee],ye[ee]=We(k,ye[ee]);const qe=ye[0],Ge=s.convert(k.format,k.colorSpace),he=s.convert(k.type),Xe=A(k.internalFormat,Ge,he,k.colorSpace),U=k.isVideoTexture!==!0,ge=$.__version===void 0||Y===!0,oe=ne.dataReady;let Se=N(k,qe);Oe(n.TEXTURE_CUBE_MAP,k);let se;if(Ie){U&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,qe.width,qe.height);for(let ee=0;ee<6;ee++){se=ye[ee].mipmaps;for(let Re=0;Re<se.length;Re++){const Ke=se[Re];k.format!==Vn?Ge!==null?U?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ke.width,Ke.height,Ge,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Xe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ke.width,Ke.height,Ge,he,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,Xe,Ke.width,Ke.height,0,Ge,he,Ke.data)}}}else{if(se=k.mipmaps,U&&ge){se.length>0&&Se++;const ee=Tt(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Ge,he,ye[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,ye[ee].width,ye[ee].height,0,Ge,he,ye[ee].data);for(let Re=0;Re<se.length;Re++){const yt=se[Re].image[ee].image;U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,yt.width,yt.height,Ge,he,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Xe,yt.width,yt.height,0,Ge,he,yt.data)}}else{U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,he,ye[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ge,he,ye[ee]);for(let Re=0;Re<se.length;Re++){const Ke=se[Re];U?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Ge,he,Ke.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,Xe,Ge,he,Ke.image[ee])}}}m(k)&&p(n.TEXTURE_CUBE_MAP),$.__version=ne.version,k.onUpdate&&k.onUpdate(k)}x.__version=k.version}function le(x,k,H,Y,ne,$){const Le=s.convert(H.format,H.colorSpace),me=s.convert(H.type),Me=A(H.internalFormat,Le,me,H.colorSpace),Ie=i.get(k),ie=i.get(H);if(ie.__renderTarget=k,!Ie.__hasExternalTextures){const ye=Math.max(1,k.width>>$),qe=Math.max(1,k.height>>$);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Me,ye,qe,k.depth,0,Le,me,null):t.texImage2D(ne,$,Me,ye,qe,0,Le,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),at(k)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,ne,ie.__webglTexture,0,we(k)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,ne,ie.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(x,k,H){if(n.bindRenderbuffer(n.RENDERBUFFER,x),k.depthBuffer){const Y=k.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,$=w(k.stencilBuffer,ne),Le=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=we(k);at(k)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,$,k.width,k.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,$,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,$,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,x)}else{const Y=k.textures;for(let ne=0;ne<Y.length;ne++){const $=Y[ne],Le=s.convert($.format,$.colorSpace),me=s.convert($.type),Me=A($.internalFormat,Le,me,$.colorSpace),Ie=we(k);H&&at(k)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Me,k.width,k.height):at(k)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Me,k.width,k.height):n.renderbufferStorage(n.RENDERBUFFER,Me,k.width,k.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(x,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(k.depthTexture);Y.__renderTarget=k,(!Y.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),J(k.depthTexture,0);const ne=Y.__webglTexture,$=we(k);if(k.depthTexture.format===Ps)at(k)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(k.depthTexture.format===Ds)at(k)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ae(x){const k=i.get(x),H=x.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==x.depthTexture){const Y=x.depthTexture;if(k.__depthDisposeCallback&&k.__depthDisposeCallback(),Y){const ne=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),k.__depthDisposeCallback=ne}k.__boundDepthTexture=Y}if(x.depthTexture&&!k.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Y=x.texture.mipmaps;Y&&Y.length>0?Ue(k.__webglFramebuffer[0],x):Ue(k.__webglFramebuffer,x)}else if(H){k.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer[Y]),k.__webglDepthbuffer[Y]===void 0)k.__webglDepthbuffer[Y]=n.createRenderbuffer(),pe(k.__webglDepthbuffer[Y],x,!1);else{const ne=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=k.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,$)}}else{const Y=x.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=n.createRenderbuffer(),pe(k.__webglDepthbuffer,x,!1);else{const ne=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=k.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(x,k,H){const Y=i.get(x);k!==void 0&&le(Y.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ae(x)}function Ne(x){const k=x.texture,H=i.get(x),Y=i.get(k);x.addEventListener("dispose",C);const ne=x.textures,$=x.isWebGLCubeRenderTarget===!0,Le=ne.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=k.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(k.mipmaps&&k.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let Me=0;Me<k.mipmaps.length;Me++)H.__webglFramebuffer[me][Me]=n.createFramebuffer()}else H.__webglFramebuffer[me]=n.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<k.mipmaps.length;me++)H.__webglFramebuffer[me]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Le)for(let me=0,Me=ne.length;me<Me;me++){const Ie=i.get(ne[me]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&at(x)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const Me=ne[me];H.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const Ie=s.convert(Me.format,Me.colorSpace),ie=s.convert(Me.type),ye=A(Me.internalFormat,Ie,ie,Me.colorSpace,x.isXRRenderTarget===!0),qe=we(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,ye,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,H.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,k);for(let me=0;me<6;me++)if(k.mipmaps&&k.mipmaps.length>0)for(let Me=0;Me<k.mipmaps.length;Me++)le(H.__webglFramebuffer[me][Me],x,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else le(H.__webglFramebuffer[me],x,k,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(k)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let me=0,Me=ne.length;me<Me;me++){const Ie=ne[me],ie=i.get(Ie);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Oe(n.TEXTURE_2D,Ie),le(H.__webglFramebuffer,x,Ie,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),m(Ie)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(me=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Y.__webglTexture),Oe(me,k),k.mipmaps&&k.mipmaps.length>0)for(let Me=0;Me<k.mipmaps.length;Me++)le(H.__webglFramebuffer[Me],x,k,n.COLOR_ATTACHMENT0,me,Me);else le(H.__webglFramebuffer,x,k,n.COLOR_ATTACHMENT0,me,0);m(k)&&p(me),t.unbindTexture()}x.depthBuffer&&ae(x)}function R(x){const k=x.textures;for(let H=0,Y=k.length;H<Y;H++){const ne=k[H];if(m(ne)){const $=E(x),Le=i.get(ne).__webglTexture;t.bindTexture($,Le),p($),t.unbindTexture()}}}const pt=[],et=[];function tt(x){if(x.samples>0){if(at(x)===!1){const k=x.textures,H=x.width,Y=x.height;let ne=n.COLOR_BUFFER_BIT;const $=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(x),me=k.length>1;if(me)for(let Ie=0;Ie<k.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Me=x.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<k.length;Ie++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ie=i.get(k[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,H,Y,0,0,H,Y,ne,n.NEAREST),l===!0&&(pt.length=0,et.length=0,pt.push(n.COLOR_ATTACHMENT0+Ie),x.depthBuffer&&x.resolveDepthBuffer===!1&&(pt.push($),et.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,et)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ie=0;Ie<k.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ie=i.get(k[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[k])}}}function we(x){return Math.min(o.maxSamples,x.samples)}function at(x){const k=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function Be(x){const k=a.render.frame;c.get(x)!==k&&(c.set(x,k),x.update())}function We(x,k){const H=x.colorSpace,Y=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||H!==Zo&&H!==wi&&(bt.getTransfer(H)===Et?(Y!==Vn||ne!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),k}function Tt(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(d.width=x.naturalWidth||x.width,d.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(d.width=x.displayWidth,d.height=x.displayHeight):(d.width=x.width,d.height=x.height),d}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=V,this.rebindTextures=xe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=le,this.useMultisampledRTT=at}function ig(n,e){function t(i,o=wi){let s;const a=bt.getTransfer(o);if(i===Jn)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vu)return n.BYTE;if(i===xu)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===no)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Xs)return n.HALF_FLOAT;if(i===Mu)return n.ALPHA;if(i===Su)return n.RGB;if(i===Vn)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===ac)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===La||i===Pa||i===Da||i===Ia)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===bl||i===kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===xl)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===Sl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Ll||i===Pl||i===Dl||i===Il||i===Ul||i===Nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ml)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Fl||i===Ol)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ua)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Bl||i===zl||i===Hl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new ln,s=e.properties.get(o);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ii({vertexShader:og,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends ts{constructor(e,t){super();const i=this;let o=null,s=1,a=null,r="local-floor",l=1,d=null,c=null,u=null,f=null,_=null,g=null;const b=new ag,m=t.getContextAttributes();let p=null,E=null;const A=[],w=[],N=new Qe;let D=null;const C=new Mn;C.viewport=new Ot;const O=new Mn;O.viewport=new Ot;const S=[C,O],M=new Ep;let P=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=A[j];return re===void 0&&(re=new Or,A[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=A[j];return re===void 0&&(re=new Or,A[j]=re),re.getGripSpace()},this.getHand=function(j){let re=A[j];return re===void 0&&(re=new Or,A[j]=re),re.getHandSpace()};function W(j){const re=w.indexOf(j.inputSource);if(re===-1)return;const De=A[re];De!==void 0&&(De.update(j.inputSource,j.frame,d||a),De.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",J);for(let j=0;j<A.length;j++){const re=w[j];re!==null&&(w[j]=null,A[j].disconnect(re))}P=null,q=null,b.reset(),e.setRenderTarget(p),_=null,f=null,u=null,o=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(j){d=j},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(p=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,ke=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=m.stencil?Ds:Ps,ke=m.stencil?Ls:no);const pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(o,t),f=u.createProjectionLayer(pe),o.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new io(f.textureWidth,f.textureHeight,{format:Vn,type:Jn,depthTexture:new Bu(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const De={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(o,t,De),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),E=new io(_.framebufferWidth,_.framebufferHeight,{format:Vn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),d=null,a=await o.requestReferenceSpace(r),Je.setContext(o),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function J(j){for(let re=0;re<j.removed.length;re++){const De=j.removed[re],ke=w.indexOf(De);ke>=0&&(w[ke]=null,A[ke].disconnect(De))}for(let re=0;re<j.added.length;re++){const De=j.added[re];let ke=w.indexOf(De);if(ke===-1){for(let pe=0;pe<A.length;pe++)if(pe>=w.length){w.push(De),ke=pe;break}else if(w[pe]===null){w[pe]=De,ke=pe;break}if(ke===-1)break}const le=A[ke];le&&le.connect(De)}}const K=new F,B=new F;function V(j,re,De){K.setFromMatrixPosition(re.matrixWorld),B.setFromMatrixPosition(De.matrixWorld);const ke=K.distanceTo(B),le=re.projectionMatrix.elements,pe=De.projectionMatrix.elements,Ue=le[14]/(le[10]-1),ae=le[14]/(le[10]+1),xe=(le[9]+1)/le[5],Ne=(le[9]-1)/le[5],R=(le[8]-1)/le[0],pt=(pe[8]+1)/pe[0],et=Ue*R,tt=Ue*pt,we=ke/(-R+pt),at=we*-R;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(at),j.translateZ(we),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),le[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Be=Ue+we,We=ae+we,Tt=et-at,x=tt+(ke-at),k=xe*ae/We*Be,H=Ne*ae/We*Be;j.projectionMatrix.makePerspective(Tt,x,k,H,Be,We),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let re=j.near,De=j.far;b.texture!==null&&(b.depthNear>0&&(re=b.depthNear),b.depthFar>0&&(De=b.depthFar)),M.near=O.near=C.near=re,M.far=O.far=C.far=De,(P!==M.near||q!==M.far)&&(o.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,q=M.far),C.layers.mask=j.layers.mask|2,O.layers.mask=j.layers.mask|4,M.layers.mask=C.layers.mask|O.layers.mask;const ke=j.parent,le=M.cameras;ue(M,ke);for(let pe=0;pe<le.length;pe++)ue(le[pe],ke);le.length===2?V(M,C,O):M.projectionMatrix.copy(C.projectionMatrix),_e(j,M,ke)};function _e(j,re,De){De===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(De.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Is*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let Ae=null;function Oe(j,re){if(c=re.getViewerPose(d||a),g=re,c!==null){const De=c.views;_!==null&&(e.setRenderTargetFramebuffer(E,_.framebuffer),e.setRenderTarget(E));let ke=!1;De.length!==M.cameras.length&&(M.cameras.length=0,ke=!0);for(let Ue=0;Ue<De.length;Ue++){const ae=De[Ue];let xe=null;if(_!==null)xe=_.getViewport(ae);else{const R=u.getViewSubImage(f,ae);xe=R.viewport,Ue===0&&(e.setRenderTargetTextures(E,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(E))}let Ne=S[Ue];Ne===void 0&&(Ne=new Mn,Ne.layers.enable(Ue),Ne.viewport=new Ot,S[Ue]=Ne),Ne.matrix.fromArray(ae.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ae.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(xe.x,xe.y,xe.width,xe.height),Ue===0&&(M.matrix.copy(Ne.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ke===!0&&M.cameras.push(Ne)}const le=o.enabledFeatures;if(le&&le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&u){const Ue=u.getDepthInformation(De[0]);Ue&&Ue.isValid&&Ue.texture&&b.init(e,Ue,o.renderState)}}for(let De=0;De<A.length;De++){const ke=w[De],le=A[De];ke!==null&&le!==void 0&&le.update(ke,re,d||a)}Ae&&Ae(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Je=new Gu;Je.setAnimationLoop(Oe),this.setAnimationLoop=function(j){Ae=j},this.dispose=function(){}}}const Wi=new Xn,lg=new wt;function cg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function o(m,p,E,A,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&_(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?d(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),A=E.envMap,w=E.envMapRotation;A&&(m.envMap.value=A,Wi.copy(w),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(Wi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function dg(n,e,t,i){let o={},s={},a=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const w=A.program;i.uniformBlockBinding(E,w)}function d(E,A){let w=o[E.id];w===void 0&&(g(E),w=c(E),o[E.id]=w,E.addEventListener("dispose",m));const N=A.program;i.updateUBOMapping(E,N);const D=e.render.frame;s[E.id]!==D&&(f(E),s[E.id]=D)}function c(E){const A=u();E.__bindingPointIndex=A;const w=n.createBuffer(),N=E.__size,D=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,N,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,w),w}function u(){for(let E=0;E<r;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const A=o[E.id],w=E.uniforms,N=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,C=w.length;D<C;D++){const O=Array.isArray(w[D])?w[D]:[w[D]];for(let S=0,M=O.length;S<M;S++){const P=O[S];if(_(P,D,S,N)===!0){const q=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let J=0;J<W.length;J++){const K=W[J],B=b(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,q+Z,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(E,A,w,N){const D=E.value,C=A+"_"+w;if(N[C]===void 0)return typeof D=="number"||typeof D=="boolean"?N[C]=D:N[C]=D.clone(),!0;{const O=N[C];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return N[C]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(E){const A=E.uniforms;let w=0;const N=16;for(let C=0,O=A.length;C<O;C++){const S=Array.isArray(A[C])?A[C]:[A[C]];for(let M=0,P=S.length;M<P;M++){const q=S[M],W=Array.isArray(q.value)?q.value:[q.value];for(let Z=0,J=W.length;Z<J;Z++){const K=W[Z],B=b(K),V=w%N,ue=V%B.boundary,_e=V+ue;w+=ue,_e!==0&&N-_e<B.storage&&(w+=N-_e),q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=B.storage}}}const D=w%N;return D>0&&(w+=N-D),E.__size=w,E.__cache={},this}function b(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),A}function m(E){const A=E.target;A.removeEventListener("dispose",m);const w=a.indexOf(A.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete s[A.id]}function p(){for(const E in o)n.deleteBuffer(o[E]);a=[],o={},s={}}return{bind:l,update:d,dispose:p}}class ug{constructor(e={}){const{canvas:t=Uf(),context:i=null,depth:o=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:d=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=Ft;let D=0,C=0,O=null,S=-1,M=null;const P=new Ot,q=new Ot;let W=null;const Z=new st(0);let J=0,K=t.width,B=t.height,V=1,ue=null,_e=null;const Ae=new Ot(0,0,K,B),Oe=new Ot(0,0,K,B);let Je=!1;const j=new mc;let re=!1,De=!1;const ke=new wt,le=new wt,pe=new F,Ue=new Ot,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Ne(){return O===null?V:1}let R=i;function pt(y,h){return t.getContext(y,h)}try{const y={alpha:!0,depth:o,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:d,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ee,!1),R===null){const h="webgl2";if(R=pt(h,y),R===null)throw pt(h)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let et,tt,we,at,Be,We,Tt,x,k,H,Y,ne,$,Le,me,Me,Ie,ie,ye,qe,Ge,he,Xe,U;function ge(){et=new xm(R),et.init(),he=new ig(R,et),tt=new pm(R,et,e,he),we=new tg(R,et),tt.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),at=new Sm(R),Be=new G1,We=new ng(R,et,we,Be,tt,he,at),Tt=new mm(w),x=new vm(w),k=new Cp(R),Xe=new hm(R,k),H=new ym(R,k,at,Xe),Y=new Em(R,H,k,at),ye=new wm(R,tt,We),Me=new _m(Be),ne=new H1(w,Tt,x,et,tt,Xe,Me),$=new cg(w,Be),Le=new W1,me=new Z1(et),ie=new um(w,Tt,x,we,Y,_,l),Ie=new Q1(w,Y,tt),U=new dg(R,at,tt,we),qe=new fm(R,et,at),Ge=new Mm(R,et,at),at.programs=ne.programs,w.capabilities=tt,w.extensions=et,w.properties=Be,w.renderLists=Le,w.shadowMap=Ie,w.state=we,w.info=at}ge();const oe=new rg(w,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(K,B,!1))},this.getSize=function(y){return y.set(K,B)},this.setSize=function(y,h,v=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,B=h,t.width=Math.floor(y*V),t.height=Math.floor(h*V),v===!0&&(t.style.width=y+"px",t.style.height=h+"px"),this.setViewport(0,0,y,h)},this.getDrawingBufferSize=function(y){return y.set(K*V,B*V).floor()},this.setDrawingBufferSize=function(y,h,v){K=y,B=h,V=v,t.width=Math.floor(y*v),t.height=Math.floor(h*v),this.setViewport(0,0,y,h)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,h,v,L){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,h,v,L),we.viewport(P.copy(Ae).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,h,v,L){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,h,v,L),we.scissor(q.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){we.setScissorTest(Je=y)},this.setOpaqueSort=function(y){ue=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(y=!0,h=!0,v=!0){let L=0;if(y){let T=!1;if(O!==null){const z=O.texture.format;T=z===rc||z===ac||z===sc}if(T){const z=O.texture.type,Q=z===Jn||z===no||z===Cs||z===Ls||z===nc||z===ic,ce=ie.getClearColor(),de=ie.getClearAlpha(),Ce=ce.r,Fe=ce.g,fe=ce.b;Q?(g[0]=Ce,g[1]=Fe,g[2]=fe,g[3]=de,R.clearBufferuiv(R.COLOR,0,g)):(b[0]=Ce,b[1]=Fe,b[2]=fe,b[3]=de,R.clearBufferiv(R.COLOR,0,b))}else L|=R.COLOR_BUFFER_BIT}h&&(L|=R.DEPTH_BUFFER_BIT),v&&(L|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ie.dispose(),Le.dispose(),me.dispose(),Be.dispose(),Tt.dispose(),x.dispose(),Y.dispose(),Xe.dispose(),U.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",X),oe.removeEventListener("sessionend",te),be.stop()};function Se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const y=at.autoReset,h=Ie.enabled,v=Ie.autoUpdate,L=Ie.needsUpdate,T=Ie.type;ge(),at.autoReset=y,Ie.enabled=h,Ie.autoUpdate=v,Ie.needsUpdate=L,Ie.type=T}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Re(y){const h=y.target;h.removeEventListener("dispose",Re),Ke(h)}function Ke(y){yt(y),Be.remove(y)}function yt(y){const h=Be.get(y).programs;h!==void 0&&(h.forEach(function(v){ne.releaseProgram(v)}),y.isShaderMaterial&&ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,h,v,L,T,z){h===null&&(h=ae);const Q=T.isMesh&&T.matrixWorld.determinant()<0,ce=hr(y,h,v,L,T);we.setMaterial(L,Q);let de=v.index,Ce=1;if(L.wireframe===!0){if(de=H.getWireframeAttribute(v),de===void 0)return;Ce=2}const Fe=v.drawRange,fe=v.attributes.position;let Ye=Fe.start*Ce,lt=(Fe.start+Fe.count)*Ce;z!==null&&(Ye=Math.max(Ye,z.start*Ce),lt=Math.min(lt,(z.start+z.count)*Ce)),de!==null?(Ye=Math.max(Ye,0),lt=Math.min(lt,de.count)):fe!=null&&(Ye=Math.max(Ye,0),lt=Math.min(lt,fe.count));const ut=lt-Ye;if(ut<0||ut===1/0)return;Xe.setup(T,L,ce,v,de);let ze,$e=qe;if(de!==null&&(ze=k.get(de),$e=Ge,$e.setIndex(ze)),T.isMesh)L.wireframe===!0?(we.setLineWidth(L.wireframeLinewidth*Ne()),$e.setMode(R.LINES)):$e.setMode(R.TRIANGLES);else if(T.isLine){let Ee=L.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*Ne()),T.isLineSegments?$e.setMode(R.LINES):T.isLineLoop?$e.setMode(R.LINE_LOOP):$e.setMode(R.LINE_STRIP)}else T.isPoints?$e.setMode(R.POINTS):T.isSprite&&$e.setMode(R.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))$e.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const Ee=T._multiDrawStarts,it=T._multiDrawCounts,ot=T._multiDrawCount,Pt=de?k.get(de).bytesPerElement:1,Zt=Be.get(L).currentProgram.getUniforms();for(let It=0;It<ot;It++)Zt.setValue(R,"_gl_DrawID",It),$e.render(Ee[It]/Pt,it[It])}else if(T.isInstancedMesh)$e.renderInstances(Ye,ut,T.count);else if(v.isInstancedBufferGeometry){const Ee=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,it=Math.min(v.instanceCount,Ee);$e.renderInstances(Ye,ut,it)}else $e.render(Ye,ut)};function _t(y,h,v){y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=Sn,y.needsUpdate=!0,Qt(y,h,v),y.side=Di,y.needsUpdate=!0,Qt(y,h,v),y.side=Hn):Qt(y,h,v)}this.compile=function(y,h,v=null){v===null&&(v=y),p=me.get(v),p.init(h),A.push(p),v.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),y!==v&&y.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(p.pushLight(T),T.castShadow&&p.pushShadow(T))}),p.setupLights();const L=new Set;return y.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const z=T.material;if(z)if(Array.isArray(z))for(let Q=0;Q<z.length;Q++){const ce=z[Q];_t(ce,v,T),L.add(ce)}else _t(z,v,T),L.add(z)}),p=A.pop(),L},this.compileAsync=function(y,h,v=null){const L=this.compile(y,h,v);return new Promise(T=>{function z(){if(L.forEach(function(Q){Be.get(Q).currentProgram.isReady()&&L.delete(Q)}),L.size===0){T(y);return}setTimeout(z,10)}et.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let gn=null;function I(y){gn&&gn(y)}function X(){be.stop()}function te(){be.start()}const be=new Gu;be.setAnimationLoop(I),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(y){gn=y,oe.setAnimationLoop(y),y===null?be.stop():be.start()},oe.addEventListener("sessionstart",X),oe.addEventListener("sessionend",te),this.render=function(y,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(h),h=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,h,O),p=me.get(y,A.length),p.init(h),A.push(p),le.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),j.setFromProjectionMatrix(le),De=this.localClippingEnabled,re=Me.init(this.clippingPlanes,De),m=Le.get(y,E.length),m.init(),E.push(m),oe.enabled===!0&&oe.isPresenting===!0){const z=w.xr.getDepthSensingMesh();z!==null&&Ve(z,h,-1/0,w.sortObjects)}Ve(y,h,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ue,_e),xe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,xe&&ie.addToRenderList(m,y),this.info.render.frame++,re===!0&&Me.beginShadows();const v=p.state.shadowsArray;Ie.render(v,y,h),re===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=m.opaque,T=m.transmissive;if(p.setupLights(),h.isArrayCamera){const z=h.cameras;if(T.length>0)for(let Q=0,ce=z.length;Q<ce;Q++){const de=z[Q];mt(L,T,y,de)}xe&&ie.render(y);for(let Q=0,ce=z.length;Q<ce;Q++){const de=z[Q];He(m,y,de,de.viewport)}}else T.length>0&&mt(L,T,y,h),xe&&ie.render(y),He(m,y,h);O!==null&&C===0&&(We.updateMultisampleRenderTarget(O),We.updateRenderTargetMipmap(O)),y.isScene===!0&&y.onAfterRender(w,y,h),Xe.resetDefaultState(),S=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],re===!0&&Me.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ve(y,h,v,L){if(y.visible===!1)return;if(y.layers.test(h.layers)){if(y.isGroup)v=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(h);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){L&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(le);const Q=Y.update(y),ce=y.material;ce.visible&&m.push(y,Q,ce,v,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const Q=Y.update(y),ce=y.material;if(L&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Ue.copy(Q.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(le)),Array.isArray(ce)){const de=Q.groups;for(let Ce=0,Fe=de.length;Ce<Fe;Ce++){const fe=de[Ce],Ye=ce[fe.materialIndex];Ye&&Ye.visible&&m.push(y,Q,Ye,v,Ue.z,fe)}}else ce.visible&&m.push(y,Q,ce,v,Ue.z,null)}}const z=y.children;for(let Q=0,ce=z.length;Q<ce;Q++)Ve(z[Q],h,v,L)}function He(y,h,v,L){const T=y.opaque,z=y.transmissive,Q=y.transparent;p.setupLightsView(v),re===!0&&Me.setGlobalState(w.clippingPlanes,v),L&&we.viewport(P.copy(L)),T.length>0&&nt(T,h,v),z.length>0&&nt(z,h,v),Q.length>0&&nt(Q,h,v),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function mt(y,h,v,L){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[L.id]===void 0&&(p.state.transmissionRenderTarget[L.id]=new io(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Xs:Jn,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const z=p.state.transmissionRenderTarget[L.id],Q=L.viewport||P;z.setSize(Q.z*w.transmissionResolutionScale,Q.w*w.transmissionResolutionScale);const ce=w.getRenderTarget(),de=w.getActiveCubeFace(),Ce=w.getActiveMipmapLevel();w.setRenderTarget(z),w.getClearColor(Z),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),xe&&ie.render(v);const Fe=w.toneMapping;w.toneMapping=Ci;const fe=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),p.setupLightsView(L),re===!0&&Me.setGlobalState(w.clippingPlanes,L),nt(y,v,L),We.updateMultisampleRenderTarget(z),We.updateRenderTargetMipmap(z),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let lt=0,ut=h.length;lt<ut;lt++){const ze=h[lt],$e=ze.object,Ee=ze.geometry,it=ze.material,ot=ze.group;if(it.side===Hn&&$e.layers.test(L.layers)){const Pt=it.side;it.side=Sn,it.needsUpdate=!0,Lt($e,v,L,Ee,it,ot),it.side=Pt,it.needsUpdate=!0,Ye=!0}}Ye===!0&&(We.updateMultisampleRenderTarget(z),We.updateRenderTargetMipmap(z))}w.setRenderTarget(ce,de,Ce),w.setClearColor(Z,J),fe!==void 0&&(L.viewport=fe),w.toneMapping=Fe}function nt(y,h,v){const L=h.isScene===!0?h.overrideMaterial:null;for(let T=0,z=y.length;T<z;T++){const Q=y[T],ce=Q.object,de=Q.geometry,Ce=Q.group;let Fe=Q.material;Fe.allowOverride===!0&&L!==null&&(Fe=L),ce.layers.test(v.layers)&&Lt(ce,h,v,de,Fe,Ce)}}function Lt(y,h,v,L,T,z){y.onBeforeRender(w,h,v,L,T,z),y.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),T.onBeforeRender(w,h,v,L,y,z),T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,w.renderBufferDirect(v,h,L,T,y,z),T.side=Di,T.needsUpdate=!0,w.renderBufferDirect(v,h,L,T,y,z),T.side=Hn):w.renderBufferDirect(v,h,L,T,y,z),y.onAfterRender(w,h,v,L,T,z)}function Qt(y,h,v){h.isScene!==!0&&(h=ae);const L=Be.get(y),T=p.state.lights,z=p.state.shadowsArray,Q=T.state.version,ce=ne.getParameters(y,T.state,z,h,v),de=ne.getProgramCacheKey(ce);let Ce=L.programs;L.environment=y.isMeshStandardMaterial?h.environment:null,L.fog=h.fog,L.envMap=(y.isMeshStandardMaterial?x:Tt).get(y.envMap||L.environment),L.envMapRotation=L.environment!==null&&y.envMap===null?h.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",Re),Ce=new Map,L.programs=Ce);let Fe=Ce.get(de);if(Fe!==void 0){if(L.currentProgram===Fe&&L.lightsStateVersion===Q)return gi(y,ce),Fe}else ce.uniforms=ne.getUniforms(y),y.onBeforeCompile(ce,w),Fe=ne.acquireProgram(ce,de),Ce.set(de,Fe),L.uniforms=ce.uniforms;const fe=L.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(fe.clippingPlanes=Me.uniform),gi(y,ce),L.needsLights=Js(y),L.lightsStateVersion=Q,L.needsLights&&(fe.ambientLightColor.value=T.state.ambient,fe.lightProbe.value=T.state.probe,fe.directionalLights.value=T.state.directional,fe.directionalLightShadows.value=T.state.directionalShadow,fe.spotLights.value=T.state.spot,fe.spotLightShadows.value=T.state.spotShadow,fe.rectAreaLights.value=T.state.rectArea,fe.ltc_1.value=T.state.rectAreaLTC1,fe.ltc_2.value=T.state.rectAreaLTC2,fe.pointLights.value=T.state.point,fe.pointLightShadows.value=T.state.pointShadow,fe.hemisphereLights.value=T.state.hemi,fe.directionalShadowMap.value=T.state.directionalShadowMap,fe.directionalShadowMatrix.value=T.state.directionalShadowMatrix,fe.spotShadowMap.value=T.state.spotShadowMap,fe.spotLightMatrix.value=T.state.spotLightMatrix,fe.spotLightMap.value=T.state.spotLightMap,fe.pointShadowMap.value=T.state.pointShadowMap,fe.pointShadowMatrix.value=T.state.pointShadowMatrix),L.currentProgram=Fe,L.uniformsList=null,Fe}function ho(y){if(y.uniformsList===null){const h=y.currentProgram.getUniforms();y.uniformsList=Na.seqWithValue(h.seq,y.uniforms)}return y.uniformsList}function gi(y,h){const v=Be.get(y);v.outputColorSpace=h.outputColorSpace,v.batching=h.batching,v.batchingColor=h.batchingColor,v.instancing=h.instancing,v.instancingColor=h.instancingColor,v.instancingMorph=h.instancingMorph,v.skinning=h.skinning,v.morphTargets=h.morphTargets,v.morphNormals=h.morphNormals,v.morphColors=h.morphColors,v.morphTargetsCount=h.morphTargetsCount,v.numClippingPlanes=h.numClippingPlanes,v.numIntersection=h.numClipIntersection,v.vertexAlphas=h.vertexAlphas,v.vertexTangents=h.vertexTangents,v.toneMapping=h.toneMapping}function hr(y,h,v,L,T){h.isScene!==!0&&(h=ae),We.resetTextureUnits();const z=h.fog,Q=L.isMeshStandardMaterial?h.environment:null,ce=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Zo,de=(L.isMeshStandardMaterial?x:Tt).get(L.envMap||Q),Ce=L.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,Fe=!!v.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),fe=!!v.morphAttributes.position,Ye=!!v.morphAttributes.normal,lt=!!v.morphAttributes.color;let ut=Ci;L.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ut=w.toneMapping);const ze=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,$e=ze!==void 0?ze.length:0,Ee=Be.get(L),it=p.state.lights;if(re===!0&&(De===!0||y!==M)){const nn=y===M&&L.id===S;Me.setState(L,y,nn)}let ot=!1;L.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==it.state.version||Ee.outputColorSpace!==ce||T.isBatchedMesh&&Ee.batching===!1||!T.isBatchedMesh&&Ee.batching===!0||T.isBatchedMesh&&Ee.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&Ee.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&Ee.instancing===!1||!T.isInstancedMesh&&Ee.instancing===!0||T.isSkinnedMesh&&Ee.skinning===!1||!T.isSkinnedMesh&&Ee.skinning===!0||T.isInstancedMesh&&Ee.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&Ee.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&Ee.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&Ee.instancingMorph===!1&&T.morphTexture!==null||Ee.envMap!==de||L.fog===!0&&Ee.fog!==z||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Me.numPlanes||Ee.numIntersection!==Me.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Fe||Ee.morphTargets!==fe||Ee.morphNormals!==Ye||Ee.morphColors!==lt||Ee.toneMapping!==ut||Ee.morphTargetsCount!==$e)&&(ot=!0):(ot=!0,Ee.__version=L.version);let Pt=Ee.currentProgram;ot===!0&&(Pt=Qt(L,h,T));let Zt=!1,It=!1,$n=!1;const xt=Pt.getUniforms(),en=Ee.uniforms;if(we.useProgram(Pt.program)&&(Zt=!0,It=!0,$n=!0),L.id!==S&&(S=L.id,It=!0),Zt||M!==y){we.buffers.depth.getReversed()?(ke.copy(y.projectionMatrix),Ff(ke),Of(ke),xt.setValue(R,"projectionMatrix",ke)):xt.setValue(R,"projectionMatrix",y.projectionMatrix),xt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Wt=xt.map.cameraPosition;Wt!==void 0&&Wt.setValue(R,pe.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&xt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&xt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,It=!0,$n=!0)}if(T.isSkinnedMesh){xt.setOptional(R,T,"bindMatrix"),xt.setOptional(R,T,"bindMatrixInverse");const nn=T.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),xt.setValue(R,"boneTexture",nn.boneTexture,We))}T.isBatchedMesh&&(xt.setOptional(R,T,"batchingTexture"),xt.setValue(R,"batchingTexture",T._matricesTexture,We),xt.setOptional(R,T,"batchingIdTexture"),xt.setValue(R,"batchingIdTexture",T._indirectTexture,We),xt.setOptional(R,T,"batchingColorTexture"),T._colorsTexture!==null&&xt.setValue(R,"batchingColorTexture",T._colorsTexture,We));const tn=v.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ye.update(T,v,Pt),(It||Ee.receiveShadow!==T.receiveShadow)&&(Ee.receiveShadow=T.receiveShadow,xt.setValue(R,"receiveShadow",T.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(en.envMap.value=de,en.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&h.environment!==null&&(en.envMapIntensity.value=h.environmentIntensity),It&&(xt.setValue(R,"toneMappingExposure",w.toneMappingExposure),Ee.needsLights&&fr(en,$n),z&&L.fog===!0&&$.refreshFogUniforms(en,z),$.refreshMaterialUniforms(en,L,V,B,p.state.transmissionRenderTarget[y.id]),Na.upload(R,ho(Ee),en,We)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Na.upload(R,ho(Ee),en,We),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&xt.setValue(R,"center",T.center),xt.setValue(R,"modelViewMatrix",T.modelViewMatrix),xt.setValue(R,"normalMatrix",T.normalMatrix),xt.setValue(R,"modelMatrix",T.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const nn=L.uniformsGroups;for(let Wt=0,fo=nn.length;Wt<fo;Wt++){const Oi=nn[Wt];U.update(Oi,Pt),U.bind(Oi,Pt)}}return Pt}function fr(y,h){y.ambientLightColor.needsUpdate=h,y.lightProbe.needsUpdate=h,y.directionalLights.needsUpdate=h,y.directionalLightShadows.needsUpdate=h,y.pointLights.needsUpdate=h,y.pointLightShadows.needsUpdate=h,y.spotLights.needsUpdate=h,y.spotLightShadows.needsUpdate=h,y.rectAreaLights.needsUpdate=h,y.hemisphereLights.needsUpdate=h}function Js(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,h,v){const L=Be.get(y);L.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Be.get(y.texture).__webglTexture=h,Be.get(y.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:v,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,h){const v=Be.get(y);v.__webglFramebuffer=h,v.__useDefaultFramebuffer=h===void 0};const pr=R.createFramebuffer();this.setRenderTarget=function(y,h=0,v=0){O=y,D=h,C=v;let L=!0,T=null,z=!1,Q=!1;if(y){const de=Be.get(y);if(de.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(R.FRAMEBUFFER,null),L=!1;else if(de.__webglFramebuffer===void 0)We.setupRenderTarget(y);else if(de.__hasExternalTextures)We.rebindTextures(y,Be.get(y.texture).__webglTexture,Be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const fe=y.depthTexture;if(de.__boundDepthTexture!==fe){if(fe!==null&&Be.has(fe)&&(y.width!==fe.image.width||y.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Q=!0);const Fe=Be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[h])?T=Fe[h][v]:T=Fe[h],z=!0):y.samples>0&&We.useMultisampledRTT(y)===!1?T=Be.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?T=Fe[v]:T=Fe,P.copy(y.viewport),q.copy(y.scissor),W=y.scissorTest}else P.copy(Ae).multiplyScalar(V).floor(),q.copy(Oe).multiplyScalar(V).floor(),W=Je;if(v!==0&&(T=pr),we.bindFramebuffer(R.FRAMEBUFFER,T)&&L&&we.drawBuffers(y,T),we.viewport(P),we.scissor(q),we.setScissorTest(W),z){const de=Be.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+h,de.__webglTexture,v)}else if(Q){const de=Be.get(y.texture),Ce=h;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,de.__webglTexture,v,Ce)}else if(y!==null&&v!==0){const de=Be.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,v)}S=-1},this.readRenderTargetPixels=function(y,h,v,L,T,z,Q,ce=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Q!==void 0&&(de=de[Q]),de){we.bindFramebuffer(R.FRAMEBUFFER,de);try{const Ce=y.textures[ce],Fe=Ce.format,fe=Ce.type;if(!tt.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}h>=0&&h<=y.width-L&&v>=0&&v<=y.height-T&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ce),R.readPixels(h,v,L,T,he.convert(Fe),he.convert(fe),z))}finally{const Ce=O!==null?Be.get(O).__webglFramebuffer:null;we.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,h,v,L,T,z,Q,ce=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Q!==void 0&&(de=de[Q]),de)if(h>=0&&h<=y.width-L&&v>=0&&v<=y.height-T){we.bindFramebuffer(R.FRAMEBUFFER,de);const Ce=y.textures[ce],Fe=Ce.format,fe=Ce.type;if(!tt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.bufferData(R.PIXEL_PACK_BUFFER,z.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ce),R.readPixels(h,v,L,T,he.convert(Fe),he.convert(fe),0);const lt=O!==null?Be.get(O).__webglFramebuffer:null;we.bindFramebuffer(R.FRAMEBUFFER,lt);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Nf(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ye),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,z),R.deleteBuffer(Ye),R.deleteSync(ut),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,h=null,v=0){const L=Math.pow(2,-v),T=Math.floor(y.image.width*L),z=Math.floor(y.image.height*L),Q=h!==null?h.x:0,ce=h!==null?h.y:0;We.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,v,0,0,Q,ce,T,z),we.unbindTexture()};const _r=R.createFramebuffer(),mr=R.createFramebuffer();this.copyTextureToTexture=function(y,h,v=null,L=null,T=0,z=null){z===null&&(T!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),z=T,T=0):z=0);let Q,ce,de,Ce,Fe,fe,Ye,lt,ut;const ze=y.isCompressedTexture?y.mipmaps[z]:y.image;if(v!==null)Q=v.max.x-v.min.x,ce=v.max.y-v.min.y,de=v.isBox3?v.max.z-v.min.z:1,Ce=v.min.x,Fe=v.min.y,fe=v.isBox3?v.min.z:0;else{const tn=Math.pow(2,-T);Q=Math.floor(ze.width*tn),ce=Math.floor(ze.height*tn),y.isDataArrayTexture?de=ze.depth:y.isData3DTexture?de=Math.floor(ze.depth*tn):de=1,Ce=0,Fe=0,fe=0}L!==null?(Ye=L.x,lt=L.y,ut=L.z):(Ye=0,lt=0,ut=0);const $e=he.convert(h.format),Ee=he.convert(h.type);let it;h.isData3DTexture?(We.setTexture3D(h,0),it=R.TEXTURE_3D):h.isDataArrayTexture||h.isCompressedArrayTexture?(We.setTexture2DArray(h,0),it=R.TEXTURE_2D_ARRAY):(We.setTexture2D(h,0),it=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,h.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,h.unpackAlignment);const ot=R.getParameter(R.UNPACK_ROW_LENGTH),Pt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Zt=R.getParameter(R.UNPACK_SKIP_PIXELS),It=R.getParameter(R.UNPACK_SKIP_ROWS),$n=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ze.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ze.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Fe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,fe);const xt=y.isDataArrayTexture||y.isData3DTexture,en=h.isDataArrayTexture||h.isData3DTexture;if(y.isDepthTexture){const tn=Be.get(y),nn=Be.get(h),Wt=Be.get(tn.__renderTarget),fo=Be.get(nn.__renderTarget);we.bindFramebuffer(R.READ_FRAMEBUFFER,Wt.__webglFramebuffer),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let Oi=0;Oi<de;Oi++)xt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Be.get(y).__webglTexture,T,fe+Oi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Be.get(h).__webglTexture,z,ut+Oi)),R.blitFramebuffer(Ce,Fe,Q,ce,Ye,lt,Q,ce,R.DEPTH_BUFFER_BIT,R.NEAREST);we.bindFramebuffer(R.READ_FRAMEBUFFER,null),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(T!==0||y.isRenderTargetTexture||Be.has(y)){const tn=Be.get(y),nn=Be.get(h);we.bindFramebuffer(R.READ_FRAMEBUFFER,_r),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,mr);for(let Wt=0;Wt<de;Wt++)xt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tn.__webglTexture,T,fe+Wt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,tn.__webglTexture,T),en?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,nn.__webglTexture,z,ut+Wt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,nn.__webglTexture,z),T!==0?R.blitFramebuffer(Ce,Fe,Q,ce,Ye,lt,Q,ce,R.COLOR_BUFFER_BIT,R.NEAREST):en?R.copyTexSubImage3D(it,z,Ye,lt,ut+Wt,Ce,Fe,Q,ce):R.copyTexSubImage2D(it,z,Ye,lt,Ce,Fe,Q,ce);we.bindFramebuffer(R.READ_FRAMEBUFFER,null),we.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else en?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(it,z,Ye,lt,ut,Q,ce,de,$e,Ee,ze.data):h.isCompressedArrayTexture?R.compressedTexSubImage3D(it,z,Ye,lt,ut,Q,ce,de,$e,ze.data):R.texSubImage3D(it,z,Ye,lt,ut,Q,ce,de,$e,Ee,ze):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,z,Ye,lt,Q,ce,$e,Ee,ze.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,z,Ye,lt,ze.width,ze.height,$e,ze.data):R.texSubImage2D(R.TEXTURE_2D,z,Ye,lt,Q,ce,$e,Ee,ze);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Zt),R.pixelStorei(R.UNPACK_SKIP_ROWS,It),R.pixelStorei(R.UNPACK_SKIP_IMAGES,$n),z===0&&h.generateMipmaps&&R.generateMipmap(it),we.unbindTexture()},this.copyTextureToTexture3D=function(y,h,v=null,L=null,T=0){return Wo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,h,v,L,T)},this.initRenderTarget=function(y){Be.get(y).__webglFramebuffer===void 0&&We.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?We.setTextureCube(y,0):y.isData3DTexture?We.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?We.setTexture2DArray(y,0):We.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){D=0,C=0,O=null,we.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function hg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),o=new Set(Object.keys(n[0].morphAttributes)),s={},a={},r=n[0].morphTargetsRelative,l=new Pn;let d=0;for(let c=0;c<n.length;++c){const u=n[c];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in u.attributes){if(!i.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(u.attributes[_]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(r!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in u.morphAttributes){if(!o.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[_]===void 0&&(a[_]=[]),a[_].push(u.morphAttributes[_])}if(e){let _;if(t)_=u.index.count;else if(u.attributes.position!==void 0)_=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(d,_,c),d+=_}}if(t){let c=0;const u=[];for(let f=0;f<n.length;++f){const _=n[f].index;for(let g=0;g<_.count;++g)u.push(_.getX(g)+c);c+=n[f].attributes.position.count}l.setIndex(u)}for(const c in s){const u=Kd(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in a){const u=a[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){const _=[];for(let b=0;b<a[c].length;++b)_.push(a[c][b][f]);const g=Kd(_);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Kd(n){let e,t,i,o=-1,s=0;for(let d=0;d<n.length;++d){const c=n[d];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=c.gpuType),o!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const a=new e(s),r=new Rn(a,t,i);let l=0;for(let d=0;d<n.length;++d){const c=n[d];if(c.isInterleavedBufferAttribute){const u=l/t;for(let f=0,_=c.count;f<_;f++)for(let g=0;g<t;g++){const b=c.getComponent(f,g);r.setComponent(f+u,g,b)}}else a.set(c.array,l);l+=c.count*t}return o!==void 0&&(r.gpuType=o),r}const $u=n=>n.split("_").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),Ui=(n,e)=>{const t=Number.parseInt(n.slice(1),16),i=o=>Math.max(0,Math.min(255,(t>>o&255)+e));return`#${[16,8,0].map(o=>i(o).toString(16).padStart(2,"0")).join("")}`},oo=[],Nt=(n,e,t,i={})=>{oo.push({id:n,label:i.label||$u(n),color:e,accent:i.accent||Ui(e,-24),category:t,transparent:!!i.transparent})};[["grass_block","#698546"],["dirt","#765039"],["coarse_dirt","#6b4934"],["podzol","#59422d"],["mycelium","#6f616a"],["rooted_dirt","#725239"],["mud","#3e4245"],["packed_mud","#876e50"],["mud_bricks","#8a684c"],["clay","#9ca6ad"],["gravel","#77736f"],["sand","#d9ca8c"],["red_sand","#b9652e"],["suspicious_sand","#cdbc80"],["suspicious_gravel","#77716d"],["snow_block","#edf3f3"],["powder_snow","#f2f7f7"],["ice","#7dafdf"],["packed_ice","#5d93cf"],["blue_ice","#3f74cc"],["moss_block","#617d31"],["moss_carpet","#6e8b38"],["calcite","#ddd9cf"],["tuff","#59625d"],["dripstone_block","#866858"],["pointed_dripstone","#8e6d58"],["magma_block","#9a3f1f"],["obsidian","#252033"],["crying_obsidian","#392260"],["netherrack","#703538"],["soul_sand","#4b3a31"],["soul_soil","#40342e"],["basalt","#48474a"],["smooth_basalt","#55545a"],["blackstone","#29272c"],["end_stone","#d8d89c"],["sculk","#0c3439"],["sculk_catalyst","#174950"]].forEach(([n,e])=>Nt(n,e,"Natural",{transparent:["ice","powder_snow"].includes(n)}));[["stone","#7c817c"],["cobblestone","#6f736f"],["mossy_cobblestone","#63715a"],["smooth_stone","#969a96"],["stone_bricks","#787b78"],["mossy_stone_bricks","#697261"],["cracked_stone_bricks","#70736f"],["chiseled_stone_bricks","#777a76"],["deepslate","#4c5052"],["cobbled_deepslate","#45494b"],["polished_deepslate","#55595a"],["deepslate_bricks","#414547"],["cracked_deepslate_bricks","#3e4244"],["deepslate_tiles","#353a3c"],["cracked_deepslate_tiles","#34383a"],["chiseled_deepslate","#414648"],["andesite","#858786"],["polished_andesite","#929493"],["diorite","#b5b5b1"],["polished_diorite","#c0c0bb"],["granite","#9a6858"],["polished_granite","#a87362"],["bricks","#965746"],["prismarine","#65a394"],["prismarine_bricks","#6cb2a2"],["dark_prismarine","#315d50"],["sea_lantern","#b8d6c8"],["quartz_block","#e5e0d5"],["smooth_quartz","#eee9df"],["quartz_bricks","#ded9ce"],["chiseled_quartz","#ddd8cd"],["purpur_block","#a276a4"],["purpur_pillar","#a77baa"],["end_stone_bricks","#c9ca8e"]].forEach(([n,e])=>Nt(n,e,"Stone"));const fg=[["oak","#9a7546","#55713c"],["spruce","#65482d","#365536"],["birch","#c4b77b","#6f8548"],["jungle","#9a7047","#4c753b"],["acacia","#a85b39","#62713b"],["dark_oak","#4c3524","#30472f"],["mangrove","#743d37","#4b693f"],["cherry","#d39b94","#d58391"],["pale_oak","#c2bfb1","#81907c"],["crimson","#713749","#8b3153"],["warped","#2f7772","#1f8b78"],["bamboo","#c0a845","#7d9341"]],pg=[["planks",8],["log",-22],["stripped_log",12],["wood",-30],["stripped_wood",2],["leaves",0],["stairs",6],["slab",10],["fence",-2],["fence_gate",-5],["door",4],["trapdoor",-4],["pressure_plate",12],["button",-12],["sign",14],["hanging_sign",-8]];for(const[n,e,t]of fg)for(const[i,o]of pg){let s=`${n}_${i}`,a=Ui(e,o),r;i==="leaves"&&(a=t,r=n==="crimson"?"Nether Wart Block":n==="warped"?"Warped Wart Block":n==="bamboo"?"Bamboo Shoots":`${$u(n)} Leaves`),(n==="crimson"||n==="warped")&&(s=s.replace("_stripped_log","_stripped_stem").replace("_log","_stem").replace("_stripped_wood","_stripped_hyphae").replace("_wood","_hyphae")),n==="bamboo"&&(s=s.replace("bamboo_stripped_log","stripped_bamboo_block").replace("bamboo_log","bamboo_block").replace("bamboo_stripped_wood","chiseled_bamboo").replace("bamboo_wood","bamboo_mosaic")),Nt(s,a,"Wood",{label:r,accent:Ui(a,i==="leaves"?24:-28),transparent:i==="leaves"})}const Yu=[["white","#e7e7df"],["light_gray","#9d9d97"],["gray","#51565a"],["black","#25282c"],["brown","#754b2f"],["red","#a12e32"],["orange","#d66a21"],["yellow","#e5bd27"],["lime","#70ae32"],["green","#4d6f2a"],["cyan","#238693"],["light_blue","#54a7cf"],["blue","#354d9a"],["purple","#713c91"],["magenta","#a94ca7"],["pink","#d27b99"]];for(const[n,e]of Yu)Nt(`${n}_wool`,e,"Colored"),Nt(`${n}_terracotta`,Ui(e,-12),"Colored",{accent:"#704c3e"}),Nt(`${n}_concrete`,Ui(e,6),"Colored");Nt("glass","#b9d8db","Glass",{accent:"#edfafa",transparent:!0});for(const[n,e]of Yu)Nt(`${n}_stained_glass`,e,"Glass",{accent:Ui(e,32),transparent:!0});[["coal_ore","#666966"],["deepslate_coal_ore","#444849"],["iron_ore","#8d8177"],["deepslate_iron_ore","#5c5652"],["copper_ore","#8a7567"],["deepslate_copper_ore","#5b5651"],["gold_ore","#8b8161"],["deepslate_gold_ore","#5d584b"],["redstone_ore","#776466"],["deepslate_redstone_ore","#51484a"],["emerald_ore","#6d8273"],["deepslate_emerald_ore","#4b5850"],["lapis_ore","#606d83"],["deepslate_lapis_ore","#48505d"],["diamond_ore","#6c8b8a"],["deepslate_diamond_ore","#4b6060"],["nether_gold_ore","#82463b"],["nether_quartz_ore","#864d4d"],["coal_block","#252729"],["raw_iron_block","#9a806c"],["iron_block","#c5c7c2"],["raw_copper_block","#9c684b"],["copper_block","#b46847"],["raw_gold_block","#c29a42"],["gold_block","#e1b82f"],["redstone_block","#a11c16"],["emerald_block","#27a65d"],["lapis_block","#27549e"],["diamond_block","#45bfc2"],["netherite_block","#454043"]].forEach(([n,e])=>Nt(n,e,"Minerals",{accent:n.includes("ore")?Ui(e,38):Ui(e,-30)}));Nt("water","#3f76c7","Natural",{transparent:!0});Nt("chest","#9c6a32","Wood");Nt("crafting_table","#a57843","Wood");Nt("furnace","#777777","Stone");Nt("iron_ingot","#d8d8d8","Minerals");Nt("gold_ingot","#e1b935","Minerals");Nt("copper_ingot","#bd754e","Minerals");Nt("red_bed","#b52b2b","Colored");Nt("bedrock","#484848","Stone");Nt("dirt_path","#896b45","Natural");Nt("bell","#d9aa2f","Structures");Nt("blast_furnace","#55585a","Structures");Nt("grindstone","#77736f","Structures");[["cobblestone_slab","#6f736f"],["cobblestone_stairs","#6f736f"],["cobblestone_wall","#6f736f"],["stone_slab","#969a96"],["stone_brick_slab","#787b78"],["stone_brick_stairs","#787b78"],["torch","#dfb45a"],["redstone_torch","#a72b22"],["white_carpet","#e7e7df"],["light_gray_carpet","#9d9d97"],["white_wall_banner","#e7e7df"]].forEach(([n,e])=>Nt(n,e,"Structures"));if(new Set(oo.map(n=>n.id)).size!==oo.length)throw new Error("Duplicate block IDs in the catalog.");const Xl=Object.freeze(oo),jt=Object.freeze({...Object.fromEntries(oo.map(n=>[n.id,n])),red_bed_head:{...oo.find(n=>n.id==="red_bed"),id:"red_bed_head"}}),_g=Object.freeze(["All",...new Set(oo.map(n=>n.category))]),mg=JSON.parse('["acacia_door_bottom","acacia_door_top","acacia_leaves","acacia_log","acacia_log_top","acacia_planks","acacia_sapling","acacia_trapdoor","activator_rail","activator_rail_on","allium","amethyst_block","amethyst_cluster","ancient_debris_side","ancient_debris_top","andesite","anvil","anvil_top","attached_melon_stem","attached_pumpkin_stem","azalea_leaves","azalea_plant","azalea_side","azalea_top","azure_bluet","bamboo_block","bamboo_block_top","bamboo_door_bottom","bamboo_door_top","bamboo_fence","bamboo_fence_gate","bamboo_fence_gate_particle","bamboo_fence_particle","bamboo_large_leaves","bamboo_mosaic","bamboo_planks","bamboo_singleleaf","bamboo_small_leaves","bamboo_stage0","bamboo_stalk","bamboo_trapdoor","barrel_bottom","barrel_side","barrel_top","barrel_top_open","basalt_side","basalt_top","beacon","bedrock","bee_nest_bottom","bee_nest_front","bee_nest_front_honey","bee_nest_side","bee_nest_top","beehive_end","beehive_front","beehive_front_honey","beehive_side","beetroots_stage0","beetroots_stage1","beetroots_stage2","beetroots_stage3","bell_bottom","bell_side","bell_top","big_dripleaf_side","big_dripleaf_stem","big_dripleaf_tip","big_dripleaf_top","birch_door_bottom","birch_door_top","birch_leaves","birch_log","birch_log_top","birch_planks","birch_sapling","birch_trapdoor","black_candle","black_candle_lit","black_concrete","black_concrete_powder","black_glazed_terracotta","black_shulker_box","black_stained_glass","black_stained_glass_pane_top","black_terracotta","black_wool","blackstone","blackstone_top","blast_furnace_front","blast_furnace_front_on","blast_furnace_side","blast_furnace_top","blue_candle","blue_candle_lit","blue_concrete","blue_concrete_powder","blue_glazed_terracotta","blue_ice","blue_orchid","blue_shulker_box","blue_stained_glass","blue_stained_glass_pane_top","blue_terracotta","blue_wool","bone_block_side","bone_block_top","bookshelf","brain_coral","brain_coral_block","brain_coral_fan","brewing_stand","brewing_stand_base","bricks","brown_candle","brown_candle_lit","brown_concrete","brown_concrete_powder","brown_glazed_terracotta","brown_mushroom","brown_mushroom_block","brown_shulker_box","brown_stained_glass","brown_stained_glass_pane_top","brown_terracotta","brown_wool","bubble_coral","bubble_coral_block","bubble_coral_fan","budding_amethyst","bush","cactus_bottom","cactus_flower","cactus_side","cactus_top","cake_bottom","cake_inner","cake_side","cake_top","calcite","calibrated_sculk_sensor_amethyst","calibrated_sculk_sensor_input_side","calibrated_sculk_sensor_top","campfire_fire","campfire_log","campfire_log_lit","candle","candle_lit","carrots_stage0","carrots_stage1","carrots_stage2","carrots_stage3","cartography_table_side1","cartography_table_side2","cartography_table_side3","cartography_table_top","carved_pumpkin","cauldron_bottom","cauldron_inner","cauldron_side","cauldron_top","cave_vines","cave_vines_lit","cave_vines_plant","cave_vines_plant_lit","chain","chain_command_block_back","chain_command_block_conditional","chain_command_block_front","chain_command_block_side","cherry_door_bottom","cherry_door_top","cherry_leaves","cherry_log","cherry_log_top","cherry_planks","cherry_sapling","cherry_trapdoor","chipped_anvil_top","chiseled_bookshelf_empty","chiseled_bookshelf_occupied","chiseled_bookshelf_side","chiseled_bookshelf_top","chiseled_copper","chiseled_deepslate","chiseled_nether_bricks","chiseled_polished_blackstone","chiseled_quartz_block","chiseled_quartz_block_top","chiseled_red_sandstone","chiseled_resin_bricks","chiseled_sandstone","chiseled_stone_bricks","chiseled_tuff","chiseled_tuff_bricks","chiseled_tuff_bricks_top","chiseled_tuff_top","chorus_flower","chorus_flower_dead","chorus_plant","clay","closed_eyeblossom","coal_block","coal_ore","coarse_dirt","cobbled_deepslate","cobblestone","cobweb","cocoa_stage0","cocoa_stage1","cocoa_stage2","command_block_back","command_block_conditional","command_block_front","command_block_side","comparator","comparator_on","composter_bottom","composter_compost","composter_ready","composter_side","composter_top","conduit","copper_block","copper_bulb","copper_bulb_lit","copper_bulb_lit_powered","copper_bulb_powered","copper_door_bottom","copper_door_top","copper_grate","copper_ore","copper_trapdoor","cornflower","cracked_deepslate_bricks","cracked_deepslate_tiles","cracked_nether_bricks","cracked_polished_blackstone_bricks","cracked_stone_bricks","crafter_bottom","crafter_east","crafter_east_crafting","crafter_east_triggered","crafter_north","crafter_north_crafting","crafter_south","crafter_south_triggered","crafter_top","crafter_top_crafting","crafter_top_triggered","crafter_west","crafter_west_crafting","crafter_west_triggered","crafting_table_front","crafting_table_side","crafting_table_top","creaking_heart","creaking_heart_awake","creaking_heart_dormant","creaking_heart_top","creaking_heart_top_awake","creaking_heart_top_dormant","crimson_door_bottom","crimson_door_top","crimson_fungus","crimson_nylium","crimson_nylium_side","crimson_planks","crimson_roots","crimson_roots_pot","crimson_stem","crimson_stem_top","crimson_trapdoor","crying_obsidian","cut_copper","cut_red_sandstone","cut_sandstone","cyan_candle","cyan_candle_lit","cyan_concrete","cyan_concrete_powder","cyan_glazed_terracotta","cyan_shulker_box","cyan_stained_glass","cyan_stained_glass_pane_top","cyan_terracotta","cyan_wool","damaged_anvil_top","dandelion","dark_oak_door_bottom","dark_oak_door_top","dark_oak_leaves","dark_oak_log","dark_oak_log_top","dark_oak_planks","dark_oak_sapling","dark_oak_trapdoor","dark_prismarine","daylight_detector_inverted_top","daylight_detector_side","daylight_detector_top","dead_brain_coral","dead_brain_coral_block","dead_brain_coral_fan","dead_bubble_coral","dead_bubble_coral_block","dead_bubble_coral_fan","dead_bush","dead_fire_coral","dead_fire_coral_block","dead_fire_coral_fan","dead_horn_coral","dead_horn_coral_block","dead_horn_coral_fan","dead_tube_coral","dead_tube_coral_block","dead_tube_coral_fan","debug","debug2","deepslate","deepslate_bricks","deepslate_coal_ore","deepslate_copper_ore","deepslate_diamond_ore","deepslate_emerald_ore","deepslate_gold_ore","deepslate_iron_ore","deepslate_lapis_ore","deepslate_redstone_ore","deepslate_tiles","deepslate_top","destroy_stage_0","destroy_stage_1","destroy_stage_2","destroy_stage_3","destroy_stage_4","destroy_stage_5","destroy_stage_6","destroy_stage_7","destroy_stage_8","destroy_stage_9","detector_rail","detector_rail_on","diamond_block","diamond_ore","diorite","dirt","dirt_path_side","dirt_path_top","dispenser_front","dispenser_front_vertical","dragon_egg","dried_ghast_hydration_0_bottom","dried_ghast_hydration_0_east","dried_ghast_hydration_0_north","dried_ghast_hydration_0_south","dried_ghast_hydration_0_tentacles","dried_ghast_hydration_0_top","dried_ghast_hydration_0_west","dried_ghast_hydration_1_bottom","dried_ghast_hydration_1_east","dried_ghast_hydration_1_north","dried_ghast_hydration_1_south","dried_ghast_hydration_1_tentacles","dried_ghast_hydration_1_top","dried_ghast_hydration_1_west","dried_ghast_hydration_2_bottom","dried_ghast_hydration_2_east","dried_ghast_hydration_2_north","dried_ghast_hydration_2_south","dried_ghast_hydration_2_tentacles","dried_ghast_hydration_2_top","dried_ghast_hydration_2_west","dried_ghast_hydration_3_bottom","dried_ghast_hydration_3_east","dried_ghast_hydration_3_north","dried_ghast_hydration_3_south","dried_ghast_hydration_3_tentacles","dried_ghast_hydration_3_top","dried_ghast_hydration_3_west","dried_kelp_bottom","dried_kelp_side","dried_kelp_top","dripstone_block","dropper_front","dropper_front_vertical","emerald_block","emerald_ore","enchanting_table_bottom","enchanting_table_side","enchanting_table_top","end_portal_frame_eye","end_portal_frame_side","end_portal_frame_top","end_rod","end_stone","end_stone_bricks","exposed_chiseled_copper","exposed_copper","exposed_copper_bulb","exposed_copper_bulb_lit","exposed_copper_bulb_lit_powered","exposed_copper_bulb_powered","exposed_copper_door_bottom","exposed_copper_door_top","exposed_copper_grate","exposed_copper_trapdoor","exposed_cut_copper","farmland","farmland_moist","fern","fire_0","fire_1","fire_coral","fire_coral_block","fire_coral_fan","firefly_bush","firefly_bush_emissive","fletching_table_front","fletching_table_side","fletching_table_top","flower_pot","flowering_azalea_leaves","flowering_azalea_side","flowering_azalea_top","frogspawn","frosted_ice_0","frosted_ice_1","frosted_ice_2","frosted_ice_3","furnace_front","furnace_front_on","furnace_side","furnace_top","gilded_blackstone","glass","glass_pane_top","glow_item_frame","glow_lichen","glowstone","gold_block","gold_ore","granite","grass_block_side","grass_block_side_overlay","grass_block_snow","grass_block_top","gravel","gray_candle","gray_candle_lit","gray_concrete","gray_concrete_powder","gray_glazed_terracotta","gray_shulker_box","gray_stained_glass","gray_stained_glass_pane_top","gray_terracotta","gray_wool","green_candle","green_candle_lit","green_concrete","green_concrete_powder","green_glazed_terracotta","green_shulker_box","green_stained_glass","green_stained_glass_pane_top","green_terracotta","green_wool","grindstone_pivot","grindstone_round","grindstone_side","hanging_roots","hay_block_side","hay_block_top","heavy_core","honey_block_bottom","honey_block_side","honey_block_top","honeycomb_block","hopper_inside","hopper_outside","hopper_top","horn_coral","horn_coral_block","horn_coral_fan","ice","iron_bars","iron_block","iron_door_bottom","iron_door_top","iron_ore","iron_trapdoor","item_frame","jack_o_lantern","jigsaw_bottom","jigsaw_lock","jigsaw_side","jigsaw_top","jukebox_side","jukebox_top","jungle_door_bottom","jungle_door_top","jungle_leaves","jungle_log","jungle_log_top","jungle_planks","jungle_sapling","jungle_trapdoor","kelp","kelp_plant","ladder","lantern","lapis_block","lapis_ore","large_amethyst_bud","large_fern_bottom","large_fern_top","lava_flow","lava_still","leaf_litter","lectern_base","lectern_front","lectern_sides","lectern_top","lever","light_blue_candle","light_blue_candle_lit","light_blue_concrete","light_blue_concrete_powder","light_blue_glazed_terracotta","light_blue_shulker_box","light_blue_stained_glass","light_blue_stained_glass_pane_top","light_blue_terracotta","light_blue_wool","light_gray_candle","light_gray_candle_lit","light_gray_concrete","light_gray_concrete_powder","light_gray_glazed_terracotta","light_gray_shulker_box","light_gray_stained_glass","light_gray_stained_glass_pane_top","light_gray_terracotta","light_gray_wool","lightning_rod","lightning_rod_on","lilac_bottom","lilac_top","lily_of_the_valley","lily_pad","lime_candle","lime_candle_lit","lime_concrete","lime_concrete_powder","lime_glazed_terracotta","lime_shulker_box","lime_stained_glass","lime_stained_glass_pane_top","lime_terracotta","lime_wool","lodestone_side","lodestone_top","loom_bottom","loom_front","loom_side","loom_top","magenta_candle","magenta_candle_lit","magenta_concrete","magenta_concrete_powder","magenta_glazed_terracotta","magenta_shulker_box","magenta_stained_glass","magenta_stained_glass_pane_top","magenta_terracotta","magenta_wool","magma","mangrove_door_bottom","mangrove_door_top","mangrove_leaves","mangrove_log","mangrove_log_top","mangrove_planks","mangrove_propagule","mangrove_propagule_hanging","mangrove_roots_side","mangrove_roots_top","mangrove_trapdoor","medium_amethyst_bud","melon_side","melon_stem","melon_top","moss_block","mossy_cobblestone","mossy_stone_bricks","mud","mud_bricks","muddy_mangrove_roots_side","muddy_mangrove_roots_top","mushroom_block_inside","mushroom_stem","mycelium_side","mycelium_top","nether_bricks","nether_gold_ore","nether_portal","nether_quartz_ore","nether_sprouts","nether_wart_block","nether_wart_stage0","nether_wart_stage1","nether_wart_stage2","netherite_block","netherrack","note_block","oak_door_bottom","oak_door_top","oak_leaves","oak_log","oak_log_top","oak_planks","oak_sapling","oak_trapdoor","observer_back","observer_back_on","observer_front","observer_side","observer_top","obsidian","ochre_froglight_side","ochre_froglight_top","open_eyeblossom","open_eyeblossom_emissive","orange_candle","orange_candle_lit","orange_concrete","orange_concrete_powder","orange_glazed_terracotta","orange_shulker_box","orange_stained_glass","orange_stained_glass_pane_top","orange_terracotta","orange_tulip","orange_wool","oxeye_daisy","oxidized_chiseled_copper","oxidized_copper","oxidized_copper_bulb","oxidized_copper_bulb_lit","oxidized_copper_bulb_lit_powered","oxidized_copper_bulb_powered","oxidized_copper_door_bottom","oxidized_copper_door_top","oxidized_copper_grate","oxidized_copper_trapdoor","oxidized_cut_copper","packed_ice","packed_mud","pale_hanging_moss","pale_hanging_moss_tip","pale_moss_block","pale_moss_carpet","pale_moss_carpet_side_small","pale_moss_carpet_side_tall","pale_oak_door_bottom","pale_oak_door_top","pale_oak_leaves","pale_oak_log","pale_oak_log_top","pale_oak_planks","pale_oak_sapling","pale_oak_trapdoor","pearlescent_froglight_side","pearlescent_froglight_top","peony_bottom","peony_top","pink_candle","pink_candle_lit","pink_concrete","pink_concrete_powder","pink_glazed_terracotta","pink_petals","pink_petals_stem","pink_shulker_box","pink_stained_glass","pink_stained_glass_pane_top","pink_terracotta","pink_tulip","pink_wool","piston_bottom","piston_inner","piston_side","piston_top","piston_top_sticky","pitcher_crop_bottom","pitcher_crop_bottom_stage_1","pitcher_crop_bottom_stage_2","pitcher_crop_bottom_stage_3","pitcher_crop_bottom_stage_4","pitcher_crop_side","pitcher_crop_top","pitcher_crop_top_stage_3","pitcher_crop_top_stage_4","podzol_side","podzol_top","pointed_dripstone_down_base","pointed_dripstone_down_frustum","pointed_dripstone_down_middle","pointed_dripstone_down_tip","pointed_dripstone_down_tip_merge","pointed_dripstone_up_base","pointed_dripstone_up_frustum","pointed_dripstone_up_middle","pointed_dripstone_up_tip","pointed_dripstone_up_tip_merge","polished_andesite","polished_basalt_side","polished_basalt_top","polished_blackstone","polished_blackstone_bricks","polished_deepslate","polished_diorite","polished_granite","polished_tuff","poppy","potatoes_stage0","potatoes_stage1","potatoes_stage2","potatoes_stage3","potted_azalea_bush_plant","potted_azalea_bush_side","potted_azalea_bush_top","potted_flowering_azalea_bush_plant","potted_flowering_azalea_bush_side","potted_flowering_azalea_bush_top","powder_snow","powered_rail","powered_rail_on","prismarine","prismarine_bricks","pumpkin_side","pumpkin_stem","pumpkin_top","purple_candle","purple_candle_lit","purple_concrete","purple_concrete_powder","purple_glazed_terracotta","purple_shulker_box","purple_stained_glass","purple_stained_glass_pane_top","purple_terracotta","purple_wool","purpur_block","purpur_pillar","purpur_pillar_top","quartz_block_bottom","quartz_block_side","quartz_block_top","quartz_bricks","quartz_pillar","quartz_pillar_top","rail","rail_corner","raw_copper_block","raw_gold_block","raw_iron_block","red_candle","red_candle_lit","red_concrete","red_concrete_powder","red_glazed_terracotta","red_mushroom","red_mushroom_block","red_nether_bricks","red_sand","red_sandstone","red_sandstone_bottom","red_sandstone_top","red_shulker_box","red_stained_glass","red_stained_glass_pane_top","red_terracotta","red_tulip","red_wool","redstone_block","redstone_dust_dot","redstone_dust_line0","redstone_dust_line1","redstone_dust_overlay","redstone_lamp","redstone_lamp_on","redstone_ore","redstone_torch","redstone_torch_off","reinforced_deepslate_bottom","reinforced_deepslate_side","reinforced_deepslate_top","repeater","repeater_on","repeating_command_block_back","repeating_command_block_conditional","repeating_command_block_front","repeating_command_block_side","resin_block","resin_bricks","resin_clump","respawn_anchor_bottom","respawn_anchor_side0","respawn_anchor_side1","respawn_anchor_side2","respawn_anchor_side3","respawn_anchor_side4","respawn_anchor_top","respawn_anchor_top_off","rooted_dirt","rose_bush_bottom","rose_bush_top","sand","sandstone","sandstone_bottom","sandstone_top","scaffolding_bottom","scaffolding_side","scaffolding_top","sculk","sculk_catalyst_bottom","sculk_catalyst_side","sculk_catalyst_side_bloom","sculk_catalyst_top","sculk_catalyst_top_bloom","sculk_sensor_bottom","sculk_sensor_side","sculk_sensor_tendril_active","sculk_sensor_tendril_inactive","sculk_sensor_top","sculk_shrieker_bottom","sculk_shrieker_can_summon_inner_top","sculk_shrieker_inner_top","sculk_shrieker_side","sculk_shrieker_top","sculk_vein","sea_lantern","sea_pickle","seagrass","short_dry_grass","short_grass","shroomlight","shulker_box","slime_block","small_amethyst_bud","small_dripleaf_side","small_dripleaf_stem_bottom","small_dripleaf_stem_top","small_dripleaf_top","smithing_table_bottom","smithing_table_front","smithing_table_side","smithing_table_top","smoker_bottom","smoker_front","smoker_front_on","smoker_side","smoker_top","smooth_basalt","smooth_stone","smooth_stone_slab_side","sniffer_egg_not_cracked_bottom","sniffer_egg_not_cracked_east","sniffer_egg_not_cracked_north","sniffer_egg_not_cracked_south","sniffer_egg_not_cracked_top","sniffer_egg_not_cracked_west","sniffer_egg_slightly_cracked_bottom","sniffer_egg_slightly_cracked_east","sniffer_egg_slightly_cracked_north","sniffer_egg_slightly_cracked_south","sniffer_egg_slightly_cracked_top","sniffer_egg_slightly_cracked_west","sniffer_egg_very_cracked_bottom","sniffer_egg_very_cracked_east","sniffer_egg_very_cracked_north","sniffer_egg_very_cracked_south","sniffer_egg_very_cracked_top","sniffer_egg_very_cracked_west","snow","soul_campfire_fire","soul_campfire_log_lit","soul_fire_0","soul_fire_1","soul_lantern","soul_sand","soul_soil","soul_torch","spawner","sponge","spore_blossom","spore_blossom_base","spruce_door_bottom","spruce_door_top","spruce_leaves","spruce_log","spruce_log_top","spruce_planks","spruce_sapling","spruce_trapdoor","stone","stone_bricks","stonecutter_bottom","stonecutter_saw","stonecutter_side","stonecutter_top","stripped_acacia_log","stripped_acacia_log_top","stripped_bamboo_block","stripped_bamboo_block_top","stripped_birch_log","stripped_birch_log_top","stripped_cherry_log","stripped_cherry_log_top","stripped_crimson_stem","stripped_crimson_stem_top","stripped_dark_oak_log","stripped_dark_oak_log_top","stripped_jungle_log","stripped_jungle_log_top","stripped_mangrove_log","stripped_mangrove_log_top","stripped_oak_log","stripped_oak_log_top","stripped_pale_oak_log","stripped_pale_oak_log_top","stripped_spruce_log","stripped_spruce_log_top","stripped_warped_stem","stripped_warped_stem_top","structure_block","structure_block_corner","structure_block_data","structure_block_load","structure_block_save","sugar_cane","sunflower_back","sunflower_bottom","sunflower_front","sunflower_top","suspicious_gravel_0","suspicious_gravel_1","suspicious_gravel_2","suspicious_gravel_3","suspicious_sand_0","suspicious_sand_1","suspicious_sand_2","suspicious_sand_3","sweet_berry_bush_stage0","sweet_berry_bush_stage1","sweet_berry_bush_stage2","sweet_berry_bush_stage3","tall_dry_grass","tall_grass_bottom","tall_grass_top","tall_seagrass_bottom","tall_seagrass_top","target_side","target_top","terracotta","test_block_accept","test_block_fail","test_block_log","test_block_start","test_instance_block","tinted_glass","tnt_bottom","tnt_side","tnt_top","torch","torchflower","torchflower_crop_stage0","torchflower_crop_stage1","trial_spawner_bottom","trial_spawner_side_active","trial_spawner_side_active_ominous","trial_spawner_side_inactive","trial_spawner_side_inactive_ominous","trial_spawner_top_active","trial_spawner_top_active_ominous","trial_spawner_top_ejecting_reward","trial_spawner_top_ejecting_reward_ominous","trial_spawner_top_inactive","trial_spawner_top_inactive_ominous","tripwire","tripwire_hook","tube_coral","tube_coral_block","tube_coral_fan","tuff","tuff_bricks","turtle_egg","turtle_egg_slightly_cracked","turtle_egg_very_cracked","twisting_vines","twisting_vines_plant","vault_bottom","vault_bottom_ominous","vault_front_ejecting","vault_front_ejecting_ominous","vault_front_off","vault_front_off_ominous","vault_front_on","vault_front_on_ominous","vault_side_off","vault_side_off_ominous","vault_side_on","vault_side_on_ominous","vault_top","vault_top_ejecting","vault_top_ejecting_ominous","vault_top_ominous","verdant_froglight_side","verdant_froglight_top","vine","warped_door_bottom","warped_door_top","warped_fungus","warped_nylium","warped_nylium_side","warped_planks","warped_roots","warped_roots_pot","warped_stem","warped_stem_top","warped_trapdoor","warped_wart_block","water_flow","water_overlay","water_still","weathered_chiseled_copper","weathered_copper","weathered_copper_bulb","weathered_copper_bulb_lit","weathered_copper_bulb_lit_powered","weathered_copper_bulb_powered","weathered_copper_door_bottom","weathered_copper_door_top","weathered_copper_grate","weathered_copper_trapdoor","weathered_cut_copper","weeping_vines","weeping_vines_plant","wet_sponge","wheat_stage0","wheat_stage1","wheat_stage2","wheat_stage3","wheat_stage4","wheat_stage5","wheat_stage6","wheat_stage7","white_candle","white_candle_lit","white_concrete","white_concrete_powder","white_glazed_terracotta","white_shulker_box","white_stained_glass","white_stained_glass_pane_top","white_terracotta","white_tulip","white_wool","wildflowers","wildflowers_stem","wither_rose","yellow_candle","yellow_candle_lit","yellow_concrete","yellow_concrete_powder","yellow_glazed_terracotta","yellow_shulker_box","yellow_stained_glass","yellow_stained_glass_pane_top","yellow_terracotta","yellow_wool"]');function ws(n,e,t,i,o,s=3){const a=Math.floor(t+.5),r=Math.floor(i+.5);if(a<e.minX||a>=e.maxX||r<e.minZ||r>=e.maxZ)return null;const l=Math.floor(o+.5);for(let d=l+s;d>=l-s;d--){const c=n(a,d,r);if(c&&!c.includes("leaves")&&!n(a,d+1,r)&&!n(a,d+2,r))return d+.5}return null}const gg=JSON.parse('{"size":[15,21,15],"blocks":[[1,0,4,"dark_oak_log",0],[1,0,10,"dark_oak_log",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[2,0,10,"cobblestone",0],[2,0,11,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"birch_planks",0],[3,0,5,"birch_planks",0],[3,0,6,"birch_planks",0],[3,0,7,"birch_planks",0],[3,0,8,"birch_planks",0],[3,0,9,"birch_planks",0],[3,0,10,"birch_planks",0],[3,0,11,"cobblestone",0],[3,0,12,"cobblestone",0],[4,0,1,"dark_oak_log",0],[4,0,2,"cobblestone",0],[4,0,3,"birch_planks",0],[4,0,4,"birch_planks",0],[4,0,5,"birch_planks",0],[4,0,6,"birch_planks",0],[4,0,7,"birch_planks",0],[4,0,8,"birch_planks",0],[4,0,9,"birch_planks",0],[4,0,10,"birch_planks",0],[4,0,11,"birch_planks",0],[4,0,12,"cobblestone",0],[4,0,13,"dark_oak_log",0],[5,0,2,"cobblestone",0],[5,0,3,"birch_planks",0],[5,0,4,"birch_planks",0],[5,0,5,"birch_planks",0],[5,0,6,"birch_planks",0],[5,0,7,"birch_planks",0],[5,0,8,"birch_planks",0],[5,0,9,"birch_planks",0],[5,0,10,"birch_planks",0],[5,0,11,"birch_planks",0],[5,0,12,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"birch_planks",0],[6,0,4,"birch_planks",0],[6,0,5,"birch_planks",0],[6,0,6,"birch_planks",0],[6,0,7,"birch_planks",0],[6,0,8,"birch_planks",0],[6,0,9,"birch_planks",0],[6,0,10,"birch_planks",0],[6,0,11,"birch_planks",0],[6,0,12,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"birch_planks",0],[7,0,4,"birch_planks",0],[7,0,5,"birch_planks",0],[7,0,6,"birch_planks",0],[7,0,7,"birch_planks",0],[7,0,8,"birch_planks",0],[7,0,9,"birch_planks",0],[7,0,10,"birch_planks",0],[7,0,11,"birch_planks",0],[7,0,12,"birch_planks",0],[8,0,2,"cobblestone",0],[8,0,3,"birch_planks",0],[8,0,4,"birch_planks",0],[8,0,5,"birch_planks",0],[8,0,6,"birch_planks",0],[8,0,7,"birch_planks",0],[8,0,8,"birch_planks",0],[8,0,9,"birch_planks",0],[8,0,10,"birch_planks",0],[8,0,11,"birch_planks",0],[8,0,12,"cobblestone",0],[9,0,2,"cobblestone",0],[9,0,3,"birch_planks",0],[9,0,4,"birch_planks",0],[9,0,5,"birch_planks",0],[9,0,6,"birch_planks",0],[9,0,7,"birch_planks",0],[9,0,8,"birch_planks",0],[9,0,9,"birch_planks",0],[9,0,10,"birch_planks",0],[9,0,11,"birch_planks",0],[9,0,12,"cobblestone",0],[10,0,1,"dark_oak_log",0],[10,0,2,"cobblestone",0],[10,0,3,"birch_planks",0],[10,0,4,"birch_planks",0],[10,0,5,"birch_planks",0],[10,0,6,"birch_planks",0],[10,0,7,"birch_planks",0],[10,0,8,"birch_planks",0],[10,0,9,"birch_planks",0],[10,0,10,"birch_planks",0],[10,0,11,"birch_planks",0],[10,0,12,"cobblestone",0],[10,0,13,"dark_oak_log",0],[11,0,2,"cobblestone",0],[11,0,3,"birch_planks",0],[11,0,4,"birch_planks",0],[11,0,5,"birch_planks",0],[11,0,6,"birch_planks",0],[11,0,7,"birch_planks",0],[11,0,8,"birch_planks",0],[11,0,9,"birch_planks",0],[11,0,10,"birch_planks",0],[11,0,11,"cobblestone",0],[11,0,12,"cobblestone",0],[12,0,3,"cobblestone",0],[12,0,4,"cobblestone",0],[12,0,5,"cobblestone",0],[12,0,6,"cobblestone",0],[12,0,7,"cobblestone",0],[12,0,8,"cobblestone",0],[12,0,9,"cobblestone",0],[12,0,10,"cobblestone",0],[12,0,11,"cobblestone",0],[13,0,4,"dark_oak_log",0],[13,0,10,"dark_oak_log",0],[1,1,4,"dark_oak_log",0],[1,1,10,"dark_oak_log",0],[2,1,3,"cobblestone",0],[2,1,4,"cobblestone",0],[2,1,5,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,7,"cobblestone",0],[2,1,8,"cobblestone",0],[2,1,9,"cobblestone",0],[2,1,10,"cobblestone",0],[2,1,11,"cobblestone",0],[3,1,2,"cobblestone",0],[3,1,3,"cobblestone",0],[3,1,11,"cobblestone",0],[3,1,12,"cobblestone",0],[4,1,1,"dark_oak_log",0],[4,1,2,"cobblestone",0],[4,1,12,"cobblestone",0],[4,1,13,"dark_oak_log",0],[5,1,2,"cobblestone",0],[5,1,12,"cobblestone",0],[6,1,2,"cobblestone",0],[6,1,12,"cobblestone",0],[7,1,2,"cobblestone",0],[8,1,2,"cobblestone",0],[8,1,12,"cobblestone",0],[9,1,2,"cobblestone",0],[9,1,12,"cobblestone",0],[10,1,1,"dark_oak_log",0],[10,1,2,"cobblestone",0],[10,1,4,"birch_planks",0],[10,1,5,"cobblestone",0],[10,1,12,"cobblestone",0],[10,1,13,"dark_oak_log",0],[11,1,2,"cobblestone",0],[11,1,3,"cobblestone",0],[11,1,11,"cobblestone",0],[11,1,12,"cobblestone",0],[12,1,3,"cobblestone",0],[12,1,4,"cobblestone",0],[12,1,5,"cobblestone",0],[12,1,6,"cobblestone",0],[12,1,7,"cobblestone",0],[12,1,8,"cobblestone",0],[12,1,9,"cobblestone",0],[12,1,10,"cobblestone",0],[12,1,11,"cobblestone",0],[13,1,4,"dark_oak_log",0],[13,1,10,"dark_oak_log",0],[1,2,4,"dark_oak_log",0],[1,2,10,"dark_oak_log",0],[2,2,3,"cobblestone",0],[2,2,4,"cobblestone",0],[2,2,5,"cobblestone",0],[2,2,7,"cobblestone",0],[2,2,9,"cobblestone",0],[2,2,10,"cobblestone",0],[2,2,11,"cobblestone",0],[3,2,2,"cobblestone",0],[3,2,3,"cobblestone",0],[3,2,11,"cobblestone",0],[3,2,12,"cobblestone",0],[4,2,1,"dark_oak_log",0],[4,2,2,"cobblestone",0],[4,2,12,"cobblestone",0],[4,2,13,"dark_oak_log",0],[5,2,2,"cobblestone",0],[5,2,12,"cobblestone",0],[6,2,12,"cobblestone",0],[7,2,2,"cobblestone",0],[8,2,12,"cobblestone",0],[9,2,2,"cobblestone",0],[9,2,12,"cobblestone",0],[10,2,1,"dark_oak_log",0],[10,2,2,"cobblestone",0],[10,2,6,"cobblestone",0],[10,2,12,"cobblestone",0],[10,2,13,"dark_oak_log",0],[11,2,2,"cobblestone",0],[11,2,3,"cobblestone",0],[11,2,11,"cobblestone",0],[11,2,12,"cobblestone",0],[12,2,3,"cobblestone",0],[12,2,4,"cobblestone",0],[12,2,5,"cobblestone",0],[12,2,7,"cobblestone",0],[12,2,9,"cobblestone",0],[12,2,10,"cobblestone",0],[12,2,11,"cobblestone",0],[13,2,4,"dark_oak_log",0],[13,2,10,"dark_oak_log",0],[2,3,4,"cobblestone",0],[2,3,5,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"cobblestone",0],[2,3,8,"cobblestone",0],[2,3,9,"cobblestone",0],[2,3,10,"cobblestone",0],[3,3,3,"cobblestone",0],[3,3,11,"cobblestone",0],[4,3,2,"cobblestone",0],[4,3,12,"cobblestone",0],[5,3,2,"cobblestone",0],[5,3,12,"cobblestone",0],[6,3,2,"cobblestone",0],[6,3,12,"cobblestone",0],[7,3,2,"cobblestone",0],[7,3,12,"cobblestone",0],[8,3,2,"cobblestone",0],[8,3,12,"cobblestone",0],[9,3,2,"cobblestone",0],[9,3,12,"cobblestone",0],[10,3,2,"cobblestone",0],[10,3,7,"cobblestone",0],[10,3,12,"cobblestone",0],[11,3,3,"cobblestone",0],[11,3,11,"cobblestone",0],[12,3,4,"cobblestone",0],[12,3,5,"cobblestone",0],[12,3,6,"cobblestone",0],[12,3,7,"cobblestone",0],[12,3,8,"cobblestone",0],[12,3,9,"cobblestone",0],[12,3,10,"cobblestone",0],[3,4,4,"cobblestone",0],[3,4,5,"dark_oak_planks",0],[3,4,6,"dark_oak_planks",0],[3,4,7,"dark_oak_planks",0],[3,4,8,"dark_oak_planks",0],[3,4,9,"dark_oak_planks",0],[3,4,10,"cobblestone",0],[4,4,3,"cobblestone",0],[4,4,11,"cobblestone",0],[5,4,3,"dark_oak_planks",0],[5,4,11,"dark_oak_planks",0],[6,4,3,"dark_oak_planks",0],[6,4,11,"dark_oak_planks",0],[7,4,3,"dark_oak_planks",0],[7,4,11,"dark_oak_planks",0],[8,4,3,"dark_oak_planks",0],[8,4,11,"dark_oak_planks",0],[9,4,3,"dark_oak_planks",0],[9,4,11,"dark_oak_planks",0],[10,4,3,"cobblestone",0],[10,4,8,"cobblestone",0],[10,4,11,"cobblestone",0],[11,4,4,"cobblestone",0],[11,4,5,"dark_oak_planks",0],[11,4,6,"dark_oak_planks",0],[11,4,7,"dark_oak_planks",0],[11,4,8,"dark_oak_planks",0],[11,4,9,"dark_oak_planks",0],[11,4,10,"cobblestone",0],[3,5,4,"dark_oak_log",0],[3,5,5,"dark_oak_planks",0],[3,5,6,"birch_planks",0],[3,5,7,"dark_oak_log",0],[3,5,8,"birch_planks",0],[3,5,9,"dark_oak_planks",0],[3,5,10,"dark_oak_log",0],[4,5,3,"dark_oak_log",0],[4,5,4,"birch_planks",0],[4,5,5,"birch_planks",0],[4,5,6,"birch_planks",0],[4,5,7,"birch_planks",0],[4,5,8,"birch_planks",0],[4,5,9,"birch_planks",0],[4,5,10,"birch_planks",0],[4,5,11,"dark_oak_log",0],[5,5,3,"dark_oak_planks",0],[5,5,4,"birch_planks",0],[5,5,5,"birch_planks",0],[5,5,6,"birch_planks",0],[5,5,7,"birch_planks",0],[5,5,8,"birch_planks",0],[5,5,9,"birch_planks",0],[5,5,10,"birch_planks",0],[5,5,11,"dark_oak_planks",0],[6,5,3,"birch_planks",0],[6,5,4,"birch_planks",0],[6,5,5,"birch_planks",0],[6,5,6,"birch_planks",0],[6,5,7,"birch_planks",0],[6,5,8,"birch_planks",0],[6,5,9,"birch_planks",0],[6,5,10,"birch_planks",0],[6,5,11,"birch_planks",0],[7,5,3,"dark_oak_log",0],[7,5,4,"birch_planks",0],[7,5,5,"birch_planks",0],[7,5,6,"birch_planks",0],[7,5,7,"birch_planks",0],[7,5,8,"birch_planks",0],[7,5,9,"birch_planks",0],[7,5,10,"birch_planks",0],[7,5,11,"dark_oak_log",0],[8,5,3,"birch_planks",0],[8,5,4,"birch_planks",0],[8,5,5,"birch_planks",0],[8,5,6,"birch_planks",0],[8,5,7,"birch_planks",0],[8,5,8,"birch_planks",0],[8,5,9,"birch_planks",0],[8,5,10,"birch_planks",0],[8,5,11,"birch_planks",0],[9,5,3,"dark_oak_planks",0],[9,5,4,"birch_planks",0],[9,5,6,"birch_planks",0],[9,5,7,"birch_planks",0],[9,5,8,"birch_planks",0],[9,5,9,"birch_planks",0],[9,5,10,"birch_planks",0],[9,5,11,"dark_oak_planks",0],[10,5,3,"dark_oak_log",0],[10,5,4,"birch_planks",0],[10,5,9,"birch_planks",0],[10,5,10,"birch_planks",0],[10,5,11,"dark_oak_log",0],[11,5,4,"dark_oak_log",0],[11,5,5,"dark_oak_planks",0],[11,5,6,"birch_planks",0],[11,5,7,"dark_oak_log",0],[11,5,8,"birch_planks",0],[11,5,9,"dark_oak_planks",0],[11,5,10,"dark_oak_log",0],[3,6,4,"dark_oak_log",0],[3,6,5,"dark_oak_planks",0],[3,6,9,"dark_oak_planks",0],[3,6,10,"dark_oak_log",0],[4,6,3,"dark_oak_log",0],[4,6,9,"cobblestone",0],[4,6,10,"birch_planks",0],[4,6,11,"dark_oak_log",0],[5,6,3,"dark_oak_planks",0],[5,6,11,"dark_oak_planks",0],[9,6,3,"dark_oak_planks",0],[9,6,11,"dark_oak_planks",0],[10,6,3,"dark_oak_log",0],[10,6,11,"dark_oak_log",0],[11,6,4,"dark_oak_log",0],[11,6,5,"dark_oak_planks",0],[11,6,9,"dark_oak_planks",0],[11,6,10,"dark_oak_log",0],[3,7,4,"dark_oak_log",0],[3,7,5,"dark_oak_planks",0],[3,7,9,"dark_oak_planks",0],[3,7,10,"dark_oak_log",0],[4,7,3,"dark_oak_log",0],[4,7,11,"dark_oak_log",0],[5,7,3,"dark_oak_planks",0],[5,7,11,"dark_oak_planks",0],[9,7,3,"dark_oak_planks",0],[9,7,11,"dark_oak_planks",0],[10,7,3,"dark_oak_log",0],[10,7,11,"dark_oak_log",0],[11,7,4,"dark_oak_log",0],[11,7,5,"dark_oak_planks",0],[11,7,9,"dark_oak_planks",0],[11,7,10,"dark_oak_log",0],[3,8,4,"dark_oak_log",0],[3,8,5,"dark_oak_planks",0],[3,8,6,"dark_oak_planks",0],[3,8,8,"dark_oak_planks",0],[3,8,9,"dark_oak_planks",0],[3,8,10,"dark_oak_log",0],[4,8,3,"dark_oak_log",0],[4,8,11,"dark_oak_log",0],[5,8,3,"dark_oak_planks",0],[5,8,11,"dark_oak_planks",0],[6,8,3,"dark_oak_planks",0],[6,8,11,"dark_oak_planks",0],[8,8,3,"dark_oak_planks",0],[8,8,11,"dark_oak_planks",0],[9,8,3,"dark_oak_planks",0],[9,8,11,"dark_oak_planks",0],[10,8,3,"dark_oak_log",0],[10,8,11,"dark_oak_log",0],[11,8,4,"dark_oak_log",0],[11,8,5,"dark_oak_planks",0],[11,8,6,"dark_oak_planks",0],[11,8,8,"dark_oak_planks",0],[11,8,9,"dark_oak_planks",0],[11,8,10,"dark_oak_log",0],[3,9,4,"dark_oak_log",0],[3,9,5,"dark_oak_planks",0],[3,9,6,"dark_oak_planks",0],[3,9,7,"dark_oak_log",0],[3,9,8,"dark_oak_planks",0],[3,9,9,"dark_oak_planks",0],[3,9,10,"dark_oak_log",0],[4,9,3,"dark_oak_log",0],[4,9,4,"birch_planks",0],[4,9,5,"birch_planks",0],[4,9,6,"birch_planks",0],[4,9,11,"dark_oak_log",0],[5,9,3,"dark_oak_planks",0],[5,9,4,"birch_planks",0],[5,9,5,"birch_planks",0],[5,9,6,"birch_planks",0],[5,9,7,"birch_planks",0],[5,9,8,"birch_planks",0],[5,9,9,"birch_planks",0],[5,9,11,"dark_oak_planks",0],[6,9,3,"dark_oak_planks",0],[6,9,4,"birch_planks",0],[6,9,5,"birch_planks",0],[6,9,6,"birch_planks",0],[6,9,7,"birch_planks",0],[6,9,8,"birch_planks",0],[6,9,9,"birch_planks",0],[6,9,10,"birch_planks",0],[6,9,11,"dark_oak_planks",0],[7,9,3,"dark_oak_log",0],[7,9,4,"birch_planks",0],[7,9,5,"birch_planks",0],[7,9,6,"birch_planks",0],[7,9,7,"birch_planks",0],[7,9,8,"birch_planks",0],[7,9,9,"birch_planks",0],[7,9,10,"birch_planks",0],[7,9,11,"dark_oak_log",0],[8,9,3,"dark_oak_planks",0],[8,9,4,"birch_planks",0],[8,9,5,"birch_planks",0],[8,9,6,"birch_planks",0],[8,9,7,"birch_planks",0],[8,9,8,"birch_planks",0],[8,9,9,"birch_planks",0],[8,9,10,"birch_planks",0],[8,9,11,"dark_oak_planks",0],[9,9,3,"dark_oak_planks",0],[9,9,4,"birch_planks",0],[9,9,5,"birch_planks",0],[9,9,6,"birch_planks",0],[9,9,7,"birch_planks",0],[9,9,8,"birch_planks",0],[9,9,9,"birch_planks",0],[9,9,10,"birch_planks",0],[9,9,11,"dark_oak_planks",0],[10,9,3,"dark_oak_log",0],[10,9,4,"birch_planks",0],[10,9,5,"birch_planks",0],[10,9,6,"birch_planks",0],[10,9,7,"birch_planks",0],[10,9,8,"birch_planks",0],[10,9,9,"birch_planks",0],[10,9,10,"birch_planks",0],[10,9,11,"dark_oak_log",0],[11,9,4,"dark_oak_log",0],[11,9,5,"dark_oak_planks",0],[11,9,6,"dark_oak_planks",0],[11,9,7,"dark_oak_log",0],[11,9,8,"dark_oak_planks",0],[11,9,9,"dark_oak_planks",0],[11,9,10,"dark_oak_log",0],[3,10,4,"dark_oak_log",0],[3,10,5,"dark_oak_planks",0],[3,10,6,"dark_oak_log",0],[3,10,7,"dark_oak_planks",0],[3,10,8,"dark_oak_log",0],[3,10,9,"dark_oak_planks",0],[3,10,10,"dark_oak_log",0],[4,10,3,"dark_oak_log",0],[4,10,11,"dark_oak_log",0],[5,10,3,"dark_oak_planks",0],[5,10,11,"dark_oak_planks",0],[6,10,3,"dark_oak_log",0],[6,10,11,"dark_oak_log",0],[7,10,3,"dark_oak_planks",0],[7,10,11,"dark_oak_planks",0],[8,10,3,"dark_oak_log",0],[8,10,11,"dark_oak_log",0],[9,10,3,"dark_oak_planks",0],[9,10,11,"dark_oak_planks",0],[10,10,3,"dark_oak_log",0],[10,10,5,"birch_planks",0],[10,10,11,"dark_oak_log",0],[11,10,4,"dark_oak_log",0],[11,10,5,"dark_oak_planks",0],[11,10,6,"dark_oak_log",0],[11,10,7,"dark_oak_planks",0],[11,10,8,"dark_oak_log",0],[11,10,9,"dark_oak_planks",0],[11,10,10,"dark_oak_log",0],[3,11,4,"cobblestone",0],[3,11,5,"dark_oak_planks",0],[3,11,6,"dark_oak_planks",0],[3,11,7,"dark_oak_log",0],[3,11,8,"dark_oak_planks",0],[3,11,9,"dark_oak_planks",0],[3,11,10,"cobblestone",0],[4,11,3,"cobblestone",0],[4,11,11,"cobblestone",0],[5,11,3,"dark_oak_planks",0],[5,11,11,"dark_oak_planks",0],[6,11,3,"dark_oak_planks",0],[6,11,11,"dark_oak_planks",0],[7,11,3,"dark_oak_log",0],[7,11,11,"dark_oak_log",0],[8,11,3,"dark_oak_planks",0],[8,11,11,"dark_oak_planks",0],[9,11,3,"dark_oak_planks",0],[9,11,11,"dark_oak_planks",0],[10,11,3,"cobblestone",0],[10,11,11,"cobblestone",0],[11,11,4,"cobblestone",0],[11,11,5,"dark_oak_planks",0],[11,11,6,"dark_oak_planks",0],[11,11,7,"dark_oak_log",0],[11,11,8,"dark_oak_planks",0],[11,11,9,"dark_oak_planks",0],[11,11,10,"cobblestone",0],[2,12,4,"cobblestone",0],[2,12,10,"cobblestone",0],[3,12,3,"cobblestone",0],[3,12,4,"cobblestone",0],[3,12,5,"cobblestone",0],[3,12,6,"cobblestone",0],[3,12,7,"cobblestone",0],[3,12,8,"cobblestone",0],[3,12,9,"cobblestone",0],[3,12,10,"cobblestone",0],[3,12,11,"cobblestone",0],[4,12,2,"cobblestone",0],[4,12,3,"cobblestone",0],[4,12,11,"cobblestone",0],[4,12,12,"cobblestone",0],[5,12,3,"cobblestone",0],[5,12,11,"cobblestone",0],[6,12,3,"cobblestone",0],[6,12,11,"cobblestone",0],[7,12,3,"cobblestone",0],[7,12,11,"cobblestone",0],[8,12,3,"cobblestone",0],[8,12,11,"cobblestone",0],[9,12,3,"cobblestone",0],[9,12,11,"cobblestone",0],[10,12,2,"cobblestone",0],[10,12,3,"cobblestone",0],[10,12,11,"cobblestone",0],[10,12,12,"cobblestone",0],[11,12,3,"cobblestone",0],[11,12,4,"cobblestone",0],[11,12,5,"cobblestone",0],[11,12,6,"cobblestone",0],[11,12,7,"cobblestone",0],[11,12,8,"cobblestone",0],[11,12,9,"cobblestone",0],[11,12,10,"cobblestone",0],[11,12,11,"cobblestone",0],[12,12,4,"cobblestone",0],[12,12,10,"cobblestone",0],[1,13,3,"dark_oak_log",0],[1,13,4,"dark_oak_log",0],[1,13,5,"dark_oak_log",0],[1,13,6,"dark_oak_log",0],[1,13,7,"dark_oak_log",0],[1,13,8,"dark_oak_log",0],[1,13,9,"dark_oak_log",0],[1,13,10,"dark_oak_log",0],[1,13,11,"dark_oak_log",0],[2,13,2,"cobblestone",0],[2,13,3,"birch_planks",0],[2,13,4,"birch_planks",0],[2,13,5,"birch_planks",0],[2,13,6,"birch_planks",0],[2,13,7,"birch_planks",0],[2,13,8,"birch_planks",0],[2,13,9,"birch_planks",0],[2,13,10,"birch_planks",0],[2,13,11,"birch_planks",0],[2,13,12,"cobblestone",0],[3,13,1,"dark_oak_log",0],[3,13,2,"birch_planks",0],[3,13,3,"birch_planks",0],[3,13,4,"birch_planks",0],[3,13,5,"birch_planks",0],[3,13,6,"birch_planks",0],[3,13,7,"birch_planks",0],[3,13,8,"birch_planks",0],[3,13,9,"birch_planks",0],[3,13,10,"birch_planks",0],[3,13,11,"birch_planks",0],[3,13,12,"birch_planks",0],[3,13,13,"dark_oak_log",0],[4,13,1,"dark_oak_log",0],[4,13,2,"birch_planks",0],[4,13,3,"birch_planks",0],[4,13,4,"birch_planks",0],[4,13,5,"birch_planks",0],[4,13,6,"birch_planks",0],[4,13,7,"birch_planks",0],[4,13,8,"birch_planks",0],[4,13,9,"birch_planks",0],[4,13,10,"birch_planks",0],[4,13,11,"birch_planks",0],[4,13,12,"birch_planks",0],[4,13,13,"dark_oak_log",0],[5,13,1,"dark_oak_log",0],[5,13,2,"birch_planks",0],[5,13,3,"birch_planks",0],[5,13,4,"birch_planks",0],[5,13,5,"birch_planks",0],[5,13,6,"birch_planks",0],[5,13,7,"birch_planks",0],[5,13,8,"birch_planks",0],[5,13,9,"birch_planks",0],[5,13,10,"birch_planks",0],[5,13,11,"birch_planks",0],[5,13,12,"birch_planks",0],[5,13,13,"dark_oak_log",0],[6,13,1,"dark_oak_log",0],[6,13,2,"birch_planks",0],[6,13,3,"birch_planks",0],[6,13,4,"birch_planks",0],[6,13,5,"birch_planks",0],[6,13,6,"birch_planks",0],[6,13,7,"birch_planks",0],[6,13,8,"birch_planks",0],[6,13,9,"birch_planks",0],[6,13,10,"birch_planks",0],[6,13,11,"birch_planks",0],[6,13,12,"birch_planks",0],[6,13,13,"dark_oak_log",0],[7,13,1,"dark_oak_log",0],[7,13,2,"birch_planks",0],[7,13,3,"birch_planks",0],[7,13,4,"birch_planks",0],[7,13,5,"birch_planks",0],[7,13,6,"birch_planks",0],[7,13,7,"birch_planks",0],[7,13,8,"birch_planks",0],[7,13,9,"birch_planks",0],[7,13,10,"birch_planks",0],[7,13,11,"birch_planks",0],[7,13,12,"birch_planks",0],[7,13,13,"dark_oak_log",0],[8,13,1,"dark_oak_log",0],[8,13,2,"birch_planks",0],[8,13,3,"birch_planks",0],[8,13,4,"birch_planks",0],[8,13,5,"birch_planks",0],[8,13,6,"birch_planks",0],[8,13,7,"birch_planks",0],[8,13,8,"birch_planks",0],[8,13,9,"birch_planks",0],[8,13,10,"birch_planks",0],[8,13,11,"birch_planks",0],[8,13,12,"birch_planks",0],[8,13,13,"dark_oak_log",0],[9,13,1,"dark_oak_log",0],[9,13,2,"birch_planks",0],[9,13,3,"birch_planks",0],[9,13,4,"birch_planks",0],[9,13,6,"birch_planks",0],[9,13,7,"birch_planks",0],[9,13,8,"birch_planks",0],[9,13,9,"birch_planks",0],[9,13,10,"birch_planks",0],[9,13,11,"birch_planks",0],[9,13,12,"birch_planks",0],[9,13,13,"dark_oak_log",0],[10,13,1,"dark_oak_log",0],[10,13,2,"birch_planks",0],[10,13,3,"birch_planks",0],[10,13,4,"birch_planks",0],[10,13,9,"birch_planks",0],[10,13,10,"birch_planks",0],[10,13,11,"birch_planks",0],[10,13,12,"birch_planks",0],[10,13,13,"dark_oak_log",0],[11,13,1,"dark_oak_log",0],[11,13,2,"birch_planks",0],[11,13,3,"birch_planks",0],[11,13,4,"birch_planks",0],[11,13,5,"birch_planks",0],[11,13,6,"birch_planks",0],[11,13,7,"birch_planks",0],[11,13,8,"birch_planks",0],[11,13,9,"birch_planks",0],[11,13,10,"birch_planks",0],[11,13,11,"birch_planks",0],[11,13,12,"birch_planks",0],[11,13,13,"dark_oak_log",0],[12,13,2,"cobblestone",0],[12,13,3,"birch_planks",0],[12,13,4,"birch_planks",0],[12,13,5,"birch_planks",0],[12,13,6,"birch_planks",0],[12,13,7,"birch_planks",0],[12,13,8,"birch_planks",0],[12,13,9,"birch_planks",0],[12,13,10,"birch_planks",0],[12,13,11,"birch_planks",0],[12,13,12,"cobblestone",0],[13,13,3,"dark_oak_log",0],[13,13,4,"dark_oak_log",0],[13,13,5,"dark_oak_log",0],[13,13,6,"dark_oak_log",0],[13,13,7,"dark_oak_log",0],[13,13,8,"dark_oak_log",0],[13,13,9,"dark_oak_log",0],[13,13,10,"dark_oak_log",0],[13,13,11,"dark_oak_log",0],[4,14,4,"dark_oak_log",0],[4,14,10,"dark_oak_log",0],[10,14,4,"dark_oak_log",0],[10,14,10,"dark_oak_log",0],[4,15,4,"dark_oak_log",0],[4,15,10,"dark_oak_log",0],[10,15,4,"dark_oak_log",0],[10,15,10,"dark_oak_log",0],[2,16,2,"dark_oak_planks",0],[2,16,12,"dark_oak_planks",0],[4,16,4,"dark_oak_log",0],[4,16,10,"dark_oak_log",0],[10,16,4,"dark_oak_log",0],[10,16,10,"dark_oak_log",0],[12,16,2,"dark_oak_planks",0],[12,16,12,"dark_oak_planks",0],[2,17,2,"dark_oak_planks",0],[2,17,3,"dark_oak_planks",0],[2,17,12,"dark_oak_planks",0],[3,17,2,"dark_oak_planks",0],[3,17,3,"dark_oak_planks",0],[3,17,11,"dark_oak_planks",0],[4,17,4,"dark_oak_log",0],[4,17,10,"dark_oak_log",0],[10,17,4,"dark_oak_log",0],[10,17,10,"dark_oak_log",0],[11,17,2,"dark_oak_planks",0],[11,17,3,"dark_oak_planks",0],[11,17,11,"dark_oak_planks",0],[11,17,12,"dark_oak_planks",0],[12,17,2,"dark_oak_planks",0],[12,17,3,"dark_oak_planks",0],[12,17,11,"dark_oak_planks",0],[12,17,12,"dark_oak_planks",0],[2,18,3,"dark_oak_planks",0],[2,18,4,"dark_oak_planks",0],[2,18,5,"dark_oak_planks",0],[2,18,9,"dark_oak_planks",0],[2,18,10,"dark_oak_planks",0],[2,18,11,"dark_oak_planks",0],[3,18,2,"dark_oak_planks",0],[3,18,3,"dark_oak_planks",0],[3,18,4,"dark_oak_planks",0],[3,18,5,"dark_oak_planks",0],[3,18,9,"dark_oak_planks",0],[3,18,10,"dark_oak_planks",0],[3,18,11,"dark_oak_planks",0],[3,18,12,"dark_oak_planks",0],[4,18,2,"dark_oak_planks",0],[4,18,3,"dark_oak_planks",0],[4,18,4,"dark_oak_planks",0],[4,18,5,"dark_oak_planks",0],[4,18,9,"dark_oak_planks",0],[4,18,10,"dark_oak_planks",0],[4,18,11,"dark_oak_planks",0],[4,18,12,"dark_oak_planks",0],[5,18,2,"dark_oak_planks",0],[5,18,3,"dark_oak_planks",0],[5,18,4,"dark_oak_planks",0],[5,18,5,"dark_oak_planks",0],[5,18,9,"dark_oak_planks",0],[5,18,10,"dark_oak_planks",0],[5,18,11,"dark_oak_planks",0],[5,18,12,"dark_oak_planks",0],[9,18,2,"dark_oak_planks",0],[9,18,3,"dark_oak_planks",0],[9,18,4,"dark_oak_planks",0],[9,18,5,"dark_oak_planks",0],[9,18,9,"dark_oak_planks",0],[9,18,10,"dark_oak_planks",0],[9,18,11,"dark_oak_planks",0],[9,18,12,"dark_oak_planks",0],[10,18,2,"dark_oak_planks",0],[10,18,3,"dark_oak_planks",0],[10,18,4,"dark_oak_planks",0],[10,18,5,"dark_oak_planks",0],[10,18,9,"dark_oak_planks",0],[10,18,10,"dark_oak_planks",0],[10,18,11,"dark_oak_planks",0],[10,18,12,"dark_oak_planks",0],[11,18,2,"dark_oak_planks",0],[11,18,3,"dark_oak_planks",0],[11,18,4,"dark_oak_planks",0],[11,18,5,"dark_oak_planks",0],[11,18,9,"dark_oak_planks",0],[11,18,10,"dark_oak_planks",0],[11,18,11,"dark_oak_planks",0],[11,18,12,"dark_oak_planks",0],[12,18,3,"dark_oak_planks",0],[12,18,4,"dark_oak_planks",0],[12,18,5,"dark_oak_planks",0],[12,18,9,"dark_oak_planks",0],[12,18,10,"dark_oak_planks",0],[12,18,11,"dark_oak_planks",0],[2,19,4,"dark_oak_planks",0],[2,19,5,"dark_oak_planks",0],[2,19,6,"dark_oak_planks",0],[2,19,7,"dark_oak_planks",0],[2,19,8,"dark_oak_planks",0],[2,19,9,"dark_oak_planks",0],[2,19,10,"dark_oak_planks",0],[3,19,3,"dark_oak_planks",0],[3,19,4,"dark_oak_planks",0],[3,19,5,"dark_oak_planks",0],[3,19,6,"dark_oak_planks",0],[3,19,7,"dark_oak_planks",0],[3,19,8,"dark_oak_planks",0],[3,19,9,"dark_oak_planks",0],[3,19,10,"dark_oak_planks",0],[3,19,11,"dark_oak_planks",0],[4,19,2,"dark_oak_planks",0],[4,19,3,"dark_oak_planks",0],[4,19,4,"dark_oak_planks",0],[4,19,5,"dark_oak_planks",0],[4,19,6,"dark_oak_planks",0],[4,19,7,"dark_oak_planks",0],[4,19,8,"dark_oak_planks",0],[4,19,9,"dark_oak_planks",0],[4,19,10,"dark_oak_planks",0],[4,19,11,"dark_oak_planks",0],[4,19,12,"dark_oak_planks",0],[5,19,2,"dark_oak_planks",0],[5,19,3,"dark_oak_planks",0],[5,19,4,"dark_oak_planks",0],[5,19,5,"dark_oak_planks",0],[5,19,6,"dark_oak_planks",0],[5,19,8,"dark_oak_planks",0],[5,19,9,"dark_oak_planks",0],[5,19,10,"dark_oak_planks",0],[5,19,11,"dark_oak_planks",0],[5,19,12,"dark_oak_planks",0],[6,19,2,"dark_oak_planks",0],[6,19,3,"dark_oak_planks",0],[6,19,4,"dark_oak_planks",0],[6,19,5,"dark_oak_planks",0],[6,19,9,"dark_oak_planks",0],[6,19,10,"dark_oak_planks",0],[6,19,11,"dark_oak_planks",0],[6,19,12,"dark_oak_planks",0],[7,19,2,"dark_oak_planks",0],[7,19,3,"dark_oak_planks",0],[7,19,4,"dark_oak_planks",0],[7,19,10,"dark_oak_planks",0],[7,19,11,"dark_oak_planks",0],[7,19,12,"dark_oak_planks",0],[8,19,2,"dark_oak_planks",0],[8,19,3,"dark_oak_planks",0],[8,19,4,"dark_oak_planks",0],[8,19,5,"dark_oak_planks",0],[8,19,9,"dark_oak_planks",0],[8,19,10,"dark_oak_planks",0],[8,19,11,"dark_oak_planks",0],[8,19,12,"dark_oak_planks",0],[9,19,2,"dark_oak_planks",0],[9,19,3,"dark_oak_planks",0],[9,19,4,"dark_oak_planks",0],[9,19,5,"dark_oak_planks",0],[9,19,6,"dark_oak_planks",0],[9,19,8,"dark_oak_planks",0],[9,19,9,"dark_oak_planks",0],[9,19,10,"dark_oak_planks",0],[9,19,11,"dark_oak_planks",0],[9,19,12,"dark_oak_planks",0],[10,19,2,"dark_oak_planks",0],[10,19,3,"dark_oak_planks",0],[10,19,4,"dark_oak_planks",0],[10,19,5,"dark_oak_planks",0],[10,19,6,"dark_oak_planks",0],[10,19,7,"dark_oak_planks",0],[10,19,8,"dark_oak_planks",0],[10,19,9,"dark_oak_planks",0],[10,19,10,"dark_oak_planks",0],[10,19,11,"dark_oak_planks",0],[10,19,12,"dark_oak_planks",0],[11,19,3,"dark_oak_planks",0],[11,19,4,"dark_oak_planks",0],[11,19,5,"dark_oak_planks",0],[11,19,6,"dark_oak_planks",0],[11,19,7,"dark_oak_planks",0],[11,19,8,"dark_oak_planks",0],[11,19,9,"dark_oak_planks",0],[11,19,10,"dark_oak_planks",0],[11,19,11,"dark_oak_planks",0],[12,19,4,"dark_oak_planks",0],[12,19,5,"dark_oak_planks",0],[12,19,6,"dark_oak_planks",0],[12,19,7,"dark_oak_planks",0],[12,19,8,"dark_oak_planks",0],[12,19,9,"dark_oak_planks",0],[12,19,10,"dark_oak_planks",0],[3,20,5,"dark_oak_planks",0],[3,20,6,"dark_oak_planks",0],[3,20,7,"dark_oak_planks",0],[3,20,8,"dark_oak_planks",0],[3,20,9,"dark_oak_planks",0],[4,20,4,"dark_oak_planks",0],[4,20,5,"dark_oak_planks",0],[4,20,6,"dark_oak_planks",0],[4,20,7,"dark_oak_planks",0],[4,20,8,"dark_oak_planks",0],[4,20,9,"dark_oak_planks",0],[4,20,10,"dark_oak_planks",0],[5,20,3,"dark_oak_planks",0],[5,20,4,"dark_oak_planks",0],[5,20,5,"dark_oak_planks",0],[5,20,6,"dark_oak_planks",0],[5,20,7,"dark_oak_planks",0],[5,20,8,"dark_oak_planks",0],[5,20,9,"dark_oak_planks",0],[5,20,10,"dark_oak_planks",0],[5,20,11,"dark_oak_planks",0],[6,20,3,"dark_oak_planks",0],[6,20,4,"dark_oak_planks",0],[6,20,5,"dark_oak_planks",0],[6,20,6,"dark_oak_planks",0],[6,20,7,"dark_oak_planks",0],[6,20,8,"dark_oak_planks",0],[6,20,9,"dark_oak_planks",0],[6,20,10,"dark_oak_planks",0],[6,20,11,"dark_oak_planks",0],[7,20,3,"dark_oak_planks",0],[7,20,4,"dark_oak_planks",0],[7,20,5,"dark_oak_planks",0],[7,20,6,"dark_oak_planks",0],[7,20,7,"dark_oak_planks",0],[7,20,8,"dark_oak_planks",0],[7,20,9,"dark_oak_planks",0],[7,20,10,"dark_oak_planks",0],[7,20,11,"dark_oak_planks",0],[8,20,3,"dark_oak_planks",0],[8,20,4,"dark_oak_planks",0],[8,20,5,"dark_oak_planks",0],[8,20,6,"dark_oak_planks",0],[8,20,7,"dark_oak_planks",0],[8,20,8,"dark_oak_planks",0],[8,20,9,"dark_oak_planks",0],[8,20,10,"dark_oak_planks",0],[8,20,11,"dark_oak_planks",0],[9,20,3,"dark_oak_planks",0],[9,20,4,"dark_oak_planks",0],[9,20,5,"dark_oak_planks",0],[9,20,6,"dark_oak_planks",0],[9,20,7,"dark_oak_planks",0],[9,20,8,"dark_oak_planks",0],[9,20,9,"dark_oak_planks",0],[9,20,10,"dark_oak_planks",0],[9,20,11,"dark_oak_planks",0],[10,20,4,"dark_oak_planks",0],[10,20,5,"dark_oak_planks",0],[10,20,6,"dark_oak_planks",0],[10,20,7,"dark_oak_planks",0],[10,20,8,"dark_oak_planks",0],[10,20,9,"dark_oak_planks",0],[10,20,10,"dark_oak_planks",0],[11,20,5,"dark_oak_planks",0],[11,20,6,"dark_oak_planks",0],[11,20,7,"dark_oak_planks",0],[11,20,8,"dark_oak_planks",0],[11,20,9,"dark_oak_planks",0],[3,1,5,"dark_oak_slab",0],[3,1,6,"dark_oak_slab",0],[3,1,7,"dark_oak_slab",0],[3,1,8,"dark_oak_slab",0],[3,1,9,"dark_oak_slab",0],[9,1,4,"cobblestone_stairs",0],[10,2,5,"cobblestone_stairs",-1.5708],[1,3,4,"dark_oak_slab",0],[1,3,10,"dark_oak_slab",0],[2,3,3,"dark_oak_fence",0],[2,3,11,"dark_oak_fence",0],[3,3,2,"dark_oak_fence",0],[3,3,4,"dark_oak_stairs",1.5708],[3,3,10,"dark_oak_stairs",-1.5708],[3,3,12,"dark_oak_fence",0],[4,3,1,"dark_oak_slab",0],[4,3,3,"dark_oak_stairs",3.14159],[4,3,11,"dark_oak_stairs",3.14159],[4,3,13,"dark_oak_slab",0],[10,3,1,"dark_oak_slab",0],[10,3,3,"dark_oak_stairs",0],[10,3,6,"cobblestone_stairs",-1.5708],[10,3,11,"dark_oak_stairs",0],[10,3,13,"dark_oak_slab",0],[11,3,2,"dark_oak_fence",0],[11,3,4,"dark_oak_stairs",1.5708],[11,3,10,"dark_oak_stairs",-1.5708],[11,3,12,"dark_oak_fence",0],[12,3,3,"dark_oak_fence",0],[12,3,11,"dark_oak_fence",0],[13,3,4,"dark_oak_slab",0],[13,3,10,"dark_oak_slab",0],[2,4,5,"dark_oak_slab",0],[2,4,6,"dark_oak_slab",0],[2,4,7,"dark_oak_slab",0],[2,4,8,"dark_oak_slab",0],[2,4,9,"dark_oak_slab",0],[5,4,2,"dark_oak_slab",0],[5,4,12,"dark_oak_slab",0],[6,4,2,"dark_oak_slab",0],[6,4,12,"dark_oak_slab",0],[7,4,2,"dark_oak_slab",0],[7,4,12,"dark_oak_slab",0],[8,4,2,"dark_oak_slab",0],[8,4,12,"dark_oak_slab",0],[9,4,2,"dark_oak_slab",0],[9,4,12,"dark_oak_slab",0],[10,4,7,"cobblestone_stairs",-1.5708],[12,4,5,"dark_oak_slab",0],[12,4,6,"dark_oak_slab",0],[12,4,7,"dark_oak_slab",0],[12,4,8,"dark_oak_slab",0],[12,4,9,"dark_oak_slab",0],[2,5,6,"cobblestone_stairs",0],[2,5,7,"cobblestone_slab",0],[2,5,8,"cobblestone_stairs",0],[6,5,2,"cobblestone_stairs",-1.5708],[6,5,12,"cobblestone_stairs",1.5708],[7,5,2,"cobblestone_slab",0],[7,5,12,"cobblestone_slab",0],[8,5,2,"cobblestone_stairs",-1.5708],[8,5,12,"cobblestone_stairs",1.5708],[10,5,8,"cobblestone_stairs",-1.5708],[12,5,6,"cobblestone_stairs",3.14159],[12,5,7,"cobblestone_slab",0],[12,5,8,"cobblestone_stairs",3.14159],[5,6,10,"cobblestone_stairs",3.14159],[4,7,9,"cobblestone_stairs",1.5708],[3,8,7,"dark_oak_slab",0],[4,8,8,"cobblestone_stairs",1.5708],[7,8,3,"dark_oak_slab",0],[7,8,11,"dark_oak_slab",0],[11,8,7,"dark_oak_slab",0],[4,9,7,"cobblestone_stairs",1.5708],[9,10,5,"cobblestone_stairs",0],[10,11,6,"cobblestone_stairs",-1.5708],[2,12,3,"dark_oak_slab",0],[2,12,5,"dark_oak_stairs",0],[2,12,6,"cobblestone_stairs",0],[2,12,7,"cobblestone_stairs",0],[2,12,8,"cobblestone_stairs",0],[2,12,9,"dark_oak_stairs",0],[2,12,11,"dark_oak_slab",0],[3,12,2,"dark_oak_slab",0],[3,12,12,"dark_oak_slab",0],[5,12,2,"dark_oak_stairs",-1.5708],[5,12,12,"dark_oak_stairs",1.5708],[6,12,2,"cobblestone_stairs",-1.5708],[6,12,12,"cobblestone_stairs",1.5708],[7,12,2,"cobblestone_stairs",-1.5708],[7,12,12,"cobblestone_stairs",1.5708],[8,12,2,"cobblestone_stairs",-1.5708],[8,12,12,"cobblestone_stairs",1.5708],[9,12,2,"dark_oak_stairs",-1.5708],[9,12,12,"dark_oak_stairs",1.5708],[10,12,7,"cobblestone_stairs",-1.5708],[11,12,2,"dark_oak_slab",0],[11,12,12,"dark_oak_slab",0],[12,12,3,"dark_oak_slab",0],[12,12,5,"dark_oak_stairs",3.14159],[12,12,6,"cobblestone_stairs",3.14159],[12,12,7,"cobblestone_stairs",3.14159],[12,12,8,"cobblestone_stairs",3.14159],[12,12,9,"dark_oak_stairs",3.14159],[12,12,11,"dark_oak_slab",0],[10,13,8,"cobblestone_stairs",-1.5708],[1,14,3,"dark_oak_fence",0],[1,14,4,"dark_oak_fence",0],[1,14,5,"dark_oak_fence",0],[1,14,6,"dark_oak_fence",0],[1,14,8,"dark_oak_fence",0],[1,14,9,"dark_oak_fence",0],[1,14,10,"dark_oak_fence",0],[1,14,11,"dark_oak_fence",0],[2,14,2,"cobblestone",0],[2,14,3,"dark_oak_fence",0],[2,14,11,"dark_oak_fence",0],[2,14,12,"cobblestone",0],[3,14,1,"dark_oak_fence",0],[3,14,2,"dark_oak_fence",0],[3,14,12,"dark_oak_fence",0],[3,14,13,"dark_oak_fence",0],[4,14,1,"dark_oak_fence",0],[4,14,13,"dark_oak_fence",0],[5,14,1,"dark_oak_fence",0],[5,14,13,"dark_oak_fence",0],[6,14,1,"dark_oak_fence",0],[6,14,13,"dark_oak_fence",0],[8,14,1,"dark_oak_fence",0],[8,14,13,"dark_oak_fence",0],[9,14,1,"dark_oak_fence",0],[9,14,13,"dark_oak_fence",0],[10,14,1,"dark_oak_fence",0],[10,14,13,"dark_oak_fence",0],[11,14,1,"dark_oak_fence",0],[11,14,2,"dark_oak_fence",0],[11,14,12,"dark_oak_fence",0],[11,14,13,"dark_oak_fence",0],[12,14,2,"cobblestone",0],[12,14,3,"dark_oak_fence",0],[12,14,11,"dark_oak_fence",0],[12,14,12,"cobblestone",0],[13,14,3,"dark_oak_fence",0],[13,14,4,"dark_oak_fence",0],[13,14,5,"dark_oak_fence",0],[13,14,6,"dark_oak_fence",0],[13,14,8,"dark_oak_fence",0],[13,14,9,"dark_oak_fence",0],[13,14,10,"dark_oak_fence",0],[13,14,11,"dark_oak_fence",0],[2,15,2,"cobblestone",0],[2,15,12,"cobblestone",0],[12,15,2,"cobblestone",0],[12,15,12,"cobblestone",0],[2,18,2,"torch",0],[2,18,12,"torch",0],[12,18,2,"torch",0],[12,18,12,"torch",0],[7,1,13,"cobblestone",0],[0,13,4,"white_wall_banner",3.14159],[0,13,10,"white_wall_banner",3.14159],[4,13,0,"white_wall_banner",1.5708],[4,13,14,"white_wall_banner",-1.5708],[10,13,0,"white_wall_banner",1.5708],[10,13,14,"white_wall_banner",-1.5708],[14,13,4,"white_wall_banner",0],[14,13,10,"white_wall_banner",0],[9,14,10,"chest",3.14159]]}'),bg={size:[6,10,6],blocks:[[0,0,0,"netherrack",0],[0,0,1,"netherrack",0],[0,0,2,"netherrack",0],[0,0,3,"netherrack",0],[0,0,4,"netherrack",0],[0,0,5,"netherrack",0],[1,0,0,"netherrack",0],[1,0,1,"netherrack",0],[1,0,2,"netherrack",0],[1,0,3,"netherrack",0],[1,0,4,"netherrack",0],[1,0,5,"netherrack",0],[2,0,0,"netherrack",0],[2,0,1,"netherrack",0],[2,0,3,"netherrack",0],[2,0,4,"netherrack",0],[2,0,5,"netherrack",0],[3,0,0,"netherrack",0],[3,0,1,"netherrack",0],[3,0,2,"netherrack",0],[3,0,3,"netherrack",0],[3,0,4,"netherrack",0],[3,0,5,"netherrack",0],[4,0,0,"netherrack",0],[4,0,1,"netherrack",0],[4,0,2,"netherrack",0],[4,0,3,"netherrack",0],[4,0,4,"netherrack",0],[4,0,5,"netherrack",0],[5,0,0,"netherrack",0],[5,0,1,"netherrack",0],[5,0,2,"netherrack",0],[5,0,3,"netherrack",0],[5,0,4,"netherrack",0],[5,0,5,"netherrack",0],[1,1,1,"stone",0],[1,1,2,"stone",0],[1,1,3,"stone",0],[1,1,4,"stone",0],[2,1,0,"stone_slab",0],[2,1,1,"stone",0],[2,1,2,"stone",0],[2,1,3,"stone",0],[2,1,4,"stone_slab",0],[2,1,5,"stone_slab",0],[3,1,0,"stone_bricks",0],[3,1,1,"netherrack",0],[3,1,3,"netherrack",0],[3,1,4,"cracked_stone_bricks",0],[3,1,5,"stone_bricks",0],[4,1,1,"netherrack",0],[4,1,2,"netherrack",0],[4,1,3,"netherrack",0],[4,1,4,"netherrack",0],[4,1,5,"netherrack",0],[5,1,1,"netherrack",0],[5,1,2,"netherrack",0],[5,1,3,"netherrack",0],[5,1,4,"netherrack",0],[5,1,5,"netherrack",0],[3,2,0,"stone_bricks",0],[3,2,1,"obsidian",0],[3,2,2,"obsidian",0],[3,2,3,"obsidian",0],[3,2,4,"obsidian",0],[3,2,5,"stone_bricks",0],[4,2,2,"netherrack",0],[4,2,3,"netherrack",0],[4,2,4,"netherrack",0],[4,2,5,"netherrack",0],[3,3,0,"chiseled_stone_bricks",0],[3,3,1,"obsidian",0],[3,3,4,"obsidian",0],[3,3,5,"chiseled_stone_bricks",0],[4,3,3,"netherrack",0],[4,3,4,"netherrack",0],[3,4,0,"stone_bricks",0],[3,4,1,"obsidian",0],[3,4,5,"stone_bricks",0],[4,4,4,"netherrack",0],[3,5,0,"chiseled_stone_bricks",0],[3,5,1,"obsidian",0],[3,6,0,"stone_bricks",0],[3,6,1,"obsidian",0],[3,6,2,"obsidian",0],[3,6,3,"obsidian",0],[3,7,0,"stone_bricks",0],[3,7,1,"stone_bricks",0],[3,7,2,"gold_block",0],[3,7,3,"gold_block",0],[0,1,1,"stone_slab",0],[0,1,2,"stone_slab",0],[0,1,3,"stone_slab",0],[0,1,4,"stone_slab",0],[1,1,0,"stone_slab",0],[1,1,5,"stone_slab",0],[4,1,0,"stone_slab",0],[2,2,1,"stone_brick_stairs",-1.5708],[2,2,2,"stone_brick_stairs",0],[2,2,3,"stone_brick_stairs",0],[2,2,4,"stone_brick_stairs",1.5708],[2,7,2,"stone_brick_slab",0],[3,8,2,"stone_brick_stairs",-1.5708],[3,8,3,"stone_brick_stairs",1.5708],[2,0,2,"cobblestone",0],[2,2,0,"chest",3.14159]]},kg={size:[7,5,8],blocks:[[0,0,3,"snow_block",0],[0,0,4,"snow_block",0],[0,0,5,"snow_block",0],[1,0,2,"snow_block",0],[1,0,3,"snow_block",0],[1,0,4,"snow_block",0],[1,0,5,"snow_block",0],[1,0,6,"snow_block",0],[2,0,0,"snow_block",0],[2,0,1,"snow_block",0],[2,0,2,"snow_block",0],[2,0,3,"snow_block",0],[2,0,4,"snow_block",0],[2,0,5,"snow_block",0],[2,0,6,"snow_block",0],[2,0,7,"snow_block",0],[3,0,0,"snow_block",0],[3,0,1,"snow_block",0],[3,0,2,"snow_block",0],[3,0,3,"snow_block",0],[3,0,4,"snow_block",0],[3,0,6,"snow_block",0],[3,0,7,"snow_block",0],[4,0,0,"snow_block",0],[4,0,1,"snow_block",0],[4,0,2,"snow_block",0],[4,0,3,"snow_block",0],[4,0,4,"snow_block",0],[4,0,5,"snow_block",0],[4,0,6,"snow_block",0],[4,0,7,"snow_block",0],[5,0,2,"snow_block",0],[5,0,3,"snow_block",0],[5,0,4,"snow_block",0],[5,0,5,"snow_block",0],[5,0,6,"snow_block",0],[6,0,3,"snow_block",0],[6,0,4,"snow_block",0],[6,0,5,"snow_block",0],[0,1,3,"snow_block",0],[0,1,4,"ice",0],[0,1,5,"snow_block",0],[1,1,2,"snow_block",0],[1,1,5,"crafting_table",0],[1,1,6,"snow_block",0],[2,1,0,"snow_block",0],[2,1,1,"snow_block",0],[2,1,7,"snow_block",0],[3,1,7,"snow_block",0],[4,1,0,"snow_block",0],[4,1,1,"snow_block",0],[4,1,7,"snow_block",0],[5,1,2,"snow_block",0],[5,1,6,"snow_block",0],[6,1,3,"snow_block",0],[6,1,4,"ice",0],[6,1,5,"snow_block",0],[0,2,3,"snow_block",0],[0,2,4,"snow_block",0],[0,2,5,"snow_block",0],[1,2,2,"snow_block",0],[1,2,6,"snow_block",0],[2,2,0,"snow_block",0],[2,2,1,"snow_block",0],[2,2,7,"snow_block",0],[3,2,7,"snow_block",0],[4,2,0,"snow_block",0],[4,2,1,"snow_block",0],[4,2,7,"snow_block",0],[5,2,2,"snow_block",0],[5,2,6,"snow_block",0],[6,2,3,"snow_block",0],[6,2,4,"snow_block",0],[6,2,5,"snow_block",0],[1,3,3,"snow_block",0],[1,3,4,"snow_block",0],[1,3,5,"snow_block",0],[2,3,2,"snow_block",0],[2,3,6,"snow_block",0],[3,3,0,"snow_block",0],[3,3,1,"snow_block",0],[3,3,2,"snow_block",0],[3,3,6,"snow_block",0],[4,3,2,"snow_block",0],[4,3,6,"snow_block",0],[5,3,3,"snow_block",0],[5,3,4,"snow_block",0],[5,3,5,"snow_block",0],[2,4,3,"snow_block",0],[2,4,4,"snow_block",0],[2,4,5,"snow_block",0],[3,4,3,"snow_block",0],[3,4,4,"snow_block",0],[3,4,5,"snow_block",0],[4,4,3,"snow_block",0],[4,4,4,"snow_block",0],[4,4,5,"snow_block",0],[3,0,5,"oak_trapdoor",1.5708],[1,1,4,"redstone_torch",0],[2,1,3,"white_carpet",0],[2,1,4,"white_carpet",0],[2,1,5,"white_carpet",0],[2,1,6,"light_gray_carpet",0],[3,1,3,"white_carpet",0],[3,1,4,"white_carpet",0],[3,1,5,"white_carpet",0],[3,1,6,"light_gray_carpet",0],[4,1,3,"white_carpet",0],[4,1,4,"white_carpet",0],[4,1,5,"white_carpet",0],[4,1,6,"light_gray_carpet",0],[1,1,3,"furnace",0],[5,1,4,"red_bed",-1.5708],[5,1,5,"red_bed",-1.5708]]},vg=JSON.parse('{"size":[9,21,28],"blocks":[[4,0,9,"spruce_planks",0],[4,0,10,"spruce_planks",0],[4,0,11,"spruce_planks",0],[4,0,12,"spruce_planks",0],[4,0,13,"spruce_planks",0],[4,0,14,"spruce_planks",0],[4,0,15,"spruce_planks",0],[4,0,16,"spruce_planks",0],[4,0,17,"spruce_planks",0],[4,0,18,"spruce_planks",0],[4,0,19,"spruce_planks",0],[4,0,20,"spruce_planks",0],[4,0,25,"spruce_planks",0],[4,0,26,"spruce_planks",0],[3,1,9,"spruce_planks",0],[3,1,10,"spruce_planks",0],[3,1,11,"spruce_planks",0],[3,1,12,"spruce_planks",0],[3,1,13,"spruce_planks",0],[3,1,14,"spruce_planks",0],[3,1,15,"spruce_planks",0],[3,1,16,"spruce_planks",0],[3,1,17,"spruce_planks",0],[3,1,18,"spruce_planks",0],[3,1,19,"spruce_planks",0],[3,1,20,"spruce_planks",0],[4,1,7,"spruce_planks",0],[4,1,8,"oak_planks",0],[4,1,9,"spruce_planks",0],[4,1,10,"spruce_planks",0],[4,1,11,"oak_planks",0],[4,1,12,"spruce_planks",0],[4,1,13,"spruce_planks",0],[4,1,14,"spruce_planks",0],[4,1,15,"spruce_planks",0],[4,1,16,"oak_planks",0],[4,1,17,"spruce_planks",0],[4,1,18,"spruce_planks",0],[4,1,19,"spruce_planks",0],[4,1,20,"oak_planks",0],[4,1,21,"oak_planks",0],[4,1,22,"spruce_planks",0],[4,1,23,"spruce_planks",0],[4,1,25,"spruce_planks",0],[4,1,26,"spruce_planks",0],[5,1,9,"spruce_planks",0],[5,1,10,"spruce_planks",0],[5,1,11,"spruce_planks",0],[5,1,12,"spruce_planks",0],[5,1,13,"spruce_planks",0],[5,1,14,"spruce_planks",0],[5,1,15,"spruce_planks",0],[5,1,16,"spruce_planks",0],[5,1,17,"spruce_planks",0],[5,1,18,"spruce_planks",0],[5,1,19,"spruce_planks",0],[5,1,20,"spruce_planks",0],[2,2,9,"oak_planks",0],[2,2,10,"oak_planks",0],[2,2,11,"oak_planks",0],[2,2,13,"oak_planks",0],[2,2,14,"oak_planks",0],[2,2,16,"oak_planks",0],[2,2,17,"oak_planks",0],[2,2,19,"oak_planks",0],[2,2,20,"oak_planks",0],[3,2,8,"oak_planks",0],[3,2,20,"oak_planks",0],[3,2,21,"oak_planks",0],[3,2,22,"oak_planks",0],[3,2,23,"oak_planks",0],[4,2,6,"spruce_planks",0],[4,2,7,"oak_planks",0],[4,2,8,"oak_planks",0],[4,2,11,"oak_log",0],[4,2,16,"oak_log",0],[4,2,20,"oak_planks",0],[4,2,21,"oak_planks",0],[4,2,22,"oak_planks",0],[4,2,23,"oak_planks",0],[4,2,24,"spruce_planks",0],[4,2,26,"spruce_planks",0],[5,2,8,"oak_planks",0],[5,2,16,"oak_planks",0],[5,2,20,"oak_planks",0],[5,2,21,"oak_planks",0],[5,2,22,"oak_planks",0],[5,2,23,"oak_planks",0],[6,2,9,"oak_planks",0],[6,2,10,"oak_planks",0],[6,2,11,"oak_planks",0],[6,2,13,"oak_planks",0],[6,2,14,"oak_planks",0],[6,2,16,"oak_planks",0],[6,2,17,"oak_planks",0],[6,2,19,"oak_planks",0],[6,2,20,"oak_planks",0],[1,3,9,"oak_planks",0],[1,3,10,"oak_planks",0],[1,3,11,"oak_planks",0],[1,3,13,"oak_planks",0],[1,3,14,"oak_planks",0],[1,3,16,"oak_planks",0],[1,3,17,"oak_planks",0],[1,3,19,"oak_planks",0],[1,3,20,"oak_planks",0],[2,3,8,"oak_planks",0],[2,3,9,"oak_planks",0],[2,3,10,"oak_planks",0],[2,3,11,"oak_planks",0],[2,3,13,"oak_planks",0],[2,3,14,"oak_planks",0],[2,3,16,"oak_planks",0],[2,3,17,"oak_planks",0],[2,3,19,"oak_planks",0],[2,3,20,"oak_planks",0],[2,3,21,"spruce_planks",0],[2,3,22,"spruce_planks",0],[2,3,23,"spruce_planks",0],[2,3,24,"spruce_planks",0],[3,3,7,"oak_planks",0],[3,3,20,"spruce_planks",0],[3,3,21,"spruce_planks",0],[3,3,22,"spruce_planks",0],[3,3,23,"spruce_planks",0],[3,3,24,"spruce_planks",0],[4,3,5,"oak_planks",0],[4,3,6,"oak_planks",0],[4,3,7,"oak_planks",0],[4,3,11,"oak_log",0],[4,3,16,"oak_log",0],[4,3,20,"spruce_planks",0],[4,3,21,"spruce_planks",0],[4,3,22,"spruce_planks",0],[4,3,23,"spruce_planks",0],[4,3,24,"spruce_planks",0],[5,3,7,"oak_planks",0],[5,3,16,"oak_planks",0],[5,3,20,"spruce_planks",0],[5,3,21,"spruce_planks",0],[5,3,22,"spruce_planks",0],[5,3,23,"spruce_planks",0],[5,3,24,"spruce_planks",0],[6,3,8,"oak_planks",0],[6,3,9,"oak_planks",0],[6,3,10,"oak_planks",0],[6,3,11,"oak_planks",0],[6,3,13,"oak_planks",0],[6,3,14,"oak_planks",0],[6,3,16,"oak_planks",0],[6,3,17,"oak_planks",0],[6,3,19,"oak_planks",0],[6,3,20,"oak_planks",0],[6,3,21,"spruce_planks",0],[6,3,22,"spruce_planks",0],[6,3,23,"spruce_planks",0],[6,3,24,"spruce_planks",0],[7,3,9,"oak_planks",0],[7,3,10,"oak_planks",0],[7,3,11,"oak_planks",0],[7,3,13,"oak_planks",0],[7,3,14,"oak_planks",0],[7,3,16,"oak_planks",0],[7,3,17,"oak_planks",0],[7,3,19,"oak_planks",0],[7,3,20,"oak_planks",0],[1,4,8,"oak_planks",0],[1,4,17,"spruce_planks",0],[1,4,18,"spruce_planks",0],[1,4,19,"oak_planks",0],[1,4,20,"oak_planks",0],[1,4,21,"oak_planks",0],[1,4,22,"oak_planks",0],[1,4,23,"oak_planks",0],[1,4,24,"oak_planks",0],[2,4,7,"oak_planks",0],[2,4,8,"oak_planks",0],[2,4,19,"oak_planks",0],[2,4,25,"oak_planks",0],[3,4,5,"oak_planks",0],[3,4,6,"oak_planks",0],[3,4,7,"oak_planks",0],[3,4,8,"spruce_planks",0],[3,4,19,"oak_planks",0],[3,4,25,"oak_planks",0],[4,4,4,"spruce_planks",0],[4,4,5,"oak_planks",0],[4,4,6,"oak_planks",0],[4,4,7,"oak_log",0],[4,4,8,"spruce_planks",0],[4,4,11,"oak_log",0],[4,4,16,"oak_log",0],[4,4,25,"oak_planks",0],[5,4,5,"oak_planks",0],[5,4,6,"oak_planks",0],[5,4,7,"oak_planks",0],[5,4,8,"spruce_planks",0],[5,4,19,"oak_planks",0],[5,4,25,"oak_planks",0],[6,4,7,"oak_planks",0],[6,4,8,"oak_planks",0],[6,4,19,"oak_planks",0],[6,4,25,"oak_planks",0],[7,4,8,"oak_planks",0],[7,4,17,"spruce_planks",0],[7,4,18,"spruce_planks",0],[7,4,19,"oak_planks",0],[7,4,20,"oak_planks",0],[7,4,21,"oak_planks",0],[7,4,22,"oak_planks",0],[7,4,23,"oak_planks",0],[7,4,24,"oak_planks",0],[0,5,9,"oak_planks",0],[0,5,10,"oak_planks",0],[0,5,18,"oak_planks",0],[0,5,19,"oak_planks",0],[0,5,20,"oak_planks",0],[1,5,7,"oak_planks",0],[1,5,8,"oak_planks",0],[1,5,19,"oak_planks",0],[1,5,20,"oak_planks",0],[1,5,21,"oak_planks",0],[1,5,23,"oak_planks",0],[1,5,24,"oak_planks",0],[2,5,5,"oak_planks",0],[2,5,6,"spruce_planks",0],[2,5,7,"oak_planks",0],[2,5,19,"oak_planks",0],[2,5,25,"oak_planks",0],[3,5,4,"oak_planks",0],[3,5,5,"spruce_planks",0],[3,5,6,"spruce_planks",0],[3,5,19,"oak_planks",0],[4,5,3,"spruce_planks",0],[4,5,4,"oak_planks",0],[4,5,5,"spruce_planks",0],[4,5,6,"spruce_planks",0],[4,5,7,"oak_log",0],[4,5,11,"oak_log",0],[4,5,16,"oak_log",0],[4,5,26,"oak_planks",0],[5,5,4,"oak_planks",0],[5,5,5,"spruce_planks",0],[5,5,6,"spruce_planks",0],[5,5,19,"oak_planks",0],[6,5,5,"oak_planks",0],[6,5,6,"spruce_planks",0],[6,5,7,"oak_planks",0],[6,5,19,"oak_planks",0],[6,5,25,"oak_planks",0],[7,5,7,"oak_planks",0],[7,5,8,"oak_planks",0],[7,5,19,"oak_planks",0],[7,5,20,"oak_planks",0],[7,5,21,"oak_planks",0],[7,5,23,"oak_planks",0],[7,5,24,"oak_planks",0],[8,5,9,"oak_planks",0],[8,5,10,"oak_planks",0],[8,5,18,"oak_planks",0],[8,5,19,"oak_planks",0],[8,5,20,"oak_planks",0],[0,6,8,"oak_planks",0],[0,6,19,"oak_planks",0],[0,6,20,"oak_planks",0],[0,6,21,"oak_planks",0],[0,6,23,"oak_planks",0],[1,6,6,"oak_planks",0],[1,6,7,"oak_planks",0],[1,6,20,"spruce_planks",0],[1,6,24,"oak_planks",0],[1,6,25,"oak_planks",0],[2,6,5,"oak_planks",0],[2,6,19,"oak_planks",0],[3,6,4,"oak_planks",0],[3,6,19,"oak_planks",0],[3,6,26,"oak_planks",0],[4,6,3,"spruce_planks",0],[4,6,7,"oak_log",0],[4,6,11,"oak_log",0],[4,6,16,"oak_log",0],[5,6,4,"oak_planks",0],[5,6,19,"oak_planks",0],[5,6,26,"oak_planks",0],[6,6,5,"oak_planks",0],[6,6,19,"oak_planks",0],[7,6,6,"oak_planks",0],[7,6,7,"oak_planks",0],[7,6,20,"spruce_planks",0],[7,6,24,"oak_planks",0],[7,6,25,"oak_planks",0],[8,6,8,"oak_planks",0],[8,6,19,"oak_planks",0],[8,6,20,"oak_planks",0],[8,6,21,"oak_planks",0],[8,6,23,"oak_planks",0],[0,7,21,"oak_planks",0],[0,7,22,"oak_planks",0],[0,7,23,"oak_planks",0],[1,7,21,"spruce_planks",0],[1,7,23,"spruce_planks",0],[1,7,24,"oak_planks",0],[1,7,25,"oak_planks",0],[2,7,25,"spruce_planks",0],[2,7,26,"oak_planks",0],[3,7,21,"spruce_planks",0],[3,7,26,"oak_planks",0],[4,7,2,"spruce_planks",0],[4,7,7,"oak_log",0],[4,7,11,"oak_log",0],[4,7,16,"oak_log",0],[4,7,21,"spruce_planks",0],[4,7,27,"oak_planks",0],[5,7,21,"spruce_planks",0],[5,7,26,"oak_planks",0],[6,7,25,"spruce_planks",0],[6,7,26,"oak_planks",0],[7,7,21,"spruce_planks",0],[7,7,23,"spruce_planks",0],[7,7,24,"oak_planks",0],[7,7,25,"oak_planks",0],[8,7,21,"oak_planks",0],[8,7,22,"oak_planks",0],[8,7,23,"oak_planks",0],[1,8,21,"oak_planks",0],[1,8,25,"oak_planks",0],[2,8,26,"oak_planks",0],[3,8,21,"oak_planks",0],[4,8,7,"oak_log",0],[4,8,11,"oak_log",0],[4,8,16,"oak_log",0],[4,8,21,"oak_planks",0],[5,8,21,"oak_planks",0],[6,8,26,"oak_planks",0],[7,8,21,"oak_planks",0],[7,8,25,"oak_planks",0],[4,9,7,"oak_log",0],[4,9,11,"oak_log",0],[4,9,16,"oak_log",0],[1,10,6,"oak_log",0],[2,10,6,"oak_log",0],[3,10,6,"oak_log",0],[4,10,6,"oak_log",0],[4,10,7,"oak_log",0],[4,10,11,"oak_log",0],[4,10,16,"oak_log",0],[5,10,6,"oak_log",0],[6,10,6,"oak_log",0],[4,11,7,"oak_log",0],[4,11,11,"oak_log",0],[4,11,16,"oak_log",0],[4,12,7,"oak_log",0],[4,12,11,"oak_log",0],[4,12,16,"oak_log",0],[4,13,7,"oak_log",0],[4,13,11,"oak_log",0],[4,13,16,"oak_log",0],[1,14,15,"oak_log",0],[2,14,15,"oak_log",0],[3,14,6,"oak_log",0],[3,14,15,"oak_log",0],[4,14,6,"oak_log",0],[4,14,7,"oak_log",0],[4,14,11,"oak_log",0],[4,14,15,"oak_log",0],[4,14,16,"oak_log",0],[5,14,6,"oak_log",0],[5,14,15,"oak_log",0],[6,14,6,"oak_log",0],[6,14,15,"oak_log",0],[7,14,6,"oak_log",0],[7,14,15,"oak_log",0],[4,15,7,"oak_log",0],[4,15,11,"oak_log",0],[4,15,16,"oak_log",0],[4,16,7,"oak_log",0],[4,16,11,"oak_log",0],[4,16,16,"oak_log",0],[4,17,7,"oak_log",0],[4,17,11,"oak_log",0],[4,17,16,"oak_log",0],[4,18,11,"oak_log",0],[4,19,11,"oak_log",0],[4,20,11,"oak_log",0],[4,0,8,"spruce_stairs",-1.5708],[4,0,21,"spruce_stairs",1.5708],[2,1,9,"oak_stairs",0],[2,1,10,"oak_stairs",0],[2,1,11,"oak_stairs",0],[2,1,12,"oak_stairs",0],[2,1,13,"oak_stairs",0],[2,1,14,"oak_stairs",0],[2,1,15,"oak_stairs",0],[2,1,16,"oak_stairs",0],[2,1,17,"oak_stairs",0],[2,1,18,"oak_stairs",0],[2,1,19,"oak_stairs",0],[2,1,20,"oak_stairs",0],[3,1,8,"oak_stairs",0],[3,1,21,"oak_stairs",0],[3,1,22,"oak_stairs",0],[3,1,23,"oak_stairs",0],[4,1,6,"spruce_stairs",-1.5708],[4,1,24,"spruce_stairs",1.5708],[5,1,8,"oak_stairs",3.14159],[5,1,21,"oak_stairs",3.14159],[5,1,22,"oak_stairs",3.14159],[5,1,23,"oak_stairs",3.14159],[6,1,9,"oak_stairs",3.14159],[6,1,10,"oak_stairs",3.14159],[6,1,11,"oak_stairs",3.14159],[6,1,12,"oak_stairs",3.14159],[6,1,13,"oak_stairs",3.14159],[6,1,14,"oak_stairs",3.14159],[6,1,15,"oak_stairs",3.14159],[6,1,16,"oak_stairs",3.14159],[6,1,17,"oak_stairs",3.14159],[6,1,18,"oak_stairs",3.14159],[6,1,19,"oak_stairs",3.14159],[6,1,20,"oak_stairs",3.14159],[1,2,9,"oak_stairs",0],[1,2,10,"oak_stairs",0],[1,2,11,"oak_stairs",0],[1,2,12,"oak_stairs",0],[1,2,13,"oak_stairs",0],[1,2,14,"oak_stairs",0],[1,2,15,"oak_stairs",0],[1,2,16,"oak_stairs",0],[1,2,17,"oak_stairs",0],[1,2,18,"oak_stairs",0],[1,2,19,"oak_stairs",0],[1,2,20,"oak_stairs",0],[2,2,8,"oak_stairs",0],[2,2,12,"oak_stairs",3.14159],[2,2,15,"oak_stairs",3.14159],[2,2,18,"oak_stairs",3.14159],[2,2,21,"oak_stairs",0],[2,2,22,"oak_stairs",0],[2,2,23,"oak_stairs",1.5708],[2,2,24,"oak_slab",0],[3,2,7,"oak_stairs",0],[3,2,16,"oak_planks",-1.5708],[3,2,19,"oak_stairs",-1.5708],[3,2,24,"oak_stairs",1.5708],[4,2,5,"spruce_stairs",-1.5708],[4,2,19,"oak_stairs",-1.5708],[4,2,25,"spruce_fence",0],[5,2,7,"oak_stairs",3.14159],[5,2,19,"oak_stairs",-1.5708],[5,2,24,"oak_stairs",1.5708],[6,2,8,"oak_stairs",3.14159],[6,2,12,"oak_stairs",0],[6,2,15,"oak_stairs",0],[6,2,18,"oak_stairs",0],[6,2,21,"oak_stairs",3.14159],[6,2,22,"oak_stairs",3.14159],[6,2,23,"oak_stairs",1.5708],[6,2,24,"oak_slab",0],[7,2,9,"oak_stairs",3.14159],[7,2,10,"oak_stairs",3.14159],[7,2,11,"oak_stairs",3.14159],[7,2,12,"oak_stairs",3.14159],[7,2,13,"oak_stairs",3.14159],[7,2,14,"oak_stairs",3.14159],[7,2,15,"oak_stairs",3.14159],[7,2,16,"oak_stairs",3.14159],[7,2,17,"oak_stairs",3.14159],[7,2,18,"oak_stairs",3.14159],[7,2,19,"oak_stairs",3.14159],[7,2,20,"oak_stairs",3.14159],[1,3,8,"oak_stairs",0],[1,3,21,"oak_stairs",0],[1,3,22,"oak_stairs",0],[1,3,23,"oak_stairs",0],[1,3,24,"oak_stairs",0],[2,3,7,"oak_stairs",0],[2,3,25,"oak_stairs",1.5708],[3,3,5,"oak_stairs",0],[3,3,6,"oak_stairs",0],[3,3,8,"oak_stairs",1.5708],[3,3,16,"oak_planks",0],[3,3,19,"oak_stairs",-1.5708],[3,3,25,"oak_stairs",1.5708],[4,3,4,"spruce_stairs",-1.5708],[4,3,8,"oak_stairs",1.5708],[4,3,19,"oak_stairs",-1.5708],[4,3,25,"spruce_fence",0],[5,3,5,"oak_stairs",3.14159],[5,3,6,"oak_stairs",3.14159],[5,3,8,"oak_stairs",1.5708],[5,3,19,"oak_stairs",-1.5708],[5,3,25,"oak_stairs",1.5708],[6,3,7,"oak_stairs",3.14159],[6,3,25,"oak_stairs",1.5708],[7,3,8,"oak_stairs",3.14159],[7,3,21,"oak_stairs",3.14159],[7,3,22,"oak_stairs",3.14159],[7,3,23,"oak_stairs",3.14159],[7,3,24,"oak_stairs",3.14159],[0,4,9,"oak_stairs",0],[0,4,10,"oak_stairs",0],[0,4,11,"oak_stairs",0],[0,4,12,"oak_stairs",0],[0,4,13,"oak_stairs",0],[0,4,14,"oak_stairs",0],[0,4,15,"oak_stairs",0],[0,4,16,"oak_stairs",0],[0,4,17,"oak_stairs",0],[0,4,18,"oak_stairs",0],[0,4,19,"oak_stairs",0],[0,4,20,"oak_stairs",0],[1,4,7,"oak_stairs",0],[1,4,9,"spruce_slab",0],[1,4,10,"spruce_slab",0],[1,4,11,"spruce_slab",0],[1,4,12,"spruce_slab",0],[1,4,13,"spruce_slab",0],[1,4,14,"spruce_slab",0],[1,4,15,"spruce_slab",0],[1,4,16,"spruce_slab",0],[2,4,5,"oak_stairs",0],[2,4,6,"oak_stairs",0],[2,4,9,"spruce_slab",0],[2,4,10,"spruce_slab",0],[2,4,11,"spruce_slab",0],[2,4,12,"spruce_slab",0],[2,4,13,"spruce_slab",0],[2,4,14,"spruce_slab",0],[2,4,15,"spruce_slab",0],[2,4,16,"spruce_slab",0],[2,4,17,"spruce_slab",0],[2,4,18,"spruce_slab",0],[2,4,20,"oak_stairs",3.14159],[3,4,4,"oak_stairs",-1.5708],[3,4,9,"oak_trapdoor",0],[3,4,10,"oak_trapdoor",0],[3,4,11,"spruce_slab",0],[3,4,12,"oak_trapdoor",-1.5708],[3,4,13,"oak_trapdoor",0],[3,4,14,"oak_trapdoor",0],[3,4,15,"oak_trapdoor",1.5708],[3,4,16,"spruce_slab",0],[3,4,17,"spruce_slab",0],[3,4,18,"spruce_slab",0],[3,4,23,"oak_stairs",3.14159],[4,4,3,"spruce_stairs",-1.5708],[4,4,9,"oak_trapdoor",-1.5708],[4,4,10,"oak_trapdoor",1.5708],[4,4,12,"oak_trapdoor",-1.5708],[4,4,15,"oak_trapdoor",1.5708],[4,4,17,"spruce_slab",0],[4,4,18,"spruce_slab",0],[4,4,19,"spruce_slab",0],[4,4,23,"oak_slab",0],[4,4,26,"oak_stairs",1.5708],[5,4,4,"oak_stairs",-1.5708],[5,4,9,"oak_trapdoor",3.14159],[5,4,10,"oak_trapdoor",3.14159],[5,4,11,"spruce_slab",0],[5,4,12,"oak_trapdoor",-1.5708],[5,4,13,"oak_trapdoor",3.14159],[5,4,14,"oak_trapdoor",3.14159],[5,4,15,"oak_trapdoor",1.5708],[5,4,16,"spruce_slab",0],[5,4,17,"spruce_slab",0],[5,4,18,"spruce_slab",0],[5,4,23,"oak_stairs",0],[6,4,5,"oak_stairs",3.14159],[6,4,6,"oak_stairs",3.14159],[6,4,9,"spruce_slab",0],[6,4,10,"spruce_slab",0],[6,4,11,"spruce_slab",0],[6,4,12,"spruce_slab",0],[6,4,13,"spruce_slab",0],[6,4,14,"spruce_slab",0],[6,4,15,"spruce_slab",0],[6,4,16,"spruce_slab",0],[6,4,17,"spruce_slab",0],[6,4,18,"spruce_slab",0],[6,4,20,"oak_stairs",0],[7,4,7,"oak_stairs",3.14159],[7,4,9,"spruce_slab",0],[7,4,10,"spruce_slab",0],[7,4,11,"spruce_slab",0],[7,4,12,"spruce_slab",0],[7,4,13,"spruce_slab",0],[7,4,14,"spruce_slab",0],[7,4,15,"spruce_slab",0],[7,4,16,"spruce_slab",0],[8,4,9,"oak_stairs",3.14159],[8,4,10,"oak_stairs",3.14159],[8,4,11,"oak_stairs",3.14159],[8,4,12,"oak_stairs",3.14159],[8,4,13,"oak_stairs",3.14159],[8,4,14,"oak_stairs",3.14159],[8,4,15,"oak_stairs",3.14159],[8,4,16,"oak_stairs",3.14159],[8,4,17,"oak_stairs",3.14159],[8,4,18,"oak_stairs",3.14159],[8,4,19,"oak_stairs",3.14159],[8,4,20,"oak_stairs",3.14159],[0,5,8,"oak_stairs",-1.5708],[0,5,11,"spruce_fence",0],[0,5,12,"spruce_fence",0],[0,5,13,"spruce_fence",0],[0,5,15,"spruce_fence",0],[0,5,16,"spruce_fence",0],[0,5,17,"spruce_fence",0],[0,5,21,"oak_stairs",0],[0,5,22,"oak_stairs",0],[0,5,23,"oak_stairs",1.5708],[1,5,6,"oak_stairs",0],[1,5,18,"spruce_stairs",-1.5708],[1,5,22,"oak_stairs",3.14159],[1,5,25,"oak_stairs",1.5708],[3,5,3,"oak_stairs",-1.5708],[3,5,7,"spruce_stairs",1.5708],[3,5,25,"oak_stairs",-1.5708],[3,5,26,"oak_stairs",1.5708],[4,5,25,"oak_stairs",-1.5708],[5,5,3,"oak_stairs",-1.5708],[5,5,7,"spruce_stairs",1.5708],[5,5,25,"oak_stairs",-1.5708],[5,5,26,"oak_stairs",1.5708],[7,5,6,"oak_stairs",3.14159],[7,5,18,"spruce_stairs",-1.5708],[7,5,22,"oak_stairs",0],[7,5,25,"oak_stairs",1.5708],[8,5,8,"oak_stairs",-1.5708],[8,5,11,"spruce_fence",0],[8,5,12,"spruce_fence",0],[8,5,13,"spruce_fence",0],[8,5,15,"spruce_fence",0],[8,5,16,"spruce_fence",0],[8,5,17,"spruce_fence",0],[8,5,21,"oak_stairs",3.14159],[8,5,22,"oak_stairs",3.14159],[8,5,23,"oak_stairs",1.5708],[0,6,9,"oak_stairs",1.5708],[0,6,18,"oak_stairs",-1.5708],[1,6,8,"oak_stairs",1.5708],[1,6,19,"spruce_stairs",-1.5708],[1,6,21,"oak_fence",0],[1,6,23,"oak_fence",0],[2,6,20,"spruce_slab",0],[2,6,25,"oak_fence",0],[2,6,26,"oak_stairs",1.5708],[3,6,2,"spruce_fence",0],[3,6,3,"oak_stairs",-1.5708],[3,6,20,"spruce_slab",0],[4,6,2,"spruce_stairs",-1.5708],[4,6,4,"spruce_stairs",1.5708],[4,6,20,"spruce_slab",0],[5,6,2,"spruce_fence",0],[5,6,3,"oak_stairs",-1.5708],[5,6,20,"spruce_slab",0],[6,6,20,"spruce_slab",0],[6,6,25,"oak_fence",0],[6,6,26,"oak_stairs",1.5708],[7,6,8,"oak_stairs",1.5708],[7,6,19,"spruce_slab",0],[7,6,21,"oak_fence",0],[7,6,23,"oak_fence",0],[8,6,9,"oak_stairs",1.5708],[8,6,18,"oak_stairs",-1.5708],[0,7,20,"oak_stairs",-1.5708],[1,7,22,"spruce_stairs",3.14159],[2,7,19,"spruce_fence",0],[2,7,21,"spruce_stairs",-1.5708],[2,7,22,"spruce_slab",0],[2,7,23,"spruce_slab",0],[2,7,24,"spruce_slab",0],[3,7,2,"spruce_fence",0],[3,7,3,"spruce_fence",0],[3,7,4,"spruce_fence",0],[3,7,19,"spruce_fence",0],[3,7,22,"spruce_slab",0],[3,7,23,"spruce_slab",0],[3,7,24,"spruce_slab",0],[3,7,25,"spruce_stairs",-1.5708],[3,7,27,"oak_stairs",1.5708],[4,7,1,"spruce_stairs",-1.5708],[4,7,3,"spruce_stairs",1.5708],[4,7,19,"oak_slab",0],[4,7,20,"oak_stairs",-1.5708],[4,7,22,"spruce_slab",0],[4,7,23,"spruce_slab",0],[4,7,24,"spruce_slab",0],[4,7,25,"spruce_slab",0],[4,7,26,"spruce_slab",0],[5,7,2,"spruce_fence",0],[5,7,3,"spruce_fence",0],[5,7,4,"spruce_fence",0],[5,7,19,"spruce_fence",0],[5,7,22,"spruce_slab",0],[5,7,23,"spruce_slab",0],[5,7,24,"spruce_slab",0],[5,7,25,"spruce_stairs",-1.5708],[5,7,27,"oak_stairs",1.5708],[6,7,19,"spruce_fence",0],[6,7,21,"spruce_stairs",-1.5708],[6,7,22,"spruce_slab",0],[6,7,23,"spruce_slab",0],[6,7,24,"spruce_slab",0],[7,7,22,"spruce_stairs",0],[8,7,20,"oak_stairs",-1.5708],[0,8,21,"oak_stairs",0],[0,8,22,"oak_stairs",0],[0,8,23,"oak_stairs",0],[1,8,23,"spruce_fence",0],[1,8,24,"spruce_fence",0],[3,8,26,"spruce_fence",0],[3,8,27,"spruce_fence",0],[4,8,0,"spruce_stairs",-1.5708],[4,8,1,"spruce_stairs",1.5708],[4,8,27,"spruce_fence",0],[5,8,26,"spruce_fence",0],[5,8,27,"spruce_fence",0],[7,8,23,"spruce_fence",0],[7,8,24,"spruce_fence",0],[8,8,21,"oak_stairs",3.14159],[8,8,22,"oak_stairs",3.14159],[8,8,23,"oak_stairs",3.14159],[4,2,9,"chest",-1.5708],[5,2,18,"chest",3.14159],[6,4,24,"chest",1.5708]]}'),xg={size:[5,5,5],blocks:[[0,0,1,"mud_bricks",0],[0,0,2,"mud_bricks",0],[0,0,3,"mud_bricks",0],[1,0,0,"mud_bricks",0],[1,0,1,"mud_bricks",0],[1,0,2,"mud_bricks",0],[1,0,3,"mud_bricks",0],[1,0,4,"mud_bricks",0],[2,0,0,"mud_bricks",0],[2,0,1,"mud_bricks",0],[2,0,2,"mud_bricks",0],[2,0,3,"mud_bricks",0],[2,0,4,"mud_bricks",0],[3,0,0,"mud_bricks",0],[3,0,1,"mud_bricks",0],[3,0,2,"mud_bricks",0],[3,0,3,"mud_bricks",0],[3,0,4,"mud_bricks",0],[4,0,1,"mud_bricks",0],[4,0,2,"mud_bricks",0],[4,0,3,"mud_bricks",0],[0,1,1,"mud_bricks",0],[0,1,2,"mud_bricks",0],[0,1,3,"mud_bricks",0],[1,1,0,"mud_bricks",0],[1,1,1,"blue_terracotta",0],[1,1,2,"gravel",0],[1,1,3,"gravel",0],[1,1,4,"mud_bricks",0],[2,1,1,"gravel",0],[2,1,3,"gravel",0],[2,1,4,"mud_bricks",0],[3,1,0,"mud_bricks",0],[3,1,1,"blue_terracotta",0],[3,1,2,"blue_terracotta",0],[3,1,3,"red_terracotta",0],[3,1,4,"mud_bricks",0],[4,1,1,"mud_bricks",0],[4,1,2,"mud_bricks",0],[4,1,3,"mud_bricks",0],[0,2,1,"mud_bricks",0],[0,2,2,"mud_bricks",0],[0,2,3,"mud_bricks",0],[1,2,0,"mud_bricks",0],[1,2,1,"gravel",0],[1,2,2,"gravel",0],[1,2,3,"gravel",0],[1,2,4,"mud_bricks",0],[2,2,0,"gravel",0],[2,2,1,"gravel",0],[2,2,2,"gravel",0],[2,2,3,"gravel",0],[2,2,4,"mud_bricks",0],[3,2,0,"mud_bricks",0],[3,2,1,"blue_terracotta",0],[3,2,2,"gravel",0],[3,2,3,"gravel",0],[3,2,4,"mud_bricks",0],[4,2,1,"mud_bricks",0],[4,2,2,"mud_bricks",0],[4,2,3,"mud_bricks",0],[0,3,1,"red_terracotta",0],[0,3,2,"red_terracotta",0],[0,3,3,"red_terracotta",0],[1,3,0,"red_terracotta",0],[1,3,1,"gravel",0],[1,3,2,"gravel",0],[1,3,3,"gravel",0],[1,3,4,"red_terracotta",0],[2,3,0,"gravel",0],[2,3,1,"gravel",0],[2,3,2,"gravel",0],[2,3,3,"gravel",0],[2,3,4,"red_terracotta",0],[3,3,0,"red_terracotta",0],[3,3,1,"gravel",0],[3,3,2,"gravel",0],[3,3,3,"gravel",0],[4,3,1,"gravel",0],[4,3,2,"gravel",0],[4,3,3,"red_terracotta",0],[1,4,0,"blue_terracotta",0],[1,4,1,"blue_terracotta",0],[1,4,2,"blue_terracotta",0],[1,4,3,"blue_terracotta",0],[2,4,0,"blue_terracotta",0],[2,4,1,"gravel",0],[2,4,2,"gravel",0],[2,4,3,"blue_terracotta",0],[3,4,0,"blue_terracotta",0],[3,4,1,"gravel",0],[3,4,2,"gravel",0],[4,4,1,"gravel",0],[4,4,2,"gravel",0],[2,1,0,"cobblestone",0]]},yg={size:[7,8,7],blocks:[[0,0,0,"birch_planks",0],[0,0,1,"birch_planks",0],[0,0,2,"birch_planks",0],[0,0,3,"birch_planks",0],[0,0,4,"birch_planks",0],[0,0,5,"birch_planks",0],[0,0,6,"birch_planks",0],[1,0,0,"birch_planks",0],[1,0,1,"birch_planks",0],[1,0,2,"birch_planks",0],[1,0,3,"birch_planks",0],[1,0,4,"birch_planks",0],[1,0,5,"birch_planks",0],[1,0,6,"birch_planks",0],[2,0,0,"birch_planks",0],[2,0,1,"birch_planks",0],[2,0,2,"birch_planks",0],[2,0,3,"birch_planks",0],[2,0,4,"birch_planks",0],[2,0,5,"birch_planks",0],[2,0,6,"birch_planks",0],[3,0,0,"birch_planks",0],[3,0,1,"birch_planks",0],[3,0,2,"birch_planks",0],[3,0,3,"birch_planks",0],[3,0,4,"birch_planks",0],[3,0,5,"birch_planks",0],[3,0,6,"birch_planks",0],[4,0,0,"birch_planks",0],[4,0,1,"birch_planks",0],[4,0,2,"birch_planks",0],[4,0,3,"birch_planks",0],[4,0,4,"birch_planks",0],[4,0,5,"birch_planks",0],[4,0,6,"birch_planks",0],[5,0,0,"birch_planks",0],[5,0,1,"birch_planks",0],[5,0,2,"birch_planks",0],[5,0,3,"birch_planks",0],[5,0,4,"birch_planks",0],[5,0,5,"birch_planks",0],[5,0,6,"birch_planks",0],[6,0,0,"birch_planks",0],[6,0,1,"birch_planks",0],[6,0,2,"birch_planks",0],[6,0,3,"birch_planks",0],[6,0,4,"birch_planks",0],[6,0,5,"birch_planks",0],[6,0,6,"birch_planks",0],[0,1,0,"cobblestone",0],[0,1,1,"cobblestone",0],[0,1,2,"cobblestone",0],[0,1,3,"cobblestone",0],[0,1,4,"cobblestone",0],[0,1,5,"cobblestone",0],[0,1,6,"cobblestone",0],[1,1,0,"cobblestone",0],[1,1,1,"cobblestone",0],[1,1,2,"cobblestone",0],[1,1,3,"cobblestone",0],[1,1,4,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"cobblestone",0],[2,1,0,"cobblestone",0],[2,1,6,"cobblestone",0],[3,1,0,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,0,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,0,"cobblestone",0],[5,1,6,"cobblestone",0],[6,1,0,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,5,"cobblestone",0],[6,1,6,"cobblestone",0],[0,2,0,"cobblestone",0],[0,2,6,"cobblestone",0],[2,2,0,"cobblestone",0],[2,2,6,"cobblestone",0],[3,2,0,"cobblestone",0],[3,2,6,"cobblestone",0],[4,2,0,"cobblestone",0],[4,2,6,"cobblestone",0],[5,2,0,"cobblestone",0],[5,2,6,"cobblestone",0],[6,2,0,"cobblestone",0],[6,2,1,"cobblestone",0],[6,2,5,"cobblestone",0],[6,2,6,"cobblestone",0],[0,2,1,"cobblestone_stairs",3.14159],[0,2,2,"cobblestone_stairs",3.14159],[0,2,3,"cobblestone_stairs",3.14159],[0,2,4,"cobblestone_stairs",3.14159],[0,2,5,"cobblestone_stairs",3.14159],[1,2,0,"cobblestone_stairs",1.5708],[1,2,6,"cobblestone_stairs",-1.5708],[0,3,0,"cobblestone",0],[0,3,6,"cobblestone",0],[0,4,0,"cobblestone",0],[0,4,6,"cobblestone",0],[0,5,0,"cobblestone",0],[0,5,6,"cobblestone",0],[0,6,0,"cobblestone",0],[0,6,6,"cobblestone",0],[0,7,0,"cobblestone",0],[0,7,6,"cobblestone",0]]},Mg={size:[7,7,7],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"oak_planks",0],[2,0,3,"oak_planks",0],[2,0,4,"oak_planks",0],[2,0,5,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"oak_planks",0],[3,0,4,"oak_planks",0],[3,0,5,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"oak_planks",0],[4,0,3,"oak_planks",0],[4,0,4,"oak_planks",0],[4,0,5,"cobblestone",0],[5,0,1,"oak_log",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,4,"cobblestone",0],[1,1,5,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,5,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,5,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,5,"cobblestone",0],[5,1,1,"oak_log",0],[5,1,2,"cobblestone",0],[5,1,3,"cobblestone",0],[5,1,4,"cobblestone",0],[5,1,5,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"cobblestone",0],[1,2,4,"cobblestone",0],[1,2,5,"oak_log",0],[2,2,1,"cobblestone",0],[2,2,5,"cobblestone",0],[4,2,1,"cobblestone",0],[4,2,5,"cobblestone",0],[5,2,1,"oak_log",0],[5,2,2,"cobblestone",0],[5,2,4,"cobblestone",0],[5,2,5,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"oak_log",0],[2,3,1,"cobblestone",0],[2,3,5,"cobblestone",0],[3,3,1,"cobblestone",0],[3,3,5,"cobblestone",0],[4,3,1,"cobblestone",0],[4,3,5,"cobblestone",0],[5,3,1,"oak_log",0],[5,3,2,"cobblestone",0],[5,3,3,"cobblestone",0],[5,3,4,"cobblestone",0],[5,3,5,"oak_log",0],[1,4,1,"oak_planks",0],[1,4,2,"oak_planks",0],[1,4,3,"oak_planks",0],[1,4,4,"oak_planks",0],[1,4,5,"oak_planks",0],[2,4,1,"oak_planks",0],[2,4,5,"oak_planks",0],[3,4,1,"oak_planks",0],[3,4,5,"oak_planks",0],[4,4,1,"oak_planks",0],[4,4,5,"oak_planks",0],[5,4,1,"oak_planks",0],[5,4,2,"oak_planks",0],[5,4,3,"oak_planks",0],[5,4,4,"oak_planks",0],[5,4,5,"oak_planks",0],[2,5,2,"oak_planks",0],[2,5,3,"oak_planks",0],[2,5,4,"oak_planks",0],[3,5,2,"oak_planks",0],[3,5,4,"oak_planks",0],[4,5,2,"oak_planks",0],[4,5,3,"oak_planks",0],[4,5,4,"oak_planks",0],[3,6,3,"oak_planks",0],[1,1,3,"oak_planks",0],[4,1,4,"oak_stairs",0],[0,2,2,"torch",3.14159],[0,2,4,"torch",3.14159],[1,2,3,"oak_planks",0],[3,2,1,"glass",0],[3,2,5,"glass",0],[5,2,3,"glass",0],[4,3,3,"torch",3.14159],[0,4,0,"oak_stairs",-1.5708],[0,4,1,"oak_stairs",0],[0,4,2,"oak_stairs",0],[0,4,3,"oak_stairs",0],[0,4,4,"oak_stairs",0],[0,4,5,"oak_stairs",0],[0,4,6,"oak_stairs",0],[1,4,0,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,0,"oak_stairs",-1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,0,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,0,"oak_stairs",-1.5708],[4,4,6,"oak_stairs",1.5708],[5,4,0,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,0,"oak_stairs",3.14159],[6,4,1,"oak_stairs",3.14159],[6,4,2,"oak_stairs",3.14159],[6,4,3,"oak_stairs",3.14159],[6,4,4,"oak_stairs",3.14159],[6,4,5,"oak_stairs",3.14159],[6,4,6,"oak_stairs",1.5708],[1,5,1,"oak_stairs",0],[1,5,2,"oak_stairs",0],[1,5,3,"oak_stairs",0],[1,5,4,"oak_stairs",0],[1,5,5,"oak_stairs",0],[2,5,1,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,1,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,1,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,1,"oak_stairs",-1.5708],[5,5,2,"oak_stairs",3.14159],[5,5,3,"oak_stairs",3.14159],[5,5,4,"oak_stairs",3.14159],[5,5,5,"oak_stairs",1.5708],[2,6,2,"oak_stairs",0],[2,6,3,"oak_stairs",0],[2,6,4,"oak_stairs",0],[3,6,2,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,2,"oak_stairs",-1.5708],[4,6,3,"oak_stairs",3.14159],[4,6,4,"oak_stairs",3.14159],[0,0,3,"cobblestone",0],[3,0,3,"cobblestone",0],[3,1,2,"red_bed",0],[4,1,2,"red_bed",0]]},Sg=JSON.parse('{"size":[11,10,17],"blocks":[[1,0,7,"cobblestone",0],[1,0,8,"cobblestone",0],[1,0,9,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[2,0,10,"cobblestone",0],[3,0,1,"oak_log",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"oak_log",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[3,0,8,"cobblestone",0],[3,0,9,"cobblestone",0],[3,0,10,"cobblestone",0],[3,0,11,"oak_log",0],[3,0,12,"cobblestone",0],[3,0,13,"cobblestone",0],[3,0,14,"cobblestone",0],[3,0,15,"oak_log",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[4,0,8,"cobblestone",0],[4,0,9,"cobblestone",0],[4,0,10,"cobblestone",0],[4,0,11,"cobblestone",0],[4,0,12,"cobblestone",0],[4,0,13,"cobblestone",0],[4,0,14,"cobblestone",0],[4,0,15,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[5,0,8,"cobblestone",0],[5,0,9,"cobblestone",0],[5,0,10,"cobblestone",0],[5,0,11,"cobblestone",0],[5,0,12,"cobblestone",0],[5,0,13,"cobblestone",0],[5,0,14,"cobblestone",0],[5,0,15,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[6,0,7,"cobblestone",0],[6,0,8,"cobblestone",0],[6,0,9,"cobblestone",0],[6,0,10,"cobblestone",0],[6,0,11,"cobblestone",0],[6,0,12,"cobblestone",0],[6,0,13,"cobblestone",0],[6,0,14,"cobblestone",0],[6,0,15,"cobblestone",0],[7,0,1,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,8,"cobblestone",0],[7,0,9,"cobblestone",0],[7,0,10,"cobblestone",0],[7,0,11,"cobblestone",0],[7,0,12,"cobblestone",0],[7,0,13,"cobblestone",0],[7,0,14,"cobblestone",0],[7,0,15,"cobblestone",0],[8,0,1,"cobblestone",0],[8,0,2,"cobblestone",0],[8,0,3,"cobblestone",0],[8,0,4,"cobblestone",0],[8,0,5,"cobblestone",0],[8,0,6,"cobblestone",0],[8,0,7,"cobblestone",0],[8,0,8,"cobblestone",0],[8,0,9,"cobblestone",0],[8,0,10,"cobblestone",0],[8,0,11,"cobblestone",0],[8,0,12,"cobblestone",0],[8,0,13,"cobblestone",0],[8,0,14,"cobblestone",0],[8,0,15,"cobblestone",0],[9,0,1,"oak_log",0],[9,0,2,"cobblestone",0],[9,0,3,"cobblestone",0],[9,0,4,"cobblestone",0],[9,0,5,"cobblestone",0],[9,0,6,"cobblestone",0],[9,0,7,"cobblestone",0],[9,0,8,"cobblestone",0],[9,0,9,"cobblestone",0],[9,0,10,"cobblestone",0],[9,0,11,"cobblestone",0],[9,0,12,"cobblestone",0],[9,0,13,"cobblestone",0],[9,0,14,"cobblestone",0],[9,0,15,"oak_log",0],[1,1,7,"cobblestone",0],[1,1,9,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,10,"cobblestone",0],[3,1,1,"oak_log",0],[3,1,2,"oak_planks",0],[3,1,3,"oak_planks",0],[3,1,4,"oak_planks",0],[3,1,5,"oak_log",0],[3,1,11,"oak_log",0],[3,1,12,"oak_planks",0],[3,1,13,"oak_planks",0],[3,1,14,"oak_planks",0],[3,1,15,"oak_log",0],[4,1,1,"oak_planks",0],[4,1,15,"oak_planks",0],[5,1,1,"oak_planks",0],[5,1,4,"cobblestone",0],[5,1,5,"cobblestone",0],[5,1,11,"cobblestone",0],[5,1,12,"cobblestone",0],[5,1,15,"oak_planks",0],[6,1,1,"oak_planks",0],[6,1,15,"oak_planks",0],[7,1,1,"oak_planks",0],[7,1,15,"oak_planks",0],[8,1,1,"oak_planks",0],[8,1,15,"oak_planks",0],[9,1,1,"oak_log",0],[9,1,2,"oak_planks",0],[9,1,3,"oak_planks",0],[9,1,4,"oak_planks",0],[9,1,5,"oak_planks",0],[9,1,6,"oak_planks",0],[9,1,7,"oak_planks",0],[9,1,8,"oak_planks",0],[9,1,9,"oak_planks",0],[9,1,10,"oak_planks",0],[9,1,11,"oak_planks",0],[9,1,12,"oak_planks",0],[9,1,13,"oak_planks",0],[9,1,14,"oak_planks",0],[9,1,15,"oak_log",0],[1,2,7,"cobblestone",0],[1,2,9,"cobblestone",0],[2,2,6,"cobblestone",0],[2,2,10,"cobblestone",0],[3,2,1,"oak_log",0],[3,2,2,"oak_planks",0],[3,2,4,"oak_planks",0],[3,2,5,"oak_log",0],[3,2,11,"oak_log",0],[3,2,12,"oak_planks",0],[3,2,14,"oak_planks",0],[3,2,15,"oak_log",0],[4,2,1,"oak_planks",0],[4,2,15,"oak_planks",0],[5,2,1,"oak_log",0],[5,2,5,"cobblestone",0],[5,2,11,"cobblestone",0],[5,2,15,"oak_log",0],[7,2,1,"oak_log",0],[7,2,15,"oak_log",0],[8,2,1,"oak_planks",0],[8,2,15,"oak_planks",0],[9,2,1,"oak_log",0],[9,2,2,"oak_planks",0],[9,2,3,"oak_log",0],[9,2,5,"oak_log",0],[9,2,6,"oak_planks",0],[9,2,7,"oak_log",0],[9,2,9,"oak_log",0],[9,2,10,"oak_planks",0],[9,2,11,"oak_log",0],[9,2,13,"oak_log",0],[9,2,14,"oak_planks",0],[9,2,15,"oak_log",0],[1,3,7,"cobblestone",0],[1,3,8,"cobblestone",0],[1,3,9,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"oak_planks",0],[2,3,8,"oak_planks",0],[2,3,9,"oak_planks",0],[2,3,10,"cobblestone",0],[3,3,1,"oak_log",0],[3,3,2,"oak_planks",0],[3,3,3,"oak_planks",0],[3,3,4,"oak_planks",0],[3,3,5,"oak_log",0],[3,3,6,"oak_planks",0],[3,3,7,"oak_planks",0],[3,3,8,"oak_planks",0],[3,3,9,"oak_planks",0],[3,3,10,"oak_planks",0],[3,3,11,"oak_log",0],[3,3,12,"oak_planks",0],[3,3,13,"oak_planks",0],[3,3,14,"oak_planks",0],[3,3,15,"oak_log",0],[4,3,1,"oak_planks",0],[4,3,6,"oak_planks",0],[4,3,7,"oak_planks",0],[4,3,8,"oak_planks",0],[4,3,9,"oak_planks",0],[4,3,10,"oak_planks",0],[4,3,15,"oak_planks",0],[5,3,1,"oak_planks",0],[5,3,6,"oak_planks",0],[5,3,7,"oak_planks",0],[5,3,8,"oak_planks",0],[5,3,9,"oak_planks",0],[5,3,10,"oak_planks",0],[5,3,15,"oak_planks",0],[6,3,1,"oak_planks",0],[6,3,15,"oak_planks",0],[7,3,1,"oak_planks",0],[7,3,15,"oak_planks",0],[8,3,1,"oak_planks",0],[8,3,15,"oak_planks",0],[9,3,1,"oak_log",0],[9,3,2,"oak_planks",0],[9,3,3,"oak_planks",0],[9,3,4,"oak_planks",0],[9,3,5,"oak_planks",0],[9,3,6,"oak_planks",0],[9,3,7,"oak_planks",0],[9,3,8,"oak_planks",0],[9,3,9,"oak_planks",0],[9,3,10,"oak_planks",0],[9,3,11,"oak_planks",0],[9,3,12,"oak_planks",0],[9,3,13,"oak_planks",0],[9,3,14,"oak_planks",0],[9,3,15,"oak_log",0],[3,4,1,"oak_log",0],[3,4,2,"oak_log",0],[3,4,3,"oak_log",0],[3,4,4,"oak_log",0],[3,4,5,"oak_log",0],[3,4,6,"oak_planks",0],[3,4,8,"oak_planks",0],[3,4,10,"oak_planks",0],[3,4,11,"oak_log",0],[3,4,12,"oak_log",0],[3,4,13,"oak_log",0],[3,4,14,"oak_log",0],[3,4,15,"oak_log",0],[4,4,1,"oak_log",0],[4,4,15,"oak_log",0],[5,4,1,"oak_log",0],[5,4,15,"oak_log",0],[6,4,1,"oak_log",0],[6,4,15,"oak_log",0],[7,4,1,"oak_log",0],[7,4,15,"oak_log",0],[8,4,1,"oak_log",0],[8,4,15,"oak_log",0],[9,4,1,"oak_log",0],[9,4,2,"oak_log",0],[9,4,3,"oak_log",0],[9,4,4,"oak_log",0],[9,4,5,"oak_log",0],[9,4,6,"oak_log",0],[9,4,7,"oak_log",0],[9,4,8,"oak_log",0],[9,4,9,"oak_log",0],[9,4,10,"oak_log",0],[9,4,11,"oak_log",0],[9,4,12,"oak_log",0],[9,4,13,"oak_log",0],[9,4,14,"oak_log",0],[9,4,15,"oak_log",0],[3,5,1,"oak_log",0],[3,5,2,"oak_planks",0],[3,5,3,"oak_planks",0],[3,5,4,"oak_planks",0],[3,5,5,"oak_log",0],[3,5,6,"oak_planks",0],[3,5,8,"oak_planks",0],[3,5,10,"oak_planks",0],[3,5,11,"oak_log",0],[3,5,12,"oak_planks",0],[3,5,13,"oak_planks",0],[3,5,14,"oak_planks",0],[3,5,15,"oak_log",0],[4,5,1,"oak_planks",0],[4,5,15,"oak_planks",0],[5,5,1,"oak_planks",0],[5,5,15,"oak_planks",0],[6,5,1,"oak_planks",0],[6,5,15,"oak_planks",0],[7,5,1,"oak_planks",0],[7,5,15,"oak_planks",0],[8,5,1,"oak_planks",0],[8,5,15,"oak_planks",0],[9,5,1,"oak_log",0],[9,5,2,"oak_planks",0],[9,5,3,"oak_planks",0],[9,5,4,"oak_planks",0],[9,5,5,"oak_planks",0],[9,5,6,"oak_planks",0],[9,5,7,"oak_planks",0],[9,5,8,"oak_planks",0],[9,5,9,"oak_planks",0],[9,5,10,"oak_planks",0],[9,5,11,"oak_planks",0],[9,5,12,"oak_planks",0],[9,5,13,"oak_planks",0],[9,5,14,"oak_planks",0],[9,5,15,"oak_log",0],[3,6,5,"oak_log",0],[3,6,6,"oak_planks",0],[3,6,7,"oak_planks",0],[3,6,8,"oak_planks",0],[3,6,9,"oak_planks",0],[3,6,10,"oak_planks",0],[3,6,11,"oak_log",0],[4,6,1,"oak_planks",0],[4,6,2,"oak_planks",0],[4,6,3,"oak_planks",0],[4,6,4,"oak_planks",0],[4,6,5,"oak_planks",0],[4,6,11,"oak_planks",0],[4,6,12,"oak_planks",0],[4,6,13,"oak_planks",0],[4,6,14,"oak_planks",0],[4,6,15,"oak_planks",0],[5,6,1,"oak_planks",0],[5,6,15,"oak_planks",0],[6,6,1,"oak_planks",0],[6,6,15,"oak_planks",0],[7,6,1,"oak_planks",0],[7,6,15,"oak_planks",0],[8,6,1,"oak_planks",0],[8,6,2,"oak_planks",0],[8,6,3,"oak_planks",0],[8,6,4,"oak_planks",0],[8,6,5,"oak_planks",0],[8,6,6,"oak_planks",0],[8,6,7,"oak_planks",0],[8,6,8,"oak_planks",0],[8,6,9,"oak_planks",0],[8,6,10,"oak_planks",0],[8,6,11,"oak_planks",0],[8,6,12,"oak_planks",0],[8,6,13,"oak_planks",0],[8,6,14,"oak_planks",0],[8,6,15,"oak_planks",0],[3,7,6,"oak_log",0],[3,7,7,"oak_log",0],[3,7,8,"oak_log",0],[3,7,9,"oak_log",0],[3,7,10,"oak_log",0],[4,7,6,"oak_planks",0],[4,7,10,"oak_planks",0],[5,7,1,"oak_log",0],[5,7,2,"oak_planks",0],[5,7,3,"oak_planks",0],[5,7,4,"oak_planks",0],[5,7,5,"oak_planks",0],[5,7,6,"oak_planks",0],[5,7,10,"oak_planks",0],[5,7,11,"oak_planks",0],[5,7,12,"oak_planks",0],[5,7,13,"oak_planks",0],[5,7,14,"oak_planks",0],[5,7,15,"oak_log",0],[6,7,1,"oak_log",0],[6,7,15,"oak_log",0],[7,7,1,"oak_log",0],[7,7,2,"oak_planks",0],[7,7,3,"oak_planks",0],[7,7,4,"oak_planks",0],[7,7,5,"oak_planks",0],[7,7,6,"oak_planks",0],[7,7,7,"oak_planks",0],[7,7,8,"oak_planks",0],[7,7,9,"oak_planks",0],[7,7,10,"oak_planks",0],[7,7,11,"oak_planks",0],[7,7,12,"oak_planks",0],[7,7,13,"oak_planks",0],[7,7,14,"oak_planks",0],[7,7,15,"oak_log",0],[3,8,7,"oak_planks",0],[3,8,8,"oak_planks",0],[3,8,9,"oak_planks",0],[4,8,7,"oak_planks",0],[4,8,9,"oak_planks",0],[5,8,7,"oak_planks",0],[5,8,9,"oak_planks",0],[6,8,0,"oak_planks",0],[6,8,1,"oak_planks",0],[6,8,2,"oak_planks",0],[6,8,3,"oak_planks",0],[6,8,4,"oak_planks",0],[6,8,5,"oak_planks",0],[6,8,6,"oak_planks",0],[6,8,7,"oak_planks",0],[6,8,8,"oak_planks",0],[6,8,9,"oak_planks",0],[6,8,10,"oak_planks",0],[6,8,11,"oak_planks",0],[6,8,12,"oak_planks",0],[6,8,13,"oak_planks",0],[6,8,14,"oak_planks",0],[6,8,15,"oak_planks",0],[6,8,16,"oak_planks",0],[2,9,8,"oak_planks",0],[3,9,8,"oak_planks",0],[4,9,8,"oak_planks",0],[5,9,8,"oak_planks",0],[1,1,8,"oak_planks",0],[5,1,3,"cobblestone_stairs",-1.5708],[5,1,13,"cobblestone_stairs",1.5708],[7,1,2,"oak_stairs",1.5708],[7,1,14,"oak_stairs",-1.5708],[8,1,2,"oak_stairs",1.5708],[8,1,3,"oak_stairs",0],[8,1,4,"oak_stairs",0],[8,1,12,"oak_stairs",0],[8,1,13,"oak_stairs",0],[8,1,14,"oak_stairs",-1.5708],[0,2,7,"torch",3.14159],[0,2,9,"torch",3.14159],[1,2,8,"oak_planks",0],[2,2,1,"torch",3.14159],[2,2,15,"torch",3.14159],[3,2,3,"glass",0],[3,2,13,"glass",0],[5,2,4,"cobblestone_stairs",-1.5708],[5,2,12,"cobblestone_stairs",1.5708],[6,2,1,"glass",0],[6,2,15,"glass",0],[9,2,4,"glass",0],[9,2,8,"glass",0],[9,2,12,"glass",0],[10,2,6,"torch",0],[10,2,10,"torch",0],[5,3,5,"cobblestone_stairs",-1.5708],[5,3,11,"cobblestone_stairs",1.5708],[6,3,6,"torch",0],[6,3,10,"torch",0],[1,4,7,"oak_fence",0],[1,4,8,"oak_fence",0],[1,4,9,"oak_fence",0],[2,4,6,"oak_fence",0],[2,4,10,"oak_fence",0],[3,4,7,"oak_planks",0],[3,4,9,"oak_planks",0],[4,4,8,"oak_stairs",3.14159],[2,5,0,"oak_stairs",0],[2,5,1,"oak_stairs",0],[2,5,2,"oak_stairs",0],[2,5,3,"oak_stairs",0],[2,5,4,"oak_stairs",0],[2,5,12,"oak_stairs",0],[2,5,13,"oak_stairs",0],[2,5,14,"oak_stairs",0],[2,5,15,"oak_stairs",0],[2,5,16,"oak_stairs",0],[3,5,0,"oak_stairs",3.14159],[3,5,7,"oak_planks",0],[3,5,9,"oak_planks",0],[3,5,16,"oak_stairs",3.14159],[9,5,0,"oak_stairs",0],[9,5,16,"oak_stairs",0],[10,5,0,"oak_stairs",3.14159],[10,5,1,"oak_stairs",3.14159],[10,5,2,"oak_stairs",3.14159],[10,5,3,"oak_stairs",3.14159],[10,5,4,"oak_stairs",3.14159],[10,5,5,"oak_stairs",3.14159],[10,5,6,"oak_stairs",3.14159],[10,5,7,"oak_stairs",3.14159],[10,5,8,"oak_stairs",3.14159],[10,5,9,"oak_stairs",3.14159],[10,5,10,"oak_stairs",3.14159],[10,5,11,"oak_stairs",3.14159],[10,5,12,"oak_stairs",3.14159],[10,5,13,"oak_stairs",3.14159],[10,5,14,"oak_stairs",3.14159],[10,5,15,"oak_stairs",3.14159],[10,5,16,"oak_stairs",3.14159],[3,6,0,"oak_stairs",0],[3,6,1,"oak_stairs",0],[3,6,2,"oak_stairs",0],[3,6,3,"oak_stairs",0],[3,6,4,"oak_stairs",0],[3,6,12,"oak_stairs",0],[3,6,13,"oak_stairs",0],[3,6,14,"oak_stairs",0],[3,6,15,"oak_stairs",0],[3,6,16,"oak_stairs",0],[4,6,0,"oak_stairs",3.14159],[4,6,16,"oak_stairs",3.14159],[6,6,2,"torch",-1.5708],[6,6,14,"torch",1.5708],[8,6,0,"oak_stairs",0],[8,6,16,"oak_stairs",0],[9,6,0,"oak_stairs",3.14159],[9,6,1,"oak_stairs",3.14159],[9,6,2,"oak_stairs",3.14159],[9,6,3,"oak_stairs",3.14159],[9,6,4,"oak_stairs",3.14159],[9,6,5,"oak_stairs",3.14159],[9,6,6,"oak_stairs",3.14159],[9,6,7,"oak_stairs",3.14159],[9,6,8,"oak_stairs",3.14159],[9,6,9,"oak_stairs",3.14159],[9,6,10,"oak_stairs",3.14159],[9,6,11,"oak_stairs",3.14159],[9,6,12,"oak_stairs",3.14159],[9,6,13,"oak_stairs",3.14159],[9,6,14,"oak_stairs",3.14159],[9,6,15,"oak_stairs",3.14159],[9,6,16,"oak_stairs",3.14159],[2,7,5,"oak_stairs",-1.5708],[2,7,6,"oak_stairs",1.5708],[2,7,10,"oak_stairs",-1.5708],[2,7,11,"oak_stairs",1.5708],[3,7,5,"oak_stairs",-1.5708],[3,7,11,"oak_stairs",1.5708],[4,7,0,"oak_stairs",0],[4,7,1,"oak_stairs",0],[4,7,2,"oak_stairs",0],[4,7,3,"oak_stairs",0],[4,7,4,"oak_stairs",0],[4,7,5,"oak_stairs",-1.5708],[4,7,11,"oak_stairs",0],[4,7,12,"oak_stairs",0],[4,7,13,"oak_stairs",0],[4,7,14,"oak_stairs",0],[4,7,15,"oak_stairs",0],[4,7,16,"oak_stairs",0],[5,7,0,"oak_stairs",3.14159],[5,7,16,"oak_stairs",3.14159],[7,7,0,"oak_stairs",0],[7,7,16,"oak_stairs",0],[8,7,0,"oak_stairs",3.14159],[8,7,1,"oak_stairs",3.14159],[8,7,2,"oak_stairs",3.14159],[8,7,3,"oak_stairs",3.14159],[8,7,4,"oak_stairs",3.14159],[8,7,5,"oak_stairs",3.14159],[8,7,6,"oak_stairs",3.14159],[8,7,7,"oak_stairs",3.14159],[8,7,8,"oak_stairs",3.14159],[8,7,9,"oak_stairs",3.14159],[8,7,10,"oak_stairs",3.14159],[8,7,11,"oak_stairs",3.14159],[8,7,12,"oak_stairs",3.14159],[8,7,13,"oak_stairs",3.14159],[8,7,14,"oak_stairs",3.14159],[8,7,15,"oak_stairs",3.14159],[8,7,16,"oak_stairs",3.14159],[2,8,6,"oak_stairs",-1.5708],[2,8,7,"oak_stairs",1.5708],[2,8,9,"oak_stairs",-1.5708],[2,8,10,"oak_stairs",1.5708],[3,8,6,"oak_stairs",-1.5708],[3,8,10,"oak_stairs",1.5708],[4,8,6,"oak_stairs",-1.5708],[4,8,10,"oak_stairs",1.5708],[5,8,0,"oak_stairs",0],[5,8,1,"oak_stairs",0],[5,8,2,"oak_stairs",0],[5,8,3,"oak_stairs",0],[5,8,4,"oak_stairs",0],[5,8,5,"oak_stairs",0],[5,8,6,"oak_stairs",-1.5708],[5,8,10,"oak_stairs",1.5708],[5,8,11,"oak_stairs",0],[5,8,12,"oak_stairs",0],[5,8,13,"oak_stairs",0],[5,8,14,"oak_stairs",0],[5,8,15,"oak_stairs",0],[5,8,16,"oak_stairs",0],[7,8,0,"oak_stairs",3.14159],[7,8,1,"oak_stairs",3.14159],[7,8,2,"oak_stairs",3.14159],[7,8,3,"oak_stairs",3.14159],[7,8,4,"oak_stairs",3.14159],[7,8,5,"oak_stairs",3.14159],[7,8,6,"oak_stairs",3.14159],[7,8,7,"oak_stairs",3.14159],[7,8,8,"oak_stairs",3.14159],[7,8,9,"oak_stairs",3.14159],[7,8,10,"oak_stairs",3.14159],[7,8,11,"oak_stairs",3.14159],[7,8,12,"oak_stairs",3.14159],[7,8,13,"oak_stairs",3.14159],[7,8,14,"oak_stairs",3.14159],[7,8,15,"oak_stairs",3.14159],[7,8,16,"oak_stairs",3.14159],[2,9,7,"oak_stairs",-1.5708],[2,9,9,"oak_stairs",1.5708],[3,9,7,"oak_stairs",-1.5708],[3,9,9,"oak_stairs",1.5708],[4,9,7,"oak_stairs",-1.5708],[4,9,9,"oak_stairs",1.5708],[5,9,7,"oak_stairs",-1.5708],[5,9,9,"oak_stairs",1.5708],[6,9,7,"oak_stairs",3.14159],[6,9,8,"oak_stairs",3.14159],[6,9,9,"oak_stairs",3.14159],[0,0,8,"cobblestone",0]]}'),wg={size:[11,8,12],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"oak_planks",0],[2,0,3,"oak_planks",0],[2,0,4,"oak_planks",0],[2,0,5,"oak_planks",0],[2,0,6,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"oak_planks",0],[3,0,3,"oak_planks",0],[3,0,4,"oak_planks",0],[3,0,5,"oak_planks",0],[3,0,6,"cobblestone",0],[3,0,7,"oak_log",0],[3,0,8,"oak_log",0],[3,0,9,"oak_log",0],[3,0,10,"oak_log",0],[3,0,11,"oak_log",0],[4,0,1,"cobblestone",0],[4,0,2,"oak_planks",0],[4,0,3,"oak_planks",0],[4,0,4,"oak_planks",0],[4,0,5,"oak_planks",0],[4,0,6,"cobblestone",0],[4,0,7,"grass_block",0],[4,0,8,"grass_block",0],[4,0,9,"grass_block",0],[4,0,10,"grass_block",0],[4,0,11,"oak_log",0],[5,0,1,"oak_log",0],[5,0,2,"oak_planks",0],[5,0,3,"oak_planks",0],[5,0,4,"oak_planks",0],[5,0,5,"oak_planks",0],[5,0,6,"cobblestone",0],[5,0,7,"dirt",0],[5,0,8,"grass_block",0],[5,0,9,"grass_block",0],[5,0,10,"grass_block",0],[5,0,11,"oak_log",0],[6,0,1,"cobblestone",0],[6,0,5,"oak_planks",0],[6,0,6,"cobblestone",0],[6,0,7,"dirt",0],[6,0,8,"grass_block",0],[6,0,10,"grass_block",0],[6,0,11,"oak_log",0],[7,0,1,"cobblestone",0],[7,0,5,"oak_planks",0],[7,0,6,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,8,"grass_block",0],[7,0,9,"grass_block",0],[7,0,10,"grass_block",0],[7,0,11,"oak_log",0],[8,0,1,"cobblestone",0],[8,0,5,"oak_planks",0],[8,0,6,"cobblestone",0],[8,0,7,"grass_block",0],[8,0,8,"grass_block",0],[8,0,9,"grass_block",0],[8,0,10,"grass_block",0],[8,0,11,"oak_log",0],[9,0,1,"oak_log",0],[9,0,2,"cobblestone",0],[9,0,3,"cobblestone",0],[9,0,4,"cobblestone",0],[9,0,5,"cobblestone",0],[9,0,6,"oak_log",0],[9,0,7,"oak_log",0],[9,0,8,"oak_log",0],[9,0,9,"oak_log",0],[9,0,10,"oak_log",0],[9,0,11,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,5,"oak_planks",0],[2,1,6,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,1,"oak_log",0],[5,1,6,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,6,"cobblestone",0],[7,1,1,"cobblestone",0],[8,1,1,"cobblestone",0],[8,1,6,"cobblestone",0],[9,1,1,"oak_log",0],[9,1,2,"cobblestone",0],[9,1,3,"cobblestone",0],[9,1,4,"cobblestone",0],[9,1,5,"cobblestone",0],[9,1,6,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"oak_log",0],[1,2,5,"oak_log",0],[1,2,6,"oak_log",0],[2,2,1,"oak_log",0],[2,2,6,"oak_log",0],[4,2,1,"oak_log",0],[5,2,1,"oak_log",0],[5,2,6,"oak_log",0],[6,2,1,"oak_log",0],[6,2,6,"oak_log",0],[8,2,1,"oak_log",0],[8,2,6,"cobblestone",0],[9,2,1,"oak_log",0],[9,2,2,"oak_log",0],[9,2,5,"oak_log",0],[9,2,6,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"cobblestone",0],[1,3,6,"oak_log",0],[2,3,1,"oak_planks",0],[2,3,6,"oak_planks",0],[3,3,1,"oak_planks",0],[3,3,6,"oak_planks",0],[4,3,1,"oak_planks",0],[4,3,6,"oak_planks",0],[5,3,1,"oak_planks",0],[5,3,6,"oak_planks",0],[6,3,1,"oak_planks",0],[6,3,6,"oak_planks",0],[7,3,1,"oak_planks",0],[7,3,6,"oak_planks",0],[8,3,1,"oak_planks",0],[8,3,6,"oak_planks",0],[9,3,1,"oak_log",0],[9,3,2,"cobblestone",0],[9,3,3,"cobblestone",0],[9,3,4,"cobblestone",0],[9,3,5,"cobblestone",0],[9,3,6,"oak_log",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[2,4,2,"oak_planks",0],[2,4,5,"oak_planks",0],[3,4,2,"oak_planks",0],[3,4,5,"oak_planks",0],[4,4,2,"oak_planks",0],[4,4,5,"oak_planks",0],[5,4,2,"oak_planks",0],[5,4,5,"oak_planks",0],[6,4,2,"oak_planks",0],[6,4,5,"oak_planks",0],[7,4,2,"oak_planks",0],[7,4,5,"oak_planks",0],[8,4,2,"oak_planks",0],[9,4,2,"cobblestone",0],[9,4,3,"cobblestone",0],[9,4,4,"cobblestone",0],[9,4,5,"cobblestone",0],[1,5,3,"cobblestone",0],[1,5,4,"cobblestone",0],[2,5,3,"oak_planks",0],[2,5,4,"oak_planks",0],[3,5,3,"oak_planks",0],[3,5,4,"oak_planks",0],[4,5,3,"oak_planks",0],[4,5,4,"oak_planks",0],[5,5,3,"oak_planks",0],[5,5,4,"oak_planks",0],[6,5,3,"oak_planks",0],[6,5,4,"oak_planks",0],[7,5,3,"oak_planks",0],[7,5,4,"oak_planks",0],[8,5,3,"oak_planks",0],[8,5,4,"oak_planks",0],[8,5,5,"cobblestone",0],[9,5,3,"cobblestone",0],[9,5,4,"cobblestone",0],[0,0,4,"oak_stairs",0],[1,1,3,"oak_planks",0],[1,1,4,"oak_planks",0],[2,1,2,"oak_stairs",3.14159],[3,1,2,"oak_fence",0],[3,1,7,"oak_fence",0],[3,1,8,"oak_fence",0],[3,1,9,"oak_fence",0],[3,1,10,"oak_fence",0],[3,1,11,"oak_fence",0],[4,1,2,"oak_stairs",0],[4,1,11,"oak_fence",0],[5,1,11,"oak_fence",0],[6,1,11,"oak_fence",0],[7,1,6,"oak_planks",1.5708],[7,1,11,"oak_fence",0],[8,1,11,"oak_fence",0],[9,1,7,"oak_fence",0],[9,1,8,"oak_fence",0],[9,1,9,"oak_fence",0],[9,1,10,"oak_fence",0],[9,1,11,"oak_fence",0],[0,2,2,"torch",3.14159],[0,2,5,"torch",3.14159],[1,2,3,"oak_planks",0],[1,2,4,"oak_planks",0],[2,2,5,"red_wool",0],[3,2,1,"glass",0],[3,2,2,"oak_pressure_plate",0],[3,2,6,"glass",0],[3,2,11,"torch",0],[4,2,6,"glass",0],[5,2,0,"torch",1.5708],[7,2,1,"glass",0],[7,2,6,"oak_planks",1.5708],[8,2,5,"cobblestone_wall",0],[9,2,3,"glass",0],[9,2,4,"glass",0],[9,2,11,"torch",0],[0,3,0,"oak_stairs",-1.5708],[0,3,1,"oak_stairs",1.5708],[0,3,6,"oak_stairs",-1.5708],[0,3,7,"oak_stairs",1.5708],[1,3,0,"oak_stairs",-1.5708],[1,3,7,"oak_stairs",1.5708],[2,3,0,"oak_stairs",-1.5708],[2,3,7,"oak_stairs",1.5708],[3,3,0,"oak_stairs",-1.5708],[3,3,2,"torch",-1.5708],[3,3,7,"oak_stairs",1.5708],[4,3,0,"oak_stairs",-1.5708],[4,3,7,"oak_stairs",1.5708],[5,3,0,"oak_stairs",-1.5708],[5,3,7,"oak_stairs",1.5708],[6,3,0,"oak_stairs",-1.5708],[6,3,7,"oak_stairs",1.5708],[7,3,0,"oak_stairs",-1.5708],[7,3,5,"torch",1.5708],[7,3,7,"oak_stairs",1.5708],[8,3,0,"oak_stairs",-1.5708],[8,3,5,"cobblestone_wall",0],[8,3,7,"oak_stairs",1.5708],[9,3,0,"oak_stairs",-1.5708],[9,3,7,"oak_stairs",1.5708],[10,3,0,"oak_stairs",-1.5708],[10,3,1,"oak_stairs",1.5708],[10,3,6,"oak_stairs",-1.5708],[10,3,7,"oak_stairs",1.5708],[0,4,1,"oak_stairs",-1.5708],[0,4,2,"oak_stairs",1.5708],[0,4,5,"oak_stairs",-1.5708],[0,4,6,"oak_stairs",1.5708],[1,4,1,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,1,"oak_stairs",-1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,1,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,1,"oak_stairs",-1.5708],[4,4,6,"oak_stairs",1.5708],[5,4,1,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,1,"oak_stairs",-1.5708],[6,4,6,"oak_stairs",1.5708],[7,4,1,"oak_stairs",-1.5708],[7,4,6,"oak_stairs",1.5708],[8,4,1,"oak_stairs",-1.5708],[8,4,5,"cobblestone_wall",0],[8,4,6,"oak_stairs",1.5708],[9,4,1,"oak_stairs",-1.5708],[9,4,6,"oak_stairs",1.5708],[10,4,1,"oak_stairs",-1.5708],[10,4,2,"oak_stairs",1.5708],[10,4,5,"oak_stairs",-1.5708],[10,4,6,"oak_stairs",1.5708],[0,5,2,"oak_stairs",-1.5708],[0,5,3,"oak_stairs",1.5708],[0,5,4,"oak_stairs",-1.5708],[0,5,5,"oak_stairs",1.5708],[1,5,2,"oak_stairs",-1.5708],[1,5,5,"oak_stairs",1.5708],[2,5,2,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,2,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,2,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,2,"oak_stairs",-1.5708],[5,5,5,"oak_stairs",1.5708],[6,5,2,"oak_stairs",-1.5708],[6,5,5,"oak_stairs",1.5708],[7,5,2,"oak_stairs",-1.5708],[7,5,5,"oak_stairs",1.5708],[8,5,2,"oak_stairs",-1.5708],[9,5,2,"oak_stairs",-1.5708],[9,5,5,"oak_stairs",1.5708],[10,5,2,"oak_stairs",-1.5708],[10,5,3,"oak_stairs",1.5708],[10,5,4,"oak_stairs",-1.5708],[10,5,5,"oak_stairs",1.5708],[0,6,3,"oak_stairs",-1.5708],[0,6,4,"oak_stairs",1.5708],[1,6,3,"oak_stairs",-1.5708],[1,6,4,"oak_stairs",1.5708],[2,6,3,"oak_stairs",-1.5708],[2,6,4,"oak_stairs",1.5708],[3,6,3,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,3,"oak_stairs",-1.5708],[4,6,4,"oak_stairs",1.5708],[5,6,3,"oak_stairs",-1.5708],[5,6,4,"oak_stairs",1.5708],[6,6,3,"oak_stairs",-1.5708],[6,6,4,"oak_stairs",1.5708],[7,6,3,"oak_stairs",-1.5708],[7,6,4,"oak_stairs",1.5708],[8,6,3,"oak_stairs",-1.5708],[8,6,4,"oak_stairs",1.5708],[8,6,5,"cobblestone_wall",0],[9,6,3,"oak_stairs",-1.5708],[9,6,4,"oak_stairs",1.5708],[10,6,3,"oak_stairs",-1.5708],[10,6,4,"oak_stairs",1.5708],[8,7,5,"cobblestone_wall",0],[0,0,3,"cobblestone",0],[6,0,9,"cobblestone",0]]},Eg={size:[9,7,16],blocks:[[0,0,0,"grass_block",0],[0,0,1,"grass_block",0],[0,0,2,"grass_block",0],[0,0,3,"grass_block",0],[0,0,4,"grass_block",0],[0,0,5,"grass_block",0],[1,0,0,"grass_block",0],[1,0,1,"grass_block",0],[1,0,2,"grass_block",0],[1,0,3,"grass_block",0],[1,0,4,"grass_block",0],[1,0,5,"grass_block",0],[2,0,0,"grass_block",0],[2,0,1,"grass_block",0],[2,0,3,"grass_block",0],[2,0,4,"grass_block",0],[2,0,5,"dirt",0],[2,0,6,"dirt",0],[2,0,7,"grass_block",0],[2,0,8,"dirt",0],[2,0,9,"dirt",0],[2,0,10,"dirt",0],[2,0,11,"dirt",0],[2,0,12,"dirt",0],[2,0,13,"dirt",0],[2,0,14,"dirt",0],[3,0,0,"grass_block",0],[3,0,1,"grass_block",0],[3,0,2,"grass_block",0],[3,0,3,"dirt",0],[3,0,4,"grass_block",0],[3,0,5,"grass_block",0],[3,0,6,"grass_block",0],[3,0,7,"grass_block",0],[3,0,8,"dirt",0],[3,0,9,"dirt",0],[3,0,10,"grass_block",0],[3,0,11,"grass_block",0],[3,0,12,"dirt",0],[3,0,13,"grass_block",0],[3,0,14,"dirt",0],[4,0,0,"grass_block",0],[4,0,1,"grass_block",0],[4,0,2,"grass_block",0],[4,0,3,"grass_block",0],[4,0,4,"grass_block",0],[4,0,5,"grass_block",0],[4,0,6,"grass_block",0],[4,0,7,"grass_block",0],[4,0,8,"grass_block",0],[4,0,9,"grass_block",0],[4,0,11,"grass_block",0],[4,0,12,"dirt",0],[4,0,13,"dirt",0],[4,0,14,"dirt",0],[5,0,0,"grass_block",0],[5,0,1,"grass_block",0],[5,0,2,"grass_block",0],[5,0,3,"grass_block",0],[5,0,4,"grass_block",0],[5,0,5,"dirt",0],[5,0,6,"grass_block",0],[5,0,7,"grass_block",0],[5,0,8,"grass_block",0],[5,0,9,"grass_block",0],[5,0,10,"grass_block",0],[5,0,11,"grass_block",0],[5,0,12,"dirt",0],[5,0,13,"dirt",0],[5,0,14,"dirt",0],[6,0,0,"grass_block",0],[6,0,2,"grass_block",0],[6,0,3,"grass_block",0],[6,0,4,"grass_block",0],[6,0,5,"dirt",0],[6,0,6,"dirt",0],[6,0,7,"dirt",0],[6,0,8,"dirt",0],[6,0,9,"dirt",0],[6,0,10,"dirt",0],[6,0,11,"dirt",0],[6,0,12,"dirt",0],[6,0,13,"dirt",0],[6,0,14,"dirt",0],[7,0,0,"grass_block",0],[7,0,1,"grass_block",0],[7,0,2,"grass_block",0],[7,0,3,"grass_block",0],[7,0,4,"grass_block",0],[7,0,5,"grass_block",0],[8,0,0,"grass_block",0],[8,0,1,"grass_block",0],[8,0,2,"grass_block",0],[8,0,3,"grass_block",0],[8,0,4,"grass_block",0],[8,0,5,"grass_block",0],[2,1,5,"cobblestone",0],[2,1,6,"cobblestone",0],[2,1,8,"cobblestone",0],[2,1,9,"cobblestone",0],[2,1,10,"cobblestone",0],[2,1,11,"cobblestone",0],[2,1,12,"cobblestone",0],[2,1,13,"cobblestone",0],[2,1,14,"cobblestone",0],[3,1,12,"oak_log",0],[3,1,14,"cobblestone",0],[4,1,12,"oak_log",0],[4,1,14,"cobblestone",0],[5,1,12,"oak_log",0],[5,1,14,"cobblestone",0],[6,1,5,"cobblestone",0],[6,1,6,"cobblestone",0],[6,1,7,"cobblestone",0],[6,1,8,"cobblestone",0],[6,1,9,"cobblestone",0],[6,1,10,"cobblestone",0],[6,1,11,"cobblestone",0],[6,1,12,"cobblestone",0],[6,1,13,"cobblestone",0],[6,1,14,"cobblestone",0],[2,2,5,"cobblestone",0],[2,2,6,"cobblestone",0],[2,2,8,"cobblestone",0],[2,2,9,"oak_log",0],[2,2,11,"oak_log",0],[2,2,13,"oak_log",0],[2,2,14,"cobblestone",0],[3,2,14,"oak_log",0],[5,2,14,"oak_log",0],[6,2,5,"cobblestone",0],[6,2,6,"cobblestone",0],[6,2,7,"cobblestone",0],[6,2,8,"oak_log",0],[6,2,10,"oak_log",0],[6,2,12,"oak_log",0],[6,2,13,"cobblestone",0],[6,2,14,"cobblestone",0],[2,3,5,"cobblestone",0],[2,3,6,"cobblestone",0],[2,3,7,"cobblestone",0],[2,3,8,"cobblestone",0],[2,3,9,"cobblestone",0],[2,3,10,"cobblestone",0],[2,3,11,"cobblestone",0],[2,3,12,"cobblestone",0],[2,3,13,"cobblestone",0],[2,3,14,"cobblestone",0],[3,3,14,"cobblestone",0],[4,3,14,"cobblestone",0],[5,3,14,"cobblestone",0],[6,3,5,"cobblestone",0],[6,3,6,"cobblestone",0],[6,3,7,"cobblestone",0],[6,3,8,"cobblestone",0],[6,3,9,"cobblestone",0],[6,3,10,"cobblestone",0],[6,3,11,"cobblestone",0],[6,3,12,"cobblestone",0],[6,3,13,"cobblestone",0],[6,3,14,"cobblestone",0],[2,4,5,"cobblestone",0],[2,4,6,"cobblestone",0],[2,4,7,"cobblestone",0],[2,4,8,"cobblestone",0],[2,4,9,"cobblestone",0],[2,4,10,"cobblestone",0],[2,4,11,"cobblestone",0],[2,4,12,"cobblestone",0],[2,4,13,"cobblestone",0],[2,4,14,"cobblestone",0],[3,4,5,"cobblestone",0],[3,4,14,"cobblestone",0],[4,4,5,"cobblestone",0],[4,4,14,"cobblestone",0],[5,4,5,"cobblestone",0],[5,4,14,"cobblestone",0],[6,4,5,"cobblestone",0],[6,4,6,"cobblestone",0],[6,4,7,"cobblestone",0],[6,4,8,"cobblestone",0],[6,4,9,"cobblestone",0],[6,4,10,"cobblestone",0],[6,4,11,"cobblestone",0],[6,4,12,"cobblestone",0],[6,4,13,"cobblestone",0],[6,4,14,"cobblestone",0],[3,5,5,"cobblestone",0],[3,5,14,"cobblestone",0],[4,5,5,"cobblestone",0],[4,5,14,"cobblestone",0],[5,5,5,"cobblestone",0],[5,5,14,"cobblestone",0],[4,6,4,"oak_planks",0],[4,6,5,"oak_planks",0],[4,6,6,"oak_planks",0],[4,6,7,"oak_planks",0],[4,6,8,"oak_planks",0],[4,6,9,"oak_planks",0],[4,6,10,"oak_planks",0],[4,6,11,"oak_planks",0],[4,6,12,"oak_planks",0],[4,6,13,"oak_planks",0],[4,6,14,"oak_planks",0],[4,6,15,"oak_planks",0],[0,1,0,"oak_fence",0],[0,1,1,"oak_fence",0],[0,1,2,"oak_fence",0],[0,1,3,"oak_fence",0],[0,1,4,"oak_fence",0],[0,1,5,"oak_fence",0],[1,1,0,"oak_fence",0],[1,1,5,"oak_fence",0],[2,1,0,"oak_fence",0],[2,1,7,"oak_planks",0],[3,1,0,"oak_fence",0],[3,1,13,"water",0],[4,1,0,"oak_fence",0],[4,1,13,"water",0],[5,1,0,"oak_fence",0],[5,1,13,"water",0],[6,1,0,"oak_fence",0],[7,1,0,"oak_fence",0],[7,1,5,"oak_fence",0],[8,1,0,"oak_fence",0],[8,1,1,"oak_fence",0],[8,1,2,"oak_fence",0],[8,1,3,"oak_fence",0],[8,1,4,"oak_fence",0],[8,1,5,"oak_fence",0],[0,2,0,"torch",0],[0,2,5,"torch",0],[2,2,7,"oak_planks",0],[2,2,10,"glass",0],[2,2,12,"glass",0],[4,2,14,"glass",0],[6,2,9,"glass",0],[6,2,11,"glass",0],[8,2,0,"torch",0],[8,2,5,"torch",0],[3,3,5,"cobblestone_stairs",3.14159],[5,3,5,"cobblestone_stairs",0],[1,4,4,"oak_stairs",0],[1,4,5,"oak_stairs",0],[1,4,6,"oak_stairs",0],[1,4,7,"oak_stairs",0],[1,4,8,"oak_stairs",0],[1,4,9,"oak_stairs",0],[1,4,10,"oak_stairs",0],[1,4,11,"oak_stairs",0],[1,4,12,"oak_stairs",0],[1,4,13,"oak_stairs",0],[1,4,14,"oak_stairs",0],[1,4,15,"oak_stairs",0],[2,4,4,"oak_stairs",3.14159],[2,4,15,"oak_stairs",3.14159],[3,4,10,"torch",0],[4,4,4,"torch",1.5708],[4,4,6,"torch",-1.5708],[4,4,13,"torch",1.5708],[5,4,10,"torch",3.14159],[6,4,4,"oak_stairs",0],[6,4,15,"oak_stairs",0],[7,4,4,"oak_stairs",3.14159],[7,4,5,"oak_stairs",3.14159],[7,4,6,"oak_stairs",3.14159],[7,4,7,"oak_stairs",3.14159],[7,4,8,"oak_stairs",3.14159],[7,4,9,"oak_stairs",3.14159],[7,4,10,"oak_stairs",3.14159],[7,4,11,"oak_stairs",3.14159],[7,4,12,"oak_stairs",3.14159],[7,4,13,"oak_stairs",3.14159],[7,4,14,"oak_stairs",3.14159],[7,4,15,"oak_stairs",3.14159],[2,5,4,"oak_stairs",0],[2,5,5,"oak_stairs",0],[2,5,6,"oak_stairs",0],[2,5,7,"oak_stairs",0],[2,5,8,"oak_stairs",0],[2,5,9,"oak_stairs",0],[2,5,10,"oak_stairs",0],[2,5,11,"oak_stairs",0],[2,5,12,"oak_stairs",0],[2,5,13,"oak_stairs",0],[2,5,14,"oak_stairs",0],[2,5,15,"oak_stairs",0],[3,5,4,"oak_stairs",3.14159],[3,5,15,"oak_stairs",3.14159],[4,5,15,"torch",-1.5708],[5,5,4,"oak_stairs",0],[5,5,15,"oak_stairs",0],[6,5,4,"oak_stairs",3.14159],[6,5,5,"oak_stairs",3.14159],[6,5,6,"oak_stairs",3.14159],[6,5,7,"oak_stairs",3.14159],[6,5,8,"oak_stairs",3.14159],[6,5,9,"oak_stairs",3.14159],[6,5,10,"oak_stairs",3.14159],[6,5,11,"oak_stairs",3.14159],[6,5,12,"oak_stairs",3.14159],[6,5,13,"oak_stairs",3.14159],[6,5,14,"oak_stairs",3.14159],[6,5,15,"oak_stairs",3.14159],[3,6,4,"oak_stairs",0],[3,6,5,"oak_stairs",0],[3,6,6,"oak_stairs",0],[3,6,7,"oak_stairs",0],[3,6,8,"oak_stairs",0],[3,6,9,"oak_stairs",0],[3,6,10,"oak_stairs",0],[3,6,11,"oak_stairs",0],[3,6,12,"oak_stairs",0],[3,6,13,"oak_stairs",0],[3,6,14,"oak_stairs",0],[3,6,15,"oak_stairs",0],[5,6,4,"oak_stairs",3.14159],[5,6,5,"oak_stairs",3.14159],[5,6,6,"oak_stairs",3.14159],[5,6,7,"oak_stairs",3.14159],[5,6,8,"oak_stairs",3.14159],[5,6,9,"oak_stairs",3.14159],[5,6,10,"oak_stairs",3.14159],[5,6,11,"oak_stairs",3.14159],[5,6,12,"oak_stairs",3.14159],[5,6,13,"oak_stairs",3.14159],[5,6,14,"oak_stairs",3.14159],[5,6,15,"oak_stairs",3.14159],[0,0,11,"cobblestone",0],[0,0,15,"cobblestone",0],[2,0,2,"cobblestone",0],[4,0,10,"cobblestone",0],[6,0,1,"cobblestone",0],[7,0,7,"cobblestone",0],[7,0,14,"cobblestone",0],[0,1,8,"cobblestone",0]]},Tg={size:[9,4,9],blocks:[[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[2,1,3,"cobblestone",0],[2,1,4,"cobblestone",0],[2,1,5,"cobblestone",0],[3,1,2,"cobblestone",0],[3,1,6,"cobblestone",0],[4,1,2,"cobblestone",0],[4,1,4,"cobblestone",0],[4,1,6,"cobblestone",0],[5,1,2,"cobblestone",0],[5,1,6,"cobblestone",0],[6,1,3,"cobblestone",0],[6,1,4,"cobblestone",0],[6,1,5,"cobblestone",0],[4,2,4,"cobblestone",0],[0,0,1,"dirt_path",0],[0,0,2,"dirt_path",0],[0,0,3,"dirt_path",0],[0,0,4,"dirt_path",0],[0,0,5,"dirt_path",0],[0,0,7,"dirt_path",0],[1,0,0,"dirt_path",0],[1,0,1,"dirt_path",0],[1,0,3,"dirt_path",0],[1,0,4,"dirt_path",0],[1,0,5,"dirt_path",0],[1,0,6,"dirt_path",0],[1,0,7,"dirt_path",0],[1,0,8,"dirt_path",0],[2,0,0,"dirt_path",0],[2,0,8,"dirt_path",0],[3,0,0,"dirt_path",0],[3,0,1,"dirt_path",0],[3,0,7,"dirt_path",0],[3,0,8,"dirt_path",0],[4,0,0,"dirt_path",0],[4,0,1,"dirt_path",0],[4,0,7,"dirt_path",0],[4,0,8,"dirt_path",0],[5,0,0,"dirt_path",0],[5,0,1,"dirt_path",0],[5,0,7,"dirt_path",0],[5,0,8,"dirt_path",0],[6,0,0,"dirt_path",0],[6,0,1,"dirt_path",0],[6,0,7,"dirt_path",0],[6,0,8,"dirt_path",0],[7,0,0,"dirt_path",0],[7,0,1,"dirt_path",0],[7,0,3,"dirt_path",0],[7,0,4,"dirt_path",0],[7,0,5,"dirt_path",0],[7,0,6,"dirt_path",0],[7,0,8,"dirt_path",0],[8,0,1,"dirt_path",0],[8,0,2,"dirt_path",0],[8,0,3,"dirt_path",0],[8,0,4,"dirt_path",0],[8,0,5,"dirt_path",0],[8,0,6,"dirt_path",0],[8,0,7,"dirt_path",0],[2,1,2,"torch",0],[2,1,6,"torch",0],[3,1,3,"water",0],[3,1,4,"water",0],[3,1,5,"water",0],[4,1,3,"water",0],[4,1,5,"water",0],[5,1,3,"water",0],[5,1,4,"water",0],[5,1,5,"water",0],[6,1,2,"torch",0],[6,1,6,"torch",0],[3,2,4,"water",0],[4,2,3,"water",0],[4,2,5,"water",0],[5,2,4,"water",0],[3,3,4,"water",0],[4,3,3,"water",0],[4,3,4,"water",0],[4,3,5,"water",0],[5,3,4,"water",0],[0,0,6,"cobblestone",0],[1,0,2,"cobblestone",0],[2,0,1,"cobblestone",0],[2,0,7,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,7,"cobblestone",0],[0,1,4,"cobblestone",0],[4,1,0,"cobblestone",0],[4,1,8,"cobblestone",0],[8,1,4,"cobblestone",0],[4,2,2,"bell",-1.5708]]},Ag={size:[9,8,8],blocks:[[1,0,1,"oak_log",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[2,0,1,"cobblestone",0],[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"bricks",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[7,0,1,"oak_log",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"oak_log",0],[1,1,1,"oak_log",0],[1,1,2,"cobblestone",0],[1,1,5,"cobblestone",0],[1,1,6,"oak_log",0],[2,1,1,"cobblestone",0],[2,1,2,"smooth_stone",0],[2,1,6,"cobblestone",0],[3,1,1,"cobblestone",0],[3,1,2,"smooth_stone",0],[3,1,5,"cobblestone",0],[3,1,6,"cobblestone",0],[3,1,7,"cobblestone",0],[4,1,1,"cobblestone",0],[4,1,2,"smooth_stone",0],[4,1,7,"cobblestone",0],[5,1,1,"cobblestone",0],[5,1,2,"smooth_stone",0],[5,1,5,"cobblestone",0],[5,1,6,"cobblestone",0],[5,1,7,"cobblestone",0],[6,1,1,"cobblestone",0],[6,1,2,"smooth_stone",0],[6,1,3,"smooth_stone",0],[6,1,4,"smooth_stone",0],[6,1,5,"smooth_stone",0],[6,1,6,"cobblestone",0],[7,1,1,"oak_log",0],[7,1,2,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"oak_log",0],[1,2,1,"oak_log",0],[1,2,2,"cobblestone",0],[1,2,5,"cobblestone",0],[1,2,6,"oak_log",0],[2,2,1,"oak_log",0],[2,2,6,"cobblestone",0],[3,2,5,"cobblestone",0],[3,2,6,"cobblestone",0],[4,2,1,"oak_log",0],[4,2,6,"bricks",0],[5,2,5,"cobblestone",0],[5,2,6,"cobblestone",0],[6,2,1,"oak_log",0],[6,2,6,"cobblestone",0],[7,2,1,"oak_log",0],[7,2,2,"oak_log",0],[7,2,5,"oak_log",0],[7,2,6,"oak_log",0],[1,3,1,"oak_log",0],[1,3,2,"cobblestone",0],[1,3,3,"cobblestone",0],[1,3,4,"cobblestone",0],[1,3,5,"cobblestone",0],[1,3,6,"oak_log",0],[2,3,1,"cobblestone",0],[2,3,6,"cobblestone",0],[3,3,1,"cobblestone",0],[3,3,6,"cobblestone",0],[4,3,1,"cobblestone",0],[4,3,5,"cobblestone",0],[4,3,6,"cobblestone",0],[5,3,1,"cobblestone",0],[5,3,6,"cobblestone",0],[6,3,1,"cobblestone",0],[6,3,6,"cobblestone",0],[7,3,1,"oak_log",0],[7,3,2,"cobblestone",0],[7,3,3,"cobblestone",0],[7,3,4,"cobblestone",0],[7,3,5,"cobblestone",0],[7,3,6,"oak_log",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[4,4,6,"cobblestone",0],[7,4,2,"cobblestone",0],[7,4,3,"cobblestone",0],[7,4,4,"cobblestone",0],[7,4,5,"cobblestone",0],[1,5,3,"cobblestone",0],[1,5,4,"cobblestone",0],[4,5,6,"cobblestone",0],[7,5,3,"cobblestone",0],[7,5,4,"cobblestone",0],[4,6,6,"cobblestone",0],[0,0,3,"cobblestone_stairs",0],[1,1,3,"oak_planks",0],[1,1,4,"oak_planks",0],[0,2,2,"torch",3.14159],[0,2,5,"torch",3.14159],[1,2,3,"oak_planks",0],[1,2,4,"oak_planks",0],[3,2,1,"glass",0],[3,2,7,"cobblestone_stairs",0],[4,2,2,"torch",-1.5708],[4,2,7,"cobblestone_stairs",1.5708],[5,2,1,"glass",0],[5,2,7,"cobblestone_stairs",3.14159],[7,2,3,"glass",0],[7,2,4,"glass",0],[0,3,0,"oak_stairs",-1.5708],[0,3,1,"oak_stairs",1.5708],[0,3,6,"oak_stairs",-1.5708],[0,3,7,"oak_stairs",1.5708],[1,3,0,"oak_stairs",-1.5708],[1,3,7,"oak_stairs",1.5708],[2,3,0,"oak_stairs",-1.5708],[2,3,7,"oak_stairs",3.14159],[3,3,0,"oak_stairs",-1.5708],[3,3,5,"cobblestone_stairs",0],[3,3,7,"oak_slab",0],[4,3,0,"oak_stairs",-1.5708],[4,3,7,"oak_slab",0],[5,3,0,"oak_stairs",-1.5708],[5,3,5,"cobblestone_stairs",3.14159],[5,3,7,"oak_slab",0],[6,3,0,"oak_stairs",-1.5708],[6,3,7,"oak_stairs",0],[7,3,0,"oak_stairs",-1.5708],[7,3,7,"oak_stairs",1.5708],[8,3,0,"oak_stairs",-1.5708],[8,3,1,"oak_stairs",1.5708],[8,3,6,"oak_stairs",-1.5708],[8,3,7,"oak_stairs",1.5708],[0,4,1,"oak_stairs",-1.5708],[0,4,2,"oak_stairs",1.5708],[0,4,5,"oak_stairs",-1.5708],[0,4,6,"oak_stairs",1.5708],[1,4,1,"oak_stairs",-1.5708],[1,4,6,"oak_stairs",1.5708],[2,4,1,"oak_stairs",-1.5708],[2,4,5,"torch",1.5708],[2,4,6,"oak_stairs",1.5708],[3,4,1,"oak_stairs",-1.5708],[3,4,6,"oak_stairs",1.5708],[4,4,1,"oak_stairs",-1.5708],[4,4,5,"cobblestone_stairs",-1.5708],[5,4,1,"oak_stairs",-1.5708],[5,4,6,"oak_stairs",1.5708],[6,4,1,"oak_stairs",-1.5708],[6,4,5,"torch",1.5708],[6,4,6,"oak_stairs",1.5708],[7,4,1,"oak_stairs",-1.5708],[7,4,6,"oak_stairs",1.5708],[8,4,1,"oak_stairs",-1.5708],[8,4,2,"oak_stairs",1.5708],[8,4,5,"oak_stairs",-1.5708],[8,4,6,"oak_stairs",1.5708],[0,5,2,"oak_stairs",-1.5708],[0,5,3,"oak_stairs",1.5708],[0,5,4,"oak_stairs",-1.5708],[0,5,5,"oak_stairs",1.5708],[1,5,2,"oak_stairs",-1.5708],[1,5,5,"oak_stairs",1.5708],[2,5,2,"oak_stairs",-1.5708],[2,5,5,"oak_stairs",1.5708],[3,5,2,"oak_stairs",-1.5708],[3,5,5,"oak_stairs",1.5708],[4,5,2,"oak_stairs",-1.5708],[4,5,5,"oak_stairs",1.5708],[5,5,2,"oak_stairs",-1.5708],[5,5,5,"oak_stairs",1.5708],[6,5,2,"oak_stairs",-1.5708],[6,5,5,"oak_stairs",1.5708],[7,5,2,"oak_stairs",-1.5708],[7,5,5,"oak_stairs",1.5708],[8,5,2,"oak_stairs",-1.5708],[8,5,3,"oak_stairs",1.5708],[8,5,4,"oak_stairs",-1.5708],[8,5,5,"oak_stairs",1.5708],[0,6,3,"oak_stairs",-1.5708],[0,6,4,"oak_stairs",1.5708],[1,6,3,"oak_stairs",-1.5708],[1,6,4,"oak_stairs",1.5708],[2,6,3,"oak_stairs",-1.5708],[2,6,4,"oak_stairs",1.5708],[3,6,3,"oak_stairs",-1.5708],[3,6,4,"oak_stairs",1.5708],[4,6,3,"oak_stairs",-1.5708],[4,6,4,"oak_stairs",1.5708],[5,6,3,"oak_stairs",-1.5708],[5,6,4,"oak_stairs",1.5708],[6,6,3,"oak_stairs",-1.5708],[6,6,4,"oak_stairs",1.5708],[7,6,3,"oak_stairs",-1.5708],[7,6,4,"oak_stairs",1.5708],[8,6,3,"oak_stairs",-1.5708],[8,6,4,"oak_stairs",1.5708],[4,7,6,"cobblestone_wall",0],[0,0,4,"cobblestone",0],[4,1,6,"blast_furnace",1.5708]]},Rg={size:[9,8,11],blocks:[[1,0,0,"cobblestone",0],[1,0,1,"cobblestone",0],[1,0,2,"cobblestone",0],[1,0,3,"cobblestone",0],[1,0,4,"cobblestone",0],[1,0,5,"cobblestone",0],[1,0,6,"oak_log",0],[1,0,7,"cobblestone",0],[1,0,8,"cobblestone",0],[1,0,9,"oak_log",0],[2,0,0,"cobblestone",0],[2,0,1,"cobblestone",0],[2,0,2,"cobblestone",0],[2,0,3,"cobblestone",0],[2,0,4,"cobblestone",0],[2,0,5,"cobblestone",0],[2,0,6,"cobblestone",0],[2,0,7,"cobblestone",0],[2,0,8,"cobblestone",0],[2,0,9,"cobblestone",0],[3,0,0,"cobblestone",0],[3,0,1,"cobblestone",0],[3,0,2,"cobblestone",0],[3,0,3,"cobblestone",0],[3,0,4,"cobblestone",0],[3,0,5,"cobblestone",0],[3,0,6,"cobblestone",0],[3,0,7,"cobblestone",0],[3,0,8,"cobblestone",0],[3,0,9,"cobblestone",0],[4,0,0,"cobblestone",0],[4,0,1,"cobblestone",0],[4,0,2,"cobblestone",0],[4,0,3,"cobblestone",0],[4,0,4,"cobblestone",0],[4,0,5,"cobblestone",0],[4,0,6,"cobblestone",0],[4,0,7,"cobblestone",0],[4,0,8,"cobblestone",0],[4,0,9,"cobblestone",0],[5,0,0,"cobblestone",0],[5,0,1,"cobblestone",0],[5,0,2,"cobblestone",0],[5,0,3,"cobblestone",0],[5,0,4,"cobblestone",0],[5,0,5,"cobblestone",0],[5,0,6,"cobblestone",0],[5,0,7,"cobblestone",0],[5,0,8,"cobblestone",0],[5,0,9,"cobblestone",0],[6,0,0,"cobblestone",0],[6,0,1,"cobblestone",0],[6,0,2,"cobblestone",0],[6,0,3,"cobblestone",0],[6,0,4,"cobblestone",0],[6,0,5,"cobblestone",0],[6,0,6,"cobblestone",0],[6,0,7,"cobblestone",0],[6,0,8,"cobblestone",0],[6,0,9,"cobblestone",0],[7,0,0,"cobblestone",0],[7,0,1,"cobblestone",0],[7,0,2,"cobblestone",0],[7,0,3,"cobblestone",0],[7,0,4,"cobblestone",0],[7,0,5,"cobblestone",0],[7,0,6,"oak_log",0],[7,0,7,"cobblestone",0],[7,0,8,"cobblestone",0],[7,0,9,"oak_log",0],[1,1,6,"oak_log",0],[1,1,7,"oak_planks",0],[1,1,8,"oak_planks",0],[1,1,9,"oak_log",0],[2,1,9,"oak_planks",0],[3,1,6,"oak_planks",0],[3,1,9,"oak_planks",0],[4,1,3,"cobblestone",0],[4,1,4,"cobblestone",0],[4,1,5,"oak_log",0],[4,1,9,"oak_planks",0],[5,1,0,"cobblestone",0],[5,1,1,"cobblestone",0],[5,1,2,"cobblestone",0],[5,1,3,"cobblestone",0],[5,1,9,"oak_planks",0],[6,1,0,"cobblestone",0],[6,1,3,"cobblestone",0],[6,1,8,"oak_planks",0],[6,1,9,"oak_planks",0],[7,1,0,"cobblestone",0],[7,1,1,"cobblestone",0],[7,1,2,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"oak_log",0],[7,1,7,"oak_planks",0],[7,1,8,"oak_planks",0],[7,1,9,"oak_log",0],[1,2,6,"oak_log",0],[1,2,7,"oak_planks",0],[1,2,8,"oak_planks",0],[1,2,9,"oak_log",0],[2,2,9,"oak_planks",0],[3,2,6,"oak_planks",0],[4,2,4,"cobblestone",0],[4,2,5,"oak_log",0],[4,2,9,"oak_planks",0],[5,2,3,"cobblestone",0],[6,2,3,"cobblestone",0],[6,2,9,"oak_planks",0],[7,2,0,"cobblestone",0],[7,2,1,"cobblestone",0],[7,2,2,"cobblestone",0],[7,2,3,"oak_log",0],[7,2,5,"oak_log",0],[7,2,6,"oak_log",0],[7,2,7,"oak_planks",0],[7,2,8,"oak_planks",0],[7,2,9,"oak_log",0],[1,3,6,"oak_log",0],[1,3,7,"oak_planks",0],[1,3,8,"oak_planks",0],[1,3,9,"oak_log",0],[2,3,6,"oak_planks",0],[2,3,9,"oak_planks",0],[3,3,6,"oak_planks",0],[3,3,9,"oak_planks",0],[4,3,4,"cobblestone",0],[4,3,5,"oak_log",0],[4,3,9,"oak_planks",0],[5,3,0,"cobblestone",0],[5,3,1,"cobblestone",0],[5,3,2,"cobblestone",0],[5,3,3,"cobblestone",0],[5,3,9,"oak_planks",0],[6,3,0,"cobblestone",0],[6,3,1,"cobblestone",0],[6,3,2,"cobblestone",0],[6,3,3,"cobblestone",0],[6,3,9,"oak_planks",0],[7,3,0,"cobblestone",0],[7,3,1,"cobblestone",0],[7,3,2,"cobblestone",0],[7,3,3,"cobblestone",0],[7,3,4,"cobblestone",0],[7,3,5,"cobblestone",0],[7,3,6,"oak_log",0],[7,3,7,"oak_planks",0],[7,3,8,"oak_planks",0],[7,3,9,"oak_log",0],[1,4,0,"cobblestone",0],[1,4,1,"cobblestone",0],[1,4,2,"cobblestone",0],[1,4,3,"cobblestone",0],[1,4,4,"cobblestone",0],[1,4,5,"cobblestone",0],[1,4,6,"oak_log",0],[1,4,7,"oak_log",0],[1,4,8,"oak_log",0],[1,4,9,"oak_log",0],[2,4,0,"cobblestone",0],[2,4,1,"cobblestone",0],[2,4,2,"cobblestone",0],[2,4,3,"cobblestone",0],[2,4,4,"cobblestone",0],[2,4,5,"cobblestone",0],[2,4,6,"cobblestone",0],[2,4,7,"cobblestone",0],[2,4,8,"cobblestone",0],[2,4,9,"oak_log",0],[3,4,0,"cobblestone",0],[3,4,1,"cobblestone",0],[3,4,2,"cobblestone",0],[3,4,3,"cobblestone",0],[3,4,4,"cobblestone",0],[3,4,5,"cobblestone",0],[3,4,6,"cobblestone",0],[3,4,7,"cobblestone",0],[3,4,8,"cobblestone",0],[3,4,9,"oak_log",0],[4,4,0,"cobblestone",0],[4,4,1,"cobblestone",0],[4,4,2,"cobblestone",0],[4,4,3,"cobblestone",0],[4,4,4,"cobblestone",0],[4,4,5,"cobblestone",0],[4,4,6,"cobblestone",0],[4,4,7,"cobblestone",0],[4,4,8,"cobblestone",0],[4,4,9,"oak_log",0],[5,4,0,"cobblestone",0],[5,4,1,"cobblestone",0],[5,4,2,"cobblestone",0],[5,4,3,"cobblestone",0],[5,4,4,"cobblestone",0],[5,4,5,"cobblestone",0],[5,4,6,"cobblestone",0],[5,4,7,"cobblestone",0],[5,4,8,"cobblestone",0],[5,4,9,"oak_log",0],[6,4,0,"cobblestone",0],[6,4,1,"cobblestone",0],[6,4,2,"cobblestone",0],[6,4,3,"cobblestone",0],[6,4,4,"cobblestone",0],[6,4,5,"cobblestone",0],[6,4,6,"cobblestone",0],[6,4,7,"cobblestone",0],[6,4,8,"cobblestone",0],[6,4,9,"oak_log",0],[7,4,0,"cobblestone",0],[7,4,1,"cobblestone",0],[7,4,2,"cobblestone",0],[7,4,3,"cobblestone",0],[7,4,4,"cobblestone",0],[7,4,5,"cobblestone",0],[7,4,6,"oak_log",0],[7,4,7,"oak_log",0],[7,4,8,"oak_log",0],[7,4,9,"oak_log",0],[1,5,6,"oak_log",0],[1,5,7,"oak_planks",0],[1,5,8,"oak_planks",0],[1,5,9,"oak_log",0],[2,5,9,"oak_planks",0],[3,5,9,"oak_planks",0],[4,5,9,"oak_planks",0],[5,5,9,"oak_planks",0],[6,5,1,"cobblestone",0],[6,5,2,"cobblestone",0],[6,5,9,"oak_planks",0],[7,5,6,"oak_log",0],[7,5,7,"oak_planks",0],[7,5,8,"oak_planks",0],[7,5,9,"oak_log",0],[1,6,7,"oak_planks",0],[1,6,8,"oak_planks",0],[7,6,7,"oak_planks",0],[7,6,8,"oak_planks",0],[0,0,1,"cobblestone_stairs",0],[0,0,2,"cobblestone_stairs",0],[1,1,0,"oak_fence",0],[1,1,4,"oak_fence",0],[2,1,1,"grindstone",0],[2,1,6,"oak_planks",-1.5708],[5,1,7,"oak_fence",0],[5,1,8,"oak_stairs",-1.5708],[6,1,1,"magma_block",0],[6,1,2,"magma_block",0],[6,1,7,"oak_stairs",0],[1,2,0,"oak_fence",0],[1,2,4,"oak_fence",0],[2,2,6,"oak_planks",-1.5708],[3,2,5,"torch",1.5708],[3,2,9,"glass",0],[4,2,10,"torch",-1.5708],[5,2,0,"cobblestone",0],[5,2,7,"oak_pressure_plate",0],[5,2,9,"glass",0],[6,2,0,"cobblestone",0],[6,2,8,"torch",3.14159],[7,2,4,"glass",0],[8,2,1,"torch",0],[1,3,0,"oak_fence",0],[1,3,4,"oak_fence",0],[0,5,5,"oak_stairs",-1.5708],[0,5,6,"oak_stairs",1.5708],[0,5,9,"oak_stairs",-1.5708],[0,5,10,"oak_stairs",1.5708],[1,5,0,"stone_slab",0],[1,5,1,"stone_slab",0],[1,5,2,"stone_slab",0],[1,5,3,"stone_slab",0],[1,5,4,"stone_slab",0],[1,5,5,"oak_stairs",-1.5708],[1,5,10,"oak_stairs",1.5708],[2,5,0,"stone_slab",0],[2,5,5,"oak_stairs",-1.5708],[2,5,10,"oak_stairs",1.5708],[3,5,0,"stone_slab",0],[3,5,5,"oak_stairs",-1.5708],[3,5,10,"oak_stairs",1.5708],[4,5,0,"stone_slab",0],[4,5,3,"torch",0],[4,5,5,"oak_stairs",-1.5708],[4,5,10,"oak_stairs",1.5708],[5,5,0,"stone_slab",0],[5,5,5,"oak_stairs",-1.5708],[5,5,10,"oak_stairs",1.5708],[6,5,0,"stone_slab",0],[6,5,5,"oak_stairs",-1.5708],[6,5,10,"oak_stairs",1.5708],[7,5,0,"stone_slab",0],[7,5,1,"stone_slab",0],[7,5,2,"stone_slab",0],[7,5,3,"stone_slab",0],[7,5,4,"stone_slab",0],[7,5,5,"oak_stairs",-1.5708],[7,5,10,"oak_stairs",1.5708],[8,5,5,"oak_stairs",-1.5708],[8,5,6,"oak_stairs",1.5708],[8,5,9,"oak_stairs",-1.5708],[8,5,10,"oak_stairs",1.5708],[0,6,6,"oak_stairs",-1.5708],[0,6,7,"oak_stairs",1.5708],[0,6,8,"oak_stairs",-1.5708],[0,6,9,"oak_stairs",1.5708],[1,6,6,"oak_stairs",-1.5708],[1,6,9,"oak_stairs",1.5708],[2,6,6,"oak_stairs",-1.5708],[2,6,9,"oak_stairs",1.5708],[3,6,6,"oak_stairs",-1.5708],[3,6,9,"oak_stairs",1.5708],[4,6,6,"oak_stairs",-1.5708],[4,6,9,"oak_stairs",1.5708],[5,6,6,"oak_stairs",-1.5708],[5,6,9,"oak_stairs",1.5708],[6,6,1,"cobblestone_wall",0],[6,6,6,"oak_stairs",-1.5708],[6,6,9,"oak_stairs",1.5708],[7,6,6,"oak_stairs",-1.5708],[7,6,9,"oak_stairs",1.5708],[8,6,6,"oak_stairs",-1.5708],[8,6,7,"oak_stairs",1.5708],[8,6,8,"oak_stairs",-1.5708],[8,6,9,"oak_stairs",1.5708],[0,7,7,"oak_stairs",-1.5708],[0,7,8,"oak_stairs",1.5708],[1,7,7,"oak_stairs",-1.5708],[1,7,8,"oak_stairs",1.5708],[2,7,7,"oak_stairs",-1.5708],[2,7,8,"oak_stairs",1.5708],[3,7,7,"oak_stairs",-1.5708],[3,7,8,"oak_stairs",1.5708],[4,7,7,"oak_stairs",-1.5708],[4,7,8,"oak_stairs",1.5708],[5,7,7,"oak_stairs",-1.5708],[5,7,8,"oak_stairs",1.5708],[6,7,7,"oak_stairs",-1.5708],[6,7,8,"oak_stairs",1.5708],[7,7,7,"oak_stairs",-1.5708],[7,7,8,"oak_stairs",1.5708],[8,7,7,"oak_stairs",-1.5708],[8,7,8,"oak_stairs",1.5708],[0,0,3,"cobblestone",0],[6,1,4,"chest",-1.5708],[4,2,3,"furnace",3.14159],[4,3,3,"furnace",3.14159]]},Cg={size:[16,2,16],blocks:[[7,0,0,"dirt_path",0],[7,0,1,"dirt_path",0],[7,0,2,"dirt_path",0],[7,0,3,"dirt_path",0],[7,0,4,"dirt_path",0],[7,0,5,"dirt_path",0],[7,0,6,"dirt_path",0],[7,0,7,"dirt_path",0],[7,0,8,"dirt_path",0],[7,0,9,"dirt_path",0],[7,0,10,"dirt_path",0],[7,0,11,"dirt_path",0],[7,0,12,"dirt_path",0],[7,0,13,"dirt_path",0],[7,0,14,"dirt_path",0],[7,0,15,"dirt_path",0],[8,0,0,"dirt_path",0],[8,0,1,"dirt_path",0],[8,0,2,"dirt_path",0],[8,0,3,"dirt_path",0],[8,0,4,"dirt_path",0],[8,0,5,"dirt_path",0],[8,0,6,"dirt_path",0],[8,0,7,"dirt_path",0],[8,0,8,"dirt_path",0],[8,0,9,"dirt_path",0],[8,0,10,"dirt_path",0],[8,0,11,"dirt_path",0],[8,0,12,"dirt_path",0],[8,0,13,"dirt_path",0],[8,0,14,"dirt_path",0],[8,0,15,"dirt_path",0],[9,0,0,"dirt_path",0],[9,0,1,"dirt_path",0],[9,0,2,"dirt_path",0],[9,0,3,"dirt_path",0],[9,0,4,"dirt_path",0],[9,0,5,"dirt_path",0],[9,0,6,"dirt_path",0],[9,0,7,"dirt_path",0],[9,0,8,"dirt_path",0],[9,0,9,"dirt_path",0],[9,0,10,"dirt_path",0],[9,0,11,"dirt_path",0],[9,0,12,"dirt_path",0],[9,0,13,"dirt_path",0],[9,0,14,"dirt_path",0],[9,0,15,"dirt_path",0],[10,0,7,"dirt_path",0],[10,0,8,"dirt_path",0],[10,0,9,"dirt_path",0],[11,0,7,"dirt_path",0],[11,0,8,"dirt_path",0],[11,0,9,"dirt_path",0],[12,0,7,"dirt_path",0],[12,0,8,"dirt_path",0],[12,0,9,"dirt_path",0],[13,0,7,"dirt_path",0],[13,0,8,"dirt_path",0],[13,0,9,"dirt_path",0],[14,0,7,"dirt_path",0],[14,0,8,"dirt_path",0],[14,0,9,"dirt_path",0],[15,0,7,"dirt_path",0],[15,0,8,"dirt_path",0],[15,0,9,"dirt_path",0],[13,0,12,"cobblestone",0],[7,1,3,"cobblestone",0],[7,1,4,"cobblestone",0],[7,1,5,"cobblestone",0],[7,1,6,"cobblestone",0],[7,1,7,"cobblestone",0],[7,1,11,"cobblestone",0],[7,1,12,"cobblestone",0],[8,1,0,"cobblestone",0],[8,1,15,"cobblestone",0],[9,1,3,"cobblestone",0],[9,1,4,"cobblestone",0],[15,1,8,"cobblestone",0]]},lo={outpost:gg,portal:bg,igloo:kg,shipwreck:vg,trail:xg,mansion:yg,village_house:Mg,village_library:Sg,village_butcher:wg,village_stable:Eg,village_fountain:Tg,village_armorer:Ag,village_weaponsmith:Rg,village_crossroad:Cg},bs={width:.62,height:1.72,eye:1.58},Lg=30,Pg=6.4,Dg=9.4,Ig=10.4,Ug=16,Ng=5,Jd=.0022,Qd=2.3,Kr=2.6,Fg=-7,Og=.28,Pe={teal:6547157,yellow:16765286,coral:16735309,blue:7645183,purple:11766783,lime:10215773,white:16055295,gold:16763196,lava:16730655},ai=(n,e,t)=>Math.min(t,Math.max(e,n));function Ji(n){if(n==null||!Number.isFinite(n))return"–";const e=Math.max(0,n),t=Math.floor(e/60),o=(e-t*60).toFixed(1).padStart(4,"0");return`${String(t).padStart(2,"0")}:${o}`}function Jr(n,{color:e="#ffffff",background:t="rgba(10, 20, 30, .72)",accent:i="#ffd166"}={}){const o=document.createElement("canvas");o.width=512,o.height=128;const s=o.getContext("2d");s.fillStyle=t,s.beginPath(),s.roundRect(8,26,496,76,26),s.fill(),s.strokeStyle=i,s.lineWidth=4,s.stroke(),s.font='700 44px "Trebuchet MS", "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillStyle=e,s.fillText(n,256,66);const a=new os(o);a.colorSpace=Ft,a.anisotropy=4;const r=new Fu(new _c({map:a,transparent:!0,depthWrite:!1}));return r.scale.set(3.4,.85,1),r}function Bg(n,{accent:e="#8ecbff"}={}){const t=document.createElement("canvas");t.width=1024,t.height=256;const i=t.getContext("2d");i.fillStyle="rgba(8, 16, 24, .62)",i.beginPath(),i.roundRect(16,40,992,176,40),i.fill(),i.strokeStyle=e,i.lineWidth=6,i.stroke(),i.font='700 88px "Trebuchet MS", "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ffffff",i.fillText(n,512,128);const o=new os(t);o.colorSpace=Ft,o.anisotropy=4;const s=new St(new ss(9,2.25),new is({map:o,transparent:!0,depthWrite:!1,side:Hn}));return s.rotation.x=-Math.PI/2,s}function In(n,e,t,i,o=0,s=0){const a=new Ct(n,e,t),r=new ci({color:i,roughness:.56,metalness:.04,emissive:o,emissiveIntensity:s}),l=new St(a,r);return l.castShadow=!1,l.receiveShadow=!1,l}function zg({canvas:n,renderer:e,getBest:t,onFinish:i,onExit:o,onlineCount:s=12}){const a=new pc,r=new st(9358335);a.background=r,a.fog=new $s(r.clone(),70,260);const l=new Mn(76,innerWidth/innerHeight,.08,400);l.rotation.order="YXZ";const d=[{name:"Sunny Sprint",sky:9358335,fog:10474495,hemiSky:14676479,hemiGround:4938339,hemi:1.65,sun:16774366,sunPower:2.15,cloud:16777215,palette:[Pe.teal,Pe.lime,Pe.yellow,Pe.purple,Pe.blue,Pe.coral],spawn:Pe.white,trim:Pe.coral,checkpoint:Pe.blue,accent:"#8ecbff",startLine:Pe.teal},{name:"Sunset Ridge",sky:16096098,fog:16298876,hemiSky:16766648,hemiGround:6044206,hemi:1.5,sun:16760954,sunPower:2.3,cloud:16770255,palette:[Pe.coral,Pe.yellow,Pe.gold,16747586,Pe.teal,Pe.purple],spawn:16773346,trim:16742973,checkpoint:16754253,accent:"#ffb066",startLine:Pe.yellow},{name:"Neon Night",sky:1448755,fog:2041671,hemiSky:5201310,hemiGround:1053471,hemi:.95,sun:12174591,sunPower:1.25,cloud:3752043,palette:[Pe.teal,Pe.purple,Pe.blue,16735472,Pe.lime,Pe.yellow],spawn:2831189,trim:16735472,checkpoint:8215807,accent:"#a78bfa",startLine:8119243},{name:"Toxic Wastes",sky:10473066,fog:11787390,hemiSky:15138767,hemiGround:4148522,hemi:1.6,sun:15925206,sunPower:2.2,cloud:15794144,palette:[Pe.lime,11985738,Pe.teal,Pe.yellow,7319098,Pe.coral],spawn:15004364,trim:6064686,checkpoint:9425231,accent:"#a3e635",startLine:Pe.lime},{name:"Candy Clouds",sky:16762594,fog:16767212,hemiSky:16773368,hemiGround:7030369,hemi:1.7,sun:16770802,sunPower:2.1,cloud:16774907,palette:[16752331,Pe.purple,Pe.yellow,Pe.teal,16740264,Pe.blue],spawn:16774394,trim:16740264,checkpoint:13992191,accent:"#ff9ecb",startLine:16752331},{name:"Void Ascent",sky:2760509,fog:3615311,hemiSky:9206456,hemiGround:1709092,hemi:1.05,sun:14207231,sunPower:1.4,cloud:4865385,palette:[Pe.purple,Pe.blue,Pe.teal,16743129,Pe.lime,Pe.yellow],spawn:3878741,trim:16743129,checkpoint:10980346,accent:"#c4b5fd",startLine:11766783}];let c=d[0];const u=new kc(14676479,4938339,1.65);a.add(u);const f=new Fs(16774366,2.15);f.position.set(24,46,18),a.add(f);const _=new Fs(9425919,.9);_.position.set(-30,22,-40),a.add(_);const g=[],b=[],m=[],p=[];let E=1,A=null,w=new F(0,.06,4.5),N=null,D=null,C=null,O=null,S=new rn;a.add(S);function M(h){let v=h>>>0;return function(){v=v+1831565813|0;let T=Math.imul(v^v>>>15,1|v);return T=T+Math.imul(T^T>>>7,61|T)^T,((T^T>>>14)>>>0)/4294967296}}function P(h){for(h.traverse(v=>{if(v.geometry&&v.geometry.dispose(),v.material){const L=Array.isArray(v.material)?v.material:[v.material];for(const T of L)T.map&&T.map.dispose(),T.dispose()}});h.children.length;)h.remove(h.children[0])}function q({x:h=0,z:v=0,top:L=0,w:T=3,d:z=3,h:Q=1.1,color:ce=Pe.teal,emissive:de=0,emissiveIntensity:Ce=.25,move:Fe=null}){const fe={x:h,z:v,top:L,w:T,d:z,h:Q,color:ce,baseX:h,baseY:L-Q/2,baseZ:v,move:Fe,prev:new F,delta:new F,mesh:In(T,Q,z,ce,de||ce,Ce)};return fe.mesh.position.set(h,L-Q/2,v),S.add(fe.mesh),fe.minX=h-T/2,fe.maxX=h+T/2,fe.minY=L-Q,fe.maxY=L,fe.minZ=v-z/2,fe.maxZ=v+z/2,fe.prev.set(h,L-Q/2,v),g.push(fe),fe}function W({x:h=0,z:v=0,y:L=0,w:T=10,h:z=2,d:Q=10,color:ce=Pe.lava}){const de=In(T,z,Q,ce,ce,.9);de.position.set(h,L,v),S.add(de),b.push({minX:h-T/2,maxX:h+T/2,minY:L-z/2,maxY:L+z/2,minZ:v-Q/2,maxZ:v+Q/2})}function Z(h,v){const L=new St(new Ns(1.15,.11,10,32),new ci({color:Pe.yellow,emissive:Pe.yellow,emissiveIntensity:.9,roughness:.4}));L.rotation.x=-Math.PI/2,L.position.set(v.x,v.top+.09,v.z),S.add(L);const T=In(.32,3.4,.32,Pe.yellow,Pe.yellow,.85);T.position.set(v.x,v.top+1.7,v.z),S.add(T);const z=Jr(`CHECKPOINT ${h}`,{accent:"#ffd166"});z.position.set(v.x,v.top+3.4,v.z),S.add(z),m.push({index:h,platform:v,x:v.x,z:v.z,top:v.top,ring:L,beam:T,label:z,respawn:new F(v.x,v.top+.06,v.z)})}function J(h,v){const L=In(9,.1,.55,v.startLine,v.startLine,.8);L.position.set(h.x,h.top+.09,h.z+1.2),S.add(L);for(const[z,Q,ce,de]of[[0,-7.7,15,.5],[0,7.7,15,.5],[-7.7,0,.5,15],[7.7,0,.5,15]]){const Ce=In(ce,.16,de,v.trim,v.trim,.45);Ce.position.set(h.x+z,h.top+.06,h.z+Q),S.add(Ce)}D=new St(new Ns(1.2,.09,10,32),new ci({color:Pe.yellow,emissive:Pe.yellow,emissiveIntensity:.75,roughness:.45})),D.rotation.x=-Math.PI/2,D.position.set(h.x,h.top+.08,h.z+.6),S.add(D);const T=Bg(`LEVEL ${E} · ${v.name}`,{accent:v.accent});T.position.set(h.x,h.top+.04,h.z-1.6),S.add(T),C=new St(new gc(.65,1.3,4),new ci({color:Pe.yellow,emissive:Pe.yellow,emissiveIntensity:.7,roughness:.4})),C.position.set(h.x,h.top+1.2,h.z-5.6),C.rotation.x=Math.PI/2,S.add(C)}function K(h){for(const T of[-1,1]){const z=In(.9,5.4,.9,Pe.coral,Pe.coral,.4);z.position.set(h.x+T*4.1,h.top+2.7,h.z-4.5),S.add(z)}const v=In(9.4,1.5,.6,Pe.coral,Pe.coral,.5);v.position.set(h.x,h.top+5.5,h.z-4.5),S.add(v);const L=Jr("FINISH",{accent:"#ff5c4d"});L.scale.set(4.6,1.15,1),L.position.set(h.x,h.top+7.1,h.z-4.5),S.add(L),O=new St(new er(Kr*.62,Kr*.62,.12,36),new ci({color:Pe.gold,emissive:Pe.gold,emissiveIntensity:.7,roughness:.4})),O.position.set(h.x,h.top+.07,h.z),S.add(O),A={x:h.x,z:h.z,top:h.top,radius:Kr}}const B=[],V=[Pe.teal,Pe.yellow,Pe.coral,Pe.blue,Pe.purple,Pe.lime];for(let h=0;h<26;h++){const v=.6+h%5*.35,L=In(1.6+h%4,1.6+h%3,1.6+h%2,V[h%V.length],0,0),T=h/26*Math.PI*2,z=34+h%6*11;L.position.set(Math.cos(T)*z,8+h%7*5.5,-40+Math.sin(T)*z),L.rotation.set(h*.4,h*.7,h*.2),a.add(L),B.push({mesh:L,spin:.04+v*.02,baseY:L.position.y})}for(let h=0;h<9;h++){const v=In(6+h%4*2,1.1,3+h%3,16777215,10467273,.05);v.material.transparent=!0,v.material.opacity=.85,v.position.set(-70+h*17,13+h%4*6,24-h%5*22),a.add(v),B.push({mesh:v,drift:.6+h%3*.3,baseY:v.position.y,baseX:v.position.x,cloud:!0})}function ue(h){return h.platform?{x:h.platform.mesh.position.x+(h.dx||0),y:h.platform.maxY,z:h.platform.mesh.position.z+(h.dz||0)}:h}function _e({name:h,shirt:v,accent:L,route:T,speed:z,startIndex:Q=0,direction:ce=1,hop:de=.9,missChance:Ce=.16,checkpoints:Fe=[0]}){if(!T.length)return null;const fe=new rn,Ye=In(.66,.9,.42,v,0,0);Ye.position.y=.95;const lt=In(.52,.52,.52,15778973,0,0);lt.position.y=1.68;const ut=(xt,en,tn,nn)=>{const Wt=new rn;Wt.position.y=nn;const fo=In(xt,en,xt*.95,tn,0,0);return fo.position.y=-en/2,Wt.add(fo),fe.add(Wt),Wt},ze=ut(.24,.62,3095383,.62);ze.position.x=-.16;const $e=ut(.24,.62,3095383,.62);$e.position.x=.16;const Ee=ut(.2,.52,v,1.32);Ee.position.x=-.45;const it=ut(.2,.52,v,1.32);it.position.x=.45,fe.add(Ye,lt);const ot=Jr(h,{accent:L});ot.position.y=2.28,ot.scale.set(1.9,.475,1),fe.add(ot);const Pt=Math.min(T.length-1,Math.max(0,Q)),Zt=ue(T[Pt]);fe.position.set(Zt.x,Zt.y,Zt.z),S.add(fe);const It={name:h,group:fe,route:T,speed:z,hop:de,index:Pt,next:Math.min(T.length-1,Pt+ce),direction:ce,t:0,from:new F(Zt.x,Zt.y,Zt.z),duration:.6,phase:Math.random()*Math.PI*2,legLeft:ze,legRight:$e,armLeft:Ee,armRight:it,distance:0,state:"run",miss:!1,missAt:0,missChance:Ce,checkpoints:Fe,vy:0,fallVx:0,fallVz:0,falls:0,respawnAt:0},$n=ue(T[It.next]);return It.distance=Math.hypot($n.x-Zt.x,$n.z-Zt.z),It.duration=Math.max(.28,It.distance/It.speed),p.push(It),It}function Ae(h,v){for(const L of g)if(h>=L.minX&&h<=L.maxX&&v>=L.minZ&&v<=L.maxZ)return!0;return!1}let Oe=-1/0;function Je(h){h.falls++;let v=h.checkpoints[0]??0;for(const Q of h.checkpoints)Q<=h.index&&(v=Q);const L=ue(h.route[v]);h.group.position.set(L.x,L.y,L.z),h.index=v,h.direction=1,h.next=Math.min(h.route.length-1,v+1),h.t=0,h.from.copy(h.group.position),h.state="run",h.miss=!1,h.vy=0;const T=ue(h.route[h.next]);h.distance=Math.hypot(T.x-L.x,T.z-L.z),h.duration=Math.max(.28,h.distance/h.speed);const z=h.checkpoints.indexOf(v);We-Oe>6&&(Oe=We,k(`${h.name} fell! · ${z>0?`back at checkpoint ${z}`:"back at the start"}`))}function j(h){h.index=h.next,(h.index+h.direction<0||h.index+h.direction>=h.route.length)&&(h.direction*=-1),h.next=Math.min(h.route.length-1,Math.max(0,h.index+h.direction)),h.t=0,h.from.copy(h.group.position);const v=ue(h.route[h.next]);h.distance=Math.hypot(v.x-h.from.x,v.z-h.from.z),h.duration=Math.max(.28,h.distance/h.speed);const L=(h.from.x+v.x)/2,T=(h.from.z+v.z)/2,z=h.distance>2&&!Ae(L,T);h.miss=z&&Math.random()<h.missChance,h.missAt=h.miss?.42+Math.random()*.28:0}function re(h,v){if(h.state==="falling"){h.vy-=30*v,h.group.position.x+=h.fallVx*v,h.group.position.z+=h.fallVz*v,h.group.position.y+=h.vy*v,h.phase+=v*14;const Ye=Math.sin(h.phase)*1.15;h.legLeft.rotation.x=Ye,h.legRight.rotation.x=-Ye,h.armLeft.rotation.x=-2.4,h.armRight.rotation.x=-2.4,h.group.position.y<-7&&Je(h);return}const L=ue(h.route[h.next]);if(h.t+=v/h.duration,h.miss&&h.t>=h.missAt&&!h.missed){h.missed=!0,h.state="falling",h.vy=.4;const Ye=L.x-h.from.x,lt=L.z-h.from.z,ut=Math.hypot(Ye,lt)||1;h.fallVx=Ye/ut*h.speed*.85,h.fallVz=lt/ut*h.speed*.85;return}if(h.t>=1){h.t=0,h.missed=!1,h.group.position.set(L.x,L.y,L.z),j(h);return}const T=h.t,z=h.from.x+(L.x-h.from.x)*T,Q=h.from.z+(L.z-h.from.z)*T,ce=h.from.y+(L.y-h.from.y)*T,de=Math.sin(Math.PI*T)*h.hop;h.group.position.set(z,ce+de,Q);const Ce=L.x-h.from.x,Fe=L.z-h.from.z;Math.abs(Ce)+Math.abs(Fe)>.001&&(h.group.rotation.y=Math.atan2(Ce,Fe)),h.phase+=v*(h.speed*2.4);const fe=Math.sin(h.phase)*.75;h.legLeft.rotation.x=fe,h.legRight.rotation.x=-fe,h.armLeft.rotation.x=-fe*.8,h.armRight.rotation.x=fe*.8}function De(){const h=g.map(T=>({platform:T})),v=[0,...m.map(T=>g.indexOf(T.platform)).filter(T=>T>0)],L=h.slice(0,Math.min(5,h.length));_e({name:"NoobMaster99",shirt:6547157,accent:"#63e6d5",route:L,speed:3.1,startIndex:1,direction:1,hop:.7,missChance:.15,checkpoints:[0]}),_e({name:"BlockBuilder",shirt:16765286,accent:"#ffd166",route:h,speed:3.7,startIndex:Math.min(2,h.length-1),direction:1,hop:.95,missChance:.07,checkpoints:v}),_e({name:"xX_Runner_Xx",shirt:16735309,accent:"#ff5c4d",route:h,speed:4.6,startIndex:Math.min(v[1]??2,h.length-1),direction:1,hop:1,missChance:.08,checkpoints:v})}function ke(h){E=Math.max(1,Math.floor(Number(h)||1)),P(S),g.length=0,b.length=0,m.length=0,p.length=0,A=null,O=null,D=null,C=null;const v=M(E*7919+104729|0),L=Math.min(1,(E-1)/12),T=3+Math.min(2,Math.floor((E-1)/3)),z=d[(E-1)%d.length];c=z,a.background.set(z.sky),a.fog.color.set(z.fog),a.fog.near=70,a.fog.far=260,u.color.set(z.hemiSky),u.groundColor.set(z.hemiGround),u.intensity=z.hemi,f.color.set(z.sun),f.intensity=z.sunPower,_.color.set(z.accent),_.intensity=.55+(z.sunPower-2)*.2,B.forEach(($e,Ee)=>{const it=$e.cloud?z.cloud:z.palette[Ee%z.palette.length];$e.mesh.material.color.set(it),$e.cloud||$e.mesh.material.emissive.set(it)}),N=q({x:0,z:0,top:0,w:16,d:16,h:1.6,color:z.spawn,emissive:z.trim,emissiveIntensity:.12}),w=new F(0,N.top+.06,4.5),J(N,z);let Q=0,ce=-8.5,de=0,Ce=4,Fe=0;const fe=()=>{const $e=ai(3.3-L*.9-v()*.4,2.2,3.3),Ee=$e/2,it=Math.sin(Fe*1.15+E*.7)*(.9+L*1.1);let ot=(v()*2-1)*(1+L*1.5)+it,Pt=Ce+Ee+1.1+v()*(.5+L*.6);const Zt=Math.hypot(ot,Pt);if(Zt>4.1){const tn=4.1/Zt;ot*=tn,Pt*=tn}const It=.15+v()*(.5+L*.25),$n=v()<.05+L*.45,xt=v()<.62?"x":"y",en=$n?{axis:xt,amp:xt==="y"?.5+v()*.6:Math.min(2.3,1.2+v()*(.9+L*.8)),speed:.9+v()*(.5+L*.7),phase:v()*Math.PI*2}:null;Q=ai(Q+ot,-15,15),ce-=Pt,de+=It,q({x:Q,z:ce,top:de,w:$e,d:$e,color:z.palette[Fe++%z.palette.length],move:en}),Ce=Ee};for(let $e=0;$e<T;$e++){const Ee=3+Math.min(4,Math.floor(L*4+v()*2));for(let Pt=0;Pt<Ee;Pt++)fe();const it=6.5;ce-=Ce+2+it/2,de+=.35,Q=ai(Q+(v()*2-1)*1.5,-13,13);const ot=q({x:Q,z:ce,top:de,w:it,d:it,color:z.checkpoint});Z(m.length+1,ot),$e>0&&W({x:ai(Q,-10,10),z:ce+10,y:.9,w:30,h:1.8,d:24}),Ce=it/2}const Ye=2+Math.min(3,Math.floor(L*3+v()*2));for(let $e=0;$e<Ye;$e++)fe();const lt=5;ce-=Ce+2.2+lt,de+=.5,Q=ai(Q+(v()*2-1)*1.2,-10,10);const ut=q({x:Q,z:ce,top:de,w:lt*2,d:lt*2,h:1.4,color:Pe.gold,emissive:Pe.gold,emissiveIntensity:.28});if(K(ut),De(),pe?.serverLabel){const $e=innerWidth<620;pe.serverLabel.textContent=$e?`L${E} · ${c.name}`:`Roblox Server · ${c.name} · Level ${E} · ${s} online`}const ze=document.querySelector(".parkour-server-line");ze&&(ze.textContent=`Parkour Obby · ${c.name} · Level ${E}`),Tt=t?.(E)??null,$()}const le=new Set,pe={screen:document.querySelector("#parkour-screen"),timer:document.querySelector("#parkour-timer"),checkpoints:document.querySelector("#parkour-checkpoints"),best:document.querySelector("#parkour-best-hud"),objective:document.querySelector("#parkour-objective"),toast:document.querySelector("#parkour-toast"),hint:document.querySelector("#parkour-click-hint"),pause:document.querySelector("#parkour-pause"),finish:document.querySelector("#parkour-finish"),finishTime:document.querySelector("#parkour-finish-time"),finishBest:document.querySelector("#parkour-finish-best"),finishTitle:document.querySelector("#parkour-finish-title"),serverLabel:document.querySelector("#parkour-server-label")},Ue=matchMedia("(pointer: coarse)").matches;let ae=!1,xe=!1,Ne=!1,R=!1,pt=!1,et=0,tt=0,we=0,at=0,Be=0,We=0,Tt=t?.()??null;const x={position:w.clone(),velocity:new F,yaw:0,pitch:-.05,onGround:!1,ground:null,jumpBuffer:0};function k(h){pe.toast&&(pe.toast.textContent=h,pe.toast.classList.add("show"),clearTimeout(we),we=setTimeout(()=>pe.toast.classList.remove("show"),2200))}function H(h,v){h&&(h.hidden=!v,h.style.display=v?"":"none")}function Y(){if(!pe.hint)return;const h=ae&&!Ue&&!pt&&!xe&&!Ne;pe.hint.hidden=!h,pe.hint.style.display=h?"":"none"}function ne(){return Ne?`Level ${E} complete!`:tt>=m.length?`Level ${E} · Reach the finish line`:tt===0?R?`Level ${E} · Reach checkpoint 1`:`Level ${E} · Move to start the timer`:`Checkpoint ${tt} reached · head for checkpoint ${tt+1}`}function $(){pe.timer&&(pe.timer.textContent=Ji(R||Ne?et:0)),pe.checkpoints&&(pe.checkpoints.textContent=`Checkpoint ${tt}/${m.length}`),pe.best&&(pe.best.textContent=`Best L${E} ${Tt!=null?Ji(Tt):"–"}`),pe.objective&&(pe.objective.textContent=ne())}function Le(h){R=h,$()}function me(){return tt>0?m[tt-1].respawn:w}function Me(h="You fell!"){at>0||(at=Og,x.position.copy(me()).add(new F(0,.1,.6)),x.velocity.set(0,0,0),x.onGround=!1,x.ground=null,k(`${h} · back to ${tt>0?`checkpoint ${tt}`:"the start"}`))}function Ie(){x.position.copy(w),x.velocity.set(0,0,0),x.yaw=0,x.pitch=-.05,x.onGround=!1,x.ground=null,x.jumpBuffer=0,et=0,We=0,tt=0,Ne=!1,xe=!1,R=!1,at=0,le.clear(),H(pe.pause,!1),H(pe.finish,!1),Tt=t?.(E)??null;for(const h of m)h.ring.visible=!0;$(),Y()}function ie(){!ae||xe||Ne||(xe=!0,le.clear(),H(pe.pause,!0),Y(),document.pointerLockElement===n&&document.exitPointerLock())}function ye(){!ae||!xe||(xe=!1,H(pe.pause,!1),Y(),Xe())}function qe(){Ie(),H(pe.pause,!1),H(pe.finish,!1),Y(),Xe()}function Ge(){Js(),o?.()}function he(){Ve||(Ve=!0,pe.hint&&(pe.hint.textContent="Drag to look · WASD to move"),k("Mouse capture blocked · drag to look around"),Y())}function Xe(){if(Ue||Ve)return;const h=performance.now();if(!(h-He<500)){He=h;try{const v=n.requestPointerLock();v?.catch?.(he),v||setTimeout(()=>{document.pointerLockElement!==n&&he()},350)}catch{he()}}}function U(){Ne=!0,xe=!1,R=!1,H(pe.pause,!1),Y(),document.pointerLockElement===n&&document.exitPointerLock();const h=i?.(E,et)||{isBest:!1,best:et};Tt=h.best,pe.finishTitle&&(pe.finishTitle.textContent=`Level ${E} Complete!`),pe.finishTime&&(pe.finishTime.textContent=Ji(et)),pe.finishBest&&(pe.finishBest.textContent=h.isBest?"New best time!":`Best ${Ji(h.best)}`),H(pe.finish,!0),$()}new F;function ge(h){for(const v of g){v.prev.copy(v.mesh.position);let L=0,T=0,z=0;if(v.move){const Q=Math.sin(h*v.move.speed+(v.move.phase||0))*v.move.amp;v.move.axis==="x"?L=Q:v.move.axis==="y"?T=Q:z=Q}v.mesh.position.set(v.baseX+L,v.baseY+T,v.baseZ+z),v.minX=v.baseX+L-v.w/2,v.maxX=v.baseX+L+v.w/2,v.minY=v.baseY+T-v.h/2,v.maxY=v.baseY+T+v.h/2,v.minZ=v.baseZ+z-v.d/2,v.maxZ=v.baseZ+z+v.d/2,v.delta.copy(v.mesh.position).sub(v.prev)}}function oe(){const h=bs.width/2;return{minX:x.position.x-h,maxX:x.position.x+h,minY:x.position.y,maxY:x.position.y+bs.height,minZ:x.position.z-h,maxZ:x.position.z+h}}function Se(h,v){return h.minX<v.maxX&&h.maxX>v.minX&&h.minY<v.maxY&&h.maxY>v.minY&&h.minZ<v.maxZ&&h.maxZ>v.minZ}function se(h,v){return h.minX<v.maxX&&h.maxX>v.minX&&h.minY<v.maxY&&h.maxY>v.minY&&h.minZ<v.maxZ&&h.maxZ>v.minZ}function ee(h,v,L){let T=null;for(const z of g){if(h<z.minX||h>z.maxX||v<z.minZ||v>z.maxZ)continue;const Q=L-z.maxY;Q>=-.35&&Q<=1.2&&(!T||z.maxY>T.maxY)&&(T=z)}return T}function Re(h){const v=bs.width/2,L=new F(-Math.sin(x.yaw),0,-Math.cos(x.yaw)),T=new F(Math.cos(x.yaw),0,-Math.sin(x.yaw)),z=new F;le.has("forward")&&z.add(L),le.has("back")&&z.sub(L),le.has("right")&&z.add(T),le.has("left")&&z.sub(T),z.lengthSq()>1&&z.normalize();const Q=le.has("sprint")?Dg:Pg,ce=z.x*Q,de=z.z*Q,Ce=x.onGround?Ug:Ng,Fe=ai(Ce*h,0,1);x.velocity.x+=(ce-x.velocity.x)*Fe,x.velocity.z+=(de-x.velocity.z)*Fe,z.lengthSq()>.01&&!R&&Le(!0),x.jumpBuffer>0&&(x.jumpBuffer-=h),le.has("jump")&&x.onGround&&(x.velocity.y=Ig,x.onGround=!1,x.ground=null,x.jumpBuffer=0,R||Le(!0)),x.velocity.y=Math.max(x.velocity.y-Lg*h,-26),x.ground&&x.position.add(x.ground.delta);const Ye=(ze,$e)=>{if(!$e)return;x.position[ze]+=$e;const Ee=oe();for(const it of g)Se(Ee,it)&&(ze==="x"?(x.position.x=$e>0?it.minX-v-.001:it.maxX+v+.001,x.velocity.x=0):ze==="z"&&(x.position.z=$e>0?it.minZ-v-.001:it.maxZ+v+.001,x.velocity.z=0),Ee.minX=x.position.x-v,Ee.maxX=x.position.x+v,Ee.minZ=x.position.z-v,Ee.maxZ=x.position.z+v)},lt=x.position.y;x.position.y+=x.velocity.y*h,x.onGround=!1,x.ground=null;let ut=oe();for(const ze of g)Se(ut,ze)&&(x.velocity.y<=0?(x.position.y=ze.maxY,x.velocity.y=0,x.onGround=!0,x.ground=ze):(x.position.y=ze.minY-bs.height-.001,x.velocity.y=0),ut=oe());if(Ye("x",x.velocity.x*h),Ye("z",x.velocity.z*h),!x.onGround&&x.velocity.y<=0){const ze=ee(x.position.x,x.position.z,lt);ze&&x.position.y<=ze.maxY+.08&&(x.position.y=ze.maxY,x.velocity.y=0,x.onGround=!0,x.ground=ze)}ut=oe();for(const ze of b)if(se(ut,ze)){Me("You touched the lava!");return}if(x.position.y<Fg){Me("You fell!");return}for(const ze of m)ze.index<=tt||Math.abs(x.position.x-ze.x)<Qd&&Math.abs(x.position.z-ze.z)<Qd&&Math.abs(x.position.y-ze.top)<1.6&&(tt=ze.index,ze.ring.material.color.set(Pe.teal),ze.ring.material.emissive.set(Pe.teal),ze.beam.material.color.set(Pe.teal),ze.beam.material.emissive.set(Pe.teal),k(`Checkpoint ${tt} reached!`),$());A&&!Ne&&Math.abs(x.position.x-A.x)<A.radius&&Math.abs(x.position.z-A.z)<A.radius&&Math.abs(x.position.y-A.top)<1.6&&U()}function Ke(h){const v=Math.hypot(x.velocity.x,x.velocity.z);x.onGround&&v>1&&(Be+=h*v*1.9);const L=x.onGround?Math.sin(Be)*.028:0;l.position.set(x.position.x,x.position.y+bs.eye+L,x.position.z),l.rotation.set(x.pitch,x.yaw,0)}const yt=h=>{if(!ae)return;const v=h.target?.tagName;if(!(v==="INPUT"||v==="TEXTAREA")){if(h.code==="Escape"){if(h.preventDefault(),Ne)return;xe?ye():ie();return}xe||Ne||(h.code==="KeyW"||h.code==="ArrowUp"?(le.add("forward"),h.preventDefault()):h.code==="KeyS"||h.code==="ArrowDown"?(le.add("back"),h.preventDefault()):h.code==="KeyA"||h.code==="ArrowLeft"?(le.add("left"),h.preventDefault()):h.code==="KeyD"||h.code==="ArrowRight"?(le.add("right"),h.preventDefault()):h.code==="Space"?(le.add("jump"),x.jumpBuffer=.14,h.preventDefault()):h.code==="ShiftLeft"||h.code==="ShiftRight"?le.add("sprint"):h.code==="KeyR"&&Me("Respawned"))}},_t=h=>{h.code==="KeyW"||h.code==="ArrowUp"?le.delete("forward"):h.code==="KeyS"||h.code==="ArrowDown"?le.delete("back"):h.code==="KeyA"||h.code==="ArrowLeft"?le.delete("left"):h.code==="KeyD"||h.code==="ArrowRight"?le.delete("right"):h.code==="Space"?le.delete("jump"):(h.code==="ShiftLeft"||h.code==="ShiftRight")&&le.delete("sprint")},gn=h=>{!ae||!pt||(x.yaw-=h.movementX*Jd,x.pitch=ai(x.pitch-h.movementY*Jd,-1.45,1.45))},I=()=>{pt=document.pointerLockElement===n,pt&&(be=null),Y(),ae&&!pt&&!xe&&!Ne&&ie()},X=h=>{!ae||Ue||h.target.closest?.("button")&&h.target.closest(".parkour-panel-actions, #parkour-click-hint")||!pt&&!xe&&!Ne&&(h.preventDefault(),Xe())},te={id:null,x:0,y:0};let be=null,Ve=!1,He=0;const mt=h=>{!ae||!Ue||h.target.closest?.("button")||(te.id=h.pointerId,te.x=h.clientX,te.y=h.clientY)},nt=h=>{!ae||!Ue||te.id!==h.pointerId||(x.yaw-=(h.clientX-te.x)*.007,x.pitch=ai(x.pitch-(h.clientY-te.y)*.007,-1.45,1.45),te.x=h.clientX,te.y=h.clientY)},Lt=h=>{te.id===h.pointerId&&(te.id=null)},Qt=h=>{!ae||Ue||xe||Ne||h.target.closest?.("button:not(#parkour-click-hint), a, input")||pt||(Xe(),(h.pointerType==="mouse"||h.pointerType==="")&&(be={x:h.clientX,y:h.clientY}))},ho=h=>{!ae||!be||pt||xe||Ne||(pe.hint&&!pe.hint.hidden&&(pe.hint.hidden=!0,pe.hint.style.display="none"),x.yaw-=(h.clientX-be.x)*.0028,x.pitch=ai(x.pitch-(h.clientY-be.y)*.0028,-1.45,1.45),be.x=h.clientX,be.y=h.clientY)},gi=()=>{be=null};document.addEventListener("keydown",yt),document.addEventListener("keyup",_t),document.addEventListener("mousemove",gn),document.addEventListener("pointerlockchange",I),document.addEventListener("pointerlockerror",he),document.addEventListener("pointerdown",Qt),document.addEventListener("pointermove",ho),document.addEventListener("pointerup",gi),document.addEventListener("pointercancel",gi),pe.screen?.addEventListener("pointerdown",X),n.addEventListener("pointerdown",X),n.addEventListener("pointerdown",mt),n.addEventListener("pointermove",nt),n.addEventListener("pointerup",Lt),n.addEventListener("pointercancel",Lt);for(const h of document.querySelectorAll("[data-parkour-move]")){const v=h.dataset.parkourMove,L=z=>{z.preventDefault(),!(!ae||xe||Ne)&&(le.add(v),Le(!0),h.setPointerCapture?.(z.pointerId))},T=z=>{le.delete(v),h.hasPointerCapture?.(z.pointerId)&&h.releasePointerCapture(z.pointerId)};h.addEventListener("pointerdown",L),h.addEventListener("pointerup",T),h.addEventListener("pointercancel",T),h.addEventListener("pointerleave",T)}for(const h of document.querySelectorAll("[data-parkour-jump]")){h.addEventListener("pointerdown",v=>{v.preventDefault(),!(!ae||xe||Ne)&&(le.add("jump"),x.jumpBuffer=.16,Le(!0))});for(const v of["pointerup","pointercancel","pointerleave"])h.addEventListener(v,()=>le.delete("jump"))}for(const h of document.querySelectorAll("[data-parkour-action]"))h.addEventListener("click",()=>{const v=h.dataset.parkourAction;v==="resume"?ye():v==="restart"?qe():v==="next"?fr():v==="menu"&&Ge()});pe.hint?.addEventListener("click",h=>{h.preventDefault(),Xe()});function hr(h=1){ae=!0,Ve=!1,be=null,He=0,pe.hint&&(pe.hint.textContent="Click to play · ESC for menu"),ke(h),Ie(),Y(),Xe()}function fr(){ae&&(ke(E+1),Ie(),H(pe.pause,!1),H(pe.finish,!1),Y(),Xe(),k(`Level ${E}`))}function Js(){ae=!1,xe=!1,Ne=!1,R=!1,le.clear(),H(pe.pause,!1),H(pe.finish,!1),Y(),document.pointerLockElement===n&&document.exitPointerLock()}function pr(h){if(ae){if(!xe&&!Ne&&(We+=h),at>0&&(at=Math.max(0,at-h)),!xe&&!Ne)ge(We),R&&(et+=h),Re(h),$();else for(const v of g)v.delta.set(0,0,0);for(const v of B)v.mesh.rotation.y+=v.spin*(v.spin?1:0)*h,v.drift?v.mesh.position.x=v.baseX+Math.sin(We*.08*v.drift)*9:v.mesh.position.y=v.baseY+Math.sin(We*.5+v.mesh.position.x)*.35;if(!xe&&!Ne)for(const v of p)re(v,h);O&&(O.rotation.y+=h*.9);for(const v of m)v.ring.rotation.z+=h*1.4,v.ring.scale.setScalar(1+Math.sin(We*2+v.index)*.04),v.beam.position.y=v.top+1.7+Math.sin(We*1.5+v.index)*.12;D&&(D.rotation.z+=h*.6),C&&(C.position.y=N.top+1.2+Math.sin(We*2.4)*.18),Ke(h)}}const _r=new Qe;function mr(){const h=e.getSize(_r);if(h.x>0&&h.y>0){const v=h.x/h.y;Math.abs(l.aspect-v)>5e-4&&(l.aspect=v,l.updateProjectionMatrix())}e.render(a,l)}const y={start:hr,stop:Js,update:pr,render:mr,get active(){return ae},get paused(){return xe},get finished(){return Ne},get state(){return{level:E,checkpointIndex:tt,checkpoints:m.length,elapsed:et,running:R,finished:Ne,paused:xe,yaw:x.yaw,pitch:x.pitch,position:x.position.toArray()}}};return ke(1),ge(0),$(),y}const Hg=30,eu=7.2,Gg=10.8,Vg=20,Wg=7,Io=.95,ks=1,Xg=-8,Uo=12,vs=new F(0,.06,3.5),ct={white:16186367,teal:6547157,lime:10215773,yellow:16765286,purple:11766783,blue:7645183,coral:16743004,pink:16752627,gold:16763196,add:8121759,sub:16742006,mul:16765286,div:7649791},qg=(n,e,t)=>Math.min(t,Math.max(e,n));function Ra(n){if(n==null||!Number.isFinite(n))return"–";const e=Math.max(0,n),t=Math.floor(e/60),i=e-t*60;return`${String(t).padStart(2,"0")}:${i.toFixed(1).padStart(4,"0")}`}function No(n,{accent:e="#7be3cb",background:t="rgba(8, 18, 26, .8)",color:i="#ffffff",scale:o=3.4,height:s=.85}={}){const a=document.createElement("canvas");a.width=512,a.height=128;const r=a.getContext("2d");r.fillStyle=t,r.beginPath(),r.roundRect(8,26,496,76,26),r.fill(),r.strokeStyle=e,r.lineWidth=4,r.stroke(),r.font='700 46px "Trebuchet MS", "Arial Black", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillStyle=i,r.fillText(n,256,66);const l=new os(a);l.colorSpace=Ft,l.anisotropy=4;const d=new Fu(new _c({map:l,transparent:!0,depthWrite:!1}));return d.scale.set(o,s,1),d}function tu(n){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=52;t.fillStyle="#0f2230",t.beginPath(),t.roundRect(8,8,240,240,i),t.fill(),t.strokeStyle="#7be3cb",t.lineWidth=10,t.stroke();const o=String(n);t.fillStyle="#ffffff",t.font=`800 ${o.length>3?108:128}px "Trebuchet MS", "Arial Black", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(o,128,132);const s=new os(e);return s.colorSpace=Ft,s.anisotropy=4,s}function Xi(n,e,t,i,o=0,s=0){return new St(new Ct(n,e,t),new ci({color:i,roughness:.55,metalness:.05,emissive:o,emissiveIntensity:s}))}function $g({canvas:n,renderer:e,getBest:t,onFinish:i,onExit:o}){const s=new pc,a=new st(10476799);s.background=a;const r=new $s(a.clone(),65,220);s.fog=r;const l=new Mn(62,innerWidth/innerHeight,.1,400);l.position.set(0,6.4,12);const d=new vc(-60,60,40,-40,.1,400);let c=!1;s.add(new kc(15333631,6979468,1.7));const u=new Fs(16774879,2.1);u.position.set(22,44,16),s.add(u);const f=new Fs(10475775,.8);f.position.set(-26,20,-36),s.add(f);const _=[],g=[],b=[],m=[];let p=new rn;s.add(p);let E={position:vs.clone(),value:Uo},A=[];function w(I){for(I.traverse(X=>{if(X.geometry&&X.geometry.dispose(),X.material){const te=Array.isArray(X.material)?X.material:[X.material];for(const be of te)be.map&&be.map.dispose(),be.dispose()}});I.children.length;)I.remove(I.children[0])}function N({x:I=0,z:X=0,top:te=0,w:be=6,d:Ve=5,h:He=1.2,color:mt=ct.teal}){const nt={x:I,z:X,top:te,w:be,d:Ve,h:He,color:mt},Lt=Xi(be,He,Ve,mt,mt,.12);Lt.position.set(I,te-He/2,X);const Qt=Xi(be+.12,.1,Ve+.12,mt,mt,.5);return Qt.position.set(I,te+.03,X),p.add(Lt,Qt),nt.minX=I-be/2,nt.maxX=I+be/2,nt.minY=te-He,nt.maxY=te,nt.minZ=X-Ve/2,nt.maxZ=X+Ve/2,_.push(nt),nt}function D(I){return I}function C({x:I,z:X,top:te,op:be,amount:Ve}){const He=be==="+"?ct.add:be==="−"?ct.sub:be==="×"?ct.mul:ct.div,mt=Xi(2.4,.16,2.4,He,He,.55);mt.position.set(I,te+.07,X);const nt=No(`${be}${Ve}`,{accent:`#${He.toString(16).padStart(6,"0")}`,scale:2.6,height:.65});nt.position.set(I,te+1.9,X),nt.userData.baseScale=nt.scale.clone(),nt.userData.mapScale=nt.scale.clone().multiplyScalar(2.6),p.add(mt,nt),g.push({x:I,z:X,top:te,op:be,amount:Ve,color:He,tile:mt,label:nt,used:!1})}function O({x:I,z:X,top:te,required:be,label:Ve}){const He={x:I,z:X,top:te,required:be,open:!1,label:Ve,progress:0},mt=ct.pink;for(const ho of[-1,1]){const gi=Xi(.7,4.2,.7,mt,mt,.28);gi.position.set(I+ho*5.4,te+2.1,X),p.add(gi)}const nt=Xi(11.5,.6,.7,mt,mt,.4);nt.position.set(I,te+4.1,X);const Lt=new St(new ss(10.2,3.8),new ci({color:ct.pink,emissive:ct.pink,emissiveIntensity:.55,transparent:!0,opacity:.38,side:Hn}));Lt.position.set(I,te+2,X);const Qt=No(`NEEDS ${be}`,{accent:"#ff9ff3",scale:4.4,height:1.1});return Qt.position.set(I,te+5.3,X),Qt.userData.baseScale=Qt.scale.clone(),Qt.userData.mapScale=Qt.scale.clone().multiplyScalar(2.2),p.add(nt,Lt,Qt),He.barrier=Lt,He.bar=nt,He.sign=Qt,He.minX=I-5.4,He.maxX=I+5.4,He.minZ=X-.5,He.maxZ=X+.5,He.minY=te,He.maxY=te+3.9,b.push(He),He}function S(){const I=["+","−","×","÷","12","144","24","72"],X=[ct.teal,ct.yellow,ct.purple,ct.coral,ct.blue,ct.lime];for(let te=0;te<34;te++){const be=te%4;let Ve;be===0?Ve=Xi(1.4+te%3*.5,1.4+te%2*.6,1.4,X[te%X.length],0,0):Ve=No(I[te%I.length],{accent:`#${X[te%X.length].toString(16).padStart(6,"0")}`,scale:1.9,height:.5});const He=te/34*Math.PI*2,mt=24+te%7*9;Ve.position.set(Math.cos(He)*mt,8+te%8*4,-48+Math.sin(He)*mt),p.add(Ve),m.push({mesh:Ve,baseY:Ve.position.y,spin:be===0?.15+te%4*.05:0})}}function M(){w(p),_.length=0,g.length=0,b.length=0,m.length=0,A=[],N({x:0,z:0,top:0,w:14,d:14,h:1.4,color:ct.white}),S(),N({x:0,z:-9,top:.4,w:5.8,d:4.8,color:ct.teal}),C({x:0,z:-9,top:.4,op:"+",amount:12}),N({x:2.6,z:-15.5,top:.8,w:5.2,d:4.6,color:ct.lime}),C({x:2.6,z:-15.5,top:.8,op:"×",amount:2}),N({x:0,z:-21.6,top:1.2,w:5.4,d:4.8,color:ct.yellow}),C({x:0,z:-21.6,top:1.2,op:"+",amount:6}),N({x:-2.4,z:-27.2,top:1.5,w:5,d:4.6,color:ct.purple});const I=1.8;N({x:0,z:-32.6,top:I,w:12,d:5.2,color:ct.blue});const X=O({x:0,z:-35.2,top:I,required:24});A.push({gate:X,position:new F(0,I+.06,-39.2),value:24}),N({x:0,z:-39.2,top:I+.2,w:7.4,d:5.2,color:ct.teal}),N({x:0,z:-45.2,top:2.4,w:5.8,d:4.8,color:ct.lime}),C({x:0,z:-45.2,top:2.4,op:"+",amount:24}),N({x:2.8,z:-51.4,top:2.8,w:5.2,d:4.6,color:ct.yellow}),C({x:2.8,z:-51.4,top:2.8,op:"+",amount:24}),N({x:0,z:-57.6,top:3.2,w:5.4,d:4.8,color:ct.purple}),C({x:0,z:-57.6,top:3.2,op:"−",amount:12}),N({x:-2.6,z:-63,top:3.5,w:5,d:4.6,color:ct.teal}),N({x:-6,z:-45.2,top:2.4,w:4.2,d:4.2,color:ct.blue}),C({x:-6,z:-45.2,top:2.4,op:"×",amount:3});const te=3.8;N({x:0,z:-68.4,top:te,w:12,d:5.2,color:ct.blue});const be=O({x:0,z:-71,top:te,required:72});A.push({gate:be,position:new F(0,te+.06,-75),value:72}),N({x:0,z:-75,top:te+.2,w:7.4,d:5.2,color:ct.teal}),N({x:0,z:-81,top:4.4,w:5.8,d:4.8,color:ct.lime}),C({x:0,z:-81,top:4.4,op:"×",amount:2}),N({x:2.8,z:-87.2,top:4.7,w:5.2,d:4.6,color:ct.yellow}),C({x:2.8,z:-87.2,top:4.7,op:"+",amount:72}),N({x:-5.8,z:-81,top:4.4,w:4.2,d:4.2,color:ct.purple}),C({x:-5.8,z:-81,top:4.4,op:"÷",amount:2});const Ve=5;N({x:0,z:-93,top:Ve,w:16,d:10,color:ct.gold});const He=O({x:0,z:-97.6,top:Ve,required:144});He.finish=!0;const mt=No("144 = 12 DOZEN",{accent:"#ffc93c",scale:7.2,height:1.7});mt.position.set(0,Ve+6.4,-103),p.add(mt);const nt=Xi(5.4,.14,5.4,ct.gold,ct.gold,.7);nt.position.set(0,Ve+.08,-99.5),p.add(nt),E={position:vs.clone(),value:Uo}}const P=new rn,q=new ci({color:16777215,roughness:.5,metalness:.05,map:tu(Uo)}),W=new St(new Ct(Io,ks,Io),q);W.position.y=ks/2,P.add(W);const Z=new St(new Ns(.85,.06,8,28),new ci({color:8119243,emissive:8119243,emissiveIntensity:.9}));Z.rotation.x=-Math.PI/2,Z.position.y=.08,P.add(Z),s.add(P);const J=No("12",{accent:"#7be3cb",scale:1.9,height:.5});J.position.y=2,P.add(J);const K=No("YOU",{accent:"#ffc93c",scale:4.4,height:1.1});K.visible=!1,s.add(K);const B={position:vs.clone(),velocity:new F,onGround:!1,ground:null,jumpBuffer:0};let V=Uo,ue="Start · 12",_e=0,Ae=!1,Oe=!1,Je=!1,j=!1,re=0,De=new F,ke=0,le=0,pe=-1/0,Ue=t?.()??null;const ae={screen:document.querySelector("#dozen-screen"),timer:document.querySelector("#dozen-timer"),gates:document.querySelector("#dozen-gates"),best:document.querySelector("#dozen-best-hud"),value:document.querySelector("#dozen-value"),equation:document.querySelector("#dozen-equation"),objective:document.querySelector("#dozen-objective"),toast:document.querySelector("#dozen-toast"),pause:document.querySelector("#dozen-pause"),finish:document.querySelector("#dozen-finish"),finishTime:document.querySelector("#dozen-finish-time"),finishBest:document.querySelector("#dozen-finish-best"),finishValue:document.querySelector("#dozen-finish-value"),pauseValue:document.querySelector("#dozen-pause-value"),mapToggle:document.querySelector("#dozen-map-toggle"),mapCaption:document.querySelector("#dozen-map-caption")};matchMedia("(pointer: coarse)").matches;const xe=new Set;function Ne(I){ae.toast&&(ae.toast.textContent=I,ae.toast.classList.add("show"),clearTimeout(ke),ke=setTimeout(()=>ae.toast.classList.remove("show"),2400))}function R(I,X){I&&(I.hidden=!X,I.style.display=X?"":"none")}function pt(){if(ae.timer&&(ae.timer.textContent=Ra(Ae||Oe?_e:0)),ae.gates&&(ae.gates.textContent=`Gate ${Math.min(re+1,b.length)}/${b.length}`),ae.best&&(ae.best.textContent=`Best ${Ue!=null?Ra(Ue):"–"}`),ae.value&&(ae.value.textContent=String(V)),ae.equation&&(ae.equation.textContent=ue),ae.objective){const I=b[re];ae.objective.textContent=Oe?"Twelve dozen!":I?`Next gate needs ${I.required} · you have ${V}`:"Reach the finish"}ae.pauseValue&&(ae.pauseValue.textContent=`Your number: ${V} · ${ue}`)}function et(I,X){V=I,ue=X,Z.material.color.set(I===144?ct.gold:8119243),Z.material.emissive.set(I===144?ct.gold:8119243);const te=tu(V);q.map&&q.map.dispose(),q.map=te,q.needsUpdate=!0,J.material.map?.dispose(),J.material.map=tt(String(V)),J.material.needsUpdate=!0,pt()}function tt(I){const X=document.createElement("canvas");X.width=256,X.height=96;const te=X.getContext("2d");te.fillStyle="rgba(9, 18, 26, .82)",te.beginPath(),te.roundRect(4,8,248,80,26),te.fill(),te.strokeStyle=I==="144"?"#ffc93c":"#7be3cb",te.lineWidth=4,te.stroke(),te.fillStyle="#ffffff",te.font='800 58px "Trebuchet MS", "Arial Black", sans-serif',te.textAlign="center",te.textBaseline="middle",te.fillText(I,128,50);const be=new os(X);return be.colorSpace=Ft,be}function we(){const I=Io/2;return{minX:B.position.x-I,maxX:B.position.x+I,minY:B.position.y,maxY:B.position.y+ks,minZ:B.position.z-I,maxZ:B.position.z+I}}function at(I,X){return I.maxX>X.minX&&I.minX<X.maxX&&I.maxY>X.minY&&I.minY<X.maxY&&I.maxZ>X.minZ&&I.minZ<X.maxZ}function Be(){for(const I of g)I.used=!1,I.tile.visible=!0,I.label.visible=!0}function We(I="Try again!"){le>0||(le=.35,B.position.copy(E.position),B.velocity.set(0,0,0),B.onGround=!1,B.ground=null,Be(),et(E.value,`Reset · ${E.value}`),Ne(I))}function Tt(I){if(!I.open){if(I.open=!0,I.barrier.visible=!1,I.bar.material.color.set(ct.lime),I.bar.material.emissive.set(ct.lime),I.finish)re=b.length;else{const X=A.find(te=>te.gate===I);X&&(E={position:X.position.clone(),value:X.value},re=Math.min(re+1,b.length))}Ne(I.finish?"You made twelve dozen!":`Gate open · ${I.required} is correct!`),pt()}}function x(){Oe=!0,Ae=!1,Je=!1,R(ae.pause,!1);const I=i?.(_e)||{isBest:!1,best:_e};Ue=I.best,ae.finishTime&&(ae.finishTime.textContent=Ra(_e)),ae.finishBest&&(ae.finishBest.textContent=I.isBest?"New best time!":`Best ${Ra(I.best)}`),ae.finishValue&&(ae.finishValue.textContent="144 = 12 × 12"),R(ae.finish,!0),pt()}function k(){c=!1,s.fog=r,ae.mapToggle&&(ae.mapToggle.textContent="2D",ae.mapToggle.setAttribute("aria-pressed","false")),ae.mapCaption&&(ae.mapCaption.hidden=!0),ae.screen?.classList.remove("dozen-map-open"),_e=0,Ae=!1,Oe=!1,Je=!1,re=0,E={position:vs.clone(),value:Uo},M(),Be();for(const I of b)I.open=!1,I.barrier.visible=!0,I.bar.material.color.set(ct.pink),I.bar.material.emissive.set(ct.pink);B.position.copy(vs),B.velocity.set(0,0,0),B.onGround=!0,B.ground=null,ue="Start · 12",et(Uo,"Start · 12"),R(ae.pause,!1),R(ae.finish,!1),Ue=t?.()??null,pt(),oe()}function H(){let I=1/0,X=-1/0,te=1/0,be=-1/0;for(const Ve of _)I=Math.min(I,Ve.minX),X=Math.max(X,Ve.maxX),te=Math.min(te,Ve.minZ),be=Math.max(be,Ve.maxZ);return{minX:I,maxX:X,minZ:te,maxZ:be}}function Y(I){const X=H(),te=12,be=X.maxX-X.minX+te*2,Ve=X.maxZ-X.minZ+te*2,He=(X.minX+X.maxX)/2,mt=(X.minZ+X.maxZ)/2;if(d.position.set(He,160,mt),I>=1){const nt=Math.max(Ve/2/I,be/2);d.left=-nt*I,d.right=nt*I,d.top=nt,d.bottom=-nt,d.up.set(-1,0,0)}else{const nt=Ve/2,Lt=Math.max(nt*I,be/2);d.left=-Lt,d.right=Lt,d.top=nt,d.bottom=-nt,d.up.set(0,0,-1)}d.lookAt(He,0,mt),d.updateProjectionMatrix()}function ne(I){if(!(!j||Je||Oe)&&c!==I){c=I,xe.clear();for(const X of g)X.label.scale.copy(c?X.label.userData.mapScale:X.label.userData.baseScale);for(const X of b)for(const te of X.sign?[X.sign]:[])te.scale.copy(c?te.userData.mapScale:te.userData.baseScale);for(const X of m)X.mesh.visible=!c;K.visible=c,c?(s.fog=null,K.position.copy(B.position).add(new F(0,1.2,0)),Y(l.aspect||innerWidth/innerHeight)):(s.fog=r,oe()),ae.mapToggle&&(ae.mapToggle.textContent=c?"3D":"2D",ae.mapToggle.setAttribute("aria-pressed",c?"true":"false")),ae.mapCaption&&(ae.mapCaption.hidden=!c),ae.screen?.classList.toggle("dozen-map-open",c),pt()}}function $(){ne(!c)}ae.mapToggle?.addEventListener("click",()=>$());function Le(I){if(!j||I.repeat)return;const X=I.code;if(X==="KeyW"||X==="ArrowUp")xe.add("forward");else if(X==="KeyS"||X==="ArrowDown")xe.add("back");else if(X==="KeyA"||X==="ArrowLeft")xe.add("left");else if(X==="KeyD"||X==="ArrowRight")xe.add("right");else if(X==="Space")xe.add("jump"),B.jumpBuffer=.16;else if(X==="KeyR")!Je&&!Oe&&We("Reset to checkpoint");else if(X==="KeyM")$();else if(X==="Escape")c?ne(!1):Oe?qe():Je?ie():Ie();else return;["forward","back","left","right","jump"].some(te=>xe.has(te))&&Me(),I.preventDefault?.()}function me(I){I.code==="KeyW"||I.code==="ArrowUp"?xe.delete("forward"):I.code==="KeyS"||I.code==="ArrowDown"?xe.delete("back"):I.code==="KeyA"||I.code==="ArrowLeft"?xe.delete("left"):I.code==="KeyD"||I.code==="ArrowRight"?xe.delete("right"):I.code==="Space"&&xe.delete("jump")}function Me(){!j||Je||Oe||Ae||(Ae=!0,pt())}function Ie(){!j||Oe||(Je=!0,xe.clear(),R(ae.pause,!0),pt())}function ie(){j&&(Je=!1,R(ae.pause,!1),pt())}function ye(){k(),Ae=!1,Ne("Run reset")}function qe(){j=!1,Je=!1,Oe=!1,Ae=!1,c=!1,s.fog=r,xe.clear(),R(ae.pause,!1),R(ae.finish,!1),o?.()}document.addEventListener("keydown",Le),document.addEventListener("keyup",me);for(const I of document.querySelectorAll("[data-dozen-move]")){const X=I.dataset.dozenMove;I.addEventListener("pointerdown",be=>{be.preventDefault(),!(!j||Je||Oe)&&(xe.add(X),Me(),I.setPointerCapture?.(be.pointerId))});const te=be=>{xe.delete(X),I.hasPointerCapture?.(be.pointerId)&&I.releasePointerCapture(be.pointerId)};for(const be of["pointerup","pointercancel","pointerleave"])I.addEventListener(be,te)}for(const I of document.querySelectorAll("[data-dozen-jump]")){I.addEventListener("pointerdown",X=>{X.preventDefault(),!(!j||Je||Oe)&&(xe.add("jump"),B.jumpBuffer=.16,Me())});for(const X of["pointerup","pointercancel","pointerleave"])I.addEventListener(X,()=>xe.delete("jump"))}for(const I of document.querySelectorAll("[data-dozen-action]"))I.addEventListener("click",()=>{const X=I.dataset.dozenAction;X==="resume"?ie():X==="restart"?ye():X==="menu"&&qe()});function Ge(I,X){if(!X)return;B.position[I]+=X;let te=we();const be=Io/2,Ve=[..._,...b.filter(He=>!He.open)];for(const He of Ve){if(!he(te,He))continue;const mt=He.required!=null;if(mt&&V===He.required){Tt(He),He.finish&&x(),te=we();continue}mt&&_e-pe>2.5&&(pe=_e,Ne(He.finish?`The finish needs exactly 144 · you have ${V}`:`Needs ${He.required} · you have ${V} — step on more pads`)),I==="x"?(B.position.x=X>0?He.minX-be-.001:He.maxX+be+.001,B.velocity.x=0):(B.position.z=X>0?He.minZ-be-.001:He.maxZ+be+.001,B.velocity.z=0),te=we()}}function he(I,X){return I.maxX>X.minX&&I.minX<X.maxX&&I.maxY>X.minY&&I.minY<X.maxY&&I.maxZ>X.minZ&&I.minZ<X.maxZ}function Xe(I,X,te){let be=null;for(const Ve of _){if(I<Ve.minX||I>Ve.maxX||X<Ve.minZ||X>Ve.maxZ)continue;const He=te-Ve.maxY;He>=-.35&&He<=1.1&&(!be||Ve.maxY>be.maxY)&&(be=Ve)}return be}function U(){if(B.onGround)for(const I of g){if(I.used)continue;we();const X=1.2;if(Math.abs(B.position.x-I.x)>X+Io/2||Math.abs(B.position.z-I.z)>X+Io/2||Math.abs(B.position.y-I.top)>.6)continue;I.used=!0,I.tile.visible=!1,I.label.visible=!1;const te=V;I.op==="+"?V+=I.amount:I.op==="−"?V-=I.amount:I.op==="×"?V*=I.amount:I.op==="÷"&&(V=Math.round(V/I.amount*100)/100),V<0&&(V=0);const be=Math.round(V*100)/100;et(be,`${te} ${I.op} ${I.amount} = ${be}`),Ne(`${te} ${I.op} ${I.amount} = ${be}`);break}}function ge(I){const X=new F;xe.has("forward")&&(X.z-=1),xe.has("back")&&(X.z+=1),xe.has("left")&&(X.x-=1),xe.has("right")&&(X.x+=1),X.lengthSq()>1&&X.normalize();const te=X.x*eu,be=X.z*eu,Ve=B.onGround?Vg:Wg,He=qg(Ve*I,0,1);B.velocity.x+=(te-B.velocity.x)*He,B.velocity.z+=(be-B.velocity.z)*He,X.lengthSq()>.05&&Me(),B.jumpBuffer>0&&(B.jumpBuffer-=I),xe.has("jump")&&B.onGround&&(B.velocity.y=Gg,B.onGround=!1,B.ground=null,B.jumpBuffer=0,Me()),B.velocity.y=Math.max(B.velocity.y-Hg*I,-26);const mt=B.position.y;B.position.y+=B.velocity.y*I,B.onGround=!1,B.ground=null;let nt=we();for(const Lt of _)at(nt,Lt)&&(B.velocity.y<=0?(B.position.y=Lt.maxY,B.velocity.y=0,B.onGround=!0,B.ground=Lt):(B.position.y=Lt.minY-ks-.001,B.velocity.y=0),nt=we());if(Ge("x",B.velocity.x*I),Ge("z",B.velocity.z*I),!B.onGround&&B.velocity.y<=0){const Lt=Xe(B.position.x,B.position.z,mt);Lt&&B.position.y<=Lt.maxY+.1&&(B.position.y=Lt.maxY,B.velocity.y=0,B.onGround=!0,B.ground=Lt)}U(),B.position.y<Xg&&We("You fell! · back to the checkpoint")}function oe(){De.set(B.position.x,B.position.y+1.4,B.position.z-5),l.position.set(B.position.x,B.position.y+6.2,B.position.z+11.4),l.lookAt(De)}function Se(I){const X=B.position.x,te=B.position.y+6.2,be=B.position.z+11.4,Ve=1-Math.pow(.001,I);l.position.x+=(X-l.position.x)*Ve,l.position.y+=(te-l.position.y)*Ve,l.position.z+=(be-l.position.z)*Ve,De.set(B.position.x,B.position.y+1.4,B.position.z-5),l.lookAt(De)}function se(I,X){P.position.copy(B.position),J.position.y=ks+.9+Math.sin(X*2.2)*.06,Z.rotation.z+=I*1.4;for(const te of m)te.mesh.position.y=te.baseY+Math.sin(X*.8+te.mesh.position.x)*.35,te.spin&&(te.mesh.rotation.y+=I*te.spin);for(const te of g)te.used||(te.tile.position.y=te.top+.09+Math.sin(X*3+te.x)*.02)}function ee(){j=!0,k(),pt()}function Re(){j=!1,Je=!1,Oe=!1,Ae=!1,xe.clear(),R(ae.pause,!1),R(ae.finish,!1)}function Ke(I){j&&(c||(le>0&&(le=Math.max(0,le-I)),!Je&&!Oe&&(Ae&&(_e+=I),ge(I),Se(I),pt()),se(I,_e)))}const yt=new Qe;function _t(){const I=e.getSize(yt),X=I.x>0&&I.y>0?I.x/I.y:l.aspect;if(I.x>0&&I.y>0&&Math.abs(l.aspect-X)>5e-4&&(l.aspect=X,l.updateProjectionMatrix()),c){Y(X),e.render(s,d);return}e.render(s,l)}const gn={start:ee,stop:Re,update:Ke,render:_t,get active(){return j},get paused(){return Je},get finished(){return Oe},get state(){return{value:V,equation:ue,gateIndex:re,elapsed:_e,running:Ae,finished:Oe,paused:Je,gates:b.map(I=>({required:I.required,open:I.open,x:I.x,z:I.z})),position:B.position.toArray()}}};return k(),gn}const Yg="/blockbound/",nr=n=>`${Yg}${String(n).replace(/^\/+/,"")}`,Gt=document.querySelector("#world");Gt.tabIndex=0;const qn=new ug({canvas:Gt,antialias:!0});qn.setPixelRatio(Math.min(devicePixelRatio,1.75));qn.setSize(innerWidth,innerHeight);qn.shadowMap.enabled=!0;qn.shadowMap.type=gu;qn.outputColorSpace=Ft;qn.toneMapping=bu;qn.toneMappingExposure=1.06;const vn=new pc;vn.background=new st(10205381);vn.fog=new $s(10205381,32,76);const sn=new Mn(72,innerWidth/innerHeight,.08,180);sn.rotation.order="YXZ";vn.add(sn);const ju=new kc(13492712,5916983,2.1);vn.add(ju);const Un=new Fs(16770493,2.4);Un.position.set(-28,48,20);Un.castShadow=!0;Un.shadow.mapSize.set(2048,2048);Un.shadow.camera.left=-45;Un.shadow.camera.right=45;Un.shadow.camera.top=45;Un.shadow.camera.bottom=-45;vn.add(Un);vn.add(Un.target);function jg(n,e,t=null,i="",o="side"){const a=document.createElement("canvas");a.width=a.height=16;const r=a.getContext("2d");r.fillStyle=n,r.fillRect(0,0,16,16),t&&(r.fillStyle=t,r.fillRect(0,0,16,4));let l=n.charCodeAt(1)*97;for(let c=0;c<42;c++){l=l*16807%2147483647;const u=l%16;l=l*16807%2147483647;const f=l%16;r.globalAlpha=.22+l%30/100,r.fillStyle=e[l%e.length],r.fillRect(u,f,l%3===0?2:1,1)}if(r.globalAlpha=1,i==="chest")r.fillStyle="#563516",r.fillRect(0,0,16,2),r.fillRect(0,8,16,1),r.fillRect(0,14,16,2),r.fillStyle="#d9c37c",r.fillRect(7,7,2,3);else if(i==="red_bed")r.fillStyle=o==="top"?"#b52828":"#873b2a",r.fillRect(0,0,16,16),r.fillStyle="#ece9df",r.fillRect(0,0,16,o==="top"?4:3);else if(i==="grass_block"&&o==="side")r.fillStyle="#548332",r.fillRect(0,0,16,4),r.fillRect(2,4,3,2),r.fillRect(10,4,2,3);else if(i.endsWith("_log"))if(o==="top")r.fillStyle="#bd9860",r.fillRect(0,0,16,16),r.strokeStyle="#795331",r.strokeRect(2.5,2.5,11,11),r.strokeRect(5.5,5.5,5,5);else{r.fillStyle=i.startsWith("birch")?"#625d52":"#4b3421";for(const c of[1,5,10,14])r.fillRect(c,0,1,16),r.fillRect((c+1)%16,3,1,5)}else if(i.endsWith("_planks")){r.fillStyle="#553b27";for(const c of[0,5,10,15])r.fillRect(0,c,16,1);r.fillRect(5,1,1,4),r.fillRect(11,6,1,4),r.fillRect(3,11,1,4)}else if(i==="stone_bricks"||i==="bricks"){r.fillStyle=i==="bricks"?"#674039":"#555b57";for(const c of[0,5,10,15])r.fillRect(0,c,16,1);r.fillRect(7,1,1,4),r.fillRect(3,6,1,4),r.fillRect(12,6,1,4),r.fillRect(7,11,1,4)}else if(i.endsWith("_leaves")){r.fillStyle="#365c2d";for(const[c,u]of[[1,1],[8,2],[4,6],[12,8],[1,12],[9,13]])r.fillRect(c,u,3,2)}const d=new os(a);return d.magFilter=Xt,d.minFilter=ec,d.colorSpace=Ft,d}const Ca={},Fo=new Set(mg),Qr=new Map,Zu=new zu;function yc(n,e="side"){if(n={suspicious_sand:"suspicious_sand_0",suspicious_gravel:"suspicious_gravel_0",moss_carpet:"moss_block",pointed_dripstone:"pointed_dripstone_up_tip",magma_block:"magma",smooth_quartz:"quartz_block_bottom",chiseled_quartz:"chiseled_quartz_block",crimson_leaves:"nether_wart_block",warped_leaves:"warped_wart_block",bamboo_leaves:"bamboo_large_leaves",chiseled_bamboo:"bamboo_mosaic"}[n]||n,n=n.replace(/^(.*)_stripped_(log|wood|stem|hyphae)$/,"stripped_$1_$2"),n=n.replace(/_hyphae$/,"_stem").replace(/_wood$/,"_log"),n=n.replace(/_hanging_sign$/,"_planks"),n==="water")return"water_still";if(n==="dirt_path")return e==="top"?"dirt_path_top":e==="bottom"?"dirt":"dirt_path_side";if(n==="podzol")return e==="top"?"podzol_top":e==="bottom"?"dirt":"podzol_side";if(n==="mycelium")return e==="top"?"mycelium_top":e==="bottom"?"dirt":"mycelium_side";if(n==="blast_furnace")return e==="top"||e==="bottom"?"blast_furnace_top":e==="front"?"blast_furnace_front":"blast_furnace_side";if(n==="bell")return e==="top"?"bell_top":e==="bottom"?"bell_bottom":"bell_side";if(n==="grindstone")return e==="top"||e==="bottom"?"grindstone_round":"grindstone_side";if(n==="white_carpet"||n==="white_wall_banner")return"white_wool";if(n==="light_gray_carpet")return"light_gray_wool";if(n.endsWith("_wall"))return yc(n.replace(/_wall$/,""),e);if(n==="crafting_table")return e==="top"?"crafting_table_top":e==="bottom"?"oak_planks":e==="front"?"crafting_table_front":"crafting_table_side";if(n==="furnace")return e==="top"||e==="bottom"?"furnace_top":e==="front"?"furnace_front":"furnace_side";if(n==="chest"||n==="red_bed")return null;if(n==="grass_block")return e==="top"?"grass_block_top":e==="bottom"?"dirt":"grass_block_side";if(n==="snow_block")return"snow";if(n==="powder_snow")return"powder_snow";if(n==="bamboo_block"||n==="stripped_bamboo_block"){const s=e==="side"?n:`${n}_top`;if(Fo.has(s))return s}if((n.endsWith("_log")||n.endsWith("_stem")||n.endsWith("_hyphae"))&&e!=="side"&&Fo.has(`${n}_top`))return`${n}_top`;if(n.endsWith("_wood")){const s=n.replace(/_wood$/,"_log");if(Fo.has(s))return s}if(Fo.has(n))return n;const i=n.match(/^(.*)_(stairs|slab|fence|fence_gate|button|pressure_plate|sign|hanging_sign)$/);return i&&Fo.has(`${i[1]}_planks`)?`${i[1]}_planks`:[`${n}_side`,`${n}_top`,`${n}_bottom`,n.replace(/_stairs$|_slab$/,"")].find(s=>Fo.has(s))||null}function Zg(n){if(!n)return null;if(!Qr.has(n)){const e=Zu.load(nr(`textures/block/${n}.png`));e.magFilter=Xt,e.minFilter=ec,e.colorSpace=Ft,n==="water_still"&&(e.repeat.y=1/32,e.offset.y=31/32),Qr.set(n,e)}return Qr.get(n)}function Ku(n){if(Ca[n])return Ca[n];const e=jt[n]||jt.stone,t=o=>{const s=yc(n,o);return new Qi({map:Zg(s)||jg(e.color,[e.accent,e.color,"#d6d0bd"],null,n,o),color:n==="water"?5079253:n==="grass_block"&&o==="top"||n.endsWith("_leaves")&&!n.startsWith("cherry")&&!n.startsWith("pale_oak")?8633170:16777215,transparent:e.transparent||n.endsWith("_leaves"),opacity:n==="water"?.7:1,alphaTest:e.transparent||n.endsWith("_leaves")?.1:0})},i=t("side");return Ca[n]=[i,i,t("top"),t("bottom"),i,["furnace","blast_furnace","crafting_table"].includes(n)?t("front"):i],Ca[n]}const Kg=new Ct(1,1,1),Jg=new Ct(1,.5,1),Ju=new Ct(1,.5,1);Ju.translate(0,-.25,0);const Qu=new Ct(1,.5,.5);Qu.translate(0,.25,.25);const Qg=hg([Ju,Qu],!1),eb=new Ct(1,1,.1875),nu=new Ct(.25,1,.25),tb=new Ct(.75,.125,.75),nb=new Ct(.25,.25,.125);function ib(n){return n.endsWith("_slab")?{geometry:Jg,offset:-.25}:n.endsWith("_stairs")?{geometry:Qg,offset:0}:n.endsWith("_door")||n.endsWith("_trapdoor")||n.endsWith("_sign")||n.endsWith("_hanging_sign")?{geometry:eb,offset:0}:n.endsWith("_fence")||n.endsWith("_fence_gate")?{geometry:nu,offset:0}:n.endsWith("_pressure_plate")||n.endsWith("_carpet")?{geometry:tb,offset:-.4375}:n.endsWith("_wall")?{geometry:nu,offset:0}:n.endsWith("_button")?{geometry:nb,offset:0}:{geometry:Kg,offset:0}}function Mc(n,e){const t=new Ct(...n),i=t.attributes.uv;return e.forEach(([o,s,a,r],l)=>{[[o,s],[o+a,s],[o,s+r],[o+a,s+r]].forEach(([d,c],u)=>i.setXY(l*4+u,d/64,1-c/64))}),t}const ob=Mc([.875,.875,.875],[[0,33,14,10],[28,33,14,10],[14,19,14,14],[28,19,14,14],[42,33,14,10],[14,33,14,10]]),sb=Mc([1,.5625,1],[[0,28,6,16],[22,28,6,16],[6,28,16,16],[22,28,16,16],[6,44,16,6],[6,44,16,6]]),ab=Mc([1,.5625,1],[[0,6,6,16],[22,6,6,16],[6,6,16,16],[22,6,16,16],[6,22,16,6],[6,22,16,6]]);function eh(n){const e=Zu.load(nr(`textures/entity/${n}`));return e.magFilter=Xt,e.minFilter=Xt,e.colorSpace=Ft,new Qi({map:e})}const rb=eh("chest/normal.png"),lb=eh("bed/red.png"),Ms=new rn;vn.add(Ms);const ir=new Map,Xa=new Set,Oo=new Map,Sc=new Map,Ht=new Map,ql=[],Ai=8;let di=4,Os="",yn={minX:-32,maxX:40,minZ:-32,maxZ:40};const on=(n,e,t)=>`${n},${e},${t}`,an=(n,e)=>{let t=n*374761393+e*668265263;return t=(t^t>>13)*1274126177,((t^t>>16)>>>0)/4294967295},th={plains:{label:"Plains",surface:"grass_block",soil:"dirt",sky:10205381,fog:10205381},forest:{label:"Oak Forest",surface:"grass_block",soil:"dirt",sky:8957617,fog:8957617},savanna:{label:"Savanna",surface:"grass_block",soil:"coarse_dirt",sky:12173978,fog:12173978},jungle:{label:"Jungle",surface:"grass_block",soil:"dirt",sky:7907465,fog:7907465},swamp:{label:"Swamp",surface:"grass_block",soil:"mud",sky:7441267,fog:7441267},badlands:{label:"Badlands",surface:"red_sand",soil:"red_sand",sky:12954766,fog:12954766},desert:{label:"Desert",surface:"sand",soil:"sand",sky:12175296,fog:13156e3},taiga:{label:"Taiga",surface:"podzol",soil:"dirt",sky:8691624,fog:8691624},snowy:{label:"Snowy Peaks",surface:"snow_block",soil:"stone",sky:12110546,fog:12964565}};function _i(n,e){const t=Math.sin(n*.017)+Math.cos(e*.019)+Math.sin((n-e)*.009),i=Math.sin((n+40)*.027)-Math.cos((e-20)*.023);return t>1.35?"snowy":t<-1.15?"badlands":t<-.82?"desert":t>.85&&i<-.28?"savanna":t>.52&&i>.62?"jungle":i<-.9?"swamp":i>.72?"forest":i<-.7?"taiga":"plains"}function Bt(n,e){const t=_i(n,e),i=Math.sin(n*.13)*1.35+Math.cos(e*.11)*1.15+Math.sin((n+e)*.055)*1.35;return Math.floor(t==="desert"||t==="badlands"?2.5+i*.48:t==="savanna"?4+i*.72:t==="jungle"?4+i*.9:t==="swamp"?1+i*.32:t==="snowy"?5+i*1.35+Math.abs(Math.sin(n*.037)*2.2):t==="taiga"?3.5+i*.8:3+i)}function cb(n,e,t){const i=Bt(n,t);if(e>i||e<-16)return null;if(e===-16)return"bedrock";const o=th[_i(n,t)];if(e===i)return o.surface;if(e>=i-2)return o.soil;const s=an(n*17+e*31,t*19-e*23);return s>.985?e<-7?"diamond_ore":"gold_ore":s>.96?e<-4?"redstone_ore":"iron_ore":s>.92?"coal_ore":s>.9?"copper_ore":"stone"}function _n(n,e,t){const i=on(n,e,t);return Ht.has(i)?Ht.get(i):ir.get(i)||null}function Te(n,e,t,i){const o=on(n,e,t);Ht.has(o)||ir.set(o,i)}function db(n,e){const t=Bt(n,e);for(let i=t+1;i<=t+6;i++)Te(n,i,e,null);for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)(i||o)&&Te(n+i,t+5,e+o,"stone");Te(n,t+6,e,"water"),Xa.add(on(n,t+6,e))}function iu(n,e,t){const i=Bt(n,e),o=t==="taiga"||t==="snowy"?"spruce":t==="forest"&&an(n+9,e-4)>.82?"birch":"oak",s=o==="spruce"?5:4;for(let a=i+1;a<=i+s;a++)Te(n,a,e,`${o}_log`);if(o==="spruce"){for(let a=2;a<=5;a++){const r=a===5?0:a%2?1:2;for(let l=-r;l<=r;l++)for(let d=-r;d<=r;d++)Math.abs(l)+Math.abs(d)<=r+1&&(l||d||a===5)&&Te(n+l,i+a,e+d,"spruce_leaves")}return}for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)for(let l=3;l<=5;l++)(a||r||l>s)&&Math.abs(a)+Math.abs(r)+Math.max(0,l-4)<4&&Te(n+a,i+l,e+r,`${o}_leaves`)}function el(n,e,t){const i=Bt(n,e);for(let s=-3;s<=3;s++)for(let a=-2;a<=2;a++){for(let r=i-2;r<=i;r++)Te(n+s,r,e+a,t==="desert"?"sand":"cobblestone");for(let r=i+1;r<=i+7;r++)Te(n+s,r,e+a,null)}if(t==="desert"){for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)Te(n+s,i,e+a,"sand"),(Math.abs(s)===2||Math.abs(a)===2)&&Te(n+s,i+1,e+a,"smooth_quartz");for(let s=2;s<=4;s++)for(const[a,r]of[[-2,-2],[2,-2],[-2,2],[2,2]])Te(n+a,i+s,e+r,"smooth_quartz");for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)Math.abs(s)+Math.abs(a)<4&&Te(n+s,i+5,e+a,"red_sand");return}if(t==="snowy"){for(let s=1;s<=5;s++)for(let a=-2;a<=2;a++)for(let r=-2;r<=2;r++)(Math.abs(a)===2||Math.abs(r)===2)&&Te(n+a,i+s,e+r,s===5?"snow_block":"cobblestone");for(let s=1;s<=2;s++)Te(n,i+s,e-2,null);return}const o=t==="taiga"?"spruce":"oak";for(let s=-3;s<=3;s++)for(let a=-2;a<=2;a++){Te(n+s,i,e+a,"cobblestone");for(let r=1;r<=3;r++){const l=Math.abs(s)===3||Math.abs(a)===2,d=a===-2&&s===0&&r<3,c=r===2&&(Math.abs(s)===3&&a===0||Math.abs(a)===2&&Math.abs(s)===2);l&&!d&&!c&&Te(n+s,i+r,e+a,`${o}_planks`),c&&Te(n+s,i+r,e+a,"glass")}}Te(n-2,i+1,e+1,"chest"),Te(n-1,i+1,e+1,"crafting_table"),Te(n+1,i+1,e+1,"furnace"),Te(n+2,i+1,e+1,"red_bed"),Te(n+2,i+1,e,"red_bed_head");for(let s=-4;s<=4;s++)for(let a=-3;a<=3;a++){const r=i+4+Math.max(0,2-Math.abs(a));Te(n+s,r,e+a,"bricks")}}function nh(n,e){const t=Bt(n,e);for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){for(let s=t-2;s<=t;s++)Te(n+i,s,e+o,"cobblestone");for(let s=t+1;s<=t+6;s++)Te(n+i,s,e+o,null);if((Math.abs(i)===2||Math.abs(o)===2)&&Te(n+i,t+1,e+o,"stone_bricks"),Math.abs(i)===2&&Math.abs(o)===2)for(let s=2;s<=4;s++)Te(n+i,t+s,e+o,"oak_log");Te(n+i,t+5,e+o,"oak_planks")}for(let i=-1;i<=1;i++)for(let o=-1;o<=1;o++)Te(n+i,t+1,e+o,"water")}function ub(n,e){const t=Bt(n,e);for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++){for(let s=t-2;s<=t;s++)Te(n+i,s,e+o,"stone_bricks");for(let s=t+1;s<=t+5;s++)Te(n+i,s,e+o,null);if(Math.abs(i)===3&&Math.abs(o)===3){const s=2+Math.floor(an(n+i,e+o)*3);for(let a=1;a<=s;a++)Te(n+i,t+a,e+o,a===1?"mossy_stone_bricks":"stone_bricks")}}}function Qn(n,e,t,i=12){return Bt(n,e)}const wc=[],hb=3,ih=50,oh=50,fb={ruins:[10,10],well:[8,8],stronghold:[14,14],pyramid:[16,16],jungle_temple:[14,14],swamp_hut:[10,10]};function sh(n,e,t,i,o){return{minX:n-t/2-o,maxX:n+t/2+o,minZ:e-i/2-o,maxZ:e+i/2+o}}function Ec(n,e,t,i,o=hb){const s=sh(n,e,t,i,o);return!wc.some(a=>s.minX<a.maxX&&s.maxX>a.minX&&s.minZ<a.maxZ&&s.maxZ>a.minZ)}function Tc(n,e,t,i,o=0){wc.push(sh(n,e,t,i,o))}function pb(n,e,t,i,o,s,a){for(let r=0;r<=a;r+=2)for(let l=-r;l<=r;l+=2)for(let d=-r;d<=r;d+=2){if(Math.max(Math.abs(l),Math.abs(d))!==r)continue;const c=n+l,u=e+d;if((s?Ac(c,u,Math.min(o,4)):qa(c,u,Math.min(o,6),2))&&Ec(c,u,t,i))return[c,u]}return null}function xn(n,e,t,i=null){const o=lo[n];if(!o)return!1;const[s,,a]=o.size,r=Math.ceil(Math.max(s,a)/2),l=n.startsWith("village_");if(!l){const c=n==="shipwreck",u=pb(e,t,s,a,r,c,c?28:14);if(!u)return!1;[e,t]=u}const d=i??Bt(e,t);for(const[c,u,f,_,g=0]of o.blocks){const b=e+c-Math.floor(s/2),m=d+u+1,p=t+f-Math.floor(a/2);Te(b,m,p,_),g&&Sc.set(on(b,m,p),g)}return l||Tc(e,t,s,a),!0}function qa(n,e,t=5,i=2){let o=1/0,s=-1/0;for(let a=-t;a<=t;a++)for(let r=-t;r<=t;r++){const l=Bt(n+a,e+r);o=Math.min(o,l),s=Math.max(s,l)}return o>1&&s-o<=i}function Ac(n,e,t=4){for(let i=-t;i<=t;i++)for(let o=-t;o<=t;o++)if(Bt(n+i,e+o)>=1)return!1;return!0}function _b(n,e,t=5,i=12){for(let o=0;o<=i;o+=2)for(let s=-o;s<=o;s+=2)for(let a=-o;a<=o;a+=2)if(Math.max(Math.abs(s),Math.abs(a))===o&&qa(n+s,e+a,t))return[n+s,e+a];return null}function mb(n,e,t=4,i=18){for(let o=0;o<=i;o+=2)for(let s=-o;s<=o;s+=2)for(let a=-o;a<=o;a+=2)if(Math.max(Math.abs(s),Math.abs(a))===o&&Ac(n+s,e+a,t))return[n+s,e+a];return null}function gb(n,e){const t=Qn(n,e,6,10);for(let i=0;i<5;i++)for(let o=-6+i;o<=6-i;o++)for(let s=-6+i;s<=6-i;s++)(i===0||Math.abs(o)===6-i||Math.abs(s)===6-i)&&Te(n+o,t+i+1,e+s,i===2&&Math.abs(o)+Math.abs(s)<2?"red_sand":"sand")}function bb(n,e){if(lo.igloo)return xn("igloo",n,e);const t=Qn(n,e,4,7);for(let i=1;i<=5;i++)for(let o=-3;o<=3;o++)for(let s=-3;s<=3;s++){const a=Math.hypot(o,s,i-2);a>2.8&&a<3.7&&Te(n+o,t+i,e+s,"snow_block")}Te(n,t+1,e-3,null),Te(n,t+2,e-3,null),Te(n,t+1,e,"red_bed"),Te(n,t+1,e-1,"red_bed_head")}function kb(n,e){const t=Qn(n,e,5,9);for(let i=-5;i<=5;i++)for(let o=-5;o<=5;o++)for(let s=1;s<=4;s++)(Math.abs(i)===5||Math.abs(o)===5||s===4)&&Te(n+i,t+s,e+o,(i+o+s)%3?"mossy_cobblestone":"stone_bricks");for(let i=1;i<=3;i++)Te(n,t+i,e-5,null);Te(n,t+1,e+2,"chest")}function ah(n,e){if(lo.outpost)return xn("outpost",n,e);const t=Qn(n,e,4,14);for(const[i,o]of[[-3,-3],[-3,3],[3,-3],[3,3]])for(let s=1;s<=10;s++)Te(n+i,t+s,e+o,"oak_log");for(let i=-4;i<=4;i++)for(let o=-4;o<=4;o++)(Math.abs(i)===4||Math.abs(o)===4)&&Te(n+i,t+8,e+o,"oak_planks");for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++)Te(n+i,t+10,e+o,"oak_planks");Te(n,t+1,e,"chest")}function rh(n,e){if(lo.portal)return xn("portal",n,e);const t=Qn(n,e,3,8);for(let i=1;i<=5;i++)for(const o of[-2,2])i===4&&o===2||Te(n+o,t+i,e,i%3?"obsidian":"crying_obsidian");for(let i=-2;i<=2;i++)Te(n+i,t+1,e,"obsidian"),Te(n+i,t+6,e,"obsidian");Te(n+1,t+1,e+1,"chest")}function vb(n,e){const t=Qn(n,e,4,9);for(const[i,o]of[[-3,-3],[-3,3],[3,-3],[3,3]])for(let s=1;s<=5;s++)Te(n+i,t+s,e+o,"oak_log");for(let i=-3;i<=3;i++)for(let o=-3;o<=3;o++)(Math.abs(i)===3||Math.abs(o)===3||Math.abs(i)+Math.abs(o)>3)&&Te(n+i,t+5,e+o,"oak_planks");Te(n,t+2,e,"crafting_table")}function xb(n,e){if(!Ac(n,e))return!1;if(lo.shipwreck)return xn("shipwreck",n,e);const t=Qn(n,e,6,6);for(let i=-5;i<=5;i++)for(let o=-2;o<=2;o++)(Math.abs(o)===2||Math.abs(i)>3&&o===0)&&Te(n+i,t+1+Math.max(0,Math.abs(i)-3),e+o,"oak_planks");for(let i=-5;i<=5;i++)Te(n+i,t+3,e,"oak_log");Te(n,t+2,e,"chest")}function yb(n,e){if(lo.mansion)return xn("mansion",n,e);const t=Qn(n,e,8,12);for(let i=1;i<=6;i++)for(let o=-8;o<=8;o++)for(let s=-6;s<=6;s++)(Math.abs(o)===8||Math.abs(s)===6||i===6)&&Te(n+o,t+i,e+s,i===6?"dark_oak_planks":"dark_oak_log");for(let i=1;i<=2;i++)Te(n,t+i,e-6,null);Te(n-3,t+1,e+2,"chest"),Te(n+3,t+1,e+2,"chest")}function Mb(n,e){if(lo.trail)return xn("trail",n,e);const t=Qn(n,e,4,5);for(let i=-4;i<=4;i++)for(let o=-4;o<=4;o++)an(n+i,e+o)>.52&&Te(n+i,t+1+Math.floor(an(e+o,n+i)*3),e+o,(i+o)%2?"mud_bricks":"mossy_stone_bricks");Te(n,t+1,e,"chest")}function Sb(n,e){const t=Qn(n,e,5,7);for(let i=-5;i<=5;i++)for(let o=-5;o<=5;o++)for(let s=1;s<=4;s++)(Math.abs(i)===5||Math.abs(o)===5||s===4)&&Te(n+i,t+s,e+o,"stone_bricks");for(let i=1;i<=2;i++)Te(n,t+i,e-5,null);Te(n,t+1,e,"chest")}const Rc=[];function wb(n,e,t=20){const i=[];for(let o=-t;o<=t;o+=4)for(let s=-t;s<=t;s+=4){const a=n+o,r=e+s;if(Math.hypot(a,r)<26)continue;const l=_i(a,r);if(l!=="plains"&&l!=="forest"||!qa(a,r,8,3)||!Ec(a,r,ih,oh,4)||!qa(a,r,12,99))continue;let d=1/0,c=-1/0,u=0,f=0;for(let _=-20;_<=20;_+=5)for(let g=-20;g<=20;g+=5){const b=Bt(a+_,r+g);d=Math.min(d,b),c=Math.max(c,b);const m=_i(a+_,r+g);f++,m!=="plains"&&m!=="forest"&&u++}i.push({x:a,z:r,score:c-d+u/f*4,distance:Math.hypot(o,s)})}return i.length?(i.sort((o,s)=>o.score-s.score||o.distance-s.distance),[i[0].x,i[0].z]):null}function lh(n,e,t){const o=wb(n,e,t==="plains"||t==="forest"?60:24);return o?([n,e]=o,t=_i(n,e),Tc(n,e,ih,oh,4),Rc.push({x:n,z:e}),t==="plains"||t==="forest"?(xn("village_fountain",n,e),xn("village_crossroad",n,e),xn("village_house",n+11,e),xn("village_library",n-11,e),xn("village_armorer",n,e+12),xn("village_weaponsmith",n,e-13),xn("village_butcher",n+13,e+12),xn("village_stable",n-13,e-12)):(nh(n,e),el(n+10,e,t),el(n-10,e,t),el(n,e+10,t)),!0):!1}const Eb=[["ruins",6],["well",5],["outpost",2],["ruined_portal",3],["trail",3],["stronghold",2],["village",1]],Tb={desert:[["pyramid",8]],snowy:[["igloo",7]],forest:[["jungle_temple",6],["swamp_hut",5]],taiga:[["mansion",6]]};function Ab(n,e){const t=[...Eb,...Tb[n]||[]],i=t.reduce((s,[,a])=>s+a,0);let o=e*i;for(const[s,a]of t)if(o-=a,o<0)return s;return t[t.length-1][0]}function Rb(n,e,t,i){const o=fb[n];if(o&&!Ec(e,t,o[0],o[1]))return!1;let s=!1;switch(n){case"ruins":ub(e,t),s=!0;break;case"well":nh(e,t),s=!0;break;case"outpost":s=ah(e,t)!==!1;break;case"ruined_portal":s=rh(e,t)!==!1;break;case"trail":s=Mb(e,t)!==!1;break;case"stronghold":Sb(e,t),s=!0;break;case"village":s=lh(e,t,i);break;case"pyramid":gb(e,t),s=!0;break;case"igloo":s=bb(e,t)!==!1;break;case"jungle_temple":kb(e,t),s=!0;break;case"swamp_hut":vb(e,t),s=!0;break;case"mansion":s=yb(e,t)!==!1;break}return s&&o&&Tc(e,t,o[0],o[1]),s}function ch(n,e){ir.clear(),Xa.clear(),Oo.clear(),Sc.clear(),Rc.length=0,wc.length=0;const t=(n-di)*Ai,i=(n+di+1)*Ai,o=(e-di)*Ai,s=(e+di+1)*Ai;yn={minX:t,maxX:i,minZ:o,maxZ:s};for(let c=t;c<i;c++)for(let u=o;u<s;u++){const f=Bt(c,u);for(let b=-16;b<=f;b++)Te(c,b,u,cb(c,b,u));if(f<1)for(let b=f+1;b<=1;b++)Te(c,b,u,"water");const _=_i(c,u),g=_==="forest"?.965:_==="taiga"?.972:_==="plains"?.991:_==="snowy"?.988:2;an(c,u)>g&&f>1&&Math.abs(c)+Math.abs(u)>8&&iu(c,u,_)}t<=5&&i>5&&o<=-4&&s>-4&&iu(5,-4,"plains"),t<=7&&i>7&&o<=5&&s>5&&db(7,5),t-16<=18&&i+16>18&&o-16<=-14&&s+16>-14&&lh(18,-14,"plains"),t<=28&&i>28&&o<=8&&s>8&&ah(28,8),t<=-18&&i>-18&&o<=14&&s>14&&rh(-18,14);const a=Math.floor((t-16)/24),r=Math.ceil((i+16)/24),l=Math.floor((o-16)/24),d=Math.ceil((s+16)/24);for(let c=a;c<=r;c++)for(let u=l;u<=d;u++){let f=c*24+Math.floor(an(c,u)*8)-4,_=u*24+Math.floor(an(c+51,u-23)*8)-4;if(Math.abs(f)+Math.abs(_)<=38||Math.hypot(f-18,_+14)<=28)continue;if(an(c+137,u-91)<.06){const p=mb(f,_,4,40);if(p){xb(...p);continue}}const g=an(c-71,u+41);if(g>.32)continue;const b=_b(f,_,5,12);if(!b)continue;[f,_]=b;const m=_i(f,_);Rb(Ab(m,g/.32),f,_,m)}or(),bh()}let ou=0;function Cb(n){if(n<ou||!Rt||Jt!==null)return;ou=n+.22;const e=Math.round(G.position.x),t=Math.round(G.position.y),i=Math.round(G.position.z);let o=!1;const s=(a,r,l,d)=>{if(r<-15||r>24||_n(a,r,l))return!1;const c=on(a,r,l);return Ht.set(c,"water"),Oo.set(c,d),o=!0,zo("edit",{key:c,block:"water"}),!0};for(let a=e-12;a<=e+12;a++)for(let r=i-12;r<=i+12;r++)for(let l=t-12;l<=t+8;l++){if(_n(a,l,r)!=="water")continue;const d=on(a,l,r);if(!Xa.has(d)&&!Oo.has(d))continue;const c=Oo.get(d)??(Xa.has(d)?0:7);if(Oo.has(d)||Oo.set(d,c),s(a,l-1,r,c)||c>=7)continue;const u=_n(a,l-1,r);if(u&&u!=="water")for(const[f,_]of[[1,0],[-1,0],[0,1],[0,-1]])s(a+f,l,r+_,c+1)}o&&or()}function Lb(n,e,t,i){return[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]].some(([o,s,a])=>{const r=_n(n+o,e+s,t+a);return!r||r!==i&&jt[r]?.transparent})}function or(){for(;Ms.children.length;)Ms.remove(Ms.children[0]);ql.length=0;const n={};for(const i of Object.keys(jt))n[i]=[];const e=new Map(ir);for(const[i,o]of Ht){const[s,,a]=i.split(",").map(Number);s<yn.minX||s>=yn.maxX||a<yn.minZ||a>=yn.maxZ||(o?e.set(i,o):e.delete(i))}for(const[i,o]of e){const[s,a,r]=i.split(",").map(Number);Lb(s,a,r,o)&&n[o]&&n[o].push({x:s,y:a,z:r})}const t=new wt;for(const[i,o]of Object.entries(n)){if(!o.length)continue;const s=i==="red_bed"||i==="red_bed_head",a=ib(i),r=i==="chest"?ob:i==="red_bed"?sb:i==="red_bed_head"?ab:a.geometry,l=new hp(r,i==="chest"?rb:s?lb:Ku(i),o.length);l.userData.positions=o,l.userData.type=i,o.forEach((d,c)=>{t.makeRotationY(Sc.get(on(d.x,d.y,d.z))||0),t.setPosition(d.x,d.y-(s?.21875:i==="chest"?.0625:0)+a.offset,d.z),l.setMatrixAt(c,t)}),l.castShadow=i.includes("log")||i.includes("leaves"),l.receiveShadow=!0,l.instanceMatrix.needsUpdate=!0,Ms.add(l),ql.push(l)}}const G={position:new F(0,Bt(0,0)+.8,0),velocity:new F,yaw:0,pitch:0,grounded:!1,health:20,hunger:20,xp:0,level:1,highestY:0,hurtCooldown:0,hungerClock:0,regenClock:0};sn.position.copy(G.position).add(new F(0,1.55,0));const Ut={source:null,id:null,name:"Player",peers:new Map,lastSent:0},Bs=new rn;vn.add(Bs);function zo(n,e){!Ut.source||Ut.source.readyState!==EventSource.OPEN||fetch(`/lan/${n}?id=${encodeURIComponent(Ut.id)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).catch(()=>ft("Connection lost. Rejoin the shared world."))}function Jo(){Ut.source&&Ut.source.close(),Ut.source=null,Ut.id=null,Bs.clear(),Ut.peers.clear()}function su(n,e){if(n===Ut.id)return;let t=Ut.peers.get(n);if(!t){t=new rn;const i=new St(new Ct(.52,.75,.28),new Qi({color:2726554})),o=new St(new Ct(.5,.5,.5),new Qi({color:13142368}));i.position.y=.95,o.position.y=1.57,t.add(i,o);for(const s of[-.14,.14]){const a=new St(new Ct(.2,.6,.24),new Qi({color:3361671}));a.position.set(s,.3,0),t.add(a)}Ut.peers.set(n,t),Bs.add(t)}t.position.fromArray(e.position),t.rotation.y=e.yaw}function Pb(){Jo(),Ut.name=document.querySelector("#lan-player-name").value.trim().slice(0,16)||"Player",Ut.id=crypto.randomUUID?.()||`p-${Date.now()}-${Math.floor(Math.random()*1e5)}`;const n=new EventSource(`/lan/events?id=${encodeURIComponent(Ut.id)}`);Ut.source=n;let e=!1;gt("connecting"),document.querySelector("#connection-title").textContent="Joining shared world...",document.querySelector("#connection-detail").textContent="Connecting on your local network",n.onmessage=t=>{if(Ut.source!==n)return;const i=JSON.parse(t.data);if(i.type==="snapshot"){if(!e){let o=At.find(s=>s.id==="shared-local-world");o||(o={id:"shared-local-world",name:"Shared World",mode:"survival",difficulty:"peaceful",peacefulDefaultApplied:!0,created:Date.now(),edits:[]},At.push(o)),Zs(o.id),e=!0}Ht.clear();for(const[o,s]of i.edits)Ht.set(o,s);Os="",Bs.clear(),Ut.peers.clear();for(const[o,s]of i.players)su(o,s);ft("Joined the shared world")}else if(i.type==="edit")Ht.set(i.key,i.block),or(),Cc();else if(i.type==="move")su(i.id,i.player);else if(i.type==="leave"){const o=Ut.peers.get(i.id);o&&Bs.remove(o),Ut.peers.delete(i.id)}},n.onerror=()=>{e?ft("Connection lost; reconnecting…"):(Jo(),document.querySelector("#connection-title").textContent="Could not join",document.querySelector("#connection-detail").textContent="Open the host’s game link while on the same Wi-Fi.")}}const vt=new Set;let Li=!1,au=0,hn="grass_block";function Cn(){return At?.find(n=>n.id===cr)||null}function Dt(){return Cn()?.mode!=="creative"}function sr(){return Cn()?.difficulty==="peaceful"}function $l(n,e="the world"){if(!(!Rt||!Dt()||G.hurtCooldown>0)&&(G.health=Math.max(0,G.health-n),G.hurtCooldown=.65,Gt.classList.remove("hurt"),Gt.offsetWidth,Gt.classList.add("hurt"),Wn(),G.health<=0)){ft(`You were defeated by ${e}. Respawning…`);const t=Cn()?.spawn,i=Cn()?.spawnBed;t&&i&&["red_bed","red_bed_head"].includes(_n(...i))?G.position.fromArray(t):G.position.set(0,Bt(0,0)+.8,0),G.velocity.set(0,0,0),G.health=20,G.hunger=20}}function Ho(n){const e=Math.floor(n.x-.3+.5),t=Math.floor(n.x+.3+.5),i=Math.floor(n.y+.5),o=Math.floor(n.y+1.75+.5),s=Math.floor(n.z-.3+.5),a=Math.floor(n.z+.3+.5);for(let r=e;r<=t;r++)for(let l=i;l<=o;l++)for(let d=s;d<=a;d++)if(_n(r,l,d)&&_n(r,l,d)!=="water")return!0;return!1}function Db(n){Ho(G.position)&&(G.position.y=Bt(Math.round(G.position.x),Math.round(G.position.z))+.8,G.velocity.set(0,0,0));const e=(vt.has("ControlLeft")||vt.has("ControlRight"))&&(!Dt()||G.hunger>3),t=vt.has("ShiftLeft")||vt.has("ShiftRight");G.sneaking=t;const i=t?1.45:e?6.4:4.5,o=Number(vt.has("KeyW"))-Number(vt.has("KeyS")),s=Number(vt.has("KeyD"))-Number(vt.has("KeyA")),a=Math.hypot(o,s)||1,r=Math.sin(G.yaw),l=Math.cos(G.yaw);G.velocity.x=(s/a*l-o/a*r)*i,G.velocity.z=(-(o/a)*l-s/a*r)*i,G.flying&&!Dt()?G.velocity.y=vt.has("Space")?5.5:t?-5.5:0:G.velocity.y-=18*n,vt.has("Space")&&G.grounded&&!G.flying&&(G.velocity.y=7,G.grounded=!1);for(const c of["x","z"]){const u=G.position.clone();if(u[c]+=G.velocity[c]*n,!Ho(u))G.position[c]=u[c];else if(G.grounded){const f=u.clone();f.y+=1,Ho(f)?G.velocity[c]=0:G.position.copy(f)}else G.velocity[c]=0}const d=G.position.clone();if(d.y+=G.velocity.y*n,G.flying&&!Dt())G.position.y=d.y,G.grounded=!1;else if(!Ho(d))G.position.y=d.y,G.grounded=!1,G.highestY=Math.max(G.highestY,G.position.y);else{if(G.velocity.y<0){if(!G.grounded){const c=G.highestY-G.position.y;c>3.4&&$l(Math.ceil(c-3.4),"a hard fall")}G.grounded=!0,G.highestY=G.position.y}G.velocity.y=0}Dt()&&!sr()&&(o||s)&&(G.hungerClock+=n*(e?2.4:.65),G.hungerClock>=18&&(G.hunger=Math.max(0,G.hunger-1),G.hungerClock=0,Wn())),G.position.y<-12&&$l(20,"the void")}const Ei=new Ap;Ei.far=6;const qo=new gp(new bp(new Ct(1.012,1.012,1.012)),new Ou({color:16052453,transparent:!0,opacity:.92}));qo.visible=!1;vn.add(qo);let je=null;function Cc(){Ei.setFromCamera(new Qe(0,0),sn);const n=Ei.intersectObjects(ql,!1).find(o=>o.object.userData.type!=="water"),e=document.querySelector("#block-label");if(!n||n.instanceId==null){je=null,qo.visible=!1,e.classList.remove("visible");return}const t=n.object.userData.positions[n.instanceId];je={...t,normal:n.face.normal.clone(),type:n.object.userData.type},qo.position.set(t.x,t.y,t.z),qo.visible=!0;const i=["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(je.type);e.textContent=jt[je.type].label+(i?" · E / right-click to use":""),e.classList.add("visible")}let so=null,Lc=!1,Pc=!1;const Ni=document.createElement("section");Ni.className="creative-inventory";Ni.innerHTML='<div class="inventory-panel"><header class="inventory-header"><h2>Chest</h2><button class="inventory-close" type="button" aria-label="Close chest">×</button></header><p>Click an item to move one between your backpack and this chest.</p><h3>Chest</h3><div class="crafting-recipes" data-chest-items></div><h3>Backpack</h3><div class="crafting-recipes" data-backpack-items></div></div>';document.querySelector("#app").append(Ni);function dh(){const n=Cn().chests[so],e=(t,i)=>t.filter(([,o])=>o>0).map(([o,s])=>`<button type="button" data-transfer="${i}" data-item="${Ln(o)}">${Ln(jt[o]?.label||o)} ×${s}</button>`).join("")||"<span>Empty</span>";Ni.querySelector("[data-chest-items]").innerHTML=e(Object.entries(n),"backpack"),Ni.querySelector("[data-backpack-items]").innerHTML=e([...kt.entries()],"chest")}function uh(){so&&(so=null,Ni.classList.remove("open"),Vt=!1,Fn(),mi(),Ks())}Ni.addEventListener("click",n=>{if(n.target.closest(".inventory-close"))return uh();const e=n.target.closest("[data-transfer]");if(!e)return;const t=e.dataset.item,i=Cn().chests[so];e.dataset.transfer==="chest"&&(kt.get(t)||0)>0?(kt.set(t,kt.get(t)-1),i[t]=(i[t]||0)+1):e.dataset.transfer==="backpack"&&i[t]>0&&(i[t]--,kt.set(t,(kt.get(t)||0)+1)),dh(),Fn()});const hh=[["iron_ore","iron_ingot"],["gold_ore","gold_ingot"],["copper_ore","copper_ingot"],["deepslate_iron_ore","iron_ingot"],["deepslate_gold_ore","gold_ingot"],["deepslate_copper_ore","copper_ingot"],["cobblestone","stone"],["stone","smooth_stone"]],co=document.createElement("section");co.className="creative-inventory";co.innerHTML='<div class="station-window"><div class="station-art furnace-art"><span class="station-title">Furnace</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close furnace">×</button></div><div class="station-recipes"><p>Choose an item to smelt · 1 coal ore per item</p><div class="crafting-recipes" data-smelting></div></div></div>';document.querySelector("#app").append(co);function fh(){co.querySelector("[data-smelting]").innerHTML=hh.map(([n,e],t)=>{const i=!Dt()||(kt.get(n)||0)>0&&(kt.get("coal_ore")||0)>0;return`<button type="button" data-smelt="${t}" ${i?"":"disabled"}>${Ln(jt[n].label)} → ${Ln(jt[e].label)}</button>`}).join("")}function ph(){Lc=!1,co.classList.remove("open"),Vt=!1,Fn(),mi(),Ks()}co.addEventListener("click",n=>{if(n.target.closest(".station-close"))return ph();const e=n.target.closest("[data-smelt]");if(!e)return;const t=hh[Number(e.dataset.smelt)];if(!t)return;const[i,o]=t;if(Dt()){if(!(kt.get(i)>0)||!(kt.get("coal_ore")>0))return;kt.set(i,kt.get(i)-1),kt.set("coal_ore",kt.get("coal_ore")-1)}kt.set(o,(kt.get(o)||0)+1),Fn(),fh(),ft(`Smelted ${jt[o].label}`)});function $a(){if(je){if(je.type==="crafting_table"){zb();return}if(je.type==="furnace"){Lc=!0,Vt=!0,vt.clear(),document.pointerLockElement&&document.exitPointerLock(),fh(),co.classList.add("open");return}if(je.type==="chest"){const n=Cn();n.chests||={},so=on(je.x,je.y,je.z),n.chests[so]||={},Vt=!0,vt.clear(),document.pointerLockElement&&document.exitPointerLock(),dh(),Ni.classList.add("open")}else if(je.type==="red_bed"||je.type==="red_bed_head"){const n=je.z+(je.type==="red_bed_head"?1:0);Cn().spawn=G.position.toArray(),Cn().spawnBed=[je.x,je.y,n];const e=Rs%240;e>=120?(Rs+=240-e+10,ft("Good morning! Respawn point set.")):ft("Respawn point set. You can sleep at night."),Fn()}}}function Ya(n){if(je){if(n){if(Dt()&&(kt.get(hn)||0)<=0){ft(`Mine ${jt[hn].label} before placing it.`);return}const e=je.x+Math.round(je.normal.x),t=je.y+Math.round(je.normal.y),i=je.z+Math.round(je.normal.z),o=G.position.clone(),s=on(e,t,i),a=Ht.has(s)?Ht.get(s):void 0;if(_n(e,t,i))return ft("There is already a block there.");if(hn==="red_bed"&&(_n(e,t,i-1)||!_n(e,t-1,i)||!_n(e,t-1,i-1)))return ft("A bed needs two clear blocks on solid ground.");if(Ht.set(s,hn),hn==="red_bed"&&Ht.set(on(e,t,i-1),"red_bed_head"),Ho(o)){a===void 0?Ht.delete(s):Ht.set(s,a),hn==="red_bed"&&Ht.delete(on(e,t,i-1));return}Dt()&&kt.set(hn,(kt.get(hn)||0)-1),zo("edit",{key:on(e,t,i),block:hn}),hn==="red_bed"&&zo("edit",{key:on(e,t,i-1),block:"red_bed_head"})}else{if(je.type==="water")return;if(je.type==="bedrock"){ft("Bedrock cannot be mined.");return}if(je.type==="chest"&&Object.values(Cn()?.chests?.[on(je.x,je.y,je.z)]||{}).some(e=>e>0))return ft("Empty the chest before mining it.");if(je.type==="red_bed"||je.type==="red_bed_head"){const e=je.z+(je.type==="red_bed"?-1:1),t=on(je.x,je.y,e);Ht.set(t,null),zo("edit",{key:t,block:null})}if(Ht.set(on(je.x,je.y,je.z),null),zo("edit",{key:on(je.x,je.y,je.z),block:null}),Dt()){const e=je.type==="red_bed_head"?"red_bed":je.type;kt.set(e,(kt.get(e)||0)+1),G.xp+=1,G.xp>=G.level*8&&(G.xp=0,G.level+=1)}}mh(),mi(),Wn(),or(),Cc(),Fn()}}const Pi=["grass_block","dirt","stone","oak_planks","oak_log","glass","bricks","diamond_block","redstone_block"];let Qo=0,Vt=!1,zs="All",eo="oak_log",Fa=0;const kt=new Map;let fi=0;const Ib=new is({color:12089942}),Ub=new is({color:4165512}),Hs=new rn;Hs.position.set(0,0,-1);sn.add(Hs);function _h(n,e=!1){const t=new rn,i=new St(new Ct(.24,.48,.24),Ub);i.position.y=-.08;const o=new St(new Ct(.23,.28,.23),Ib);return o.position.y=-.43,t.add(i,o),t.position.set(n,-.32,-.34),t.rotation.set(-.42,0,e?-.22:.22),t}const ja=_h(.62),Dc=_h(-.62,!0),ar=new St(new Ct(.24,.24,.24));ar.position.set(-.03,-.58,-.11);ar.rotation.set(.35,.55,0);ja.add(ar);const rr=new St(new Ct(.2,.2,.2));rr.position.set(.03,-.56,-.1);rr.rotation.set(.25,-.5,0);Dc.add(rr);Hs.add(ja,Dc);function ru(n){const e=Ku(n)[0];return new is({map:e.map,color:16777215,transparent:e.transparent,opacity:e.opacity,alphaTest:e.alphaTest})}function Nb(){ar.material=ru(hn),rr.material=ru(eo);const n=document.querySelector("#offhand-icon");if(n){const e=jt[eo]||jt.stone;n.setAttribute("style",Ic(e))}}function mh(){Fa=1}function Ic(n){const e=yc(n.id);return`--block-color:${n.color};--block-accent:${n.accent}${e?`;--block-image:url(${nr(`textures/block/${e}.png`)})`:""}`}function Wn(){const n=Dt();document.querySelector("#survival-bars")?.classList.toggle("creative",!n);const t=Cn(),i=t?.mode||"survival",o=document.querySelector("#mode-label");o&&(o.textContent=`${i.toUpperCase()} · ${(t?.difficulty||"peaceful").toUpperCase()}`);const s=document.querySelector("#food-count");s&&(s.textContent=n?`Food: ${fi} · R to eat`:"");const a=document.querySelector("#open-inventory");a&&(a.innerHTML=n?"<kbd>E</kbd> BACKPACK":`<kbd>E</kbd> ${Xl.length} BLOCKS`);const r=document.querySelector("#health-bar"),l=document.querySelector("#hunger-bar");r&&(r.innerHTML=Array.from({length:10},(u,f)=>{const _=G.health-f*2;return`<i class="heart ${_<=0?"empty":_===1?"half":""}">♥</i>`}).join("")),l&&(l.innerHTML=Array.from({length:10},(u,f)=>{const _=G.hunger-f*2;return`<i class="food ${_<=0?"empty":_===1?"half":""}">◆</i>`}).join(""));const d=Math.max(1,G.level*8);document.querySelector("#xp-fill")?.style.setProperty("width",`${G.xp/d*100}%`);const c=document.querySelector("#xp-level");c&&(c.textContent=G.level)}const Gs=new rn;vn.add(Gs);let pi=[];const Fb=new zu,Uc={};for(const[n,e]of Object.entries({cow:"cow/temperate_cow.png",pig:"pig/temperate_pig.png",sheep:"sheep/sheep.png",wool:"sheep/sheep_wool.png",chicken:"chicken/temperate_chicken.png",villager:"villager/villager.png"})){const t=Fb.load(nr(`textures/entity/${e}`));t.magFilter=Xt,t.minFilter=Xt,t.colorSpace=Ft,Uc[n]=new Qi({map:t,transparent:n==="wool",alphaTest:.1})}Uc.iron_golem=new Qi({color:14144968,flatShading:!0});function lu(n,e,t,i=64){const[o,s,a]=e,[r,l]=t,d=new Ct(o/16,s/16,a/16),c=d.attributes.uv;return[[r+a+o,l+a,a,s],[r,l+a,a,s],[r+a,l,o,a],[r+a+o,l,o,a],[r+2*a+o,l+a,o,s],[r+a,l+a,o,s]].forEach(([f,_,g,b],m)=>{const p=f/64,E=(f+g)/64,A=1-_/i,w=1-(_+b)/i;[[p,A],[E,A],[p,w],[E,w]].forEach(([N,D],C)=>c.setXY(m*4+C,N,D))}),new St(d,Uc[n])}function Oa(n,e,t,i){const o=new rn,s=[],a=n==="chicken"||n==="sheep"?32:64;function r(c,u,f,_,g=a){const b=lu(c,u,f,g);return b.position.set(..._),o.add(b),b}function l(c,u,f,_){const g=new rn;g.position.set(_[0],_[1]+u[1]/32,_[2]);const b=lu(c,u,f,a);b.position.y=-u[1]/32,g.add(b),o.add(g),s.push(g)}if(n==="iron_golem"){r(n,[18,12,6],[0,0],[0,1.5,0]),r(n,[8,10,8],[0,0],[0,2.2,-.03]);for(const c of[-.69,.69])r(n,[4,30,6],[0,0],[c,1.1,0]);for(const c of[-.22,.22])l(n,[6,16,5],[0,0],[c,.5,0])}else if(n==="villager"){r(n,[8,12,6],[16,20],[0,.75,0]),r(n,[8,10,8],[0,0],[0,1.43,0]),r(n,[2,4,2],[24,0],[0,1.36,-.31]),r(n,[8,4,4],[44,22],[0,.91,-.25]);for(const c of[-.125,.125])l(n,[4,12,4],[0,22],[c,.375,0])}else if(n==="chicken"){r(n,[6,8,6],[0,9],[0,.48,0]),r(n,[4,6,3],[0,0],[0,.85,-.2]),r(n,[4,2,2],[14,0],[0,.79,-.35]),r(n,[2,2,2],[14,4],[0,.67,-.35]);for(const c of[-.14,.14])l(n,[3,5,3],[26,0],[c,.16,0]);for(const c of[-.22,.22])r(n,[1,4,6],[24,13],[c,.5,0])}else{const c=n==="cow",u=n==="sheep",_=r(u?"wool":n,c?[12,18,10]:u?[8,16,6]:[10,16,8],c?[18,4]:[28,8],[0,c?.82:.65,0],u?32:64);_.rotation.x=Math.PI/2;const g=c?1.125:.75,b=c||u?-.6875:-.625;if(r(n,c?[8,8,6]:u?[6,6,8]:[8,8,8],[0,0],[0,g,b]),n==="pig"&&r(n,[4,3,1],[16,16],[0,g-.04,b-.28]),c){for(const E of[-.22,.22])r(n,[1,3,1],[22,0],[E,1.32,b]);const p=r(n,[4,6,1],[52,0],[0,.49,.22]);p.rotation.x=Math.PI/2}u&&r("wool",[6,2,8],[0,0],[0,g+.22,b+.03],32);const m=c?12:6;for(const p of[-.22,.22])for(const E of[-.36,.36])l(n,[4,m,4],[0,16],[p,m/32,E])}const d={type:n,health:4,speed:.48,direction:an(e,t)*Math.PI*2,turnClock:1+an(e+5,t-8)*4,attackClock:0,legs:s};o.userData.mob=d,o.position.set(e,i,t),o.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.userData.mobRoot=o)}),Gs.add(o),pi.push(o)}function gh(){if(!Rt||Jt!==null||Vt)return;const n=pi.filter(i=>i.position.distanceTo(G.position)<15).length;if(n>=4)return;const e=["cow","pig","sheep","chicken"];let t=0;for(const i of[0,.65,-.65,1.3,-1.3,2.2,-2.2,Math.PI]){const o=G.yaw+i,s=5+t*1.5,a=Math.round(G.position.x-Math.sin(o)*s),r=Math.round(G.position.z-Math.cos(o)*s),l=ws(_n,yn,a,r,G.position.y-.5,2);if(!(l===null||pi.some(d=>Math.hypot(d.position.x-a,d.position.z-r)<2))&&(Oa(e[(pi.length+t)%e.length],a,r,l),++t>=Math.min(2,4-n)))break}}function bh(){Gs.clear(),pi=[];for(let n=yn.minX+6;n<yn.maxX-6;n+=13)for(let e=yn.minZ+6;e<yn.maxZ-6;e+=13){const t=an(n+77,e-33);if(t<.55||Math.hypot(n-G.position.x,e-G.position.z)<8)continue;const i=Math.round(n+an(n,e)*4),o=Math.round(e+an(e,n)*4),s=ws(_n,yn,i,o,Bt(i,o),4);if(s===null)continue;const a=_i(i,o),r=t>.9?"chicken":a==="forest"?"pig":a==="taiga"||a==="snowy"?"sheep":"cow";Oa(r,i,o,s)}for(const n of Rc){let e=0;for(const[s,a]of[[4,0],[-4,0],[0,-4],[4,4],[-4,-4]]){const r=n.x+s,l=n.z+a,d=ws(_n,yn,r,l,Bt(r,l),4);if(!(d===null||pi.some(c=>Math.hypot(c.position.x-r,c.position.z-l)<2))&&(Oa("villager",r,l,d),++e===3))break}const t=n.x+5,i=n.z+5,o=ws(_n,yn,t,i,Bt(t,i),4);o!==null&&Oa("iron_golem",t,i,o)}gh()}function Ob(n,e){for(const t of pi){const i=t.userData.mob,o=G.position.x-t.position.x,s=G.position.z-t.position.z,a=Math.hypot(o,s);if(i.turnClock-=n,i.attackClock=Math.max(0,i.attackClock-n),i.turnClock<=0&&(i.direction+=(an(Math.floor(t.position.x+e),Math.floor(t.position.z))-.5)*2.8,i.turnClock=2+an(Math.floor(t.position.z),Math.floor(e*3))*5),a>3){const l=t.position.x+Math.sin(i.direction)*i.speed*n,d=t.position.z+Math.cos(i.direction)*i.speed*n,c=ws(_n,yn,l,d,t.position.y-.5,1);c!==null&&Math.abs(c-t.position.y)<=1?t.position.set(l,c,d):i.direction+=Math.PI,t.rotation.y=i.direction+Math.PI,i.legs.forEach((u,f)=>{u.rotation.x=Math.sin(e*7+f*Math.PI)*.48})}else i.legs.forEach(l=>{l.rotation.x=0})}}function kh(){Ei.setFromCamera(new Qe(0,0),sn);const n=Ei.far;Ei.far=3.2;const e=Ei.intersectObjects(Gs.children,!0)[0];if(Ei.far=n,!e)return!1;const t=e.object.userData.mobRoot;if(!t?.userData.mob)return!1;if(t.userData.mob.health-=2,mh(),t.position.add(new F(Math.sin(G.yaw+Math.PI)*.55,.18,Math.cos(G.yaw+Math.PI)*.55)),t.userData.mob.health<=0){const i=t.userData.mob.type;Gs.remove(t),pi=pi.filter(o=>o!==t),G.xp+=3,Dt()&&i!=="villager"?(fi+=2,ft("Collected 2 food · press R to eat")):ft(`${i[0].toUpperCase()+i.slice(1)} defeated`),Wn()}return!0}function mi(){const n=document.querySelector("#hotbar");n.innerHTML=Pi.map((e,t)=>{const i=jt[e]||jt.stone,o=kt.get(e)||0;return`
      <button class="slot ${t===Qo?"selected":""}" data-hotbar-index="${t}" data-block="${i.id}" type="button" title="${Ln(i.label)}">
        <kbd>${t+1}</kbd><i class="block-icon" style="${Ic(i)}"></i><b>${Dt()?o:"∞"}</b>
      </button>`}).join(""),Nb()}function Za(n){Qo=(n+Pi.length)%Pi.length,hn=Pi[Qo],mi()}function Bb(){const n=eo;eo=hn,Pi[Qo]=n,hn=n,mi(),ft(`${jt[eo].label} moved to offhand`)}function vh(n){jt[n]&&(Pi[Qo]=n,hn=n,mi(),rs())}const xh=[...["oak","spruce","birch","jungle","acacia","dark_oak","mangrove","cherry","pale_oak"].flatMap(n=>[{input:`${n}_log`,cost:1,output:`${n}_planks`,count:4},{input:`${n}_planks`,cost:3,output:`${n}_slab`,count:6},{input:`${n}_planks`,cost:6,output:`${n}_stairs`,count:4}]),{input:"stone",cost:4,output:"stone_bricks",count:4},{input:"oak_planks",cost:8,output:"chest",count:1},{input:"oak_planks",cost:4,output:"crafting_table",count:1},{input:"cobblestone",cost:8,output:"furnace",count:1},{input:"red_wool",cost:3,output:"red_bed",count:1}],uo=document.createElement("section");uo.className="creative-inventory";uo.innerHTML='<div class="station-window"><div class="station-art crafting-art"><span class="station-title">Crafting</span><span class="station-inventory-title">Inventory</span><button class="station-close" type="button" aria-label="Close crafting table">×</button></div><div class="station-recipes"><p>Choose a recipe</p><div class="crafting-recipes" data-table-recipes></div></div></div>';document.querySelector("#app").append(uo);function zb(){Pc=!0,Vt=!0,vt.clear(),document.pointerLockElement&&document.exitPointerLock(),Nc(),uo.classList.add("open")}function yh(){Pc=!1,uo.classList.remove("open"),Vt=!1,Fn(),mi(),Ks()}uo.addEventListener("click",n=>{if(n.target.closest(".station-close"))return yh();const e=n.target.closest("[data-recipe]");e&&Mh(Number(e.dataset.recipe))});function Nc(){const n=document.querySelector("#crafting-recipes"),e=xh.map((t,i)=>{const o=!Dt()||(kt.get(t.input)||0)>=t.cost;return`<button type="button" data-recipe="${i}" ${o?"":"disabled"}>${t.cost} ${Ln(jt[t.input].label)} → ${t.count} ${Ln(jt[t.output].label)}</button>`}).join("");n.innerHTML=e,uo.querySelector("[data-table-recipes]").innerHTML=e}function Mh(n){const e=xh[n];if(e){if(Dt()){const t=kt.get(e.input)||0;if(t<e.cost)return;kt.set(e.input,t-e.cost),kt.set(e.output,(kt.get(e.output)||0)+e.count),Fn()}vh(e.output),Nc(),ft(`Crafted ${e.count} ${jt[e.output].label}`)}}function rs(){const n=document.querySelector("#block-search")?.value.trim().toLowerCase()||"",e=Xl.filter(i=>(zs==="All"||i.category===zs)&&(!n||i.label.toLowerCase().includes(n)||i.id.includes(n.replaceAll(" ","_")))&&(!Dt()||(kt.get(i.id)||0)>0)),t=document.querySelector("#block-grid");t&&(t.innerHTML=e.length?e.map(i=>`
    <button class="inventory-slot ${i.id===hn?"selected":""}" data-inventory-block="${i.id}" type="button" title="${Ln(i.label)}">
      <i class="block-icon" style="${Ic(i)}"></i>
      <span>${Ln(i.label)}${Dt()?` ×${kt.get(i.id)}`:""}</span>
    </button>`).join(""):'<p class="inventory-empty">Mine blocks to fill your backpack.</p>',document.querySelector("#inventory-result-count").textContent=Dt()?`${e.length} collected block types`:`${e.length} / ${Xl.length} blocks`)}function Hb(){const n=document.querySelector("#block-categories");n.innerHTML=_g.map(e=>`
    <button class="inventory-tab ${e===zs?"selected":""}" data-block-category="${e}" type="button">${e}</button>
  `).join(""),rs(),mi()}function Fc(){if(!Rt||Vt)return;document.querySelector(".inventory-header h2").textContent=Dt()?"Backpack":"Creative Inventory",document.querySelector(".inventory-footer").innerHTML=Dt()?"Mine blocks to collect them · choose a slot with <kbd>1–9</kbd> · <kbd>E</kbd> to close":"Choose a hotbar slot with <kbd>1–9</kbd>, then click a block to equip it · <kbd>E</kbd> to close",rs(),Nc(),Vt=!0,vt.clear();const n=document.querySelector("#creative-inventory");n.classList.add("open"),n.setAttribute("aria-hidden","false"),document.pointerLockElement&&document.exitPointerLock(),document.querySelector("#block-search").blur()}function Sh(){if(!Vt)return;Vt=!1;const n=document.querySelector("#creative-inventory");n.classList.remove("open"),n.setAttribute("aria-hidden","true"),document.querySelector("#block-search").value="",rs(),Ks()}const Es=document.querySelector("#app"),cn={worlds:"java-menu-worlds-v1",servers:"java-menu-servers-v1",settings:"java-menu-settings-v1",parkour:"java-menu-parkour-v1",dozen:"java-menu-dozen-v1"},wh={fov:72,distance:4,volume:70,bobbing:!0,highContrast:!1,blur:!0,autoJump:!1,narrator:!1,language:"en"};function Ys(n,e){try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}}function Nn(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{ft("Browser storage is unavailable.")}}const to="play",Ti={minecraft:{name:"Minecraft",version:"Java Edition 1.21.8",linkLabel:"/?play=minecraft",movement:!0,controls:[{keys:["W","A","S","D"],label:"Move"},{keys:["SPACE"],label:"Jump"},{keys:["SHIFT"],label:"Sprint"},{keys:["E"],label:"Inventory"},{keys:["ESC"],label:"Pause menu"}]},parkour:{name:"Parkour Obby",version:"Roblox Server · Obby #1",linkLabel:"/?play=parkour",movement:!0,controls:[{keys:["W","A","S","D"],label:"Move"},{keys:["SPACE"],label:"Jump"},{keys:["SHIFT"],label:"Sprint"},{keys:["R"],label:"Respawn at checkpoint"},{keys:["ESC"],label:"Pause menu"}]},dozen:{name:"12 Dozen",version:"Math Platformer · 144",linkLabel:"/?play=dozen",movement:!0,controls:[{keys:["W","A","S","D"],label:"Move"},{keys:["SPACE"],label:"Jump"},{keys:["M"],label:"Toggle 2D map view"},{keys:["R"],label:"Reset to checkpoint"},{keys:["ESC"],label:"Pause menu"}]}};function ao(n){const e=new URL(location.href);n?e.searchParams.set(to,n):e.searchParams.delete(to);try{history.replaceState(null,"",e)}catch{}}function lr(){const n=Ys(cn.parkour,{})||{};if(!n.levels||typeof n.levels!="object"){const e={};typeof n.best=="number"&&(e[1]=n.best),n.levels=e}return typeof n.highest!="number"&&(n.highest=Object.keys(n.levels).reduce((e,t)=>Math.max(e,Number(t)||0),0)),n}function Gb(n){return lr().levels?.[n]??null}function Vb(){return Math.max(1,(lr().highest||0)+1)}function Wb(n,e){const t=lr(),i=t.levels[n],o=i==null||e<i;return t.levels[n]=o?e:i,t.highest=Math.max(t.highest||0,n),t.runs=(t.runs||0)+1,Nn(cn.parkour,t),ur(),{isBest:o,best:t.levels[n],nextLevel:n+1}}function Eh(){return 6+(Math.floor(Date.now()/36e5)*7+3)%19}function Oc(){return Ys(cn.dozen,{})||{}}function Th(){const n=Oc();return typeof n.best=="number"?n.best:null}function Xb(n){const e=Oc(),t=typeof e.best!="number"||n<e.best,i=t?n:e.best;return Nn(cn.dozen,{best:i,runs:(e.runs||0)+1}),ur(),{isBest:t,best:i}}let Ze={...wh,...Ys(cn.settings,{})},At=Ys(cn.worlds,[{id:"first-world",name:"My World",mode:"survival",difficulty:"peaceful",cheats:!1,created:Date.now(),lastPlayed:Date.now(),edits:[],position:[0,Bt(0,0)+.8,0]}]);for(const n of At)n.peacefulDefaultApplied||(n.mode!=="hardcore"&&(n.difficulty="peaceful"),n.peacefulDefaultApplied=!0);let pn=Ys(cn.servers,[{id:"local-demo",name:"Local Test Server",address:"localhost:25565"}]),Jt="launcher",cr=null,fn=At[0]?.id??null,Tn=pn[0]?.id??null,Ka=null,Rt=!1,cu="launcher",du="launcher",uu="launcher",Ja="singleplayer",Yl=null,jl=null,hu=null,tl=0;di=Ze.distance;sn.fov=Ze.fov;sn.updateProjectionMatrix();const fu={en:{launch:"Play",singleplayer:"Worlds",multiplayer:"Join a World",options:"Settings",quit:"Quit",splash:"Now with twelve dozen math!"},zh:{launch:"开始游戏",singleplayer:"世界",multiplayer:"加入世界",options:"设置",quit:"退出",splash:"现在有十二打数学了！"},es:{launch:"Jugar",singleplayer:"Mundos",multiplayer:"Unirse a un mundo",options:"Ajustes",quit:"Salir",splash:"¡Ahora con doce docenas de mates!"},de:{launch:"Spielen",singleplayer:"Welten",multiplayer:"Welt beitreten",options:"Einstellungen",quit:"Beenden",splash:"Jetzt mit zwölf Dutzend Mathe!"}};function qb(){const n=fu[Ze.language]||fu.en;document.documentElement.lang=Ze.language;for(const e of["launch","singleplayer","multiplayer","options","quit"])for(const t of document.querySelectorAll(`#launcher-screen [data-action="${e}"]`))t.textContent=n[e];document.querySelector("#splash-text").textContent=n.splash,document.querySelectorAll("[data-lang]").forEach(e=>e.classList.toggle("selected",e.dataset.lang===Ze.language))}function dr(){di=Number(Ze.distance),sn.fov=Number(Ze.fov),sn.updateProjectionMatrix(),vn.fog.near=di*Ai*.7,vn.fog.far=(di*2+1)*Ai*.9,Es.classList.toggle("high-contrast",Ze.highContrast),Es.classList.toggle("no-blur",!Ze.blur),document.querySelector("#fov-slider").value=Ze.fov,document.querySelector("#render-distance").value=Ze.distance,document.querySelector("#volume-slider").value=Ze.volume,document.querySelector("#fov-value").textContent=Ze.fov,document.querySelector("#fov-label").textContent=Ze.fov===72?"Normal":Ze.fov>=100?"Quake Pro":Ze.fov,document.querySelector("#distance-value").textContent=`${Ze.distance} chunks`,document.querySelector("#volume-value").textContent=Ze.volume?`${Ze.volume}%`:"OFF",xs("#bob-toggle","View Bobbing",Ze.bobbing),xs("#high-contrast","High Contrast",Ze.highContrast),xs("#menu-background","Menu Background Blur",Ze.blur),xs("#auto-jump","Auto-Jump",Ze.autoJump),xs("#narrator","Narrator",Ze.narrator),document.querySelector("#fullscreen-toggle").textContent=`Fullscreen: ${document.fullscreenElement?"ON":"OFF"}`,qb(),Os=""}function xs(n,e,t){const i=document.querySelector(n);i.dataset.value=String(t),i.textContent=`${e}: ${t?"ON":"OFF"}`}function ei(){Nn(cn.settings,Ze),dr()}function gt(n,{focus:e=!0}={}){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),Jt=n;const t=n?document.querySelector(`#${n}-screen`):null;t?.classList.add("active"),Es.dataset.screen=n||"game",Es.classList.toggle("gameplay",!n||Rt&&n==="pause"),Es.scrollTop=0,n==="launcher"&&ur(),e&&t&&requestAnimationFrame(()=>(t.querySelector("[data-autofocus]")||t.querySelector("button:not(:disabled), input"))?.focus({preventScroll:!0})),Ze.narrator&&t&&Bc(t.querySelector("h1")?.textContent||n)}function ft(n){const e=document.querySelector("#toast");e.textContent=n,e.classList.add("show"),clearTimeout(hu),hu=setTimeout(()=>e.classList.remove("show"),2600)}function Bc(n){"speechSynthesis"in window&&(speechSynthesis.cancel(),speechSynthesis.speak(new SpeechSynthesisUtterance(n)))}let Si;function $b(){if(Ze.volume)try{Si||=new AudioContext;const n=Si.createOscillator(),e=Si.createGain();n.type="square",n.frequency.setValueAtTime(170,Si.currentTime),e.gain.setValueAtTime(Ze.volume/2500,Si.currentTime),e.gain.exponentialRampToValueAtTime(1e-4,Si.currentTime+.045),n.connect(e).connect(Si.destination),n.start(),n.stop(Si.currentTime+.05)}catch{}}function Ah(n){return new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(new Date(n))}function Rh(){return[...At].sort((n,e)=>(e.lastPlayed||0)-(n.lastPlayed||0))[0]||null}function ur(){const n=Rh(),e=At.length,t=document.querySelector("#game-card-title");t&&(t.textContent=Ti.minecraft.name);const i=document.querySelector("#game-launch-link");if(i){const p=`?${to}=minecraft`;i.setAttribute("href",p),i.textContent=`/${p}`,i.title=`Direct launch link for ${Ti.minecraft.name}`}const o=document.querySelector('[data-game-card="minecraft"] .game-version');o&&(o.textContent=Ti.minecraft.version),document.querySelector("#launcher-world-count").textContent=`${e} world${e===1?"":"s"}`,document.querySelector("#launcher-last-played").textContent=n?`Last played ${Ah(n.lastPlayed)}`:"No worlds yet",document.querySelector("#launch-hint").innerHTML=n?`Continue <strong>${Ln(n.name)}</strong>`:"Create your first world to start playing";const s=lr(),a=Math.max(1,(s.highest||0)+1),r=s.levels?.[a],l=r!=null?Ji(r):null,d=document.querySelector("#parkour-launch-link");if(d){const p=`?${to}=parkour`;d.setAttribute("href",p),d.textContent=`/${p}`,d.title=`Direct launch link for ${Ti.parkour.name}`}const c=document.querySelector("#parkour-best");c&&(c.textContent=s.highest>0?`Level ${a} · ${l?`Best ${l}`:"not cleared"}`:"No best time yet");const u=document.querySelector("#parkour-online");u&&(u.textContent=`${Eh()} online`);const f=document.querySelector("#parkour-hint");f&&(f.innerHTML=s.highest>0?`Endless levels · next up <strong>Level ${a}</strong>${s.runs?` · ${s.runs} run${s.runs===1?"":"s"}`:""}`:"Endless levels · timer · best time");const _=Th(),g=document.querySelector("#dozen-launch-link");if(g){const p=`?${to}=dozen`;g.setAttribute("href",p),g.textContent=`/${p}`,g.title=`Direct launch link for ${Ti.dozen.name}`}const b=document.querySelector("#dozen-best");b&&(b.textContent=_!=null?`Best ${Ji(_)}`:"No best time yet");const m=document.querySelector("#dozen-hint");if(m){const p=Oc().runs||0;m.innerHTML=_!=null?`Target <strong>144</strong> · best ${Ji(_)}${p?` · ${p} run${p===1?"":"s"}`:""}`:"Start at 12 · build up to 144"}Yb()}function Zl(n){return n.map(e=>`<kbd>${e}</kbd>`).join("")}function Yb(){for(const n of document.querySelectorAll("[data-game-card]")){const e=n.dataset.gameCard,t=Ti[e];let i=n.querySelector(".game-controls-row");if(!t?.movement){i?.remove();continue}i||(i=document.createElement("p"),i.className="game-controls-row",n.querySelector(".game-details")?.append(i));const o=t.controls[0],s=t.controls[1];i.innerHTML=`
      <span class="game-controls-label">Controls</span>
      <span class="game-controls-keys">${Zl(o.keys)} <span>${o.label}</span> · ${Zl(s.keys)} <span>${s.label}</span></span>
      <button class="game-link-copy game-controls-open" type="button" data-action="game-controls" data-game="${e}">View</button>`}}let Kl=null;function jb(n){const e=Ti[n],t=document.querySelector("#game-controls-dialog");!e||!t||(Kl=n,t.dataset.game=n,document.querySelector("#game-controls-game").textContent=`${e.name} · ${e.version}`,document.querySelector("#game-controls-list").innerHTML=e.controls.map(({keys:i,label:o})=>`<div><span>${o}</span><span class="game-controls-chips">${Zl(i)}</span></div>`).join(""),t.classList.add("open"),t.setAttribute("aria-hidden","false"),document.querySelector('[data-action="close-game-controls"]')?.focus(),Ze.narrator&&Bc(`Controls for ${e.name}`))}function zc(){const n=document.querySelector("#game-controls-dialog");n?.classList.contains("open")&&(n.classList.remove("open"),n.setAttribute("aria-hidden","true"),Kl&&document.querySelector(`[data-game-card="${Kl}"] [data-action="game-controls"]`)?.focus())}function Zb(){const n=Rh();if(!n){Ja="launcher",Gc(),gt("create-world"),ft("Create a world to start playing");return}Zs(n.id)}let Ts=null;function Kb(){document.querySelector('#launcher-screen [data-action="multiplayer"]')?.remove();const e=document.querySelector(".launcher-actions");e&&(e.style.gridTemplateColumns="repeat(3, minmax(0, 1fr))")}function Jb(){Ts??=zg({canvas:Gt,renderer:qn,onlineCount:Eh(),getBest:n=>Gb(n),onFinish:(n,e)=>Wb(n,e),onExit:()=>{gt("launcher"),ao(null)}}),Rt=!1,Jo(),gt("parkour",{focus:!1}),ao("parkour"),Ts.start(Vb())}let As=null;function Qb(){As??=$g({canvas:Gt,renderer:qn,getBest:()=>Th(),onFinish:n=>Xb(n),onExit:()=>{gt("launcher"),ao(null)}}),Rt=!1,Jo(),gt("dozen",{focus:!1}),ao("dozen"),As.start()}function Ch(n="minecraft"){n==="parkour"?Jb():n==="dozen"?Qb():Zb()}async function ek(n="minecraft"){const e=new URL(`?${to}=${n}`,location.href).href;try{await navigator.clipboard.writeText(e),ft("Launch link copied")}catch{ft(e)}}function js(){const n=document.querySelector("#world-list");At.length?(At.some(e=>e.id===fn)||(fn=At[0].id),n.innerHTML=At.map(e=>`
      <button class="list-item ${e.id===fn?"selected":""}" data-world-id="${e.id}" role="option" aria-selected="${e.id===fn}" type="button">
        <i class="world-icon ${e.mode}"></i>
        <span><strong>${Ln(e.name)}</strong><small>${Ah(e.lastPlayed)}<br>${Vs(e.mode)} · ${Vs(e.difficulty)}${e.cheats?" · Cheats":""}</small></span>
        <small>v1.21.8</small>
      </button>`).join("")):(n.innerHTML='<div class="empty-state">No worlds found.<br>Create one to begin.</div>',fn=null);for(const e of["play-world","edit-world","delete-world","recreate-world"])document.querySelector(`#${e}`).disabled=!fn}function es(){const n=document.querySelector("#server-list");pn.length?(pn.some(e=>e.id===Tn)||(Tn=pn[0].id),n.innerHTML=pn.map(e=>`
      <button class="list-item ${e.id===Tn?"selected":""}" data-server-id="${e.id}" role="option" aria-selected="${e.id===Tn}" type="button">
        <i class="server-icon"></i><span><strong>${Ln(e.name)}</strong><small>${Ln(e.address)}</small></span><i class="ping-bars">▂▄▆█</i>
      </button>`).join("")):(n.innerHTML='<div class="empty-state">Scanning for games on your local network...</div>',Tn=null);for(const e of["join-server","edit-server","delete-server"])document.querySelector(`#${e}`).disabled=!Tn}function Ln(n){const e=document.createElement("span");return e.textContent=String(n),e.innerHTML}const Vs=n=>n.charAt(0).toUpperCase()+n.slice(1);function Zs(n){const e=At.find(s=>s.id===n);if(!e)return;cr=e.id,fn=e.id,Ht.clear();for(const[s,a]of e.edits||[])Ht.set(s,a);const t=e.position||[0,Bt(0,0)+.8,0];G.position.fromArray(t);const i=Bt(Math.round(G.position.x),Math.round(G.position.z))+.8;(G.position.y>i+.4||Ho(G.position))&&(G.position.y=i),G.velocity.set(0,0,0),G.yaw=e.yaw||0,G.pitch=0,G.health=e.health??20,G.hunger=sr()?20:e.hunger??20,fi=e.foodCount??0,G.xp=e.xp??0,G.level=e.level??1,G.highestY=G.position.y,kt.clear();for(const[s,a]of e.inventory||[])kt.set(s,a);if(eo=e.offhand||"oak_log",e.lastPlayed=Date.now(),Nn(cn.worlds,At),Rt=!0,Os="",ao("minecraft"),mi(),Wn(),gt(null),Gt.focus({preventScroll:!0}),matchMedia("(pointer: coarse)").matches)return;Gt.requestPointerLock()?.catch(()=>ft("Use WASD to move and E for inventory."))}function Fn(){const n=At.find(e=>e.id===cr);n&&(n.position=G.position.toArray(),n.yaw=G.yaw,n.health=G.health,n.hunger=G.hunger,n.foodCount=fi,n.xp=G.xp,n.level=G.level,n.inventory=[...kt.entries()],n.offhand=eo,n.lastPlayed=Date.now(),n.edits=[...Ht.entries()].slice(-3e3),Nn(cn.worlds,At))}function Ks(){if(gt(null),matchMedia("(pointer: coarse)").matches)return;Gt.requestPointerLock()?.catch(()=>ft("Mouse capture was blocked by the browser."))}function tk(){Fn(),Jo(),Rt=!1,cr=null,document.pointerLockElement&&document.exitPointerLock(),ao(!1),gt("launcher"),ft("World saved")}function Lh(n,e,t){const i=document.querySelector("#confirm-dialog");document.querySelector("#confirm-title").textContent=n,document.querySelector("#confirm-message").textContent=e,Yl=t,i.classList.add("open"),i.setAttribute("aria-hidden","false"),document.querySelector("#confirm-no").focus()}function Hc(n){const e=document.querySelector("#confirm-dialog");e.classList.remove("open"),e.setAttribute("aria-hidden","true"),n&&Yl?.(),Yl=null}function Gc(n=null){const e=n?`${n.name} Copy`:"New World";document.querySelector("#world-name").value=e,document.querySelector("#folder-name").textContent=e;const t=n?.mode||"survival",i=n?.difficulty||"peaceful",o=n?.cheats||!1;Ws("game-mode",t),Ws("difficulty",i),Ph("allow-cheats","Allow Cheats",o)}function Ws(n,e){const t=document.querySelector(`#${n}`);t.dataset.value=e;const i=n==="game-mode"?"Game Mode":"Difficulty";if(t.textContent=`${i}: ${Vs(e)}`,n==="game-mode"){const o={survival:"Search for resources, craft, gain levels, health and hunger.",creative:"Unlimited resources, free flying and destroy blocks instantly.",hardcore:"Survival locked to Hard difficulty. One life only."};document.querySelector("#game-mode-help").textContent=o[e],e==="hardcore"&&Ws("difficulty","hard")}}function Ph(n,e,t){const i=document.querySelector(`#${n}`);i.dataset.value=String(t),i.textContent=`${e}: ${t?"ON":"OFF"}`}function Dh(n){if(!n.trim())return ft("Enter a server address.");document.querySelector("#connection-detail").textContent=n,gt("connecting"),clearTimeout(jl),jl=setTimeout(()=>{document.querySelector("#connection-title").textContent="Failed to connect to the server",document.querySelector("#connection-detail").textContent="Native Java servers cannot connect directly to a browser client.",document.querySelector('#connecting-screen [data-action="cancel-connect"]').textContent="Back to Server List"},1300)}document.addEventListener("click",n=>{const e=n.target.closest("button");if(!e||e.disabled)return;$b();const t=e.dataset.action;if(t){if(t==="launcher"&&(Rt=!1,ao(!1),gt("launcher")),t==="launch"&&Ch(e.dataset.game),t==="copy-launch-link"&&ek(e.dataset.game),t==="game-controls"&&jb(e.dataset.game),t==="close-game-controls"&&zc(),t==="singleplayer"&&(js(),gt("singleplayer")),t==="multiplayer"&&(es(),gt("multiplayer")),t==="create-world"&&(Ja="singleplayer",Gc(),gt("create-world")),t==="create-world-cancel"&&gt(Ja),t==="add-server"&&(Ka=null,document.querySelector("#server-form-title").textContent="Add Server",document.querySelector("#server-name").value="Minecraft Server",document.querySelector("#server-address").value="",gt("server-form")),t==="direct-connect"&&gt("direct-connect"),t==="options"&&(document.querySelector("#world-difficulty").hidden=!Rt,Rt&&(document.querySelector("#world-difficulty").textContent=`Difficulty: ${Vs(Cn().difficulty)}`),cu=Jt==="pause"||Rt&&Jt==="controls"?"pause":"launcher",gt("options")),t==="options-done"&&gt(cu),t==="controls"&&gt("controls"),t==="language"&&(uu=Jt==="options"?"options":"launcher",gt("language")),t==="language-done"&&gt(uu),t==="accessibility"&&(du=Jt==="options"?"options":Jt==="pause"?"pause":"launcher",gt("accessibility")),t==="accessibility-done"&&gt(du),t==="resume"&&Ks(),t==="save-quit"&&tk(),t==="quit"){try{window.close()}catch{}gt("quit")}t==="cancel-connect"&&(Jo(),clearTimeout(jl),document.querySelector("#connection-title").textContent="Connecting to the server...",e.textContent="Cancel",es(),gt("multiplayer"))}});document.querySelector("#world-list").addEventListener("click",n=>{const e=n.target.closest("[data-world-id]");e&&(fn=e.dataset.worldId,js())});document.querySelector("#world-list").addEventListener("dblclick",n=>{const e=n.target.closest("[data-world-id]");e&&Zs(e.dataset.worldId)});document.querySelector("#play-world").addEventListener("click",()=>Zs(fn));document.querySelector("#edit-world").addEventListener("click",()=>{const n=At.find(e=>e.id===fn);n&&(document.querySelector("#edit-world-name").value=n.name,gt("edit-world"))});document.querySelector("#edit-world-form").addEventListener("submit",n=>{n.preventDefault();const e=At.find(t=>t.id===fn);e&&(e.name=document.querySelector("#edit-world-name").value.trim()||"World"),Nn(cn.worlds,At),js(),gt("singleplayer")});document.querySelector("#delete-world").addEventListener("click",()=>{const n=At.find(e=>e.id===fn);n&&Lh("Delete World?",`'${n.name}' will be lost forever! (A long time!)`,()=>{At=At.filter(e=>e.id!==fn),fn=At[0]?.id??null,Nn(cn.worlds,At),js()})});document.querySelector("#recreate-world").addEventListener("click",()=>{const n=At.find(e=>e.id===fn);n&&(Ja="singleplayer",Gc(n),gt("create-world"))});document.querySelector("#world-name").addEventListener("input",n=>{document.querySelector("#folder-name").textContent=n.target.value.trim().replace(/[\\/:*?"<>|]/g,"_")||"World"});document.querySelector("#game-mode").addEventListener("click",n=>{const e=["survival","creative","hardcore"];Ws("game-mode",e[(e.indexOf(n.currentTarget.dataset.value)+1)%e.length])});document.querySelector("#world-difficulty").addEventListener("click",()=>{const n=Cn();if(!n)return;if(n.mode==="hardcore")return ft("Hardcore is locked to Hard difficulty.");const e=["peaceful","easy","normal","hard"];n.difficulty=e[(e.indexOf(n.difficulty)+1)%e.length],document.querySelector("#world-difficulty").textContent=`Difficulty: ${Vs(n.difficulty)}`,sr()&&(G.hunger=20),bh(),Wn(),Fn()});document.querySelector("#difficulty").addEventListener("click",n=>{if(document.querySelector("#game-mode").dataset.value==="hardcore")return ft("Hardcore is locked to Hard difficulty.");const e=["peaceful","easy","normal","hard"];Ws("difficulty",e[(e.indexOf(n.currentTarget.dataset.value)+1)%e.length])});document.querySelector("#allow-cheats").addEventListener("click",n=>Ph("allow-cheats","Allow Cheats",n.currentTarget.dataset.value!=="true"));document.querySelector("#world-form").addEventListener("submit",n=>{n.preventDefault();const e=document.querySelector("#world-name").value.trim()||"New World",t={id:`world-${Date.now()}`,name:e,mode:document.querySelector("#game-mode").dataset.value,difficulty:document.querySelector("#difficulty").dataset.value,cheats:document.querySelector("#allow-cheats").dataset.value==="true",created:Date.now(),lastPlayed:Date.now(),edits:[],position:[0,Bt(0,0)+.8,0],peacefulDefaultApplied:!0};At.unshift(t),fn=t.id,Nn(cn.worlds,At),Zs(t.id)});document.querySelector("#lan-join").addEventListener("click",Pb);document.querySelector("#server-list").addEventListener("click",n=>{const e=n.target.closest("[data-server-id]");e&&(Tn=e.dataset.serverId,es())});document.querySelector("#server-list").addEventListener("dblclick",()=>document.querySelector("#join-server").click());document.querySelector("#join-server").addEventListener("click",()=>{const n=pn.find(e=>e.id===Tn);n&&Dh(n.address)});document.querySelector("#edit-server").addEventListener("click",()=>{const n=pn.find(e=>e.id===Tn);n&&(Ka=n.id,document.querySelector("#server-form-title").textContent="Edit Server Info",document.querySelector("#server-name").value=n.name,document.querySelector("#server-address").value=n.address,gt("server-form"))});document.querySelector("#delete-server").addEventListener("click",()=>{const n=pn.find(e=>e.id===Tn);n&&Lh("Delete Server?",`Remove '${n.name}' from your server list?`,()=>{pn=pn.filter(e=>e.id!==Tn),Tn=pn[0]?.id??null,Nn(cn.servers,pn),es()})});document.querySelector("#server-form").addEventListener("submit",n=>{n.preventDefault();const e=document.querySelector("#server-name").value.trim()||"Minecraft Server",t=document.querySelector("#server-address").value.trim();if(!t)return ft("Enter a server address.");if(Ka)Object.assign(pn.find(i=>i.id===Ka),{name:e,address:t});else{const i={id:`server-${Date.now()}`,name:e,address:t};pn.push(i),Tn=i.id}Nn(cn.servers,pn),es(),gt("multiplayer")});document.querySelector("#direct-form").addEventListener("submit",n=>{n.preventDefault(),Dh(document.querySelector("#direct-address").value)});document.querySelector("#fov-slider").addEventListener("input",n=>{Ze.fov=Number(n.target.value),ei()});document.querySelector("#render-distance").addEventListener("input",n=>{Ze.distance=Number(n.target.value),ei()});document.querySelector("#volume-slider").addEventListener("input",n=>{Ze.volume=Number(n.target.value),ei()});document.querySelector("#bob-toggle").addEventListener("click",()=>{Ze.bobbing=!Ze.bobbing,ei()});document.querySelector("#high-contrast").addEventListener("click",()=>{Ze.highContrast=!Ze.highContrast,ei()});document.querySelector("#menu-background").addEventListener("click",()=>{Ze.blur=!Ze.blur,ei()});document.querySelector("#auto-jump").addEventListener("click",()=>{Ze.autoJump=!Ze.autoJump,ei()});document.querySelector("#narrator").addEventListener("click",()=>{Ze.narrator=!Ze.narrator,ei(),Ze.narrator&&Bc("Narrator on")});document.querySelector("#reset-settings").addEventListener("click",()=>{Ze={...wh,language:Ze.language},ei(),ft("Settings reset")});document.querySelector("#fullscreen-toggle").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ft("Fullscreen is unavailable.")}dr()});document.addEventListener("fullscreenchange",dr);document.querySelector("#language-list").addEventListener("click",n=>{const e=n.target.closest("[data-lang]");e&&(Ze.language=e.dataset.lang,ei())});document.querySelector("#confirm-yes").addEventListener("click",()=>Hc(!0));document.querySelector("#confirm-no").addEventListener("click",()=>Hc(!1));document.querySelector("#game-controls-dialog").addEventListener("click",n=>{n.target===document.querySelector("#game-controls-dialog")&&zc()});document.querySelector("#hotbar").addEventListener("click",n=>{const e=n.target.closest("[data-hotbar-index]");e&&Za(Number(e.dataset.hotbarIndex))});document.querySelector("#block-grid").addEventListener("click",n=>{const e=n.target.closest("[data-inventory-block]");e&&vh(e.dataset.inventoryBlock)});document.querySelector("#block-categories").addEventListener("click",n=>{const e=n.target.closest("[data-block-category]");e&&(zs=e.dataset.blockCategory,document.querySelectorAll("[data-block-category]").forEach(t=>{t.classList.toggle("selected",t.dataset.blockCategory===zs)}),rs())});document.querySelector("#block-search").addEventListener("input",rs);document.querySelector("#crafting-recipes").addEventListener("click",n=>{const e=n.target.closest("[data-recipe]");e&&Mh(Number(e.dataset.recipe))});document.querySelector("#open-inventory").addEventListener("click",Fc);document.querySelector("#close-inventory").addEventListener("click",Sh);document.addEventListener("pointerlockchange",()=>{Li=document.pointerLockElement===Gt,vt.clear()});document.addEventListener("mousemove",n=>{!Rt||Jt!==null||Vt||(G.yaw-=n.movementX*.0022,G.pitch-=n.movementY*.0022,G.pitch=dc.clamp(G.pitch,-Math.PI/2+.02,Math.PI/2-.02))});window.addEventListener("keydown",n=>{const e={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key?.toLowerCase?.()||n.key]||{ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key];if(document.querySelector("#confirm-dialog").classList.contains("open")&&n.code==="Escape")return Hc(!1);if(document.querySelector("#game-controls-dialog")?.classList.contains("open")&&n.code==="Escape")return zc();if(Vt){if(so){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),uh());return}if(Lc){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),ph());return}if(Pc){(n.code==="Escape"||n.code==="KeyE")&&(n.preventDefault(),yh());return}if(n.code==="Escape"||n.code==="KeyE"&&n.target!==document.querySelector("#block-search"))n.preventDefault(),Sh();else if(n.target!==document.querySelector("#block-search")&&n.code.startsWith("Digit")){const t=Number(n.code.slice(5))-1;t>=0&&t<Pi.length&&Za(t)}return}if(!(!Rt||Jt!==null)){if(n.code==="Space"&&!Dt()&&!n.repeat){const t=performance.now();t-au<320&&(G.flying=!G.flying,G.velocity.y=0,ft(G.flying?"Flying enabled · Space up · Shift down":"Flying disabled")),au=t}if(e){n.preventDefault(),vt.add(e);return}if(n.code==="Escape"&&!Li){n.preventDefault(),vt.clear(),gt("pause");return}if(n.code==="KeyE"){n.preventDefault(),!n.repeat&&je&&["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(je.type)?$a():n.repeat||Fc();return}if(n.code==="KeyF"&&je&&["chest","red_bed","red_bed_head","crafting_table","furnace"].includes(je.type)){n.preventDefault(),n.repeat||$a();return}if(n.code==="KeyT"){n.preventDefault(),n.repeat||Ya(!0);return}if(n.code==="KeyR"){if(n.preventDefault(),n.repeat||!Dt())return;if(!fi)return ft("No food yet. Defeat a cow, pig, sheep or chicken to collect food.");if(G.hunger>=20)return ft("Your hunger is full.");fi--,G.hunger=Math.min(20,G.hunger+6),Wn(),Fn(),ft("Ate food");return}if(n.code==="KeyF"){n.preventDefault(),Bb();return}if(vt.add(n.code),n.code.startsWith("Digit")){const t=Number(n.code.slice(5))-1;t>=0&&t<Pi.length&&Za(t)}}});window.addEventListener("keyup",n=>{vt.delete(n.code);const e={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD"}[n.key?.toLowerCase?.()];e&&vt.delete(e);const t={ArrowUp:"KeyW",ArrowLeft:"KeyA",ArrowDown:"KeyS",ArrowRight:"KeyD"}[n.key];t&&vt.delete(t)});document.addEventListener("mousedown",n=>{n.target===Gt&&(Gt.focus({preventScroll:!0}),!Li&&Rt&&Jt===null&&!Vt&&n.target===Gt&&Gt.requestPointerLock()?.catch(()=>ft("Mouse capture is unavailable in this browser.")),!(!Rt||Jt!==null||Vt)&&(n.button===0&&!kh()&&Ya(!1),n.button===2&&$a()))});document.addEventListener("contextmenu",n=>{Li&&n.preventDefault()});document.addEventListener("wheel",n=>{!Li||!Rt||Jt!==null||Za(Qo+(n.deltaY>0?1:-1))},{passive:!0});document.querySelectorAll("[data-move]").forEach(n=>{const e=t=>{vt.delete(n.dataset.move),n.hasPointerCapture(t.pointerId)&&n.releasePointerCapture(t.pointerId)};n.addEventListener("pointerdown",t=>{t.preventDefault(),n.setPointerCapture(t.pointerId),vt.add(n.dataset.move)}),n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e)});document.querySelectorAll("[data-touch]").forEach(n=>n.addEventListener("pointerdown",e=>{if(e.preventDefault(),!Rt||Jt!==null||Vt)return;const t=n.dataset.touch;t==="jump"?(vt.add("Space"),n.setPointerCapture(e.pointerId)):t==="mine"?kh()||Ya(!1):t==="place"?Ya(!0):t==="use"?$a():t==="inventory"?Fc():t==="pause"?(vt.clear(),gt("pause")):t==="eat"&&(fi&&G.hunger<20?(fi--,G.hunger=Math.min(20,G.hunger+6),Wn(),Fn(),ft("Ate food")):ft(fi?"Your hunger is full.":"Collect food from animals first."))}));document.querySelector('[data-touch="jump"]').addEventListener("pointerup",()=>vt.delete("Space"));document.querySelector('[data-touch="jump"]').addEventListener("pointercancel",()=>vt.delete("Space"));let jn=null;Gt.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&Rt&&Jt===null&&!Vt&&(n.preventDefault(),jn={id:n.pointerId,x:n.clientX,y:n.clientY},Gt.setPointerCapture(n.pointerId))});Gt.addEventListener("pointermove",n=>{!jn||jn.id!==n.pointerId||(G.yaw-=(n.clientX-jn.x)*.006,G.pitch=dc.clamp(G.pitch-(n.clientY-jn.y)*.006,-Math.PI/2+.02,Math.PI/2-.02),jn.x=n.clientX,jn.y=n.clientY)});Gt.addEventListener("pointerup",n=>{jn?.id===n.pointerId&&(jn=null)});Gt.addEventListener("pointercancel",()=>{jn=null});const pu=new Tp;let Rs=65,_u=0;function Ba(){const n=Math.min(pu.getDelta(),.05);if(As?.active){As.update(n),As.render(),requestAnimationFrame(Ba);return}if(Ts?.active){Ts.update(n),Ts.render(),requestAnimationFrame(Ba);return}const e=pu.elapsedTime;if(Ut.source&&Rt&&e-Ut.lastSent>.15&&(Ut.lastSent=e,zo("move",{position:G.position.toArray(),yaw:G.yaw,name:Ut.name})),Rt&&Jt===null&&!Vt&&(Db(n),G.hurtCooldown=Math.max(0,G.hurtCooldown-n)),Rt){Rs+=n,Ob(n,e),Cb(e),e>=_u&&(gh(),_u=e+15),Dt()&&sr()?(G.hunger!==20&&(G.hunger=20,Wn()),G.health<20&&(G.regenClock+=n,G.regenClock>=2&&(G.health=Math.min(20,G.health+1),G.regenClock=0,Wn()))):Rt&&Jt===null&&!Vt&&Dt()&&(G.regenClock+=n,G.hunger>=18&&G.health<20&&G.regenClock>=5?(G.health=Math.min(20,G.health+1),G.hunger=Math.max(0,G.hunger-1),G.regenClock=0,Wn()):G.hunger===0&&G.regenClock>=4&&($l(1,"starvation"),G.regenClock=0)),Li&&Ze.bobbing&&(vt.has("KeyW")||vt.has("KeyA")||vt.has("KeyS")||vt.has("KeyD"))&&(tl+=n*10);const g=Li&&Ze.bobbing?Math.sin(tl)*.028:0;sn.position.copy(G.position).add(new F(0,(G.sneaking?1.27:1.55)+g,0)),sn.rotation.set(G.pitch,G.yaw,0),Hs.visible=Li,Fa=Math.max(0,Fa-n*4.8);const b=Math.sin(Fa*Math.PI);ja.rotation.x=-.42-b*1.05,ja.rotation.z=.22-b*.32,Dc.position.y=Math.sin(tl+Math.PI)*.015}else{Hs.visible=!1;const g=18;sn.position.set(Math.cos(e*.035)*g,12.5,Math.sin(e*.035)*g),sn.lookAt(0,3.8,0)}const t=Rt?G.position:new F(0,0,0),i=Math.floor(t.x/Ai),o=Math.floor(t.z/Ai),s=`${i},${o},${di}`;s!==Os&&(Os=s,ch(i,o));const a=_i(t.x,t.z),r=th[a],l=new st(r.sky);vn.background.lerp(l,.02),vn.fog.color.lerp(new st(r.fog),.02);const d=document.querySelector("#biome-label");d&&(d.textContent=r.label);const u=Rs%240/240*Math.PI*2,f=dc.clamp(Math.sin(u)*.75+.45,.22,1);Un.intensity=2.4*f,ju.intensity=1.25+f*.85,Un.position.set(t.x+Math.cos(u)*42,12+Math.sin(u)*38,t.z+20),Un.target.position.copy(t);const _=document.querySelector("#day-label");_&&(_.textContent=`Day ${Math.floor(Rs/240)+1}`),Rt&&Jt===null&&!Vt?Cc():(qo.visible=!1,document.querySelector("#block-label").classList.remove("visible")),document.querySelector("#coordinates").textContent=`${Math.floor(G.position.x)} / ${Math.floor(G.position.y)} / ${Math.floor(G.position.z)}`,qn.render(vn,sn),requestAnimationFrame(Ba)}window.addEventListener("resize",()=>{sn.aspect=innerWidth/innerHeight,sn.updateProjectionMatrix(),qn.setSize(innerWidth,innerHeight)});Nn(cn.worlds,At);Nn(cn.servers,pn);dr();js();es();Hb();Kb();ur();ch(0,0);Ba();const nl=new URLSearchParams(location.search).get(to);nl&&Ti[nl]?Ch(nl):requestAnimationFrame(()=>document.querySelector("#launcher-screen [data-autofocus]")?.focus({preventScroll:!0}));
