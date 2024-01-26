// 实现自己的myApply方法，功能等同于apply方法

// 要让所有函数都能够使用到myApply, 需要将其定义在prototype上
Function.prototype.myApply = function (thisArg, args = []) {
  const symbolProp = Symbol();
  // 将调用函数赋值给 thisArg的一个属性上.
  // 使用Symbol是为了防止和已有的“string”类型的属性重名，导致一不小心覆盖了原数据
  thisArg[symbolProp] = this;
  const result = thisArg[symbolProp](...args); // 这样调用时就改变了this
  delete thisArg[symbolProp]; // 删除添加的属性，避免污染
  return result;
};
