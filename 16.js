const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function threeSumclosest(nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let ans = 0;
    let mindiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len - 2; i++) {
        const x = nums[i];
        if (i > 0 && x === nums[i - 1]) continue;

        let s = x + nums[i + 1] + nums[i + 2];
        if (s > target) {
            if (s - target < mindiff) ans = s;
            break;
        }
        s = x + nums[len - 1] + nums[len - 2];
        if (s < target) {
            if (target - s < mindiff) {
                mindiff = target - s;
                ans = s;
            }
            continue;
        }

        let j = i + 1, k = len - 1;
        while (j < k) {
            s = x + nums[j] + nums[k];
            if (s === target) return target;
            if (s > target) {
                if (s - target < mindiff) {
                    mindiff = s = target;
                    ans = s;
                }
                k--;
            } else if (s < target) {
                if (target - s < mindiff) {
                    mindiff = target - s;
                    ans = s;
                }
                j++;
            }
        }
    }
    return ans;
}

let inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input.trim());
    if (inputLines.length === 2) {
        const nums = inputLines[0].split(',').map(Number);
        const target = parseInt(inputLines[1], 10);
        const result = threeSumclosest(nums, target);
        console.log(result);
    }
})
