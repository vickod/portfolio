const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links")

hamburgerIcon.addEventListener("click", ()=>{
    hamburgerIcon.classList.toggle("active")
    hamburgerMenu.classList.toggle("active") 
})

menuLinks.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("active")
    hamburgerIcon.classList.toggle("active") 
})

