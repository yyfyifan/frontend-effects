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
* 鼠标事件中几个位置的区别：
  在JavaScript中，clientX/Y、pageX/Y、offsetX/Y和screenX/Y是与鼠标事件相关的属性，它们提供了鼠标在不同坐标系中的位置信息。这些属性通常在处理鼠标事件时非常有用，比如点击、拖动等。下面是每一对属性的详细区别：

    1. clientX 和 clientY
    定义：clientX和clientY属性表示鼠标事件发生时，鼠标指针相对于浏览器可视区域（视窗）的位置，不包括工具栏和滚动条。
    用途：它们常用于获取鼠标在当前视窗中的位置，不随页面滚动而改变。
    2. pageX 和 pageY
    定义：pageX和pageY属性表示鼠标事件发生时，鼠标指针相对于整个页面的位置，包括了滚动条滚动的距离。
    用途：当需要获取鼠标相对于整个文档的位置时使用，它们的值会随着页面的滚动而改变。
    3. offsetX 和 offsetY
    定义：offsetX和offsetY属性表示鼠标事件发生时，鼠标指针相对于事件目标元素的边界的位置。
    用途：这对属性用于获取鼠标相对于目标元素（如按钮、链接等）的内部位置，非常适用于需要精确控制元素内部交互的场景。
    4. screenX 和 screenY
    定义：screenX和screenY属性表示鼠标事件发生时，鼠标指针相对于用户屏幕的位置。
    用途：这对属性用于获取鼠标在整个用户屏幕上的位置，包括所有显示器和窗口外的区域。

  总结：
  * clientX/Y用于获取视窗中的位置。
  * pageX/Y用于获取整个页面中的位置。
  * offsetX/Y用于获取事件目标元素内的位置。
  * screenX/Y用于获取屏幕上的位置。
    这些属性在处理鼠标事件，尤其是涉及到元素位置和用户交互时非常重要。
