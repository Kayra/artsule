(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;
    }

    function loadImages(customAttribute) {

        var elements = document.querySelectorAll('[' + customAttribute + ']');

        for (var i = 0; i < elements.length; i++) {
            elements[i].src = elements[i].getAttribute(customAttribute);
        }

    }

    if (isMobile()) {
        loadImages('mobile-src');
    } else {
        loadImages('desktop-src');
    }

}());
