

const swiper = new Swiper("#main_view", {
    wrapperClass: "slide",
    slideClass: "view",
    effect: "fade",
    speed: 800,

    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".pager",
        bulletActiveClass:"active"
    },
});