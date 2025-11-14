// const unique = arr=>[...new Set(arr)]
// console.log(unique([1,2,2]));

const { it } = require("node:test")


/* function unique(arr){
  if(!Array.isArray(arr)) return arr
  return [...new Set(arr)]
}

console.log(unique([1,2,2,2]));
 */

function unique(arr){
  if(!Array.isArray(arr)) return arr
  
  const res = []
/*   const obj = {}//用于存储已出现的元素
  for(let i = 0;i<arr.length;i++){
    const item = arr[i]
    if(!obj.hasOwnProperty(item)){
      obj[item] = true
      res.push(item)
    }
  } */
  for(const item of arr){
    if(!res.includes(item))
      res.push(item)
  }
  return res
}

console.log(unique([1,2,2,2]));
console.log(unique([1,2,2,3,3,'1']));//[ 1, 2, 3, '1' ]