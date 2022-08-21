$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.prev').click(function () {
        $('.carousel').carousel('prev');
    });
    $('.next').click(function () {
        $('.carousel').carousel('next');
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
});