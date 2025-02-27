$(document).ready(function() {
    
    /* _________________ start home page _________________ */
    // Control side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });

    // popup video player
    const lightbox = GLightbox();

    // features slider section
    $(".ft_slider1").owlCarousel({
        items: 2, 
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000, 
        autoplayHoverPause: false,
        autoplaySpeed: 5000,
        smartSpeed: 5000, 
        slideTransition: 'linear', 
        dots: false,
        nav: false,
        responsive:{
            576:{
                items:2,
                margin:12
            },
            768:{
                items:3,
                margin:16
            }
        }
    });
    $(".ft_slider2").owlCarousel({
        items: 2, 
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4500, 
        autoplayHoverPause: false,
        autoplaySpeed: 4500,
        smartSpeed: 4500, 
        slideTransition: 'linear', 
        dots: false,
        nav: false,
        responsive:{
            576:{
                items:2,
                margin:12
            },
            768:{
                items:3,
                margin:16
            }
        }
    });
    

    /* _________________ end home page _________________ */
    
});

$(window).on("load",function(){
    // preloader
    $("#preloader").fadeOut(500, function() {
        $("#content").fadeIn(500);
    });
    // gsap animation
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
    mm.add(
        {
            isDesktop: `(min-width: 1200px)`,
            isLgTablet: `(min-width:992px) and (max-width: 1199.98px)`,
            isTablet: `(min-width:768px) and (max-width: 991.98px)`,
            isLgMobile: `(min-width:576px) and (max-width: 757.98px)`,
            isMobile: `(max-width: 575.98px)`,
            reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
            let { isDesktop,isLgTablet, isTablet,isLgMobile, isMobile,reduceMotion } = context.conditions;
           
            /* _____________________ start home page _____________________ */
    
            // ........ hero section 
            if($(".hero_section").length>0){
                let hero_tl=gsap.timeline({
                    duration:1
                });
                hero_tl
                .fromTo(".hero_title",{yPercent:isDesktop?90:50,scale:isDesktop?1.3:1.1},{yPercent:0,scale:1})
                .fromTo(".hero_desc",{yPercent:200,opacity:0},{yPercent:0,opacity:1})
                .fromTo(".hero_act",{yPercent:200,opacity:0},{yPercent:0,opacity:1})
            }
            if($(".hero_imgWrapper").length>0){
                let hero_imgTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".hero_imgWrapper",
                        start:"top 50%",
                        end:isDesktop?"bottom 80%":"bottom 50%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                hero_imgTl
                .fromTo(".hero_img1",{yPercent:25,scale:2,rotateX:30},{yPercent:0,scale:1,rotateX:0})
                .fromTo(".hero_img2",{xPercent:-300},{xPercent:0})
                .fromTo(".hero_logo1,.hero_logo2",{xPercent:200,rotate:180},{xPercent:0,rotate:0},"<")
                .fromTo(".hero_playBtn",{opacity:0},{opacity:1},"<")
            }

            // ........ intro section 
            if($(".intro_section").length>0){
                let intro_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".intro_section",
                        start:"top 50%",
                        end:isDesktop?"bottom 80%":"bottom 50%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                intro_tl
                .fromTo(".intro_img",{scale:isDesktop?1.25:0.75},{scale:1})
                .fromTo(".intro_content",{xPercent:20,opacity:0},{xPercent:0,opacity:1},"-=0.5")
            }

            // ........ features section 
            if($(".features_row").length>0){
                gsap.utils.toArray(".feature_card").forEach((card, index) => {
                    gsap.fromTo(card, 
                        { xPercent: 20, yPercent:20, opacity: 0, scale: 0.8 },
                        { xPercent: 0, yPercent: 0, opacity:1, scale: 1, scrollTrigger: {
                            trigger: card,
                            start: "top 70%",
                            end: "bottom 70%",
                            scrub: 0.5,
                            invalidateOnRefresh: true,
                            // markers:true
                        }}
                    );
                });
            }

            // ........ intro section 
            if($(".features_box").length>0){
                let features2_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".features_box",
                        start:"top 50%",
                        end:isDesktop?"bottom 100%":"bottom 100%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                features2_tl
                .fromTo(".box_2",{scale:0.8},{scale:1})
                .fromTo(".box_1",{xPercent:isDesktop?-25:25,opacity:0},{xPercent:0,opacity:1})
                .fromTo(".box_3",{xPercent:25,opacity:0},{xPercent:0,opacity:1},"<")
            }

            // ........ intro section 
            if($(".benefits_section").length>0){
                let benefits_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".benefits_section",
                        start:"top 50%",
                        end:isDesktop?"bottom 80%":"bottom 50%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                benefits_tl
                .fromTo(".benefits_imgBox",{scale:0.75},{scale:1})
            }
            
            /* _____________________ end home page _____________________ */

        }
    );

    ScrollTrigger.refresh();
    
})