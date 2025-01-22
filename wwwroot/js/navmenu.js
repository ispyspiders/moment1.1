"use strict"

// Hämta in meny-knapp och meny-element
let menuBtn = document.getElementById("menu-btn");
let navMenuEl = document.getElementById("nav-menu");


//eventlyssnare
menuBtn.addEventListener('click', toggleMenu);

// Göm/visa meny
function toggleMenu() {
    menuBtn.classList.toggle("active");
    navMenuEl.classList.toggle("active");

}