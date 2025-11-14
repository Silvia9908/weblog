Array.prototype.reduce2 = function(callback,initialValue){
  if(this === null) 
    throw new TypeError('this is null or not defined')
  if(typeof callback !== 'function')
    throw new TypeError(callback+ 'is not a function')
  const O = Object(this)
  const len = O.length>>>0
  let k = 0,acc
  //判断是否提供初始值 arguments.length 是实际传入参数的个数；
  //若大于 1，说明用户传入了第二个参数 —— initialValue；
  if(arguments.length>1){
    acc = initialValue
  }else{//没有初始值
    //如果数组是稀疏数组（有空洞），前几个索引可能是“空的”
    while(k<len&& !(k in O)){//k in O 判断该索引是否存在（跳过空洞）
      k++//找到第一个存在的元素作为初始累积值
    }
    if(k>len){//空数组
      throw new TypeError('Reduce of empty array with no initial value')
    }
    acc = O[k++]//第一个存在的元素，初始累加器
  }
  while(k<len){
    if(k in O){
      acc = callback(acc,O[k],k,O)//调用回调函数，返回值为新的acc
    }
    k++
  }
  return acc
}