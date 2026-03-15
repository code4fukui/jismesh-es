# jismesh-es

日本の地域メッシュシステム(JIS X 0410)のユーティリティを提供するJavaScriptライブラリです。

Python版の[jismeshパッケージ](https://pypi.org/project/jismesh/)をJavaScriptにポーティングし、 ESモジュールとして公開しています。

## 機能

- 緯度経度から地域メッシュコードの取得
- メッシュコードから次数の取得
- メッシュコードから緯度経度の取得

## 対応地域メッシュコード

- 1次(標準地域メッシュ 80km四方)
- 40倍(拡張地域メッシュ 40km四方)
- 20倍(拡張地域メッシュ 20km四方)
- 16倍(拡張地域メッシュ 16km四方) 
- 2次(標準地域メッシュ 10km四方)
- 8倍(拡張地域メッシュ 8km四方)
- 5倍(拡張地域メッシュ 5km四方)
- 4倍(拡張地域メッシュ 4km四方)
- 2.5倍(拡張地域メッシュ 2.5km四方)
- 2倍(拡張地域メッシュ 2km四方)
- 3次(標準地域メッシュ 1km四方)
- 4次(分割地域メッシュ 500m四方)
- 5次(分割地域メッシュ 250m四方)
- 6次(分割地域メッシュ 125m四方)

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

MITライセンスです。