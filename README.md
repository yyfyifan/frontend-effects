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

## 2. Understanding Some CSS Properties

* `box-shadow`: <https://www.youtube.com/watch?v=jEuvbVVkcT0>
* `text-shadow`: <https://www.youtube.com/watch?v=0nP67G-ZiWQ>
* `border-radius`:
  * <https://www.youtube.com/watch?v=4ALLynsZ0u0>
  * <https://www.bilibili.com/video/BV1sG411176D/?spm_id_from=333.337.search-card.all.click>

## 3. Web API

* Intersection Observer: <https://www.youtube.com/watch?v=2IbRtjez6ag&pp=ygUVaW50ZXJzZWN0aW9uIG9ic2VydmVy>
