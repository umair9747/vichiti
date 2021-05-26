const nodePortScanner = require('./node-port-scanner.js');

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
