$(document).ready(function () {
    // Functions
    function updatePos() {
        // State 1 -> 0
        if (pos == 0) {
            $(".designer").animate({
                "opacity": "0"
            }, 1000);
            $(".design-wrapper").animate({
                "top": "50%",
                "height": "1px"
            }, 1000).animate({
                "left": "100%"
            }, 1000);
            $(".header").delay(1000).animate({
                "left": "0"
            }, 1000);
        }
        //State 0 -> 1
        if (pos == 1) {
            $(".header").animate({
                "left": "-100%"
            }, 1000);
            $(".design-wrapper").animate({
                "left": "0"
            }, 1000).animate({
                "top": "0",
                "height": "100%"
            }, 1500);
            $(".designer").delay(1000).animate({
                "opacity": "1"
            }, 1000);
        }
    }

    // Introduction Animation 
    $(".content-wrapper").animate({
        'width': "100%",
        "left": "0"
    }, 1500, "swing");
    $(".content-wrapper").delay(500);
    $(".content-wrapper").animate({
        'height': "100%",
        "top": "0"
    }, 500);
    $(".content").delay(2500);
    $(".content").animate({
        "opacity": "1"
    }, 500);

    // Scrolling over a panel
    var timeout;
    $(".design_ex").hover(
        // While mouse is in area
        function(){
            var panelId = $(this).attr('data-panelid');
            timeout = setTimeout(function(){
                $('#' + panelId + "p").animate({
                    "opacity": "1"
                }, 500);
                $('#' + panelId + "img").animate({
                    "top": "30%"
                }, 750);
                $('#' + panelId + "hover").animate({
                    "opacity" : "0.5"
                }, 1000);
            }, 500);
        },
        // When mouse leaves the area
        function(){
            clearTimeout(timeout);
            var panelId = $(this).attr('data-panelid');
            $('#' + panelId + "p").animate({
                "opacity": "0"
            }, 500);
            $('#' + panelId + "img").animate({
                "top": "60%"
            }, 250);
            $('#' + panelId + "hover").animate({
                "opacity" : "0"
            }, 1000);
        }
    );

    // Scrolling
    var pos = 0;
    var last_pos = 1;
    $(window).bind('mousewheel', function (event) {
        if (event.originalEvent.wheelDelta >= 0) {
            console.log('Scroll up');
            if (pos > 0) {
                pos -= 1;
                updatePos();
            }
            console.log(pos.toString());
        } else {
            console.log('Scroll down');
            if (pos < last_pos) {
                pos += 1;
                updatePos();
            }
            console.log(pos.toString());
        }
    });
});