var inputName = document.getElementById('userName');
var inputPwd = document.getElementById('passWord');
var inputPwdAgain = document.getElementById('passWordAgain');
var inputEmail = document.getElementById('email');
var inputPhone = document.getElementById('phoneNumber');
var checkAll = document.getElementById('submit');

inputName.onfocus = function() {
    var parent = this.parentElement;
    parent.firstChild.className = 'inputBorder';
    var hint = document.createElement('div');
    hint.innerHTML = '必填，长度为4~16个字符';
    hint.className = 'hint';
    if (this.nextSibling == null) {
        parent.appendChild(hint);
    } else {
        this.nextSibling.innerHTML = '必填，长度为4~16个字符';
        this.nextSibling.className = 'hint';
        this.parentElement.firstChild.className = 'inputBorder';
    }
}
inputName.onblur = function() {
    var inputText = this.value;
    if (this.nextSibling == null) {
        var hint = document.createElement('div');
        hint.innerHTML = '必填，长度为4~16个字符';
        hint.className = 'hint';
        var parent = this.parentElement;
        parent.appendChild(hint);
    }
    if (inputText.length == 0) {
        this.nextSibling.innerHTML = '姓名不能为空';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else if (inputText.length < 4 || inputText.length > 16) {
        this.nextSibling.innerHTML = '格式错误，长度必须为4~16个字符';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else {
        this.nextSibling.innerHTML = '格式正确';
        this.nextSibling.className = 'correctCSS';
        this.parentElement.firstChild.className = 'correctBorder';
        return true;
    }
}
inputPwd.onfocus = function() {
    var parent = this.parentElement;
    parent.firstChild.className = 'inputBorder';
    var hint = document.createElement('div');
    hint.innerHTML = '密码长度为6~16个字符';
    hint.className = 'hint';
    if (this.nextSibling == null) {
        parent.appendChild(hint);
    } else {
        this.nextSibling.innerHTML = '密码长度为6~16个字符';
        this.nextSibling.className = 'hint';
        this.parentElement.firstChild.className = 'inputBorder';
    }
}
inputPwd.onblur = function() {
    var inputText = this.value;
    if (this.nextSibling == null) {
        var hint = document.createElement('div');
        hint.innerHTML = '密码长度为6~16个字符';
        hint.className = 'hint';
        var parent = this.parentElement;
        parent.appendChild(hint);
    }
    if (inputText.length == 0) {
        this.nextSibling.innerHTML = '密码不能为空';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else if (inputText.length < 6 || inputText.length > 16) {
        this.nextSibling.innerHTML = '格式错误，长度必须为6~16个字符';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else {
        this.nextSibling.innerHTML = '密码可用';
        this.nextSibling.className = 'correctCSS';
        this.parentElement.firstChild.className = 'correctBorder';
        return true;
    }
}
inputPwdAgain.onfocus = function() {
    var parent = this.parentElement;
    parent.firstChild.className = 'inputBorder';
    var hint = document.createElement('div');
    hint.innerHTML = '请再次输入您的密码';
    hint.className = 'hint';
    if (this.nextSibling == null) {
        parent.appendChild(hint);
    } else {
        this.nextSibling.innerHTML = '请再次输入您的密码';
        this.nextSibling.className = 'hint';
        this.parentElement.firstChild.className = 'inputBorder';
    }
}
inputPwdAgain.onblur = function() {
    var inputText = this.value;
    if (this.nextSibling == null) {
        var hint = document.createElement('div');
        hint.innerHTML = '请再次输入您的密码';
        hint.className = 'hint';
        var parent = this.parentElement;
        parent.appendChild(hint);
    }
    var prePwd = document.getElementById('passWord').value;
    if (inputText.length == 0) {
        this.nextSibling.innerHTML = '必须再次确认您的密码';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else if (inputText != prePwd) {
        this.nextSibling.innerHTML = '密码输入不一致';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else {
        this.nextSibling.innerHTML = '密码输入一致';
        this.nextSibling.className = 'correctCSS';
        this.parentElement.firstChild.className = 'correctBorder';
        return true;
    }
}
inputEmail.onfocus = function() {
    var parent = this.parentElement;
    parent.firstChild.className = 'inputBorder';
    var hint = document.createElement('div');
    hint.innerHTML = '请输入您的常用邮箱';
    hint.className = 'hint';
    if (this.nextSibling == null) {
        parent.appendChild(hint);
    } else {
        this.nextSibling.innerHTML = '请输入您的常用邮箱';
        this.nextSibling.className = 'hint';
        this.parentElement.firstChild.className = 'inputBorder';
    }
}
inputEmail.onblur = function() {
    var inputText = this.value;
    if (this.nextSibling == null) {
        var hint = document.createElement('div');
        hint.innerHTML = '请输入您的常用邮箱';
        hint.className = 'hint';
        var parent = this.parentElement;
        parent.appendChild(hint);
    }
    var pattern = /^[0-9a-zA-Z]+[\@][0-9a-zA-Z]+[\.]([com]{3}|[cn]{2}|[net]{3}|[com\.cn]{6})$/;
    if (inputText.length == 0) {
        this.nextSibling.innerHTML = '邮箱不能为空';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else if (!(pattern.test(inputText))) {
        this.nextSibling.innerHTML = '邮箱格式错误';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else {
        this.nextSibling.innerHTML = '邮箱格式正确';
        this.nextSibling.className = 'correctCSS';
        this.parentElement.firstChild.className = 'correctBorder';
        return true;
    }
}
inputPhone.onfocus = function() {
    var parent = this.parentElement;
    parent.firstChild.className = 'inputBorder';
    var hint = document.createElement('div');
    hint.innerHTML = '请输入您的11位手机号码';
    hint.className = 'hint';
    if (this.nextSibling == null) {
        parent.appendChild(hint);
    } else {
        this.nextSibling.innerHTML = '请输入您的11位手机号码';
        this.nextSibling.className = 'hint';
        this.parentElement.firstChild.className = 'inputBorder';
    }
}
inputPhone.onblur = function() {
    var inputText = this.value;
    if (this.nextSibling == null) {
        var hint = document.createElement('div');
        hint.innerHTML = '请输入您的11位手机号码';
        hint.className = 'hint';
        var parent = this.parentElement;
        parent.appendChild(hint);
    }
    var pattern = /^[1][0-9]{10}$/;
    if (inputText.length == 0) {
        this.nextSibling.innerHTML = '手机号码不能为空';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else if (!(pattern.test(inputText))) {
        this.nextSibling.innerHTML = '请输入正确的手机号码';
        this.nextSibling.className = 'errorCSS';
        this.parentElement.firstChild.className = 'errorBorder';
        return false;
    } else {
        this.nextSibling.innerHTML = '手机格式正确';
        this.nextSibling.className = 'correctCSS';
        this.parentElement.firstChild.className = 'correctBorder';
        return true;
    }
}
checkAll.onclick = function() {
    inputName.onblur();
    inputPwd.onblur();
    inputPwdAgain.onblur();
    inputEmail.onblur();
    inputPhone.onblur();
    if (!(inputName.onblur() && inputPwd.onblur() && inputPwdAgain.onblur() && inputEmail.onblur() && inputPhone.onblur())) {
        alert('输入有误！');
    }
}
