(function() {

    function isMobile() {

        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;

    }

    function loadMobileImages() {

        var mobileLayer = document.getElementsByClassName("mobile-layer")[0];

        var links = mobileLayer.getElementsByTagName("a");

        for (var i = 0; i < links.length; i++){
            var img = links[i].getElementsByTagName("img")[0];
            img.src = "resources/images/square_image" + (i + 1) + ".png";
        }

        mobileLayer.style.display = "block";

    }

    function loadDesktopImages() {

        var topLayer = document.getElementsByClassName("desktop-top-layer")[0];
        var bottomLayer = document.getElementsByClassName("desktop-bottom-layer")[0];

        var topLinks = topLayer.getElementsByTagName("a");
        var bottomLinks = bottomLayer.getElementsByTagName("a");

        for (var i = 0; i < topLinks.length; i++){
            var img = topLinks[i].getElementsByTagName("img")[0];
            img.src = "resources/images/long_image" + (i + 1) + ".png";
        }

        for (var i = 0; i < bottomLinks.length; i++){
            var img = bottomLinks[i].getElementsByTagName("img")[0];
            img.src = "resources/images/long_image" + (i + 6) + ".png";
        }

        topLayer.style.display = "block"
        bottomLayer.style.display = "block"
    }

    if (isMobile()) {
        loadMobileImages();
    } else {
        loadDesktopImages();
    }

}());
