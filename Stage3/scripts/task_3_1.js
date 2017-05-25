var validateBtn=document.getElementById('validate');
var input=document.getElementById('userName');
var hint=document.getElementById('hintText');

validateBtn.onclick=function (){
  var charNum=input.value.length;
  if (charNum==0) {
    hint.innerHTML='姓名不能为空';
    hint.className='errorCSS';
    input.style.border='1px solid red';
    input.style.boxShadow='inset 0 0 3px 1px red';
  }else if ((charNum<4)||(charNum>16)) {
    hint.innerHTML='格式错误，必须填入4~16个字符'
    hint.className='errorCSS';
    input.style.border='1px solid red';
    input.style.boxShadow='inset 0 0 3px 1px red';
  }else{
    hint.innerHTML='格式正确';
    hint.className='correctCSS';
    input.style.border='1px solid green';
    input.style.boxShadow='inset 0 0 3px 1px green';
  }
}
