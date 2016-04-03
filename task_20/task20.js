var numInput=document.getElementById('numInput');
var leftIn=document.getElementById('leftIn');
var rightIn=document.getElementById('rightIn');
var leftOut=document.getElementById('leftOut');
var rightOut=document.getElementById('rightOut');
var btnSearch=document.getElementById('btnSearch');
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
		var value = numInput.value.split(/[\s|,|，|、|　]+/);
		for(var i=0;i<value.length;i++){
			if(value[i]!=""){
				var divObj=document.createElement('div');		
				divObj.innerHTML=value[i];
				divObj.onclick=function(){
					wrap.removeChild(this);
				}
				var first=wrap.childNodes[0];
				wrap.insertBefore(divObj,first);
			}				
		}			
	}	
}

rightIn.onclick=function(){
	if(numInput.value == ""){
		alert("请输入一个数字");
	}
	else{
		var value = numInput.value.split(/[\s|,|，|、|　]+/);
		for(var i=0;i<value.length;i++){
			if(value[i]!=""){
				wrap.innerHTML+="<div onClick='handler(this)'>"+value[i]+"</div>"
			}				
		}		
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

btnSearch.onclick=function(){
	for(var i=0;i<wrap.childNodes.length;i++){
		wrap.childNodes[i].style.background="orange";
	}
	var search=document.getElementById('search').value;	
	for(var i=0;i<wrap.childNodes.length;i++){
		if(wrap.childNodes[i].innerText.indexOf(search)!=-1){			
			wrap.childNodes[i].style.background="pink";
		}
	}
}