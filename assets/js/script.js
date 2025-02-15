$(document).ready(function() {
    
    /* _________________ start home page _________________ */
    // Control side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });

    // Initialize Bootstrap tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // features slider section
    $(".ft_slider1").owlCarousel({
        items: 3, 
        loop: true,
        margin: 16,
        autoplay: true,
        autoplayTimeout: 3000, 
        autoplayHoverPause: false,
        autoplaySpeed: 3000,
        smartSpeed: 3000, 
        slideTransition: 'linear', 
        dots: false,
        nav: false
    });
    $(".ft_slider2").owlCarousel({
        items: 3, 
        loop: true,
        margin: 16,
        autoplay: true,
        autoplayTimeout: 2500, 
        autoplayHoverPause: false,
        autoplaySpeed: 2500,
        smartSpeed: 2500, 
        slideTransition: 'linear', 
        dots: false,
        nav: false
    });
    

    /* _________________ end home page _________________ */
    
});