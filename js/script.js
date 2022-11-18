$(document).ready(function () {
    $('.nav, .close-button').click(function (event) {
        $('.nav, .nav-main, .nav-main-list').toggleClass('active');
    });
});

$(document).ready(function () {
    $('.section-clients-slider-top').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        asNavFor:".section-clients-slider-down",
        arrows: false, 
    });
});

$(document).ready(function () {
    $('.section-clients-slider-down').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        asNavFor:".section-clients-slider-top",
        arrows: true, 
    });
});

$(document).ready(function () {
    $('.section-horse-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        speed: 1300,
    });
});

$(document).ready(function () {
    $('.section-feedback-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        speed: 1300,
    });
});

