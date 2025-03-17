// Progress Bar
let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress")
    let progressVal = document.getElementById("progress-val")
    let pos = document.documentElement.scrollTop
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollVal = Math.round(pos * 100 / calcHeight)
    scrollProgress.style.background = `conic-gradient(#e70634 ${scrollVal}%, #2b2f38 ${scrollVal}%)`
}
window.onscroll = scrollPercentage
window.onload = scrollPercentage

// Initialize Swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// menu button fixed
$(window).scroll(function(){
    if($(document).scrollTop() > 20) {
        $('nav').addClass('fix-icon')
    }
    else {
        $('nav').removeClass('fix-icon')
    }
})