$(document).ready(function () {

    var tp = $('.top');
    var hsm = $('#header').offset().top;
    var hm = $('#header');



    //    ripples plagin
    $('.riples_plagin').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
        
      
    });
    //    ripples plagin

    //    typed plagin
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
         smartBackspace: true,
      loop: true,
          typeSpeed:100,
        backSpeed: 100,
        
    });
    //    typed plagin

    //            back to top button

    tp.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        });
    });




    $(window).on('scroll', function () {
        var a = $(this).scrollTop()
        if (a != 0) {
            tp.fadeIn();
        } else {
            tp.fadeOut();
        }
    });
    //    back to top button

    //    sticky menu

    $(window).on('scroll', function () {
        var b = $(this).scrollTop();
        if (hsm < b) {
            hm.addClass('sticky');

        } else {
            hm.removeClass('sticky');
        }
    })
    //    sticky menu
    
//    wow plagin
      new WOW().init();
//    wow plagin
//    maxitup plagin
    var mixer = mixitup('.maxitup_filter');
//    maxitup palgin

});
