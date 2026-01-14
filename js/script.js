

const swiper = new Swiper("#main_view", {
    wrapperClass: "slide",
    slideClass: "view",
    slideActiveClass:'active',
    effect: "fade",
    speed: 800,
    loop:true,

    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".pager",
        bulletActiveClass:"active"
    },
});