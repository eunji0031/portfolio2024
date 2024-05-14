
// ---------------------------------


let i = 0;
$('.slide').eq(0).clone().appendTo('.slide-wrap');
function slide() {

    i++;
    // console.log(i)
    $('.slide-wrap').animate({ 'top': -100 * i + '%' }, 500)

    if (i == $('.slide').length - 1) {
        i = 0
        $('.slide-wrap').animate({ 'top': 0 }, 0)
    }

}

setInterval(slide, 3000);



//  메뉴를 클릭하면

$('ul.main-menu li a').click(function () {
    $('ul.main-menu li a').removeClass('on')
    $(this).addClass('on')


    //메뉴에 위치값을 지정해뒀으니 그 값을 읽어줘
    let href = $(this).attr('href')

    //지정한 section 윈도우 창의 0의 위치에서 각 section의 시작점의 거리값을 구해줘

    // console.log(href)
    let secTop = $(href).offset().top
    //창의 스크롤의 위치를 클릭한 a의 section값의 시작점으로 이동해줘
    $('html').stop().animate({ 'scrollTop': secTop })

})

$(window).scroll(function () {
    let scrTop = $(this).scrollTop()
    $('h5').text(scrTop)
})


$('section').mousewheel(function (e, delta) {

    if (delta > 0) {
        // alert('Up')
        let prev = $(this).prev().offset().top
        $('html').stop().animate({ 'scrollTop': prev }, 500)
    } else if (delta < 0) {
        // alert('Down')
        let next = $(this).next().offset().top
        $('html').stop().animate({ 'scrollTop': next }, 500)


    }
})


$(window).scroll(function () {


    let scrTop = $(this).scrollTop()
    $('h5').text(scrTop)

    $('section').each(function (i) {
        let secTop=$(this).offset().top
        console.log(secTop)
        if(scrTop>=secTop){
            
            $('nav li a').removeClass('on')
            $('nav li').eq(i).find('a').addClass('on')
        }

    })
})
