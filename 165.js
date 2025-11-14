//比较版本号
//字符串
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function compare(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        const a = +v1[i] || 0;
        const b = +v2[i] || 0;
        if (a < b) return -1;
        else if (a > b) return 1;
    }
    return 0;
}

rl.on('line', (input) => {
    const [version1, version2] = input.trim().split(' ');
    const result = compare(version1, version2);
    console.log(result);
    rl.close();
}) 