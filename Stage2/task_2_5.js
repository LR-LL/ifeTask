initial();

function initial() {
    var leftInBtn = document.getElementById('leftIn');
    var leftOutBtn = document.getElementById('leftOut');
    var rightInBtn = document.getElementById('rightIn');
    var rightOutBtn = document.getElementById('rightOut');
    var queue = document.getElementById('queue');
    var numbers = document.getElementById('randomNumBtn');
    var bubbleBtn = document.getElementById('bubble');

    leftInBtn.onclick = lI;
    leftOutBtn.onclick = lO;
    rightInBtn.onclick = rI;
    rightOutBtn.onclick = rO;
    numbers.onclick = randomNum;
    bubbleBtn.onclick = bubbleSort;
}

function lI() {
    var userInput = document.getElementById('input');
    var data = userInput.value;
    if (data < 10 || data > 100) {
        alert('The input must be [10,100]!');
        return false;
    }
    var queue = document.getElementById('queue');
    if (queue.children.length > 60) {
        alert('The number of queue is overflow ！');
    }
    queue.style.listStyle = "none";
    var li = document.createElement('li');
    //li.innerHTML = data;
    li.style.backgroundColor = 'red';
    //li.style.color = 'white';
    li.style.display = 'inline-block';
    li.style.margin = '2px';
    li.style.padding = '10px';
    li.style.height = data + 'px';
    li.style.width = '10px';
    li.setAttribute("onclick", "remove(this)");
    if (queue.children.length != 0) {
        queue.insertBefore(li, queue.children[0]);
    } else {
        queue.appendChild(li);
    }
}

function lO() {
    var queue = document.getElementById('queue');
    var list = queue.getElementsByTagName('li');
    var length = list.length;
    var removed = queue.removeChild(queue.children[0]);
    //alert(removed.innerHTML);
}

function rI() {
    var userInput = document.getElementById('input');
    var data = userInput.value;
    if (data < 10 || data > 100) {
        alert('The input must be [10,100]!');
        return false;
    }
    var queue = document.getElementById('queue');
    if (queue.children.length > 60) {
        alert('The number of queue is overflow ！');
    }
    queue.style.listStyle = "none";
    var li = document.createElement('li');
    //sli.innerHTML = data;
    li.style.backgroundColor = 'red';
    //li.style.color = 'transparent';
    li.style.display = 'inline-block';
    li.style.margin = '2px';
    li.style.padding = '10px';
    li.style.height = data + 'px';
    li.style.width = '10px';
    li.setAttribute("onclick", "remove(this)");
    queue.appendChild(li);
}

function rO() {
    var queue = document.getElementById('queue');
    var list = queue.getElementsByTagName('li');
    var length = list.length;
    var removed = queue.removeChild(queue.children[length - 1]);
    //alert(removed.innerHTML);
}

function remove(o) {
    var parent = o.parentElement; //获取o的父节点
    parent.removeChild(o); //利用父节点将自己删除
}

function randomNum() {
    var data = [];
    var length = 20;
    var queue = document.getElementById('queue');
    queue.style.listStyle = "none";
    if (queue.children.length >= 60) {
        alert('The number of queue is overflow!');
        return false;
    }
    for (var i = 0; i < length; i++) {
        data[i] = Math.floor(Math.random() * 90 + 10);
        var li = document.createElement('li');
        var text = document.createElement('p');
        text.innerHTML = data[i];
        text.style.display = 'none';
        li.style.backgroundColor = 'red';
        li.style.display = 'inline-block';
        li.style.margin = '2px';
        li.style.padding = '10px';
        li.style.height = data[i] + 'px';
        li.style.width = '10px';
        li.appendChild(text);
        li.setAttribute("onclick", "remove(this)");
        queue.appendChild(li);
    }
}

function bubbleSort() {
    var data = [];
    var temp;
    var queue = document.getElementById('queue');
    for (var i = 0; i < queue.children.length; i++) {
        data.push(queue.children[i].children[0].innerHTML);
    }
    // for(var j=0;j<data.length-1;j++){
    //   for(var m=0;m<data.length-j-1;m++){
    //     if (data[m]>data[m+1]) {
    //       temp=data[m+1];
    //       data[m+1]=data[m];
    //       data[m]=temp;
    //     }
    //     var t=setTimeout(function(m){
    //       queue.children[m].style.height = data[m] + 'px';
    //       queue.children[m].children[0].innerHTML=data[m];
    //       queue.children[m+1].style.height = data[m+1] + 'px';
    //       queue.children[m+1].children[0].innerHTML=data[m+1];
    //   },m*100,m);
    //     // queue.children[m].style.height = data[m] + 'px';
    //     // queue.children[m].children[0].innerHTML=data[m];
    //     // queue.children[m+1].style.height = data[m+1] + 'px';
    //     // queue.children[m+1].children[0].innerHTML=data[m+1];
    //   }
    // }
    for (var j = 0; j < data.length - 1; j++) {
        var t = setTimeout(function(j) {
            for (var m = 0; m < data.length - j - 1; m++) {
                if (data[m] > data[m + 1]) {
                    temp = data[m + 1];
                    data[m + 1] = data[m];
                    data[m] = temp;
                }
                queue.children[m].style.height = data[m] + 'px';
                queue.children[m].children[0].innerHTML = data[m];
                queue.children[m + 1].style.height = data[m + 1] + 'px';
                queue.children[m + 1].children[0].innerHTML = data[m + 1];
            }
        }, j * 200, j)
    }
}
