function parseParam(url){
    //1.提取？后的参数字符串
    const paramsStr = /\?(.+)$/.exec(url)[1]
    //2.按&分割成键值对数组
    const paramsArr = paramsStr.split('&')
    //结果空对象
    let paramsObj = {}
    //3.遍历处理每个键值对
    paramsArr.forEach(param=>{
        //如果元素里有=，将他们按key val拆开
        if(/=/.test(param)){
            let [key,val] = param.split('=')
            val = decodeURIComponent(val)//对值进行URL解码
            //值是否是纯数字 若是纯数字则用parseFloat转为数字类型。否则保留字符串
            val = /^\d+$/.test(val)?parseFloat(val):val

            //看是否有重复的键值对
            if(paramsObj.hasOwnProperty(key)){
                paramsObj[key] = [].concat(paramsObj[key],val)
            }else{//没有的话直接赋值
                paramsObj[key] = val
            }
        }else{//如果没有=号就是无值参数
            paramsObj[param]=true
        }
    })
    return paramsObj
}

// 测试 URL 编码解码 + 数字转换
console.log(parseParam("?name=%E5%BC%A0%E4%B8%89&age=20&score=95"));
// 输出：{ name: "张三", age: 20, score: 95 }（正确解码中文，转换数字）

// 测试非数字值
console.log(parseParam("?a=123b&b=45.6"));
// 输出：{ a: "123b", b: "45.6" }（"123b"含非数字字符，"45.6"含小数点，均不转换）