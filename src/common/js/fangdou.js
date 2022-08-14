function debounce(func, wait, immediate) {
    var timer;

    return function () {
        var _this = this;
        var args = arguments;

        if (timer) clearTimeout(timer); // 常规流程，间隔内触发时清掉重置定时
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timer; // 1. callNow 初始值是 true, 同步立即执行；随后 timer 才开始执行
            timer = setTimeout(function () {
                timer = null; // wait 期间，timer 是一个 ID 数字，所以 callNow 为 false，func 在此期间永远不会执行
            }, wait) // wait 之后，timer 赋值 null，callNow 为 true，func 又开始立即执行。
            if (callNow) func.apply(_this, args)
        }
        else {
            timer = setTimeout(function () {
                func.apply(_this, args)
            }, wait);
        }
    }
}

function getTop(e) {
    return e.offsetTop;
}

export {
    debounce,
    getTop
} 