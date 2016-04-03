var numInput=document.getElementById('numInput');
var leftIn=document.getElementById('leftIn');
var rightIn=document.getElementById('rightIn');
var leftOut=document.getElementById('leftOut');
var rightOut=document.getElementById('rightOut');
var wrap=document.getElementById('wrap');
var div=wrap.getElementsByTagName('div');

function handler(a){
	wrap.removeChild(a);
}

leftIn.onclick=function(){
	if(numInput.value == ""){
		alert("请输入一个数字");
	}
	else{		
		var divObj=document.createElement('div');		
		divObj.innerHTML=numInput.value;
		divObj.onclick=function(){
			wrap.removeChild(this);
		}
		var first=wrap.childNodes[0];
		wrap.insertBefore(divObj,first);
	}	
}

rightIn.onclick=function(){
	if(numInput.value == ""){
		alert("请输入一个数字");
	}
	else{
		wrap.innerHTML+="<div onClick='handler(this)'>"+numInput.value+"</div>"

	}
}

leftOut.onclick=function(){
	if(wrap.childNodes.length>0){
		wrap.removeChild(wrap.childNodes[0]);
	}
	else{
		alert("已经没有任何元素了");
	}
}

rightOut.onclick=function(){
	if(wrap.childNodes.length>0){
		wrap.removeChild(wrap.lastChild);
	}
	else{
		alert("已经没有任何元素了");
	}
}
