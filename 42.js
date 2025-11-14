const { hrtime } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function area2(height) {
    let left = 0, right = height.length - 1;
    let preMax = 0, sufMax = 0;
    let ans = 0;
    while (left < right) {
        preMax = Math.max(preMax, height[left]);
        sufMax = Math.max(sufMax, height[right]);
        if (preMax < sufMax) {
            ans += preMax - height[left++];
        } else {
            ans += sufMax - height[right--];
        }
    }
    return ans;
}

rl.on('line', (input) => {
    const trimmed = input.trim();
    const height = trimmed.split(',').map(Number);
    const result = area2(height);
    console.log(result);
})