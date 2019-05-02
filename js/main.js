$(document).ready(function () {
    var chkReadyState = setInterval(function() {
        if (document.readyState == "complete") {
            // clear the interval
            clearInterval(chkReadyState);
            $('.cover-section-top-border').addClass('active');
            $('.cover-section-right-border').addClass('active');

            // finally your page is loaded.
        }
    }, 100);
    $(window).scroll(function () {
        var findStickyHeader = $( '#header' ).hasClass( 'sticky-header' );
        if(findStickyHeader) {
            $('.standard-logo img').attr('src','img/logo/dhaly.png');
            $('.retina-logo img').attr('src','img/logo/dhaly.png');
        }
        else {
            $('.standard-logo img').attr('src','img/logo/dhaly.png');
            $('.retina-logo img').attr('src','img/logo/dhaly.png');
        }
    });

    // Toggle Nav Overlay
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        if ($(this).hasClass('active')) {
            $('.hamburger-icon img').attr('src', 'img/icons/open-hamburger-icon.jpg');
        }
        else {
            $('.hamburger-icon img').attr('src', 'img/icons/hamburger-icon.jpg');
        }
    });
    //Toggle Nav Overlay Ends

    /*
    Detect Window Size
    */
    // if (screen.width <= 767) {
    //
    // }

    //Detect Window Size ends

    // Init lazy Load for Images
    // $('img.lazy').lazyload();
    // End of Lazy Load


    //Restoration Work
    // On Scroll Border Draw on products Paragraph Div
    var controller = new ScrollMagic.Controller();

    var clientScene = new ScrollMagic.Scene({
        triggerElement: '#dhaly-our-clients-section',
        duration: '100%',
        triggerHook: 0.4
    })
        .setClassToggle('.st0, .st1, .st2', 'st66')
        // .addIndicators({
        //     name: 'Shudhu Shudhu',
        //     colorTrigger: 'black',
        //     colorStart: 'green',
        //     colorEnd: 'red'
        // })
        .addTo(controller);

    var pinCoverScene = new ScrollMagic.Scene({
        triggerElement: '#dhaly-cover-section',
        triggerHook: 0,
        duration: '80%'
    })
        .setPin('#dhaly-cover-section', {pushFollowers: false})
        .addTo(controller);
});