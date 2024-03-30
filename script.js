document.querySelector('#menu-btn').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar'); // Select the navbar
    navbar.classList.toggle('active'); // Toggle the active class for the navbar
    document.querySelector('#header').classList.toggle('active');
    document.querySelector('#menu-btn').classList.toggle('active'); // Toggle the active class for the menu button
    
    if (navbar.classList.contains('active')) {
      // If the navbar is now active, add a click event listener to close it when clicking outside
      document.addEventListener('click', closeNavbarOutside);
    } else {
      // If the navbar is not active anymore, remove the click event listener
      document.removeEventListener('click', closeNavbarOutside);
    }
  });
  
  // Function to close the navbar when clicking outside
  function closeNavbarOutside(event) {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('#menu-btn');
    if (!navbar.contains(event.target) && event.target !== menuBtn) {
      navbar.classList.remove('active');
      document.querySelector('#header').classList.remove('active');
      document.querySelector('#menu-btn').classList.remove('active');
      document.removeEventListener('click', closeNavbarOutside);
    }
  }
  
  
  
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
