document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active'); // Changed to .navbar
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
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        // downscroll code
        logo.style.display = 'none'; // logo disappears
        navbar.style.display = 'none'; // navbar disappears
    } else {
        // upscroll code
        logo.style.display = 'block'; // logo appears
        navbar.style.display = 'block'; // navbar appears
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);