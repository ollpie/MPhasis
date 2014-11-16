App.ViewController = (function() {
	var that = {},
    slideshow,

	init = function() {
		console.log("init");
        slideshow = App.Slideshow.init();
	};

	that.init = init;

	return that;
})();