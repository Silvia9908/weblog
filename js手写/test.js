class EventBus{
  constructor(){
    this.events = Object.create(null)
  }

  on(eventName,callback){
    if(!this.events[eventName])
      this.events[eventName]=[]
    this.events[eventName].push(callback)
  }

  emit(eventName,once=false,...args){
    if(this.events[eventName]){
      let callbackCopy = [...this.events[eventName]]
      for(let fn of callbackCopy){
        fn(...args)
      }
      if(once)
        delete this.events[eventName]
    }
  }
  off(eventName,callback){
    const callbacks = this.events[eventName]
    if(callbacks){
      if(callback){
        this.events[eventName] = callbacks.filter(cb=>cb!==callback)
      }else{
        delete this.events[eventName]
      }
    }
  }
}