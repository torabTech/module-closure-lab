var emplList=[];
var index=0;
var timer=null;
var make=function(){
	var fn;
	var s;
	function create(name,salary){
		fn=name;
		s=salary;
	}
	return{
		
		set:function(name,salary){
			create(name,salary);
		},
		get:function(){
		return{
			name:fn,
			salary:s,
			info:function(){
				return "name: "+this.name+"\n"+"salary: "+this.salary;
			}
		};
		}
	};
};

function start(){
	//alert("hi");
	var name = document.getElementById("name").value;
	var sal = document.getElementById("salary").value;

	var emp = make();
	emp.set(name,sal);
	var temp =emp.get();
	if(name.localeCompare("")==0 || sal.localeCompare("")==0){
	document.getElementById("result").value="Please Enter Name and Salary";}
	else{
		document.getElementById("result").value=temp.info();
	
	emplList[index]=temp;
	index=index +1;
	}
}

function summaryReport(){
	//alert("hi");
	document.getElementById("summary").value="summary report:"+"\n";
	document.getElementById("rep").style.display="block";
	
	if(index>0){
		
	for(let i=0;i<emplList.length;i++){
		document.getElementById("summary").value =document.getElementById("summary").value  + "name: "+emplList[i].name+", salary: " +emplList[i].salary +"\n";
	}

	}
	else{
		document.getElementById("summary").value ="Create employee object(s) first to review the summary report. Thank you! "
		document.getElementById("summary").style.color="red";
		document.getElementById("summary").style.fontSize="16px";
		if(timer==null) timer = setInterval(goOff,20000);
	}
	

}

function goOff(){
	document.getElementById("rep").style.display="none";
	clearInterval(timer);
	timer=null;
}


window.onload=function(){
	
	document.getElementById("button").onclick=start;
	document.getElementById("getReport").onclick=summaryReport;
};
	