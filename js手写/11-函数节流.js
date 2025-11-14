/* 
function throttle(func,interval){
    let lastTime = 0//记录上一次执行的时间
    return function(...args){
        const now = Date.now()//获取当前时间戳
        //若当前时间与上次执行时间间隔》=interval，执行函数
        if(now-lastTime>=interval){
            func.apply(this,args)//保持this指向和参数传递
            lastTime = now//更新上次执行时间为当前时间
        }
    }
}
 */

//增强版，支持立即执行+延迟执行+可取消
function throttle(func,interval,options={leading:true,trailing:true}){
    let lastTime = 0//上次执行的时间
    let timer = null//定时器标识，用于延迟执行逻辑
    //解构配置项 leading-首次是否立即执行 trailing-最后一次是否延迟执行
    const {leading,trailing}=options
    //定义取消节流的方法，用于手动终止未执行的函数
    const cancel = ()=>{
        clearTimeout(timer)//清楚定时器
        //定时器的核心作用是 “在间隔时间内未触发立即执行逻辑时，确保最后一次触发能被延迟处理”
        //是实现 trailing: true（末次延迟执行）的关键工具。
        timer = null//重置定时器状态
        lastTime = 0//重置上次执行时间，下次触发为首次
    }

    const throttled = function(...args){
        const now = Date.now()//获取当前时间戳
        //首次触发且不允许立即执行，初始化lastTime为当前时间
        if(!lastTime&&!leading) lastTime = now
        //计算距离下次允许执行剩余的时间
        const remaining = interval-(now-lastTime)
        //剩余时间<=0 执行立即执行逻辑
        if(remaining<=0){
            if(timer){//清除可能存在的延迟执行定时器
                clearTimeout(timer)
                timer = null
            }
            func.apply(this,args)//执行目标函数
            lastTime = now//更新上次执行时间
            //剩余时间>0，执行延迟执行逻辑
        }else if(trailing&&!timer){
            timer = setTimeout(()=>{
                func.apply(this,args)//延迟执行目标函数
                //重置lastTime 若开启leading，下次触发视为首次，否则重置为0
                lastTime = leading ? Date.now():0
                timer = null//重置定时器
            },remaining)//剩余时间后执行
        }
    }
    throttled.cancel = cancel
    return throttled
}

