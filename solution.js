var solution = function() {
// var a=document.getElementById("valueA").value, b=document.getElementById("valueB").value, c=document.getElementById("valueC").value;
var params = [document.getElementById("valueA").value, document.getElementById("valueB").value, document.getElementById("valueC").value];
var sig = document.querySelectorAll(".button");
for (var i= 0; i < params.length; i++) {
	if (sig[i].value == "-") {
		params[i] *= -1;
	}
}
var D = Math.pow(params[1], 2) - 4*params[0]*params[2]; 
if (D == 0) {
	document.getElementById("x1").innerHTML= (-params[1]/(2*params[0]));
	document.getElementById("x2").innerHTML= (-params[1]/(2*params[0]));
}
else {
	if (D > 0) {
		document.getElementById("x1").innerHTML= ((-params[1] + Math.sqrt(D)) / (2*params[0]));
		document.getElementById("x2").innerHTML= ((-params[1] - Math.sqrt(D)) / (2*params[0]));
	}
	else {
		alert("Корней на множестве действительных чисел нет!")
	}
}
}
