Array.prototype.forEach2 = function(callback,thisArg){
  //直接赋值会让该方法可枚举，在真实项目建议用 Object.defineProperty 设为 enumerable:false，避免被 for…in 枚举到
  if(this===null){//运行时的 this 就是调用者（如 [1,2].forEach2(...) 的这个数组）
    throw new TypeError('this is null or not defined')
  }
  if(typeof callback !== 'function'){//forEach 的第一个参数是“回调函数”
    throw new TypeError(callback+ ' is not a function')
  }
  const O = Object(this)
  const len = O.length>>>0
  //ToUint32/ToLength：把 length 转成 0…(2^32-1) 的无符号整数。
//负数 → 0；小数 → 取整；超大 → 截断到 32 位。
  let k = 0
  while(k<len){
    if(k in O){
      //prop in obj
      //obj 对象上（包括原型链上）是否存在名为 prop 的属性。
      //它不要求 prop 是字符串类型，会自动把数字转成字符串。
      //k in O 实际上等价于 '0' in O、'1' in O 这样的判断；
      callback.call(thisArg,O[k],k,O)
    }
    k++
  }
}