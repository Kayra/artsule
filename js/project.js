(function() {

    function isMobile() {
        var mobileBreakpoint = 768;
        return screen.width < mobileBreakpoint ? true : false;
    }

    function isBottomLayer(path) {
        return path.indexOf("bottom") > -1
    }

    function getSection(className) {
        return document.getElementsByClassName(className)[0];
    }

    function getLinks(section) {
        return section.getElementsByTagName("a");
    }

    function getImageElement(element) {
        return element.getElementsByTagName("img")[0];
    }

    function getImageElements(section) {
        return section.getElementsByTagName("img");
    }

    function generateImages(imageElements, path) {

        var images = [];

        var offset = isBottomLayer(path) ? 5 : 1;

        for (var i = 0; i < imageElements.length; i++) {

            var image = imageElements[i];

            images.push(path + (i + offset) + ".png");

        }

        return images;

    }

    function injectImages(links, images) {

        for (var i = 0; i < links.length; i++) {
            var image = getImageElement(links[i]);
            image.src = images[i];
        }

    }

    function injectMobileImages(links, imageElements) {

        var path = "resources/images/square_image";

        var images = generateImages(imageElements, path);

        injectImages(links, images)

    }

    function injectDesktopImages(links, imageElements) {

        var path = "resources/images/long_image";

        var images = generateImages(imageElements, path);

        injectImages(links, images);

    }

    function loadMobileImages() {

        var section = getSection("mobile-section")

        var links = getLinks(section);

        var imageElements = getImageElements(section);

        injectMobileImages(links, imageElements);

        section.style.display = "block";

    }

    function loadDesktopImages() {

        var sections = ["desktop-top-section", "desktop-bottom-section"];

        for (var i = 0; i < sections.length; i++) {

            var section = getSection(sections[i]);

            var links = getLinks(section);

            var imageElements = getImageElements(section);

            injectDesktopImages(links, imageElements);

            section.style.display = "block";

        }

    }

    if (isMobile()) {
        loadMobileImages();
    } else {
        loadDesktopImages();
    }

}());
