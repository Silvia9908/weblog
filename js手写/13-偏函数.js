
/* 
function partial(fn,...fixedArgs){
    return function(...newArgs){
        return fn(...fixedArgs,...newArgs)
    }
} */
const partial = (fn, ...fixedArgs) => (...newArgs) => fn(...fixedArgs, ...newArgs);
//实例
// 原函数：通用API请求
const request = (method, url, data) => {
  console.log(`[${method}] ${url}`, data);
};

const get = partial(request, 'GET');
get('/users', { page: 1 }); // 输出：[GET] /users { page: 1 }

// 偏函数2：固定method为'POST'和url为'/login'
const postLogin = partial(request, 'POST', '/login');
postLogin({ username: 'admin', pwd: '123' }); 
// [GET] /users { page: 1 }
// [POST] /login { username: 'admin', pwd: '123' }

/* 
//带占位符
const _ = Symbol('placeholder')
const partial = (fn,...args)=>(...newArgs)=>{
    let i = 0
    return fn(...args.map(arg=>arg===_?newArgs[i++]:arg).concat(newArgs.slice(i)))
}

// 原函数：计算 a + b * c
const calculate = (a, b, c) => a + b * c;

// 偏函数：固定b=2，a和c动态传入（a用占位符_）
const fixedB = partial(calculate, _, 2);

// 调用时，arg[0]会替换占位符_的位置（即a的位置）
console.log(fixedB(1, 3)); 
// 等价于 calculate(1, 2, 3) → 1 + 2*3 = 7
 */