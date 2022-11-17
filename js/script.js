$(document).ready(function () {
    $('.nav').click(function (event) {
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
        // slidesToScroll: 1,
        // easing: '_linear_',
        // initialSlide: 0,
        // autoplay: false,
        // autoplaySpeed: 3000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        // draggable: false,
        // swipe: true,
        // touchThreshold: 5,
        // touchMove: true,
        // waitForAnimate: true,
        // rows: 1,
        // slidesPerRow: 5,
        // initialSlide: 3,
        // responsive:[
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     }
        // ],
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
        // slidesToScroll: 1,
        // easing: '_linear_',
        // initialSlide: 0,
        // autoplay: false,
        // autoplaySpeed: 3000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        // draggable: false,
        // swipe: true,
        // touchThreshold: 5,
        // touchMove: true,
        // waitForAnimate: true,
        // rows: 1,
        // slidesPerRow: 5,
        // initialSlide: 3,
        // responsive:[
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     }
        // ],
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

