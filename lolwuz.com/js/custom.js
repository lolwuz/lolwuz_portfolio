/**
 * Created by Marten Hoekstra on 19-10-2016.
 */


// Wanneer een object in beeld komt. Een class toevoegen.
(function($) {
    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };
})(jQuery);

$(window).scroll(function(event) {
    $(".card-up").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {

            el.addClass("fadeInUp");
        }
    });
    $(".card-left").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("fadeInLeft");
        }
    });
    $(".card-right").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("fadeInRight");
        }
    });
});

// Soepel naar beneden navigeren
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Omhoog naar begin knop.

$('.scrollToTop').hide(); // Set knop op hide op de header.

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});