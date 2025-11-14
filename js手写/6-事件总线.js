class EventBus {
    constructor(){
        //初始化事件缓存对象
        this.events = Object.create(null)
    }

//订阅事件：eventName-事件名，callback-回调函数
    on(eventName,callback){
        if(!this.events[eventName]){
            this.events[eventName]=[]//若事件名不存在，初始化一个空数组
        }
        this.events[eventName].push(callback)//订阅事件，将回调函数加入数组
    }

//发布事件：
//once是否为一次性事件，...args传递的参数
    emit(eventName,once=false, ...args){
    /*     const callbacks = this.events[eventName]
        if(callbacks&&callbacks.length){
            const callbackCopy = [...callbacks]
            callbackCopy.forEach(callback=>callback(...args))
            if(once){
                delete this.events[eventName]
            }
        } */
        if(this.events[eventName]){//若有订阅者监听该事件
            //let callbackCopy = this.events[eventName].slice()
            let callbackCopy = [...this.events[eventName]]
            //复制回调函数，避免遍历中修改原数组导致异常
            //遍历执行所有订阅的回调函数，并传递参数
            for(let fn of callbackCopy){
                fn(...args)
            }
            //一次性事件，发布后删除该事件的所有订阅
            if(once){
                delete this.events[eventName]
            }
        }
    }

    off(eventName,callback){
        const callbacks = this.events[eventName]
        if(callbacks){//若该事件有订阅者
            if(callback){
                //只移除指定的回调函数，保留这个事件的其他订阅者
                this.events[eventName] = callbacks.filter(cb => cb!==callback)//不是callback的会留下
            }else{
                //若没有传callback，删除整个事件的所有订阅
                delete this.events[eventName]
            }
        }
    }
}

// 创建事件总线实例
const bus = new EventBus();

// 1. 测试普通订阅（可多次触发）
const log1 = (msg) => console.log('普通订阅:', msg);
bus.on('test', log1);
bus.emit('test', false, '第一次触发'); // 输出：普通订阅: 第一次触发
bus.emit('test', false, '第二次触发'); // 输出：普通订阅: 第二次触发

// 2. 测试一次性订阅（通过emit的once参数控制）
const log2 = (num) => console.log('一次性订阅:', num);
bus.on('onceTest', log2);
bus.emit('onceTest', true, 123); // 输出：一次性订阅: 123（触发后自动取消）
bus.emit('onceTest', false, 456); // 无输出（已被清空）

// 3. 测试取消订阅
bus.off('test', log1);
bus.emit('test', false, '第三次触发'); // 无输出（已取消订阅）