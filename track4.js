function playVideo(element) {
    var video = element.querySelector('video');
    video.play();
}

// 비디오를 호버 종료 시에 일시 중지하고 첫 프레임으로 되감기
function pauseVideo(element) {
    var video = element.querySelector('video');
    video.pause();
    video.currentTime = 0;
}

// 페이지 로드 시 비디오를 일시 중지된 상태로 설정
window.onload = function () {
    var videos = document.querySelectorAll('.video-box video');
    videos.forEach(function (video) {
        video.load(); // 비디오를 로드하고
        video.pause(); // 일시 중지된 상태로 설정
        video.currentTime = 0; // 비디오를 처음부터 재생되도록 시간 설정
    });
};





