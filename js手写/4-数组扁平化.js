//完全拍平
/*function flatten(arr){
  if(!Array.isArray(arr)) return [arr]
  let res = []
  for(let i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res = res.concat(flatten(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}
  
console.log(flatten([1,[2,3,[4]]]));
*/




//2.原生flat
//console.log([1,[2,3,[4]]].flat(1));
//3.实现原生flat
//原生 Array.prototype.flat(depth) 可指定扁平化深度（默认 1）
//带深度
function flatten(arr,depth = 1){
  if(!Array.isArray(arr)||depth<1) return [arr]

  let res = [];
  for(const item of arr){
    if(Array.isArray(item) && depth>0){
      res.push(...flatten(item,depth-1))
    }else{
      res.push(item)
    }
  }
  return res
}

console.log(flatten([1,[2,3,[4]]],3));