/* eslint-disable no-undef */
const lazy = (fn, time) => {
    let lastTime = '';
    let timeId = '';
    return function(...args){
        let _this = this;
        const nowTime = +new Date();
        if(nowTime - lastTime < time) {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                lastTime=nowTime;
                fn.apply(_this, args)
            }, time);
        } else {
            fn.apply(_this,args);
            lastTime=nowTime
        }
    }
}

export default lazy