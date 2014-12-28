App.ViewController = (function() {
	var that = {},
    mainModel = null,
    mainView = null,
    backend = null,
    database = null,

	init = function() {
        backend = App.Backend.init();
        mainModel = App.MainModel.init();
        mainView = App.MainView.init();
        database = App.Database.init();
        $(backend).on("safeToDB", onSafeToDB);
        
        return that;
	},

    onSafeToDB = function(event, content) {
        console.log("ViewController: " + content);
        database.addNewsfeed(content);
    }

    onFireStartTriggers = function (event) {
        mainView.setSlideshow;
        mainView.hideDescription;
    };
    
	that.init = init;

	return that;
})();