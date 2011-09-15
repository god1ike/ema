$(document).ready(function() {
    $("div.part").live("hover",
    function() {
        if (!$(this).hasClass("active") && !$("div.part p.description").is(":animated")) {
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

});
