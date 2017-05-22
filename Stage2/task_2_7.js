// addLoadEvent(preorderTraversal);
var q = [];
var root = document.getElementById('rootNode');

function showNode(node) {
    node.style.backgroundColor = 'blue';
}

function resetNode(node) {
    node.style.backgroundColor = 'white';
}

function preorderTraversal(node) { //前序遍历
    if (!(node == null)) {
        q.push(node);
        preorderTraversal(node.children[0]);
        preorderTraversal(node.children[1]);
    }
}

function midorderTraversal(node) { //中序遍历
    if (!(node == null)) {
        midorderTraversal(node.children[0]);
        q.push(node);
        midorderTraversal(node.children[1]);
    }
}

function posteriorTraversal(node) { //后序遍历
    if (!(node == null)) {
        posteriorTraversal(node.children[0]);
        posteriorTraversal(node.children[1]);
        q.push(node);
    }
}

function floorTraversal(node) { //层序遍历
    var queuePre = [];
    queuePre.push(node);
    while (queuePre.length > 0) {
        var t = queuePre.shift();
        for (var j = 0; j < t.children.length; j++) {
            if (t.children[j] != null) {
                queuePre.push(t.children[j]);
            }
        }
        q.push(t);
    }
}

var preorderNode = document.getElementById('preorder');
var midorderNode = document.getElementById('midorder');
var posteriorNode = document.getElementById('posterior');
var floorNode = document.getElementById('floor');
preorderNode.onclick = function() {
    q = [];
    preorderTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if (i - 1 > -1) {
                resetNode(q[i - 1]); //将前一个节点的背景颜色还原
            }
            if (i < q.length) {
                showNode(q[i]);
            }
        }, (i + 1) * 500, i);
    }
};
midorderNode.onclick = function() {
    q = [];
    midorderTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if (i - 1 > -1) {
                resetNode(q[i - 1]);
            }
            if (i < q.length) {
                showNode(q[i]);
            }
        }, (i + 1) * 500, i);
    }
};
posteriorNode.onclick = function() {
    q = [];
    posteriorTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if (i - 1 > -1) {
                resetNode(q[i - 1]);
            }
            if (i < q.length) {
                showNode(q[i]);
            }
        }, (i + 1) * 500, i);
    }
}
floorNode.onclick = function() {
    q = [];
    floorTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if (i - 1 > -1) {
                resetNode(q[i - 1]);
            }
            if (i < q.length) {
                showNode(q[i]);
            }
        }, (i + 1) * 500, i);
    }
}
