// 情形一
setImmediate(function(){
    console.log(1);
},0);
setTimeout(function(){
    console.log(2);
},0);
new Promise(function(resolve){
    console.log(3);
    resolve();
    console.log(4);
}).then(function(){
    console.log(5);
});
console.log(6);
process.nextTick(function(){
    console.log(7);
});
console.log(8);

// **macro-task: script (整体代码)，setTimeout, setInterval, setImmediate, I/O, UI rendering. 
// micro-task: process.nextTick, Promise(原生)，Object.observe，MutationObserver**

// 先后顺序：process.nextTick > promise > setTimeout > setImmediate

// 情形二
const foo = i => () => console.log(i)
// 等价于  function foo (i) {
//     return function () {
//         console.log(i);
//     };
// }
setTimeout(foo(1), 0)
setImmediate(foo(2))
process.nextTick(foo(3))
Promise.resolve().then(foo(4))
