// 实现自己的myCall方法，功能等同于call方法

// 要让所有函数都能够使用到myCall, 需要将其定义在prototype上
Function.prototype.myCall = function (thisArg, ...args) {
  const symbolProp = Symbol();
  // 将调用函数赋值给 thisArg的一个属性上.
  // 使用Symbol是为了防止和已有的“string”类型的属性重名，导致一不小心覆盖了原数据
  thisArg[symbolProp] = this; // this就代表着当前函数
  const result = thisArg[symbolProp](...args); // 这样调用时就改变了this
  delete thisArg[symbolProp]; // 删除添加的属性，避免污染
  return result;
};
