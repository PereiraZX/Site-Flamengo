// Menu show
const buttonMenu = document.querySelector('.navbar_button');
buttonMenu.addEventListener('click', showMenu);
buttonMenu.addEventListener('touchstart', showMenu);
var menuContainer = document.querySelector('.menu-container');

function showMenu(e){
    if(e.type === 'touchstart') e.preventDefault();
    buttonMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.classList.toggle('overflow');
}