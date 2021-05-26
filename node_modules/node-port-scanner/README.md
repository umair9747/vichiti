# node-port-scanner

[![npm](https://img.shields.io/npm/v/node-port-scanner.svg)](https://www.npmjs.com/package/node-port-scanner)

[![node-port-scanner](https://circleci.com/gh/beaudurrant/node-port-scanner.svg?style=svg)](https://www.npmjs.com/package/node-port-scanner)

Scans ports to see if they are open or closed. 

After calling nodePortScanner, ports are checked in order one after the previous is completed.

Multiple calls can be made and will run in parallel.

## Install

```bash
npm i node-port-scanner
```

## Usage

```sh
npm run usage
```

```javascript
const nodePortScanner = require('node-port-scanner');

// scan local common ports
nodePortScanner('127.0.0.1', [21, 22, 23, 25, 80, 110, 123, 443])
  .then(results => {  
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });

// scan remote common ports
nodePortScanner('github.com', [21, 22, 23, 25, 80, 110, 123, 443])
  .then(results => {  
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });

// scan all local ports - not recommended on remote hosts
async function checkLocalPorts () {
  
  const allPorts = nodePortScanner('127.0.0.1', []);
  console.log(await allPorts);
  
}
checkLocalPorts();
```

## Sample Response
```
{
  host: 'github.com',
  ports: { 
    open: [ 22, 80, 443 ], 
    closed: [ 21, 23, 25, 110, 123 ] 
  }
}
```

## Test (Jest)

```sh
npm test
```

## License (MIT)

[MIT](LICENSE)