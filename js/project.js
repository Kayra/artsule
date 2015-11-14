(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;
    }

    function isBottomLayer(sectionName) {
        return sectionName.indexOf("bottom") > -1
    }

    function getSection(className) {
        return document.getElementsByClassName(className)[0];
    }

    function getLinks(section) {
        return section.getElementsByTagName("a");
    }

    function injectImages(links, desktop, bottomLayer) {

        desktop = desktop || false;

        bottomLayer = bottomLayer || false;

        var offset = !bottomLayer ? 1 : 5;

        var address = desktop ? "resources/images/long_image" : "resources/images/square_image";

        for (var i = 0; i < links.length; i++){
            var img = links[i].getElementsByTagName("img")[0];
            img.src = address + (i + offset) + ".png";
        }

    }

    function loadMobileImages() {

        var mobileSection = getSection("mobile-section")

        var links = getLinks(mobileSection);

        injectImages(links);

        mobileSection.style.display = "block";

    }

    function loadDesktopImages() {

        var sections = ["desktop-top-section", "desktop-bottom-section"];

        for (var i = 0; i < sections.length; i++) {

            var section = getSection(sections[i]);

            var links = getLinks(section);

            isBottomLayer(section.className) ? injectImages(links, true, true) : injectImages(links, true);

            section.style.display = "block";

        }

    }

    if (isMobile()) {
        loadMobileImages();
    } else {
        loadDesktopImages();
    }

}());
