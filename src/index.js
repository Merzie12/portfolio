
// Pokazywanie i ukrywanie menu

let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".navbar");

{menu.classList.contains("active") ? 
    menuToggle.classList.remove("fa-bars") : 
    menuToggle.classList.add("fa-bars")}

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle("active");

    {menu.classList.contains("active") ? 
    menuToggle.classList.add("fa-times") : 
    menuToggle.classList.remove("fa-times")}
})

// Obsługa przycisków 


let navBtns = document.querySelectorAll(".navbtn");
let BtnsArray = Array.from(navBtns);

BtnsArray.map(navbtn => {
    let element = document.querySelector(`.${navbtn.id}`);
    if(!element){
        navbtn.classList.add("disabled")
    }
    else if(element){
        navbtn.addEventListener('click', ()=>{
            element.scrollIntoView({behavior: "smooth"}, true);
            {menu.classList.contains("active") ? menu.classList.remove("active") : null}
            {menu.classList.contains("active") ? null : menuToggle.classList.remove("fa-times")}
    })
    }
    
})

let arrowBtn = document.querySelector(".arrow-icon");
arrowBtn.addEventListener("click", ()=>{
    document.querySelector(".aboutme").scrollIntoView({behavior: "smooth"}, true);
})

// Zamykanie Navbara po kliknięciu poza nim

let sections = document.querySelectorAll("section");
let sectionsArray = Array.from(sections);
sectionsArray.map(section => {
    section.addEventListener("click", ()=>{
        {menu.classList.contains("active") ? menu.classList.remove("active") : null}
        {menu.classList.contains("active") ? null : menuToggle.classList.remove("fa-times")}
    })
})

//Sekcja kontaktu

let socials = document.querySelectorAll(".social");
let socialsArray = Array.from(socials);
socialsArray.map(social => {
    social.addEventListener("click", ()=>{
        social.classList.toggle("active");
    })
})


//Zmiana tła navbara przy scrollu

window.addEventListener("scroll", event=>{
    if(window.innerWidth >= 1024){
        if(scrollY >= 100){
            {menu.classList.contains("scrolled") ? null : menu.classList.add("scrolled")}
        }
        else{
             menu.classList.remove("scrolled")
        }
    }
})



