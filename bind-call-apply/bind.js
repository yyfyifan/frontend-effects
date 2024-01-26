// 实现自己的myBind方法，功能等同于bind方法

Function.prototype.myBind = function (thisArg, ...args) {
  return (...moreArgs) => {
    const symbol = Symbol();
    thisArg[symbol] = this; // this代表原函数。将其赋值到thisArg的一个属性上
    const result = thisArg[symbol](...args, ...moreArgs); // 通过thisArg来调用原函数
    delete thisArg[symbol]; // 最后删除掉临时属性，避免污染
    // 或者直接调用 return this.call(thisArg, ...args, ...moreArgs);
    return result;
  };
};
