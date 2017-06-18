window.onload=function(){
  var phoneInput=document.getElementById('phoneInput');
  var stringInput=document.getElementById('stringInput');

  phoneInput.onblur=phoneVerify;
  phoneInput.onfocus=phoneInitial;
  stringInput.onblur=stringVerify;

  stringInput.onfocus=stringInitial;
}

function phoneVerify(){
  var number=this.value;
  var reg=/^1[34578]\d{9}$/;
  var result=reg.test(number);
  if (result) {
    this.style.border='2px solid green';
  }else {
    this.style.border='2px solid red';
  }
}
function stringVerify(){
  var str=this.value;
  var flag;
  var strArr=str.split(/[\s\,]+/);
  for(var i=1;i<strArr.length;i++){
    if(strArr[i]===strArr[i-1]){
      flag=true;
    }
  }
  if (flag) {
    this.style.border='2px solid green';
  }else {
    this.style.border='2px solid red';
  }
}
function phoneInitial(){
  this.style.border='2px solid blue';
}
function stringInitial(){
  this.style.border='2px solid blue';
}
