# jismesh-es

Utilities for the Japanese regional grid system defined in Japanese Industrial Standards (JIS X 0410).

This is an ECMAScript module version of the [jismesh-js](https://github.com/yoshizow/jismesh-js) project, which is a JavaScript port of the Python [jismesh](https://pypi.org/project/jismesh/) package.

## Supported Mesh Codes

- 1st (Standard Mesh 80km): 1
- 40x (Extended Mesh 40km): 40000
- 20x (Extended Mesh 20km): 20000
- 16x (Extended Mesh 16km): 16000
- 2nd (Standard Mesh 10km): 2
- 8x (Extended Mesh 8km): 8000
- 5x (Extended Mesh 5km): 5000
- 4x (Extended Mesh 4km): 4000
- 2.5x (Extended Mesh 2.5km): 2500
- 2x (Extended Mesh 2km): 2000
- 3rd (Standard Mesh 1km): 3
- 4th (Divided Mesh 500m): 4
- 5th (Divided Mesh 250m): 5
- 6th (Divided Mesh 125m): 6

## Usage

### Get Mesh Code from Latitude and Longitude

Specify the geodetic latitude and longitude to convert to a mesh code, and the mesh level to convert to.

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

// Get the mesh code from latitude and longitude.
const meshCode = jismesh.toMeshCode(35.658581, 139.745433, 3);
console.log(meshCode);  // => 53393599
```

### Get Mesh Level from Mesh Code

Determine the mesh level from the given mesh code.

```javascript
import jismesh from "https://code4fukui.github.io/jismesh-es/index.js";

const meshLevel = jismesh.toMeshLevel('53393599');
console.log(meshLevel);  // => 3
```

### Get Latitude and Longitude from Mesh Code

Specify the mesh code, and the relative position within the mesh (south-west as 0,0, north-east as 1,1, center as 0.5,0.5, etc.) to get the latitude and longitude.

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

MIT