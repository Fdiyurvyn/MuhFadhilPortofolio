const header = document.querySelector("header");
window.addEventListener ("scroll" , function() {
    header.classList.toggle ("sticky" , this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
function sayHello() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = "Welcome to My Personal Website 😁";
    messageDiv.style.color = "var(--main-color)";
    messageDiv.style.marginTop = "20px";
    messageDiv.style.fontSize = "1.2rem";
};


 