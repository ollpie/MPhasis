 App.MainModel = (function() {
	var that = {},

	init = function() {
        $(that).trigger("fireStartTriggers", []);
	};
        
    

	that.init = init;

	return that;
})();