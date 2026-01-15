

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

    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
});

var menu = $("#gnb > ul").clone(); //대상복제

$("#main_menu").append(menu); //복제된요소가 들어갈자리를 지정해줌

$("#main_menu a").addClass("arrow"); //클래스 부여

var sns = $(".sns").clone();

$("footer").prepend(sns); // 복제된 요소를 앞에 넣음