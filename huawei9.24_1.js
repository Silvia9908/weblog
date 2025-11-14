const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let lines = [];
rl.on('line',(line)=>{
    lines.push(line.trim());
    if(lines.length ===3){
        const n = parseInt(lines[0]);
        const arr = lines[1].split(' ').map(Number);
        const x = parseInt(lines[2]);

        let result;
        if(n===0){
            return [x];
        }else{
            let inserted = false;
            result = [];

            for(let i = 0;i<n;i++){
                //循环数组 i=0时,前面一个数组应该时n-1而不是-1
                //如果直接用arr[-1]返回undefined 
                //而(i - 1 + n) % n通过加n再取模，
                // 将负数索引转为合法的正数索引（如n=4时，(0-1+4)%4 = 3，
                // 即最后一个元素的索引）
                const prev = arr[(i-1+n)%n];
                const cur = arr[i];
                if((prev<=cur&&prev<=x&&x<=cur)||(prev>cur&&(x>=prev||x<=cur))){
                    for(let j = 0;j<i;j++){
                        result.push(arr[j]);
                    }
                    result.push(x);
                    for(let j = i;j<n;j++){
                        result.push(arr[j]);
                    }
                    inserted = true;
                    break;
                }
            }
            if(!inserted){
                result.push(x);
                for(let num of arr){
                    result.push(num);
                }
            }
        }
        console.log(result.join(' '));
        rl.close();
    }
})