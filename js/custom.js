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
});