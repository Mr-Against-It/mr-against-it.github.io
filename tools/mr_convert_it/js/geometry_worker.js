(function(){class Vector3{constructor(x=0,y=0,z=0){this.x=x;this.y=y;this.z=z;}
set(x,y,z){this.x=x;this.y=y;this.z=z;return this;}
copy(v){this.x=v.x;this.y=v.y;this.z=v.z;return this;}
clone(){return new Vector3(this.x,this.y,this.z);}
sub(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;return this;}
subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this;}
cross(v){const ax=this.x,ay=this.y,az=this.z;this.x=ay*v.z-az*v.y;this.y=az*v.x-ax*v.z;this.z=ax*v.y-ay*v.x;return this;}
crossVectors(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this;}
dot(v){return this.x*v.x+this.y*v.y+this.z*v.z;}
length(){return Math.hypot(this.x,this.y,this.z);}
normalize(){const l=this.length()||1;this.x/=l;this.y/=l;this.z/=l;return this;}
fromBufferAttribute(attr,idx){this.x=attr.getX(idx);this.y=attr.getY(idx);this.z=attr.getZ(idx);return this;}}
class Float32BufferAttribute{constructor(_0xc202,itemSize){this.array=_0xc202 instanceof Float32Array?_0xc202:new Float32Array(_0xc202);this.itemSize=itemSize;this.count=Math.floor(this.array.length/itemSize);}
getX(i){return this.array[i*this.itemSize];}
getY(i){return this.array[i*this.itemSize+1];}
getZ(i){return this.array[i*this.itemSize+2];}
clone(){return new Float32BufferAttribute(new Float32Array(this.array),this.itemSize);}}
class IndexAttribute{constructor(_0xc202){this.array=_0xc202 instanceof Uint32Array?_0xc202:new Uint32Array(_0xc202);this.count=this.array.length;}
getX(i){return this.array[i];}
clone(){return new IndexAttribute(new Uint32Array(this.array));}}
class BufferGeometry{constructor(){this.attributes={};this.index=null;this.boundingBox=null;this.boundingSphere=null;this.userData={};}
setAttribute(name,attr){this.attributes[name]=attr;return this;}
setIndex(_0xc202){if(!_0xc202){this.index=null;return this;}
this.index=_0xc202 instanceof IndexAttribute?_0xc202:new IndexAttribute(_0xc202);return this;}
computeVertexNormals(){const pos=this.attributes.position;if(!pos)return;const _0x779a=new Float32Array(pos.count*3);const idx=this.index;const _0x6ae9=idx?Math.floor(idx.count/3):Math.floor(pos.count/3);const _0x7ed2=pos.array;const _0x8a23=idx?idx.array:null;for(let t=0;t<_0x6ae9;t++){const _0xb275=t*3;const _0xfc2b=_0x8a23?_0x8a23[_0xb275]:_0xb275;const _0x9089=_0x8a23?_0x8a23[_0xb275+1]:_0xb275+1;const _0xa51a=_0x8a23?_0x8a23[_0xb275+2]:_0xb275+2;const ax=_0x7ed2[_0xfc2b*3],ay=_0x7ed2[_0xfc2b*3+1],az=_0x7ed2[_0xfc2b*3+2];const _0x8ecb=_0x7ed2[_0x9089*3],by=_0x7ed2[_0x9089*3+1],bz=_0x7ed2[_0x9089*3+2];const cx=_0x7ed2[_0xa51a*3],cy=_0x7ed2[_0xa51a*3+1],cz=_0x7ed2[_0xa51a*3+2];const _0x64a9=cx-_0x8ecb,cby=cy-by,cbz=cz-bz;const _0x90d2=ax-_0x8ecb,aby=ay-by,abz=az-bz;const _0x3cb2=cby*abz-cbz*aby;const _0x15a8=cbz*_0x90d2-_0x64a9*abz;const _0x016f=_0x64a9*aby-cby*_0x90d2;_0x779a[_0xfc2b*3]+=_0x3cb2;_0x779a[_0xfc2b*3+1]+=_0x15a8;_0x779a[_0xfc2b*3+2]+=_0x016f;_0x779a[_0x9089*3]+=_0x3cb2;_0x779a[_0x9089*3+1]+=_0x15a8;_0x779a[_0x9089*3+2]+=_0x016f;_0x779a[_0xa51a*3]+=_0x3cb2;_0x779a[_0xa51a*3+1]+=_0x15a8;_0x779a[_0xa51a*3+2]+=_0x016f;}
for(let i=0;i<pos.count;i++){const _0x5493=i*3;const l=Math.hypot(_0x779a[_0x5493],_0x779a[_0x5493+1],_0x779a[_0x5493+2])||1;_0x779a[_0x5493]/=l;_0x779a[_0x5493+1]/=l;_0x779a[_0x5493+2]/=l;}
this.attributes.normal=new Float32BufferAttribute(_0x779a,3);}
computeBoundingBox(){const pos=this.attributes.position;if(!pos||pos.count===0){this.boundingBox={min:new Vector3(),max:new Vector3()};return;}
const _0xc202=pos.array;let _0x851a=Infinity,minY=Infinity,minZ=Infinity;let _0x7c5a=-Infinity,maxY=-Infinity,maxZ=-Infinity;for(let i=0;i<_0xc202.length;i+=3){const x=_0xc202[i],y=_0xc202[i+1],z=_0xc202[i+2];if(x<_0x851a)_0x851a=x;if(x>_0x7c5a)_0x7c5a=x;if(y<minY)minY=y;if(y>maxY)maxY=y;if(z<minZ)minZ=z;if(z>maxZ)maxZ=z;}
this.boundingBox={min:new Vector3(_0x851a,minY,minZ),max:new Vector3(_0x7c5a,maxY,maxZ)};}
computeBoundingSphere(){if(!this.boundingBox)this.computeBoundingBox();const min=this.boundingBox.min,max=this.boundingBox.max;const cx=0.5*(min.x+max.x),cy=0.5*(min.y+max.y),cz=0.5*(min.z+max.z);this.boundingSphere={center:new Vector3(cx,cy,cz),radius:0.5*Math.hypot(max.x-min.x,max.y-min.y,max.z-min.z)};}
clone(){const g=new BufferGeometry();Object.keys(this.attributes).forEach(k=>{g.attributes[k]=this.attributes[k].clone();});if(this.index)g.index=this.index.clone();g.userData=Object.assign({},this.userData);return g;}
dispose(){}}
self.THREE={Vector3,Float32BufferAttribute,BufferGeometry};self.yieldToUI=async function(){};self.loadedBodies=[];self.showToast=function(){};self.showLoadingOverlay=function(){};self.updateLoadingProgress=function(){};importScripts('mesh_topology.js','mesh_repair.js','mesh_quality.js','pointcloud_mesher.js','app.js');function deserializeGeometry(data){const _0x8dc4=new THREE.BufferGeometry();if(data.positions)_0x8dc4.setAttribute('position',new THREE.Float32BufferAttribute(data.positions,3));if(data.normals)_0x8dc4.setAttribute('normal',new THREE.Float32BufferAttribute(data.normals,3));if(data.uvs)_0x8dc4.setAttribute('uv',new THREE.Float32BufferAttribute(data.uvs,2));if(data.colors)_0x8dc4.setAttribute('color',new THREE.Float32BufferAttribute(data.colors,data.colorItemSize||3));if(data.indices)_0x8dc4.setIndex(data.indices);return _0x8dc4;}
function serializeGeometry(_0x8dc4,_0x8662){const _0x379b={positions:null,normals:null,uvs:null,colors:null,colorItemSize:3,indices:null,userData:_0x8dc4&&_0x8dc4.userData?_0x8dc4.userData:{}};if(!_0x8dc4||!_0x8dc4.attributes||!_0x8dc4.attributes.position)return _0x379b;const pos=new Float32Array(_0x8dc4.attributes.position.array);_0x379b.positions=pos;_0x8662.push(pos.buffer);if(_0x8dc4.attributes.normal){const n=new Float32Array(_0x8dc4.attributes.normal.array);_0x379b.normals=n;_0x8662.push(n.buffer);}
if(_0x8dc4.attributes.uv){const _0x2719=new Float32Array(_0x8dc4.attributes.uv.array);_0x379b.uvs=_0x2719;_0x8662.push(_0x2719.buffer);}
if(_0x8dc4.attributes.color){const c=new Float32Array(_0x8dc4.attributes.color.array);_0x379b.colors=c;_0x379b.colorItemSize=_0x8dc4.attributes.color.itemSize||3;_0x8662.push(c.buffer);}
if(_0x8dc4.index){const idx=new Uint32Array(_0x8dc4.index.array);_0x379b.indices=idx;_0x8662.push(idx.buffer);}
return _0x379b;}
self.onmessage=async function(evt){const _0x54ce=evt.data||{};const jobId=_0x54ce.jobId;const _0x6c71=_0x54ce.taskType;const _0x9c02=_0x54ce.payload||{};const _0xfaa2=(pct,text)=>{self.postMessage({type:'progress',jobId,pct,text});};try{const _0x6023=deserializeGeometry(_0x9c02.geometry||{});let _0xbbc1=null;let meta={};if(_0x6c71==='repair-mesh'){const res=runRepairAlgorithmOnMeshGeometry(_0x6023,_0x9c02.algorithm,_0x9c02.eps);_0xbbc1=res.geometry;meta={summary:res.summary};}else if(_0x6c71==='mesh-quality'){const res=runQualityAlgorithmOnMeshGeometry(_0x6023,_0x9c02.algorithm,_0x9c02.factor,_0x9c02.preserveCreases);_0xbbc1=res.geometry;}else if(_0x6c71==='surface-remesh'){const res=await runRemeshAlgorithmOnMeshGeometry(_0x6023,_0x9c02.algorithm,_0x9c02.settings,_0xfaa2);_0xbbc1=res.geometry;meta={stats:res.stats};}else if(_0x6c71==='pointcloud-mesh'){const res=await runPointCloudToMeshOnGeometry(_0x6023,_0x9c02.algorithm,_0x9c02.settings,_0xfaa2);_0xbbc1=res.geometry;meta={inputPoints:res.inputPoints};}else{throw new Error(`Unknown local worker task: ${_0x6c71}`);}
const _0x8662=[];const _0x9643=serializeGeometry(_0xbbc1,_0x8662);self.postMessage({type:'result',jobId,geometry:_0x9643,meta},_0x8662);}catch(err){self.postMessage({type:'error',jobId,error:err&&err.message?err.message:String(err)});}};})();