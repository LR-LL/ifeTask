//遍历效果
function showNode(node) {
    node.style.backgroundColor = '#7AFEC6';
}
//遍历完的重置
function resetNode(node) {
    node.style.backgroundColor = 'white';
    node.style.color = 'black';
}
//查询到对应内容高亮效果
function highLight(node) {
    node.style.backgroundColor = '#80FFFF';
    node.style.color = 'white';
}
//前序遍历
function preorderTravesal(node) {
    if (node != null) {
        q.push(node);
        for (var i = 0; i < node.children.length; i++) {
            preorderTravesal(node.children[i]);
        }
    }
}
//后序遍历
function posteriorTraversal(node) {
    if (node != null) {
        for (var i = 0; i < node.children.length; i++) {
            posteriorTraversal(node.children[i]);
        }
        q.push(node);
    }
}
//层序遍历
function floorTraversal(node) {
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
//获取节点内文本节点内容，过滤因HTML代码产生的换行和空格；
function getNodeText(node) {
    if (node != null) {
        var child = node.childNodes;
        var text = '';
        var newText = '';
        for (var i = 0; i < child.length; i++) {
            if (child[i].nodeType == 3) {
                text += child[i].nodeValue;
            }
        }
        var a = text.split(/[\s\n]+/);
        text = a.join('');
        return text;
    }
}
//整体效果整合，可能是因为作用域问题，加上window.onload事件后执行不了。
var q = [];
var root = document.getElementById('rootNode');
var preOrderBtn = document.getElementById('preorder');
var posteriorBtn = document.getElementById('posterior');
var floorBtn = document.getElementById('floor');
var search = document.getElementById('userInput');
search.onclick = function() {
    this.focus();
    this.select();
}; //实现点击文本框后全选其内容

preOrderBtn.onclick = function() {
    var count = 0;
    q = [];
    preorderTravesal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if ((i - 1 > -1) && (getNodeText(q[i - 1]) != search.value)) {
                resetNode(q[i - 1]);
            } else if (getNodeText(q[i - 1]) == search.value) {
                highLight(q[i - 1]);
                count++;
            }
            if (i < q.length) {
                showNode(q[i]);
            }
            if ((i == q.length) && (count == 0)) {
                alert('未找到相似内容!');
            }
        }, i * 500, i);
    }
};

posteriorBtn.onclick = function() {
    var count = 0;
    q = [];
    posteriorTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if ((i - 1 > -1) && (getNodeText(q[i - 1]) != search.value)) {
                resetNode(q[i - 1]);
            } else if (getNodeText(q[i - 1]) == search.value) {
                highLight(q[i - 1]);
                count++;
            }
            if (i < q.length) {
                showNode(q[i]);
            }
            if ((i == q.length) && (count == 0)) {
                alert('未找到相似内容!');
            }
        }, i * 500, i);
    }
};

floorBtn.onclick = function() {
    var count = 0;
    q = [];
    floorTraversal(root);
    for (var i = 0; i < q.length + 1; i++) {
        var t = setTimeout(function(i) {
            if ((i - 1 > -1) && (getNodeText(q[i - 1]) != search.value)) {
                resetNode(q[i - 1]);
            } else if (getNodeText(q[i - 1]) == search.value) {
                highLight(q[i - 1]);
                count++;
            }
            if (i < q.length) {
                showNode(q[i]);
            }
            if ((i == q.length) && (count == 0)) {
                alert('未找到相似内容!');
            }
        }, i * 500, i);
    }
};
