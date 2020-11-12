let burger = document.getElementById('burger');
let burgerMenu = document.getElementById('burgerMenu');


burger.onclick = function () {
    if (burgerMenu.style.left == '0px') {
        burgerMenu.style.left = '-2000px';
    }
    else {
        burgerMenu.style.left = '0'
    }
    
}