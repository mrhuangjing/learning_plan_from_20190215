const CBT = require('./compare_binary_tree');
const TBT = require('./traverse_binary_tree');

function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function createBT (node, side) {
    var cin = inp.shift();
    if (cin == '#') {
        side ? node[side] = null : node.value = null;
    } else if (typeof cin != 'undefined') {
        if (!side) {
            node.value = cin;
            createBT(node, 'left');
            createBT(node, 'right');
        } else {
            node[side] = new Node(cin);
            createBT(node[side], 'left');
            createBT(node[side], 'right');
        }
    }
}

var str = 'ABDG##H###CE#I##F##';
var inp = str.split('');

var root = new Node();
createBT(root);

str = 'ABDG##H###CE#I##X##';
inp = str.split('');

var root2 = new Node();
createBT(root2);

console.log('二叉树比较结果', CBT.compareBT2(root, root2));

var level = 1;

// function preOrder (root, level) {
//     if (root) {
//         console.log(root.value, level ? '在第' + level + '层' : '');
//         preOrder(root.left, level+ 1);
//         preOrder(root.right, level + 1);
//     }
// }

// function inOrder (root, level) {
//     if (root) {
//         inOrder(root.left, level + 1);
//         console.log(root.value, level ? '在第' + level + '层' : '');
//         inOrder(root.right, level + 1);
//     }
// }

// function postOrder (root, level) {
//     if (root) {
//         postOrder(root.left, level + 1);
//         postOrder(root.right, level + 1);
//         console.log(root.value, level ? '在第' + level + '层' : '');
//     }
// }

console.log('前序遍历结果：');
TBT.preOrder(root, level);
console.log('中序遍历结果：');
level = 1;
TBT.inOrder(root, level);
console.log('后序遍历结果：');
level = 1;
TBT.postOrder(root, level);

TBT.layerOrder(root);