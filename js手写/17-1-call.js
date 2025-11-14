Function.prototype.call2 = function(context){
  //1.确定this上下文
  //如果调用时没传context 默认window
  const cxt = context || window

  //当前函数赋值给cxt的fn属性
  //例如：fn.call2(obj) 中，this 就是 fn，所以 obj.fn = fn
  cxt.fn = this

  //2.收集除cxt外的所有函数
  const args = []
  for(let i = 1;len = arguments.length;i++){
    args.push(`arguments[${i}]`)
  }

  //3.执行函数并获取结果
  const res = eval(`ctx.fn(${args})`)
  // eval 会把字符串解析为代码执行
  // 相当于执行 context.fn(参数1, 参数2, ...)
  //4.清理临时属性
  delete cxt.fn
  return res

  
}