function calculate(){
	var n1 = document.getElementById('txt1').value;
	var n2 = document.getElementById('txt2').value;
	var area = (parseInt(n1) * parseInt(n2)*2*3.14);
	console.log(area);
	document.getElementById('txt3').value = area;
	var perimeter =(3.14*((parseInt(n1)*(parseInt(n1))*parseInt(n2))));
	console.log(perimeter);
	document.getElementById('txt4').value = perimeter;
		
}