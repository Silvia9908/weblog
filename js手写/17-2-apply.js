Function.prototype.call2 = function(context,argsArray){
  //1.确定this上下文
  const cxt = context || window
  //2.将当前函数this临时挂载到上下文对象上
  cxt.fn = this
  
  //3.处理参数：apply接收数组形式的参数或类数组
  let res
  if(!argsArray){
    res = cxt.fn()//没有参数，直接执行函数
  }else{
    const args = [] 
    for(let i = 0;i < argsArray.length;i++){
      args.push(`argsArray[${i}]`)
    }
    res = eval(`cxt.fn(${args})`)
  } 
  //4.清理临时属性
  delete cxt.fn
  return res  
}