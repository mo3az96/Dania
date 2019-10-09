$(document).ready(function () {

    // Mobile Side Menu 
    $('.menubtn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
    });
    $(".menu").click(function (e) {
        e.stopPropagation();
    });
    // Mobile Search 
    $('.searchbtn').click(function () {
        $('.search-pop').fadeIn(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });
    // Product Slider
    $('.123').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 15,
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1199: {
                items: 5
            }
        }
    });
});