


$('a.bar').click(function () {
    $(this).hide()
    $('nav').addClass('on')
    $('section').addClass('on')
})

$('nav li').click(function () {
    $('nav li').removeClass('on')
    $(this).addClass('on')
    // --------------------------

    let i = $(this).index()
    $('#wrap').removeClass()
    $('#wrap').addClass(`on${i}`)//탬플릿 문자열


    $('nav').removeClass('on')//rotateY해제
    $('section').removeClass('on')//rotateY해제

    // --------------------

    $('article').removeClass('on')
    $('article').eq(i).addClass('on')
    $('a.bar').show()

})
