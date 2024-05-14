
document.getElementById('t1-1').addEventListener('mouseover', function () {
    this.classList.add('rotate-animation');
});

document.getElementById('t1-1').addEventListener('mouseout', function () {
    this.classList.remove('rotate-animation');
});




document.getElementById('t2-1').addEventListener('mouseover', function () {
    this.classList.add('rotate-animation');
});

document.getElementById('t2-1').addEventListener('mouseout', function () {
    this.classList.remove('rotate-animation');
});



document.getElementById('t3-1').addEventListener('mouseover', function () {
    this.classList.add('rotate-animation');
});

document.getElementById('t3-1').addEventListener('mouseout', function () {
    this.classList.remove('rotate-animation');
});



document.getElementById('t4-1').addEventListener('mouseover', function () {
    this.classList.add('rotate-animation');
});

document.getElementById('t4-1').addEventListener('mouseout', function () {
    this.classList.remove('rotate-animation');
});




document.getElementById('t5-1').addEventListener('mouseover', function () {
    this.classList.add('rotate-animation');
});

document.getElementById('t5-1').addEventListener('mouseout', function () {
    this.classList.remove('rotate-animation');
});








var play = true;
player = setInterval(playerInterval, 400);

jQuery('.player').click(function () {
    if (play) {
        clearInterval(player);
        jQuery('.equalizer span').css('height', 2);
        play = false;
    } else {
        play = true;
        player = setInterval(playerInterval, 400);
    }
});

function playerInterval() {
    jQuery('.equalizer span').each(function () {
        jQuery(this).css('height', Math.floor((Math.random() * 16) + 2));
    });
}


Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

$("[data-fancybox]").fancybox({
    youtube: {
        controls: 1,
        showinfo: 0
    },
    vimeo: {
        color: 'f00'
    }
});



