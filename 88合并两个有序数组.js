const rl = require('readline').createInterface({input:process.stdin,output:process.stdout});
const input = [];
var marge = function(num1,m,num2,n){
    let p1 = m-1,p2 = n-1,p = m+n-1;
    while(p2>=0){
        if(p1>=0&&num1[p1]>num2[p2]){
            num1[p--] =num1[p1--]; 
        }else{
            num1[p--] = num2[p2--];
        }
    }
};
rl.on('line',(line)=>{
    input.push(line.trim().split(' ').map(Number));
    if(input.length ===3){
        const [m,n] = input[0];
        const num1 = [...input[1],...new Array(n).fill(0)];
        const num2 = input[2];
        marge(num1,m,num2,n);
        console.log(num1.join(' '));
        
    }
})