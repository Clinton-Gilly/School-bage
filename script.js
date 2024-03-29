let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}


  
  document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('#header').classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
let lastScrollTop = 0;

window.addEventListener("scroll", function(){
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Downscroll code
        document.querySelector(".header").classList.add("hide-nav");
    } else {
        // Upscroll code
        document.querySelector(".header").classList.remove("hide-nav");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});