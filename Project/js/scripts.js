new WOW().init();

$(".owl-carousel").owlCarousel({
    rtl:true,
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1200:{
            items:4
        }
    }
});