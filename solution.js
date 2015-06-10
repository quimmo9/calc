var solution = function() {
var a=document.getElementById("valueA").value, b=document.getElementById("valueB").value, c=document.getElementById("valueC").value;
var D = b*b - 4*a*c; 
if (D == 0) {
	document.getElementById("x1").innerHTML= "x1=" + (-b/(2*a));
	document.getElementById("x2").innerHTML= "x2=" + (-b/(2*a));
}
else {
	if (D > 0) {
		document.getElementById("x1").innerHTML= "x1=" + ((-b + Math.sqrt(D)) / (2*a));
		document.getElementById("x2").innerHTML= "x2=" + ((-b - Math.sqrt(D)) / (2*a));
	}
	else {
		alert("Корней на множестве действительных чисел нет!")
	}
}
}
