$(document).ready(function () {
    $(".hb").click(function () {
        $(".top-menu").css('right', '0');
    });

    $('.close').click(function () {
        $(".top-menu").css('right', '-100vw');
    })
});