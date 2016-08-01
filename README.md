# array flatten

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Just a simple function to flatten an Array. Works well in both, the browser & node.

### install

```bash
npm i -S flat-array
```

### and use it

```javascript
import flattenArray from 'flat-array'
// OR
const flattenArray = require('flat-array')

const abcde = flattenArray(['a', ['b', 'c'], 'd', ['e']])
console.log(abcde) // ['a', 'b', 'c', 'd', 'e']

// NOTE: the result is shadow flatted, only the first lvl arrays are flattened
const fooBar = flattenArray(['f', ['o', 'o'], ['b', ['a', 'r']]])
console.log(fooBar) // ['f', 'o', 'o', 'b', ['a', 'r']]
```

*NOTE*: it requires the [rest operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) to work. If you are not transpiling your code with Babel's `es2015` preset (to work on the browser) or are using a node version older than 5, you will have to use the compiled version: `require('flat-array/dist/flat-array)'`.

### behavior

- `flattenArray` is a pure function, it does not mutate the provided array.

### FAQ

- *Why such small module?*: [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
