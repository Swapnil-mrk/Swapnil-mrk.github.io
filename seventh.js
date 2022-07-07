function add(){
	var n1 = document.getElementById('txt1').value;
	var result = parseInt(n1)*2;
	console.log(result);
}

function clearf(){
	var n1 = document.getElementById('txt1').value;	
	var result = parseInt(n1)*2;
	document.getElementById('result').textContent = "Result is " +result;	
}