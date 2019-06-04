// 4. 给定两个有序（从小到大）数组 nums1 和nums2，他们的大小分别为 m和 n，要求找出2个数组合并后的中位数，要求算法实现的时间复杂度为 O(log (m+n))
// 示例 1:
// nums1 = [1, 3]
// nums2 = [2]
// 中位数是 2.0
// 示例 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// 中位数是 (2 + 3)/2 = 2.5

var nums1 = [1, 3], nums2 = [2];
var nums1 = [1, 2], nums2 = [3, 4];

function findMid (arr) {
    var mid = parseInt(arr.length / 2);
    if (arr.length % 2 == 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        return arr[mid];
    }
}

function cutArr (arr, isRight) {
    var mid = parseInt(arr.length / 2);

    if (arr.length % 2 == 0) {
        if (isRight) {
            return arr.slice(mid);
        } else {
            return arr.slice(0, mid);
        }
    } else {
        if (isRight) {
            return arr.slice(mid);
        } else {
            return arr.slice(0, mid + 1);
        }
    }
}

function solve (a, b) {
    var a_m = findMid(a), b_m = findMid(b);

    if (a.length == 1 || b.length == 1) {
        return (a_m + b_m) / 2;
    }

    if (a_m == b_m) {
        return a_m;
    } else if (a_m > b_m) {
        return solve(cutArr(a, false), cutArr(b, true));
    } else {
        return solve(cutArr(a, true), cutArr(b, false));
    }
}

console.log(solve(nums1, nums2));