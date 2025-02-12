$(document).ready(function() {
    
    /* _________________ start home page _________________ */
    
    // Control side menu
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header").toggleClass("active_header");
    });
    // Initialize Bootstrap tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Copy to Clipboard functionality
    $(document).on('click', '.copy_clipboard', function () {
        const textToCopy = $(this).attr('data-clipboard');

        const tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(textToCopy).select();
        document.execCommand('copy');
        tempInput.remove();

        const tooltip = bootstrap.Tooltip.getInstance(this); // Get tooltip instance
        tooltip.setContent({ '.tooltip-inner': 'Copied!' }); // Update tooltip content
        tooltip.show();

        setTimeout(() => {
            tooltip.setContent({ '.tooltip-inner': 'Click to copy' });
            tooltip.hide();
        }, 2000);
    });


    /* _________________ end home page _________________ */
    
});