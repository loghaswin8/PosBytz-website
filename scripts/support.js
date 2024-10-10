window.addEventListener('scroll', function() {
    var navbar = document.getElementById("navbar");
    var links = document.querySelectorAll('.icons ul li a'); // Select all links in the icons
    var mainLogo = document.querySelector('.main_logo_img');
    var stickyLogo = document.querySelector('.sticky_logo_img');

    if (window.scrollY > 10) { // When scrolled more than 50px
        navbar.style.backgroundColor = "white"; // Change navbar background
        links.forEach(link => {
            link.style.color = "#051441"; // Change link text color to dark blue
        });
        mainLogo.style.display = 'none';
        stickyLogo.style.display = 'block';
    } else {
        navbar.style.backgroundColor = "#9b51e0"; // Original navbar background
        links.forEach(link => {
            link.style.color = "#fff"; // Change link text color back to white
        });
        stickyLogo.style.display = 'none';
        mainLogo.style.display = 'block';
    }
});

window.onscroll = function() {
    var navbar = document.querySelector(".icons");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

window.onscroll = function() {
    var navbar = document.querySelector(".icons");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        document.querySelectorAll('.subnav-content li a').forEach(function(item) {
            item.style.color = '#051441';  // Enforce color even on scroll
        });
    } else {
        navbar.classList.remove("scrolled");
    }
};  