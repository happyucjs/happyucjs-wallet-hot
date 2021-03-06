# HappyUC Wallet 

## HappyUC wallet with ERC20 support / web wallet 

![happyucjs-wallet-hot happyuc wallet preview](https://happyucjs.github.io/happyucjs-wallet-hot/docs/images/happyucjs-wallet-hot.PNG)

https://go.happyuc.org:1445/

#### Work in progress

##### Created by Paul Laux, [@dr_laux](https://twitter.com/dr_laux) for announcements

### Core components

- [ ] [LightWallet V3](https://github.com/happyucjs/happyucjs-lightwallet) 
- [ ] [Webu.js](https://github.com/happyuc-project/webu.js/) HappyUC JavaScript API
- [ ] [React-boilerplate](https://github.com/react-boilerplate/react-boilerplate) as a wrapper of React JS, Redux, Saga, Reselect, ImmutableJS and more
- [ ] [Ant Design](https://github.com/ant-design/ant-design) React js components
- [ ] [Webpack 3](https://github.com/webpack/webpack) - A bundler for javascript and friends.
- [ ] Many others, See [package.json](https://github.com/happyucjs/happyucjs-wallet-hot/blob/master/package.json)


### API Providers

- [ ] [Infura.io](https://infura.io/) as JsonRPC provider
- [ ] [Coinmarketcap](https://coinmarketcap.com/) as exchange rates provider


### Features

- [x] Encryption keys generated from seed and stored in the browser.
- [x] Network selector including local and remote rpc 
- [x] Huc balance auto converted to btc/usd/euro.
- [x] Responsive design for mobile support.


#### ERC20 wallet and native token support
Huc-hot-wallet supports erc20 tokens. From the user side, the tokens will have the same look and feel like Huc. 
To interact with contracts, we use 
```javascript
webu.huc.contract(erc20Abi)
```
Like all other network communication in the wallet, calls to erc20 contracts are done inside `app/containers/Header/saga.js`.
ERC20 Abi can be imported using 
```javascript
import { erc20Abi } from 'utils/contracts/abi';
```




### Todo

- [x] ERC20 native token support
- [x] Local storage
- [ ] Tests
- [ ] Event log
- [ ] CI for development and production
- [ ] External security audit
- [ ] Upgrade to react 16
- [ ] Upgrade Enzyme 3


### Development

4 Major containers were created:

- Homepage container - all the actions related to keystore, including manipulation and usage.

- Header container - all the activities related to network communication / webu API.

- SendTo container - state and actions related to sendTo modal, actual checks and sending is happening in header container.

![happyucjs-wallet-hot send token preview](https://happyucjs.github.io/happyucjs-wallet-hot/docs/images/happyucjs-wallet-hot-sendToken.jpg)


- TokenChooser container - allows the user to select which erc20 token will be used from a pre-defined list. The list of supported tokens can be found in `app/containers/TokenChooser/token-lists.js`. Each network requires a different list.

![happyucjs-wallet-hot erc20 token chooser preview](https://happyucjs.github.io/happyucjs-wallet-hot/docs/images/happyucjs-wallet-hot-erc20-tokenChooser.jpg)



#### npm scripts for huc-hot wallet:

`npm run build:dll` to build webpack DLL required for development.

`npm run start` to start development mode. Go to http://localhost:3001 - changes will be reflected in realtime using hot module reloading.

`npm run build` to create bundle for publishing

`npm run generate` to create new components / containers using the generator.

For more documentation regarding the react setup see [react-boiledplate docs](https://go.happyuc.org:1445/docs/react-boilerplate/) here or in the official repo.


After build, webpack monitor will generate stats about bundle size:


![happyucjs-wallet-hot webpack-monitor](https://happyucjs.github.io/happyucjs-wallet-hot/docs/images/webpack-monitor.JPG)

## License

This project is licensed under the MIT license, Copyright (c) 2017 Paul Laux For more information see `LICENSE.md`.
