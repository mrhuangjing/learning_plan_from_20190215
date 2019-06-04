const arr = [1, 2, [3, [4, 5]], 6, 7, [[8], 9], 10];

Array.prototype.flat = function () {
    let res = [];
    this.forEach(el => {
        if (Array.isArray(el)) {
            // res = res.concat(el.flat());
            [].push.apply(res, el.flat());
        } else {
            res.push(el);
        }
    });
    return res;
};

console.log(arr.flat());