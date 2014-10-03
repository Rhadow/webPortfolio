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

    /* Check the timeline block elements and hide them if they are not in the viewport */
    $(".timelineBlock").each(function() {
        if ($(window).scrollTop() + $(window).height() * 0.75 < $(this).offset().top) {
            $(this).find(".timelineContent, .timelineDate, .timelineImg").addClass("isHidden");
        }
    });

    /* Tracks the scroll position and create effects */
    $(window).on("scroll", function() {
        var curPos = $(window).scrollTop();
        /* Show the nav bar when the scroll position scrolls over 2/3 of about section*/
        if (curPos > $("#about").outerHeight() / 1.5) {
            $("header").slideDown("1000");
        } else {
            $("header").slideUp("1000");
        }
        /* When scroll to the timeline block, show the bounceIn animation */
        $(".timelineBlock").each(function() {
            if (curPos + $(window).height() * 0.75 >= $(this).offset().top && $(this).find(".timelineImg").hasClass("isHidden")) {
                $(this).find(".timelineContent, .timelineImg").removeClass("isHidden").addClass("bounceIn");
                $(this).find(".timelineDate").fadeIn(600);
            }
        });
    });
});
