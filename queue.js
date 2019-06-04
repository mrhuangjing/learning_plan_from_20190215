//队列的js实现

function Queue () {
    var data = [];
    this.getData = function () {
        return data;
    };
    this.reset = function () {
        data = [];
    };
};

Queue.prototype.push = function (val) {
    var data = this.getData();
    data.push(val);
};

Queue.prototype.shift = function () {
    var data = this.getData();
    return data.shift();
};

Queue.prototype.getLen = function () {
    var data = this.getData();
    return data.length;
};

//clear方法可以省略，直接调reset即可
Queue.prototype.clear = function () {
    this.reset();
};

// var queue = new Queue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue.getData());
// console.log(queue.shift());
// console.log(queue.getData());
// console.log(queue.getLen());
// queue.clear();
// console.log(queue.getLen());

module.exports = {
    Queue: Queue
};