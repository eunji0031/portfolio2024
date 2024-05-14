document.addEventListener('DOMContentLoaded', function () {
    const modalBtns = document.querySelectorAll('.like ul li a');
    const modals = document.querySelectorAll('.modal');

    modalBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = btn.getAttribute('href'); // 클릭된 링크의 href 속성값 가져오기
            const modal = document.querySelector(modalId); // 링크의 href 값과 일치하는 모달 찾기

            // 모든 모달을 닫음
            modals.forEach(function (modal) {
                modal.style.display = "none";
                modal.classList.remove('active');
            });

            modal.style.display = "block"; // 모달 보이도록 설정
            modal.classList.add('active'); // 모달에 active 클래스 추가하여 활성화
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modal = button.parentElement;
            modal.style.display = "none"; // 닫기 버튼을 클릭하면 모달을 숨김
            modal.classList.remove('active'); // active 클래스 제거하여 모달을 비활성화
        });
    });
});





var swiperVertical = new Swiper(".mySwiper1", {
    direction: "vertical",

});

var swiperFade = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    effect: "fade",
    
});


$('.next').click(function(){
    swiperVertical.slideNext()
    swiperFade.slideNext()
})
$('.prev').click(function(){
    swiperVertical.slidePrev()
    swiperFade.slidePrev()
})