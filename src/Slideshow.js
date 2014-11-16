 App.Slideshow = (function() {
	var that = {},

	init = function() {
		console.log("init");
        $("#slideshow").load("simple-fade-slideshow.source.html"); 
	};
        
    

	that.init = init;

	return that;
})();