
function f1(){
	var t = 'swapnil';
	var x = document.getElementById('txt1').value;
	var y = document.getElementById('txt2').value;
	for(a=1; a<=y; a++){
		t = t + '<br>' + a +' '+'x' + x + ' = ' +(a*x);
		
	}
	document.getElementById('res').innerHTML = t;
	console.log(t)
		
	
}
