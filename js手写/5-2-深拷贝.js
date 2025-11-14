//简单版本，只能复制普通对象，数据和基础类型
/* function deepCopy(obj){
    if(obj===null||typeof obj !== 'object') return obj
    let newobj = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newobj
} */

//增强版本
/* const isObject = (target)=>(typeof target ==='object'||typeof target === 'function') && target!==null

function deepCopy(target,map=new WeakMap()){
  if(target===null) return null
  if(!isObject(target)) return target
  if(map.get(target)) return target
  let constructor = target.constructor
  if(constructor===RegExp||constructor===Date)
    return new constructor(target)

  map.set(target, true);//标记 
  let cloneTarget = Array.isArray(target)?[]:{}
  for(let key in target){
    if(target.hasOwnProperty(key)){
      cloneTarget[key]=deepCopy(target[key],map)
    }
  }
  return cloneTarget
} */

const isObject = (target) => (typeof target === "object" || typeof target === "function") && target !== null;

function deepClone(target, map = new WeakMap()) {
// 1. 先处理 null（直接返回，不执行后续代码）
if (target === null) {
    return null;
}

// 2. 处理循环引用（此时 target 已排除 null）
if (map.get(target)) {
    return target;
}

// 3. 非引用类型直接返回（基础类型：数字、字符串、布尔值、Symbol、undefined 等）
if (!isObject(target)) {
    return target;
}

// 4. 到这里 target 一定是引用类型（对象/数组/函数/日期/正则等），安全获取 constructor
let constructor = target.constructor;

// 5. 处理特殊类型（日期、正则）
if (constructor === RegExp || constructor === Date) {
    return new constructor(target);
}

// 6. 处理普通对象/数组
map.set(target, true); // 标记已拷贝
const cloneTarget = Array.isArray(target) ? [] : {};

for (let key in target) {
    if (target.hasOwnProperty(key)) {
    cloneTarget[key] = deepClone(target[key], map); // 递归拷贝属性值
    }
}

return cloneTarget;
}

const test1 = {
num: 123,
str: 'hello',
bool: true,
nil: null,
undef: undefined,
sym: Symbol('test')
};

const copy1 = deepClone(test1);

// 验证：基础类型拷贝后值相同，且原对象修改不影响拷贝对象
console.log(copy1.num === 123); // true
console.log(copy1.str === 'hello'); // true
test1.num = 456;
console.log(copy1.num); // 123（未受影响，正确）