let timer = document.getElementById("timer").innerHTML;
function time() {
	timer --;
	document.getElementById("timer").innerHTML = timer;
	
	if (timer === 0) {
	alert("Вы победили в конкурсе!");
	clearInterval(interval);
	}
}
let interval = setInterval (time, 1000);
