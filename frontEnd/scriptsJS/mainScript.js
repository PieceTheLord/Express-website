const mainMenu = document.querySelector('.header__nav');
const dropMenu = document.querySelector('.menu__list');
const openMenu = document.querySelector('.open__Menu');
const closeMenu = document.querySelector('.close__Menu');
const switcheritems = document.querySelectorAll('.switcher__case');
const nextSwitch = document.querySelector('.switcher__next');
const backSwitch = document.querySelector('.switcher__back');
const switcher = document.querySelector('.switcher')

// Switcher

let switcherList = switcheritems.length;
var x = switcherList - 1;

backSwitch.addEventListener('click', () => {
    switcheritems.item(x).className = 'switcherAnBack';
    setTimeout(() => {
        switcheritems.item(x).className = 'switcher__case'
        switcheritems.item(x).style.display = 'none';
        x -= 1
        if(x == -1){
            x = switcherList - 1;
        }
        switcheritems.item(x).style.display = 'grid';
    }, 990);
}, false)   

nextSwitch.addEventListener('click', () => {
    switcheritems.item(x).className = 'switcherAnNext';
    setTimeout(() => {
        switcheritems.item(x).className = 'switcher__case';
        switcheritems.item(x).style.display = 'none';
        x += 1
        if(x == switcherList){
            x = 0;
        }
        switcheritems.item(x).style.display = 'grid';
    }, 990);
}, false)


// dropMenu

openMenu.addEventListener("click", () => {
    openMenu.style.display = 'none';
    dropMenu.style.display = 'flex';
    closeMenu.style.display = 'block';
}, false);

closeMenu.addEventListener("click", () => {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    dropMenu.style.display = 'none';
}, false);


