$(document).ready(function(){


    $(".home-carosel-container").slick({
        slidesToShow: 3,
        slidesToScroll :1,
        infinite :true,
        autoplay :true,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: true,
        dots: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    })


    $(".features-carosel").slick({
        slidesToShow: 2,
        slidesToScroll :1,
        infinite :true,
        autoplay :true,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: true,
        dots: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    })

    
})