<h1 align="center">
  <img align="center" src="https://avatars1.githubusercontent.com/u/49195576?s=400&v=4" width="400"/>
</h1>



## What is SonicxWeb?



SonicxWeb aims to deliver a unified, seamless development experience influenced by Ethereum's [Web3](https://github.com/ethereum/web3.js/) implementation. We have taken the core ideas and expanded upon it to unlock the functionality of Sonicx's unique feature set along with offering new tools for integrating DApps in the browser, Node.js and IoT devices.

## Compatibility
- Version built for Node.js v6 and above
- Version built for browsers with more than 0.25% market share

You can access either version specifically from the [dist](dist) folder.

SonicxWeb is also compatible with frontend frameworks such as:
- Angular
- React
- Vue.

You can also ship SonicxWeb in a Chrome extension.

## Installation

### Node.js
```bash
npm install sonicxweb
```
or
```bash
yarn add sonicxweb
```

### Browser
First, don't use the release section of this repo, it has not updated in a long time.

Then easiest way to use SonicxWeb in a browser is to install it as above and copy the dist file to your working folder. For example:
```
cp node_modules/sonicxweb/dist/SonicxWeb.js ./js/sonicxweb.js
```
so that you can call it in your HTML page as
```
<script src="./js/sonicxweb.js"><script>
```



## Creating an Instance

First off, in your javascript file, define SonicxWeb:

```js
const SonicxWeb = require('sonicxweb')
```

When you instantiate SonicxWeb you can define

* fullNode
* solidityNode
* eventServer
* privateKey


```js
Usage:
const sonicxWeb = new SonicxWeb(fullNode, solidityNode, eventServer, privateKey)

```


If you are using different servers for anything, you can do
```js
const sonicxWeb = new SonicxWeb({
    fullNode: 'https://fullnode.sonicxhub.com',
    solidityNode: 'https://solnode.sonicxhub.com'
    eventServer: 'https://event.sonicxhub.com/',
    privateKey: 'your private key'
  }
)
```


## Contributions

In order to contribute you can

* fork this repo and clone it locally
* install the dependencies — `npm i`
* do your changes to the code
* build the SonicxWeb dist files — `npm run build`
* push your changes and open a pull request


## Licence

SonicxWeb is distributed under a MIT licence.

