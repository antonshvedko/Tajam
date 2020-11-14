$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
	});
});

$(document).ready(function () {
    $('.menu-opener').on('click', function(e) {
        e.preventDefault() 
        $('.header').toggleClass('mobile-menu-active');
    })
});

