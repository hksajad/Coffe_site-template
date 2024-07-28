const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle_menu");
toggle.addEventListener('click' , function (){ 
    menu.classList.toggle("show_menu")
})