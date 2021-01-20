const navbar = document.querySelector(".nav-bar");
window.addEventListener("scroll" , function(){
    navbar.classList.toggle("stikky" , window.scrollY > 0)
})