var btn = document.getElementById('btn');
var obj = new AlertFrame(); //新建一个弹出层对象
btn.onclick = obj.alertShow;

function AlertFrame() {
    this.alertShow = alertShow;
    this.alertHidden = alertHidden;
}

function alertShow() {
    var xpos, ypos, initTop, initLeft, flag;
    var body = document.getElementsByTagName('body')[0];
    var parentDiv = document.createElement('div');
    parentDiv.className = 'grayCover';
    parentDiv.id = 'grayC';
    body.appendChild(parentDiv);
    parentDiv.onclick = alertHidden;
    var alertFrame = document.createElement('div');
    alertFrame.className = 'frameCSS';
    alertFrame.id = 'frameC';
    body.appendChild(alertFrame);
    var headArea = document.createElement('div');
    headArea.className = 'headCSS';
    headArea.innerHTML = '这是浮出层可拖动区域';
    headArea.onmousedown = mDown;
    headArea.onmousemove = move;
    headArea.onmouseup = mUp;
    alertFrame.appendChild(headArea);
    var textArea = document.createElement('p');
    textArea.innerHTML = '这是一个浮出层';
    textArea.className = 'textCSS';
    alertFrame.appendChild(textArea);
    var confirm = document.createElement('input');
    confirm.type = 'button';
    confirm.value = '确认';
    confirm.className = 'confirmCSS';
    alertFrame.appendChild(confirm);
    confirm.onclick = alertHidden;
    var cancle = document.createElement('input');
    cancle.type = 'button';
    cancle.value = '取消';
    cancle.className = 'cancleCSS';
    alertFrame.appendChild(cancle);
    cancle.onclick = alertHidden;
    var scrollSelect = document.createElement('input');
    scrollSelect.type = 'button';
    scrollSelect.value = '禁用滚动';
    scrollSelect.count = '0';
    scrollSelect.className = 'scrollCSS';
    alertFrame.appendChild(scrollSelect);
    scrollSelect.onclick = preventScroll;

    function mDown(e) {
        e.stopPropagation();
        xpos = e.clientX;
        ypos = e.clientY;
        initTop = this.parentElement.offsetTop;
        initLeft = this.parentElement.offsetLeft;
        flag = 1;
    }

    function move(e) {
        e.stopPropagation();
        if (flag) {
            var xposCurrent = e.clientX;
            var yposCurrent = e.clientY;
            this.parentElement.style.left = parseInt(xposCurrent) - parseInt(xpos) + parseInt(initLeft) + 'px';
            this.parentElement.style.top = parseInt(yposCurrent) - parseInt(ypos) + parseInt(initTop) + 'px';
        }
    }

    function mUp(e) {
        e.stopPropagation();
        flag = 0;
    }

    function preventScroll() {
        this.count++;
        if (this.count % 2 == 1) {
            this.value = '启动滚动';
            window.onmousewheel = function(e) {
                e.preventDefault();
            };
        } else {
            this.value = '禁用滚动';
            window.onmousewheel = null;
        }
    }

}

function alertHidden() {
    var body = document.getElementsByTagName('body')[0];
    var grayC = document.getElementById('grayC');
    var alertFrame = document.getElementById('frameC');
    body.removeChild(grayC);
    body.removeChild(alertFrame);
}
