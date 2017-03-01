$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('div.title').addClass('shrink');
        $('span.header-bar').addClass('hide');
        $('ul.header-list').addClass('hide');
        $('header').addClass('shrink');
    } else {
        $('div.title').removeClass('shrink');
        $('span.header-bar').removeClass('hide');
        $('ul.header-list').removeClass('hide');
        $('header').removeClass('shrink');
    }
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 120
                }, 1000);
                return false;
            }
        }
    });
});

function chooseNavbar() {
    if ($(window).width() < 600) {
        $('.header-bar').hide()
    } else {
        $('.header-list').hide()
    }

}
$(document).ready(chooseNavbar);
