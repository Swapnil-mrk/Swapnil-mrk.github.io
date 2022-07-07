function calculate(){
	var n1 = document.getElementById('txt1').value;
	var area = (parseInt(n1) * parseInt(n1));
	console.log(area);
	document.getElementById('txt2').value = area;
	var perimeter =(4*parseInt(n1));
	console.log(perimeter);
	document.getElementById('txt3').value = perimeter;
		
}