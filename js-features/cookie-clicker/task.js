const Cookie = document.getElementById("cookie");
let clicker__counter = document.getElementById("clicker__counter").textContent;

function change() {
	clicker__counter ++;
	document.getElementById("clicker__counter").textContent = clicker__counter;
	if (Cookie.width === 200) {
		Cookie.width = 150;
	} else {
		Cookie.width = 200;
	}	
}
Cookie.onclick = change;
