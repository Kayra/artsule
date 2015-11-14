(function() {

    function isMobile() {

        var mobileBreakpoint = 768;

        return screen.width < mobileBreakpoint ? true : false;

    }

    if (isMobile()) {
        console.log('hit');
    }
    console.log(screen.width);

}());
