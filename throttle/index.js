// 给原本的func进行节流，返回其节流版本的新函数
// 使得该函数在delay的时间窗口内只会被调用一次
const throttle = (func, delay) => {
  let throttleTimer = null;
  return function (...args) {
    const self = this; // 记录原本的this值，方便最终使用相同的this调用
    // timer不为null代表正在节流中，则不触发原函数
    if (throttleTimer) {
      return;
    }

    // 不在节流中，则调用原函数并开启节流倒计时
    func.apply(self, args);
    throttleTimer = setTimeout(() => {
      // 节流完毕后，将节流timer清空
      throttleTimer = null;
    }, delay);
  };
};

// 还有一种实现方式，是通过记录上一次触发的时间，一旦时间超过我们的delay，则允许调用原函数
/**
 * const throttle = (func, delay) => {
 *    let previous = 0; // 上一次调用时的timestamp
 *
 *    return function(...args) {
 *       const self = this;
 *       const now = new Date();
 *       if (now - previous > delay) {
 *          func.apply(self, args);
 *          previous = now;
 *       }
 *    }
 *
 * }
 *
 *
 *
 */

let count = 0;
const handleMouseMove = (event) => {
  count++;
  event.target.innerText = count;
};

const div = document.querySelector('div');
// div.addEventListener('mousemove', handleMouseMove);
div.addEventListener('mousemove', throttle(handleMouseMove, 500));
