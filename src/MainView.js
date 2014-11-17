 App.MainView = (function() {
	var that = {},
    $description = null,
    $main = null,

	init = function() {
        $description = $("#description");
        $main = $("#main");
        $main.on("hover", onHoverSlideshow);
        
        return that;
    },
        
    hideDescription = function() {
        
    },
        
    onHoverSlideshow = function() {
        
    },
        
    setSlideshow = function(){
        $("#slideshow").load("simple-fade-slideshow.source.html"); 
    };
        
    

	that.init = init;
    that.setSlideshow = setSlideshow;
    that.hideDescription = hideDescription;

	return that;
})();