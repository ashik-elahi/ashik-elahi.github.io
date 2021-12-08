$(document).ready(function () {

    var typed = new Typed(".typing", {
        strings: ["Ashik Elahi"],
        typeSpeed: 100,
        backSpeed: 75,
        loop: true
    });

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).scroll(function () {
        if (this.scrollY > 0) {
            $('#menu').removeClass('fa-times');
            $('header').removeClass('toggle');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });


    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

});
