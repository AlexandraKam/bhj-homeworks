let elemDead = document.getElementById("dead");
let dead = elemDead.textContent;
let elemLost = document.getElementById("lost");
let lost = elemLost.textContent;
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
			result('Победа');
		}	
		else if (lost === 5) {			
			result('Проигрыш');
		}
		elemDead.textContent = dead;
		elemLost.textContent = lost;
	}
}
function result(message) {
	dead = 0;
	lost = 0;
	alert(message);
}