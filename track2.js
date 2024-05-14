


var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
swiper1.on('slideChange', function () {
    let idx = swiper1.activeIndex
    $('.swiper-slide').removeClass('on')

    $('.swiper-slide').eq(idx).addClass('on')
});

$('.cd_item').eq(0).click(function (e) {
    e.preventDefault()
    $('#cd_up').addClass('on')
    $('#stick').addClass('on')
});