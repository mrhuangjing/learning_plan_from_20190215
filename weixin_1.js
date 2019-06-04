// 1. 给定2个单向链表，每个节点包含一个0-9的数字，要求返回他们对应节点相加后产生的链表，例如：
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

function Node (value) {
    this.value = value;
    this.next = null;
}

var a = [2, 4, 3], b = [5, 6, 4];

function add (a, b) {
    var res = [], carry = 0;
    if (a.length > b.length) {
        for (var i = 0; i < b.length - a.length; i++) {
            b.push(0);
        }
    } else {
        for (var i = 0; i < b.length - a.length; i++) {
            a.push(0);
        }
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] + b[i] + carry >= 10) {
            res[i] = a[i] + b[i] + carry - 10;
            carry = 1;
        } else {
            res[i] = a[i] + b[i] + carry;
            carry = 0;
        }
    }

    if (carry) {
        res[i] = 1;
    }

    return res;
}

console.log(add(a, b));