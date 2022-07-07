function preview(){
console.log('Hello Mirketa');
}

function clone(){
var first = document.getElementById('value1').value;
document.getElementById('value2').value = first;
}

function hello(){
console.log('Good Morning!');
}

function reverse(){
	var first = document.getElementById('value2').value;
	var second = document.getElementById('value1').value;
	document.getElementById('value1').value = first;
	document.getElementById('value2').value = second;
}

function display(){
	var name = document.getElementById('value1').value;
	console.log(name)
}

function clearf(){
	document.getElementById('value1').value="";
	document.getElementById('value2').value="";
}
