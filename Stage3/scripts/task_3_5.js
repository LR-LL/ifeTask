var count = 0;
var wholeTable = document.getElementById('whole');
var carryOutBtn = document.getElementById('carryOut');
carryOutBtn.onclick = function() {
    var userInput = document.getElementById('userOrder');
    var order = userInput.value;
    order = order.toLowerCase();
    if (order == 'tra lef') {
        if ((count + 4 * 1000) % 4 == 0) {
            var col, row; //代表所在行列
            var initial = document.getElementsByClassName('initial')[0];
            parent = initial.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td initial') {
                    col = i; //找到所在列
                    if (col != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 1) {
                wholeTable.children[row].children[col - 1].className = 'td initial'; //如果没达到边界状态上移
                wholeTable.children[row].children[col - 1].style.animation = 'traLef 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 1) {
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            parent = rightDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td rightDirec') {
                    col = i; //找到所在列
                    if (col != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 1) {
                parent.children[col - 1].className = 'td rightDirec';
                parent.children[col - 1].style.animation = 'traLef 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 2) {
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            parent = bottomDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td bottomDirec') {
                    col = i; //找到所在列
                    if (col != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 1) {
                parent.children[col - 1].className = 'td rightDirec';
                parent.children[col - 1].style.animation = 'traLef 1s linear';
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
                parent.children[col - 1].style.animation = 'traLef 1s linear';
            }
        }
    } else if (order == 'tra rig') {
        if ((count + 4 * 1000) % 4 == 0) {
            var col, row; //代表所在行列
            var initial = document.getElementsByClassName('initial')[0];
            parent = initial.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td initial') {
                    col = i; //找到所在列
                    if (col != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 10) {
                wholeTable.children[row].children[col + 1].className = 'td initial'; //如果没达到边界状态上移
                wholeTable.children[row].children[col + 1].style.animation = 'traRig 1s linear';
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
                parent.children[col + 1].style.animation = 'traRig 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 2) {
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            parent = bottomDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td bottomDirec') {
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
                parent.children[col + 1].style.animation = 'traRig 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 3) {
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            parent = leftDirec.parentElement;
            var col;
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td leftDirec') {
                    col = i; //找到所在列
                    if (col != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (col != 10) {
                parent.children[col + 1].className = 'td leftDirec';
                parent.children[col + 1].style.animation = 'traRig 1s linear';
            }
        }
    } else if (order == 'tra top') {
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
                wholeTable.children[row - 1].children[col].style.animation = 'traTop 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 1) {
            var col, row; //代表所在行列
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            parent = rightDirec.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td rightDirec') {
                    col = i; //找到所在列
                    if (row != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 1) {
                wholeTable.children[row - 1].children[col].className = 'td rightDirec'; //如果没达到边界状态上移
                wholeTable.children[row - 1].children[col].style.animation = 'traTop 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 2) {
            var col, row; //代表所在行列
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            parent = bottomDirec.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td bottomDirec') {
                    col = i; //找到所在列
                    if (row != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 1) {
                wholeTable.children[row - 1].children[col].className = 'td bottomDirec'; //如果没达到边界状态上移
                wholeTable.children[row - 1].children[col].style.animation = 'traTop 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 3) {
            var col, row; //代表所在行列
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            parent = leftDirec.parentElement; //找到所在行tr节点
            row = parent.children[0].innerHTML; //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td leftDirec') {
                    col = i; //找到所在列
                    if (row != 1) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 1) {
                wholeTable.children[row - 1].children[col].className = 'td leftDirec'; //如果没达到边界状态上移
                wholeTable.children[row - 1].children[col].style.animation = 'traTop 1s linear';
            }
        }
    } else if (order == 'tra bot') {
        if ((count + 4 * 1000) % 4 == 0) {
            var col, row; //代表所在行列
            var initial = document.getElementsByClassName('initial')[0];
            parent = initial.parentElement; //找到所在行tr节点
            row = parseInt(parent.children[0].innerHTML); //得出所在行数字，因为是+，所以强制转换
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td initial') {
                    col = i; //找到所在列
                    if (row != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 10) {
                wholeTable.children[row + 1].children[col].className = 'td initial'; //如果没达到边界状态上移
                wholeTable.children[row + 1].children[col].style.animation = 'traBot 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 1) {
            var col, row; //代表所在行列
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            parent = rightDirec.parentElement; //找到所在行tr节点
            row = parseInt(parent.children[0].innerHTML); //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td rightDirec') {
                    col = i; //找到所在列
                    if (row != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 10) {
                wholeTable.children[row + 1].children[col].className = 'td rightDirec'; //如果没达到边界状态上移
                wholeTable.children[row + 1].children[col].style.animation = 'traBot 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 2) {
            var col, row; //代表所在行列
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            parent = bottomDirec.parentElement; //找到所在行tr节点
            row = parseInt(parent.children[0].innerHTML); //得出所在行数字
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
                wholeTable.children[row + 1].children[col].style.animation = 'traBot 1s linear';
            }
        } else if ((count + 4 * 1000) % 4 == 3) {
            var col, row; //代表所在行列
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            parent = leftDirec.parentElement; //找到所在行tr节点
            row = parseInt(parent.children[0].innerHTML); //得出所在行数字
            for (var i = 0; i < parent.children.length; i++) {
                if (parent.children[i].className == 'td leftDirec') {
                    col = i; //找到所在列
                    if (row != 10) {
                        parent.children[i].className = 'td'; //如果没达到边界，取消状态
                    } else {
                        alert('You have reached the border!');
                    }
                }
            }
            if (row != 10) {
                wholeTable.children[row + 1].children[col].className = 'td leftDirec'; //如果没达到边界状态上移
                wholeTable.children[row + 1].children[col].style.animation = 'traBot 1s linear';
            }
        }
    } else if (order == 'mov lef') {
        if ((count + 4 * 1000) % 4 == 0) {
            count = count - 1;
            var initial = document.getElementsByClassName('initial')[0]; //根据之前的状态找到节点
            initial.className = 'td leftDirec';
            initial.style.animation = 'tunLef03 1s linear';
            var t = setTimeout("go('go',count);", 1000); //向正方向移动一步。
        } else if ((count + 4 * 1000) % 4 == 1) {
            count = count - 2;
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            rightDirec.className = 'td leftDirec';
            rightDirec.style.animation = 'tunLef13 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else if ((count + 4 * 1000) % 4 == 2) {
            count = count + 1;
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td leftDirec';
            bottomDirec.style.animation = 'tunLef23 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else {
            go('go', count);
        }
    } else if (order == 'mov rig') {
        if ((count + 4 * 1000) % 4 == 0) {
            count = count + 1;
            var initial = document.getElementsByClassName('initial')[0]; //根据之前的状态找到节点
            initial.className = 'td rightDirec';
            initial.style.animation = 'tunRig01 1s linear';
            var t = setTimeout("go('go',count);", 1000); //向正方向移动一步。
        } else if ((count + 4 * 1000) % 4 == 1) {
            go('go', count);
        } else if ((count + 4 * 1000) % 4 == 2) {
            count = count - 1;
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td rightDirec';
            bottomDirec.style.animation = 'tunRig21 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else {
            count = count - 2;
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td rightDirec';
            leftDirec.style.animation = 'tunRig31 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        }
    } else if (order == 'mov top') {
        if ((count + 4 * 1000) % 4 == 0) {
            go('go', count); //向正方向移动一步。
        } else if ((count + 4 * 1000) % 4 == 1) {
            count = count - 1;
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            rightDirec.className = 'td initial';
            rightDirec.style.animation = 'tunTop10 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else if ((count + 4 * 1000) % 4 == 2) {
            count = count - 2;
            var bottomDirec = document.getElementsByClassName('bottomDirec')[0];
            bottomDirec.className = 'td initial';
            bottomDirec.style.animation = 'tunTop20 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else {
            count = count + 1;
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td initial';
            leftDirec.style.animation = 'tunTop30 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        }
    } else if (order == 'mov bot') {
        if ((count + 4 * 1000) % 4 == 0) {
            count = count + 2;
            var initial = document.getElementsByClassName('initial')[0];
            initial.className = 'td bottomDirec';
            initial.style.animation = 'tunBot02 1s linear';
            var t = setTimeout("go('go',count);", 1000); //向正方向移动一步。
        } else if ((count + 4 * 1000) % 4 == 1) {
            count = count + 1;
            var rightDirec = document.getElementsByClassName('rightDirec')[0];
            rightDirec.className = 'td bottomDirec';
            rightDirec.style.animation = 'tunBot12 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        } else if ((count + 4 * 1000) % 4 == 2) {
            go('go', count);
        } else {
            count = count - 1;
            var leftDirec = document.getElementsByClassName('leftDirec')[0];
            leftDirec.className = 'td bottomDirec';
            leftDirec.style.animation = 'tunBot32 1s linear';
            var t = setTimeout("go('go',count);", 1000);
        }
    } else {
        if (!order) {
            alert('指令不能为空!\n请输入指令“go”（前进）、“tun lef”（左转）、“tun rig”（右转）、“tun bac”（向后转）。');
        } else {
            alert('指令格式错误!\n请输入指令“go”（前进）、“tun lef”（左转）、“tun rig”（右转）、“tun bac”（向后转）。');
        }
    }
}

function go(order, c) {
    if (order == 'go') {
        if ((c + 4 * 1000) % 4 == 0) {
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
        } else if ((c + 4 * 1000) % 4 == 1) {
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
        } else if ((c + 4 * 1000) % 4 == 2) {
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
        } else if ((c + 4 * 1000) % 4 == 3) {
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
    }
}
