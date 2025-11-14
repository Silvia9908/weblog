function shallowCopy(obj){
    if(typeof obj!== 'object') return 

    let newobj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key]=obj[key]
        }
    }
    return newobj
}

