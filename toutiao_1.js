/**
 * 实现一个格式化数字的方法
 * 例如：
 * 输入：1234567890
 * 输出：1,234,567,890
 */

function format (num) {
    const arr = String(num).split('').reverse();
    const a = [], len = arr.length;
    arr.forEach((el, index) => {
        a.push(el);
        if ((index + 1) % 3 == 0 && index != len - 1) {
            a.push(',');
        }
    });
    return a.reverse().join('');
}

function format (num) {
    let s = reverseStr(String(num));
    s = s.replace(/(\d{3})/g, '$1,');
    return reverseStr(s);
}

function reverseStr (str) {
    return str.split('').reverse().join('');
}

const res = format(1234567890);
console.log(res);