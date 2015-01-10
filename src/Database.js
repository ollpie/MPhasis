 App.Database = (function() {
	var that = {},
	db = null,
	name = "contentdb",
	version = "1.0",
	description = "Database for all kinds of stuff",
	size = 20000,

	init = function() {
        initDB();

        return that;
	};
        
    initDB = function() {
    	try{
    		if(window.openDatabase) {
                db = openDatabase(name, version, description, size);
    			if(db) {
					db.transaction(function (tx) {  
   					tx.executeSql('CREATE TABLE IF NOT EXISTS newsfeed (id INTEGER UNIQUE, news TEXT)');
					});
    			}else{
    				console.log("Öffnen der Datenbank fehlgeschlagen");
    			}
    		}else{
    			console.log("Web SQL wird nicht unterstützt");
            }
    	}catch (e) {
            console.log("Fehler beim initialisieren der Datenbank");
        }

    },

    addNewsfeed = function(content) {
        db.transaction(function (tx) {  
            console.log("database: " + content);
            var id = 2;
            tx.executeSql('INSERT INTO newsfeed(id,news) VALUES(?, ?)', [3, content]);
        });
    };

	that.init = init;
    that.addNewsfeed = addNewsfeed;

	return that;
})();