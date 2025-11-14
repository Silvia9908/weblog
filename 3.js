// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout

const { interceptors } = require('undici-types');

// });
const rl = require('readline').createInterface({input:process.stdin,output:process.stdout});
//创建节点
// rl.on('line',(s)=>{
//     let left = 0,maxlen = 0;
//     const cnt = new Map();
//     for(let right =0;right<s.length;right++){
//         const c = s[right];
//         cnt.set(c,(cnt.get(c)??0)+1);
//         while(cnt.get(c)>1){
//             cnt.set(s[left],cnt.get(s[left])-1);
//             left++;
//         }
//         maxlen = Math.max(maxlen,right-left+1);
//     }
//     console.log(maxlen);
//     //rl.close();
// })

// rl.on('line',(s)=>{
//     let left=0,maxlen = 0;
//     const cnt = new Map();
//     for(let right = 0;right<s.length;right++){
//         const c = s[right];
//         cnt.set(c,(cnt.get(c)??0)+1);
//         while(cnt.get(c)>1){
//             cnt.set(s[left],cnt.get(s[left])-1);
//             left++;
//         }
//         maxlen = Math.max(maxlen,right-left+1);
//     }
//     console.log(maxlen);
// })

rl.on('line',(s)=>{
    let  left = 0,maxlen = 0;
    const cnt = new Map();
    for(let right = 0;right<s.length;right++){
        const c = s[right];
        cnt.set(c,(cnt.get(c)??0)+1);
        while(cnt.get(c)>1){
            cnt.set(s[left],cnt.get(s[left])-1);
            left++;
        }
        maxlen = Math.max(maxlen,right-left+1);
    }
    console.log(maxlen);
})

(async ()=>{
    const ins = axios.create({
        baseURL:'基地址'
    })
    ins.interceptors.request.use()
    ins.interceptors


    const res1 = await ins.get('/get',{
        params:{
            name:1,
            age:1
        }
    })
    const res2 = await ins.post('/post',{
        name:1,
        age:1
    })
    console.log(res2.data)
})

// 引入Axios（需先安装：npm install axios）
import axios from 'axios';

// 创建实例并配置
const api = axios.create({
  baseURL: 'https://api.siliconflow.cn/v1',
  headers: { 'Content-Type': 'application/json' }
});

// 请求拦截器（统一添加认证信息）
api.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer YOUR_API_KEY';
  return config;
});

// 响应拦截器（统一处理错误）
api.interceptors.response.use(
  response => response.data, // 自动解析JSON
  error => {
    console.error('Axios error:', error.response?.status || error.message);
    return Promise.reject(error);
  }
);

// 发送请求
async function axiosData() {
  try {
    const data = await api.post('/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: []
    });
    console.log(data);
  } catch (error) {
    // 错误已在拦截器处理，此处可做额外逻辑
  }
}

// 你的项目中实际使用的Fetch调用（简化版）
async function fetchData() {
  const url = 'https://api.siliconflow.cn/v1/chat/completions';
  const payload = { model: 'gpt-3.5-turbo', messages: [] };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) { // Fetch不会自动抛出HTTP错误（如404、500）
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // 需手动解析JSON
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}