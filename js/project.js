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

    if (isMobile()) {
        loadMobileImages();
    }

}());
