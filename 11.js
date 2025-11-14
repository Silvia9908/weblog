const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function maxArea(height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        ans = Math.max(ans, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans;
}

rl.on('line', (input) => {
    const trimmed = input.trim();
    const height = trimmed.split(',').map(Number);
    const result = maxArea(height);
    console.log(result);
})