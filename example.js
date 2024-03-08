import jismesh from "./index.js";

// 緯度経度からメッシュコードを求める。
const meshCode = jismesh.toMeshCode(35.658581, 139.745433, 3);
console.log(meshCode);  // => 53393599
