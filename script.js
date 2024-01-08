$(document).ready(function () {
    $(document).on('mousedown', function () {
        $('body, a').addClass('mousedown');
    });

    $(document).on('mouseup', function () {
        $('body, a').removeClass('mousedown');
    });
});