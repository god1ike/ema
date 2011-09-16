window.onload = function() {
    $('div.parts').css("height", $('div.blog').height());
}


$(document).ready(function() {
    window.onresize = function(event) {
        // alert($('div.blog').height());
        $('div.parts').css("height", $('div.blog').height());
    }
    var WIDTH_SLIDE = 1260;
    var NUMBER_SLIDERS = $('.slide a').size();
    var SLIDE = $('div.slide');
    var WIDTH_PAGE = 100 / NUMBER_SLIDERS;

    var course = "right";
    var current_slide = $('.allpics a').first();
    var arrow_left = $("div.left");
    var arrow_right = $("div.right");

    $('div.page').css("width", WIDTH_PAGE + "%");

    $("div.part").live("hover",
    function() {
        if (! ($(this).hasClass("active") || $("div.part p.description").is(":animated"))) {
            var tmp = this;
            $("div.part.active p.description").slideUp("fast",
            function() {
                $("div.part.active").removeClass("active");
            });
            $(this).find("p.description").slideDown("fast",
            function() {
                $(tmp).addClass("active");
            });
        }
        return false;
    });

    $("div.flags div, li.date a").live("click",
    function() {
        if (!$(this).hasClass("active")) {
            var class_name = $(this).attr("class");
            var slide_current = $("div.exp.active");
            $("div.exp.active").removeClass("active");
            $("div.flags div.active").removeClass("active");
            $("li.date a.active").removeClass("active");
            $("div." + class_name).addClass("active");
            $("a." + class_name).addClass("active");
            $("div.exp.active").css("top", -300);
            slide_current.animate({
                "top": '+=300'
            },
            1000);
            $("div.exp.active").animate({
                "top": '+=300'
            },
            1000);

        }
        return false;
    });

    var slideLeft = function() {
        if (!$("div.page").is(":animated")) {

            $('div.page').animate({
                "left": '-=' + WIDTH_PAGE + "%"
            },
            1000);

            current_slide.animate({
                'opacity': 0
            },
            1000);
            current_slide.prev().animate({
                'opacity': 1
            },
            1000,
            function() {
                if (current_slide.prev().length == 0) {
                    $("div.left.active").removeClass("active");
                }
            });

            current_slide.css("z-index", 0);
            current_slide = current_slide.prev();
            current_slide.css("z-index", 1);

            if (!arrow_right.hasClass("active")) {
                $(arrow_right).addClass("active");
            }
        }
    }

    var slideRight = function() {
        if (!$("div.page").is(":animated")) {
            $('div.page').animate({
                "left": '+=' + WIDTH_PAGE + "%"
            },
            1000);

            current_slide.animate({
                opacity: 0
            },
            1000);
            current_slide.next().animate({
                opacity: 1
            },
            1000,
            function() {
                if (current_slide.next().length == 0) {
                    $("div.right.active").removeClass("active");
                }
            });

            current_slide.css("z-index", 0);
            current_slide = current_slide.next();
            current_slide.css("z-index", 1);
            if (!arrow_left.hasClass("active")) {
                $(arrow_left).addClass("active");
            }
        }
    }

    var timer_slider = setInterval(function() {
        if (course == "left") {
            slideLeft();
        } else if (course == "right") {
            slideRight();
        }
        if (current_slide.next().length == 0) {
            course = "left";
        };
        if (current_slide.prev().length == 0) {
            course = "right";
        };
    },
    5000);

    $("div.left.active").live("click",
    function() {
        clearTimeout(timer_slider);
        slideLeft();
        return false;
    });

    $("div.right.active").live("click",
    function() {
        clearTimeout(timer_slider);
        slideRight();
        return false;
    });

    $(".div.allpics a").hover(
    function() {
        alert("asd");
        $(this).find('img').fadeIn();
    },
    function() {
        alert("zxc");
        $(this).find('img').fadeOut();
    });

    $('div.allpics a').live("hover",
    function(event) {
        if (event.type == 'mouseenter') {
            $(this).find('img').animate({
                opacity: 1
            },
            500);
        } else if (event.type == 'mouseleave') {
            $(this).find('img').animate({
                opacity: 0
            },
            500);
        }
    })
});
