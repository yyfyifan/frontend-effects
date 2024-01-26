# README

## 1. typeof operator

```javascript
// 简单数据类型： undefined, null, boolean, number, string, symbol
// 复杂数据类型： 数组、函数、对象
typeof 123 // "number"
typeof 3.14 // "number"
typeof NaN // "number"
typeof Infinity // "number"
typeof undefined // "undefined"
typeof Symbol("") // "symbol"
typeof true // "boolean"
typeof false // "boolean"
typeof "" // "string"
typeof '' // "string"

// 函数类型
typeof (() => {}) // "function"
typeof function() {} // "function"
typeof Number // "function"
typeof Symbol // "function"
typeof new Function() // "function"

// 对象
typeof null // "object"
typeof [] // "object"
typeof {} // "object"
typeof new Array() // "object"
typeof new Map() // "object"
typeof new Error() // "object"
typeof new String() // "object"
typeof new Number() // "object"
typeof new Date() // "object"
typeof new Object() // "object"

// 比较
typeof new Number(123) // "object"
typeof Number("123") // "number"
```
