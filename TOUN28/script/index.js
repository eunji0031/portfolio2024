
$('li.main-menu').mouseenter(function(){
    
   $(this).find('.sub-menu').stop().slideDown()


})

$('li.main-menu').mouseleave(function(){

    $('.sub-menu').stop().slideUp()
})



$('.slide:gt(0)').hide()
let slideIndex = 0


function fadeSlide() {
    slideIndex++
    console.log(slideIndex)

    if (slideIndex === 3) {
        slideIndex = 0
    }

    $('.slide').fadeOut()
    $('.slide').eq(slideIndex).fadeIn()


}

setInterval(fadeSlide, 5000)

