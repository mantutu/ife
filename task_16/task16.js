var apiData={};
function addApiData(){
	var city=document.getElementById('api-city-input').value;	
	var cityApi=document.getElementById('api-value-input').value;
	apiData[city]=cityApi;	
}

function renderApiList(){	
	var count=0;
	for(x in apiData){
		if(count==0){
			document.getElementById('api-table').innerHTML="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
			document.getElementById('api-table').innerHTML+="<tr><td>"+x+"</td>"+"<td>"+apiData[x]+"</td>"+"<td><button>删除</button></td>"+"</tr>";
			count++;
		}
		else{
			document.getElementById('api-table').innerHTML+="<tr><td>"+x+"</td>"+"<td>"+apiData[x]+"</td>"+"<td><button>删除</button></td>"+"</tr>";
			count++;
		}
	}
	
}

function addBtnHandle(){
	addApiData();
	renderApiList();
}

function delBtnHandle(){
	var btn=this.parentNode.parentNode;
	var table=btn.parentNode;
	table.removeChild(btn);
	delete apiData[btn.getElementsByTagName('td')[0].innerText];

	renderApiList();
}

function init(){
	document.getElementById('add-btn').onclick=function(){		
		addBtnHandle();
	}
	document.getElementById('api-table').onclick=function(e){
		var target=e.target || e.srcElement;
		delBtnHandle.apply(target); 
	}
}

init();