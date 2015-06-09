var D = b^2 - 4*a*c;
if (D = 0) {
	x1= -b/(2*a);
	x2= x1;
}
else {
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2*a);
		x2 = (-b - Math.sqrt(D)) / (2*a);
	}
	else {
		alert("Корней на множестве действительных чисел нет!")
	}
}