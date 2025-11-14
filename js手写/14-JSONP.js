
//1.接收一个对象作为参数，对象包含三个属性
//url-跨域请求的目标接口地址
//params-请求需要携带的参数 可选
//callbackName-自定义回调函数明 可选
function jsonp({url,params,callbackName}){
    //2.生成唯一回调函数名 jsonp_1620000000000_abc123
    const fnName = callbackName || `jsonp_${Date.now()}_${Math.random().toString(36).slice(2)}`
    //3.URL拼接
    const generateUrl = ()=>{
        let query = ''
        for(let key in params){
            if(params.hasOwnProperty(key)){
                query += `${key}=${params[key]}&`
                //params={page:1, size:10}=》query= page=1&size=10&
            }
        }

        query += `callback=${fnName}`
        //page=1&size=10&callback=myCallback
        return `${url}?${query}`
        //https://api.example.com/data?page=1&size=10&callback=myCallback
    }

    return new Promise((resolve,reject)=>{
        //4.动态创建script标签，利用其不受同源策略限制的特性发起跨域请求
        const scriptEle = document.createElement('script')
        //5.设置src属性，值为前面生成的url
        scriptEle.src = generateUrl()
        //6.如果加载失败，如网络错误、服务器无响应
        scriptEle.onerror = () =>{
            reject(new Error('JSONP请求失败'))
            //移除标签,清理DOM
            document.body.removeChild(scriptEle)
            //删除全局回调函数，避免内存泄漏
            delete window[fnName]
        }
        //7.定义全局对象window上定义的fnName函数
        //这个函数会被服务器返回的脚本调用
        window[fnName]=(data)=>{
            //调用 Promise 的成功回调，将服务器返回的数据 data 传递出去。
            resolve(data)
            //移除标签,清理DOM
            document.removeChild(scriptEle)
            delete window[fnName]
        }
        //8。将 <script> 标签插入到页面的 <body> 中，此时浏览器会自动加载 src 指向的 URL，发起跨域请求
        document.body.appendChild(scriptEle)
    })
}

// 用法示例
jsonp({
  url: 'https://api.example.com/data',
  params: { page: 1, size: 10 },
  callbackName: 'myCallback'
}).then(data => {
  console.log('数据：', data);
}).catch(err => {
  console.error('错误：', err);
});