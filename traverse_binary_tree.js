const MyQueue = require('./queue');

function preOrder (root, level) {
    if (root) {
        console.log(root.value, '在第' + level + '层');
        preOrder(root.left, level+ 1);
        preOrder(root.right, level + 1);
    }
}

function inOrder (root, level) {
    if (root) {
        inOrder(root.left, level + 1);
        console.log(root.value, '在第' + level + '层');
        inOrder(root.right, level + 1);
    }
}

function postOrder (root, level) {
    if (root) {
        postOrder(root.left, level + 1);
        postOrder(root.right, level + 1);
        console.log(root.value, '在第' + level + '层');
    }
}

//层序遍历
function layerOrder (root) {
    if (!root) return;

    var queue = new MyQueue.Queue();
    queue.push(root);
    
    console.log('层序遍历结果：');
    while (queue.getLen()) {
        var out = queue.shift();
        if (out.left) {
            queue.push(out.left);
        }
        if (out.right) {
            queue.push(out.right);
        }
        console.log(out.value);
    }
}

module.exports = {
    preOrder: preOrder,
    inOrder: inOrder,
    postOrder: postOrder,
    layerOrder: layerOrder
};