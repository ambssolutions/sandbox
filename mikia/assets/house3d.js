var House3D=(()=>{var ml=Object.defineProperty;var sf=Object.getOwnPropertyDescriptor;var rf=Object.getOwnPropertyNames;var af=Object.prototype.hasOwnProperty;var of=(i,e)=>{for(var t in e)ml(i,t,{get:e[t],enumerable:!0})},lf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of rf(e))!af.call(i,s)&&s!==t&&ml(i,s,{get:()=>e[s],enumerable:!(n=sf(e,s))||n.enumerable});return i};var cf=i=>lf(ml({},"__esModule",{value:!0}),i);var Vx={};of(Vx,{DESIGN_DEFAULT:()=>Hd,INSIDE_STAGES:()=>kx,TOUR_STEPS:()=>kd,createHouseScene:()=>Gx});var hf=0,Ah=1,uf=2;var dd=1,Yc=2,Si=3,$i=0,yn=1,Cn=2;var qi=0,ir=1,Rh=2,Ch=3,Ph=4,df=5,ds=100,ff=101,pf=102,Ih=103,Lh=104,mf=200,gf=201,_f=202,xf=203,ec=204,tc=205,yf=206,vf=207,Mf=208,Ef=209,Sf=210,bf=211,wf=212,Tf=213,Af=214,Rf=0,Cf=1,Pf=2,ao=3,If=4,Lf=5,Uf=6,Df=7,fd=0,Nf=1,Of=2,Yi=0,Ff=1,Bf=2,zf=3,Zc=4,Hf=5,kf=6;var pd=300,ar=301,or=302,nc=303,ic=304,Wo=306,lr=1e3,ai=1001,sc=1002,On=1003,Uh=1004;var gl=1005;var $n=1006,Gf=1007;var Hr=1008;var Zi=1009,Vf=1010,Wf=1011,Jc=1012,md=1013,Vi=1014,Wi=1015,kr=1016,gd=1017,_d=1018,ps=1020,Xf=1021,oi=1023,qf=1024,Yf=1025,ms=1026,cr=1027,Zf=1028,xd=1029,Jf=1030,yd=1031,vd=1033,_l=33776,xl=33777,yl=33778,vl=33779,Dh=35840,Nh=35841,Oh=35842,Fh=35843,Md=36196,Bh=37492,zh=37496,Hh=37808,kh=37809,Gh=37810,Vh=37811,Wh=37812,Xh=37813,qh=37814,Yh=37815,Zh=37816,Jh=37817,$h=37818,Kh=37819,Qh=37820,jh=37821,Ml=36492,eu=36494,tu=36495,$f=36283,nu=36284,iu=36285,su=36286;var oo=2300,lo=2301,El=2302,ru=2400,au=2401,ou=2402;var Ed=3e3,gs=3001,Kf=3200,Qf=3201,Sd=0,jf=1,Kn="",un="srgb",Ai="srgb-linear",$c="display-p3",Xo="display-p3-linear",co="linear",Yt="srgb",ho="rec709",uo="p3";var Us=7680;var lu=519,ep=512,tp=513,np=514,bd=515,ip=516,sp=517,rp=518,ap=519,rc=35044;var cu="300 es",ac=1035,wi=2e3,fo=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ro=Math.PI/180,oc=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function An(i,e,t){return Math.max(e,Math.min(t,i))}function op(i,e){return(i%e+e)%e}function Sl(i,e,t){return(1-t)*i+t*e}function hu(i){return(i&i-1)===0&&i!==0}function lc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _e=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],x=s[0],p=s[3],f=s[6],b=s[1],_=s[4],A=s[7],O=s[2],U=s[5],w=s[8];return r[0]=a*x+o*b+l*O,r[3]=a*p+o*_+l*U,r[6]=a*f+o*A+l*w,r[1]=c*x+h*b+u*O,r[4]=c*p+h*_+u*U,r[7]=c*f+h*A+u*w,r[2]=d*x+m*b+g*O,r[5]=d*p+m*_+g*U,r[8]=d*f+m*A+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bl=new Mt;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){let i=po("canvas");return i.style.display="block",i}var uu={};function Or(i){i in uu||(uu[i]=!0,console.warn(i))}var du=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sa={[Ai]:{transfer:co,primaries:ho,toReference:i=>i,fromReference:i=>i},[un]:{transfer:Yt,primaries:ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Xo]:{transfer:co,primaries:uo,toReference:i=>i.applyMatrix3(fu),fromReference:i=>i.applyMatrix3(du)},[$c]:{transfer:Yt,primaries:uo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fu),fromReference:i=>i.applyMatrix3(du).convertLinearToSRGB()}},cp=new Set([Ai,Xo]),Gt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Sa[e].toReference,s=Sa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Sa[i].primaries},getTransfer:function(i){return i===Kn?co:Sa[i].transfer}};function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,mo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=po("canvas")),Ds.width=e.width,Ds.height=e.height;let n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hp=0,go=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ti(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tl(s[a].image)):r.push(Tl(s[a]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var up=0,Qn=class i extends Ki{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ai,s=ai,r=$n,a=Hr,o=oi,l=Zi,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ti(),this.name="",this.source=new go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===gs?un:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===un?gs:Ed}set encoding(e){Or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?un:Kn}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=pd;Qn.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,A=(m+1)/2,O=(f+1)/2,U=(h+d)/4,w=(u+x)/4,E=(g+p)/4;return _>A&&_>O?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=U/n,r=w/n):A>O?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=U/s,r=E/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=w/r,s=E/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===gs?un:Kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hc=class extends Qn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==m||h!==g){let p=1-o,f=l*d+c*m+h*g+u*x,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let O=Math.sqrt(_),U=Math.atan2(O,f*b);p=Math.sin(p*U)/O,o=Math.sin(o*U)/O}let A=o*b;if(l=l*p+d*A,c=c*p+m*A,h=h*p+g*A,u=u*p+x*A,p===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new I,pu=new Qi,Ci=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),wa.subVectors(this.max,Tr),Ns.subVectors(e.a,Tr),Os.subVectors(e.b,Tr),Fs.subVectors(e.c,Tr),Bi.subVectors(Os,Ns),zi.subVectors(Fs,Os),os.subVectors(Ns,Fs);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-os.z,os.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,os.z,0,-os.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-os.y,os.x,0];return!Rl(t,Ns,Os,Fs,wa)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Ns,Os,Fs,wa))?!1:(Ta.crossVectors(Bi,zi),t=[Ta.x,Ta.y,Ta.z],Rl(t,Ns,Os,Fs,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new I,new I,new I,new I,new I,new I,new I,new I],ni=new I,ba=new Ci,Ns=new I,Os=new I,Fs=new I,Bi=new I,zi=new I,os=new I,Tr=new I,wa=new I,Ta=new I,ls=new I;function Rl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ls.fromArray(i,r);let o=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dp=new Ci,Ar=new I,Cl=new I,Pi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Cl)),this.expandByPoint(Ar.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new I,Pl=new I,Aa=new I,Hi=new I,Il=new I,Ra=new I,Ll=new I,Gr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Pl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Hi.dot(this.direction),l=-Hi.dot(Aa),c=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pl).addScaledVector(Aa,d),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){Il.subVectors(t,e),Ra.subVectors(n,e),Ll.crossVectors(Il,Ra);let a=this.direction.dot(Ll),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let l=o*this.direction.dot(Ra.crossVectors(Hi,Ra));if(l<0)return null;let c=o*this.direction.dot(Il.cross(Hi));if(c<0||l+c>a)return null;let h=-o*Hi.dot(Ll);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,m,g,x,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,m,g,x,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,n){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ki.crossVectors(n,Wn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ki.crossVectors(n,Wn)),ki.normalize(),Ca.crossVectors(Wn,ki),s[0]=ki.x,s[4]=Ca.x,s[8]=Wn.x,s[1]=ki.y,s[5]=Ca.y,s[9]=Wn.y,s[2]=ki.z,s[6]=Ca.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],x=n[6],p=n[10],f=n[14],b=n[3],_=n[7],A=n[11],O=n[15],U=s[0],w=s[4],E=s[8],S=s[12],C=s[1],V=s[5],X=s[9],me=s[13],B=s[2],W=s[6],$=s[10],ee=s[14],se=s[3],j=s[7],he=s[11],fe=s[15];return r[0]=a*U+o*C+l*B+c*se,r[4]=a*w+o*V+l*W+c*j,r[8]=a*E+o*X+l*$+c*he,r[12]=a*S+o*me+l*ee+c*fe,r[1]=h*U+u*C+d*B+m*se,r[5]=h*w+u*V+d*W+m*j,r[9]=h*E+u*X+d*$+m*he,r[13]=h*S+u*me+d*ee+m*fe,r[2]=g*U+x*C+p*B+f*se,r[6]=g*w+x*V+p*W+f*j,r[10]=g*E+x*X+p*$+f*he,r[14]=g*S+x*me+p*ee+f*fe,r[3]=b*U+_*C+A*B+O*se,r[7]=b*w+_*V+A*W+O*j,r[11]=b*E+_*X+A*$+O*he,r[15]=b*S+_*me+A*ee+O*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],x=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+x*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],x=e[13],p=e[14],f=e[15],b=u*p*c-x*d*c+x*l*m-o*p*m-u*l*f+o*d*f,_=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,A=h*x*c-g*u*c+g*o*m-a*x*m-h*o*f+a*u*f,O=g*u*l-h*x*l-g*o*d+a*x*d+h*o*p-a*u*p,U=t*b+n*_+s*A+r*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/U;return e[0]=b*w,e[1]=(x*d*r-u*p*r-x*s*m+n*p*m+u*s*f-n*d*f)*w,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*w,e[4]=_*w,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*w,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*m+t*l*m)*w,e[8]=A*w,e[9]=(g*u*r-h*x*r-g*n*m+t*x*m+h*n*f-t*u*f)*w,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*w,e[12]=O*w,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*p+t*u*p)*w,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*p-t*o*p)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,x=a*h,p=a*u,f=o*u,b=l*c,_=l*h,A=l*u,O=n.x,U=n.y,w=n.z;return s[0]=(1-(x+f))*O,s[1]=(m+A)*O,s[2]=(g-_)*O,s[3]=0,s[4]=(m-A)*U,s[5]=(1-(d+f))*U,s[6]=(p+b)*U,s[7]=0,s[8]=(g+_)*w,s[9]=(p-b)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),o=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ii.copy(this);let c=1/r,h=1/a,u=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=wi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(o===wi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fo)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wi){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,m=(n+s)*h,g,x;if(o===wi)g=(a+r)*u,x=-2*u;else if(o===fo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new I,ii=new qt,fp=new I(0,0,0),pp=new I(1,1,1),ki=new I,Ca=new I,Wn=new I,mu=new qt,gu=new Qi,xo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xo.DEFAULT_ORDER="XYZ";var yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mp=0,_u=new I,zs=new Qi,vi=new qt,Pa=new I,Rr=new I,gp=new I,_p=new Qi,xu=new I(1,0,0),yu=new I(0,1,0),vu=new I(0,0,1),xp={type:"added"},yp={type:"removed"},sn=class i extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new xo,n=new Qi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Mt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Rr,Pa,this.up):vi.lookAt(Pa,Rr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(vi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};sn.DEFAULT_UP=new I(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new I,Mi=new I,Ul=new I,Ei=new I,Hs=new I,ks=new I,Mu=new I,Dl=new I,Nl=new I,Ol=new I,Ia=!1,Xi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Mi.subVectors(n,t),Ul.subVectors(e,t);let a=si.dot(si),o=si.dot(Mi),l=si.dot(Ul),c=Mi.dot(Mi),h=Mi.dot(Ul),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,n,s,r,a,o,l){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Mi.subVectors(e,t),si.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),si.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),ks.subVectors(r,n),Dl.subVectors(e,n);let l=Hs.dot(Dl),c=ks.dot(Dl);if(l<=0&&c<=0)return t.copy(n);Nl.subVectors(e,s);let h=Hs.dot(Nl),u=ks.dot(Nl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hs,a);Ol.subVectors(e,r);let m=Hs.dot(Ol),g=ks.dot(Ol);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ks,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Mu.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Mu,o);let f=1/(p+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Hs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},La={h:0,s:0,l:0};function Fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Gt.workingColorSpace){if(e=op(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fl(a,r,e+1/3),this.g=Fl(a,r,e),this.b=Fl(a,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Gt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(An(Tn.r*255,0,255))*65536+Math.round(An(Tn.g*255,0,255))*256+Math.round(An(Tn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=un){Gt.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(La);let n=Sl(Gi.h,La.h,t),s=Sl(Gi.s,La.s,t),r=Sl(Gi.l,La.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new qe;qe.NAMES=Td;var vp=0,li=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ir,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kn=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new I,Ua=new _e,Pn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}};var vo=class extends Pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Mo=class extends Pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends Pn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Mp=0,Jn=new qt,Bl=new sn,Gs=new I,Xn=new Ci,Cr=new Ci,xn=new I,Zt=class i extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Mo:vo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Xn.min,Cr.min),Xn.expandByPoint(xn),xn.addVectors(Xn.max,Cr.max),Xn.expandByPoint(xn)):(Xn.expandByPoint(Cr.min),Xn.expandByPoint(Cr.max))}Xn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),xn.add(Gs)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new I,h[C]=new I;let u=new I,d=new I,m=new I,g=new _e,x=new _e,p=new _e,f=new I,b=new I;function _(C,V,X){u.fromArray(s,C*3),d.fromArray(s,V*3),m.fromArray(s,X*3),g.fromArray(a,C*2),x.fromArray(a,V*2),p.fromArray(a,X*2),d.sub(u),m.sub(u),x.sub(g),p.sub(g);let me=1/(x.x*p.y-p.x*x.y);isFinite(me)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(me),b.copy(m).multiplyScalar(x.x).addScaledVector(d,-p.x).multiplyScalar(me),c[C].add(f),c[V].add(f),c[X].add(f),h[C].add(b),h[V].add(b),h[X].add(b))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let C=0,V=A.length;C<V;++C){let X=A[C],me=X.start,B=X.count;for(let W=me,$=me+B;W<$;W+=3)_(n[W+0],n[W+1],n[W+2])}let O=new I,U=new I,w=new I,E=new I;function S(C){w.fromArray(r,C*3),E.copy(w);let V=c[C];O.copy(V),O.sub(w.multiplyScalar(w.dot(V))).normalize(),U.crossVectors(E,V);let me=U.dot(h[C])<0?-1:1;l[C*4]=O.x,l[C*4+1]=O.y,l[C*4+2]=O.z,l[C*4+3]=me}for(let C=0,V=A.length;C<V;++C){let X=A[C],me=X.start,B=X.count;for(let W=me,$=me+B;W<$;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new Pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eu=new qt,cs=new Gr,Da=new Pi,Su=new I,Vs=new I,Ws=new I,Xs=new I,zl=new I,Na=new I,Oa=new _e,Fa=new _e,Ba=new _e,bu=new I,wu=new I,Tu=new I,za=new I,Ha=new I,ye=class extends sn{constructor(e=new Zt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(zl.fromBufferAttribute(u,e),a?Na.addScaledVector(zl,h):Na.addScaledVector(zl.sub(t),h))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Da.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Da,Su)===null||cs.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Eu.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,O=_;A<O;A+=3){let U=o.getX(A),w=o.getX(A+1),E=o.getX(A+2);s=ka(this,f,e,n,c,h,u,U,w,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let b=o.getX(p),_=o.getX(p+1),A=o.getX(p+2);s=ka(this,a,e,n,c,h,u,b,_,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],f=a[p.materialIndex],b=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let A=b,O=_;A<O;A+=3){let U=A,w=A+1,E=A+2;s=ka(this,f,e,n,c,h,u,U,w,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,f=x;p<f;p+=3){let b=p,_=p+1,A=p+2;s=ka(this,a,e,n,c,h,u,b,_,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ep(i,e,t,n,s,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:i}}function ka(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Vs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);let h=Ep(i,e,t,n,Vs,Ws,Xs,za);if(h){s&&(Oa.fromBufferAttribute(s,o),Fa.fromBufferAttribute(s,l),Ba.fromBufferAttribute(s,c),h.uv=Xi.getInterpolation(za,Vs,Ws,Xs,Oa,Fa,Ba,new _e)),r&&(Oa.fromBufferAttribute(r,o),Fa.fromBufferAttribute(r,l),Ba.fromBufferAttribute(r,c),h.uv1=Xi.getInterpolation(za,Vs,Ws,Xs,Oa,Fa,Ba,new _e),h.uv2=h.uv1),a&&(bu.fromBufferAttribute(a,o),wu.fromBufferAttribute(a,l),Tu.fromBufferAttribute(a,c),h.normal=Xi.getInterpolation(za,Vs,Ws,Xs,bu,wu,Tu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Xi.getNormal(Vs,Ws,Xs,u.normal),h.face=u}return h}var vn=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(u,2));function g(x,p,f,b,_,A,O,U,w,E,S){let C=A/w,V=O/E,X=A/2,me=O/2,B=U/2,W=w+1,$=E+1,ee=0,se=0,j=new I;for(let he=0;he<$;he++){let fe=he*V-me;for(let Re=0;Re<W;Re++){let K=Re*C-X;j[x]=K*b,j[p]=fe*_,j[f]=B,c.push(j.x,j.y,j.z),j[x]=0,j[p]=0,j[f]=U>0?1:-1,h.push(j.x,j.y,j.z),u.push(Re/w),u.push(1-he/E),ee+=1}}for(let he=0;he<E;he++)for(let fe=0;fe<w;fe++){let Re=d+fe+W*he,K=d+fe+W*(he+1),ue=d+(fe+1)+W*(he+1),Pe=d+(fe+1)+W*he;l.push(Re,K,Pe),l.push(K,ue,Pe),se+=6}o.addGroup(m,se,S),m+=se,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let s in n)e[s]=n[s]}return e}function Sp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ad(i){return i.getRenderTarget()===null?i.outputColorSpace:Gt.workingColorSpace}var bp={clone:hr,merge:Nn},wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Eo=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=class extends Eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,uc=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new Rn(qs,Ys,e,t);r.layers=this.layers,this.add(r);let a=new Rn(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new Rn(qs,Ys,e,t);o.layers=this.layers,this.add(o);let l=new Rn(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Rn(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},So=class extends Qn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?un:Kn),this.texture=new So(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:qi});r.uniforms.tEquirect.value=t;let a=new ye(s,r),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=$n),new uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Hl=new I,Ap=new I,Rp=new Mt,ri=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hl.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),s=this.coplanarPoint(Hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hs=new Pi,Ga=new I,Vr=class{constructor(e=new ri,t=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],f=s[12],b=s[13],_=s[14],A=s[15];if(n[0].setComponents(l-r,d-c,p-m,A-f).normalize(),n[1].setComponents(l+r,d+c,p+m,A+f).normalize(),n[2].setComponents(l+a,d+h,p+g,A+b).normalize(),n[3].setComponents(l-a,d-h,p-g,A-b).normalize(),n[4].setComponents(l-o,d-u,p-x,A-_).normalize(),t===wi)n[5].setComponents(l+o,d+u,p+x,A+_).normalize();else if(t===fo)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,p=g.length;x<p;x++){let f=g[x];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var In=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],x=[],p=[];for(let f=0;f<h;f++){let b=f*d-a;for(let _=0;_<c;_++){let A=_*u-r;g.push(A,-b,0),x.push(0,0,1),p.push(_/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let _=b+c*f,A=b+c*(f+1),O=b+1+c*(f+1),U=b+1+c*f;m.push(_,A,U),m.push(A,O,U)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,zp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jp=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Em=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rm=`PhysicalMaterial material;
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
#endif`,Cm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Pm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Im=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qm=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Fg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Jg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
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
}`,Qg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jg=`#define STANDARD
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
}`,e0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,t0=`#define TOON
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
}`,n0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,a0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,l0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xt={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Lp,alphamap_pars_fragment:Up,alphatest_fragment:Dp,alphatest_pars_fragment:Np,aomap_fragment:Op,aomap_pars_fragment:Fp,batching_pars_vertex:Bp,batching_vertex:zp,begin_vertex:Hp,beginnormal_vertex:kp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:Xp,clipping_planes_pars_fragment:qp,clipping_planes_pars_vertex:Yp,clipping_planes_vertex:Zp,color_fragment:Jp,color_pars_fragment:$p,color_pars_vertex:Kp,color_vertex:Qp,common:jp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:lm,envmap_common_pars_fragment:cm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Sm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_fragment:xm,lightmap_pars_fragment:ym,lights_lambert_fragment:vm,lights_lambert_pars_fragment:Mm,lights_pars_begin:Em,lights_toon_fragment:bm,lights_toon_pars_fragment:wm,lights_phong_fragment:Tm,lights_phong_pars_fragment:Am,lights_physical_fragment:Rm,lights_physical_pars_fragment:Cm,lights_fragment_begin:Pm,lights_fragment_maps:Im,lights_fragment_end:Lm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Om,map_fragment:Fm,map_pars_fragment:Bm,map_particle_fragment:zm,map_particle_pars_fragment:Hm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Gm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:Xm,morphtarget_vertex:qm,normal_fragment_begin:Ym,normal_fragment_maps:Zm,normal_pars_fragment:Jm,normal_pars_vertex:$m,normal_vertex:Km,normalmap_pars_fragment:Qm,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:vg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Eg,transmission_fragment:Sg,transmission_pars_fragment:bg,uv_pars_fragment:wg,uv_pars_vertex:Tg,uv_vertex:Ag,worldpos_vertex:Rg,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Lg,cube_vert:Ug,cube_frag:Dg,depth_vert:Ng,depth_frag:Og,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:zg,equirect_frag:Hg,linedashed_vert:kg,linedashed_frag:Gg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:qg,meshmatcap_vert:Yg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:$g,meshphong_vert:Kg,meshphong_frag:Qg,meshphysical_vert:jg,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},fi={basic:{uniforms:Nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Nn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Nn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Nn([be.points,be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Nn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Nn([be.common,be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Nn([be.sprite,be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Nn([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Nn([be.lights,be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};fi.physical={uniforms:Nn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var Va={r:0,b:0,g:0};function c0(i,e,t,n,s,r,a){let o=new qe(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let b=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Wo)?(h===void 0&&(h=new ye(new vn(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:hr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Yt,(u!==_||d!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ye(new In(2,2),new ci({name:"BackgroundMaterial",uniforms:hr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(_.colorSpace)!==Yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,f){p.getRGB(Va,Ad(i)),n.buffers.color.setClear(Va.r,Va.g,Va.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function h0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(B,W,$,ee,se){let j=!1;if(a){let he=x(ee,$,W);c!==he&&(c=he,m(c.object)),j=f(B,ee,$,se),j&&b(B,ee,$,se)}else{let he=W.wireframe===!0;(c.geometry!==ee.id||c.program!==$.id||c.wireframe!==he)&&(c.geometry=ee.id,c.program=$.id,c.wireframe=he,j=!0)}se!==null&&t.update(se,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,E(B,W,$,ee),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(B){return n.isWebGL2?i.bindVertexArray(B):r.bindVertexArrayOES(B)}function g(B){return n.isWebGL2?i.deleteVertexArray(B):r.deleteVertexArrayOES(B)}function x(B,W,$){let ee=$.wireframe===!0,se=o[B.id];se===void 0&&(se={},o[B.id]=se);let j=se[W.id];j===void 0&&(j={},se[W.id]=j);let he=j[ee];return he===void 0&&(he=p(d()),j[ee]=he),he}function p(B){let W=[],$=[],ee=[];for(let se=0;se<s;se++)W[se]=0,$[se]=0,ee[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:ee,object:B,attributes:{},index:null}}function f(B,W,$,ee){let se=c.attributes,j=W.attributes,he=0,fe=$.getAttributes();for(let Re in fe)if(fe[Re].location>=0){let ue=se[Re],Pe=j[Re];if(Pe===void 0&&(Re==="instanceMatrix"&&B.instanceMatrix&&(Pe=B.instanceMatrix),Re==="instanceColor"&&B.instanceColor&&(Pe=B.instanceColor)),ue===void 0||ue.attribute!==Pe||Pe&&ue.data!==Pe.data)return!0;he++}return c.attributesNum!==he||c.index!==ee}function b(B,W,$,ee){let se={},j=W.attributes,he=0,fe=$.getAttributes();for(let Re in fe)if(fe[Re].location>=0){let ue=j[Re];ue===void 0&&(Re==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),Re==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor));let Pe={};Pe.attribute=ue,ue&&ue.data&&(Pe.data=ue.data),se[Re]=Pe,he++}c.attributes=se,c.attributesNum=he,c.index=ee}function _(){let B=c.newAttributes;for(let W=0,$=B.length;W<$;W++)B[W]=0}function A(B){O(B,0)}function O(B,W){let $=c.newAttributes,ee=c.enabledAttributes,se=c.attributeDivisors;$[B]=1,ee[B]===0&&(i.enableVertexAttribArray(B),ee[B]=1),se[B]!==W&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,W),se[B]=W)}function U(){let B=c.newAttributes,W=c.enabledAttributes;for(let $=0,ee=W.length;$<ee;$++)W[$]!==B[$]&&(i.disableVertexAttribArray($),W[$]=0)}function w(B,W,$,ee,se,j,he){he===!0?i.vertexAttribIPointer(B,W,$,se,j):i.vertexAttribPointer(B,W,$,ee,se,j)}function E(B,W,$,ee){if(n.isWebGL2===!1&&(B.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let se=ee.attributes,j=$.getAttributes(),he=W.defaultAttributeValues;for(let fe in j){let Re=j[fe];if(Re.location>=0){let K=se[fe];if(K===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),K!==void 0){let ue=K.normalized,Pe=K.itemSize,Be=t.get(K);if(Be===void 0)continue;let Ue=Be.buffer,Ve=Be.type,ct=Be.bytesPerElement,He=n.isWebGL2===!0&&(Ve===i.INT||Ve===i.UNSIGNED_INT||K.gpuType===md);if(K.isInterleavedBufferAttribute){let ht=K.data,D=ht.stride,ve=K.offset;if(ht.isInstancedInterleavedBuffer){for(let ne=0;ne<Re.locationSize;ne++)O(Re.location+ne,ht.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ne=0;ne<Re.locationSize;ne++)A(Re.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ne=0;ne<Re.locationSize;ne++)w(Re.location+ne,Pe/Re.locationSize,Ve,ue,D*ct,(ve+Pe/Re.locationSize*ne)*ct,He)}else{if(K.isInstancedBufferAttribute){for(let ht=0;ht<Re.locationSize;ht++)O(Re.location+ht,K.meshPerAttribute);B.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<Re.locationSize;ht++)A(Re.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ht=0;ht<Re.locationSize;ht++)w(Re.location+ht,Pe/Re.locationSize,Ve,ue,Pe*ct,Pe/Re.locationSize*ht*ct,He)}}else if(he!==void 0){let ue=he[fe];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(Re.location,ue);break;case 3:i.vertexAttrib3fv(Re.location,ue);break;case 4:i.vertexAttrib4fv(Re.location,ue);break;default:i.vertexAttrib1fv(Re.location,ue)}}}}U()}function S(){X();for(let B in o){let W=o[B];for(let $ in W){let ee=W[$];for(let se in ee)g(ee[se].object),delete ee[se];delete W[$]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;let W=o[B.id];for(let $ in W){let ee=W[$];for(let se in ee)g(ee[se].object),delete ee[se];delete W[$]}delete o[B.id]}function V(B){for(let W in o){let $=o[W];if($[B.id]===void 0)continue;let ee=$[B.id];for(let se in ee)g(ee[se].object),delete ee[se];delete $[B.id]}}function X(){me(),h=!0,c!==l&&(c=l,m(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:me,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:A,disableUnusedAttributes:U}}function u0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function d0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,A=a||e.has("OES_texture_float"),O=_&&A,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:O,maxSamples:U}}function f0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ri,o=new Mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,_=b*4,A=f.clippingState||null;l.value=A,A=h(g,d,_,m);for(let O=0;O!==_;++O)A[O]=t[O];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let f=m+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let _=0,A=m;_!==x;++_,A+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function p0(i){let e=new WeakMap;function t(a,o){return o===nc?a.mapping=ar:o===ic&&(a.mapping=or),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===nc||o===ic)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new dc(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bo=class extends Eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,Au=[.125,.215,.35,.446,.526,.582],fs=20,kl=new bo,Ru=new qe,Gl=null,Vl=0,Wl=0,us=(1+Math.sqrt(5))/2,Zs=1/us,Cu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,us,Zs),new I(0,us,-Zs),new I(Zs,0,us),new I(-Zs,0,us),new I(us,Zs,0),new I(-us,Zs,0)],ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Vl,Wl),e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:kr,format:oi,colorSpace:Ai,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(r)),this._blurMaterial=g0(r,e,t)}return s}_compileMaterial(e){let t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,n,s){let o=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Yi,h.autoClear=!1;let m=new kn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new ye(new vn,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ru),x=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let _=this._cubeSize;Wa(s,b*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ar||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cu[(s-1)%Cu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ye(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):fs;p>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fs}`);let f=[],b=0;for(let w=0;w<fs;++w){let E=w/x,S=Math.exp(-E*E/2);f.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let A=this._sizeLods[s],O=3*A*(s>_-er?s-_+er:0),U=4*(this._cubeSize-A);Wa(t,O,U,3*A,2*A),l.setRenderTarget(t),l.render(u,kl)}};function m0(i){let e=[],t=[],n=[],s=i,r=i-er+1+Au.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-er?l=Au[a-i+er-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,f=1,b=new Float32Array(x*g*m),_=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let U=0;U<m;U++){let w=U%3*2/3-1,E=U>2?0:-1,S=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];b.set(S,x*g*U),_.set(d,p*g*U);let C=[U,U,U,U,U,U];A.set(C,f*g*U)}let O=new Zt;O.setAttribute("position",new Pn(b,x)),O.setAttribute("uv",new Pn(_,p)),O.setAttribute("faceIndex",new Pn(A,f)),e.push(O),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){let n=new Ri(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function g0(i,e,t){let n=new Float32Array(fs),s=new I(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Iu(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Lu(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function _0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===nc||l===ic,h=l===ar||l===or;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ur(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ur(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function x0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,f=x.length;p<f;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let b=m.array;x=m.version;for(let _=0,A=b.length;_<A;_+=3){let O=b[_+0],U=b[_+1],w=b[_+2];d.push(O,U,U,w,w,O)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,A=b.length/3-1;_<A;_+=3){let O=_+0,U=_+1,w=_+2;d.push(O,U,U,w,w,O)}}else return;let p=new(wd(d)?Mo:vo)(d,1);p.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function v0(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,x),t.update(g,r,x)}function d(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<x;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let f=0;for(let b=0;b<x;b++)f+=g[b];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function M0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E0(i,e){return i[0]-e[0]}function S0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function b0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new Qt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let B=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",B)};x!==void 0&&x.texture.dispose();let b=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,O=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],E=0;b===!0&&(E=1),_===!0&&(E=2),A===!0&&(E=3);let S=h.attributes.position.count*E,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let V=new Float32Array(S*C*4*g),X=new _o(V,S,C,g);X.type=Wi,X.needsUpdate=!0;let me=E*4;for(let W=0;W<g;W++){let $=O[W],ee=U[W],se=w[W],j=S*C*4*W;for(let he=0;he<$.count;he++){let fe=he*me;b===!0&&(a.fromBufferAttribute($,he),V[j+fe+0]=a.x,V[j+fe+1]=a.y,V[j+fe+2]=a.z,V[j+fe+3]=0),_===!0&&(a.fromBufferAttribute(ee,he),V[j+fe+4]=a.x,V[j+fe+5]=a.y,V[j+fe+6]=a.z,V[j+fe+7]=0),A===!0&&(a.fromBufferAttribute(se,he),V[j+fe+8]=a.x,V[j+fe+9]=a.y,V[j+fe+10]=a.z,V[j+fe+11]=se.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new _e(S,C)},r.set(h,x),h.addEventListener("dispose",B)}let p=0;for(let b=0;b<d.length;b++)p+=d[b];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let A=g[_];A[0]=_,A[1]=d[_]}g.sort(S0);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(E0);let x=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let A=o[_],O=A[0],U=A[1];O!==Number.MAX_SAFE_INTEGER&&U?(x&&h.getAttribute("morphTarget"+_)!==x[O]&&h.setAttribute("morphTarget"+_,x[O]),p&&h.getAttribute("morphNormal"+_)!==p[O]&&h.setAttribute("morphNormal"+_,p[O]),s[_]=U,f+=U):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let b=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function w0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var wo=class extends Qn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:ms,h!==ms&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ms&&(n=Vi),n===void 0&&h===cr&&(n=ps),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cd=new Qn,Pd=new wo(1,1);Pd.compareFunction=bd;var Id=new _o,Ld=new hc,Ud=new So,Uu=[],Du=[],Nu=new Float32Array(16),Ou=new Float32Array(9),Fu=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qo(i,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function R0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function P0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),mn(t,n)}}function I0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),mn(t,n)}}function L0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),mn(t,n)}}function U0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function D0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function N0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function O0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function F0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function z0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function k0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Pd:Cd;t.setTexture2D(e||r,s)}function G0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ld,s)}function V0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ud,s)}function W0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Id,s)}function X0(i){switch(i){case 5126:return T0;case 35664:return A0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return U0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(i,e){i.uniform1fv(this.addr,e)}function Y0(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function Z0(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function J0(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function $0(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K0(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Q0(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function j0(i,e){i.uniform1iv(this.addr,e)}function e_(i,e){i.uniform2iv(this.addr,e)}function t_(i,e){i.uniform3iv(this.addr,e)}function n_(i,e){i.uniform4iv(this.addr,e)}function i_(i,e){i.uniform1uiv(this.addr,e)}function s_(i,e){i.uniform2uiv(this.addr,e)}function r_(i,e){i.uniform3uiv(this.addr,e)}function a_(i,e){i.uniform4uiv(this.addr,e)}function o_(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cd,r[a])}function l_(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function c_(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ud,r[a])}function h_(i,e,t){let n=this.cache,s=e.length,r=qo(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Id,r[a])}function u_(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return Z0;case 35666:return J0;case 35674:return $0;case 35675:return K0;case 35676:return Q0;case 5124:case 35670:return j0;case 35667:case 35671:return e_;case 35668:case 35672:return t_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}var fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X0(t.type)}},pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u_(t.type)}},mc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function d_(i,e,t){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),a=Xl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bu(t,c===void 0?new fc(o,i,e):new pc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new mc(o),Bu(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);d_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function zu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f_=37297,p_=0;function m_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function g_(i){let e=Gt.getPrimaries(Gt.workingColorSpace),t=Gt.getPrimaries(i),n;switch(e===t?n="":e===uo&&t===ho?n="LinearDisplayP3ToLinearSRGB":e===ho&&t===uo&&(n="LinearSRGBToLinearDisplayP3"),i){case Ai:case Xo:return[n,"LinearTransferOETF"];case un:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+m_(i.getShaderSource(e),a)}else return s}function __(i,e){let t=g_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x_(i,e){let t;switch(e){case Ff:t="Linear";break;case Bf:t="Reinhard";break;case zf:t="OptimizedCineon";break;case Zc:t="ACESFilmic";break;case kf:t="AgX";break;case Hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function y_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(tr).join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(tr).join(`
`)}function M_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function tr(i){return i!==""}function ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(S_,w_)}var b_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w_(i,e){let t=xt[e];if(t===void 0){let n=b_.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}var T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(T_,A_)}function A_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function C_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===or&&(e="ENVMAP_MODE_REFRACTION"),e}function I_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function L_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=R_(t),c=C_(t),h=P_(t),u=I_(t),d=L_(t),m=t.isWebGL2?"":y_(t),g=v_(t),x=M_(r),p=s.createProgram(),f,b,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),f.length>0&&(f+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(tr).join(`
`),b.length>0&&(b+=`
`)):(f=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),b=[m,Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?xt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?x_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=gc(a),a=ku(a,t),a=Gu(a,t),o=gc(o),o=ku(o,t),o=Gu(o,t),a=Vu(a),o=Vu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let A=_+f+a,O=_+b+o,U=zu(s,s.VERTEX_SHADER,A),w=zu(s,s.FRAGMENT_SHADER,O);s.attachShader(p,U),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(X){if(i.debug.checkShaderErrors){let me=s.getProgramInfoLog(p).trim(),B=s.getShaderInfoLog(U).trim(),W=s.getShaderInfoLog(w).trim(),$=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,U,w);else{let se=Hu(s,U,"vertex"),j=Hu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+se+`
`+j)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(B===""||W==="")&&(ee=!1);ee&&(X.diagnostics={runnable:$,programLog:me,vertexShader:{log:B,prefix:f},fragmentShader:{log:W,prefix:b}})}s.deleteShader(U),s.deleteShader(w),S=new rr(s,p),C=E_(s,p)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,f_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=U,this.fragmentShader=w,this}var D_=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}};function N_(i,e,t,n,s,r,a){let o=new yo,l=new _c,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,C,V,X,me){let B=X.fog,W=me.geometry,$=S.isMeshStandardMaterial?X.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),se=ee&&ee.mapping===Wo?ee.image.height:null,j=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=he!==void 0?he.length:0,Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let K,ue,Pe,Be;if(j){let Mn=fi[j];K=Mn.vertexShader,ue=Mn.fragmentShader}else K=S.vertexShader,ue=S.fragmentShader,l.update(S),Pe=l.getVertexShaderID(S),Be=l.getFragmentShaderID(S);let Ue=i.getRenderTarget(),Ve=me.isInstancedMesh===!0,ct=me.isBatchedMesh===!0,He=!!S.map,ht=!!S.matcap,D=!!ee,ve=!!S.aoMap,ne=!!S.lightMap,xe=!!S.bumpMap,te=!!S.normalMap,we=!!S.displacementMap,N=!!S.emissiveMap,T=!!S.metalnessMap,M=!!S.roughnessMap,v=S.anisotropy>0,G=S.clearcoat>0,ie=S.iridescence>0,ce=S.sheen>0,Fe=S.transmission>0,Ae=v&&!!S.anisotropyMap,Ie=G&&!!S.clearcoatMap,Ke=G&&!!S.clearcoatNormalMap,ut=G&&!!S.clearcoatRoughnessMap,de=ie&&!!S.iridescenceMap,Tt=ie&&!!S.iridescenceThicknessMap,gt=ce&&!!S.sheenColorMap,at=ce&&!!S.sheenRoughnessMap,We=!!S.specularMap,De=!!S.specularColorMap,ot=!!S.specularIntensityMap,Rt=Fe&&!!S.transmissionMap,Ft=Fe&&!!S.thicknessMap,lt=!!S.gradientMap,Ee=!!S.alphaMap,F=S.alphaTest>0,Te=!!S.alphaHash,Se=!!S.extensions,Qe=!!W.attributes.uv1,Xe=!!W.attributes.uv2,Ct=!!W.attributes.uv3,Bt=Yi;return S.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(Bt=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:ue,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:Be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ct,instancing:Ve,instancingColor:Ve&&me.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Ai,map:He,matcap:ht,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:se,aoMap:ve,lightMap:ne,bumpMap:xe,normalMap:te,displacementMap:d&&we,emissiveMap:N,normalMapObjectSpace:te&&S.normalMapType===jf,normalMapTangentSpace:te&&S.normalMapType===Sd,metalnessMap:T,roughnessMap:M,anisotropy:v,anisotropyMap:Ae,clearcoat:G,clearcoatMap:Ie,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ut,iridescence:ie,iridescenceMap:de,iridescenceThicknessMap:Tt,sheen:ce,sheenColorMap:gt,sheenRoughnessMap:at,specularMap:We,specularColorMap:De,specularIntensityMap:ot,transmission:Fe,transmissionMap:Rt,thicknessMap:Ft,gradientMap:lt,opaque:S.transparent===!1&&S.blending===ir,alphaMap:Ee,alphaTest:F,alphaHash:Te,combine:S.combine,mapUv:He&&x(S.map.channel),aoMapUv:ve&&x(S.aoMap.channel),lightMapUv:ne&&x(S.lightMap.channel),bumpMapUv:xe&&x(S.bumpMap.channel),normalMapUv:te&&x(S.normalMap.channel),displacementMapUv:we&&x(S.displacementMap.channel),emissiveMapUv:N&&x(S.emissiveMap.channel),metalnessMapUv:T&&x(S.metalnessMap.channel),roughnessMapUv:M&&x(S.roughnessMap.channel),anisotropyMapUv:Ae&&x(S.anisotropyMap.channel),clearcoatMapUv:Ie&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:at&&x(S.sheenRoughnessMap.channel),specularMapUv:We&&x(S.specularMap.channel),specularColorMapUv:De&&x(S.specularColorMap.channel),specularIntensityMapUv:ot&&x(S.specularIntensityMap.channel),transmissionMapUv:Rt&&x(S.transmissionMap.channel),thicknessMapUv:Ft&&x(S.thicknessMap.channel),alphaMapUv:Ee&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(te||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Qe,vertexUv2s:Xe,vertexUv3s:Ct,pointsUvs:me.isPoints===!0&&!!W.attributes.uv&&(He||Ee),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:me.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Gt.getTransfer(S.map.colorSpace)===Yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Se&&S.extensions.derivatives===!0,extensionFragDepth:Se&&S.extensions.fragDepth===!0,extensionDrawBuffers:Se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let V in S.defines)C.push(V),C.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(b(C,S),_(C,S),C.push(i.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function b(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){let C=g[S.type],V;if(C){let X=fi[C];V=bp.clone(X.uniforms)}else V=S.uniforms;return V}function O(S,C){let V;for(let X=0,me=c.length;X<me;X++){let B=c[X];if(B.cacheKey===C){V=B,++V.usedTimes;break}}return V===void 0&&(V=new U_(i,C,S,r),c.push(V)),V}function U(S){if(--S.usedTimes===0){let C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function w(S){l.remove(S)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:O,releaseProgram:U,releaseShaderCache:w,programs:c,dispose:E}}function O_(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function F_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,g,x,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=p),e++,f}function o(u,d,m,g,x,p){let f=a(u,d,m,g,x,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,x,p){let f=a(u,d,m,g,x,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||F_),n.length>1&&n.sort(d||Xu),s.length>1&&s.sort(d||Xu)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function B_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qu,i.set(n,[a])):s>=r.length?(a=new qu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function H_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var k_=0;function G_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V_(i,e){let t=new z_,n=H_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,a=new qt,o=new qt;function l(h,u){let d=0,m=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let x=0,p=0,f=0,b=0,_=0,A=0,O=0,U=0,w=0,E=0,S=0;h.sort(G_);let C=u===!0?Math.PI:1;for(let X=0,me=h.length;X<me;X++){let B=h[X],W=B.color,$=B.intensity,ee=B.distance,se=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=W.r*$*C,m+=W.g*$*C,g+=W.b*$*C;else if(B.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(B.sh.coefficients[j],$);S++}else if(B.isDirectionalLight){let j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){let he=B.shadow,fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.directionalShadow[x]=fe,s.directionalShadowMap[x]=se,s.directionalShadowMatrix[x]=B.shadow.matrix,A++}s.directional[x]=j,x++}else if(B.isSpotLight){let j=t.get(B);j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(W).multiplyScalar($*C),j.distance=ee,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,s.spot[f]=j;let he=B.shadow;if(B.map&&(s.spotLightMap[w]=B.map,w++,he.updateMatrices(B),B.castShadow&&E++),s.spotLightMatrix[f]=he.matrix,B.castShadow){let fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,s.spotShadow[f]=fe,s.spotShadowMap[f]=se,U++}f++}else if(B.isRectAreaLight){let j=t.get(B);j.color.copy(W).multiplyScalar($),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),s.rectArea[b]=j,b++}else if(B.isPointLight){let j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*C),j.distance=B.distance,j.decay=B.decay,B.castShadow){let he=B.shadow,fe=n.get(B);fe.shadowBias=he.bias,fe.shadowNormalBias=he.normalBias,fe.shadowRadius=he.radius,fe.shadowMapSize=he.mapSize,fe.shadowCameraNear=he.camera.near,fe.shadowCameraFar=he.camera.far,s.pointShadow[p]=fe,s.pointShadowMap[p]=se,s.pointShadowMatrix[p]=B.shadow.matrix,O++}s.point[p]=j,p++}else if(B.isHemisphereLight){let j=t.get(B);j.skyColor.copy(B.color).multiplyScalar($*C),j.groundColor.copy(B.groundColor).multiplyScalar($*C),s.hemi[_]=j,_++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==x||V.pointLength!==p||V.spotLength!==f||V.rectAreaLength!==b||V.hemiLength!==_||V.numDirectionalShadows!==A||V.numPointShadows!==O||V.numSpotShadows!==U||V.numSpotMaps!==w||V.numLightProbes!==S)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=b,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+w-E,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=E,s.numLightProbes=S,V.directionalLength=x,V.pointLength=p,V.spotLength=f,V.rectAreaLength=b,V.hemiLength=_,V.numDirectionalShadows=A,V.numPointShadows=O,V.numSpotShadows=U,V.numSpotMaps=w,V.numLightProbes=S,s.version=k_++)}function c(h,u){let d=0,m=0,g=0,x=0,p=0,f=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){let A=h[b];if(A.isDirectionalLight){let O=s.directional[d];O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),d++}else if(A.isSpotLight){let O=s.spot[g];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(f),O.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(f),g++}else if(A.isRectAreaLight){let O=s.rectArea[x];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(f),o.identity(),a.copy(A.matrixWorld),a.premultiply(f),o.extractRotation(a),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),x++}else if(A.isPointLight){let O=s.point[m];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(f),m++}else if(A.isHemisphereLight){let O=s.hemi[p];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Yu(i,e){let t=new V_(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Yu(i,e),t.set(r,[l])):a>=o.length?(l=new Yu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var yc=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vc=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Y_(i,e,t){let n=new Vr,s=new _e,r=new _e,a=new Qt,o=new yc({depthPacking:Qf}),l=new vc,c={},h=t.maxTextureSize,u={[$i]:yn,[yn]:$i,[Cn]:Cn},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let f=this.type;this.render=function(U,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;let S=i.getRenderTarget(),C=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),X=i.state;X.setBlending(qi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let me=f!==Si&&this.type===Si,B=f===Si&&this.type!==Si;for(let W=0,$=U.length;W<$;W++){let ee=U[W],se=ee.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let j=se.getFrameExtents();if(s.multiply(j),r.copy(se.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,se.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,se.mapSize.y=r.y)),se.map===null||me===!0||B===!0){let fe=this.type!==Si?{minFilter:On,magFilter:On}:{};se.map!==null&&se.map.dispose(),se.map=new Ri(s.x,s.y,fe),se.map.texture.name=ee.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let he=se.getViewportCount();for(let fe=0;fe<he;fe++){let Re=se.getViewport(fe);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),X.viewport(a),se.updateMatrices(ee,fe),n=se.getFrustum(),A(w,E,se.camera,ee,this.type)}se.isPointLightShadow!==!0&&this.type===Si&&b(se,E),se.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,C,V)};function b(U,w){let E=e.update(x);d.defines.VSM_SAMPLES!==U.blurSamples&&(d.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ri(s.x,s.y)),d.uniforms.shadow_pass.value=U.map.texture,d.uniforms.resolution.value=U.mapSize,d.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(w,null,E,d,x,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(w,null,E,m,x,null)}function _(U,w,E,S){let C=null,V=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)C=V;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let X=C.uuid,me=w.uuid,B=c[X];B===void 0&&(B={},c[X]=B);let W=B[me];W===void 0&&(W=C.clone(),B[me]=W,w.addEventListener("dispose",O)),C=W}if(C.visible=w.visible,C.wireframe=w.wireframe,S===Si?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:u[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let X=i.properties.get(C);X.light=E}return C}function A(U,w,E,S,C){if(U.visible===!1)return;if(U.layers.test(w.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===Si)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);let me=e.update(U),B=U.material;if(Array.isArray(B)){let W=me.groups;for(let $=0,ee=W.length;$<ee;$++){let se=W[$],j=B[se.materialIndex];if(j&&j.visible){let he=_(U,j,S,C);U.onBeforeShadow(i,U,w,E,me,he,se),i.renderBufferDirect(E,null,me,he,U,se),U.onAfterShadow(i,U,w,E,me,he,se)}}}else if(B.visible){let W=_(U,B,S,C);U.onBeforeShadow(i,U,w,E,me,W,null),i.renderBufferDirect(E,null,me,W,U,null),U.onAfterShadow(i,U,w,E,me,W,null)}}let X=U.children;for(let me=0,B=X.length;me<B;me++)A(X[me],w,E,S,C)}function O(U){U.target.removeEventListener("dispose",O);for(let E in c){let S=c[E],C=U.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function Z_(i,e,t){let n=t.isWebGL2;function s(){let F=!1,Te=new Qt,Se=null,Qe=new Qt(0,0,0,0);return{setMask:function(Xe){Se!==Xe&&!F&&(i.colorMask(Xe,Xe,Xe,Xe),Se=Xe)},setLocked:function(Xe){F=Xe},setClear:function(Xe,Ct,Bt,an,Mn){Mn===!0&&(Xe*=an,Ct*=an,Bt*=an),Te.set(Xe,Ct,Bt,an),Qe.equals(Te)===!1&&(i.clearColor(Xe,Ct,Bt,an),Qe.copy(Te))},reset:function(){F=!1,Se=null,Qe.set(-1,0,0,0)}}}function r(){let F=!1,Te=null,Se=null,Qe=null;return{setTest:function(Xe){Xe?ct(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Xe){Te!==Xe&&!F&&(i.depthMask(Xe),Te=Xe)},setFunc:function(Xe){if(Se!==Xe){switch(Xe){case Rf:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case If:i.depthFunc(i.EQUAL);break;case Lf:i.depthFunc(i.GEQUAL);break;case Uf:i.depthFunc(i.GREATER);break;case Df:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Xe}},setLocked:function(Xe){F=Xe},setClear:function(Xe){Qe!==Xe&&(i.clearDepth(Xe),Qe=Xe)},reset:function(){F=!1,Te=null,Se=null,Qe=null}}}function a(){let F=!1,Te=null,Se=null,Qe=null,Xe=null,Ct=null,Bt=null,an=null,Mn=null;return{setTest:function(Nt){F||(Nt?ct(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Nt){Te!==Nt&&!F&&(i.stencilMask(Nt),Te=Nt)},setFunc:function(Nt,ln,Sn){(Se!==Nt||Qe!==ln||Xe!==Sn)&&(i.stencilFunc(Nt,ln,Sn),Se=Nt,Qe=ln,Xe=Sn)},setOp:function(Nt,ln,Sn){(Ct!==Nt||Bt!==ln||an!==Sn)&&(i.stencilOp(Nt,ln,Sn),Ct=Nt,Bt=ln,an=Sn)},setLocked:function(Nt){F=Nt},setClear:function(Nt){Mn!==Nt&&(i.clearStencil(Nt),Mn=Nt)},reset:function(){F=!1,Te=null,Se=null,Qe=null,Xe=null,Ct=null,Bt=null,an=null,Mn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,x=[],p=null,f=!1,b=null,_=null,A=null,O=null,U=null,w=null,E=null,S=new qe(0,0,0),C=0,V=!1,X=null,me=null,B=null,W=null,$=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,j=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(he)[1]),se=j>=1):he.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),se=j>=2);let fe=null,Re={},K=i.getParameter(i.SCISSOR_BOX),ue=i.getParameter(i.VIEWPORT),Pe=new Qt().fromArray(K),Be=new Qt().fromArray(ue);function Ue(F,Te,Se,Qe){let Xe=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(F,Ct),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Se;Bt++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(Te,0,i.RGBA,1,1,Qe,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(Te+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return Ct}let Ve={};Ve[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),Ve[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ve[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ve[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(i.DEPTH_TEST),l.setFunc(ao),N(!1),T(Ah),ct(i.CULL_FACE),te(qi);function ct(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function He(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function ht(F,Te){return m[F]!==Te?(i.bindFramebuffer(F,Te),m[F]=Te,n&&(F===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Te),F===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Te)),!0):!1}function D(F,Te){let Se=x,Qe=!1;if(F)if(Se=g.get(Te),Se===void 0&&(Se=[],g.set(Te,Se)),F.isWebGLMultipleRenderTargets){let Xe=F.texture;if(Se.length!==Xe.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Bt=Xe.length;Ct<Bt;Ct++)Se[Ct]=i.COLOR_ATTACHMENT0+Ct;Se.length=Xe.length,Qe=!0}}else Se[0]!==i.COLOR_ATTACHMENT0&&(Se[0]=i.COLOR_ATTACHMENT0,Qe=!0);else Se[0]!==i.BACK&&(Se[0]=i.BACK,Qe=!0);Qe&&(t.isWebGL2?i.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function ve(F){return p!==F?(i.useProgram(F),p=F,!0):!1}let ne={[ds]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};if(n)ne[Ih]=i.MIN,ne[Lh]=i.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(ne[Ih]=F.MIN_EXT,ne[Lh]=F.MAX_EXT)}let xe={[mf]:i.ZERO,[gf]:i.ONE,[_f]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[Ef]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[bf]:i.CONSTANT_COLOR,[wf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function te(F,Te,Se,Qe,Xe,Ct,Bt,an,Mn,Nt){if(F===qi){f===!0&&(He(i.BLEND),f=!1);return}if(f===!1&&(ct(i.BLEND),f=!0),F!==df){if(F!==b||Nt!==V){if((_!==ds||U!==ds)&&(i.blendEquation(i.FUNC_ADD),_=ds,U=ds),Nt)switch(F){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,O=null,w=null,E=null,S.set(0,0,0),C=0,b=F,V=Nt}return}Xe=Xe||Te,Ct=Ct||Se,Bt=Bt||Qe,(Te!==_||Xe!==U)&&(i.blendEquationSeparate(ne[Te],ne[Xe]),_=Te,U=Xe),(Se!==A||Qe!==O||Ct!==w||Bt!==E)&&(i.blendFuncSeparate(xe[Se],xe[Qe],xe[Ct],xe[Bt]),A=Se,O=Qe,w=Ct,E=Bt),(an.equals(S)===!1||Mn!==C)&&(i.blendColor(an.r,an.g,an.b,Mn),S.copy(an),C=Mn),b=F,V=!1}function we(F,Te){F.side===Cn?He(i.CULL_FACE):ct(i.CULL_FACE);let Se=F.side===yn;Te&&(Se=!Se),N(Se),F.blending===ir&&F.transparent===!1?te(qi):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);let Qe=F.stencilWrite;c.setTest(Qe),Qe&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),v(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){X!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),X=F)}function T(F){F!==hf?(ct(i.CULL_FACE),F!==me&&(F===Ah?i.cullFace(i.BACK):F===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),me=F}function M(F){F!==B&&(se&&i.lineWidth(F),B=F)}function v(F,Te,Se){F?(ct(i.POLYGON_OFFSET_FILL),(W!==Te||$!==Se)&&(i.polygonOffset(Te,Se),W=Te,$=Se)):He(i.POLYGON_OFFSET_FILL)}function G(F){F?ct(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function ie(F){F===void 0&&(F=i.TEXTURE0+ee-1),fe!==F&&(i.activeTexture(F),fe=F)}function ce(F,Te,Se){Se===void 0&&(fe===null?Se=i.TEXTURE0+ee-1:Se=fe);let Qe=Re[Se];Qe===void 0&&(Qe={type:void 0,texture:void 0},Re[Se]=Qe),(Qe.type!==F||Qe.texture!==Te)&&(fe!==Se&&(i.activeTexture(Se),fe=Se),i.bindTexture(F,Te||Ve[F]),Qe.type=F,Qe.texture=Te)}function Fe(){let F=Re[fe];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(F){Pe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function Rt(F){Be.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function Ft(F,Te){let Se=u.get(Te);Se===void 0&&(Se=new WeakMap,u.set(Te,Se));let Qe=Se.get(F);Qe===void 0&&(Qe=i.getUniformBlockIndex(Te,F.name),Se.set(F,Qe))}function lt(F,Te){let Qe=u.get(Te).get(F);h.get(Te)!==Qe&&(i.uniformBlockBinding(Te,Qe,F.__bindingPointIndex),h.set(Te,Qe))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,Re={},m={},g=new WeakMap,x=[],p=null,f=!1,b=null,_=null,A=null,O=null,U=null,w=null,E=null,S=new qe(0,0,0),C=0,V=!1,X=null,me=null,B=null,W=null,$=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ct,disable:He,bindFramebuffer:ht,drawBuffers:D,useProgram:ve,setBlending:te,setMaterial:we,setFlipSided:N,setCullFace:T,setLineWidth:M,setPolygonOffset:v,setScissorTest:G,activeTexture:ie,bindTexture:ce,unbindTexture:Fe,compressedTexImage2D:Ae,compressedTexImage3D:Ie,texImage2D:We,texImage3D:De,updateUBOMapping:Ft,uniformBlockBinding:lt,texStorage2D:gt,texStorage3D:at,texSubImage2D:Ke,texSubImage3D:ut,compressedTexSubImage2D:de,compressedTexSubImage3D:Tt,scissor:ot,viewport:Rt,reset:Ee}}function J_(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return m?new OffscreenCanvas(T,M):po("canvas")}function x(T,M,v,G){let ie=1;if((T.width>G||T.height>G)&&(ie=G/Math.max(T.width,T.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let ce=M?lc:Math.floor,Fe=ce(ie*T.width),Ae=ce(ie*T.height);u===void 0&&(u=g(Fe,Ae));let Ie=v?g(Fe,Ae):u;return Ie.width=Fe,Ie.height=Ae,Ie.getContext("2d").drawImage(T,0,0,Fe,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Fe+"x"+Ae+")."),Ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return hu(T.width)&&hu(T.height)}function f(T){return o?!1:T.wrapS!==ai||T.wrapT!==ai||T.minFilter!==On&&T.minFilter!==$n}function b(T,M){return T.generateMipmaps&&M&&T.minFilter!==On&&T.minFilter!==$n}function _(T){i.generateMipmap(T)}function A(T,M,v,G,ie=!1){if(o===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=M;if(M===i.RED&&(v===i.FLOAT&&(ce=i.R32F),v===i.HALF_FLOAT&&(ce=i.R16F),v===i.UNSIGNED_BYTE&&(ce=i.R8)),M===i.RED_INTEGER&&(v===i.UNSIGNED_BYTE&&(ce=i.R8UI),v===i.UNSIGNED_SHORT&&(ce=i.R16UI),v===i.UNSIGNED_INT&&(ce=i.R32UI),v===i.BYTE&&(ce=i.R8I),v===i.SHORT&&(ce=i.R16I),v===i.INT&&(ce=i.R32I)),M===i.RG&&(v===i.FLOAT&&(ce=i.RG32F),v===i.HALF_FLOAT&&(ce=i.RG16F),v===i.UNSIGNED_BYTE&&(ce=i.RG8)),M===i.RGBA){let Fe=ie?co:Gt.getTransfer(G);v===i.FLOAT&&(ce=i.RGBA32F),v===i.HALF_FLOAT&&(ce=i.RGBA16F),v===i.UNSIGNED_BYTE&&(ce=Fe===Yt?i.SRGB8_ALPHA8:i.RGBA8),v===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),v===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function O(T,M,v){return b(T,v)===!0||T.isFramebufferTexture&&T.minFilter!==On&&T.minFilter!==$n?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function U(T){return T===On||T===Uh||T===gl?i.NEAREST:i.LINEAR}function w(T){let M=T.target;M.removeEventListener("dispose",w),S(M),M.isVideoTexture&&h.delete(M)}function E(T){let M=T.target;M.removeEventListener("dispose",E),V(M)}function S(T){let M=n.get(T);if(M.__webglInit===void 0)return;let v=T.source,G=d.get(v);if(G){let ie=G[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(T),Object.keys(G).length===0&&d.delete(v)}n.remove(T)}function C(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let v=T.source,G=d.get(v);delete G[M.__cacheKey],a.memory.textures--}function V(T){let M=T.texture,v=n.get(T),G=n.get(M);if(G.__webglTexture!==void 0&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(v.__webglFramebuffer[ie]))for(let ce=0;ce<v.__webglFramebuffer[ie].length;ce++)i.deleteFramebuffer(v.__webglFramebuffer[ie][ce]);else i.deleteFramebuffer(v.__webglFramebuffer[ie]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ie])}else{if(Array.isArray(v.__webglFramebuffer))for(let ie=0;ie<v.__webglFramebuffer.length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ie]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ie=0;ie<v.__webglColorRenderbuffer.length;ie++)v.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ie]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ce=M.length;ie<ce;ie++){let Fe=n.get(M[ie]);Fe.__webglTexture&&(i.deleteTexture(Fe.__webglTexture),a.memory.textures--),n.remove(M[ie])}n.remove(M),n.remove(T)}let X=0;function me(){X=0}function B(){let T=X;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function W(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function $(T,M){let v=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.version>0&&v.__version!==T.version){let G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(v,T,M);return}}t.bindTexture(i.TEXTURE_2D,v.__webglTexture,i.TEXTURE0+M)}function ee(T,M){let v=n.get(T);if(T.version>0&&v.__version!==T.version){Pe(v,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,v.__webglTexture,i.TEXTURE0+M)}function se(T,M){let v=n.get(T);if(T.version>0&&v.__version!==T.version){Pe(v,T,M);return}t.bindTexture(i.TEXTURE_3D,v.__webglTexture,i.TEXTURE0+M)}function j(T,M){let v=n.get(T);if(T.version>0&&v.__version!==T.version){Be(v,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+M)}let he={[lr]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[sc]:i.MIRRORED_REPEAT},fe={[On]:i.NEAREST,[Uh]:i.NEAREST_MIPMAP_NEAREST,[gl]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[Gf]:i.LINEAR_MIPMAP_NEAREST,[Hr]:i.LINEAR_MIPMAP_LINEAR},Re={[ep]:i.NEVER,[ap]:i.ALWAYS,[tp]:i.LESS,[bd]:i.LEQUAL,[np]:i.EQUAL,[rp]:i.GEQUAL,[ip]:i.GREATER,[sp]:i.NOTEQUAL};function K(T,M,v){if(v?(i.texParameteri(T,i.TEXTURE_WRAP_S,he[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ai||M.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,U(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,U(M.minFilter)),M.minFilter!==On&&M.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let G=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===On||M.minFilter!==gl&&M.minFilter!==Hr||M.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===kr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ue(T,M){let v=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",w));let G=M.source,ie=d.get(G);ie===void 0&&(ie={},d.set(G,ie));let ce=W(M);if(ce!==T.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,v=!0),ie[ce].usedTimes++;let Fe=ie[T.__cacheKey];Fe!==void 0&&(ie[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&C(M)),T.__cacheKey=ce,T.__webglTexture=ie[ce].texture}return v}function Pe(T,M,v){let G=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=i.TEXTURE_3D);let ie=ue(T,M),ce=M.source;t.bindTexture(G,T.__webglTexture,i.TEXTURE0+v);let Fe=n.get(ce);if(ce.version!==Fe.__version||ie===!0){t.activeTexture(i.TEXTURE0+v);let Ae=Gt.getPrimaries(Gt.workingColorSpace),Ie=M.colorSpace===Kn?null:Gt.getPrimaries(M.colorSpace),Ke=M.colorSpace===Kn||Ae===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ut=f(M)&&p(M.image)===!1,de=x(M.image,ut,!1,s.maxTextureSize);de=N(M,de);let Tt=p(de)||o,gt=r.convert(M.format,M.colorSpace),at=r.convert(M.type),We=A(M.internalFormat,gt,at,M.colorSpace,M.isVideoTexture);K(G,M,Tt);let De,ot=M.mipmaps,Rt=o&&M.isVideoTexture!==!0&&We!==Md,Ft=Fe.__version===void 0||ie===!0,lt=O(M,de,Tt);if(M.isDepthTexture)We=i.DEPTH_COMPONENT,o?M.type===Wi?We=i.DEPTH_COMPONENT32F:M.type===Vi?We=i.DEPTH_COMPONENT24:M.type===ps?We=i.DEPTH24_STENCIL8:We=i.DEPTH_COMPONENT16:M.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ms&&We===i.DEPTH_COMPONENT&&M.type!==Jc&&M.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Vi,at=r.convert(M.type)),M.format===cr&&We===i.DEPTH_COMPONENT&&(We=i.DEPTH_STENCIL,M.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ps,at=r.convert(M.type))),Ft&&(Rt?t.texStorage2D(i.TEXTURE_2D,1,We,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,We,de.width,de.height,0,gt,at,null));else if(M.isDataTexture)if(ot.length>0&&Tt){Rt&&Ft&&t.texStorage2D(i.TEXTURE_2D,lt,We,ot[0].width,ot[0].height);for(let Ee=0,F=ot.length;Ee<F;Ee++)De=ot[Ee],Rt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,De.width,De.height,gt,at,De.data):t.texImage2D(i.TEXTURE_2D,Ee,We,De.width,De.height,0,gt,at,De.data);M.generateMipmaps=!1}else Rt?(Ft&&t.texStorage2D(i.TEXTURE_2D,lt,We,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,gt,at,de.data)):t.texImage2D(i.TEXTURE_2D,0,We,de.width,de.height,0,gt,at,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Rt&&Ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,We,ot[0].width,ot[0].height,de.depth);for(let Ee=0,F=ot.length;Ee<F;Ee++)De=ot[Ee],M.format!==oi?gt!==null?Rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,de.depth,gt,De.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,We,De.width,De.height,de.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,De.width,De.height,de.depth,gt,at,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,We,De.width,De.height,de.depth,0,gt,at,De.data)}else{Rt&&Ft&&t.texStorage2D(i.TEXTURE_2D,lt,We,ot[0].width,ot[0].height);for(let Ee=0,F=ot.length;Ee<F;Ee++)De=ot[Ee],M.format!==oi?gt!==null?Rt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,De.width,De.height,gt,De.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,De.width,De.height,gt,at,De.data):t.texImage2D(i.TEXTURE_2D,Ee,We,De.width,De.height,0,gt,at,De.data)}else if(M.isDataArrayTexture)Rt?(Ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,We,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,gt,at,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,de.width,de.height,de.depth,0,gt,at,de.data);else if(M.isData3DTexture)Rt?(Ft&&t.texStorage3D(i.TEXTURE_3D,lt,We,de.width,de.height,de.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,gt,at,de.data)):t.texImage3D(i.TEXTURE_3D,0,We,de.width,de.height,de.depth,0,gt,at,de.data);else if(M.isFramebufferTexture){if(Ft)if(Rt)t.texStorage2D(i.TEXTURE_2D,lt,We,de.width,de.height);else{let Ee=de.width,F=de.height;for(let Te=0;Te<lt;Te++)t.texImage2D(i.TEXTURE_2D,Te,We,Ee,F,0,gt,at,null),Ee>>=1,F>>=1}}else if(ot.length>0&&Tt){Rt&&Ft&&t.texStorage2D(i.TEXTURE_2D,lt,We,ot[0].width,ot[0].height);for(let Ee=0,F=ot.length;Ee<F;Ee++)De=ot[Ee],Rt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,gt,at,De):t.texImage2D(i.TEXTURE_2D,Ee,We,gt,at,De);M.generateMipmaps=!1}else Rt?(Ft&&t.texStorage2D(i.TEXTURE_2D,lt,We,de.width,de.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,at,de)):t.texImage2D(i.TEXTURE_2D,0,We,gt,at,de);b(M,Tt)&&_(G),Fe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Be(T,M,v){if(M.image.length!==6)return;let G=ue(T,M),ie=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+v);let ce=n.get(ie);if(ie.version!==ce.__version||G===!0){t.activeTexture(i.TEXTURE0+v);let Fe=Gt.getPrimaries(Gt.workingColorSpace),Ae=M.colorSpace===Kn?null:Gt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Kn||Fe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,de=[];for(let Ee=0;Ee<6;Ee++)!Ke&&!ut?de[Ee]=x(M.image[Ee],!1,!0,s.maxCubemapSize):de[Ee]=ut?M.image[Ee].image:M.image[Ee],de[Ee]=N(M,de[Ee]);let Tt=de[0],gt=p(Tt)||o,at=r.convert(M.format,M.colorSpace),We=r.convert(M.type),De=A(M.internalFormat,at,We,M.colorSpace),ot=o&&M.isVideoTexture!==!0,Rt=ce.__version===void 0||G===!0,Ft=O(M,Tt,gt);K(i.TEXTURE_CUBE_MAP,M,gt);let lt;if(Ke){ot&&Rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,De,Tt.width,Tt.height);for(let Ee=0;Ee<6;Ee++){lt=de[Ee].mipmaps;for(let F=0;F<lt.length;F++){let Te=lt[F];M.format!==oi?at!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Te.width,Te.height,at,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Te.width,Te.height,at,We,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,De,Te.width,Te.height,0,at,We,Te.data)}}}else{lt=M.mipmaps,ot&&Rt&&(lt.length>0&&Ft++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,De,de[0].width,de[0].height));for(let Ee=0;Ee<6;Ee++)if(ut){ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,de[Ee].width,de[Ee].height,at,We,de[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,De,de[Ee].width,de[Ee].height,0,at,We,de[Ee].data);for(let F=0;F<lt.length;F++){let Se=lt[F].image[Ee].image;ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,Se.width,Se.height,at,We,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,De,Se.width,Se.height,0,at,We,Se.data)}}else{ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,at,We,de[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,De,at,We,de[Ee]);for(let F=0;F<lt.length;F++){let Te=lt[F];ot?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,at,We,Te.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,De,at,We,Te.image[Ee])}}}b(M,gt)&&_(i.TEXTURE_CUBE_MAP),ce.__version=ie.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ue(T,M,v,G,ie,ce){let Fe=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),Ie=A(v.internalFormat,Fe,Ae,v.colorSpace);if(!n.get(M).__hasExternalTextures){let ut=Math.max(1,M.width>>ce),de=Math.max(1,M.height>>ce);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ce,Ie,ut,de,M.depth,0,Fe,Ae,null):t.texImage2D(ie,ce,Ie,ut,de,0,Fe,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,ie,n.get(v).__webglTexture,0,xe(M)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,ie,n.get(v).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,M,v){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let G=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(v||te(M)){let ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Wi?G=i.DEPTH_COMPONENT32F:ie.type===Vi&&(G=i.DEPTH_COMPONENT24));let ce=xe(M);te(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,G,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,G,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,G,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){let G=xe(M);v&&te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,M.width,M.height):te(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let G=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<G.length;ie++){let ce=G[ie],Fe=r.convert(ce.format,ce.colorSpace),Ae=r.convert(ce.type),Ie=A(ce.internalFormat,Fe,Ae,ce.colorSpace),Ke=xe(M);v&&te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ie,M.width,M.height):te(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,Ie,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let G=n.get(M.depthTexture).__webglTexture,ie=xe(M);if(M.depthTexture.format===ms)te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(M.depthTexture.format===cr)te(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function He(T){let M=n.get(T),v=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(v)throw new Error("target.depthTexture not supported in Cube render targets");ct(M.__webglFramebuffer,T)}else if(v){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]=i.createRenderbuffer(),Ve(M.__webglDepthbuffer[G],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ve(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(T,M,v){let G=n.get(T);M!==void 0&&Ue(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),v!==void 0&&He(T)}function D(T){let M=T.texture,v=n.get(T),G=n.get(M);T.addEventListener("dispose",E),T.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=M.version,a.memory.textures++);let ie=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,Fe=p(T)||o;if(ie){v.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(o&&M.mipmaps&&M.mipmaps.length>0){v.__webglFramebuffer[Ae]=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)v.__webglFramebuffer[Ae][Ie]=i.createFramebuffer()}else v.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){v.__webglFramebuffer=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)v.__webglFramebuffer[Ae]=i.createFramebuffer()}else v.__webglFramebuffer=i.createFramebuffer();if(ce)if(s.drawBuffers){let Ae=T.texture;for(let Ie=0,Ke=Ae.length;Ie<Ke;Ie++){let ut=n.get(Ae[Ie]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&te(T)===!1){let Ae=ce?M:[M];v.__webglMultisampledFramebuffer=i.createFramebuffer(),v.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ae.length;Ie++){let Ke=Ae[Ie];v.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,v.__webglColorRenderbuffer[Ie]);let ut=r.convert(Ke.format,Ke.colorSpace),de=r.convert(Ke.type),Tt=A(Ke.internalFormat,ut,de,Ke.colorSpace,T.isXRRenderTarget===!0),gt=xe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,v.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(v.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(v.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),K(i.TEXTURE_CUBE_MAP,M,Fe);for(let Ae=0;Ae<6;Ae++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Ue(v.__webglFramebuffer[Ae][Ie],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ie);else Ue(v.__webglFramebuffer[Ae],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);b(M,Fe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let Ae=T.texture;for(let Ie=0,Ke=Ae.length;Ie<Ke;Ie++){let ut=Ae[Ie],de=n.get(ut);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),K(i.TEXTURE_2D,ut,Fe),Ue(v.__webglFramebuffer,T,ut,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),b(ut,Fe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?Ae=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,G.__webglTexture),K(Ae,M,Fe),o&&M.mipmaps&&M.mipmaps.length>0)for(let Ie=0;Ie<M.mipmaps.length;Ie++)Ue(v.__webglFramebuffer[Ie],T,M,i.COLOR_ATTACHMENT0,Ae,Ie);else Ue(v.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,Ae,0);b(M,Fe)&&_(Ae),t.unbindTexture()}T.depthBuffer&&He(T)}function ve(T){let M=p(T)||o,v=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let G=0,ie=v.length;G<ie;G++){let ce=v[G];if(b(ce,M)){let Fe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(ce).__webglTexture;t.bindTexture(Fe,Ae),_(Fe),t.unbindTexture()}}}function ne(T){if(o&&T.samples>0&&te(T)===!1){let M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],v=T.width,G=T.height,ie=i.COLOR_BUFFER_BIT,ce=[],Fe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(T),Ie=T.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ke=0;Ke<M.length;Ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ke=0;Ke<M.length;Ke++){ce.push(i.COLOR_ATTACHMENT0+Ke),T.depthBuffer&&ce.push(Fe);let ut=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(ut===!1&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Ie&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ke]),ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Fe])),Ie){let de=n.get(M[Ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,v,G,0,0,v,G,ie,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ke=0;Ke<M.length;Ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ke]);let ut=n.get(M[Ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function xe(T){return Math.min(s.maxSamples,T.samples)}function te(T){let M=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(T){let M=a.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function N(T,M){let v=T.colorSpace,G=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ac||v!==Ai&&v!==Kn&&(Gt.getTransfer(v)===Yt?o===!1?e.has("EXT_sRGB")===!0&&G===oi?(T.format=ac,T.minFilter=$n,T.generateMipmaps=!1):M=mo.sRGBToLinear(M):(G!==oi||ie!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",v)),M}this.allocateTextureUnit=B,this.resetTextureUnits=me,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=te}function $_(i,e,t){let n=t.isWebGL2;function s(r,a=Kn){let o,l=Gt.getTransfer(a);if(r===Zi)return i.UNSIGNED_BYTE;if(r===gd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vf)return i.BYTE;if(r===Wf)return i.SHORT;if(r===Jc)return i.UNSIGNED_SHORT;if(r===md)return i.INT;if(r===Vi)return i.UNSIGNED_INT;if(r===Wi)return i.FLOAT;if(r===kr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xf)return i.ALPHA;if(r===oi)return i.RGBA;if(r===qf)return i.LUMINANCE;if(r===Yf)return i.LUMINANCE_ALPHA;if(r===ms)return i.DEPTH_COMPONENT;if(r===cr)return i.DEPTH_STENCIL;if(r===ac)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zf)return i.RED;if(r===xd)return i.RED_INTEGER;if(r===Jf)return i.RG;if(r===yd)return i.RG_INTEGER;if(r===vd)return i.RGBA_INTEGER;if(r===_l||r===xl||r===yl||r===vl)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===_l)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===_l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dh||r===Nh||r===Oh||r===Fh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Md)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===zh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Bh)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hh||r===kh||r===Gh||r===Vh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===Jh||r===$h||r===Kh||r===Qh||r===jh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Hh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$h)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ml||r===eu||r===tu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ml)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$f||r===nu||r===iu||r===su)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ml)return o.COMPRESSED_RED_RGTC1_EXT;if(r===nu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===su)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ps?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Mc=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},K_={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ec=class extends Ki{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,x=t.getContextAttributes(),p=null,f=null,b=[],_=[],A=new _e,O=null,U=new Rn;U.layers.enable(1),U.viewport=new Qt;let w=new Rn;w.layers.enable(2),w.viewport=new Qt;let E=[U,w],S=new Mc;S.layers.enable(1),S.layers.enable(2);let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=b[K];return ue===void 0&&(ue=new Fr,b[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=b[K];return ue===void 0&&(ue=new Fr,b[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=b[K];return ue===void 0&&(ue=new Fr,b[K]=ue),ue.getHandSpace()};function X(K){let ue=_.indexOf(K.inputSource);if(ue===-1)return;let Pe=b[ue];Pe!==void 0&&(Pe.update(K.inputSource,K.frame,c||a),Pe.dispatchEvent({type:K.type,data:K.inputSource}))}function me(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",B);for(let K=0;K<b.length;K++){let ue=_[K];ue!==null&&(_[K]=null,b[K].disconnect(ue))}C=null,V=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",me),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ue={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ri(m.framebufferWidth,m.framebufferHeight,{format:oi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ue=null,Pe=null,Be=null;x.depth&&(Be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?cr:ms,Pe=x.stencil?ps:Vi);let Ue={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ri(d.textureWidth,d.textureHeight,{format:oi,type:Zi,depthTexture:new wo(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ve=e.properties.get(f);Ve.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function B(K){for(let ue=0;ue<K.removed.length;ue++){let Pe=K.removed[ue],Be=_.indexOf(Pe);Be>=0&&(_[Be]=null,b[Be].disconnect(Pe))}for(let ue=0;ue<K.added.length;ue++){let Pe=K.added[ue],Be=_.indexOf(Pe);if(Be===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=_.length){_.push(Pe),Be=Ve;break}else if(_[Ve]===null){_[Ve]=Pe,Be=Ve;break}if(Be===-1)break}let Ue=b[Be];Ue&&Ue.connect(Pe)}}let W=new I,$=new I;function ee(K,ue,Pe){W.setFromMatrixPosition(ue.matrixWorld),$.setFromMatrixPosition(Pe.matrixWorld);let Be=W.distanceTo($),Ue=ue.projectionMatrix.elements,Ve=Pe.projectionMatrix.elements,ct=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),ht=(Ue[9]+1)/Ue[5],D=(Ue[9]-1)/Ue[5],ve=(Ue[8]-1)/Ue[0],ne=(Ve[8]+1)/Ve[0],xe=ct*ve,te=ct*ne,we=Be/(-ve+ne),N=we*-ve;ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(N),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();let T=ct+we,M=He+we,v=xe-N,G=te+(Be-N),ie=ht*He/M*T,ce=D*He/M*T;K.projectionMatrix.makePerspective(v,G,ie,ce,T,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function se(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;S.near=w.near=U.near=K.near,S.far=w.far=U.far=K.far,(C!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,V=S.far);let ue=K.parent,Pe=S.cameras;se(S,ue);for(let Be=0;Be<Pe.length;Be++)se(Pe[Be],ue);Pe.length===2?ee(S,U,w):S.projectionMatrix.copy(U.projectionMatrix),j(K,S,ue)};function j(K,ue,Pe){Pe===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=oc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)};let he=null;function fe(K,ue){if(h=ue.getViewerPose(c||a),g=ue,h!==null){let Pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Be=!1;Pe.length!==S.cameras.length&&(S.cameras.length=0,Be=!0);for(let Ue=0;Ue<Pe.length;Ue++){let Ve=Pe[Ue],ct=null;if(m!==null)ct=m.getViewport(Ve);else{let ht=u.getViewSubImage(d,Ve);ct=ht.viewport,Ue===0&&(e.setRenderTargetTextures(f,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(f))}let He=E[Ue];He===void 0&&(He=new Rn,He.layers.enable(Ue),He.viewport=new Qt,E[Ue]=He),He.matrix.fromArray(Ve.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ve.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),Ue===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Be===!0&&S.cameras.push(He)}}for(let Pe=0;Pe<b.length;Pe++){let Be=_[Pe],Ue=b[Pe];Be!==null&&Ue!==void 0&&Ue.update(Be,ue,c||a)}he&&he(K,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let Re=new Rd;Re.setAnimationLoop(fe),this.setAnimationLoop=function(K){he=K},this.dispose=function(){}}};function Q_(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ad(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,b,_,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),x(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,_):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===yn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===yn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b=e.get(f).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,_){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=_*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){let b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,_){let A=_.program;n.uniformBlockBinding(b,A)}function c(b,_){let A=s[b.id];A===void 0&&(g(b),A=h(b),s[b.id]=A,b.addEventListener("dispose",p));let O=_.program;n.updateUBOMapping(b,O);let U=e.render.frame;r[b.id]!==U&&(d(b),r[b.id]=U)}function h(b){let _=u();b.__bindingPointIndex=_;let A=i.createBuffer(),O=b.__size,U=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,O,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,A),A}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],A=b.uniforms,O=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let U=0,w=A.length;U<w;U++){let E=Array.isArray(A[U])?A[U]:[A[U]];for(let S=0,C=E.length;S<C;S++){let V=E[S];if(m(V,U,S,O)===!0){let X=V.__offset,me=Array.isArray(V.value)?V.value:[V.value],B=0;for(let W=0;W<me.length;W++){let $=me[W],ee=x($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,X+B,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,A,O){let U=b.value,w=_+"_"+A;if(O[w]===void 0)return typeof U=="number"||typeof U=="boolean"?O[w]=U:O[w]=U.clone(),!0;{let E=O[w];if(typeof U=="number"||typeof U=="boolean"){if(E!==U)return O[w]=U,!0}else if(E.equals(U)===!1)return E.copy(U),!0}return!1}function g(b){let _=b.uniforms,A=0,O=16;for(let w=0,E=_.length;w<E;w++){let S=Array.isArray(_[w])?_[w]:[_[w]];for(let C=0,V=S.length;C<V;C++){let X=S[C],me=Array.isArray(X.value)?X.value:[X.value];for(let B=0,W=me.length;B<W;B++){let $=me[B],ee=x($),se=A%O;se!==0&&O-se<ee.boundary&&(A+=O-se),X.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=ee.storage}}}let U=A%O;return U>0&&(A+=O-U),b.__size=A,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){let _=b.target;_.removeEventListener("dispose",p);let A=a.indexOf(_.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Wr=class{constructor(e={}){let{canvas:t=lp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,f=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let _=this,A=!1,O=0,U=0,w=null,E=-1,S=null,C=new Qt,V=new Qt,X=null,me=new qe(0),B=0,W=t.width,$=t.height,ee=1,se=null,j=null,he=new Qt(0,0,W,$),fe=new Qt(0,0,W,$),Re=!1,K=new Vr,ue=!1,Pe=!1,Be=null,Ue=new qt,Ve=new _e,ct=new I,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return w===null?ee:1}let D=n;function ve(R,k){for(let q=0;q<R.length;q++){let J=R[q],Y=t.getContext(J,k);if(Y!==null)return Y}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Te,!1),D===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),D=ve(k,R),D===null)throw ve(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,xe,te,we,N,T,M,v,G,ie,ce,Fe,Ae,Ie,Ke,ut,de,Tt,gt,at,We,De,ot,Rt;function Ft(){ne=new x0(D),xe=new d0(D,ne,e),ne.init(xe),De=new $_(D,ne,xe),te=new Z_(D,ne,xe),we=new M0(D),N=new O_,T=new J_(D,ne,te,N,xe,De,we),M=new p0(_),v=new _0(_),G=new Cp(D,xe),ot=new h0(D,ne,G,xe),ie=new y0(D,G,we,ot),ce=new w0(D,ie,G,we),gt=new b0(D,xe,T),ut=new f0(N),Fe=new N_(_,M,v,ne,xe,ot,ut),Ae=new Q_(_,N),Ie=new B_,Ke=new W_(ne,xe),Tt=new c0(_,M,v,te,ce,d,l),de=new Y_(_,ce,xe),Rt=new j_(D,we,xe,te),at=new u0(D,ne,we,xe),We=new v0(D,ne,we,xe),we.programs=Fe.programs,_.capabilities=xe,_.extensions=ne,_.properties=N,_.renderLists=Ie,_.shadowMap=de,_.state=te,_.info=we}Ft();let lt=new Ec(_,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(W,$,!1))},this.getSize=function(R){return R.set(W,$)},this.setSize=function(R,k,q=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,$=k,t.width=Math.floor(R*ee),t.height=Math.floor(k*ee),q===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(W*ee,$*ee).floor()},this.setDrawingBufferSize=function(R,k,q){W=R,$=k,ee=q,t.width=Math.floor(R*q),t.height=Math.floor(k*q),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,k,q,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,k,q,J),te.viewport(C.copy(he).multiplyScalar(ee).floor())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,k,q,J){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,k,q,J),te.scissor(V.copy(fe).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){te.setScissorTest(Re=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(R=!0,k=!0,q=!0){let J=0;if(R){let Y=!1;if(w!==null){let Le=w.texture.format;Y=Le===vd||Le===yd||Le===xd}if(Y){let Le=w.texture.type,ke=Le===Zi||Le===Vi||Le===Jc||Le===ps||Le===gd||Le===_d,Je=Tt.getClearColor(),Ne=Tt.getClearAlpha(),je=Je.r,tt=Je.g,nt=Je.b;ke?(m[0]=je,m[1]=tt,m[2]=nt,m[3]=Ne,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=je,g[1]=tt,g[2]=nt,g[3]=Ne,D.clearBufferiv(D.COLOR,0,g))}else J|=D.COLOR_BUFFER_BIT}k&&(J|=D.DEPTH_BUFFER_BIT),q&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ie.dispose(),Ke.dispose(),N.dispose(),M.dispose(),v.dispose(),ce.dispose(),ot.dispose(),Rt.dispose(),Fe.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Mn),lt.removeEventListener("sessionend",Nt),Be&&(Be.dispose(),Be=null),ln.stop()};function Ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=we.autoReset,k=de.enabled,q=de.autoUpdate,J=de.needsUpdate,Y=de.type;Ft(),we.autoReset=R,de.enabled=k,de.autoUpdate=q,de.needsUpdate=J,de.type=Y}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){let k=R.target;k.removeEventListener("dispose",Se),Qe(k)}function Qe(R){Xe(R),N.remove(R)}function Xe(R){let k=N.get(R).programs;k!==void 0&&(k.forEach(function(q){Fe.releaseProgram(q)}),R.isShaderMaterial&&Fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,q,J,Y,Le){k===null&&(k=He);let ke=Y.isMesh&&Y.matrixWorld.determinant()<0,Je=Fn(R,k,q,J,Y);te.setMaterial(J,ke);let Ne=q.index,je=1;if(J.wireframe===!0){if(Ne=ie.getWireframeAttribute(q),Ne===void 0)return;je=2}let tt=q.drawRange,nt=q.attributes.position,Pt=tt.start*je,fn=(tt.start+tt.count)*je;Le!==null&&(Pt=Math.max(Pt,Le.start*je),fn=Math.min(fn,(Le.start+Le.count)*je)),Ne!==null?(Pt=Math.max(Pt,0),fn=Math.min(fn,Ne.count)):nt!=null&&(Pt=Math.max(Pt,0),fn=Math.min(fn,nt.count));let It=fn-Pt;if(It<0||It===1/0)return;ot.setup(Y,J,Je,q,Ne);let di,Ot=at;if(Ne!==null&&(di=G.get(Ne),Ot=We,Ot.setIndex(di)),Y.isMesh)J.wireframe===!0?(te.setLineWidth(J.wireframeLinewidth*ht()),Ot.setMode(D.LINES)):Ot.setMode(D.TRIANGLES);else if(Y.isLine){let dt=J.linewidth;dt===void 0&&(dt=1),te.setLineWidth(dt*ht()),Y.isLineSegments?Ot.setMode(D.LINES):Y.isLineLoop?Ot.setMode(D.LINE_LOOP):Ot.setMode(D.LINE_STRIP)}else Y.isPoints?Ot.setMode(D.POINTS):Y.isSprite&&Ot.setMode(D.TRIANGLES);if(Y.isBatchedMesh)Ot.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ot.renderInstances(Pt,It,Y.count);else if(q.isInstancedBufferGeometry){let dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Di=Math.min(q.instanceCount,dt);Ot.renderInstances(Pt,It,Di)}else Ot.render(Pt,It)};function Ct(R,k,q){R.transparent===!0&&R.side===Cn&&R.forceSinglePass===!1?(R.side=yn,R.needsUpdate=!0,ts(R,k,q),R.side=$i,R.needsUpdate=!0,ts(R,k,q),R.side=Cn):ts(R,k,q)}this.compile=function(R,k,q=null){q===null&&(q=R),p=Ke.get(q),p.init(),b.push(p),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(_._useLegacyLights);let J=new Set;return R.traverse(function(Y){let Le=Y.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){let Je=Le[ke];Ct(Je,q,Y),J.add(Je)}else Ct(Le,q,Y),J.add(Le)}),b.pop(),p=null,J},this.compileAsync=function(R,k,q=null){let J=this.compile(R,k,q);return new Promise(Y=>{function Le(){if(J.forEach(function(ke){N.get(ke).currentProgram.isReady()&&J.delete(ke)}),J.size===0){Y(R);return}setTimeout(Le,10)}ne.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Bt=null;function an(R){Bt&&Bt(R)}function Mn(){ln.stop()}function Nt(){ln.start()}let ln=new Rd;ln.setAnimationLoop(an),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(R){Bt=R,lt.setAnimationLoop(R),R===null?ln.stop():ln.start()},lt.addEventListener("sessionstart",Mn),lt.addEventListener("sessionend",Nt),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,k,w),p=Ke.get(R,b.length),p.init(),b.push(p),Ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Ue),Pe=this.localClippingEnabled,ue=ut.init(this.clippingPlanes,Pe),x=Ie.get(R,f.length),x.init(),f.push(x),Sn(R,k,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(se,j),this.info.render.frame++,ue===!0&&ut.beginShadows();let q=p.state.shadowsArray;if(de.render(q,R,k),ue===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Tt.render(x,R),p.setupLights(_._useLegacyLights),k.isArrayCamera){let J=k.cameras;for(let Y=0,Le=J.length;Y<Le;Y++){let ke=J[Y];ra(x,R,ke,ke.viewport)}}else ra(x,R,k);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,k),ot.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Sn(R,k,q,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){J&&ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);let ke=ce.update(R),Je=R.material;Je.visible&&x.push(R,ke,Je,q,ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){let ke=ce.update(R),Je=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ct.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ct.copy(ke.boundingSphere.center)),ct.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(Je)){let Ne=ke.groups;for(let je=0,tt=Ne.length;je<tt;je++){let nt=Ne[je],Pt=Je[nt.materialIndex];Pt&&Pt.visible&&x.push(R,ke,Pt,q,ct.z,nt)}}else Je.visible&&x.push(R,ke,Je,q,ct.z,null)}}let Le=R.children;for(let ke=0,Je=Le.length;ke<Je;ke++)Sn(Le[ke],k,q,J)}function ra(R,k,q,J){let Y=R.opaque,Le=R.transmissive,ke=R.transparent;p.setupLightsView(q),ue===!0&&ut.setGlobalState(_.clippingPlanes,q),Le.length>0&&aa(Y,Le,k,q),J&&te.viewport(C.copy(J)),Y.length>0&&Ui(Y,k,q),Le.length>0&&Ui(Le,k,q),ke.length>0&&Ui(ke,k,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function aa(R,k,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Le=xe.isWebGL2;Be===null&&(Be=new Ri(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?kr:Zi,minFilter:Hr,samples:Le?4:0})),_.getDrawingBufferSize(Ve),Le?Be.setSize(Ve.x,Ve.y):Be.setSize(lc(Ve.x),lc(Ve.y));let ke=_.getRenderTarget();_.setRenderTarget(Be),_.getClearColor(me),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear();let Je=_.toneMapping;_.toneMapping=Yi,Ui(R,q,J),T.updateMultisampleRenderTarget(Be),T.updateRenderTargetMipmap(Be);let Ne=!1;for(let je=0,tt=k.length;je<tt;je++){let nt=k[je],Pt=nt.object,fn=nt.geometry,It=nt.material,di=nt.group;if(It.side===Cn&&Pt.layers.test(J.layers)){let Ot=It.side;It.side=yn,It.needsUpdate=!0,yr(Pt,q,J,fn,It,di),It.side=Ot,It.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(Be),T.updateRenderTargetMipmap(Be)),_.setRenderTarget(ke),_.setClearColor(me,B),_.toneMapping=Je}function Ui(R,k,q){let J=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,Le=R.length;Y<Le;Y++){let ke=R[Y],Je=ke.object,Ne=ke.geometry,je=J===null?ke.material:J,tt=ke.group;Je.layers.test(q.layers)&&yr(Je,k,q,Ne,je,tt)}}function yr(R,k,q,J,Y,Le){R.onBeforeRender(_,k,q,J,Y,Le),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(_,k,q,J,R,Le),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=yn,Y.needsUpdate=!0,_.renderBufferDirect(q,k,J,Y,R,Le),Y.side=$i,Y.needsUpdate=!0,_.renderBufferDirect(q,k,J,Y,R,Le),Y.side=Cn):_.renderBufferDirect(q,k,J,Y,R,Le),R.onAfterRender(_,k,q,J,Y,Le)}function ts(R,k,q){k.isScene!==!0&&(k=He);let J=N.get(R),Y=p.state.lights,Le=p.state.shadowsArray,ke=Y.state.version,Je=Fe.getParameters(R,Y.state,Le,k,q),Ne=Fe.getProgramCacheKey(Je),je=J.programs;J.environment=R.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(R.isMeshStandardMaterial?v:M).get(R.envMap||J.environment),je===void 0&&(R.addEventListener("dispose",Se),je=new Map,J.programs=je);let tt=je.get(Ne);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===ke)return Ms(R,Je),tt}else Je.uniforms=Fe.getUniforms(R),R.onBuild(q,Je,_),R.onBeforeCompile(Je,_),tt=Fe.acquireProgram(Je,Ne),je.set(Ne,tt),J.uniforms=Je.uniforms;let nt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=ut.uniform),Ms(R,Je),J.needsLights=Es(R),J.lightsStateVersion=ke,J.needsLights&&(nt.ambientLightColor.value=Y.state.ambient,nt.lightProbe.value=Y.state.probe,nt.directionalLights.value=Y.state.directional,nt.directionalLightShadows.value=Y.state.directionalShadow,nt.spotLights.value=Y.state.spot,nt.spotLightShadows.value=Y.state.spotShadow,nt.rectAreaLights.value=Y.state.rectArea,nt.ltc_1.value=Y.state.rectAreaLTC1,nt.ltc_2.value=Y.state.rectAreaLTC2,nt.pointLights.value=Y.state.point,nt.pointLightShadows.value=Y.state.pointShadow,nt.hemisphereLights.value=Y.state.hemi,nt.directionalShadowMap.value=Y.state.directionalShadowMap,nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,nt.spotShadowMap.value=Y.state.spotShadowMap,nt.spotLightMatrix.value=Y.state.spotLightMatrix,nt.spotLightMap.value=Y.state.spotLightMap,nt.pointShadowMap.value=Y.state.pointShadowMap,nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function mi(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=rr.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Ms(R,k){let q=N.get(R);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Fn(R,k,q,J,Y){k.isScene!==!0&&(k=He),T.resetTextureUnits();let Le=k.fog,ke=J.isMeshStandardMaterial?k.environment:null,Je=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ai,Ne=(J.isMeshStandardMaterial?v:M).get(J.envMap||ke),je=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!q.morphAttributes.position,Pt=!!q.morphAttributes.normal,fn=!!q.morphAttributes.color,It=Yi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(It=_.toneMapping);let di=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=di!==void 0?di.length:0,dt=N.get(J),Di=p.state.lights;if(ue===!0&&(Pe===!0||R!==S)){let bn=R===S&&J.id===E;ut.setState(J,R,bn)}let Wt=!1;J.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Di.state.version||dt.outputColorSpace!==Je||Y.isBatchedMesh&&dt.batching===!1||!Y.isBatchedMesh&&dt.batching===!0||Y.isInstancedMesh&&dt.instancing===!1||!Y.isInstancedMesh&&dt.instancing===!0||Y.isSkinnedMesh&&dt.skinning===!1||!Y.isSkinnedMesh&&dt.skinning===!0||Y.isInstancedMesh&&dt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&dt.instancingColor===!1&&Y.instanceColor!==null||dt.envMap!==Ne||J.fog===!0&&dt.fog!==Le||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==ut.numPlanes||dt.numIntersection!==ut.numIntersection)||dt.vertexAlphas!==je||dt.vertexTangents!==tt||dt.morphTargets!==nt||dt.morphNormals!==Pt||dt.morphColors!==fn||dt.toneMapping!==It||xe.isWebGL2===!0&&dt.morphTargetsCount!==Ot)&&(Wt=!0):(Wt=!0,dt.__version=J.version);let gn=dt.currentProgram;Wt===!0&&(gn=ts(J,k,Y));let oa=!1,Ni=!1,gi=!1,yt=gn.getUniforms(),Ht=dt.uniforms;if(te.useProgram(gn.program)&&(oa=!0,Ni=!0,gi=!0),J.id!==E&&(E=J.id,Ni=!0),oa||S!==R){yt.setValue(D,"projectionMatrix",R.projectionMatrix),yt.setValue(D,"viewMatrix",R.matrixWorldInverse);let bn=yt.map.cameraPosition;bn!==void 0&&bn.setValue(D,ct.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ni=!0,gi=!0)}if(Y.isSkinnedMesh){yt.setOptional(D,Y,"bindMatrix"),yt.setOptional(D,Y,"bindMatrixInverse");let bn=Y.skeleton;bn&&(xe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),yt.setValue(D,"boneTexture",bn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(yt.setOptional(D,Y,"batchingTexture"),yt.setValue(D,"batchingTexture",Y._matricesTexture,T));let ei=q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0&&xe.isWebGL2===!0)&&gt.update(Y,q,gn),(Ni||dt.receiveShadow!==Y.receiveShadow)&&(dt.receiveShadow=Y.receiveShadow,yt.setValue(D,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ht.envMap.value=Ne,Ht.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ni&&(yt.setValue(D,"toneMappingExposure",_.toneMappingExposure),dt.needsLights&&rt(Ht,gi),Le&&J.fog===!0&&Ae.refreshFogUniforms(Ht,Le),Ae.refreshMaterialUniforms(Ht,J,ee,$,Be),rr.upload(D,mi(dt),Ht,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(rr.upload(D,mi(dt),Ht,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(D,"center",Y.center),yt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(D,"normalMatrix",Y.normalMatrix),yt.setValue(D,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let bn=J.uniformsGroups;for(let ns=0,is=bn.length;ns<is;ns++)if(xe.isWebGL2){let _i=bn[ns];Rt.update(_i,gn),Rt.bind(_i,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function rt(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Es(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,k,q){N.get(R.texture).__webglTexture=k,N.get(R.depthTexture).__webglTexture=q;let J=N.get(R);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,k){let q=N.get(R);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,q=0){w=R,O=k,U=q;let J=!0,Y=null,Le=!1,ke=!1;if(R){let Ne=N.get(R);Ne.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(D.FRAMEBUFFER,null),J=!1):Ne.__webglFramebuffer===void 0?T.setupRenderTarget(R):Ne.__hasExternalTextures&&T.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);let je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ke=!0);let tt=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?Y=tt[k][q]:Y=tt[k],Le=!0):xe.isWebGL2&&R.samples>0&&T.useMultisampledRTT(R)===!1?Y=N.get(R).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[q]:Y=tt,C.copy(R.viewport),V.copy(R.scissor),X=R.scissorTest}else C.copy(he).multiplyScalar(ee).floor(),V.copy(fe).multiplyScalar(ee).floor(),X=Re;if(te.bindFramebuffer(D.FRAMEBUFFER,Y)&&xe.drawBuffers&&J&&te.drawBuffers(R,Y),te.viewport(C),te.scissor(V),te.setScissorTest(X),Le){let Ne=N.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,q)}else if(ke){let Ne=N.get(R.texture),je=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,je)}E=-1},this.readRenderTargetPixels=function(R,k,q,J,Y,Le,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Je=Je[ke]),Je){te.bindFramebuffer(D.FRAMEBUFFER,Je);try{let Ne=R.texture,je=Ne.format,tt=Ne.type;if(je!==oi&&De.convert(je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=tt===kr&&(ne.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ne.has("EXT_color_buffer_float"));if(tt!==Zi&&De.convert(tt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Wi&&(xe.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&q>=0&&q<=R.height-Y&&D.readPixels(k,q,J,Y,De.convert(je),De.convert(tt),Le)}finally{let Ne=w!==null?N.get(w).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(R,k,q=0){let J=Math.pow(2,-q),Y=Math.floor(k.image.width*J),Le=Math.floor(k.image.height*J);T.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,R.x,R.y,Y,Le),te.unbindTexture()},this.copyTextureToTexture=function(R,k,q,J=0){let Y=k.image.width,Le=k.image.height,ke=De.convert(q.format),Je=De.convert(q.type);T.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,R.x,R.y,Y,Le,ke,Je,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,R.x,R.y,k.mipmaps[0].width,k.mipmaps[0].height,ke,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,J,R.x,R.y,ke,Je,k.image),J===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(R,k,q,J,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=R.max.x-R.min.x+1,ke=R.max.y-R.min.y+1,Je=R.max.z-R.min.z+1,Ne=De.convert(J.format),je=De.convert(J.type),tt;if(J.isData3DTexture)T.setTexture3D(J,0),tt=D.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)T.setTexture2DArray(J,0),tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,J.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,J.unpackAlignment);let nt=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),It=D.getParameter(D.UNPACK_SKIP_ROWS),di=D.getParameter(D.UNPACK_SKIP_IMAGES),Ot=q.isCompressedTexture?q.mipmaps[Y]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(tt,Y,k.x,k.y,k.z,Le,ke,Je,Ne,je,Ot.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(tt,Y,k.x,k.y,k.z,Le,ke,Je,Ne,Ot.data)):D.texSubImage3D(tt,Y,k.x,k.y,k.z,Le,ke,Je,Ne,je,Ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),D.pixelStorei(D.UNPACK_SKIP_IMAGES,di),Y===0&&J.generateMipmaps&&D.generateMipmap(tt),te.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?T.setTextureCube(R,0):R.isData3DTexture?T.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?T.setTexture2DArray(R,0):T.setTexture2D(R,0),te.unbindTexture()},this.resetState=function(){O=0,U=0,w=null,te.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=Gt.workingColorSpace===Xo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===un?gs:Ed}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?un:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Sc=class extends Wr{};Sc.prototype.isWebGL1Renderer=!0;var To=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},bc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new I,Ao=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xr=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Js,Pr=new I,$s=new I,Ks=new I,Qs=new _e,Ir=new _e,Dd=new qt,Xa=new I,Lr=new I,qa=new I,Zu=new _e,ql=new _e,Ju=new _e,Ro=class extends sn{constructor(e=new Xr){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new Zt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bc(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Ao(n,3,0,!1)),Js.setAttribute("uv",new Ao(n,2,3,!1))}this.geometry=Js,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Dd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Ks.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ya(Xa.set(-.5,-.5,0),Ks,a,$s,s,r),Ya(Lr.set(.5,-.5,0),Ks,a,$s,s,r),Ya(qa.set(.5,.5,0),Ks,a,$s,s,r),Zu.set(0,0),ql.set(1,0),Ju.set(1,1);let o=e.ray.intersectTriangle(Xa,Lr,qa,!1,Pr);if(o===null&&(Ya(Lr.set(-.5,.5,0),Ks,a,$s,s,r),ql.set(0,1),o=e.ray.intersectTriangle(Xa,qa,Lr,!1,Pr),o===null))return;let l=e.ray.origin.distanceTo(Pr);l<e.near||l>e.far||t.push({distance:l,point:Pr.clone(),uv:Xi.getInterpolation(Pr,Xa,Lr,qa,Zu,ql,Ju,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ya(i,e,t,n,s,r){Qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ir.x=r*Qs.x-s*Qs.y,Ir.y=s*Qs.x+r*Qs.y):Ir.copy(Qs),i.copy(e),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(Dd)}var Co=class extends Pn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new qt,$u=new qt,Za=[],Ku=new Ci,ex=new qt,Ur=new ye,Dr=new Pi,_s=class extends ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Co(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Ku.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Dr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),$u.multiplyMatrices(n,js),Ur.matrixWorld=$u,Ur.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Co(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ji=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qu=new I,ju=new I,ed=new qt,Yl=new Gr,Ja=new Pi,fr=class extends sn{constructor(e=new Zt,t=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qu.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qu.distanceTo(ju);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;ed.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(ed);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,h=new I,u=new I,d=new I,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let _=f,A=b-1;_<A;_+=m){let O=g.getX(_),U=g.getX(_+1);if(c.fromBufferAttribute(p,O),h.fromBufferAttribute(p,U),Yl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let _=f,A=b-1;_<A;_+=m){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),Yl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},td=new I,nd=new I,qr=class extends fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)td.fromBufferAttribute(t,s),nd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+td.distanceTo(nd);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Yr=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},id=new qt,wc=new Gr,$a=new Pi,Ka=new I,Po=class extends sn{constructor(e=new Zt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;id.copy(s).invert(),wc.copy(e.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,x=m;g<x;g++){let p=c.getX(g);Ka.fromBufferAttribute(u,p),sd(Ka,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,x=m;g<x;g++)Ka.fromBufferAttribute(u,g),sd(Ka,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function sd(i,e,t,n,s,r,a){let o=wc.distanceSqToPoint(i);if(o<t){let l=new I;wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var pr=class extends Qn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(a-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new _e:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],a=[],o=new I,l=new qt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(An(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(An(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new _e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends Zr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,s(a,o,d,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Qa=new I,Zl=new Qc,Jl=new Qc,$l=new Qc,Ac=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qa.subVectors(s[0],s[1]).add(s[0]),c=Qa);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Jl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),$l.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Jl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$l.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Zl.calc(l),Jl.calc(l),$l.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function tx(i,e){let t=1-i;return t*t*e}function nx(i,e){return 2*(1-i)*i*e}function ix(i,e){return i*i*e}function Br(i,e,t,n){return tx(i,e)+nx(i,t)+ix(i,n)}function sx(i,e){let t=1-i;return t*t*t*e}function rx(i,e){let t=1-i;return 3*t*t*i*e}function ax(i,e){return 3*(1-i)*i*i*e}function ox(i,e){return i*i*i*e}function zr(i,e,t,n,s){return sx(i,e)+rx(i,t)+ax(i,n)+ox(i,s)}var Io=class extends jn{constructor(e=new _e,t=new _e,n=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends jn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends jn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends jn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends jn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y),Br(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(rd(o,l.x,c.x,h.x,u.x),rd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Ac,CubicBezierCurve:Io,CubicBezierCurve3:Rc,EllipseCurve:Zr,LineCurve:Lo,LineCurve3:Cc,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Pc,SplineCurve:Do}),Lc=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},mr=class extends Lc{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Uo(this.currentPoint.clone(),new _e(e,t),new _e(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Io(this.currentPoint.clone(),new _e(e,t),new _e(n,s),new _e(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Do(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Zr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Jr=class i extends Zt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,x=[],p=n/2,f=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new St(u,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(m,2));function b(){let A=new I,O=new I,U=0,w=(t-e)/n;for(let E=0;E<=r;E++){let S=[],C=E/r,V=C*(t-e)+e;for(let X=0;X<=s;X++){let me=X/s,B=me*l+o,W=Math.sin(B),$=Math.cos(B);O.x=V*W,O.y=-C*n+p,O.z=V*$,u.push(O.x,O.y,O.z),A.set(W,w,$).normalize(),d.push(A.x,A.y,A.z),m.push(me,1-C),S.push(g++)}x.push(S)}for(let E=0;E<s;E++)for(let S=0;S<r;S++){let C=x[S][E],V=x[S+1][E],X=x[S+1][E+1],me=x[S][E+1];h.push(C,V,me),h.push(V,X,me),U+=6}c.addGroup(f,U,0),f+=U}function _(A){let O=g,U=new _e,w=new I,E=0,S=A===!0?e:t,C=A===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,p*C,0),d.push(0,C,0),m.push(.5,.5),g++;let V=g;for(let X=0;X<=s;X++){let B=X/s*l+o,W=Math.cos(B),$=Math.sin(B);w.x=S*$,w.y=p*C,w.z=S*W,u.push(w.x,w.y,w.z),d.push(0,C,0),U.x=W*.5+.5,U.y=$*.5*C+.5,m.push(U.x,U.y),g++}for(let X=0;X<s;X++){let me=O+X,B=V+X;A===!0?h.push(B,B+1,me):h.push(B+1,B,me),E+=3}c.addGroup(f,E,A===!0?1:2),f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class i extends on{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},No=class i extends Zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let _=new I,A=new I,O=new I;for(let U=0;U<t.length;U+=3)m(t[U+0],_),m(t[U+1],A),m(t[U+2],O),l(_,A,O,b)}function l(b,_,A,O){let U=O+1,w=[];for(let E=0;E<=U;E++){w[E]=[];let S=b.clone().lerp(A,E/U),C=_.clone().lerp(A,E/U),V=U-E;for(let X=0;X<=V;X++)X===0&&E===U?w[E][X]=S:w[E][X]=S.clone().lerp(C,X/V)}for(let E=0;E<U;E++)for(let S=0;S<2*(U-E)-1;S++){let C=Math.floor(S/2);S%2===0?(d(w[E][C+1]),d(w[E+1][C]),d(w[E][C])):(d(w[E][C+1]),d(w[E+1][C+1]),d(w[E+1][C]))}}function c(b){let _=new I;for(let A=0;A<r.length;A+=3)_.x=r[A+0],_.y=r[A+1],_.z=r[A+2],_.normalize().multiplyScalar(b),r[A+0]=_.x,r[A+1]=_.y,r[A+2]=_.z}function h(){let b=new I;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let A=p(b)/2/Math.PI+.5,O=f(b)/Math.PI+.5;a.push(A,1-O)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let _=a[b+0],A=a[b+2],O=a[b+4],U=Math.max(_,A,O),w=Math.min(_,A,O);U>.9&&w<.1&&(_<.2&&(a[b+0]+=1),A<.2&&(a[b+2]+=1),O<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function m(b,_){let A=b*3;_.x=e[A+0],_.y=e[A+1],_.z=e[A+2]}function g(){let b=new I,_=new I,A=new I,O=new I,U=new _e,w=new _e,E=new _e;for(let S=0,C=0;S<r.length;S+=9,C+=6){b.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),A.set(r[S+6],r[S+7],r[S+8]),U.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),O.copy(b).add(_).add(A).divideScalar(3);let V=p(O);x(U,C+0,b,V),x(w,C+2,_,V),x(E,C+4,A,V)}}function x(b,_,A,O){O<0&&b.x===1&&(a[_]=b.x-1),A.x===0&&A.z===0&&(a[_]=O/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Oo=class i extends No{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ja=new I,eo=new I,Kl=new I,to=new Xi,Fo=class extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ro*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:p,c:f}=to;if(x.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),to.getNormal(Kl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let _=(b+1)%3,A=u[b],O=u[_],U=to[h[b]],w=to[h[_]],E=`${A}_${O}`,S=`${O}_${A}`;S in d&&d[S]?(Kl.dot(d[S].normal)<=r&&(m.push(U.x,U.y,U.z),m.push(w.x,w.y,w.z)),d[S]=null):E in d||(d[E]={index0:c[b],index1:c[_],normal:Kl.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:p}=d[g];ja.fromBufferAttribute(o,x),eo.fromBufferAttribute(o,p),m.push(ja.x,ja.y,ja.z),m.push(eo.x,eo.y,eo.z)}this.setAttribute("position",new St(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Li=class extends mr{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new mr().fromJSON(s))}return this}},lx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,m;if(n&&(r=fx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return $r(r,a,t,o,l,m,0),a}};function Nd(i,e,t,n,s){let r,a;if(s===bx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=ad(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=ad(r,i[r],i[r+1],a);return a&&Yo(a,a.next)&&(Qr(a),a=a.next),a}function xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||en(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,s,r,a){if(!i)return;!a&&r&&xx(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?hx(i,n,s,r):cx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ux(xs(i),e,t),$r(i,e,t,n,s,r,2)):a===2&&dx(i,e,t,n,s,r):$r(xs(i),e,t,n,s,r,1);break}}}function cx(i){let e=i.prev,t=i,n=i.next;if(en(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&nr(s,o,r,l,a,c,g.x,g.y)&&en(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(en(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=Uc(m,g,e,t,n),b=Uc(x,p,e,t,n),_=i.prevZ,A=i.nextZ;for(;_&&_.z>=f&&A&&A.z<=b;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&nr(o,h,l,u,c,d,_.x,_.y)&&en(_.prev,_,_.next)>=0||(_=_.prevZ,A.x>=m&&A.x<=x&&A.y>=g&&A.y<=p&&A!==s&&A!==a&&nr(o,h,l,u,c,d,A.x,A.y)&&en(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&nr(o,h,l,u,c,d,_.x,_.y)&&en(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;A&&A.z<=b;){if(A.x>=m&&A.x<=x&&A.y>=g&&A.y<=p&&A!==s&&A!==a&&nr(o,h,l,u,c,d,A.x,A.y)&&en(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function ux(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Yo(s,r)&&Od(s,n,n.next,r)&&Kr(s,r)&&Kr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qr(n),Qr(n.next),n=i=r),n=n.next}while(n!==i);return xs(n)}function dx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mx(a,o)){let l=Fd(a,o);a=xs(a,a.next),l=xs(l,l.next),$r(a,e,t,n,s,r,0),$r(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function fx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Nd(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(vx(c));for(s.sort(px),r=0;r<s.length;r++)t=mx(s[r],t);return t}function px(i,e){return i.x-e.x}function mx(i,e){let t=gx(i,e);if(!t)return e;let n=Fd(t,i);return xs(n,n.next),xs(t,t.next)}function gx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&nr(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Kr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&_x(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function _x(i,e){return en(i.prev,i,e.prev)<0&&en(e.next,i,i.next)<0}function xx(i,e,t,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yx(s)}function yx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Uc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Mx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ex(i,e)&&(Kr(i,e)&&Kr(e,i)&&Sx(i,e)&&(en(i.prev,i,e.prev)||en(i,e.prev,e))||Yo(i,e)&&en(i.prev,i,i.next)>0&&en(e.prev,e,e.next)>0)}function en(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Yo(i,e){return i.x===e.x&&i.y===e.y}function Od(i,e,t,n){let s=io(en(i,e,t)),r=io(en(i,e,n)),a=io(en(t,n,i)),o=io(en(t,n,e));return!!(s!==r&&a!==o||s===0&&no(i,t,e)||r===0&&no(i,n,e)||a===0&&no(t,i,n)||o===0&&no(t,e,n))}function no(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function io(i){return i>0?1:i<0?-1:0}function Ex(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Od(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return en(i.prev,i,i.next)<0?en(i,e,i.next)>=0&&en(i,i.prev,e)>=0:en(i,e,i.prev)<0||en(i,i.next,e)<0}function Sx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fd(i,e){let t=new Dc(i.i,i.x,i.y),n=new Dc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ad(i,e,t,n){let s=new Dc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ji=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];od(e),ld(n,e);let a=e.length;t.forEach(od);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ld(n,t[l]);let o=lx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function od(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ld(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var jr=class i extends Zt{constructor(e=new Li([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:wx,_,A=!1,O,U,w,E;f&&(_=f.getSpacedPoints(h),A=!0,d=!1,O=f.computeFrenetFrames(h,!1),U=new I,w=new I,E=new I),d||(p=0,m=0,g=0,x=0);let S=o.extractPoints(c),C=S.shape,V=S.holes;if(!Ji.isClockWise(C)){C=C.reverse();for(let D=0,ve=V.length;D<ve;D++){let ne=V[D];Ji.isClockWise(ne)&&(V[D]=ne.reverse())}}let me=Ji.triangulateShape(C,V),B=C;for(let D=0,ve=V.length;D<ve;D++){let ne=V[D];C=C.concat(ne)}function W(D,ve,ne){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ve,ne)}let $=C.length,ee=me.length;function se(D,ve,ne){let xe,te,we,N=D.x-ve.x,T=D.y-ve.y,M=ne.x-D.x,v=ne.y-D.y,G=N*N+T*T,ie=N*v-T*M;if(Math.abs(ie)>Number.EPSILON){let ce=Math.sqrt(G),Fe=Math.sqrt(M*M+v*v),Ae=ve.x-T/ce,Ie=ve.y+N/ce,Ke=ne.x-v/Fe,ut=ne.y+M/Fe,de=((Ke-Ae)*v-(ut-Ie)*M)/(N*v-T*M);xe=Ae+N*de-D.x,te=Ie+T*de-D.y;let Tt=xe*xe+te*te;if(Tt<=2)return new _e(xe,te);we=Math.sqrt(Tt/2)}else{let ce=!1;N>Number.EPSILON?M>Number.EPSILON&&(ce=!0):N<-Number.EPSILON?M<-Number.EPSILON&&(ce=!0):Math.sign(T)===Math.sign(v)&&(ce=!0),ce?(xe=-T,te=N,we=Math.sqrt(G)):(xe=N,te=T,we=Math.sqrt(G/2))}return new _e(xe/we,te/we)}let j=[];for(let D=0,ve=B.length,ne=ve-1,xe=D+1;D<ve;D++,ne++,xe++)ne===ve&&(ne=0),xe===ve&&(xe=0),j[D]=se(B[D],B[ne],B[xe]);let he=[],fe,Re=j.concat();for(let D=0,ve=V.length;D<ve;D++){let ne=V[D];fe=[];for(let xe=0,te=ne.length,we=te-1,N=xe+1;xe<te;xe++,we++,N++)we===te&&(we=0),N===te&&(N=0),fe[xe]=se(ne[xe],ne[we],ne[N]);he.push(fe),Re=Re.concat(fe)}for(let D=0;D<p;D++){let ve=D/p,ne=m*Math.cos(ve*Math.PI/2),xe=g*Math.sin(ve*Math.PI/2)+x;for(let te=0,we=B.length;te<we;te++){let N=W(B[te],j[te],xe);Ue(N.x,N.y,-ne)}for(let te=0,we=V.length;te<we;te++){let N=V[te];fe=he[te];for(let T=0,M=N.length;T<M;T++){let v=W(N[T],fe[T],xe);Ue(v.x,v.y,-ne)}}}let K=g+x;for(let D=0;D<$;D++){let ve=d?W(C[D],Re[D],K):C[D];A?(w.copy(O.normals[0]).multiplyScalar(ve.x),U.copy(O.binormals[0]).multiplyScalar(ve.y),E.copy(_[0]).add(w).add(U),Ue(E.x,E.y,E.z)):Ue(ve.x,ve.y,0)}for(let D=1;D<=h;D++)for(let ve=0;ve<$;ve++){let ne=d?W(C[ve],Re[ve],K):C[ve];A?(w.copy(O.normals[D]).multiplyScalar(ne.x),U.copy(O.binormals[D]).multiplyScalar(ne.y),E.copy(_[D]).add(w).add(U),Ue(E.x,E.y,E.z)):Ue(ne.x,ne.y,u/h*D)}for(let D=p-1;D>=0;D--){let ve=D/p,ne=m*Math.cos(ve*Math.PI/2),xe=g*Math.sin(ve*Math.PI/2)+x;for(let te=0,we=B.length;te<we;te++){let N=W(B[te],j[te],xe);Ue(N.x,N.y,u+ne)}for(let te=0,we=V.length;te<we;te++){let N=V[te];fe=he[te];for(let T=0,M=N.length;T<M;T++){let v=W(N[T],fe[T],xe);A?Ue(v.x,v.y+_[h-1].y,_[h-1].x+ne):Ue(v.x,v.y,u+ne)}}}ue(),Pe();function ue(){let D=s.length/3;if(d){let ve=0,ne=$*ve;for(let xe=0;xe<ee;xe++){let te=me[xe];Ve(te[2]+ne,te[1]+ne,te[0]+ne)}ve=h+p*2,ne=$*ve;for(let xe=0;xe<ee;xe++){let te=me[xe];Ve(te[0]+ne,te[1]+ne,te[2]+ne)}}else{for(let ve=0;ve<ee;ve++){let ne=me[ve];Ve(ne[2],ne[1],ne[0])}for(let ve=0;ve<ee;ve++){let ne=me[ve];Ve(ne[0]+$*h,ne[1]+$*h,ne[2]+$*h)}}n.addGroup(D,s.length/3-D,0)}function Pe(){let D=s.length/3,ve=0;Be(B,ve),ve+=B.length;for(let ne=0,xe=V.length;ne<xe;ne++){let te=V[ne];Be(te,ve),ve+=te.length}n.addGroup(D,s.length/3-D,1)}function Be(D,ve){let ne=D.length;for(;--ne>=0;){let xe=ne,te=ne-1;te<0&&(te=D.length-1);for(let we=0,N=h+p*2;we<N;we++){let T=$*we,M=$*(we+1),v=ve+xe+T,G=ve+te+T,ie=ve+te+M,ce=ve+xe+M;ct(v,G,ie,ce)}}}function Ue(D,ve,ne){l.push(D),l.push(ve),l.push(ne)}function Ve(D,ve,ne){He(D),He(ve),He(ne);let xe=s.length/3,te=b.generateTopUV(n,s,xe-3,xe-2,xe-1);ht(te[0]),ht(te[1]),ht(te[2])}function ct(D,ve,ne,xe){He(D),He(ve),He(xe),He(ve),He(ne),He(xe);let te=s.length/3,we=b.generateSideWallUV(n,s,te-6,te-3,te-2,te-1);ht(we[0]),ht(we[1]),ht(we[3]),ht(we[1]),ht(we[2]),ht(we[3])}function He(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function ht(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ic[s.type]().fromJSON(s)),new i(n,e.options)}},wx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-u),new _e(d,1-g),new _e(x,1-f)]:[new _e(o,1-l),new _e(h,1-u),new _e(m,1-g),new _e(p,1-f)]}};function Tx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ea=class i extends No{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ta=class i extends Zt{constructor(e=new Li([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(r,3)),this.setAttribute("uv",new St(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),m=d.shape,g=d.holes;Ji.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){let b=g[p];Ji.isClockWise(b)===!0&&(g[p]=b.reverse())}let x=Ji.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){let b=g[p];m=m.concat(b)}for(let p=0,f=m.length;p<f;p++){let b=m[p];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let p=0,f=x.length;p<f;p++){let b=x[p],_=b[0]+u,A=b[1]+u,O=b[2]+u;n.push(_,A,O),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ax(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Ax(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var hi=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,m=[],g=[],x=[],p=[];for(let f=0;f<=n;f++){let b=[],_=f/n,A=0;f===0&&a===0?A=.5/t:f===n&&l===Math.PI&&(A=-.5/t);for(let O=0;O<=t;O++){let U=O/t;u.x=-e*Math.cos(s+U*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+U*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(U+A,1-_),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){let _=h[f][b+1],A=h[f][b],O=h[f+1][b],U=h[f+1][b+1];(f!==0||a>0)&&m.push(_,A,U),(f!==n-1||l<Math.PI)&&m.push(A,O,U)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bo=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let x=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,b=(s+1)*m+g;a.push(x,p,b),a.push(p,f,b)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zo=class extends li{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var dn=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ho=class extends ji{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function so(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends gr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:r=e,o=2*t-n;break;case ou:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=e,l=2*n-t;break;case ou:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,f=-d*p+2*d*x-d*g,b=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-m)*p+(1.5+m)*x+.5*g,A=m*p-m*x;for(let O=0;O!==o;++O)r[O]=f*a[h+O]+b*a[c+O]+_*a[l+O]+A*a[u+O];return r}},Oc=class extends gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Fc=class extends gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ui=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return El}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Rx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=lo;var ys=class extends ui{};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=oo;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends ui{};Bc.prototype.ValueTypeName="color";var zc=class extends ui{};zc.prototype.ValueTypeName="number";var Hc=class extends gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qi.slerpFlat(r,0,a,c-o,a,c,l);return r}},na=class extends ui{InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.DefaultInterpolation=lo;na.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends ui{};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=oo;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends ui{};kc.prototype.ValueTypeName="vector";var Gc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Cx=new Gc,Vc=class{constructor(e){this.manager=e!==void 0?e:Cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ia=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ko=class extends ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ql=new qt,cd=new I,hd=new I,Go=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ud=new qt,Nr=new I,jl=new I,Wc=class extends Go{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nr),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),s.makeTranslation(-Nr.x,-Nr.y,-Nr.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}},es=class extends ia{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xc=class extends Go{constructor(){super(new bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jc="\\[\\]\\.:\\/",Px=new RegExp("["+jc+"]","g"),eh="[^"+jc+"]",Ix="[^"+jc.replace("\\.","")+"]",Lx=/((?:WC+[\/:])*)/.source.replace("WC",eh),Ux=/(WCOD+)?/.source.replace("WCOD",Ix),Dx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),Nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),Ox=new RegExp("^"+Lx+Ux+Dx+Nx+"$"),Fx=["material","materials","bones","map"],qc=class{constructor(e,t,n){let s=n||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){let t=Ox.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=qc;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Zo=class extends dr{constructor(e=null){super();let t=new vn;t.deleteAttribute("uv");let n=new dn({side:yn}),s=new dn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new es(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ye(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new ye(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ye(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ye(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new ye(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new ye(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let m=new ye(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new ye(t,xr(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new ye(t,xr(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let p=new ye(t,xr(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let f=new ye(t,xr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let b=new ye(t,xr(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let _=new ye(t,xr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xr(i){let e=new kn;return e.color.setScalar(i),e}var rn=(i,e,t)=>Math.max(e,Math.min(t,i)),Bd=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,zx=i=>i*i*(3-2*i),sa=i=>1-Math.pow(1-i,3),th=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),zd=-1.7,Hx=(i,e,t)=>new I(i+zd,e,t);function pi(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new pr(s);return r.colorSpace=un,r.anisotropy=4,n&&(r.wrapS=r.wrapT=lr),r}var Hd={roof:"hip",cladding:"weatherboard",wall:"#ece7da",roofColor:"#8d9ea5",joinery:"#161e1b",door:"#c23434",garage:!0,chimney:!0,solar:!1,deck:!1,shape:"single",windows:"standard",veranda:!1,bay:!1,fence:"none",detail:"none",tod:"auto"},kx=[{key:"frame",title:"Framing",text:"Treated timber framing goes up first. With the roof on, the house is weathertight before any work starts inside."},{key:"lining",title:"Insulation and lining",text:"Insulation goes into the walls and ceiling, then plasterboard is fixed and stopped, ready for paint."},{key:"floor",title:"Flooring",text:"Pale oak flooring is laid through the open-plan living area and the skirtings are fitted."},{key:"kitchen",title:"Kitchen and joinery",text:"The kitchen goes in with a stone island bench, handleless cabinetry and an integrated fridge."},{key:"furnished",title:"Furnished and lit",text:"Lights, furniture and plants finish the home. The open-plan living area flows to the deck and the garden."}],kd=[{key:"arrive",title:"Arrive at the section",text:"Approach from the street. The garage is on the left and the covered entry is on the right."},{key:"front",title:"The front elevation",text:null},{key:"roof",title:"Roof and cladding",text:null},{key:"garden",title:"Native planting",text:"P\u014Dhutukawa, ponga tree ferns and flax frame the house and soften the boundary."},{key:"back",title:"Around the back",text:null},{key:"doll",title:"Roof off: the floor plan",text:"Lift the roof to see the layout: garage, living, kitchen and dining, two bedrooms and the entry."},{key:"door",title:"The front door",text:"Under the covered entry. The door swings open as we step inside."},{key:"living",title:"Entry and living room",text:"The living room opens to the front window and gets the afternoon light."},{key:"kitchen",title:"Kitchen and dining",text:"An island bench, a dining table and a window onto the back garden."},{key:"bed",title:"Bedroom",text:"A quiet bedroom at the back of the house, away from the street."},{key:"end",title:"Golden hour",text:"Back outside as the light drops. Every design choice can still be changed."}];function Gx(i,e={}){let t=matchMedia("(prefers-reduced-motion: reduce)").matches,n;try{n=new Wr({antialias:!0,alpha:!!e.cutout,preserveDrawingBuffer:!!e.cutout,powerPreference:"high-performance"})}catch{return null}let s=!!e.hero,r=!!e.cutout;r&&n.setClearColor(0,0),n.setPixelRatio(Math.min(window.devicePixelRatio||1,s&&window.innerWidth<900?1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=Yc,n.outputColorSpace=un,n.toneMapping=Zc,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;cursor:"+(s?"default":"grab"),i.appendChild(n.domElement);let a=new dr,o=new Rn(46,1,.3,500),l=[],c=new Set,h=new ri(new I(0,-1,0),100),u={top:{value:new qe},mid:{value:new qe},bot:{value:new qe},sd:{value:new I(0,1,0)},sc:{value:new qe},t:{value:0}},d=new ye(new hi(300,32,16),new ci({side:yn,depthWrite:!1,uniforms:u,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 top;uniform vec3 mid;uniform vec3 bot;uniform vec3 sd;uniform vec3 sc;uniform float t;varying vec3 vP;float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1.,0.)),f.x),mix(h21(i+vec2(0.,1.)),h21(i+vec2(1.,1.)),f.x),f.y);}float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n2(p);p=p*2.03+17.;a*=.5;}return s;}void main(){float h=clamp(vP.y,-.1,1.);vec3 c=mix(bot,mid,smoothstep(0.,.35,h));c=mix(c,top,smoothstep(.3,1.,h));float sdot=max(dot(normalize(vP),sd),0.);c+=sc*(pow(sdot,60.)*.6+pow(sdot,7.)*.16);if(vP.y>0.){vec2 uv=vP.xz/(vP.y+.2)*.8+vec2(t*.006,t*.002);float n=fbm(uv*1.5);float m=smoothstep(.48,.8,n)*smoothstep(.0,.2,vP.y);float lum=dot(mid,vec3(.3,.6,.1));float k=smoothstep(.06,.5,lum);vec3 cc=mix(mid,vec3(1.),.82*k)*(.88+.4*pow(sdot,3.));cc=mix(cc,sc*1.2,pow(sdot,8.)*.35*k);float under=smoothstep(.62,.48,n);cc*=.9+.1*under;c=mix(c,cc,m*.88);}gl_FragColor=vec4(pow(c,vec3(.4545)),1.);}"}));a.add(d),a.fog=new To(2837056,r?1e5:60,r?2e5:210);{let y=new ur(n);a.environment=y.fromScene(new Zo(n),.04).texture,a.environmentIntensity=.28}let m=new ko(11127232,2308143,.85);a.add(m);let g=new Vo(14674404,1.5);g.castShadow=!0,g.shadow.mapSize.set(s?2048:3072,s?2048:3072),g.shadow.radius=3;let x=g.shadow.camera;x.left=-24,x.right=24,x.top=24,x.bottom=-24,x.near=5,x.far=100,g.shadow.bias=-4e-4,g.shadow.normalBias=.04,a.add(g);let p=new es(16762234,0,16,1.6);p.position.set(.5,1.6,1.2),a.add(p);let f=new es(16769712,0,14,1.4);f.position.set(1,2.3,0),a.add(f);let b=new es(16769712,0,12,1.4);b.position.set(5.5,2.3,-1.5),a.add(b);let _={dusk:{top:726803,mid:1451807,bot:2837056,fog:2837056,fogFar:210,hemi:11127232,hemiG:2308143,hi:.85,sun:14674404,si:1.5,sp:[-18,30,22],exp:1.05,li:0},day:{top:5214159,mid:10275817,bot:14938613,fog:13624298,fogFar:240,hemi:14150911,hemiG:6978138,hi:1.05,sun:16774366,si:2.6,sp:[-14,34,24],exp:1,li:0},golden:{top:2438506,mid:15176298,bot:16237946,fog:15315578,fogFar:200,hemi:16767400,hemiG:6969922,hi:1.45,sun:16756838,si:2.6,sp:[-24,16,20],exp:1.45,li:1},night:{top:329746,mid:857648,bot:1911370,fog:1055283,fogFar:120,hemi:5926560,hemiG:1712688,hi:.55,sun:9085695,si:.55,sp:[-16,26,18],exp:1.15,li:1}},A={top:new qe,mid:new qe,bot:new qe,fog:new qe,hemi:new qe,hemiG:new qe,sun:new qe,fogFar:210,hi:.85,si:1.5,exp:1.05,li:0,sp:new I(-18,30,22)},O=new qe;function U(y,L){let P=_.dusk,H=_[y],z=(Z,Q)=>O.set(P[Z]).lerp(new qe(H[Q]),L).clone();return{top:z("top","top"),mid:z("mid","mid"),bot:z("bot","bot"),fog:z("fog","fog"),hemi:z("hemi","hemi"),hemiG:z("hemiG","hemiG"),sun:z("sun","sun"),fogFar:P.fogFar+(H.fogFar-P.fogFar)*L,hi:P.hi+(H.hi-P.hi)*L,si:P.si+(H.si-P.si)*L,exp:P.exp+(H.exp-P.exp)*L,li:P.li+(H.li-P.li)*L,sp:new I(...P.sp).lerp(new I(...H.sp),L)}}let w=(y,L={})=>new dn(Object.assign({color:y,roughness:.85,metalness:0},L)),E=(y,L,P,H,z=0,Z=0,Q=0,pe=!0)=>{let ge=new ye(new vn(y,L,P),H);return ge.position.set(z,Z,Q),ge.castShadow=pe,ge.receiveShadow=!0,ge},S=(y,L,P,H)=>(y.position.set(L,P,H),y),C=(...y)=>{let L=new Ze;return y.forEach(P=>L.add(P)),L};function V(y){y.traverse(L=>{L.material&&(L.material=Array.isArray(L.material)?L.material.map(P=>P.clone()):L.material.clone(),(Array.isArray(L.material)?L.material:[L.material]).forEach(P=>{P.userData.op=P.opacity,c.add(P)}))})}function X(y,{start:L,dur:P=1,kind:H="fade",end:z=null,fn:Z=null,add:Q=!0,parent:pe=a,tag:ge=null}){Q&&pe.add(y);let $e={o:y,start:L,dur:P,kind:H,end:z,fn:Z,tag:ge,sx:y.scale.x,sy:y.scale.y,sz:y.scale.z,py:y.position.y};return(H==="fade"||H==="drop")&&V(y),l.push($e),$e}function me(y,L){y.traverse(P=>{P.material&&(Array.isArray(P.material)?P.material:[P.material]).forEach(H=>{H.transparent=!0,H.opacity=(H.userData.op??1)*L,H.depthWrite=L>.98})})}function B(y){let L=y.attributes.position,P=y.attributes.normal,H=new Float32Array(L.count*2);for(let z=0;z<L.count;z++){let Z=Math.abs(P.getX(z)),Q=Math.abs(P.getY(z)),pe=Math.abs(P.getZ(z)),ge,$e;Q>.6?(ge=L.getX(z),$e=L.getZ(z)):Z>pe?(ge=L.getZ(z),$e=L.getY(z)):(ge=L.getX(z),$e=L.getY(z)),H[z*2]=ge,H[z*2+1]=$e}return y.setAttribute("uv",new Pn(H,2)),y}let W=pi(1024,1024,(y,L,P)=>{y.fillStyle="#4c7a46",y.fillRect(0,0,L,P);for(let H=0;H<70;H++){let z=Math.random()*L,Z=Math.random()*P,Q=60+Math.random()*160,pe=y.createRadialGradient(z,Z,0,z,Z,Q),ge=Math.random()<.5?"160,170,80":Math.random()<.5?"30,70,35":"90,140,70";pe.addColorStop(0,"rgba("+ge+",.28)"),pe.addColorStop(1,"rgba("+ge+",0)"),y.fillStyle=pe,y.fillRect(z-Q,Z-Q,Q*2,Q*2)}for(let H=0;H<26e3;H++){let z=Math.random();y.fillStyle=z<.3?"rgba(170,205,110,.16)":z<.6?"rgba(15,45,22,.2)":z<.85?"rgba(110,150,70,.14)":"rgba(255,255,230,.05)",y.fillRect(Math.random()*L,Math.random()*P,1.1,3+Math.random()*7)}for(let H=0;H<10;H++)y.fillStyle="rgba(255,255,255,.025)",y.fillRect(0,H*(P/10),L,P/20);for(let H=0;H<260;H++)y.fillStyle=Math.random()<.6?"rgba(245,240,200,.55)":"rgba(255,255,255,.45)",y.beginPath(),y.arc(Math.random()*L,Math.random()*P,1+Math.random()*1.2,0,6.28),y.fill()});W.repeat.set(13,13),W.anisotropy=8;let $=new ye(new Jr(95,64),new dn({map:W,bumpMap:W,bumpScale:.6,roughness:1,envMapIntensity:.2}));$.rotation.x=-Math.PI/2,$.receiveShadow=!0,a.add($);let ee=new Ze;if(a.add(ee),r){$.visible=!1,ee.visible=!1,d.visible=!1;let y=new ye(new In(90,90),new zo({opacity:.42}));y.rotation.x=-Math.PI/2,y.position.y=.03,y.receiveShadow=!0,a.add(y)}let se=pi(128,128,(y,L,P)=>{y.fillStyle="#d9c79e",y.fillRect(0,0,L,P);for(let H=0;H<1400;H++)y.fillStyle=Math.random()<.5?"rgba(120,95,55,.12)":"rgba(255,255,255,.16)",y.fillRect(Math.random()*L,Math.random()*P,2,2)});se.repeat.set(30,3);let j=new ye(new In(260,11),new dn({map:se,roughness:1}));j.rotation.x=-Math.PI/2,j.position.set(0,.04,-30.5),j.receiveShadow=!0,ee.add(j);let he=new ye(new In(260,3.5),new dn({color:8227669,roughness:1}));he.rotation.x=-Math.PI/2,he.position.set(0,.05,-25),ee.add(he);let fe=(()=>{let L=document.createElement("canvas");L.width=L.height=256;let P=L.getContext("2d"),H=P.createImageData(256,256),z=new Float32Array(256*256);for(let Q=0;Q<256;Q++)for(let pe=0;pe<256;pe++){let ge=pe/256*6.2832,$e=Q/256*6.2832;z[Q*256+pe]=Math.sin(ge*3+Math.sin($e*2)*1.3)*.5+Math.sin($e*5+ge*2)*.3+Math.sin(ge*9+$e*7)*.15+Math.sin(ge*14-$e*11)*.08}for(let Q=0;Q<256;Q++)for(let pe=0;pe<256;pe++){let ge=z[Q*256+(pe+1)%256]-z[Q*256+(pe+256-1)%256],$e=z[(Q+1)%256*256+pe]-z[(Q+256-1)%256*256+pe],ze=-ge*1.7,Ye=-$e*1.7,Oe=Math.hypot(ze,Ye,1),et=(Q*256+pe)*4;H.data[et]=(ze/Oe*.5+.5)*255,H.data[et+1]=(Ye/Oe*.5+.5)*255,H.data[et+2]=(1/Oe*.5+.5)*255,H.data[et+3]=255}P.putImageData(H,0,0);let Z=new pr(L);return Z.wrapS=Z.wrapT=lr,Z.repeat.set(60,30),Z.anisotropy=8,Z})(),Re=new dn({color:2785164,roughness:.16,metalness:.3,normalMap:fe,normalScale:new _e(.45,.45),envMapIntensity:1.5}),K=new ye(new In(600,200),Re);K.rotation.x=-Math.PI/2,K.position.set(0,.07,-136),ee.add(K);let ue=[];for(let y=0;y<3;y++){let L=new ye(new In(260,.5),new kn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1}));L.rotation.x=-Math.PI/2,L.position.set(0,.09,-36),ee.add(L),ue.push(L)}let Pe=w(1784368,{roughness:1});[[-90,-150,50,16],[10,-175,70,14],[110,-150,50,13],[-170,-120,50,14],[180,-100,44,12]].forEach(([y,L,P,H])=>{let z=new ye(new hi(P,24,12),Pe);z.scale.y=H/P,z.position.set(y,0,L),ee.add(z)});let Be=new ye(new Ii(70,22,48,1,!0),w(2775626,{roughness:1}));Be.position.set(-64,11,-165),ee.add(Be);let Ue=pi(64,64,(y,L,P)=>{y.fillStyle="#fff",y.fillRect(0,0,L,P),y.fillStyle="#35505c",y.fillRect(7,9,50,40),y.fillStyle="rgba(255,255,255,.28)",y.fillRect(7,9,50,8),y.fillStyle="rgba(0,0,0,.25)",y.fillRect(31,9,2,40)});Ue.repeat.set(1/1.7,1/2.3),Ue.anisotropy=8;let Ve=new Ze,ct=w(9085613,{roughness:.45,metalness:.2,fog:!1,map:Ue}),He=w(7243668,{roughness:.45,metalness:.2,fog:!1,map:Ue});(()=>{let y=[],L=(P=>()=>(P=P*16807%2147483647)/2147483647)(11);for(let P=0;P<3;P++)for(let H=-66+P*3;H<70;H+=4.4+L()*2.2){let z=1-Math.min(1,Math.abs(H-4)/64),Z=7+L()*10+z*(P===0?19:P===1?12:6);y.push([H+L()*1.4,Z,3.6+L()*3.4,3.6+L()*3,P])}return y})().forEach(([y,L,P,H,z],Z)=>{let Q=E(P,L,H,Z%3===0?He:ct,y,L/2,-z*6.5,!1);if(B(Q.geometry),Ve.add(Q),L>34)for(let pe=0;pe<2;pe++)Ve.add(E(P*.92,.5,H*1.02,w(12044496,{fog:!1}),y,L*(.45+.3*pe),-z*6.5,!1));Z%5===0&&Ve.add(E(P*.55,2.2,H*.55,w(5268075,{fog:!1}),y,L+1.1,-z*6.5,!1))}),Ve.add(E(150,2.4,40,w(8096386,{roughness:1,fog:!1}),2,1.2,-6,!1));let D=new Ze,ve=w(13227740,{roughness:.5,metalness:.2,fog:!1});D.add(S(new ye(new on(.9,1.8,96,12),ve),0,48,0),S(new ye(new on(6.4,4.6,8,20),ve),0,82,0),S(new ye(new on(4.4,5.4,2.2,20),w(1780272)),0,88,0),S(new ye(new on(.14,.5,34,6),ve),0,110,0)),D.add(S(new ye(new hi(.9,10,10),w(14701131,{emissive:14701131,emissiveIntensity:.8})),0,128,0)),D.scale.setScalar(.56),D.position.set(8,0,-3),Ve.add(D),Ve.scale.setScalar(.82),Ve.position.set(12,0,-122),ee.add(Ve);{let y=new _s(new on(.07,.07,1,5),w(15331056,{roughness:.6}),110),L=new _s(new vn(2.6,.5,.9),w(16054004,{roughness:.5}),110),P=new sn,H=5,z=()=>(H=H*16807%2147483647)/2147483647;for(let Q=0;Q<110;Q++){let pe=-78+Q%22*2.4+z()*.5,ge=-66+Math.floor(Q/22)*3.2+z()*.6,$e=5+z()*4;P.position.set(pe,$e/2+.3,ge),P.rotation.set(0,0,0),P.scale.set(1,$e,1),P.updateMatrix(),y.setMatrixAt(Q,P.matrix),P.position.set(pe,.3,ge),P.rotation.y=(z()-.5)*.15,P.scale.set(1,1,1),P.updateMatrix(),L.setMatrixAt(Q,P.matrix)}ee.add(y,L);let Z=E(46,.3,1.2,w(9080716),-54,.35,-69.5,!1);ee.add(Z);for(let Q=0;Q<3;Q++){let pe=new Ze;pe.add(E(.5,9,.5,w(14263361,{fog:!1}),0,4.5,0,!1),E(9,.35,.35,w(14263361,{fog:!1}),2.5,9,0,!1)),pe.position.set(52+Q*9,2.4,-108-Q*2),pe.rotation.y=.3*Q,Ve.add(pe)}}function ne(y,L,P,H){let z=new Ze;z.add(E(3.2*P,.5*P,1.1*P,w(15659754),0,.25*P,0),S(new ye(new on(.06*P,.06*P,5*P,6),w(13227212)),0,3*P,0));let Z=new ye(new Zt,new dn({color:16777215,side:Cn,roughness:.8}));return Z.geometry.setAttribute("position",new St([0,.6*P,0,0,5.3*P,0,1.8*P,.7*P,0],3)),Z.geometry.computeVertexNormals(),z.add(Z),z.position.set(y,.1,L),z.rotation.y=H,z.userData.b=L,ee.add(z),z}let xe=[ne(-22,-58,1.4,.3),ne(26,-72,1.8,-.5),ne(-60,-96,2.2,.1),ne(70,-100,2.4,.7)],te=new Ze;for(let y=0;y<14;y++)te.add(E(2.4,.12,.55,w(8084026),0,.45,-y*.62));for(let y=0;y<8;y++)te.add(E(.14,1.5,.14,w(4930350),-1.1,0,-y*1.1),E(.14,1.5,.14,w(4930350),1.1,0,-y*1.1));te.position.set(18,.05,-31),ee.add(te),[[-14,-28],[6,-27.5],[34,-28.5],[-40,-28]].forEach(([y,L])=>{let P=new ye(new Oo(.9,0),w(5857373,{roughness:1}));P.position.set(y,.3,L),P.scale.y=.6,P.castShadow=!0,ee.add(P)});for(let y=0;y<26;y++){let L=-60+y*4.6+y%3,P=new ye(new Ii(.35,1.3,5),w(9083470,{roughness:1}));P.position.set(L,.65,-26.6+y*7%3*.4),ee.add(P)}let we=new Ze;we.position.x=zd,a.add(we);let N=.15,T=2.7,M=2.4,v={x0:0,x1:8.6,z0:-4.5,z1:4.5},G={x0:-5.2,x1:0,z0:-3,z1:3.2},ie={x0:-13,x1:15,z0:-9,z1:17},ce=new Ze;for(let y=0;y<7;y++){let L=[],P=6+y*5.2;for(let H=0;H<=64;H++){let z=H/64*Math.PI*2,Z=P*(1+.1*Math.sin(z*2+y)+.07*Math.sin(z*3+1.5));L.push(new I(Math.cos(z)*Z*1.25+1.5,.03,Math.sin(z)*Z*.95+4))}ce.add(new fr(new Zt().setFromPoints(L),new ji({color:10470062,transparent:!0,opacity:.45})))}X(ce,{start:0,dur:2.2,kind:"fade",end:11.5});let Fe=[[ie.x0,ie.z0],[ie.x1,ie.z0],[ie.x1,ie.z1],[ie.x0,ie.z1],[ie.x0,ie.z0]].map(([y,L])=>new I(y,.06,L)),Ae=new fr(new Zt().setFromPoints(Fe),new Ho({color:14701131,dashSize:.8,gapSize:.5}));Ae.computeLineDistances(),X(Ae,{start:2.2,dur:1.4,kind:"fade",end:14.6,parent:we}),[[ie.x0,ie.z0],[ie.x1,ie.z0],[ie.x1,ie.z1],[ie.x0,ie.z1]].forEach(([y,L],P)=>{let H=new Ze;H.add(E(.14,1.4,.14,w(14701131),0,.7,0));let z=new ye(new In(.7,.45),new kn({color:14701131,side:Cn}));z.position.set(.38,1.2,0),H.add(z),H.position.set(y,0,L),X(H,{start:1+P*.35,dur:.7,kind:"pop",end:14.6,parent:we})});let Ie=new Ze,Ke=w(13227212);for(let y=0;y<3;y++){let L=y/3*Math.PI*2,P=E(.06,1.7,.06,Ke,Math.cos(L)*.45,.82,Math.sin(L)*.45);P.rotation.z=Math.cos(L)*.3,P.rotation.x=-Math.sin(L)*.3,Ie.add(P)}Ie.add(E(.34,.3,.3,w(3885646),0,1.75,0),E(.08,.08,.5,w(14701131),0,1.92,.2));let ut=C(E(.38,.8,.26,w(15895592),0,1.15,0),E(.14,.8,.14,w(2765880),-.1,.4,0),E(.14,.8,.14,w(2765880),.1,.4,0),S(new ye(new hi(.2,12,12),w(14857356)),0,1.75,0),S(new ye(new hi(.22,12,8,0,Math.PI*2,0,Math.PI/2),w(15659754)),0,1.8,0));ut.position.set(1.4,0,-.4),Ie.add(ut),Ie.position.set(11,0,10),Ie.rotation.y=-.8,X(Ie,{start:1.4,dur:.9,kind:"grow",end:8.2,parent:we});let de=new Ze,Tt=new ji({color:15659754,transparent:!0,opacity:.7}),gt=(y,L,P,H,z)=>{let Z=new qr(new Fo(new vn(L-y,z,H-P)),Tt);return Z.position.set((y+L)/2,N+z/2,(P+H)/2),Z};de.add(gt(v.x0,v.x1,v.z0,v.z1,T),gt(G.x0,G.x1,G.z0,G.z1,M)),X(de,{start:4,dur:1.6,kind:"fade",end:9,parent:we});let at=pi(512,200,(y,L,P)=>{y.clearRect(0,0,L,P),y.strokeStyle="#e0524b",y.lineWidth=12,y.strokeRect(10,10,L-20,P-20),y.fillStyle="#e0524b",y.font='700 92px "IBM Plex Mono",monospace',y.textAlign="center",y.textBaseline="middle",y.fillText("APPROVED",L/2,P/2+4)},!1),We=new ye(new In(7.5,2.9),new kn({map:at,transparent:!0,side:Cn,depthWrite:!1}));We.position.set(3.6,7.2,6),We.rotation.z=.12,X(We,{start:6.4,dur:.8,kind:"pop",end:9.2,parent:we});let De=new Ze,ot=w(15906116,{roughness:.55}),Rt=w(2239277);De.add(E(3.4,.55,1.1,Rt,0,.3,.9),E(3.4,.55,1.1,Rt,0,.3,-.9),E(2.1,.7,2.2,ot,0,.95,0),E(1.1,1.1,1.4,ot,-.5,1.7,0),E(.9,.6,1.1,w(10338240,{roughness:.1}),-.5,1.85,.06));let Ft=new Ze;Ft.position.set(.5,1.4,0),Ft.add(E(3.2,.32,.32,ot,1.5,.7,0)),Ft.children[0].rotation.z=.55;let lt=new Ze;lt.position.set(2.9,1.8,0),lt.add(E(.28,2,.28,ot,.2,-.8,0)),lt.children[0].rotation.z=.4,lt.add(E(.7,.5,.9,w(13209382),.8,-1.8,0)),Ft.add(lt),De.add(Ft),De.position.set(-10,0,4),De.rotation.y=.4,X(De,{start:7,dur:.9,kind:"grow",end:10.6,parent:we,fn:y=>{Ft.rotation.z=Math.sin(y*1.6)*.2-.05,lt.rotation.z=Math.sin(y*1.6+1)*.3}}),X(E(15,.3,11.6,w(7035460,{roughness:1}),1.7,.05,0,!1),{start:7.4,dur:1.1,kind:"rise",parent:we});let Ee=E(14,.3,10.2,w(8030850),1.7,.14,0);Ee.geometry.translate(0,.15,0),Ee.position.y=0,X(Ee,{start:8.2,dur:1.1,kind:"rise",parent:we});let F=new vn(.05,1,.1),Te=[],Se=(y,L,P,H,z)=>{let Z=Math.hypot(P-y,H-L),Q=Math.max(2,Math.round(Z/.6));for(let pe=0;pe<=Q;pe++){let ge=pe/Q;Te.push({x:y+(P-y)*ge,z:L+(H-L)*ge,h:z,ry:Math.atan2(P-y,H-L)+Math.PI/2})}};Se(v.x0,v.z1,v.x1,v.z1,T),Se(v.x0,v.z0,v.x1,v.z0,T),Se(v.x0,v.z0,v.x0,v.z1,T),Se(v.x1,v.z0,v.x1,v.z1,T),Se(G.x0,G.z1,G.x1,G.z1,M),Se(G.x0,G.z0,G.x1,G.z0,M),Se(G.x0,G.z0,G.x0,G.z1,M);let Qe=new _s(F,w(14268285,{roughness:.7}),Te.length);Qe.castShadow=!0;let Xe=new sn;X(Qe,{start:9,dur:2,kind:"custom",end:13.2,parent:we,fn:(y,L)=>{Te.forEach((P,H)=>{let z=rn(L*1.6-H/Te.length*.6,0,1),Z=Math.max(.001,P.h*sa(z));Xe.position.set(P.x,N+Z/2,P.z),Xe.rotation.set(0,P.ry,0),Xe.scale.set(1,Z,1),Xe.updateMatrix(),Qe.setMatrixAt(H,Xe.matrix)}),Qe.instanceMatrix.needsUpdate=!0}});let Ct=w(14268285,{roughness:.7}),Bt=C();[[v,T],[G,M]].forEach(([y,L])=>{[N+.05,N+L-.05].forEach(P=>{Bt.add(E(y.x1-y.x0,.08,.1,Ct,(y.x0+y.x1)/2,P,y.z1),E(y.x1-y.x0,.08,.1,Ct,(y.x0+y.x1)/2,P,y.z0),E(.1,.08,y.z1-y.z0,Ct,y.x0,P,(y.z0+y.z1)/2),E(.1,.08,y.z1-y.z0,Ct,y.x1,P,(y.z0+y.z1)/2))})}),X(Bt,{start:9.9,dur:1,kind:"fade",parent:we,end:13.2});let an=new Ze;{let y=(L,P,H,z,Z,Q,pe)=>{let ge=Z+Q,$e=L+pe,ze=P-pe,Ye=(H+z)/2,Oe=(et,ft)=>{let pt=new I().subVectors(ft,et),Jt=new ye(new vn(.07,.1,pt.length()),Ct);Jt.position.copy(et).addScaledVector(pt,.5),Jt.lookAt(ft),Jt.castShadow=!0,an.add(Jt)};for(let et=L;et<=P+.01;et+=.9){let ft=rn((et-L)/(P-L),0,1),pt=$e+(ze-$e)*ft;Oe(new I(et,Z,z),new I(pt,ge,Ye)),Oe(new I(et,Z,H),new I(pt,ge,Ye))}Oe(new I($e,ge,Ye),new I(ze,ge,Ye))};y(v.x0-.6,v.x1+.6,v.z0-.6,v.z1+.6,N+T,2.1,2.6),y(G.x0-.5,G.x1+.1,G.z0-.5,G.z1+.5,N+M,1.1,1.4)}X(an,{start:10.4,dur:1.3,kind:"rise",parent:we,end:13.4});let Mn=C(E(v.x1-v.x0+.05,T,v.z1-v.z0+.05,w(2503738),(v.x0+v.x1)/2,N+T/2,0),E(G.x1-G.x0+.05,M,G.z1-G.z0+.05,w(2503738),(G.x0+G.x1)/2,N+M/2,(G.z0+G.z1)/2));X(Mn,{start:11.4,dur:.8,kind:"fade",parent:we,end:12.2});let Nt=new Ze,ln=[];for(let y=v.x0;y<=v.x1+.1;y+=2.15)ln.push(new I(y,0,v.z1+.7),new I(y,4.4,v.z1+.7));[1.1,2.2,3.3,4.4].forEach(y=>ln.push(new I(v.x0,y,v.z1+.7),new I(v.x1,y,v.z1+.7)));for(let y=v.x0;y<v.x1;y+=2.15)ln.push(new I(y,0,v.z1+.7),new I(y+2.15,2.2,v.z1+.7));Nt.add(new qr(new Zt().setFromPoints(ln),new ji({color:13227212,transparent:!0,opacity:.9}))),[2.2,3.3].forEach(y=>Nt.add(E(v.x1-v.x0,.06,.8,w(9402968),(v.x0+v.x1)/2,y,v.z1+.9))),X(Nt,{start:11.2,dur:.9,kind:"fade",end:14.4,parent:we});let Sn=new Ze,ra=w(10792615,{roughness:.9});Sn.add(E(4.4,.08,12,ra,-2.9,.04,9.2,!1));for(let y=0;y<5;y++)Sn.add(E(4.4,.09,.06,w(9081997),-2.9,.045,4+y*2.4,!1));Sn.add(E(1.2,.07,12,w(11844789),v.x0+6.95,.04,10.7,!1));for(let y=0;y<5;y++)Sn.add(E(1.2,.08,.05,w(9739927),v.x0+6.95,.045,5.6+y*2.2,!1));r||X(Sn,{start:14.2,dur:1.1,kind:"fade",parent:we});let aa=C(E(.1,1.1,.1,w(5917498),0,.55,0),E(.6,.34,.4,w(15659754),0,1.2,0),E(.5,.06,.02,w(12727348),0,1.22,.21));aa.position.set(3.4,0,13.4),r||X(aa,{start:14.6,dur:.6,kind:"pop",parent:we});let Ui=pi(256,256,(y,L,P)=>{y.fillStyle="#fff",y.fillRect(0,0,L,P);for(let H=0;H<2400;H++){let z=Math.random();y.fillStyle=z<.4?"rgba(0,0,0,.22)":z<.8?"rgba(255,255,255,.18)":"rgba(0,0,0,.1)",y.beginPath(),y.ellipse(Math.random()*L,Math.random()*P,3+Math.random()*4,1.5+Math.random()*2,Math.random()*3.14,0,6.28),y.fill()}});Ui.repeat.set(4,3);function yr(y,L,P,H){let z=new Ze,Z=w(5917498,{roughness:1}),Q=new ye(new on(.22*P,.42*P,3.6*P,9),Z);Q.position.y=1.8*P,Q.rotation.z=.12,Q.castShadow=!0,z.add(Q),z.add(S(Object.assign(new ye(new on(.12*P,.22*P,2.4*P,7),Z),{}),-.8*P,3.5*P,0)),z.children[1].rotation.z=.9;let pe=[3103301,3499600,2838848,4090706,3828306],ge=[[0,4.8,0,2.5],[2,4.3,.6,2],[-2.2,4.5,-.5,1.9],[.8,6.2,.3,1.8],[-1,6,1,1.5]];ge.forEach(([Ye,Oe,et,ft],pt)=>{let Jt=new ye(new ea(ft*P,3),w(pe[pt%5],{roughness:.95,map:Ui,bumpMap:Ui,bumpScale:1.6}));Jt.position.set(Ye*P,Oe*P,et*P),Jt.scale.y=.82,Jt.castShadow=!0,z.add(Jt)});let $e=[];for(let Ye=0;Ye<260;Ye++){let Oe=ge[Ye%5],et=Math.random()*6.28,ft=Math.acos(2*Math.random()-1),pt=Oe[3]*P*1.04;$e.push(Oe[0]*P+pt*Math.sin(ft)*Math.cos(et),Oe[1]*P+pt*Math.cos(ft)*.82,Oe[2]*P+pt*Math.sin(ft)*Math.sin(et))}let ze=new Zt;ze.setAttribute("position",new St($e,3)),z.add(new Po(ze,new Yr({color:14701131,size:.13*P+.06,sizeAttenuation:!0}))),z.position.set(y,0,L),X(z,{start:H,dur:1.1,kind:"grow",parent:we})}r||(yr(12.5,.5,1.1,14.4),yr(-11,-3,.9,14.8));function ts(y,L,P,H){let z=new Ze;z.add(S(new ye(new on(.18*P,.26*P,3*P,8),w(4930350,{roughness:1})),0,1.5*P,0));for(let Z=0;Z<10;Z++){let Q=Z/10*Math.PI*2,pe=new ye(new Ii(.24*P,2.6*P,4),w(Z%2?4090706:5012575,{roughness:.9}));pe.scale.z=.25,pe.position.set(Math.cos(Q)*.9*P,3*P-.25*P,Math.sin(Q)*.9*P),pe.rotation.set(Math.sin(Q)*1.25,0,-Math.cos(Q)*1.25),pe.castShadow=!0,z.add(pe)}z.position.set(y,0,L),X(z,{start:H,dur:1,kind:"grow",parent:we})}r||(ts(-8.4,5.6,1,14.9),ts(11,9,.8,15));function mi(y,L,P,H){let z=new Ze,Z=w(5209950,{roughness:.9});for(let Q=0;Q<9;Q++){let pe=Q/9*Math.PI*2,ge=new ye(new Ii(.09*P,1.6*P,3),Z);ge.position.set(Math.cos(pe)*.18*P,.8*P,Math.sin(pe)*.18*P),ge.rotation.set(Math.sin(pe)*.45,0,-Math.cos(pe)*.45),z.add(ge)}z.position.set(y,0,L),X(z,{start:H,dur:.8,kind:"grow",parent:we})}r||(mi(-.5,5.4,1,15.1),mi(8.4,5.4,1.1,15.2),mi(-5.6,4.8,1,15.2),mi(1.4,12,.9,15.3),mi(5.2,11,.9,15.3),mi(-6.8,14,.9,15.4));let Ms=[];for(let y=0;y<8;y++){let L=new ye(new hi(.28,10,10),new kn({color:15659754,transparent:!0,opacity:0,depthWrite:!1}));we.add(L),Ms.push(L)}let Fn=Object.assign({},Hd,e.design||{}),rt=y=>(y.clippingPlanes=[h],y.clipShadows=!0,y),Es={};function R(y,L){if(!Es[y]){let H={weatherboard:{tw:.4,th:.18,draw:(Z,Q,pe)=>{Z.fillStyle="#fff",Z.fillRect(0,0,Q,pe),Z.fillStyle="rgba(0,0,0,.28)",Z.fillRect(0,pe-5,Q,5),Z.fillStyle="rgba(255,255,255,.7)",Z.fillRect(0,0,Q,3)},w:16,h:64},boardbatten:{tw:.32,th:1,draw:(Z,Q,pe)=>{Z.fillStyle="#fff",Z.fillRect(0,0,Q,pe),Z.fillStyle="rgba(0,0,0,.3)",Z.fillRect(0,0,6,pe),Z.fillStyle="rgba(255,255,255,.7)",Z.fillRect(6,0,3,pe)},w:64,h:16},brick:{tw:.46,th:.15,draw:(Z,Q,pe)=>{Z.fillStyle="#d8d8d8",Z.fillRect(0,0,Q,pe),Z.fillStyle="#8a8a8a",Z.fillRect(0,0,Q,3),Z.fillRect(0,pe/2,Q,3),Z.fillRect(0,0,3,pe/2),Z.fillRect(Q/2,pe/2,3,pe/2);for(let ge=0;ge<60;ge++)Z.fillStyle=Math.random()<.5?"rgba(0,0,0,.07)":"rgba(255,255,255,.1)",Z.fillRect(Math.random()*Q,Math.random()*pe,8+Math.random()*10,4)},w:128,h:64},plaster:{tw:2,th:2,draw:(Z,Q,pe)=>{Z.fillStyle="#fff",Z.fillRect(0,0,Q,pe);for(let ge=0;ge<900;ge++)Z.fillStyle=Math.random()<.5?"rgba(0,0,0,.05)":"rgba(255,255,255,.35)",Z.fillRect(Math.random()*Q,Math.random()*pe,2,2)},w:128,h:128},metal:{tw:.2,th:1,draw:(Z,Q,pe)=>{let ge=Z.createLinearGradient(0,0,Q,0);ge.addColorStop(0,"#aaa"),ge.addColorStop(.5,"#fff"),ge.addColorStop(1,"#aaa"),Z.fillStyle=ge,Z.fillRect(0,0,Q,pe)},w:64,h:8}}[y],z=pi(H.w,H.h,H.draw);z.repeat.set(1/H.tw,1/H.th),Es[y]=z}return rt(new dn({map:Es[y],bumpMap:Es[y],bumpScale:y==="plaster"?1.2:3,color:L,roughness:y==="metal"?.4:.82,metalness:y==="metal"?.35:0,envMapIntensity:.4}))}let k=null;function q(y){return k||(k=pi(128,8,(L,P,H)=>{for(let z=0;z<P;z+=P/4){let Z=L.createLinearGradient(z,0,z+P/4,0);Z.addColorStop(0,"#9aa7ac"),Z.addColorStop(.5,"#ffffff"),Z.addColorStop(1,"#9aa7ac"),L.fillStyle=Z,L.fillRect(z,0,P/4,H)}})),rt(new dn({map:k,bumpMap:k,bumpScale:2,roughness:.45,metalness:.3,color:y,side:Cn}))}function J(y,L,P,H,z,Z,Q){let pe;if(y==="hip"||y==="flat")pe=new vn(P-L,Z,z-H),pe.translate((L+P)/2,N+Z/2,(H+z)/2);else if(y==="gablefront"){let ge=new Li;ge.moveTo(L,N),ge.lineTo(P,N),ge.lineTo(P,N+Z),ge.lineTo((L+P)/2,N+Z+Q),ge.lineTo(L,N+Z),ge.closePath(),pe=new jr(ge,{depth:z-H,bevelEnabled:!1}),pe.translate(0,0,H)}else{let ge=new Li;y==="gable"?(ge.moveTo(-z,N),ge.lineTo(-H,N),ge.lineTo(-H,N+Z),ge.lineTo(-(H+z)/2,N+Z+Q),ge.lineTo(-z,N+Z)):(ge.moveTo(-z,N),ge.lineTo(-H,N),ge.lineTo(-H,N+Z+Q),ge.lineTo(-z,N+Z)),ge.closePath(),pe=new jr(ge,{depth:P-L,bevelEnabled:!1}),pe.rotateY(Math.PI/2),pe.translate(L,0,0)}return B(pe.toNonIndexed?pe.toNonIndexed():pe)}function Y(y,L,P,H,z){let Z=(P+H)/2;return N+y+L*(1-rn(Math.abs(z-Z)/((H-P)/2),0,1))}function Le(y,L,P,H,z,Z){let Q=(H+z)/2;return y==="skillion"?N+L+P*rn((z-Z)/(z-H),0,1):N+L+P*(1-rn(Math.abs(Z-Q)/((z-H)/2),0,1))}let ke="none";function Je(y,L,P,H,z,Z,Q,pe,ge){let $e=new Ze,ze=N+Z,Ye=L-ge,Oe=P+ge,et=H-ge,ft=z+ge,pt=(H+z)/2,Jt=1/.45,En=(Ut,mt)=>{let kt=new Zt,it=[],$t=[];(Ut.length===4?[[0,1,2],[0,2,3]]:[[0,1,2]]).forEach(tn=>tn.forEach(as=>{it.push(...Ut[as]),$t.push(...mt(Ut[as]))})),kt.setAttribute("position",new St(it,3)),kt.setAttribute("uv",new St($t,2)),kt.computeVertexNormals();let zn=new ye(kt,pe);zn.castShadow=!0,zn.receiveShadow=!0,$e.add(zn)},jt=rt(w(1976105,{roughness:.6}));if(y==="flat"){let Ut=rt(w(9411222,{roughness:.9}));$e.add(E(P-L+.3,.16,z-H+.3,Ut,(L+P)/2,ze+.08,(H+z)/2));let mt=rt(w(15855074,{roughness:.9})),kt=.2,it=.55;$e.add(E(P-L+.3,it,kt,mt,(L+P)/2,ze+it/2,z+.15),E(P-L+.3,it,kt,mt,(L+P)/2,ze+it/2,H-.15),E(kt,it,z-H+.3,mt,L-.15,ze+it/2,(H+z)/2),E(kt,it,z-H+.3,mt,P+.15,ze+it/2,(H+z)/2))}else if(y==="hip"){let Ut=Math.max(1.4,(P-L)*.3),mt=Ye+Ut,kt=Oe-Ut,it=ze+Q;if(ke==="villa"){let $t=rt(w(1976105,{roughness:.5}));[mt,kt].forEach(zn=>{let tn=new ye(new Ii(.07,.55,8),$t);tn.position.set(zn,it+.32,pt),$e.add(tn);let as=new ye(new hi(.1,10,10),$t);as.position.set(zn,it+.1,pt),$e.add(as)})}En([[Ye,ze,ft],[Oe,ze,ft],[kt,it,pt],[mt,it,pt]],$t=>[$t[0]*Jt,0]),En([[Oe,ze,et],[Ye,ze,et],[mt,it,pt],[kt,it,pt]],$t=>[$t[0]*Jt,0]),En([[Oe,ze,ft],[Oe,ze,et],[kt,it,pt]],$t=>[$t[2]*Jt,0]),En([[Ye,ze,et],[Ye,ze,ft],[mt,it,pt]],$t=>[$t[2]*Jt,0]),$e.add(E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,ze,ft),E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,ze,et),E(.12,.22,ft-et,jt,Ye,ze,pt),E(.12,.22,ft-et,jt,Oe,ze,pt),E(kt-mt,.14,.22,jt,(mt+kt)/2,it+.05,pt))}else if(y==="gablefront"){let Ut=ze+Q,mt=(Ye+Oe)/2,kt=Math.hypot(mt-Ye,Q),it=Math.atan2(Q,mt-Ye);En([[Ye,ze,ft],[mt,Ut,ft],[mt,Ut,et],[Ye,ze,et]],$t=>[$t[2]*Jt,0]),En([[Oe,ze,et],[mt,Ut,et],[mt,Ut,ft],[Oe,ze,ft]],$t=>[$t[2]*Jt,0]),$e.add(E(.12,.22,ft-et,jt,Ye,ze,pt),E(.12,.22,ft-et,jt,Oe,ze,pt),E(.22,.14,ft-et,jt,mt,Ut+.04,pt)),[et,ft].forEach($t=>{let zn=E(kt,.14,.12,jt,(Ye+mt)/2,(ze+Ut)/2,$t);zn.rotation.z=it,$e.add(zn);let tn=E(kt,.14,.12,jt,(Oe+mt)/2,(ze+Ut)/2,$t);tn.rotation.z=-it,$e.add(tn)})}else if(y==="gable"){let Ut=ze+Q;En([[Ye,ze,ft],[Oe,ze,ft],[Oe,Ut,pt],[Ye,Ut,pt]],mt=>[mt[0]*Jt,0]),En([[Oe,ze,et],[Ye,ze,et],[Ye,Ut,pt],[Oe,Ut,pt]],mt=>[mt[0]*Jt,0]),$e.add(E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,ze,ft),E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,ze,et),E(Oe-Ye,.14,.22,jt,(Ye+Oe)/2,Ut+.04,pt)),[Ye,Oe].forEach(mt=>{let kt=E(.12,.14,Math.hypot(ft-pt,Q),jt,mt,(ze+Ut)/2,(ft+pt)/2);kt.rotation.x=Math.atan2(Q,ft-pt),$e.add(kt);let it=E(.12,.14,Math.hypot(pt-et,Q),jt,mt,(ze+Ut)/2,(pt+et)/2);it.rotation.x=-Math.atan2(Q,pt-et),$e.add(it)})}else{let Ut=ze+Q;En([[Ye,ze,ft],[Oe,ze,ft],[Oe,Ut,et],[Ye,Ut,et]],mt=>[mt[0]*Jt,0]),$e.add(E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,ze,ft),E(Oe-Ye,.22,.12,jt,(Ye+Oe)/2,Ut,et)),[Ye,Oe].forEach(mt=>{let kt=E(.12,.16,Math.hypot(ft-et,Q),jt,mt,(ze+Ut)/2,(et+ft)/2);kt.rotation.x=-Math.atan2(Q,ft-et),$e.add(kt)})}return $e}let Ne=4,je=!1,tt=e.onInside||null,nt=[],Pt=null,fn=null,It=null,di=null,Ot=null,dt=[],Di=new I(5.6,6,1.2),Wt=[],gn="house",oa=()=>rt(new dn({color:8827318,roughness:.04,metalness:.7,transparent:!0,opacity:.82,envMapIntensity:1.4}));function Ni(y){if(fn){fn.traverse(ae=>{ae.geometry&&ae.geometry.dispose()}),we.remove(fn);for(let ae=l.length-1;ae>=0;ae--)l[ae].tag===gn&&l.splice(ae,1)}dt=[],Wt=[],nt=[];let L=new Ze;fn=L,we.add(L),ke=y.detail||"none";let P=y.roof,H=y.shape==="twostorey",z=y.shape==="lshape",Z=y.garage===!0,Q=y.garage==="carport",pe=P==="skillion"?2.55:T,ge=H?pe+2.6:pe,$e=P==="flat"?.3:P==="hip"?2.1:P==="gable"||P==="gablefront"?2.3:1.5,ze=P==="skillion"?2.3:M,Ye=P==="flat"?.3:P==="hip"?1.1:P==="gable"||P==="gablefront"?1.3:.9,Oe={x0:0,x1:3.8,z0:-9.2,z1:-4.5},et=P==="flat"?.3:P==="hip"?1.3:P==="gable"||P==="gablefront"?1.4:1,ft=()=>R(y.cladding,y.wall),pt=new ye(J(P,v.x0,v.x1,v.z0,v.z1,ge,$e),ft());pt.castShadow=pt.receiveShadow=!0;let Jt=new ye(J(P,G.x0,G.x1,G.z0,G.z1,ze,Ye),ft());Jt.castShadow=Jt.receiveShadow=!0;let En=new Ze;En.add(pt),Z&&En.add(Jt);let jt=null;z&&(jt=new ye(J(P,Oe.x0,Oe.x1,Oe.z0,Oe.z1,pe,et),ft()),jt.castShadow=jt.receiveShadow=!0,En.add(jt)),[pt,Jt].forEach(ae=>{ae.geometry.computeBoundingBox(),ae.userData.top=ae.geometry.boundingBox.max.y}),L.add(En);let Ut=N;X(En,{start:12,dur:1.3,kind:"custom",tag:gn,add:!1,fn:(ae,oe)=>{let re=Math.max(.001,sa(oe));En.scale.y=re,En.position.y=Ut*(1-re)}}),It=new Ze,L.add(It);let mt=new Ze;if(It.add(mt),mt.add(Je(P,v.x0,v.x1,v.z0,v.z1,ge,$e,q(y.roofColor),.6)),Z&&mt.add(Je(P,G.x0,G.x1,G.z0,G.z1,ze,Ye,q(y.roofColor),.5)),z&&mt.add(Je(P,Oe.x0,Oe.x1,Oe.z0,Oe.z1,pe,et,q(y.roofColor),.5)),Q){let ae=rt(w(3813158,{roughness:.8})),oe=new Ze;[[G.x0+.2,G.z0+.2],[G.x1-.2,G.z0+.2],[G.x0+.2,G.z1-.2],[G.x1-.2,G.z1-.2]].forEach(([le,Me])=>oe.add(E(.16,2.4,.16,ae,le,N+1.2,Me)));let re=new ye(new vn(G.x1-G.x0+.8,.14,G.z1-G.z0+.8),q(y.roofColor));re.position.set((G.x0+G.x1)/2,N+2.5,(G.z0+G.z1)/2),re.castShadow=!0,oe.add(re),mt.add(oe)}if(X(mt,{start:12.9,dur:1.3,kind:"drop",tag:gn,add:!1}),y.chimney){let ae=P==="gablefront"?-1.2:1.2,oe=P==="hip"?5.6:P==="gablefront"?6.6:6.2,re=(P==="gablefront"?Y(ge,$e,v.x0-.6,v.x1+.6,oe):Le(P,ge,$e,v.z0-.6,v.z1+.6,ae))-.4,le=C(E(.7,2.4,.7,rt(w(9189938,{roughness:.95})),0,1.2,0),E(.9,.18,.9,rt(w(2239277)),0,2.5,0));le.position.set(oe,re,ae),It.add(le),X(le,{start:13.6,dur:.7,kind:"rise",tag:gn,add:!1}),Di.set(oe,re+2.6,ae)}if(y.solar){let ae=pi(64,96,(re,le,Me)=>{re.fillStyle="#1a2a4c",re.fillRect(0,0,le,Me),re.strokeStyle="rgba(180,200,240,.55)",re.lineWidth=1;for(let Ce=1;Ce<4;Ce++)re.beginPath(),re.moveTo(Ce*le/4,0),re.lineTo(Ce*le/4,Me),re.stroke();for(let Ce=1;Ce<6;Ce++)re.beginPath(),re.moveTo(0,Ce*Me/6),re.lineTo(le,Ce*Me/6),re.stroke()},!1),oe=rt(new dn({map:ae,roughness:.25,metalness:.6}));if(P==="gablefront"){let re=v.x0-.6,le=v.x1+.6,Me=(re+le)/2,Ce=Math.atan2($e,Me-re);for(let bt=0;bt<4;bt++)[.3,.62].forEach(Et=>{let _t=le-(le-Me)*Et,zt=E(1.6,.05,1,oe,_t,Y(ge,$e,re,le,_t)+.1,-3+bt*1.7);zt.rotation.z=-Ce,It.add(zt)})}else{let re=v.z0-.6,le=v.z1+.6,Me=Math.atan2($e,P==="skillion"?le-re:le-(v.z0+v.z1)/2),Ce=P==="skillion"?[.28,.62]:[.34,.7];for(let bt=0;bt<4;bt++)Ce.forEach(Et=>{let _t=P==="skillion"?le-(le-re)*Et:v.z1+.6-(v.z1+.6-(v.z0+v.z1)/2)*Et,zt=E(1,.05,1.6,oe,1.6+bt*1.2,Le(P,ge,$e,re,le,_t)+.1,_t);zt.rotation.x=Me,It.add(zt)})}}if(y.detail==="bungalow"&&P==="gablefront"){let ae=pi(64,64,(le,Me,Ce)=>{le.fillStyle="#8a6b4a",le.fillRect(0,0,Me,Ce);for(let bt=0;bt<Ce;bt+=8)le.fillStyle=bt%16?"rgba(0,0,0,.18)":"rgba(255,255,255,.08)",le.fillRect(0,bt,Me,6),le.fillStyle="rgba(0,0,0,.35)",le.fillRect(0,bt+6,Me,2)});ae.repeat.set(4,2);let oe=new Li;oe.moveTo(v.x0,N+ge),oe.lineTo(v.x1,N+ge),oe.lineTo((v.x0+v.x1)/2,N+ge+$e),oe.closePath(),[v.z1+.03,v.z0-.03].forEach((le,Me)=>{let Ce=new ye(new ta(oe),rt(new dn({map:ae,roughness:.9})));Ce.position.z=le,Me&&(Ce.rotation.y=Math.PI),It.add(Ce)});let re=rt(w(3813158,{roughness:.8}));for(let le=v.z0-.3;le<=v.z1+.3;le+=.7)[v.x0-.55,v.x1+.55].forEach(Me=>It.add(E(.12,.12,.35,re,Me,N+ge-.12,le)))}if(y.detail==="deco"){let ae=rt(w(15855074,{roughness:.8})),oe=rt(w(15855074,{roughness:.8}));[[v.z1+.05,0],[v.z0-.05,0]].forEach(([re])=>{[N+1.1,N+ge-.5].forEach(le=>It.add(E(v.x1-v.x0+.12,.09,.16,oe,(v.x0+v.x1)/2,le,re)))}),It.add(E(3.4,1.25,.32,ae,v.x0+6.6,N+ge+.62,v.z1+.12)),[-1.1,0,1.1].forEach(re=>It.add(E(.1,1,.36,rt(w(13214794,{roughness:.5,metalness:.4})),v.x0+6.6+re,N+ge+.62,v.z1+.14)))}let kt=[],it=rt(w(new qe(y.joinery),{roughness:.5})),$t=oa(),zn=rt(w(16052714,{roughness:.6})),tn=new Ze;L.add(tn);let as=()=>new kn({color:13625070,side:Cn});function _n(ae,oe,re,le,Me,Ce,bt){let Et=new Ze,_t=.07;Et.add(E(ae,_t,.14,it,0,oe/2-_t/2,0),E(ae,_t,.14,it,0,-oe/2+_t/2,0),E(_t,oe,.14,it,-ae/2+_t/2,0,0),E(_t,oe,.14,it,ae/2-_t/2,0,0));for(let Xt=1;Xt<=bt;Xt++)Et.add(E(.05,oe,.1,it,-ae/2+ae*Xt/(bt+1),0,0));let zt=new ye(new In(ae-_t*2,oe-_t*2),$t.clone());zt.position.z=-.01,Et.add(zt);let cn=new ye(new In(ae-_t*2,oe-_t*2),new kn({color:16764805,transparent:!0,opacity:0}));cn.position.z=-.06,Et.add(cn),dt.push(cn);let At=new ye(new In(ae-_t*2,oe-_t*2),as());At.position.z=-.17,Et.add(At),nt.push(At);{let Xt=Math.abs(Ce)<.01?"front":Math.abs(Math.abs(Ce)-Math.PI)<.01?"back":Ce>0?"right":"left",Fi=Xt==="front"||Xt==="back"?re:Me;(Xt==="front"||Xt==="back"?re>v.x0+.3&&re<v.x1-.3:Me>v.z0+.3&&Me<v.z1-.3)&&le-oe/2<N+pe-.2&&(Xt!=="right"||re>v.x1-.2)&&(Xt!=="left"||re<v.x0+.2)&&(Xt!=="front"||Me<v.z1+.5)&&kt.push({wl:Xt,c:Fi,w:ae-.14,h:oe-.14,y:le})}Et.add(E(ae,.05,.05,it,0,oe/2,-.17),E(ae,.05,.05,it,0,-oe/2,-.17),E(.05,oe,.05,it,-ae/2,0,-.17),E(.05,oe,.05,it,ae/2,0,-.17)),y.detail==="villa"&&(Et.add(E(ae,.045,.1,it,0,oe*.08,.01)),bt===0&&Et.add(E(.045,oe,.1,it,0,0,.01)),Et.add(E(.045,oe*.5,.1,it,-ae*.25,-oe*.25,.01),E(.045,oe*.5,.1,it,ae*.25,-oe*.25,.01))),Et.add(E(ae+.22,.06,.24,zn,0,-oe/2-.04,.09),E(ae+.14,.08,.1,zn,0,oe/2+.05,.04),E(.07,oe+.1,.1,zn,-ae/2-.06,0,.03),E(.07,oe+.1,.1,zn,ae/2+.06,0,.03)),Et.position.set(re,le,Me),Et.rotation.y=Ce,tn.add(Et)}let jd=()=>R(y.cladding,y.wall);if(y.windows==="large")_n(4.2,2,v.x0+2.3,N+1.2,v.z1+.03,0,2);else if(y.bay){let ae=v.x0+2.35,oe=v.z1,re=jd();tn.add(E(.12,2.2,1.1,re,ae-1.15,N+1.15,oe+.55),E(.12,2.2,1.1,re,ae+1.15,N+1.15,oe+.55),E(2.4,.5,1.1,re,ae,N+.4,oe+.55)),_n(2.2,1.4,ae,N+1.6,oe+1.1,0,2);let le=new ye(new vn(2.8,.1,1.6),q(y.roofColor));le.position.set(ae,N+2.38,oe+.7),le.rotation.x=.18,tn.add(le)}else _n(2.9,1.4,v.x0+2.35,N+1.6,v.z1+.03,0,1);if(y.windows!=="large"&&_n(.9,1.4,v.x0+4.75,N+1.6,v.z1+.03,0,0),_n(.7,2,v.x0+6.05,N+1.15,v.z1+.03,0,0),_n(1.6,1.2,v.x1+.03,N+1.6,0,Math.PI/2,1),_n(1.6,1.2,v.x1+.03,N+1.6,-2.8,Math.PI/2,0),z||_n(2.2,1.2,3,N+1.6,v.z0-.03,Math.PI,1),_n(1.2,1.2,7,N+1.6,v.z0-.03,Math.PI,0),z&&(_n(1.6,1.2,1.9,N+1.6,Oe.z0-.03,Math.PI,1),_n(1.4,1.2,Oe.x1+.03,N+1.6,-6.9,Math.PI/2,0),_n(1.4,1.2,Oe.x0-.03,N+1.6,-6.9,-Math.PI/2,0)),H){let ae=pe+.05;_n(2.9,1.4,v.x0+2.35,N+1.6+ae,v.z1+.03,0,1),_n(1.4,1.4,v.x0+5.2,N+1.6+ae,v.z1+.03,0,0),_n(1.4,1.4,v.x0+7.3,N+1.6+ae,v.z1+.03,0,0),_n(1.6,1.2,v.x1+.03,N+1.6+ae,0,Math.PI/2,1),_n(2.2,1.2,3,N+1.6+ae,v.z0-.03,Math.PI,1),_n(1.2,1.2,7,N+1.6+ae,v.z0-.03,Math.PI,0),tn.add(E(8.8,.1,.35,it,(v.x0+v.x1)/2,N+pe+.05,v.z1+.18))}Ot=new Ze,Ot.position.set(v.x0+6.42,N+1.025,v.z1+.04);let ef=y.door==="timber"?rt(w(11039817,{roughness:.55})):rt(w(new qe(y.door),{roughness:.45}));if(Ot.add(E(1.05,2.05,.1,ef,.525,0,0),E(.4,.9,.04,$t.clone(),.525,.45,.07),E(.05,.5,.05,rt(w(15919049,{metalness:.7,roughness:.3})),.95,-.1,.1)),tn.add(Ot),y.detail==="deco"){let ae=new ye(new on(.34,.34,.1,24),$t.clone());ae.rotation.x=Math.PI/2,ae.position.set(v.x0+5.55,N+1.75,v.z1+.06),tn.add(ae);let oe=new ye(new Bo(.35,.04,8,24),it);oe.position.copy(ae.position),oe.position.z+=.04,tn.add(oe)}tn.add(E(.12,2.1,.12,it,v.x0+6.38,N+1.05,v.z1+.04));{let ae=new Ze;L.add(ae);let oe=v.x0+.13,re=v.x1-.13,le=v.z0+.13,Me=v.z1-.13,Ce=pe-.06,bt=new Ze,Et=new Ze,_t=new Ze,zt=new Ze,cn=new Ze;ae.add(bt,Et,_t,zt,cn);let At=(Ge,st={})=>rt(new dn(Object.assign({color:Ge,roughness:.9},st))),Xt=()=>rt(new dn({color:15987180,roughness:.95,side:Cn})),Fi=At(14268285,{roughness:.7});{let Ge=[],st=(Dt,nn,Hn,fl)=>{let wh=Math.max(2,Math.round(Math.hypot(Hn-Dt,fl-nn)/.6));for(let pl=0;pl<=wh;pl++){let Th=pl/wh;Ge.push([Dt+(Hn-Dt)*Th,nn+(fl-nn)*Th,Math.atan2(Hn-Dt,fl-nn)+Math.PI/2])}};st(oe,Me,re,Me),st(oe,le,re,le),st(oe,le,oe,Me),st(re,le,re,Me),st(5.2,le,5.2,.35),st(5.2,1.5,5.2,Me);let wt=new _s(new vn(.05,1,.1),Fi,Ge.length),vt=new sn;Ge.forEach((Dt,nn)=>{vt.position.set(Dt[0],N+Ce/2,Dt[1]),vt.rotation.set(0,Dt[2],0),vt.scale.set(1,Ce,1),vt.updateMatrix(),wt.setMatrixAt(nn,vt.matrix)}),wt.castShadow=!0,bt.add(wt),[N+.06,N+Ce-.04,N+Ce*.5].forEach(Dt=>{bt.add(E(re-oe,.06,.1,Fi,(oe+re)/2,Dt,Me),E(re-oe,.06,.1,Fi,(oe+re)/2,Dt,le),E(.1,.06,Me-le,Fi,oe,Dt,(le+Me)/2),E(.1,.06,Me-le,Fi,re,Dt,(le+Me)/2))});for(let Dt=oe+.3;Dt<re;Dt+=.6)bt.add(E(.05,.2,Me-le,Fi,Dt,N+Ce+.04,(le+Me)/2))}let br=(Ge,st,wt)=>{let vt=new Li;vt.moveTo(0,0),vt.lineTo(Ge,0),vt.lineTo(Ge,Ce),vt.lineTo(0,Ce),vt.closePath(),st.forEach(nn=>{let Hn=new mr;Hn.moveTo(nn.u0,nn.v0),Hn.lineTo(nn.u1,nn.v0),Hn.lineTo(nn.u1,nn.v1),Hn.lineTo(nn.u0,nn.v1),Hn.closePath(),vt.holes.push(Hn)});let Dt=new ye(new ta(vt),Xt());wt(Dt),Dt.receiveShadow=!0,Et.add(Dt)},ya=(Ge,st,wt)=>kt.filter(vt=>vt.wl===Ge).map(vt=>({u0:Math.max(.03,vt.c-vt.w/2-st),u1:Math.min(wt-.03,vt.c+vt.w/2-st),v0:Math.max(.03,vt.y-vt.h/2-N),v1:Math.min(Ce-.03,vt.y+vt.h/2-N)})),Mh=ya("front",oe,re-oe);{let Ge=v.x0+6.42+.525;Mh.push({u0:Ge-.52-oe,u1:Ge+.52-oe,v0:.03,v1:2.04})}br(re-oe,Mh,Ge=>Ge.position.set(oe,N,Me)),br(re-oe,ya("back",oe,re-oe),Ge=>Ge.position.set(oe,N,le)),br(Me-le,ya("right",le,Me-le),Ge=>{Ge.rotation.y=-Math.PI/2,Ge.position.set(re,N,le)}),br(Me-le,ya("left",le,Me-le),Ge=>{Ge.rotation.y=-Math.PI/2,Ge.position.set(oe,N,le)}),[[5.2,le,.35],[5.2,1.5,Me]].forEach(([Ge,st,wt])=>Et.add(E(.1,Ce-.04,wt-st,Xt(),Ge,N+Ce/2,(st+wt)/2))),[[5.2,6,0],[7.1,re,0]].forEach(([Ge,st,wt])=>Et.add(E(st-Ge,Ce-.04,.1,Xt(),(Ge+st)/2,N+Ce/2,wt)));let cl=new ye(new In(re-oe,Me-le),Xt());cl.rotation.x=Math.PI/2,cl.position.set((oe+re)/2,N+Ce,(le+Me)/2),Et.add(cl);let tf=At(3095101,{roughness:.8});Et.add(E(.05,Ce-.1,4.6,tf,oe+.04,N+Ce/2,1.2));let Eh=pi(256,256,(Ge,st,wt)=>{Ge.fillStyle="#d2b48a",Ge.fillRect(0,0,st,wt);for(let vt=0;vt<12;vt++){Ge.fillStyle=vt%2?"rgba(0,0,0,.05)":"rgba(255,255,255,.1)",Ge.fillRect(0,vt*(wt/12),st,wt/12),Ge.fillStyle="rgba(60,40,20,.35)",Ge.fillRect(0,vt*(wt/12),st,1.5);for(let Dt=0;Dt<5;Dt++)Ge.fillStyle="rgba(60,40,20,.15)",Ge.fillRect(Math.random()*st,vt*(wt/12),1.5,wt/12)}});Eh.repeat.set(4,4);let va=new ye(new In(re-oe,Me-le),rt(new dn({map:Eh,roughness:.45})));va.rotation.x=-Math.PI/2,va.position.set((oe+re)/2,N+.025,(le+Me)/2),va.receiveShadow=!0,_t.add(va);let nf=At(15987180);[[re-oe,.1,.03,(oe+re)/2,N+.07,Me-.02],[re-oe,.1,.03,(oe+re)/2,N+.07,le+.02],[.03,.1,Me-le,oe+.02,N+.07,(le+Me)/2],[.03,.1,Me-le,re-.02,N+.07,(le+Me)/2]].forEach(([Ge,st,wt,vt,Dt,nn])=>_t.add(E(Ge,st,wt,nf,vt,Dt,nn)));let hl=At(2765366,{roughness:.55}),Ma=At(15658730,{roughness:.25,metalness:.05}),ul=At(11187384,{roughness:.35,metalness:.6}),Ls=At(11039817,{roughness:.6});zt.add(E(4.2,.9,.6,hl,2.2,N+.47,-4.1),E(4.3,.05,.66,Ma,2.2,N+.95,-4.08),E(4.2,.55,.03,At(14674152,{roughness:.1}),2.2,N+1.25,-4.4),E(3.2,.7,.36,hl,1.7,N+2,-4.2),E(.9,.12,.55,ul,3.8,N+1.55,-4.1),E(.8,2,.62,ul,4.7,N+1.02,-4.1)),zt.add(E(2.7,.9,1,hl,2.5,N+.47,-2.2),E(2.9,.06,1.15,Ma,2.5,N+.96,-2.2),E(.06,.9,1.1,Ma,1.08,N+.47,-2.2),E(.06,.9,1.1,Ma,3.92,N+.47,-2.2)),[1.7,2.5,3.3].forEach(Ge=>{let st=new Ze;st.add(S(new ye(new on(.19,.19,.06,16),Ls),0,.68,0),S(new ye(new on(.03,.03,.66,8),ul),0,.33,0)),st.position.set(Ge,N,-1.35),zt.add(st)}),zt.add(E(1.3,2.15,.55,Ls,6,N+1.1,-4.1),E(.55,.7,.06,At(2765366),7.9,N+1.1,-4.35));let wr=At(7174782,{roughness:.95}),Sh=At(15327954,{roughness:1}),Ea=At(1778470,{roughness:.5});cn.add(E(2.7,.42,1,wr,2.4,N+.25,1.4),E(2.7,.55,.24,wr,2.4,N+.6,.9),E(.22,.62,1,wr,1,N+.4,1.4),E(.22,.62,1,wr,3.8,N+.4,1.4),E(1,.42,1,wr,4.3,N+.25,2.2),E(3,.03,2,Sh,2.4,N+.04,2.7),E(1.1,.3,.6,Ls,2.4,N+.2,2.7),E(.05,.3,.05,Ea,1.9,N+.05,2.5)),cn.add(E(.5,.5,2.1,At(2765366,{roughness:.5}),.45,N+.28,2.4),E(.05,.85,1.5,Ea,.28,N+1.35,2.4)),cn.add(E(1.9,.05,.95,Ls,.95,N+.78,-1)),[[.1,-1.35],[1.8,-1.35],[.1,-.65],[1.8,-.65]].forEach(([Ge,st])=>cn.add(E(.06,.76,.06,Ea,Ge,N+.4,st))),[[.5,-1.7],[1.4,-1.7],[.5,-.3],[1.4,-.3]].forEach(([Ge,st])=>cn.add(E(.42,.45,.42,At(3885646,{roughness:.8}),Ge,N+.24,st),E(.42,.4,.05,At(3885646,{roughness:.8}),Ge,N+.62,st+(st<-1?-.2:.2))));let bh=new kn({color:16769712});[1.7,2.5,3.3].forEach(Ge=>{let st=new Ze;st.add(S(new ye(new on(.01,.01,.9,5),Ea),0,.45,0),S(new ye(new hi(.2,16,12),bh),0,-.02,0)),st.position.set(Ge,N+Ce-.9,-2.2),st.userData.glow=1,cn.add(st)});for(let Ge=0;Ge<4;Ge++)for(let st=0;st<3;st++){let wt=new ye(new Jr(.09,12),bh);wt.rotation.x=Math.PI/2,wt.position.set(1+Ge*1.2,N+Ce-.01,-3.4+st*2.6),cn.add(wt)}cn.add(E(1.7,.4,2.1,Sh,7,N+.25,-2.7),E(1.8,.18,.4,At(16777215),7,N+.5,-3.55),E(.7,.4,.3,At(16777215),6.6,N+.55,-3.5),E(.7,.4,.3,At(16777215),7.4,N+.55,-3.5),E(2.1,.9,.08,At(7174782),7,N+.7,-3.75),E(.45,.45,.45,Ls,6,N+.25,-3.5),E(.45,.45,.45,Ls,8,N+.25,-3.5),E(1.9,.04,1.2,At(13227212),7,N+.04,-2));let dl=(Ge,st,wt)=>{let vt=new Ze;vt.add(S(new ye(new on(.22*wt,.18*wt,.4*wt,12),At(15327954)),0,.2*wt,0));for(let Dt=0;Dt<8;Dt++){let nn=Dt/8*Math.PI*2,Hn=new ye(new Ii(.12*wt,1.1*wt,4),At(Dt%2?4090706:5012575));Hn.position.set(Math.cos(nn)*.14*wt,.9*wt,Math.sin(nn)*.14*wt),Hn.rotation.set(Math.sin(nn)*.5,0,-Math.cos(nn)*.5),vt.add(Hn)}return vt.position.set(Ge,N,st),vt};cn.add(dl(.55,.55,1.3),dl(4.6,-4,1.1),dl(8,.9,1),E(.04,1,.7,At(13227212),oe+.06,N+1.7,-.2),E(.04,.7,1.1,At(11883583),oe+.06,N+1.4,-1.6)),Pt={Ifr:bt,Ili:Et,Ifl:_t,Ijo:zt,Ifu:cn,IN:ae},zt.children.forEach(Ge=>{Ge.userData.s=1}),cn.children.forEach(Ge=>{Ge.userData.s=1})}X(Pt.IN,{start:13.4,dur:.3,kind:"custom",tag:gn,add:!1,fn:()=>{}});let vh=C(E(2.7,.12,1.5,it,0,0,0),E(.14,2.3,.14,rt(w(12160606)),-1.2,-1.2,.62),E(.14,2.3,.14,rt(w(12160606)),1.2,-1.2,.62),E(.14,.14,1.5,it,-1.35,.02,0),E(.14,.14,1.5,it,1.35,.02,0));if(vh.position.set(v.x0+6.6,N+2.45,v.z1+.75),y.veranda){let ae=rt(w(15921384,{roughness:.6})),oe=rt(w(10122312,{roughness:.8})),re=new Ze;re.add(E(9.6,.12,2.3,oe,(v.x0+v.x1)/2,.12,v.z1+1.2));let le=rt(w(9061946,{roughness:.95}));for(let Ce=v.x0-.2;Ce<=v.x1+.3;Ce+=1.75){if(y.detail==="bungalow"){let bt=E(.55,.85,.55,le,Ce,.5,v.z1+2.2);re.add(bt);let Et=new ye(new on(.14,.24,1.7,4),ae);Et.rotation.y=Math.PI/4,Et.position.set(Ce,.85+.85,v.z1+2.2),Et.castShadow=!0,re.add(Et)}else re.add(E(.13,2.45,.13,ae,Ce,N+1.25,v.z1+2.2));if(y.detail==="villa"){re.add(E(.5,.05,.05,ae,Ce+.3,N+2.2,v.z1+2.2).rotateZ(-.7),E(.5,.05,.05,ae,Ce-.3,N+2.2,v.z1+2.2).rotateZ(.7));for(let bt=0;bt<7;bt++)re.add(E(.035,.3,.035,ae,Ce+.2+bt*.2,N+2.3,v.z1+2.2))}else re.add(E(1.3,.14,.06,ae,Ce+.87,N+2.35,v.z1+2.2))}let Me=new ye(new vn(9.8,.09,2.7),q(y.roofColor));Me.position.set((v.x0+v.x1)/2,N+2.82,v.z1+1.25),Me.rotation.x=.17,Me.castShadow=!0,re.add(Me),re.add(E(9.8,.2,.07,ae,(v.x0+v.x1)/2,N+2.6,v.z1+2.46)),tn.add(re)}else tn.add(vh);if(Z){let ae=new Ze;ae.add(E(3.3,2,.1,rt(w(9280149,{roughness:.55})),0,0,0));for(let oe=0;oe<4;oe++)ae.add(E(3.3,.03,.12,rt(w(7306359)),0,-.75+oe*.5,.02));ae.position.set((G.x0+G.x1)/2,N+1,G.z1+.04),tn.add(ae)}if(tn.traverse(ae=>ae.castShadow=!0),X(tn,{start:13.8,dur:1,kind:"pop",tag:gn,add:!1}),y.veranda||X(E(3,.18,1.5,rt(w(10989736)),v.x0+6.6,.09,v.z1+.8),{start:13.9,dur:.5,kind:"rise",tag:gn,parent:L}),y.fence&&y.fence!=="none"){let ae=new Ze,oe=[[-13,-5.3],[-.5,6.15],[7.75,14.5]],re=15.2,le=rt(w(y.fence==="picket"?16052714:3103301,{roughness:.8}));oe.forEach(([Me,Ce])=>{let bt=Ce-Me,Et=(Me+Ce)/2;if(y.fence==="picket"){ae.add(E(bt,.07,.05,le,Et,.35,re),E(bt,.07,.05,le,Et,.8,re));for(let _t=Me;_t<=Ce;_t+=.2){let zt=E(.09,.95,.03,le,_t,.5,re+.03);ae.add(zt)}[Me,Ce].forEach(_t=>ae.add(E(.12,1.1,.12,le,_t,.55,re)))}else{ae.add(E(bt,1.05,.8,rt(w(2841150,{roughness:1})),Et,.55,re));for(let _t=Me+.3;_t<Ce;_t+=.7){let zt=new ye(new ea(.42,1),rt(w(3501386,{roughness:1})));zt.position.set(_t,1.1,re),zt.scale.set(1,.7,1),zt.castShadow=!0,ae.add(zt)}}}),X(ae,{start:14.7,dur:.6,kind:"pop",tag:gn,parent:L})}{let ae=rt(w(2765880,{roughness:.5,metalness:.3})),oe=rt(w(5858666,{roughness:.5,metalness:.4})),re=new Ze,le=.6,Me=N+ge-.06;P!=="gablefront"?re.add(E(v.x1-v.x0+le*2,.1,.12,ae,(v.x0+v.x1)/2,Me,v.z1+le),E(v.x1-v.x0+le*2,.1,.12,ae,(v.x0+v.x1)/2,Me,v.z0-le)):re.add(E(.12,.1,v.z1-v.z0+le*2,ae,v.x0-le,Me,0),E(.12,.1,v.z1-v.z0+le*2,ae,v.x1+le,Me,0));let Ce=(zt,cn,At)=>{let Xt=new ye(new on(.045,.045,At-N,8),oe);Xt.position.set(zt,N+(At-N)/2,cn),Xt.castShadow=!0,re.add(Xt)};P!=="gablefront"?(Ce(v.x0+.12,v.z1+.1,Me),Ce(v.x1-.12,v.z1+.1,Me),Ce(v.x1-.12,v.z0-.1,Me)):(Ce(v.x0-.1,v.z1-.2,Me),Ce(v.x1+.1,v.z1-.2,Me)),Z&&(re.add(E(G.x1-G.x0+1,.09,.11,ae,(G.x0+G.x1)/2,N+ze-.05,G.z1+.5)),Ce(G.x0+.1,G.z1+.1,N+ze-.05));let bt=(zt,cn,At)=>{let Xt=new Ze;return Xt.add(E(.55,.95,.7,rt(w(3095101,{roughness:.8})),0,.5,0),E(.6,.08,.75,rt(w(At,{roughness:.6})),0,1,0)),Xt.position.set(zt,0,cn),Xt.rotation.y=.1,Xt};re.add(bt(G.x1+.9,G.z1+1.4,15123514),bt(G.x1+1.7,G.z1+1.5,12727348));let Et=rt(w(5916210,{roughness:.9}));re.add(E(5.4,.22,.6,Et,v.x0+2.6,.12,v.z1+.55),E(5.4,.1,.5,rt(w(3878691,{roughness:1})),v.x0+2.6,.2,v.z1+.55)),re.add(S(new ye(new on(.6,.6,1.9,16),rt(w(6979462,{roughness:.55,metalness:.3}))),v.x1-1.6,.95,v.z0-1.2));let _t=new Ze;[-1,1].forEach(zt=>_t.add(E(.06,2,.06,oe,zt*1.2,1,0))),_t.add(E(2.4,.04,.04,oe,0,2,0),E(2.4,.04,.04,oe,0,1.85,.25)),_t.position.set(v.x1+1.5,0,-6.4),re.add(_t),X(re,{start:14.5,dur:.8,kind:"fade",tag:gn,parent:L})}if(y.deck){let ae=new Ze,oe=rt(w(10122312,{roughness:.8})),re=rt(w(3813158));ae.add(E(3.6,.14,5,oe,v.x1+1.9,.12,-1.8));for(let le=0;le<4;le++)ae.add(E(.12,2.5,.12,re,v.x1+(le%2?3.6:.2),1.35,le<2?-4.2:.4));for(let le=0;le<10;le++)ae.add(E(.06,.1,5.2,re,v.x1+.15+le*.38,2.6,-1.9));ae.add(E(3.8,.12,.12,re,v.x1+1.9,2.55,-4.2),E(3.8,.12,.12,re,v.x1+1.9,2.55,.4)),X(ae,{start:14.3,dur:.9,kind:"pop",tag:gn,parent:L})}return[["LIVING",2.4,1.6],["KITCHEN",2.6,-2.2],["BEDROOM",7,-2.4],["ENTRY",6.9,2.4],[Q?"CARPORT":"GARAGE",-2.6,.1]].concat(z?[["BEDROOM 2",1.9,-7]]:[]).forEach(([ae,oe,re])=>{if((ae==="GARAGE"||ae==="CARPORT")&&!Z&&!Q)return;let le=document.createElement("canvas");le.width=256,le.height=64;let Me=le.getContext("2d");Me.fillStyle="rgba(15,28,23,.82)",Me.beginPath(),Me.roundRect(0,6,256,52,26),Me.fill(),Me.fillStyle="#eef2ea",Me.font='600 28px "IBM Plex Mono",monospace',Me.textAlign="center",Me.textBaseline="middle",Me.fillText(ae,128,33);let Ce=new Ro(new Xr({map:new pr(le),transparent:!0,depthTest:!1}));Ce.scale.set(2.8,.7,1),Ce.position.set(oe,N+1.1,re),Ce.visible=!1,Ce.renderOrder=10,L.add(Ce),Wt.push(Ce)}),L}function gi(y){if(!Pt)return;let L=Z=>rn(Z,0,1);Pt.Ifr.visible=y<.985;let P=L(y);Pt.Ili.visible=P>0,me(Pt.Ili,P);let H=L(y-1);Pt.Ifl.visible=H>0,me(Pt.Ifl,H);let z=(Z,Q)=>{Z.visible=Q>0;let pe=Z.children.length;Z.children.forEach((ge,$e)=>{let ze=L(Q*(pe+4)-$e);ge.visible=ze>0;let Ye=ze>=1?1:Math.max(.001,th(ze));ge.scale.setScalar(Ye),ge.userData.glow&&ge.traverse(Oe=>{})})};z(Pt.Ijo,L(y-2)),z(Pt.Ifu,L(y-3))}Ni(Fn),gi(Ne);let yt=0,Ht=0,ei=!1,bn=0,ns=0,is=1,_i=null;function Jo(y){l.forEach(L=>{let P=rn((yt-L.start)/L.dur,0,1),H=L.end!=null?1-rn((yt-L.end)/.7,0,1):1,z=L.o;if(P<=0||H<=0){z.visible=!1;return}z.visible=!0;let Z=Bd(P);switch(L.kind){case"fade":me(z,Z*H);break;case"pop":{let Q=Math.max(.001,th(P))*H;z.scale.set(L.sx*Q,L.sy*Q,L.sz*Q);break}case"grow":{let Q=Math.max(.001,th(P))*H;z.scale.set(L.sx*Q,L.sy*Q,L.sz*Q);break}case"rise":z.scale.y=L.sy*Math.max(.001,sa(P));break;case"drop":z.position.y=L.py+(1-sa(P))*6,me(z,Math.min(1,P*3));break;case"custom":L.fn&&L.fn(y,P),L.end!=null&&me(z,H);break}L.fn&&L.kind!=="custom"&&L.fn(y,P)})}function Gd(){if(s)return U("golden",1);let y=_i||(Fn.tod!=="auto"?Fn.tod:null);if(y&&yt>=15.9)return U(y,1);let L=Bd(rn((yt-14.6)/1.4,0,1));return U("golden",L)}let Ss=0,nh=0;function ih(y,L){let P=Gd(),H=L?1:Math.min(1,y*3.2);r&&P.sp.applyAxisAngle(new I(0,1,0),nh),["top","mid","bot","fog","hemi","hemiG","sun"].forEach(Q=>A[Q].lerp(P[Q],H)),["fogFar","hi","si","exp","li"].forEach(Q=>A[Q]+=(P[Q]-A[Q])*H),A.sp.lerp(P.sp,H),u.top.value.copy(A.top),u.mid.value.copy(A.mid),u.bot.value.copy(A.bot),a.fog.color.copy(A.fog),r||(a.fog.far=A.fogFar),u.sd.value.copy(A.sp).normalize(),u.sc.value.copy(A.sun),u.t.value+=y,m.color.copy(A.hemi),m.groundColor.copy(A.hemiG),m.intensity=A.hi,g.color.copy(A.sun),g.intensity=A.si,g.position.copy(A.sp),n.toneMappingExposure=A.exp;let z=A.li>.5&&yt>=15.3?1:0;Ss+=(z-Ss)*Math.min(1,y*(z>Ss?.45:2.5)),L&&!z&&(Ss=0);let Z=rn(A.li,0,1)*Ss;dt.forEach((Q,pe)=>{Q.material.opacity=rn(Ss*1.7-pe*.11,0,1)*rn(A.li,0,1)*.92}),p.intensity=Z*2.4,f.intensity=je?.5+2.4*rn(Ne-3,0,1):Math.max(Z*1.4,ti?1.6:0)*(ti&&Yn>=6||Z?1:0),b.intensity=f.intensity*.8}let qn=new I(0,r?3.3:s?7.6:7.5,2),sh=-.28,$o=.07,la=28,rh=0,ah=0;s&&window.addEventListener("pointermove",y=>{rh=(y.clientX/window.innerWidth-.5)*2,ah=(y.clientY/window.innerHeight-.5)*2},{passive:!0});let Ln=-.5,Gn=1.44,bs=26,ws=Ln,vr=Gn,Ts=!1,As=0,Rs=0,ca=!1,ha=0,Vn=n.domElement;Vn.addEventListener("pointerdown",y=>{if(je){Ts=!0,As=y.clientX,Rs=y.clientY,Vn.setPointerCapture(y.pointerId),Vn.style.cursor="grabbing";return}ti||s||r||(Ts=!0,As=y.clientX,Rs=y.clientY,ca=!0,ha=0,Vn.setPointerCapture(y.pointerId),Vn.style.cursor="grabbing")}),Vn.addEventListener("pointermove",y=>{if(Ts){if(je){fa=rn(fa-(y.clientX-As)*.005,-1.2,1.2),pa=rn(pa-(y.clientY-Rs)*.002,-.35,.35),As=y.clientX,Rs=y.clientY;return}ws-=(y.clientX-As)*.0075,vr=rn(vr-(y.clientY-Rs)*.0055,.45,1.5),As=y.clientX,Rs=y.clientY}});let oh=()=>{Ts=!1,Vn.style.cursor=ti?"default":"grab",ha=0};Vn.addEventListener("pointerup",oh),Vn.addEventListener("pointercancel",oh);function lh(){Ln+=(ws-Ln)*.12,Gn+=(vr-Gn)*.12,o.position.set(qn.x+bs*Math.sin(Gn)*Math.sin(Ln),qn.y+bs*Math.cos(Gn),qn.z+bs*Math.sin(Gn)*Math.cos(Ln)),o.lookAt(qn)}let Ko=600,Qo=400;function ch(){let y=i.clientWidth||600,L=i.clientHeight||400;if(Ko=y,Qo=L,n.setSize(y,L,!1),o.aspect=y/L,r)o.fov=26,la=Math.max(24,46/(y/L)),o.clearViewOffset();else if(s){let P=y/L>1.15;bs=P?y/L>1.8?30:33:38,o.setViewOffset(y,L,P?y*.03:0,P?-L*.03:-L*.02,y,L)}else bs=y/L<1.1?36:y/L<1.5?27:24,o.clearViewOffset();o.updateProjectionMatrix()}let hh=new ResizeObserver(ch);hh.observe(i),ch();let Lt=(y,L,P)=>Hx(y,L,P),Cs=[{p:Lt(-4,2,26),l:Lt(2.5,1.8,3)},{p:Lt(11,2.6,16),l:Lt(4.3,2,3.5)},{p:Lt(13,5.4,9),l:Lt(4.3,3.4,2)},{p:Lt(19,2.4,6),l:Lt(12.5,3.6,.5)},{p:Lt(15,3.2,-12),l:Lt(5,1.8,-2)},{p:Lt(4.3,23,15),l:Lt(3,0,.5),cut:!0},{p:Lt(6.95,1.6,8.8),l:Lt(6.95,1.4,4.4),open:!0},{p:Lt(6.4,1.6,3.5),l:Lt(2.5,1.2,1.8),open:!0},{p:Lt(4.7,1.6,-.4),l:Lt(1.4,1.1,-3.4),open:!0},{p:Lt(5.9,1.6,.9),l:Lt(7.4,.9,-2.8),open:!0},{p:Lt(-9,3.4,23),l:Lt(2.5,2.2,3),tod:"golden"}],ti=!1,Yn=0,ss=0,Mr=!0,jo=new I,el=new I,tl=new I,uh=new I,ua=e.onTour||null,nl=0,Vd=5.2,Wd=2.4;function Er(y){Yn=rn(y,0,Cs.length-1);let L=Cs[Yn];jo.copy(o.position);let P=new I;o.getWorldDirection(P),el.copy(o.position).addScaledVector(P,10),ss=0,nl=0,ei=!!L.cut,ns=L.open?1:0,_i=L.tod||(Fn.tod!=="auto"?Fn.tod:null),ua&&ua(Yn,kd[Yn],!0)}function Xd(){yt=Ht=16,Bn=!1,ti=!0,ca=!0,Vn.style.cursor="default";let y=Cs[0];o.position.copy(y.p),jo.copy(y.p),el.copy(y.l),Er(0),ss=1}function dh(){ti=!1,ei=!1,ns=0,_i=null,ws=Ln,vr=Gn,Vn.style.cursor="grab",ua&&ua(-1,null,!1)}let Oi=new I,qd=[new I(26,41,-116),new I(-36,1.5,-66),new I(2.6,5.2,1)],Yd=[{p:Lt(.9,1.55,3.6),l:Lt(4.8,1.2,-2.8)},{p:Lt(1,1.5,3.5),l:Lt(4.6,1.2,-3)},{p:Lt(4.7,1.55,3.7),l:Lt(1,.2,-2.6)},{p:Lt(4.4,1.6,1.8),l:Lt(2.3,.95,-4)},{p:Lt(4.6,1.6,3.7),l:Lt(.7,1,-1.6)}],Zn=4,Ps=!0,da=0,il=-1,fa=0,pa=0,sl=new I,rl=new I,al=!1,Zd=4.6;function Jd(){Is(),yt=Ht=16,Bn=!1,je=!0,ca=!0,Ne=0,Zn=0,Ps=!0,da=0,al=!1,il=-1,fa=0,pa=0,ei=!1,nt.forEach(y=>y.visible=!1),_i="day",Vn.style.cursor="grab",gi(Ne)}function fh(){je=!1,Ne=4,Zn=4,gi(4),nt.forEach(y=>y.visible=!0),_i=null,ws=Ln,vr=Gn,Vn.style.cursor="grab",tt&&tt(-1,4)}function $d(y){Ps&&(Zn<4?Zn=Math.min(4,Zn+y/Zd):(da+=y,da>7&&(da=0,Zn=0,Ne=0))),Ne+=(Zn-Ne)*Math.min(1,y*(Ps?2.2:3.5)),Math.abs(Zn-Ne)<.002&&(Ne=Zn),gi(Ne);let L=Math.min(4,Math.round(Ne));L!==il&&(il=L,tt&&tt(L,Ne)),_i=Ne>3.3?"golden":"day";let P=Yd[L];al||(sl.copy(P.p),rl.copy(P.l),al=!0),sl.lerp(P.p,Math.min(1,y*1.6)),rl.lerp(P.l,Math.min(1,y*1.6));let H=sl.clone();H.x+=Math.sin(Un*.35)*.14,H.z+=Math.cos(Un*.3)*.1;let z=new I().subVectors(rl,H),Z=z.length();z.applyAxisAngle(new I(0,1,0),fa),z.y+=pa*Z,o.position.copy(H),o.lookAt(H.clone().add(z))}let ph=!1,Bn=e.autoplay!==!1&&!t&&!e.startFinished,mh=!0,ol=0,ma=performance.now(),rs=0,Un=0,gh=e.onProgress||null,Kd=e.speed||(s?16/15:16/20);(t||e.startFinished)&&(yt=Ht=16,Bn=!1,e.tod&&(Fn.tod=e.tod));let ga=16.7,_a=0,ll=0,_h=0,xa=n.getPixelRatio();function Qd(y){let L=_a?y-_a:16.7;_a=y,!(L>250)&&(ll++,ga=ga*.94+L*.06,ll>120&&ga>27&&y-_h>1800&&xa>.75&&(_h=y,xa=Math.max(.75,xa-.25),n.setPixelRatio(xa),n.setSize(Ko,Qo,!1),ga=16.7,ll=60))}function xh(y){if(ol=requestAnimationFrame(xh),!mh||ph){_a=0;return}Qd(y);let L=Math.min(.05,(y-ma)/1e3);ma=y,Un+=L,Bn&&!ti&&(Ht<16?Ht=Math.min(16,Ht+L*Kd):s?e.loop&&(rs+=L,rs>3.5&&(rs=0,Ht=0)):(rs+=L,rs>5&&(rs=0,Ht=0,yt=0))),yt+=(Ht-yt)*Math.min(1,L*(Bn?6:4.5)),Math.abs(Ht-yt)<.002&&(yt=Ht),Ts||(ha+=L),h.constant+=((ei?2.45:100)-h.constant)*Math.min(1,L*(ei?5:3)),It&&(It.visible=!(ei&&h.constant<20)),Wt.forEach(H=>H.visible=ei&&h.constant<12),bn+=(ns-bn)*Math.min(1,L*3),Ot&&(Ot.rotation.y=-bn*1.7),is<1&&(is=Math.min(1,is+L*2.2),fn.scale.setScalar(.96+.04*sa(is))),fe.offset.set(Un*.003,Un*.0015),ue.forEach((H,z)=>{let Z=(Un*.12+z/3)%1;H.position.z=-34.2-Z*5,H.material.opacity=.55*(1-Z),H.scale.y=1+Z*1.5}),xe.forEach((H,z)=>{H.position.y=.1+Math.sin(Un*.9+z*1.7)*.12,H.rotation.z=Math.sin(Un*.7+z)*.03});let P=Fn.chimney?rn((yt-15.6)/.4,0,1):0;if(Ms.forEach((H,z)=>{let Z=(Un*.35+z/Ms.length)%1;H.visible=P>0,H.position.set(Di.x+Z*1.2+Math.sin(Un+z)*.1,Di.y+Z*3.2,Di.z),H.scale.setScalar(.5+Z*2),H.material.opacity=P*.4*(1-Z)*Math.min(1,Z*6)}),je)$d(L);else if(ti){ss=Math.min(1,ss+L/Vd);let H=zx(ss),z=Cs[Yn];tl.copy(jo).lerp(z.p,H),uh.copy(el).lerp(z.l,H),tl.y+=Math.sin(Un*.8)*.05,o.position.copy(tl),o.lookAt(uh),ss>=1&&Mr&&(nl+=L,nl>Wd&&(Yn<Cs.length-1?Er(Yn+1):Mr=!1))}else if(r){Ln+=(sh-Ln)*.18;let H=Math.cos($o);o.position.set(qn.x+la*Math.sin(Ln)*H,qn.y+la*Math.sin($o),qn.z+la*Math.cos(Ln)*H),o.lookAt(qn)}else if(s){let H=rn(window.scrollY/Math.max(1,window.innerHeight),0,1),z=-.34+Math.sin(Un*.1)*.1+rh*.08+H*.7,Z=1.43-ah*.025-H*.12,Q=bs*(1-H*.2);Ln+=(z-Ln)*.06,Gn+=(Z-Gn)*.06,o.position.set(qn.x+Q*Math.sin(Gn)*Math.sin(Ln),qn.y+Q*Math.cos(Gn),qn.z+Q*Math.sin(Gn)*Math.cos(Ln)),o.lookAt(qn)}else!t&&(!ca||ha>5)&&!Ts&&(ws+=(-.5+Math.sin(Un*.16)*.8-ws)*.02),lh();if(Jo(Un),ih(L,!1),n.render(a,o),gh&&gh(yt),e.onAnchors){let H=qd.map(z=>(Oi.copy(z).project(o),{x:(Oi.x*.5+.5)*Ko,y:(-Oi.y*.5+.5)*Qo,v:Oi.z<1&&Oi.x>-1.05&&Oi.x<1.05&&Oi.y>-1.05&&Oi.y<1.05}));e.onAnchors(H)}}Jo(0),lh(),ih(1,!0),n.render(a,o);let yh=new IntersectionObserver(y=>{mh=y[0].isIntersecting,ma=performance.now()},{threshold:.05});return yh.observe(i),ol=requestAnimationFrame(xh),{setProgress(y){Is(),Sr(),Ht=rn(y,0,16),Bn=!1},goStage(y){Is(),Sr(),Ht=rn(y*4,0,16),Bn=!1},resume(){ti||je||(Bn=!0,Ht>=16&&s&&(Ht=0))},play(){Is(),Sr(),Bn=!0,Ht>=16&&(Ht=0,yt=0)},pause(){Bn=!1},setCutView(y,L){sh=y,L!=null&&($o=L)},setSun(y){nh=y},setHeld(y){ph=!!y,ma=performance.now()},get playing(){return Bn},get progress(){return yt},getDesign(){return Object.assign({},Fn)},setDesign(y,L){Is(),Fn=Object.assign({},Fn,y),!L&&yt<15.9&&(Ht=16,yt=16,Bn=!1),Ni(Fn),gi(Ne),nt.forEach(P=>P.visible=!je),is=0,Jo(Un)},setTod(y){Fn.tod=y,yt<15.9&&(Ht=16,yt=16,Bn=!1)},buildNow(){Is(),Sr(),Ht=0,yt=0,rs=0,Bn=!0},startTour(){Sr(),Xd()},stopTour(){dh()},startInside(){Jd()},stopInside(){fh()},setInsideStage(y){Ps=!1,Zn=rn(y,0,4)},insideAutoplay(y){Ps=!!y,y&&Zn>=4&&(Zn=0,Ne=0)},get insideOn(){return je},get insideAuto(){return Ps},tourNext(){Mr=!1,Er(Yn+1)},tourPrev(){Mr=!1,Er(Yn-1)},tourAutoplay(y){Mr=y,y&&Yn>=Cs.length-1&&ss>=1&&Er(0)},get touring(){return ti},get tourIndex(){return Yn},dispose(){cancelAnimationFrame(ol),hh.disconnect(),yh.disconnect(),n.dispose(),n.domElement.remove()}};function Is(){ti&&dh()}function Sr(){je&&fh()}}return cf(Vx);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
