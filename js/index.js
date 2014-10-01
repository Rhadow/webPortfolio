$(function() {
    /* Smooth scrolling */
    $("a[href*=#]:not([href=#])").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target) {
                $("html, body").animate({
                	//Scroll to target's top minus the header's height
                    scrollTop: target.offset().top - $("header").outerHeight()
                }, 1000);
            }
            return false;
        }
    });

    /* Tracks the scroll position and create effects */
    $(window).on("scroll", function() {
        var curPos = $(window).scrollTop();
        if (curPos > $("#about").outerHeight() / 2) {
            $("header").slideDown("1000");
        } else {
            $("header").slideUp("1000");
        }
    });
});
