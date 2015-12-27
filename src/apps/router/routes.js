(function() {
		'use strict';

		var signals = require("signals");
		var hasher = require("hasher");
		var crossroads = require("crossroads");

		var router = crossroads.create();

		var parseHash = function(newHash){
			router.parse(newHash);
		};

		router.addRoute('', function(){
			console.log("Home View");

			var HomeView = require('../views/homeView');
			var homeView = new HomeView();
			homeView.initialize();
		});

		router.addRoute('/about', function(){
			console.log("About Us View");

			var AboutView = require('../views/aboutView');
			var aboutView = new AboutView();
			aboutView.initialize();
		});

		hasher.initialized.add(parseHash);
		hasher.changed.add(parseHash);
		hasher.init();

})();
