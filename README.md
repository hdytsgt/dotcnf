# dotcnf

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