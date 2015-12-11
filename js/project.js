(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        console.log(window.innerWidth);
        return window.innerWidth < mobileBreakpoint;
    }

    function loadImages(customAttribute) {

        var elements = document.querySelectorAll('[' + customAttribute + ']');

        for (var i = 0; i < elements.length; i++) {
            elements[i].src = elements[i].getAttribute(customAttribute);
        }

    }

    function loadAnimation() {

        var images = document.querySelectorAll('.desktop-top-section img, .desktop-bottom-section img');

        var i = 0;
        var interval = setInterval(function() {
            images[i].classList.add('imageAnimation');
            ++i;
            if (i === images.length) {
                clearInterval(interval);
            }
        }, 100);
    }

    function loadImagesForBreakpoints() {

        if (isMobile()) {
            loadImages('mobile-src');
        } else {
            loadImages('desktop-src');
            loadAnimation();
        }

    }

    window.addEventListener('resize', function() {
        loadImagesForBreakpoints();
    })

    loadImagesForBreakpoints();

}());
