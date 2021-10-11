$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar scroll
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel
    $('#owl-bph').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    $('#owl-pendidikan').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    $('#owl-kesmas').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    $('#owl-kwu').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    $('#owl-lh').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })

    $('#owl-kominfo').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                dots:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
});