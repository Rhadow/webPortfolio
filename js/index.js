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

    /* Make the big circle links in the about section to wiggle(nod) when hover */
    $("a[class*=moreLink]").on("mouseenter", function() {
        var freq = 5;
        var animationTime = 50;
        var intensity = 5;
        var self = $(this);
        var shake = setInterval(function() {
            if (freq <= 0) {
                clearInterval(shake);
            }
            if (freq % 2 !== 0) {
                self.animate({
                    top: "+=" + intensity
                }, animationTime);
            } else {
                self.animate({
                    top: "-=" + intensity
                }, animationTime);
            }
            --freq;
        }, animationTime);
    });

    /* Tracks the scroll position and create effects */
    $(window).on("scroll", function() {
        var curPos = $(window).scrollTop();
        if (curPos > $("#about").outerHeight() / 1.5) {
            $("header").slideDown("1000");
        } else {
            $("header").slideUp("1000");
        }
    });
});
