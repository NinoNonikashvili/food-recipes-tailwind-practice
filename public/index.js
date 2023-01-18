const icon = document.querySelector('#menuIcon');
const menu = document.querySelector('#menu');

icon.addEventListener('click', ()=> {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});