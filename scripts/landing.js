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


    $(".residents-carosel").slick({
        slidesToShow: 2,
        slidesToScroll :2,
        infinite :false,
        autoplay :false,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
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



    const topIcon = document.getElementById("top-icon");

    // Show/Hide the icon
    window.addEventListener("scroll", function () {

        if (window.scrollY > 350) {
            topIcon.style.display = "block";
        } else {
            topIcon.style.display = "none";
        }

    });

    // Scroll to the top when clicked
    topIcon.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
    
})