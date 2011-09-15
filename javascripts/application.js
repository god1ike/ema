$(document).ready(function() {
    $('div.part').live("hover",
    function() {
        if (!$(this).hasClass("active") && !$("div.part p.description").is(":animated")) {
            var tmp = this;
            $('div.part.active p.description').slideUp("fast",
            function() {
                $('div.part.active').removeClass("active");
            });
            $(this).find('p.description').slideDown("fast",
            function() {
                $(tmp).addClass("active");
            });
        }
    });
});
