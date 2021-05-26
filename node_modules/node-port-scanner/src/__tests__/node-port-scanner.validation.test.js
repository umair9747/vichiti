const nodePortScanner = require('../node-port-scanner.js');

it('require host', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('', [21, 22, 25, 80, 110, 123, 443]);
  } catch (e) {
    expect(e).toEqual({ 'error' : 'host is required' });
  }
});
 
it('require ports', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('127.0.0.1', '');
  } catch (e) {
    expect(e).toEqual({ 'error' : 'ports is required' });
  }
});

it('validate ports is an array', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('127.0.0.1', 'not an array!');
  } catch (e) {
    expect(e).toEqual({ 'error' : 'ports must be an array' });
  }
});

it('validate ports are integers', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('127.0.0.1', ['a', 'b', 'c']);
  } catch (e) {
    expect(e).toEqual({ 'error' : 'port must be an integer' });
  }
});

it('validate ports in range', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('127.0.0.1', [0]);
  } catch (e) {
    expect(e).toEqual({ 'error' : 'port must be in range [1-65535]' });
  }
});

it('validate ports in range', async () => {
  expect.assertions(1);
  try {
    await nodePortScanner('127.0.0.1', [65536]);
  } catch (e) {
    expect(e).toEqual({ 'error' : 'port must be in range [1-65535]' });
  }
});