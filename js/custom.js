$(document).ready(function () {
    var mql = window.matchMedia('(min-width: 1368px)').matches;
    $(window).on('scroll', function () {
        if (mql) {
            var pos = $('.for__bg').offset().top;
            var st = $(this).scrollTop();
            if (st > pos - 800) {
                $('.for__bg').css('transform', 'scale(' + parseFloat(1 + st * 0.0002) + ')');
            }
        } else {
            $('.for__bg').css('transform', 'scale(1)');
        }
    });
    if (!mql) {
        console.log(mql)
        $('.hamburger').click(function () {
            $(this).toggleClass('is-active');
            $('.navigation__collector').toggleClass('active');
        });
    }
    if (mql){
        $('.cube').click(function () {
            $('.side').toggleClass('side_active');
        });
        $('.side-menu').on('mouseleave', function () {
            $('.side').removeClass('side_active');
            $('.side').addClass('side_closing');
            setTimeout(function(){
                $('.side').removeClass('side_closing');
            }, 250);
        })
    }

    $('.functionality-item__title').click(function () {
        $('.functionality-item__title').parent().removeClass('functionality-item_active');
        $(this).parent().addClass('functionality-item_active');
    });

    // menu
    $('.js-menu').click(function (e) {
        e.preventDefault();
        var to = $(this).attr('href');
        $('.js-menu').removeClass('active');
        $('.js-menu[href="' + to + '"]').addClass('active');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 600);
    });

    // modal
    $('[data-modal=consultation]').on('click', function (e) {
        e.preventDefault();
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button--mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
    function validateForms(form) {
        return $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Неправильно введен адрес email"
                }
            }
        });
    }
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    $('input[name=phone]').mask("+7 (999) 999-99-99");
    $('form').submit(function(e) {
        e.preventDefault();
        if (!validateForms('#consultation form').form()){
            return false;
        }else {
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay, #consultation, #order').fadeOut();
                // $('.overlay, #thanks').fadeIn('slow');
                $('form').trigger('reset');
            });
        }
    });

});