"use strict"

// Hämta in meny-knapparna
let menuBtn = document.getElementById("menu-btn");
let navMenuEl = document.getElementById("nav-menu");


//eventlyssnare
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("active");
    navMenuEl.classList.toggle("active");

}


