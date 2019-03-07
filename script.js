$(document).ready(function () {
    let checkMenu = false;
    let checkItem = false;
    $('.openbtn').on('click', function () {
        $('#mySidebar').toggleClass('sidbar-toggle');
        $('.text-collapse ').toggleClass('hide-text');
        $('#main').toggleClass('main-toggle');
        $('.dropdown__menu-list').removeClass('dropdown-display');
        // $('#mySidebar li').removeClass('active');
        $('.openbtn').text($('.openbtn').text() == 'Open ' ? 'Hide ' : 'Open ');
    });
       
    $('.sidebar').children().each(function () {
        $(this).on('click', function () {
            $(this).parent().children().each(function () {
                $(this).removeClass('active');
                if ($(this).hasClass('dropdown') === true) {
                    $(this).children().removeClass('dropdown-display');
                }
            });
            $(this).addClass('active');
            $(this).children().toggleClass('dropdown-display');

        });
    });

    $('.dropdown__menu-item').on('click', function(){
        $('.dropdown__menu-item').removeClass('active');
        $(this).addClass('active');
    });


    let min = $('#acount').attr('min');
    let max = $('#acount').attr('max');
    let amount = $('#acount').val();
    $('#desc').on('click', function(){
        if(amount === min) {
            l
        }
    });
});