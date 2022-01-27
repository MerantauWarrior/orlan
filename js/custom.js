$( document ).ready(function() {
    var mql = window.matchMedia('(min-width: 1368px)').matches;
    $(window).on('scroll', function () {
        if (mql){
            var pos = $('.for__bg').offset().top;
            var st = $(this).scrollTop();
            if (st > pos-800){
                $('.for__bg').css('transform', 'scale('+ parseFloat(1 + st*0.0002) +')');
            }
        }else {
            $('.for__bg').css('transform', 'scale(1)');
        }
    });
    if (!mql){
        $('.hamburger').click(function(){
            $(this).toggleClass('is-active');
            $('.navigation__collector').toggleClass('active');
        });
    }

    $('.functionality-item__title').click(function () {
        $('.functionality__items').addClass('functionality__items_active');
        $('.functionality-item__title').parent().removeClass('functionality-item_active');
        $(this).parent().addClass('functionality-item_active');
    });

    $('.cube').click(function () {
        $('.side').toggleClass('side_active');
    });

    // menu
    $('.js-menu').click(function (e) {
        e.preventDefault();
        var to = $(this).attr('href');
        $('.js-menu').removeClass('active');
        $('.js-menu[href="'+to+'"]').addClass('active');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 600);
    });

});