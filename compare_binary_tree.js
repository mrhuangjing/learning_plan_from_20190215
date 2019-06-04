// 3 二叉树比较
// 1） 写出比较两颗二叉树是否相等(包括结构及节点值)的算法。
// 2）html节点树能否用1）算法比较，是否存在优化方案？ 

// 2) 不能，html节点嵌套深度可能很大，导致递归溢出  可以用二叉树的层序遍历，每次出队的时候比较元素

// 方法一 递归实现
function compareBT(r1, r2) {
    if (r1 == null && r2 == null) { // 均为空
        return true;
    } else if ((r1 != null && r2 == null) || (r1 == null && r2 != null)) { // 一者为空，再者不为空
        return false;
    } else {
        if (r1.value != r2.value) {
            return false;
        } else {
            var resLeft = compareBT(r1.left, r2.left);
            var resRight = compareBT(r1.right, r2.right);
            return (resLeft && resRight);
        }
    }
}

var a1 = [], a2 = [];
function preOrder (root, arr) {
    if (root) {
        arr.push(root.value);
        preOrder(root.left, arr);
        preOrder(root.right, arr);
    }
}

// 方法二 通过遍历比较
function compareBT2 (r1, r2) {
    preOrder(r1, a1);
    preOrder(r2, a2);

    if (a1.length != a2.length) {
        return false;
    } else {
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) {
                return false;
            }
        }
        return true;
    }
}

module.exports = {
    compareBT: compareBT,
    compareBT2: compareBT2
};