const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function twosum(number, target) {
    let left = 0, right = number.length - 1;
    while (left < right) {
        if (number[left] + number[right] == target) {
            return [left, right];
        } else if (number[left] + number[right] > target) {
            right--;
        } else {
            left++;
        }
    }
}
let inputLines = [];
rl.on('line', (input) => {
    inputLines.push(input.trim());
    if (inputLines.length === 2) {
        //const numbers = inputLines[0].split(',').map(Number);
        const arrayStr = inputLines[0].replace(/\[|\]/g, '');
        const numbers = arrayStr.split(',').map(Number);
        const target = parseInt(inputLines[1], 10);
        const result = twosum(numbers, target);
        console.log(`[${result.join(',')}]`);
        //rl.close();
    }
})