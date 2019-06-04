const TBT = require('./traverse_binary_tree');

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var inp = [3,2,1,5,4,8,0,9,6];

function BT () {
    this.root = null;
    this.insertNode = insertNode; 
}

function insertNode (val) {
    if (!this.root) {
        this.root = new Node(val);
    } else {
        var newNode = new Node(val);
        var cur = this.root;
        while (cur) {
            if (val < cur.value) {
                if (!cur.left) {
                    cur.left = newNode;
                    break;
                } else {
                    cur = cur.left;
                }
            } else {
                if (!cur.right) {
                    cur.right = newNode;
                    break;
                } else {
                    cur = cur.right;
                }
            }
        }
    }
}

var bt = new BT();

inp.forEach(function (el) {
    bt.insertNode(el);
});

var level = 1;

// function preOrder (root) {
//     if (root) {
//         console.log(root.value);
//         preOrder(root.left);
//         preOrder(root.right);
//     }
// }

// function inOrder (root) {
//     if (root) {
//         inOrder(root.left);
//         console.log(root.value);
//         inOrder(root.right);
//     }
// }

// function postOrder (root) {
//     if (root) {
//         postOrder(root.left);
//         postOrder(root.right);
//         console.log(root.value);
//     }
// }

console.log('前序遍历结果：');
TBT.preOrder(bt.root, level);
console.log('中序遍历结果：');
level = 1;
TBT.inOrder(bt.root, level);
console.log('后序遍历结果：');
level = 1;
TBT.postOrder(bt.root, level);

TBT.layerOrder(bt.root);