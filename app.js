const calendarBtn = document.querySelector('.btn-start');
const calendarCont = document.querySelector('.container');
const calendarDays = 24;


const openDoor = (path, e) => {
	e.target.parentNode.style.backgroundImage = `url(${path})`;
	e.target.style.opacity = '0';
	e.target.style.backgroundColor = '#2d2a2a';
}


const createCalendar = () => {
	for(let i = 0; i < calendarDays; i++){
		const calendarDoor = document.createElement('div');
		const calendarDoorNum = document.createElement('div');

		calendarDoor.classList.add('image');
		calendarDoor.style.gridArea = 'door' + (i + 1);
		calendarCont.appendChild(calendarDoor);

		// calendar door number/text
		calendarDoorNum.classList.add('text');
		calendarDoorNum.innerHTML = i + 1;
		calendarDoor.appendChild(calendarDoorNum);

		// grid doors open
		courseNum = i + 1;
		let coursePath = `./img/course-${courseNum}.jpg`;

		// activates on the click
		calendarDoorNum.addEventListener('click', openDoor.bind(null, coursePath));
	}
}

calendarBtn.addEventListener('click', createCalendar);











