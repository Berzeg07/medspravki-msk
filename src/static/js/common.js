$(document).ready(function () {

    $(".burger").click(function () {
        $(this).toggleClass('is-active');
        $('.hidden-menu-dsc').slideToggle();
    });

    $(".burger-mob").click(function () {
        $(this).toggleClass('is-active');
        $('.mob-dropdown').toggleClass('is-active');
    });

    $(".link-mob").click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var elem = $(this).next();

        if (!$this.hasClass("is-active")) {
            $(".inner-menu").slideUp();
            $(".link-mob").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        elem.slideToggle();

    });

    $('.form-select select').selectric();

    var metrSlider = new Swiper('.metr-slider', {
        slidesPerView: 9,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-mr',
            prevEl: '.swiper-button-prev-mr',
        },

        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });












    var myAdvSlider = undefined;

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth > 767 && myAdvSlider == undefined) {
            var advSlider = new Swiper('.advantage-slider', {
                slidesPerView: 5,
                spaceBetween: 38,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next-adv',
                    prevEl: '.swiper-button-prev-adv',
                },

                breakpoints: {

                    992: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1279: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1840: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }
            });
        } else if (screenWidth < 768 && myAdvSlider != undefined) {
            myAdvSlider.destroy();
            myAdvSlider = undefined;
        }
    }

    //Swiper plugin initialization
    initSwiper();

    //Swiper plugin initialization on window resize
    $(window).on('resize', function () {
        initSwiper();
    });

    var docSlider = new Swiper('.specialist-slider', {
        slidesPerView: 5,
        spaceBetween: 90,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-sp',
            prevEl: '.swiper-button-prev-sp',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
            1599: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

});


