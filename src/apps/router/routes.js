import signals from "signals";
import hasher from "hasher";
import crossroads from "crossroads";

let router = crossroads.create();

let parseHash = (newHash) => {
	router.parse(newHash);
};

router.addRoute('', () => {
	console.log("Home View");

	var HomeView = require('../views/homeView');
	var homeView = new HomeView();
	homeView.initialize();
});

router.addRoute('/about', () => {
	console.log("About Us View");

	var AboutView = require('../views/aboutView');
	var aboutView = new AboutView();
	aboutView.initialize();
});

hasher.initialized.add(parseHash);
hasher.changed.add(parseHash);
hasher.init();
