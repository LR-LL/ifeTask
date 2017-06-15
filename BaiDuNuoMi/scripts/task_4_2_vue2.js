function Observer(data){
  this.data=data;
  this.walk(data);
  this.events={};
}
var p=Observer.prototype;
p.walk=function(obj){
  var val;
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      val=obj[key];
    }
    if(typeof val==="object"){
      new Observer(val);
    }
    this.convert(key,val);
  }
}
p.convert=function(key,val){
  var _this=this;
  Object.defineProperty(this.data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      console.log("你访问了 "+key);
      return val;
    },
    set:function(newVal){
      if(typeof newVal==='object'){
        new Observer(newVal);//给新设置的属性也加入get，set属性
      }
      console.log("你设置了 "+key+",新的值为"+newVal);
      if(val!==newVal&&_this.events[key]){
        for(var i=0;i<_this.events[key].length;i++){
          _this.events[key][i](newVal,val);
        }

      }
      val=newVal;
      return val;
    }
  })
}
p.$watch=function(key,handler){
  if(!this.events[key]){
    this.events[key]=[];
  }
  this.events[key].push(handler);
}

var app1=new Observer({name:'anne',
  age: 25});
  app1.$watch('age', function(age) {
         console.log(`我的年纪变了，现在已经是${age}岁了`);
  });
  app1.$watch('age',function(age,oldage){
    console.log(`我的年纪变了，原来是：${oldage}, 现在已经是：${age}岁了`);
  });
app1.data.name={
 lastName: 'liang',
        firstName: 'shaofeng'
};
app1.data.age = 100;
app1.data.name.lastName;
