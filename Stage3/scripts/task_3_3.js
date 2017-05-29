var stu = document.getElementById('student');
var staff = document.getElementById('nonstudent');
//在校生和非在校生之间的联动
stu.onclick = function() {
    var company = document.getElementById('company');
    if (company.className == '') {
        company.className = 'initHidden';
    }
    var school = document.getElementById('school');
    var list = school.getElementsByTagName('select');
    for (var i = 1; i < list.length; i++) {
        list[i].className = 'initHidden'; //清空所有状态
    }
    var location = document.getElementById('location');
    var beijing = document.getElementById('beijing');
    school.className = '';
    location.className = '';
    beijing.className = '';
}
staff.onclick = function() {
    var school = document.getElementById('school');
    if (school.className == '') {
        school.className = 'initHidden';
    }
    var company = document.getElementById('company');
    company.className = '';
}
//城市和对应大学之间的联动
var locas = document.getElementById('location');

locas.onchange = function() {
    var school = document.getElementById('school');
    var list = school.getElementsByTagName('select');
    var value = locas.value;
    for (var i = 0; i < locas.children.length; i++) {
        if (locas.children[i].value == value) {
            var index = i;
        } else {
            list[i + 1].className = 'initHidden';
        }
    }
    list[index + 1].className = '';
}
