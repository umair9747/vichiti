const nodePortScanner = require('../node-port-scanner.js');

it('check local response', async () => {
  const data = await nodePortScanner('127.0.0.1', []);
  expect(data).toHaveProperty('host', '127.0.0.1');
  expect(data).toHaveProperty('ports');
}, 10000);

it('check remote response', async () => {
  const data = await nodePortScanner('github.com', [21, 22, 23, 25, 80, 110, 123, 443]);
  expect(data).toHaveProperty('host', 'github.com');
  expect(data).toHaveProperty('ports');
}, 10000);