 App.Backend = (function() {
	var that = {},
	$loginBtn = null,
	$username = null,
	$password = null,
	loginOlli = null,
	loginJonas = null,
	passwordOlli = "ollus",
	usernameOlli = "Olli",
	passwordJonas = "jonobear",
	usernameJonas = "Jonas",
	loginData = null,

	init = function() {
        $loginBtn = $("#loginButton");
        $loginBtn.on("click", openBackend);
        $username = $("#nutzername");
        $password = $("#passwort");
        loginOlli = [usernameOlli, passwordOlli];
        loginJonas = [usernameJonas, passwordJonas];
        loginData = [loginOlli, loginJonas];

        return that;
	};
        
    openBackend = function(event){
    	for (var i = 0; i < loginData.length; i++) {
    		if($username.val() === loginData[i][0] && $password.val() === loginData[i][1]){
    			$("#loginParams").hide("slow");
    			break;
    		}
    	};
    	$username.attr("placeholder", "Bitte erneut versuchen!").val("").focus().blur();
    	$password.attr("placeholder", "Bitte erneut versuchen!").val("").focus().blur();
    };


	that.init = init;

	return that;
})();