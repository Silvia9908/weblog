// const rl = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// var longest = function(s){
//     if(s.length<2)
//         return s;
//     let res = '';
//     for(let i = 0;i<s.length;i++){
//         helper(i,i);
//         helper(i,i+1);
//     }
//     function helper(m,n){
//         while(m>=0&&n<s.length&&s[m]===s[n]){
//             m--;
//             n++;
//         }
//         if(n-m-1>res.length){
//             res = s.slice(m+1,n);
//         }
//     }
//     return res;
// }

// rl.on('line',(input)=>{
//     const str = input.trim().replace(/\s+/g, '');
//     const result = longest(str);
//     console.log(result.split('').join(' '));

// })


const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
function longest(s){
    if(s.length<2) return s;
    let res = '';
    for(let i = 0;i<s.length;i++){
        helper(i,i);
        helper(i,i+1);
    }
    function helper(m,n){
        while(m>=0&&n<s.length&&s[m]===s[n]){
            m--;
            n++;
        }
        if(n-m-1>res.length){
            res = s.slice(m+1,n);
        }
    }
    return res;
}
rl.on('line',(input)=>{
    const str = input.trim().replace(/\s+/g,'');
    const result=longest(str);
    console.log(result.split('').join(''));
})