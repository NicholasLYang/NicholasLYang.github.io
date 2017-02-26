$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('div.title').addClass('shrink');
        $('span.header-bar').addClass('hide');
    } else {
        $('div.title').removeClass('shrink');
        $('span.header-bar').removeClass('hide');
    }
});
