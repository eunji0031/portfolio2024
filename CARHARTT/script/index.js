$('.slides:gt(0)').hide()
 let slideIndex = 0


 function fadeSlide() {
     slideIndex++
     console.log(slideIndex)

     if (slideIndex === 4) {
         slideIndex = 0
     }

     $('.slides').fadeOut()
     $('.slides').eq(slideIndex).fadeIn()


 }

 setInterval(fadeSlide, 4000)



