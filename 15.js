// const readline = require('readline');
// const { buffer } = require('stream/consumers');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function threeSum(nums) {
//     const res = [], len = nums.length;
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         let l = i + 1, r = len - 1;
//         let iNum = nums[i];
//         if (iNum > 0) return res;
//         if (iNum === nums[i - 1]) continue;
//         while (l < r) {
//             if (nums[l] + nums[r] + iNum > 0) r--;
//             else if (nums[l] + nums[r] + iNum < 0) l++;
//             else {
//                 res.push([iNum, nums[l], nums[r]]);
//                 while (l < r && nums[l] == nums[l + 1]) {
//                     l++;
//                 }
//                 while (l < r && nums[r] == nums[r - 1]) {
//                     r--;
//                 }
//                 l++;
//                 r--;
//             }
//         }
//     }
//     return res;
// }

// rl.on('line', (input) => {
//     const trimmed = input.trim();
//     const nums = trimmed.split(',').map(Number);
//     const result = threeSum(nums);
//     console.log(result);
//     //rl.close();
// });

const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line',(input)=>{
    const nums = input.trim().split(',').map(Number);
    const res = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0;i<nums.length;i++){
        const iNum = nums[i];
        let l = i+1,r = nums.length-1;
        if(iNum>0) break;
        if(i>0&&iNum ===nums[i-1]) continue;
        while(l<r){
            const sum = iNum+nums[l]+nums[r];
            if(sum<0) l++
            else if(sum>0) r--;
            else{
                res.push([iNum,nums[l],nums[r]]);
                while(l<r&&nums[l]===nums[l+1]) l++;
                while(l<r&&nums[r]===nums[r-1]) r--;
                l++;
                r--;
            }
        }
    }
    console.log(res);
    rl.close();
})