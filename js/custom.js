$( document ).ready(function() {
    var mql = window.matchMedia('(min-width: 1368px)').matches;
    $(window).on('scroll', function () {
        if (mql){
            var st = $(this).scrollTop();
            document.querySelector(".for__bg").style.transform = `scale(${1 + st*0.0002})`;
        }else {
            document.querySelector(".for__bg").style.transform = `scale(1)`;
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

});