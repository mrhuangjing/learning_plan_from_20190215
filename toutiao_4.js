/**
 * function compile (str) {}
 * const render = compile('${a} ${b} ${a}<div>${c}</div>');
 * render({a: 1, b: 2}); // 1 2 1<div></div>
 */

function compile (str) {

    return (obj) => {
        for (let key in obj) {
            let reg = new RegExp('\\$\\{' + key + '\\}', 'g');
            str = str.replace(reg, obj[key]);
        }
        str = str.replace(/\$\{\w*\}/g, '');
        return str;
    };
}

const render = compile('${a} ${b} ${a}<div>${c}</div>');
const res = render({a: 1, b: 2});
console.log(res);