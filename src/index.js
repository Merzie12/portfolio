
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


//Zmiana tła navbara przy scrollu

// window.addEventListener("scroll", event=>{
//     if(window.innerWidth >= 1024){
//         if(scrollY >= 100){
//             {menu.classList.contains("scrolled") ? null : menu.classList.add("scrolled")}
//         }
//         else{
//              menu.classList.remove("scrolled")
//         }
//     }
// })

//Dodanie przycisku powrotu na górę

let scrollUp = document.createElement("div");
scrollUp.classList.add("scroll-up");
scrollUp.innerHTML = "<i class='fas fa-arrow-up'></i>";
scrollUp.addEventListener("click", ()=>{
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", event => {
    if (scrollY >= document.querySelector(".aboutme").getBoundingClientRect().top * 2){
        document.body.appendChild(scrollUp);
    }
    else scrollUp.remove();

})

let mailBtn = document.querySelector(".mail-btn");
let mailText = document.querySelector(".mail-text").textContent;

mailBtn.addEventListener("click", console.log(navigator.clipboard.writeText("XD")));

