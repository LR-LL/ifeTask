//遍历效果
function showNode(node) {
    node.style.backgroundColor = '#7AFEC6'; //通过此方法添加的样式是内联样式，优先级比较高，可能导致后面通过class设置的样式无法显示
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
//前序遍历节点树
function preorderTravesal(node) {
    if (node != null) {
        q.push(node);
        for (var i = 0; i < node.children.length; i++) {
            preorderTravesal(node.children[i]);
        }
    }
}
//后序遍历节点树
function posteriorTraversal(node) {
    if (node != null) {
        for (var i = 0; i < node.children.length; i++) {
            posteriorTraversal(node.children[i]);
        }
        q.push(node);
    }
}
//层序遍历节点树
function floorTraversal(node) {
    var queuePre = [];
    queuePre.push(node);
    while (queuePre.length > 0) {
        var t = queuePre.shift();
        for (var j = 0; j < t.children.length; j++) {
            if (t.children[j] !=
                null) {
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
var nodeList = document.getElementsByTagName('div');
var removeBtn = document.getElementById('remove');
var appendBtn = document.getElementById('append');
//实现添加节点效果
appendBtn.onclick = function() {
    var current = document.getElementsByClassName('selected')[0];
    if (current) {
        var text = search.value;
        if (text) {
            var node = document.createElement('div');
            node.innerHTML = text;
            node.setAttribute('class', 'selected');
            current.appendChild(node);
            current.className = 'initial';
            current.style.backgroundColor = 'white';
            node.onclick = selectedShow; //加入选中效果
        } else {
            alert('Please enter your new content !');
        }
    } else {
        alert('Please select a parentElement !');
    }
}
//实现删除效果
function remove(node) {
    var parent = node.parentElement;
    parent.removeChild(node);
}
removeBtn.onclick = function() {
    var current = document.getElementsByClassName('selected')[0];
    if (current) {
        remove(current);
    } else {
        alert('You have not selected any content !');
    }
}
//实现点击选中内容显示效果
function selectedShow(e) {
    var preSelected = document.getElementsByClassName('selected')[0];
    if (preSelected) {
        //preSelected.setAttribute('class','inital');//两种更新元素class属性的方法
        preSelected.className = 'initial';
        preSelected.style.backgroundColor = 'white'; //不用resetNode的原因是需要改变class属性来取消标记
    }
    for (var i = 0; i < nodeList.length; i++) {
        resetNode(nodeList[i]); //重置所有节点回到初始状态
    }
    e.stopPropagation(); //阻止事件冒泡至父元素
    this.setAttribute('class', 'selected');
    this.style.backgroundColor = 'pink';
    this.style.color = 'black';
}
for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].onclick = selectedShow;
}
//实现点击文本框后全选其内容
search.onclick = function() {
    this.focus();
    this.select();
};
//前序遍历查询
preOrderBtn.onclick = function() {
    for (var j = 0; j < q.length; j++) {
        resetNode(q[j]);
    } //重新点击按钮时重置所有状态
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
//后序遍历查询
posteriorBtn.onclick = function() {
    for (var j = 0; j < q.length; j++) {
        resetNode(q[j]);
    } //重新点击按钮时重置所有状态
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
//层序遍历查询
floorBtn.onclick = function() {
    for (var j = 0; j < q.length; j++) {
        resetNode(q[j]);
    } //重新点击按钮时重置所有状态
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
