const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * 格式化数字，整数部分添加千位分隔符，保留小数部分
 * @param {number} n - 需要格式化的数字
 * @returns {string} 格式化后的字符串
 */
// function formatNumber(n) {
//     // 分割整数和小数部分
//     const parts = n.toString().split('.');
//     const reg = /\B(?=(\d{3})+(?!\d))/g;
//     // 整数部分用逗号分隔，小数部分原样保留
//     return parts[0].replace(reg, ',') + (parts[1] ? '.' + parts[1] : '');
// }
// function formatNumber(n){
//     const part = n.toString().split('.');
//     const reg = / \B(?=(\d{3})+(?!\d))/g;
//     return part[0].replace(reg,',')+(part[1]?'.'+part[1]:'');
// }
function format(n){
    const part = n.toString().split('.')
    const reg = /\B(?=(\d{3})+(?!\d))/g
    return part[0].replace(reg,',')+(part[1]?'.'+part[1]:'');
}

// 处理输入输出
rl.on('line', (input) => {
    // 读取输入的数字
    const number = parseFloat(input);
    
    // 检查输入是否有效
    if (isNaN(number)) {
        console.log("Invalid input: please enter a valid number");
        return;
    }
    
    // 格式化并输出结果
    console.log(formatNumber(number));
    
    // 关闭输入流（如果需要处理多个测试用例，可以注释掉这行）
    // rl.close();
});

// 测试用例
function runTests() {
    const testCases = [1234.567, 1234567, 123.4, 12, 0, -1234.56, 123456789.123456];
    console.log("Running test cases:");
    testCases.forEach(testCase => {
        console.log(`${testCase} => ${formatNumber(testCase)}`);
    });
}
// 如需运行测试用例，取消下面这行的注释
runTests();

