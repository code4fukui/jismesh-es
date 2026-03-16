# jismesh-es

日本の地域メッシュシステム（JIS X 0410）のユーティリティを提供する JavaScript ライブラリです。

Python 版の [jismesh パッケージ](https://pypi.org/project/jismesh/) をポーティングし、ECMAScript モジュールとして公開しています。

## 対応メッシュコード

- 1次（標準メッシュ 80km）
- 40倍（拡張メッシュ 40km）
- 20倍（拡張メッシュ 20km）
- 16倍（拡張メッシュ 16km）
- 2次（標準メッシュ 10km）
- 8倍（拡張メッシュ 8km）
- 5倍（拡張メッシュ 5km）
- 4倍（拡張メッシュ 4km）
- 2.5倍（拡張メッシュ 2.5km）
- 2倍（拡張メッシュ 2km）
- 3次（標準メッシュ 1km）
- 4次（分割メッシュ 500m）
- 5次（分割メッシュ 250m）
- 6次（分割メッシュ 125m）

## 使い方

### 緯度経度からメッシュコードを取得

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

const meshCode = jismesh.toMeshCode(35.658581, 139.745433, 3);
console.log(meshCode);  // => 53393599
```

### メッシュコードから次数を取得

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

const meshLevel = jismesh.toMeshLevel('53393599');
console.log(meshLevel);  // => 3
```

### メッシュコードから緯度経度を取得

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

// 南西端の緯度経度
const [latSW, lonSW] = jismesh.toMeshPoint('53393599', 0, 0);
console.log(latSW, lonSW);  // => 35.65833333333333 139.7375

// 北東端の緯度経度
const [latNE, lonNE] = jismesh.toMeshPoint('53393599', 1, 1);
console.log(latNE, lonNE);  // => 35.666666666666664 139.75

// 中心点の緯度経度
const [latC, lonC] = jismesh.toMeshPoint('53393599', 0.5, 0.5);
console.log(latC, lonC);  // => 35.6625 139.74375
```

## ライセンス

MITライセンス