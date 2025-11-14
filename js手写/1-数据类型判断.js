function typeOf(obj){
  //Object.prototype.toString是 Object 原型上的一个方法，默认返回当前对象的类型字符串，格式为"[object 类型名]"
  //Object.prototype.toString.call({}) 返回 "[object Object]"
//Object.prototype.toString.call([]) 返回 "[object Array]"
//Object.prototype.toString.call(123) 返回 "[object Number]"
  
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  //split(' ') 是字符串的分割方法，参数为分隔符（这里是空格），返回分割后的数组。
//对于"[object Object]"，split(' ') 会分割为 ["[object", "Object]"]
//取数组的第 2 个元素（索引 1），得到 "Object]"

  res = res.substring(0,res.length-1).toLowerCase()
  //substring(startIndex, endIndex) 是字符串的截取方法，返回从startIndex（包含）到endIndex（不包含）之间的子字符串。
//此时res的值是"Object]"，res.length为 7，res.length - 1为 6，因此截取从索引 0 到 6 的字符，得到 "Object"（去掉了末尾的]）
  return res
}

console.log(typeOf({}));
console.log(typeOf([]));
