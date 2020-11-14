$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
        cssEase: 'linear',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            dots: true,
            arrows: false,
            adaptiveHeight: true,
            slidesToShow: 1
            }
        }
        ]
    });
});

$(document).ready(function () {
    $('.menu-opener').on('click', function(e) {
        e.preventDefault() 
        $('.header').toggleClass('mobile-menu-active');
    })
});

