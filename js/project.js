(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;
    }

    function getSection(className) {
        return document.getElementsByClassName(className)[0];
    }

    function getLinks(section) {
        return section.getElementsByTagName("a");
    }

    function injectImages(links, desktop) {

        desktop = desktop || false;

        var i = !desktop ? 0 : 6;

        var address = desktop ? "resources/images/long_image" : "resources/images/square_image";

        for (i; i < links.length; i++){
            console.log(i);
            console.log(links);
            var img = links[i].getElementsByTagName("img")[0];
            img.src = address + (i + 1) + ".png";
        }

    }

    function loadMobileImages() {

        var mobileSection = getSection("mobile-section")

        var links = getLinks(mobileSection);

        injectImages(links);

        mobileSection.style.display = "block";

    }

    function loadDesktopImages() {

        var topLayer = document.getElementsByClassName("desktop-top-section")[0];
        var bottomLayer = document.getElementsByClassName("desktop-bottom-section")[0];

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
