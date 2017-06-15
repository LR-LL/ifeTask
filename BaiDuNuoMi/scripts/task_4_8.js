var clickArea = document.getElementsByClassName('area')[0];
clickArea.oncontextmenu = function(e) {
    e.preventDefault();
    if (!document.getElementsByClassName('meanu')[0]) {
        var meanu = document.createElement('ul');
        meanu.className = 'meanu';
        var item1 = document.createElement('li');
        item1.className = 'item';
        item1.innerHTML = 'Meanu iteam 1';
        meanu.appendChild(item1);
        var item2 = document.createElement('li');
        item2.className = 'item';
        item2.innerHTML = 'Meanu iteam 2';
        meanu.appendChild(item2);
        var item3 = document.createElement('li');
        item3.className = 'item';
        item3.innerHTML = 'Meanu iteam 3';
        meanu.appendChild(item3);
        this.appendChild(meanu);
    } else {
        var meanu = document.getElementsByClassName('meanu')[0];
    }
    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    if (maxWidth - mouseX < meanu.offsetWidth) {
        meanu.style.left = e.pageX - meanu.offsetWidth + 'px';
        meanu.style.top = e.pageY + 'px';
    } else {
        meanu.style.left = e.pageX + 'px';
        meanu.style.top = e.pageY + 'px';
    }
    if (maxHeight - mouseY < meanu.offsetHeight) {
        meanu.style.top = e.pageY - meanu.offsetHeight + 'px';
    }
}
clickArea.onclick = function(e) {
    var meanu = document.getElementsByClassName('meanu')[0];
    if (e.target != this) { //阻止子元素响应该点击事件；
        return false;
    }
    this.removeChild(meanu);
}
