(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;
    }

    function loadMobileImages() {

        var elements = document.querySelectorAll('[mobile-src]');

        for (var i = 0; i < elements.length; i++) {
            elements[i].src = elements[i].getAttribute('mobile-src');
        }

    }

    function loadDesktopImages() {

            var elements = document.querySelectorAll('[desktop-src]');

            for (var i = 0; i < elements.length; i++) {
                elements[i].src = elements[i].getAttribute('desktop-src');
            }

    }

    if (isMobile()) {
        loadMobileImages();
    } else {
        loadDesktopImages();
    }

}());
