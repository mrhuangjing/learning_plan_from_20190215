// n级台阶，一次上1级或2级，共有多少种方法

var resMap = {0: 0, 1: 1, 2: 2};

function f (n) {
    if (resMap[n]) {
        return resMap[n];
    }
    resMap[n] = f(n - 1) + f(n - 2);
    return resMap[n];
    
}

function f (n) {
    for (var i = 3; i <= n; i++) {
        resMap[i] = resMap[i - 1] + resMap[i - 2];
    }
    return resMap[n];
}

function f (n) {
    if (n == 0 || n == 1 || n == 2) {
        return n;
    }
    var res_i = 2, res_i_1 = 1, res_i_2 = 0;
    for (var i = 3; i <= n; i++) {
        res_i_2 = res_i_1;
        res_i_1 = res_i;
        res_i = res_i_1 + res_i_2;
    }
    return res_i;
}

console.log(f(11));