//动态规划の钢条切割问题

var lenPriceMap = {
    1: 1,
    2: 5,
    3: 8,
    4: 9,
    5: 10,
    6: 17,
    7: 17,
    8: 20,
    9: 24,
    10: 30
};

//自顶向下+填表
var res = {
    0: 0
};

function cut (n) {
    if (res[n]) {
        return res[n];
    }
    res[n] = 0;
    for (var i = 1; i <= n; i++) {
        res[n] = Math.max(res[n], (lenPriceMap[i] + cut(n - i)) || 0); // lenPriceMap[i]有可能不存在
    }
    return res[n];
}

//自底向上
function cut (n) {
    var res = {
        0: 0
    };
    for (var j = 1; j <= n; j++) {
        res[j] = 0;
        for (var i = 1; i <= j; i++) {
            res[j] = Math.max(res[j], (lenPriceMap[i] + res[j - i]) || 0);
        }
    }
    return res[n];
}

console.log(cut(15));