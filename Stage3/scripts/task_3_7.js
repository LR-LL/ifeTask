//创建表格对象Table
function Table() {
    this.row = 0;
    this.col = 0;
    this.createTable = createTable;
    this.addThead = addThead;
    this.addRowData = addRowData;
    this.addSort = addSort;
}

//表格对象的创建表格方法
function createTable() {
    var table = document.createElement('div');
    table.className = 'table';
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(table);
}

//表格对象的创建表头方法
function addThead(item) {
    if (!document.getElementsByClassName('thead')[0]) {
        var thead = document.createElement('div');
        thead.className = 'thead';
        var table = document.getElementsByClassName('table')[0];
        table.appendChild(thead);
    }
    var td = document.createElement('div');
    td.className = 'td';
    td.innerHTML = item;
    var thead = document.getElementsByClassName('thead')[0];
    thead.appendChild(td);
    this.col++;
}

//表格对象的添加行数据方法
function addRowData(obj) {
    var tr = document.createElement('div');
    tr.className = 'tr';
    var table = document.getElementsByClassName('table')[0];
    table.appendChild(tr);
    for (var key in obj) {
        var td = document.createElement('div');
        td.className = 'td';
        td.innerHTML = obj[key];
        tr.appendChild(td);
    }
    this.row++;
}

//表格对象的对相应列添加排序功能的方法
function addSort(dataCol) {
    var thead = document.getElementsByClassName('thead')[0];
    if (thead.children[dataCol].children.length == 0) {
        var upSort = document.createElement('div');
        upSort.className = 'upOrder';
        var downSort = document.createElement('div');
        downSort.className = 'downOrder';
        thead.children[dataCol].appendChild(upSort);
        thead.children[dataCol].appendChild(downSort);
        upSort.onclick = ascending;
        downSort.onclick = descending;
    }
}

function ascending() {
    var parent = this.parentElement;
    var item = '';
    var itemCol;
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].nodeType == 3) {
            item = parent.childNodes[i].nodeValue;
        }
    }
    switch (item) {
        case '语文': //记得用字符串形式
            itemCol = 1;
            break;
        case '数学':
            itemCol = 2;
            break;
        case '英语':
            itemCol = 3;
            break;
        default:
            itemCol = 4;
    }
    var table = document.getElementsByClassName('table')[0];
    var rows = table.getElementsByClassName('tr');
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        data.push(rows[i].children[itemCol].innerHTML);
    }
    data.sort(function(x, y) {
        return x - y;
    });
    // for(var i=0;i<data.length;i++){
    //   for(var j=0;j<rows.length;j++){
    //     if (rows[j].children[itemCol].innerHTML==data[i]) {
    //       table.children[i+1]=rows[j];//因为rows和table.children指向同一个引用，所以其中一个改变两个都会变，所以需要重新创建新的行保存原来的数据
    //     }
    //   }
    // }
    var temp = [];
    var newRows = [];
    for (var i = 0; i < rows.length; i++) {
        temp[i] = rows[i].innerHTML; //因为innerHTML相当于字符串，所以可以复制给中间变量
        newRows[i] = document.createElement('div');
        newRows[i].className = 'tr';
        newRows[i].innerHTML = temp[i];
    }
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < rows.length; j++) {
            if (newRows[j].children[itemCol].innerHTML == data[i]) {
                table.children[i + 1].innerHTML = newRows[j].innerHTML;
            }
        }
    }
}

function descending() {
    var parent = this.parentElement;
    var item = '';
    var itemCol;
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].nodeType == 3) {
            item = parent.childNodes[i].nodeValue;
        }
    }
    switch (item) {
        case '语文':
            itemCol = 1;
            break;
        case '数学':
            itemCol = 2;
            break;
        case '英语':
            itemCol = 3;
            break;
        default:
            itemCol = 4;
    }
    var table = document.getElementsByClassName('table')[0];
    var rows = table.getElementsByClassName('tr');
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        data.push(rows[i].children[itemCol].innerHTML);
    }
    data.sort(function(x, y) {
        return y - x;
    });
    var temp = [];
    var newRows = [];
    for (var i = 0; i < rows.length; i++) {
        temp[i] = rows[i].innerHTML; //因为innerHTML相当于字符串，所以可以复制给中间变量
        newRows[i] = document.createElement('div'); //因为rows和table.children指向同一个引用，所以其中一个改变两个都会变，所以需要重新创建新的行保存原来的数据
        newRows[i].className = 'tr';
        newRows[i].innerHTML = temp[i];
    }
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < rows.length; j++) {
            if (newRows[j].children[itemCol].innerHTML == data[i]) {
                table.children[i + 1].innerHTML = newRows[j].innerHTML;
            }
        }
    }
}

//创建学生对象，用于表格添加行数据
function Student(name, c, m, e) {
    this.name = name;
    this.chinese = c;
    this.math = m;
    this.english = e;
    this.total = parseInt(c) + parseInt(m) + parseInt(e);
}

window.onload = function() {
    var xiaohong = new Student('小红', 80, 95, 90);
    var xiaoming = new Student('小明', 85, 98, 80);
    var xiaoliang = new Student('小亮', 90, 80, 70);
    var t = new Table();
    t.createTable();
    t.addThead('姓名');
    t.addThead('语文');
    t.addThead('数学');
    t.addThead('英语');
    t.addThead('总分');
    t.addRowData(xiaohong);
    t.addRowData(xiaoming);
    t.addRowData(xiaoliang);
    t.addSort(1); //为第一列添加排序功能
    t.addSort(2); //为第二列添加排序功能
    t.addSort(3);
    t.addSort(4);
}
