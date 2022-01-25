$( document ).ready(function() {

    $(window).on('scroll', function () {
        var mql = window.matchMedia('(min-width: 1024px)').matches;
        if (mql){
            var st = $(this).scrollTop();
            document.querySelector(".for__bg").style.transform = `scale(${1 + st*0.0002})`;
        }
    })

});