function myNew(constructor,...args){
  //1.创建一个新对象
  const obj = {}
  //2.绑定原型
  obj._proto_ = constructor.prototype
  //3.绑定this并执行构造函数
  const res = constructor.apply(obj,args)//把原函数所有元素绑定
  //4.返回结果 如果是对象返回res，不是返回obj
  return (typeof res === "object" && res != null) ?res:obj
}