# jismesh-es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Utilities for the Japanese regional grid system defined in Japanese Industrial Standards (JIS X 0410).

This is an ECMAScript module version of the [jismesh-js](https://github.com/yoshizow/jismesh-js) project, which is a JavaScript port of the Python [jismesh](https://pypi.org/project/jismesh/) package.

## Supported Mesh Codes

- 1st (Standard Mesh 80km)
- 40x (Extended Mesh 40km) 
- 20x (Extended Mesh 20km)
- 16x (Extended Mesh 16km)
- 2nd (Standard Mesh 10km)
- 8x (Extended Mesh 8km)
- 5x (Extended Mesh 5km)
- 4x (Extended Mesh 4km)
- 2.5x (Extended Mesh 2.5km)
- 2x (Extended Mesh 2km)
- 3rd (Standard Mesh 1km)
- 4th (Divided Mesh 500m)
- 5th (Divided Mesh 250m)
- 6th (Divided Mesh 125m)

## Usage

### Get Mesh Code from Latitude and Longitude

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

// Get the mesh code from latitude and longitude.
const meshCode = jismesh.toMeshCode(35.658581, 139.745433, 3);
console.log(meshCode);  // => 53393599
```

### Get Mesh Level from Mesh Code

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

const meshLevel = jismesh.toMeshLevel('53393599');
console.log(meshLevel);  // => 3
```

### Get Latitude and Longitude from Mesh Code

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

// Get the south-west corner latitude and longitude.
const [latSW, lonSW] = jismesh.toMeshPoint('53393599', 0, 0);
console.log(latSW, lonSW);  // => 35.65833333333333 139.7375

// Get the north-east corner latitude and longitude. 
const [latNE, lonNE] = jismesh.toMeshPoint('53393599', 1, 1);
console.log(latNE, lonNE);  // => 35.666666666666664 139.75

// Get the center latitude and longitude.
const [latC, lonC] = jismesh.toMeshPoint('53393599', 0.5, 0.5);
console.log(latC, lonC);  // => 35.6625 139.74375

// Get the latitude and longitude of the center of the east-adjacent mesh.
const [latEastNeighborC, lonEastNeighborC] = jismesh.toMeshPoint('53393599', 0.5, 1.5);
console.log(latEastNeighborC, lonEastNeighborC);  // => 35.6625 139.75625000000002
```

## License

MIT License — see [LICENSE](LICENSE).