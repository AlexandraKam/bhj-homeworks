let dead = document.getElementById("dead").textContent;
let lost = document.getElementById("lost").textContent;
for (let i = 1; i < 10; i++) {
	const hole = document.getElementById("hole" + i);
	const className = hole.className;
	
	hole.onclick = function() {
		if (hole.className.includes('hole_has-mole')) {
			dead ++;
		} else {
			lost ++;
		}

		if (dead === 10) {
			dead = 0;
			lost = 0;
			alert('Победа');
		}	
		else if (lost === 5) {			
			dead = 0;
			lost = 0;
			alert('Проигрыш');
		}
		document.getElementById("dead").textContent = dead;
		document.getElementById("lost").textContent = lost;
	}
}
