document.addEventListener("DOMContentLoaded", function () {
    const linkItems = document.querySelectorAll('.link-item');

    linkItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();


            const imageSrc = this.getAttribute('data-image');
            document.getElementById('playButton').src = imageSrc;


            const trackText = this.getAttribute('data-text');
            document.getElementById('trackName').textContent = trackText;


            const link = this.getAttribute('data-link');
            document.getElementById('projectLink').href = link;
        });
    });
});



var trackNameElement = document.getElementById('trackName');
trackNameElement.addEventListener('click', function (event) {
    event.preventDefault();


});
