//动态规划の0-1背包问题

/** 
 * 这里再重新分析一个0-1背包问题的状态方程：

 * 设 dp[i][j] 表示：在背包最大承重为 j 时，可选的物品件数有 i 件 的情况下，背包装下的物品的最大价值。

 * dp[i-1][j-weight[i-1]]+value[i-1]  表示：当将第 i 件物品装入背包时，背包还能承受的重量变成: j-weight[i-1]  (weight[]数组下标0存储第一件物品的重量)
 
 * 由于第 i 件物品已经考虑了(将之装入到背包了)，故现在可装入的物品 只有 i-1 件了。

 * dp[i-1][j]表示：不将第 i 件物品装入背包。此时，本次选择对背包的承重没有影响，故 j 不变。由于第 i 件物品已经考虑了(不把它装入背包)，故现在可装入的物品只有 i-1 件了。
 
 * 由于我们要找能装入背包的最大价值，在上面两种情形下，哪种选择的导致的价值最大，就选谁。从而状态方程如下：--取二者中较大的那个。
 
 * dp[i][j]=max{dp[i-1][j-weight[i-1]]+value[i-1]， dp[i-1][j]}
*/ 

var weighs = [2, 2, 6, 5, 4];
var values = [6, 3, 5, 4, 6];

var weigh = 10, n = 5;

var res = [];
for (var i = 0; i <= n; i++) {
    res[i] = [];
    for (var j = 0; j <= weigh; j++) {
        if (i == 0 || j == 0) {
            res[i][j] = 0;
        } else {
            res[i][j] = -1;
        }
    }
}

//自顶向下+填表
function pack (n, weigh) {
    if (res[n][weigh] >= 0) {
        return res[n][weigh];
    }
    if (weigh < weighs[n - 1]) {
        res[n][weigh] = pack(n - 1, weigh);
    } else {
        res[n][weigh] = Math.max(pack(n - 1, weigh - weighs[n - 1]) + values[n - 1], pack(n - 1, weigh));
    }
    return res[n][weigh];
}

//自底向上
function pack (n, weigh) {
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= weigh; j++) {
            if (j < weighs[i - 1]) {
                res[i][j] = res[i - 1][j];
                continue;
            }
            res[i][j] = Math.max(res[i - 1][j - weighs[i - 1]] + values[i - 1], res[i - 1][j]);
        }
    }
    return res[n][weigh];
}

//输出选中的物品编号
function output () {
    var j = weigh;
    for (var i = 1; i <= n; i++) {
        if (res[i][j] > res[i - 1][j]) {
            console.log('选中第' + i + '个物品');
            j = j - weighs[i - 1];
            if (j < 0) break;
        }
    }
}

console.log(pack(5, 10));
output();