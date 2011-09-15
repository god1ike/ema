$(document).ready(function() {
    const WIDTH_SLIDE = 1260;
    const NUMBER_SLIDERS = $('.slide a').size();
    const SLIDE = $('div.slide');
    const WIDTH_PAGE = 100 / NUMBER_SLIDERS;

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

    $("div.left.active").live("click",
    function() {
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

          current_slide = current_slide.prev();         

          if (!arrow_right.hasClass("active")) {
              $(arrow_right).addClass("active");
          }
        }
        return false;
    });

    $("div.right.active").live("click",
    function() {
        if (!$("div.page").is(":animated")) {
						$('div.page').animate({
                "left": '+=' + WIDTH_PAGE + "%"
            },
            1000);
            
            current_slide.animate({
                'opacity': 0
            },
            1000);
            current_slide.next().animate({
                'opacity': 1
            },
            1000,
            function() {
                if (current_slide.next().length == 0) {
                    $("div.right.active").removeClass("active");
                }
            });

            current_slide = current_slide.next();            

            if (!arrow_left.hasClass("active")) {
                $(arrow_left).addClass("active");
            }
        }
        return false;
    });

});
