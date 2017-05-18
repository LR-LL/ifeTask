initial();
function initial(){
  var leftInBtn = document.getElementById('leftIn');
  var leftOutBtn = document.getElementById('leftOut');
  var rightInBtn = document.getElementById('rightIn');
  var rightOutBtn = document.getElementById('rightOut');
  var search= document.getElementById('searchBtn');
  var searchInput=document.getElementById('searchText');

  leftInBtn.onclick = lI;
  leftOutBtn.onclick = lO;
  rightInBtn.onclick = rI;
  rightOutBtn.onclick = rO;
  search.onclick=searchMatch;
  searchInput.onclick=selectAll;

}
function lI() {
    var userInput = document.getElementById('input');
    var dataStr = userInput.value;
    var dataArr = dataStr.split(/[\s\,\;\n\，\、\；]+/);
    var queue = document.getElementById('queue');
    for (var i = 0; i < dataArr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = dataArr[i];
        li.setAttribute('class', 'queueLi');
        li.setAttribute('onclick','remove(this)');
        if (queue.children.length != 0) {
            queue.insertBefore(li, queue.children[0]);
        } else {
            queue.appendChild(li);
        }
    }
}

function lO() {
    var queue = document.getElementById('queue');
    var list = queue.getElementsByTagName('li');
    var length = list.length;
    var removed = queue.removeChild(queue.children[0]);
    alert(removed.innerHTML);
}

function rI() {
    var userInput = document.getElementById('input');
    var dataStr = userInput.value;
    var dataArr = dataStr.split(/[\s\,\;\n\，\、\；]+/);
    var queue = document.getElementById('queue');
    for (var i = 0; i < dataArr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = dataArr[i];
        li.setAttribute('class', 'queueLi');
        li.setAttribute('onclick','remove(this)');
        queue.appendChild(li);
    }
}

function rO() {
    var queue = document.getElementById('queue');
    var list = queue.getElementsByTagName('li');
    var length = list.length;
    var removed = queue.removeChild(queue.children[length - 1]);
    alert(removed.innerHTML);
}

function remove(o) {
    var parent = o.parentElement; //获取o的父节点
    parent.removeChild(o); //利用父节点将自己删除
}
function searchMatch(){
  var text=document.getElementById('searchText').value;
  var queue=document.getElementById('queue');

  for(var i=0;i<queue.children.length;i++){
    var source=queue.children[i].innerHTML;
    var pattern=new RegExp('^['+source+']+$');
    if (pattern.test(text)) {
      queue.children[i].className='highLight';
    }else {
      queue.children[i].className='queueLi';
    }
  }
}
function selectAll(){
  this.focus();
  this.select();
}
