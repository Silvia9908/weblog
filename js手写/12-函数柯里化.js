function curry(fn){
  //原函数需要的参数个数
  const argsLength = fn.length;

  //递归收集参数
  function collectArgs(...args){
    //情况1，已收集的参数>= 原函数需要的参数->执行原函数
    if(args.length >= argsLength){
      return fn(...args);
    }

    //情况2，参数不足，继续收集。（返回新函数，用闭包保存已收集的args)
    return function(...newArgs){
      return collectArgs(...args,...newArgs);
    }
  }
  return collectArgs;
}
//测试
function sum(a,b,c,d){
  return a+b+c+d;
}
const curriedSum = curry(sum);
//支持分步传参
console.log(curriedSum(1)(2)(3)(4));
console.log(curriedSum(1, 2)(3)(4)); // 10（一次传2个参数也支持）
console.log(curriedSum(1, 2, 3)(4)); // 10
console.log(curriedSum(1, 2, 3, 4));