App.ViewController = (function() {
	var that = {},
    mainModel = null,
    mainView = null,

	init = function() {
        mainModel = App.MainModel.init();
        mainView = App.MainView.init();
        $(mainModel).on("fireStartTriggers", onfireStartTriggers)
        
        return that;
	},

    onFireStartTriggers = function (event) {
        mainView.setSlideshow;
        mainView.hideDescription;
    };
    
	that.init = init;

	return that;
})();