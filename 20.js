const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//法一
/*
rl.on('line', (s) => {
    //1.判断长度是否未偶数
    if(s.length%2!==0) return console.log(false)||rl.close();
    //2.左括号对应后右括号压入栈
    //如果不是左括号,出站一一对应是否正确
    let stack = [];
    for (let c of s) {
        if (c === '(') stack.push(')');
        else if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (stack.pop() !== c) return console.log(false)||rl.close();
    }
    console.log(stack.length === 0);
    rl.close();
});
*/


//法二

// rl.on('line',(s)=>{
//     //长度为偶数
//     if(s.length%2!==0) return console.log(false)||rl.close();
//     //创建哈希表,存储对应关系
//     const mp={'}':'{',']':'[',')':'('};
//     //遍历s 括号是否是左括号,是则压栈 不是出栈且是否和目前元素一致
//     const st = [];
//     for(let c of s){
//         if(!mp.hasOwnProperty(c)){//hasOwnProperty 找键值 左括号入栈
//             st.push(c);
//         }else if(st.length===0||st.pop()!==mp[c]) 
//             //现在是键值对应的value与pop出来的不一样 就是false
//             //st.length===0处理左括号比右括号多
//             return console.log(false)||rl.close();
//     }
//     console.log(st.length===0);
//     rl.close();
// })
// rl.on('line',(s)=>{
//     if(s.length%2!==0) return console.log(false)||rl.close;
//     const mp = {'}':'{',')':'(',']':'['};
//     const st=[];
//     for(let c of s){
//         if(!mp.hasOwnProperty(c)){
//             st.push(c);
//         }else if(st.length===0||st.pop()!==mp[c])
//             return console.log(false)||rl.close();
//     }
//     console.log(st.length===0);
//     rl.close;
// })


// rl.on('line',(s)=>{
//     if(s.length%2!==0) return console.log(false)||rl.close;
//     const mp = {']':'[','}':'{',')':'('};
//     const st = [];
//     for(let c of s){
//         if(!mp.hasOwnProperty(c)){
//             st.push(c);
//         }else if(st.length===0||st.pop()!==mp[c])
//             return console.log(false)||rl.close;
//     }
//     console.log(st.length===0);

// })

rl.on('line',(s)=>{
    if(s.length%2!==0) return console.log(false)||rl.close();
    const mp = {']':'[','}':'{',')':'('};
    const st = [];
    for(let c of s){
        if(!mp.hasOwnProperty(c)){
            st.push(c);
        }else if(st.length===0||st.pop()!==mp[c]){
            return console.log(false)||rl.close();
        }
    }
    console.log(st.length===0);
})