var switch_functions = {
	'+': '-',
	'-': '+'
};
document.addEventListener("DOMContentLoaded", function() {
	var buttons = document.querySelectorAll(".button");
	for (var i = 0; i< buttons.length; i++){
		buttons[i].addEventListener('click', function(e){
			e.target.value = switch_functions[e.target.value];
		});
	}
});