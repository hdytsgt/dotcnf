# dotcnf

[![npm](https://img.shields.io/npm/v/dotcnf.svg?maxAge=2592000)](https://www.npmjs.com/package/dotcnf)
[![npm](https://img.shields.io/npm/dt/dotcnf.svg?maxAge=2592000)](https://www.npmjs.com/package/dotcnf)
[![npm](https://img.shields.io/npm/l/dotcnf.svg?maxAge=2592000)](https://www.npmjs.com/package/dotcnf)

Deadly simple environment variables for Node JS


## Installation

`npm install --save dotcnf `



## Usage

Create `.cnf` file in your project root directory and put your configuration with key=pair and new-line separated. Example : 

```
APIKEY=zzz
APISECRET=yyy
```

Then in your app :

```javascript
const config = require( 'dotcnf' )();
// Access config data
console.log( config.APIKEY );
console.log( config.APISECRET );
```

In case your .cnf file is not in your project root directory, you can pass parameter when require the file. 

`const config = require( 'dotcnf' )( '../../.cnf' );`



## License

[MIT](LICENSE)