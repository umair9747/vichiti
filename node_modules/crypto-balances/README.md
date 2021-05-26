# Crypto-balances
[![Join the chat at https://gitter.im/ValeryLitvin/crypto-balances](https://badges.gitter.im/ValeryLitvin/crypto-balances.svg)](https://gitter.im/ValeryLitvin/crypto-balances?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/crypto-balances.svg)](https://badge.fury.io/js/crypto-balances)
[![Code Climate](https://codeclimate.com/github/ValeryLitvin/crypto-balances/badges/gpa.svg)](https://codeclimate.com/github/ValeryLitvin/crypto-balances)
[![Issue Count](https://codeclimate.com/github/ValeryLitvin/crypto-balances/badges/issue_count.svg)](https://codeclimate.com/github/ValeryLitvin/crypto-balances)

Easy check addresses balances of various crypto tokens. Script automaticaly recognize a protocol by address and return balance of tokens associated with it.

On repo project folder type:
```
~ » npm run balance 0xfc30a6c6d1d61f0027556ed25a670345ab39d0cb

  { status: 'success',
  service: 'http://api.etherscan.io',
  address: '0xfc30a6c6d1d61f0027556ed25a670345ab39d0cb',
  asset: 'ETH',
  quantity: '0.29' }

  0.29 ETH
```

## Node.js

```
var balance = require('crypto-balances');
balance("0xfc30a6c6d1d61f0027556ed25a670345ab39d0cb", function(error, result) {
  console.log(result);
});

[{"quantity":"0.29","asset":"ETH"}]
```

## Supported Protocols

- Using `https://chain.so`: Bitcoin, Litecoin
- Using `http://dogechain.info`: Dogecoin
- Using `http://etherscan.io`: Ethereum
- Using `http://blockscan.com`: Counterparty
- Using `https://api.coinprism.com`: Open Assets Protocol
- Using `https://api.ripple.com`: Ripple and Ripple based IOUs
- Using `http://omnichest.info`: Omni
- Using `http://jnxt.org`: NXT and NXT AE (on port 7876)
- Using `http://bigalice3.nem.ninja`: NEM (on port 7890)
- Using `http://node.cyber.fund`: Bitshares with account names (on port 8055)
- Using `http://node.cyber.fund`: Factom (on port 8077)
- Using `https://chainz.cryptoid.info`: Dash, PeerCoin, Blackcoin, Grantcoin, CapriCoin, Rubycoin

## Installation

```
~ » git clone https://github.com/ValeryLitvin/crypto-balances
~ » cd crypto-balances
~ » make init
~ » make build
```

## Tests
```
~ » npm test
```

## Next Milestone
- Move all urls to config file

## License

Under MIT License

## Contributing
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request
