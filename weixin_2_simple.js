// 题目：你是一个专业的强盗，计划在街上抢劫房屋。 每个房子都藏着一定数量的钱，阻止你抢劫他们的唯一限制因素是相邻的房屋有连接的安全系统，如果两个相邻的房子在同一个晚上被闯入，它将自动联系警方。给出一个代表每个房子的金额的非负整数列表，确定今晚可以抢劫的最大金额而不警告警察。

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
// --------------------- 
// 作者：WXX_DLUT 
// 来源：CSDN 
// 原文：https://blog.csdn.net/qq_28726333/article/details/83148611 
// 版权声明：本文为博主原创文章，转载请附上博文链接！

// 状态转移方程  dp[i] = max(dp[i - 2] + input[i], dp[i - 1]);

function rob (arr) {
    if (!arr.length) {
        return 0;
    } else if (arr.length == 1) {
        return arr[0];
    } else {
        var res = [arr[0], Math.max(arr[0], arr[1])];
        for (var i = 2; i < arr.length; i++) {
            res[i] = Math.max(res[i - 2] + arr[i], res[i - 1]);
        }
        return res[i - 1];
    }
}

console.log(rob([3, 2, 3, 3, 1]));