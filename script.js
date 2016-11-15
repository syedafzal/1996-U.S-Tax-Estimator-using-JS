function start(){
	var val=document.getElementById("select").value;
    switch(val){
    	case "single":
    	val=1000;
    	break;
    	case "headofhousehold":
    	val=2000;
    	break;
    	case "marriedfilingjointly":
    	val=3000;
    	break;
    	case "marriedfilingseparately":
    	val=4000;
    	break;
    }
	document.getElementById("default").value= val;
}

function calc(){
	var amt=document.getElementById("amount").value;
	var amt2=document.getElementById("default").value;
	var amt3=amt-amt2;
	document.getElementById("amt3").value=amt3;
	document.getElementById("total").value=amt3;
	var exem=document.getElementById("exemtions").value;
	var exemvalue=2550;
	var amt4=exem * exemvalue;
	document.getElementById("exemvalue").value=amt4;
	var amt5=amt3-amt4;
	document.getElementById("amt5").value=amt5;
	document.getElementById("total").value=amt5;
}

function check(){
	if(document.getElementById("checkbox").checked){
	document.getElementById("default").disabled=true;
    start();
    }
    else
    {
    document.getElementById("default").disabled=false;
    }
}