/*
    本例是对js数组forEach方法的实现
    根据实现方式，可见forEach感知不到break（语法错误）、continue（语法错误）、return（无作用，相当于函数返回）语句的原因
    break和continue需要在循环结构中使用，下面写法中，实则是在forEach的cbk中写这两种语句，而不在外层的循环体中，因此会报语法错误
    return在cbk中相当于cbk函数的返回，不会影响外层的for循环，因而不起作用
    要想中断forEach函数的执行，唯有通过throw error的方式，然后通过try catch结构捕获，执行后面的逻辑
*/
Array.prototype._forEach = function (cbk) {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        cbk(this[i], i);
    }
};

var a = [1,2,3,4,5,6];

try {
    a._forEach(function(el, index){
        console.log(el, index);
        if (el == 3) {
            throw new Error(el);
        }
    });
} catch (e) {
    console.log(e)
}
