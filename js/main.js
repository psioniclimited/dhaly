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

    function afterWindowResize(){
        if (screen.width <= 767) {
            $('.visom-nav-link .cool-link').click(function () {
                // console.log('click');
                $('#toggle').trigger('click');
            });
        }
    }
    $( window ).resize(function() {
        // console.log('resized');
        afterWindowResize();
    });
    if (screen.width <= 767) {
        $('.dhaly-nav-link .cool-link').click(function () {
            // console.log('click');
            $('#toggle').trigger('click');
        });
    }

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

    // var tl4 = new TimelineMax({
    //     repeat: -1,
    //     yoyo:true
    // });
    //
    // tl4.fromTo(".custom-st1", 8.4, {delay:0, scaleY:1, repeat:0, transformOrigin:"50% 0%"}, { scaleY:1, transformOrigin:"50% 0%", delay:0, ease: Sine.easeInOut, repeatDelay:0})
    //     .to(".custom-st1", 12, {scaleY:2,delay:0, x:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:0})

    var tl3 = new TimelineMax({
        repeat: -1,
        yoyo:true
    });

    tl3.fromTo(".custom-st2", 8.4, {delay:0, y:0, repeat:0, transformOrigin:"50% 50%"}, {y:110, transformOrigin:"50% 50%", delay:8.3, ease: Sine.easeInOut, repeatDelay:8.3})
        .to(".custom-st2", 3.6, {delay:0, y:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:3.5})

    var tl4 = new TimelineMax({
        repeat: -1,
        yoyo:true
    });

    tl4.fromTo(".custom-st1", 8.4, {delay:0, scaleY:1, repeat:0, transformOrigin:"50% 0%"}, { scaleY:1.5, transformOrigin:"50% 0%", delay:8.3, ease: Sine.easeInOut, repeatDelay:8.3})
        .to(".custom-st1", 3.6, {scaleY:1,delay:0, x:0, ease:Sine.easeInOut, yoyo:true, repeat:-1, repeatDelay:3.5})
});