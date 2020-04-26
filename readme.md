# @bemoje/arr-del

Remove an element in place from an array, if present.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-del" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-del" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-del" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-del.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-del" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-del.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-del" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-del" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-del/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-del" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-del
npm install --save @bemoje/arr-del
npm install --save-dev @bemoje/arr-del
```

## Usage

```javascript
import arrDel from '@bemoje/arr-del'

const arr = ['a', 'b', 'c']

arrDel(arr, 'd')
//=> ['a', 'b', 'c']

arrDel(arr, 'b')
//=> ['a', 'c']

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrDel

Remove an element in place from an array, if present.

##### Parameters

-   `arr` **[Array][3]** The array

-   `element` **any** The element to remove

##### Returns
**[Array][3]** The array after removal in space.

[1]: #arrdel

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array