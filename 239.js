const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maxSlidingWindow(nums, k) {
    const ans = [];
    const q = []; // 用数组模拟双端队列，存储索引（而非值）

    for (let i = 0; i < nums.length; i++) {
        // 1. 维护队列：移除所有小于当前元素的队尾元素（确保队列单调递减）
        // 队尾元素是 q[q.length - 1]，对应的值是 nums[q[q.length - 1]]
        while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
            q.pop(); // 队尾移除
        }
        // 当前元素索引加入队尾
        q.push(i);

        // 2. 移除窗口外的队头元素（确保队头在窗口内）
        const left = i - k + 1; // 窗口左边界
        if (q[0] < left) {
            q.shift(); // 队头移除
        }

        // 3. 当窗口形成（左边界 >= 0）时，记录队头对应的最大值
        if (left >= 0) {
            ans.push(nums[q[0]]); // 队头是窗口内最大值的索引
        }
    }
    return ans;
}

// 输入处理逻辑不变
let inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input.trim());
    if (inputLines.length === 2) {
        const nums = inputLines[0].split(',').map(Number);
        const k = parseInt(inputLines[1], 10);
        const result = maxSlidingWindow(nums, k);
        console.log(`[${result.join(',')}]`);
        rl.close();
    }
});
