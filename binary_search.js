/**
 * 二分查找的实现是很容易的，这里单独列出来的目的是为了强调其时间复杂度为logn，刷题过程中
 * 但凡要求算法的时间复杂度为logn的形式，则往二分的思想上靠拢
 */
var a = [1,2,3,4,5,6,7,8,9];

function bs (arr, val) {
    var left = 0, right = arr.length - 1, mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] == val) {
            return mid;
        } else if (arr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(bs(a, 0));