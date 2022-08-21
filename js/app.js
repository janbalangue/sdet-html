$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel();

});

document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelector('.carousel');
    var elems = document.querySelectorAll('.carousel');
    $('.prev').click(function () {
        $('.carousel').carousel('prev');
    });
    $('.next').click(function () {
        $('.carousel').carousel('next');
    });
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
});