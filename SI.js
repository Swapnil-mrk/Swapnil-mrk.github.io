function hello(){
	console.log('Hello Calculator');
	
}

function add(){
	var n1 = document.getElementById('txt1').value;
	var n2= document.getElementById('txt2').value;
	var n3= document.getElementById('txt3').value;
	var result=(parseInt(n1) * parseInt(n2) * parseInt(n3))/100;
	console.log(result)
	document.getElementById('txt4').value=result;
	
}

