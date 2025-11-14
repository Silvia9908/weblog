/* 
function debounce(func,delay){
    let timer = null//定时器标识
    return function(...args){
        //每次触发时，先清除之前的定时器
        clearTimeout(timer)
        //重新设置定时器，delay后执行函数
        timer = setTimeout(()=>{
            func.apply(this,args)//保持this指向和参数传递
        },delay)
    }
}
 */

function debounce(func,delay,immediate=false){
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)//清除旧的定时器
        if(immediate && !timer){//立即执行逻辑
            func.apply(this,args)
        }
        //重新计时
        timer = setTimeout(()=>{
            timer = null//定时器执行后重置
            if(!immediate){
                func.apply(this,args)
            }
        },delay)
    }
}