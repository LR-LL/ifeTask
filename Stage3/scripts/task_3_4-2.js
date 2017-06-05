var count = 0;
var wholeTable = document.getElementById('whole');
var carryOutBtn = document.getElementById('carryOut');
carryOutBtn.onclick = function() {
    var userInput = document.getElementById('userOrder');
    var order = userInput.value;
    order = order.toLowerCase();
    if (order == 'go') {
        if ((count + 4 * 1000) % 4 == 0) {
            var col, row; //代表所在行列
            var initial = document.getElementsByClassName('initial')[0];
            parent = initial.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td initial') {
                    col = i; //找到所在列
                    if (row != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 1) {
                wholeTable.children[row - 1].children[col].className = 'td initial'; //如果没达到边界状态上移
                wholeTable.children[row - 1].children[col].style.animation = 'goUp 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 1) {
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            parent = rightDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td rightDirec') {
                    col = i; //找到所在列
                    if (col != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 10) {
                parent.children[col + 1].className = 'td rightDirec';
                parent.children[col + 1].style.animation = 'goRig 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 2) {
            var col, row; //代表所在行列
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            parent = bottomDirec.parentElement; //找到所在行tr节点
            row = parseInt(parent.children[0].innerHTML); //得出所在行数字,因为有+号，这里需要转换为数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td bottomDirec') {
                    col = i; //找到所在列
                    if (row != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 10) {
                wholeTable.children[row + 1].children[col].className = 'td bottomDirec'; //如果没达到边界状态上移
                wholeTable.children[row + 1].children[col].style.animation = 'goDown 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 3) {
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            parent = leftDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td leftDirec') {
                    col = i; //找到所在列
                    if (col != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 1) {
                parent.children[col - 1].className = 'td leftDirec';
                parent.children[col - 1].style.animation = 'goLef 1s linear';
            }
        }
    } else if (order == 'tun lef') {
        count--;
        if ((count + 4 * 1000) % 4 == 0) {
            var rightDirec = document.getElementsByClassName('rightDirec')[0]; //根据之前的状态找到节点
            rightDirec.className = 'td initial';
            rightDirec.style.animation = 'rotateLef10 1s linear';
        } else if ((count + 4 * 1000) % 4 == 1) {
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td rightDirec';
            bottomDirec.style.animation = 'rotateLef21 1s linear';
        } else if ((count + 4 * 1000) % 4 == 2) {
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td bottomDirec';
            leftDirec.style.animation = 'rotateLef32 1s linear';
        } else {
            var initial = document.getElementsByClassName('initial')[0];
            initial.className = 'td leftDirec';
            initial.style.animation = 'rotateLef03 1s linear';
        }
    } else if (order == 'tun rig') {
        count++;
        if ((count + 4 * 1000) % 4 == 0) {
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td initial';
            leftDirec.style.animation = 'rotateRig30 1s linear';
        } else if ((count + 4 * 1000) % 4 == 1) {
            var initial = document.getElementsByClassName('initial')[0];
            initial.className = 'td rightDirec';
            initial.style.animation = 'rotateRig01 1s linear';
        } else if ((count + 4 * 1000) % 4 == 2) {
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            rightDirec.className = 'td bottomDirec';
            rightDirec.style.animation = 'rotateRig12 1s linear';
        } else {
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td leftDirec';
            bottomDirec.style.animation = 'rotateRig23 1s linear';
        }
    } else if (order == 'tun bac') {
        count += 2;
        if ((count + 4 * 1000) % 4 == 0) {
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td initial';
            bottomDirec.style.animation = 'rotateBac20 1s linear';
        } else if ((count + 4 * 1000) % 4 == 1) {
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td rightDirec';
            leftDirec.style.animation = 'rotateBac31 1s linear';
        } else if ((count + 4 * 1000) % 4 == 2) {
            var initial = document.getElementsByClassName('initial')[0];
            initial.className = 'td bottomDirec';
            initial.style.animation = 'rotateBac02 1s linear';
        } else {
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            rightDirec.className = 'td leftDirec';
            rightDirec.style.animation = 'rotateBac13 1s linear';
        }
    } else {
        if (!order) {
            alert('指令不能为空!\n请输入指令“go”（前进）、“tun lef”（左转）、“tun rig”（右转）、“tun bac”（向后转）。');
        } else {
            alert('指令格式错误!\n请输入指令“go”（前进）、“tun lef”（左转）、“tun rig”（右转）、“tun bac”（向后转）。');
        }
    }
}
