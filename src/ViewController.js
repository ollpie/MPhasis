App.ViewController = (function() {
	var that = {},
    mainModel = null,
    mainView = null,
    backend = null,

	init = function() {
        backend = App.Backend.init();
        mainModel = App.MainModel.init();
        mainView = App.MainView.init();
        
        return that;
	},

    onFireStartTriggers = function (event) {
        mainView.setSlideshow;
        mainView.hideDescription;
    };
    
	that.init = init;

	return that;
})();