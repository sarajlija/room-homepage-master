//Open and close menu
const menu = document.getElementById('menu-open'),
    nav_mobile = document.getElementById('nav-mobile'),
    menu_close = document.getElementById('menu-close'),
    nav_desktop = document.getElementById('nav-desktop'); 

menu.addEventListener('click', () => {
    nav_mobile.style.display = 'flex';
    nav_desktop.style.display = 'none'
});

menu_close.addEventListener('click', () => {
    nav_mobile.style.display = 'none';
     nav_desktop.style.display = 'flex';
});

//Change slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    
    showSlides(slideIndex += n);
}

/*function currentSlide(n) {
    showSlides(slideIndex = n);
}*/

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "flex";
   
}