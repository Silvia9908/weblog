const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
    inputLines.push(line);
    // 读取到两行输入后处理（第一行为n，第二行为袜子颜色数组）
    if (inputLines.length === 2) {
        const n = parseInt(inputLines[0]);
        const colors = inputLines[1].split(' ').map(Number);
        
        // 统计每种颜色的出现次数
        const colorCount = {};
        for (const c of colors) {
            colorCount[c] = (colorCount[c] || 0) + 1;
        }
        
        // 计算总对数
        let totalPairs = 0;
        for (const count of Object.values(colorCount)) {
            totalPairs += Math.floor(count / 2);
        }
        
        console.log(totalPairs);
        // 重置输入缓存，准备处理下一组（虽然题目未明确多组，但按标准格式兼容）
        inputLines = [];
        rl.close();
    }
});