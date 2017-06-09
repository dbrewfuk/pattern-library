$(function() {
    $('.site-navigation a').each(function() {
        var path = '{{ site.baseUrl }}' + window.location.pathname;
        if ($(this).attr('href') == window.location.pathname) {
            $(this).addClass('is-current');
        }
    });
});

$('.js-site-navigation-toggle').on('click', function() {
    $('.site-navigation').addClass('is-visible');
    $('.pl-page-mask').addClass('is-active');
    $(this).toggleClass('is-toggled');
});

$(document).on('click','.pl-page-mask', function(){
	$('.pl-page-mask').removeClass('is-active');
	$('.site-navigation').removeClass('is-visible');
	$('.js-site-navigation-toggle').removeClass('is-toggled');
});


