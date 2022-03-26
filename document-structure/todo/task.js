const tasksForm = document.getElementById('tasks__form');
const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
tasksForm.onsubmit = function(event) {
	event.preventDefault();	
	if (taskInput.value != '') {
		tasksList.innerHTML += `
		<div class="task">
  			<div class="task__title">
    			` + taskInput.value + `
			</div>
			<a href="#" class="task__remove">&times;</a>
		</div>`;
	}
	let task = document.querySelectorAll('.task');
	let taskRemove = Array.prototype.slice.call(document.querySelectorAll('.task__remove'));
	for (let i = 0; i < taskRemove.length; i++) {
		taskRemove[i].onclick = function(event) {
			task[taskRemove.indexOf(event.currentTarget)].remove();
		}
	}
}