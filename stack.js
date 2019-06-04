//栈的js实现

//方式一：栈的数据域和操作方法全为公有
//缺点--不通过对外暴露的公有方法，也能以stack.data = ...的形式直接修改类实例的数据域
function Stack () {
    this.data = [];
}

Stack.prototype.push = function (val) {
    this.data.push(val);
};

Stack.prototype.pop = function () {
    var val = this.data.pop();
    console.log(val);
};

Stack.prototype.peek = function () {
    var len = this.data.length;
    return this.data[len - 1];
};

Stack.prototype.getLen = function () {
    return this.data.length;
};

//clear方法可以省略，直接调reset即可
Stack.prototype.clear = function () {
    this.data = [];
};


//方式二：栈的数据域私有，操作方法公有
function Stack () {
    var data = [];
    this.getData = function () {
        return data;
    };
    this.reset = function () {
        data = [];
    };
}

Stack.prototype.push = function (val) {
    var data = this.getData();
    data.push(val);
};

Stack.prototype.pop = function () {
    var data = this.getData();
    var val = data.pop();
    console.log(val);
};

Stack.prototype.peek = function () {
    var data = this.getData();
    var len = data.length;
    return data[len - 1];
};

Stack.prototype.getLen = function () {
    var data = this.getData();
    return data.length;
};

//clear方法可以省略，直接调reset即可
Stack.prototype.clear = function () {
    this.reset();
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.getLen());
stack.pop();
console.log(stack.peek());
console.log(stack.getLen());
stack.clear();
console.log(stack.getLen());