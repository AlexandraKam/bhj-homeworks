const tooltip = Array.prototype.slice.call(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < tooltip.length; i++) {
	tooltip[i].insertAdjacentHTML('beforeEnd', '<div class="tooltip">' + tooltip[i].title + '</div>');
	tooltip[i].addEventListener('click', function(event) {
		event.preventDefault();
		if (event.target.getElementsByClassName('tooltip')[0].classList.contains('tooltip_active')) {
			event.target.getElementsByClassName('tooltip')[0].classList.remove('tooltip_active');
			return;
		} 
		let tooltipActive = document.querySelector('.tooltip_active');
		if (tooltipActive != null) {
			tooltipActive.classList.remove('tooltip_active');
		}
		let tooltipNow = newTooltip[tooltip.indexOf(event.currentTarget)];		
		tooltipNow.classList.add('tooltip_active');
		tooltipNow.style.left = event.currentTarget.getBoundingClientRect().left + "px";
	})
}
const newTooltip = document.querySelectorAll('.tooltip');