$('.tab-menu li').click(function(){

    $('.tab-menu li a').removeClass('on')
    $(this).find('a').addClass('on')

    let index = $(this).index()

$('.sect1 article').removeClass('on')
$('.sect1 article').eq(index).addClass('on')
})