$(document).ready(function() {
    $('div.part').live("hover",
    function() {
        if (!$(this).hasClass("active")) {
            $('div.part.active p.description').slideUp("fast");
            $(this).find(' p.description').slideDown("fast");
            $('div.part.active').removeClass("active");
            $(this).addClass("active");
        }
    });
});
