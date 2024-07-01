"use strict";
let menuBar=document.querySelector(".menu-bar");
let xmark=document.querySelector(".fa-xmark");
let faBars=document.querySelector(".fa-bars");
let menu=document.querySelector(".menu")
let menuList=menu.querySelectorAll("li");
menuList.forEach(function(li){
    li.addEventListener("click",openMenu)
})
menuBar.addEventListener("click",openMenu);


AOS.init({
    duration: 600,
});

function openMenu(){
     menu.classList.toggle("show");
     xmark.classList.toggle("show-xmark");
     faBars.classList.toggle("hidden")
}
