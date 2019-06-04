// 请为所有数组对象添加一个findDuplicate(n)方法，用于返回该数组中出现频率>=n的元素列表

// [1,2,3,4,1,2,2,2].findDuplicate(2) => [1,2]
// [1,2,3,4,1,2,2,2].findDuplicate(5) => []
// [1,2,3,4,1,2,2,2].findDuplicate(-1) => [1,2,3,4]

// 作者：GeminiKnight9523
// 链接：https://juejin.im/post/5bfe9d7c6fb9a04a102efd9d
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

Array.prototype.findDuplicate = function (n) {
    var record = [], res = [];
    for(var i = 0; i < this.length; i++) {
        record[i] = 1;
        for (var j = i + 1; j < this.length;) {
            if (this[i] === this[j]) {
                record[i]++;
                this.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    for (var k = 0; k < record.length; k++) {
        if (record[k] >= n) {
            res.push(this[k]);
        }
    }
    return res;
};

console.log([1,2,3,4,1,2,2,2].findDuplicate(2));
console.log([1,2,3,4,1,2,2,2].findDuplicate(5));
console.log([1,2,3,4,1,2,2,2].findDuplicate(-1));