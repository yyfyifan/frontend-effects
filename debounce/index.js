const debounce = (func, delay) => {
  let timer = null;
  return function (...args) {
    const self = this; // 记录原本的this值，方便最终使用相同的this调用
    // 如果正在倒计时，则取消
    if (timer) {
      clearTimeout(timer);
    }

    // 重新开启倒计时，在delay之后再执行func
    timer = setTimeout(() => {
      func.apply(self, args);
      timer = null;
    }, delay);
  };
};

let count = 0;
const handleMouseMove = function (event) {
  console.log(this);
  count++;
  event.target.innerText = count;
};

const div = document.querySelector('div');
// div.addEventListener('mousemove', handleMouseMove);
div.addEventListener('mousemove', debounce(handleMouseMove, 500));
