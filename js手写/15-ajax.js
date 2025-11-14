/* 
// 1.创建XHR对象
const xhr = new XMLHttpRequest();
// 2.配置请求：方法、URL、是否异步
xhr.open('GET','http://',true);
// 3.设置请求头
xhr.setRequestHeader('Content-Type','application/json');
// 4.监听请求状态变化
xhr.onreadystatechange = function(){
  if(xhr.readyState ===4 &&xhr.status === 200){
    const data = JSON.parse(xhr.responseText)
    console.log('请求成功',data)
  }else if(xhr.readyState === 4){
    console.log('请求失败',xhr.status);
  }
}
xhr.send();
 */


function getJson(url){
  return new Promise((resolve,reject)=>{
    //1.创建xhr实例
    const xhr = new XMLHttpRequest()
    //2.配置请求，readyState=1(OPEND) true表示异步
    //0
    xhr.open('GET',url,true)
    //3.告诉服务器期望返回JSON
    xhr.setRequestHeader('Accept','application/json')
    //1
    //4.监听状态变化 
    xhr.onreadystatechange=()=>{
       //4完成状态，只在4处理，避免在中间状态重复进入分支
      if(xhr.readyState !== 4) return
      //http成功状态 204 206
      if(xhr.status>=200&&xhr.status<300){
        try{//解析JSON
          resolve(JSON.parse(xhr.responseText))
        }catch(e){
          reject(e)//错误解析
        }
      }else{//非2xx 如400/401/404/500/504
        reject(new Error(`HTTP error:${xhr.status}`))
      }
    }
    xhr.send()//发送请求，后续会经历readyState=2 收到响应头
    //2
    //->3加载中，可能对次，4完成
  })
}
