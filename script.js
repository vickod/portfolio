//navbar, hamburger-nav
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuLinks = document.querySelector(".menu-links");

// profile-buttons
const btnCV = document.querySelector(".cv-btn-profile");
const btnContactProfile = document.querySelector(".contact-btn-profile");
//profile-socials links
const linkedinLink = document.querySelector(".linkedin-link");
const githubLink = document.querySelector(".github-link");

hamburgerIcon.addEventListener("click", ()=>{
    hamburgerIcon.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})

menuLinks.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
})

btnCV.addEventListener("click", ()=> window.open('./assets/resume/cv.pdf'))
linkedinLink.addEventListener("click", ()=> window.open('https://linkedin.com'))
githubLink.addEventListener("click", ()=> window.open('https://github.com'))
btnContactProfile.addEventListener("click", ()=> location.href='#contact')


