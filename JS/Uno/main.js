function calculo(){
	var radius = parseFloat(document.getElementById('radius').value);
	var per = (2*Math.PI)*radius;
	var ar = Math.PI*(radius*radius);
	var dia = radius*2;

	document.getElementById('resultado').innerHTML = 'Los resultados son '+per+' de perímetro, '
	+ar+' para el área y '+dia+' de diámetro.'
}