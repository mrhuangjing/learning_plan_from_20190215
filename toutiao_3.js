/**
 * 实现一个sum方法
 * 输入：
 * sum(2,3,4,5,6)(1)(10, 20)(7).value()
 * 输出：58
 */

function sum (...args) {
    let n = 0;

    args.forEach(el => {
        n += el;
    });

    function foo (...params) {
        params.forEach(el => {
            n += el;
        });

        return foo;
    }

    foo.value = () => {
        return n;
    };

    return foo;
}

const res = sum(2,3,4,5,6)(1)(10, 20)(7).value();
console.log(res);