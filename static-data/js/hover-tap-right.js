$(document).ready(function() {
    $(".tab").mouseover(function() {
        $(this).animate({
            "left": "-=40px"
        }, 200);
    });
    $(".tab").mouseout(function() {
        $(this).animate({
            "left": "+=40px"
        }, 200);
    });

    $(".tab-left").mouseover(function() {
        $(this).animate({
            "left": "+=40px"
        }, 200);
    });
    $(".tab-left").mouseout(function() {
        $(this).animate({
            "left": "-=40px"
        }, 200);
    });
});

(function($) {
    $.fn.hoverSlide = function(options) {

        var settings = $.extend({
            position: "fixed",
            color: "white",
            backgroundColor: "#abc",
            padding: "15px",
            font: "400 15px Lato, sans-serif",
            lineHeight: "1.8",
            left: "",
            right: "-50px",
            width: "150px",
            borderRadius: "5px",
            top: "60px",
            zIndex: 99,
            opacity: "",
            cursor: "pointer"
        }, options);

        return this.css({
            position: settings.position,
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            padding: settings.padding,
            font: settings.font,
            lineHeight: settings.lineHeight,
            left: settings.left,
            right: settings.right,
            width: settings.width,
            borderRadius: settings.borderRadius,
            top: settings.top,
            zIndex: settings.zIndex,
            opacity: settings.opacity,
            cursor: settings.cursor
        });
    };
}(jQuery));

$(".tab1").hoverSlide({
    backgroundColor: "#0070D1"
});

$(".tab2").hoverSlide({
    top: 120,
    backgroundColor: "#107C10"
});

$(".tab3").hoverSlide({
    top: 180,
    backgroundColor: "#f44336"
});

$(".tab4").hoverSlide({
    top: 240,
    backgroundColor: "#0082FB"
});