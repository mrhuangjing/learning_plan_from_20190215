// 给定一个存放整数的数组，重新排列数组使得数组左边为奇数，右边为偶数。
// 要求：空间复杂度 O(1)，时间复杂度为 O(n)
// 空间复杂度 O(1) --> 不创建新的数组/集合
// 时间复杂度为 O(n) --> 最多只用一层循环

// 总结：遍历一维数组的方法
// 1.从左至右
// 2.从右至左
// 3.从两边到中间
// 本题采用的是从两边到中间的遍历方案

var a = [3,1,2,4,5,8,7,6,9,0,9,7,3,3,1,9,4,6,8];

function solve (arr) {
    var i = 0, j = arr.length - 1;
    while (i < j) {
        if (arr[i] % 2 == 0 && arr[j] % 2 != 0) { // 左偶右奇
            swap(arr, i, j);
            i++;
            j--;
        } else if (arr[i] % 2 == 0 && arr[j] % 2 == 0) { // 左偶右偶
            j--;
        } else if (arr[i] % 2 != 0 && arr[j] % 2 != 0) { // 左奇右奇
            i++;
        } else { // 左奇右偶
            i++;
            j--;
        }
    }
    return arr;
}

function swap (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(solve(a));