const dropdown = document.querySelector('.dropdown');
const option = document.querySelector('.option')

const selectedMenu = (a) => {
	const menuName = document.querySelector('.menu');
	menuName.innerHTML = a;
} 
dropdown.onclick = () => {
	dropdown.classList.toggle('active')
}
