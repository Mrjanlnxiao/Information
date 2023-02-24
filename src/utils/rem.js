const BASE_FONT_SIZE = 100 // root font-size 基准值常量
const DESIGN_WIDTH = 1920 // 设计稿宽度常量
export const initRem = () => {
    const docEl = window.document.documentElement;
    const initFontSize = () => {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) {
        return;
      }
      // font-size计算逻辑
      if (clientWidth >= DESIGN_WIDTH) {
        // 限制最大宽度
        docEl.style.fontSize = `${BASE_FONT_SIZE}px`; 
      } else {
        // compute计算rem值，在这里需要乘上BASE_FONT_SIZE转换为font-size值，传入第二个参数是为了compute方法复用
        docEl.style.fontSize = `${
          compute(BASE_FONT_SIZE, true) * BASE_FONT_SIZE 
        }px`;
    }

    };
    const recalc = debounce(initFontSize, 100);
    initFontSize();
    window.addEventListener('resize', recalc, false);
    //页面显示时计算一次
    window.addEventListener(
      'pageshow',
      function (e) {
        if (e.persisted) {
          initFontSize();
        }
      },
      false,
    );
}


function debounce(func, wait) {
  let timer;
  
  return function() {
    
    let context = this; // 注意 this 指向
    
    let args = arguments; // arguments中存着e
    
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
const compute = (px, isInit = false) => {
  const scale =
    window.document.documentElement.clientWidth /
    DESIGN_WIDTH;
  // 初始化(重新计算根元素大小)时，总是取在设计稿宽度下的基准值*比例
  let size = isInit
    ? BASE_FONT_SIZE + 'px'
    : BASE_FONT_SIZE * scale + 'px';
  size = Number(size.replace('px', ''));
  return Number(((px / size) * scale).toFixed(2)); //保留两位，最后得到rem值
};
