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
        autoplayTimeout: 3000, 
        autoplayHoverPause: false,
        autoplaySpeed: 3000,
        smartSpeed: 3000, 
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
        autoplayTimeout: 2500, 
        autoplayHoverPause: false,
        autoplaySpeed: 2500,
        smartSpeed: 2500, 
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

// $(window).on("load", function() {
//     $(".header_logo").addClass("loaded");
// });

$(window).on("load",function(){
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
                        start:"top 60%",
                        end:isDesktop?"bottom 95%":"bottom 50%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        markers:true
                    }
                });
                hero_imgTl
                .fromTo(".hero_img1",{yPercent:25,scale:2,rotateX:30},{yPercent:0,scale:1,rotateX:0})
                .fromTo(".hero_img2",{xPercent:-300},{xPercent:0})
                .fromTo(".hero_logo1,.hero_logo2",{xPercent:200,rotate:180},{xPercent:0,rotate:0},"<")
                .fromTo(".hero_playBtn",{opacity:0},{opacity:1},"<")
            }

            // ........ about section 
            if($(".about_content").length>0){
                let about_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".about_content",
                        start:"top 80%",
                        end:"bottom 80%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                about_tl
                .fromTo(".about_title",{xPercent:50,opacity:0},{xPercent:0,opacity:1})
                .fromTo(".about_desc",{xPercent:-50,opacity:0},{xPercent:0,opacity:1})
                .fromTo(".about_silderBox",{opacity:0},{opacity:1});
            }

            // ........ our services section 
            if($(".servicesSec_content_1").length>0){
                let services_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".servicesSec_content_1",
                        start:"top bottom",
                        end:"bottom 60%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                services_tl
                .fromTo(".servicesSec_content_1",{filter:isMobile?"blur(0px)":"blur(5px)"},{filter:"blur(0px)"})
                .fromTo(".servicesSec_bg",{scale:1.3},{scale:1},0)
                .fromTo(".service_item_1",{yPercent:isMobile?0:-30},{yPercent:0},0)
                .fromTo(".service_item_3",{yPercent:isMobile?0:30},{yPercent:0},0);
            }

            // ........ portfolio / project section 
            if($(".portfolio_sec_1 .portfolioSec_content").length>0){
                let portfolio_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".portfolio_sec_1 .portfolioSec_content",
                        start:"top bottom",
                        end:"bottom 80%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                portfolio_tl
                .fromTo(".portfolioSec_title",{xPercent:isMobile?-100:0},{xPercent:0})
                .fromTo(".project_list_lgDevice .project_slider",{rotation:25},{rotation:0},0)
                .fromTo(".project_list_smDevice .project_slider",{xPercent:100},{xPercent:0},0)
            }

            // ........ faq section 
            if($(".faqSec_content").length>0){
                let faq_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".faqSec_content",
                        start:"top bottom",
                        end:"bottom 90%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                faq_tl
                .fromTo(".faqSec_title",{scale:1.3},{scale:1,ease:"power3"})
                .fromTo(".faqSec_bgImg",{yPercent:400,rotation:0},{yPercent:0,rotation:-15},0)
                .fromTo(".faq_secBg",{left:"0vw",top:"0vh",rotation:0},{left:"120vw",top:"50vh",rotation:15},0);
            }

            // ........ contact info section 
            if($(".contactInfo_sec").length>0){
                let contactInfo_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".contactInfo_sec",
                        start:isDesktop?"top center":"top 70%",
                        end:isDesktop?"bottom bottom":"bottom bottom",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                contactInfo_tl
                .fromTo(".contactInfoSec_title",{filter:"blur(1px)"},{filter:"blur(0px)"})
                .fromTo(".contactInfo_rocket",{yPercent:0},{yPercent:-120},0)
                .fromTo(".contactInfoSec_bgImg",{backgroundSize:"100%"},{backgroundSize:"120%"},0)
                .fromTo(".contactInfoSec_desc,.social_links,.social_actBtn_wrapper",{yPercent:100,opacity:0},{stagger:0.2,yPercent:0,opacity:1},0)
            }

            /* _____________________ end home page _____________________ */

            /* _____________________ start project details page _____________________ */
            
            // ........ intro timeline
            if($(".project_introSec").length>0){
                let introTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".project_introSec",
                        start:"top top",
                        end:"bottom bottom",
                        scrub:true,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                introTl.fromTo(".bg__rock",{left:"0vw",top:"0vh",rotation:0},{left:"50vw",top:"50vh",rotation:25});
            }

            // ........ intro timeline
            if($(".project_timelineSec").length>0){
                let projectTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".project_timelineSec",
                        start:"top bottom",
                        end:"bottom bottom",
                        scrub:true,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                projectTl.fromTo(".bg__rock",{left:"50vw",top:"50vh",rotation:25},{left:"100vw",top:"100vh",rotation:50});
            

                let projectTl2=gsap.timeline({
                    scrollTrigger:{
                        trigger:".project_timeline",
                        start:"top 80%",
                        end:"bottom 80%",
                        scrub:true,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                projectTl2
                    .fromTo(".timelineSec_title",{xPercent:-20},{xPercent:0})
                    .fromTo(".timelineSec_date",{xPercent:20},{xPercent:0},0)
                    .fromTo(".timeline_indicator",{rotation:45},{rotation:0},0)
                    .fromTo(".timeline_research, .timeline_development",{rotation:15,xPercent:-10},{rotation:0,xPercent:0},0)
                    .fromTo(".timeline_ux_design, .timeline_review_test",{rotation:-10,xPercent:10},{rotation:0,xPercent:0},0)
            }

            // ........ gallery section
            if($(".project_gallerySec").length>0){
                let galleryTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".project_gallerySec",
                        start:"top bottom",
                        end:"bottom bottom",
                        scrub:true,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                galleryTl
                    .fromTo(".bg__rock",{left:"100vw",top:"100vh",rotation:50},{left:"0vw",top:"100vh",rotation:0})
                    .fromTo(".gallerySec_title",{scale:1.5,yPercent:20},{scale:1,yPercent:0},0);
            }

            /* _____________________ end project details page _____________________ */

            /* _____________________ start service details page _____________________ */
            
            // ........ what we offer section 
            if($(".servicesSec_content_2").length>0){
                let services_tl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".servicesSec_content_2",
                        start:"top bottom",
                        end:"bottom 60%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                services_tl
                .fromTo(".servicesSec_content_2",{filter:isMobile?"blur(0px)":"blur(5px)"},{filter:"blur(0px)"})
                .fromTo(".services_sec_2",{backgroundSize:(isLgTablet || isDesktop)?"127.29%":"cover"},{backgroundSize:(isLgTablet || isDesktop)?"100%":"cover"},0)
                .fromTo(".servicesSec_title",{xPercent:-25},{xPercent:0},0)
                .fromTo(".serviceSec_img",{yPercent:-50},{yPercent:0},0)
                .fromTo(".servicesSec_bg",{scale:1.3},{scale:1},0)
                .fromTo(".service_item_1",{yPercent:isMobile?0:-30},{yPercent:0},0)
                .fromTo(".service_item_3",{yPercent:isMobile?0:30},{yPercent:0},0);
            }

            // ........ how we work section
            if($(".hww_sec").length>0){
                let hww_secTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".hww_sec",
                        start:isMobile?"top center":"top 80%",
                        end:"bottom bottom",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                hww_secTl
                .fromTo(".hwwSec_title img",{xPercent:-120},{xPercent:0})
                .fromTo(".hwwSec_titleText",{xPercent:120},{xPercent:0},0)
                .fromTo(".hwwSec_slider",{xPercent:-120,rotation:isMobile?20:0,rotationY:isMobile?20:0},{xPercent:0,rotation:0,rotationY:0},0)
                .fromTo(".hww_sec_bg",{right:"0%",top:"0%",rotation:0},{right:"115%",top:"25%",rotation:-35});
            }

            // ........ tech we use section
            if($(".twu_sec").length>0){
                let twu_secTl=gsap.timeline({
                    scrollTrigger:{
                        trigger:".twu_sec",
                        start:"top 80%",
                        end:"bottom 50%",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                    }
                });
                twu_secTl
                .fromTo(".twu_sec_title",{yPercent:100},{yPercent:0})
                .fromTo(".twu_box",{rotation:isMobile?-90:90,xPercent:60,scale:0.5},{rotation:0,xPercent:0,scale:1},0)
                .fromTo(".twu_item",{rotation:-90},{rotation:0},0)
                .fromTo(".hwu_sec_bg",{left:"0%",top:"0%"},{left:"130%",top:"100%"});
            }

            // ........ portfolio / project section 
            if($(".portfolio_sec_2 .portfolioSec_content").length>0){
                let portfolio_tl2=gsap.timeline({
                    scrollTrigger:{
                        trigger: ".portfolio_sec_2 .portfolioSec_content",
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub:0.5,
                        invalidateOnRefresh: true,
                        // markers:true
                        
                    }
                });
                portfolio_tl2
                .fromTo(".portfolioSec_title",{xPercent:isMobile?-100:0,scale:isMobile?0:1.2},{xPercent:0,scale:1})
                .fromTo(".project_list_lgDevice .project_slider",{xPercent:-50},{xPercent:0},0)
                .fromTo(".project_list_smDevice .project_slider",{xPercent:100},{xPercent:0},0);
            }

            /* _____________________ end service details page _____________________ */
        }
    );

    ScrollTrigger.refresh();
    
})