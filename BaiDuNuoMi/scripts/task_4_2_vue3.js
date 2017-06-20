//参考别人的代码前提下进行改动，原代码对于除第一个子属性外的子属性路径添加有点问题，
//添加parent变量后修正该问题。而且能够监听子属性变化并触发子属性所绑定的事件

function Observer(data) {
      this.data = data;
      this.walk(data);
      this.dep = new Dep();
    }
    Observer.prototype = {
      walk: function(obj, path) {
        let val;
        let parent=path;//所以用parent变量保存原始父路径
        for(let key in obj) {
          if (obj.hasOwnProperty(key)) {
            val = obj[key];
            if(!parent) {
              path = key;
            } else {
              path = parent + key;//遍历到第二个属性时path已经变成name.firstName，所以第二个属性的path变成了name.firstNamelastName,导致bug
            }
            if (typeof val === 'object') { // 属性值也可能是对象
              new Observer(val);
              if (path) path = path + '.';
              //new Observer(val,path);
              this.walk(val, path);
            }
          }
          this.defineReactive(obj, key, val, path);
        }
      },
      defineReactive: function (obj, key, val, path) {
        var self = this;
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function() {
            console.log('你访问了：'+ key);
            return val;
          },
          set: function (newVal) {
            console.log('你设置了'+key+'新的值为：'+ newVal);
            val = newVal;
            self.dep.notify(path || key);
            if(typeof newVal === 'object') {
              new Observer(val);
            }
          }
        });
      },
      $watch: function(attr, callback) {
        this.dep.add(attr, callback);
      }
    }
    function Dep() {
      this.subs = [];
    }
    Dep.prototype = {
      add: function(attr, callback) {
        if(this.subs[attr]){
          this.subs[attr].push(callback);
        }else{
          this.subs[attr] = [callback];
        }
      },
      notify: function(path) {
        const keys = path.split('.');
        keys.forEach((path) => {
          const fns = this.subs[path];
          if (fns && fns.length) {
            fns.forEach(function(item) {
              item();
            });
          }
        });
      },
    }
    var app1 = new Observer({
      name: {
        firstName: 'caihong',
        lastName: 'liang'
      },
      age: 25
    });

    app1.$watch('name', function() {
      console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。');
    });
    app1.$watch('firstName',function(){
        console.log('我的名字发生了变化');
    })
    app1.$watch('lastName',function(){
        console.log('我的姓氏发生了变化');
    });
    app1.data.name.firstName = 'hahaha';
    // 输出：我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。
    app1.data.name.lastName = 'blablabla';
