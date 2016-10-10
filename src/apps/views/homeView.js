import HomeTemplate from '../templates/homeTpl.handlebars';
import BaseView from './_baseView';

var HomeView = () => {
    // @params: el (DOM Reference), template
    BaseView.call(this, 'body', HomeTemplate);
};

HomeView.prototype = new BaseView();

HomeView.prototype.beforeRender = () => {
    console.log("LOG: HomeView Before Render");
};

HomeView.prototype.afterRender = () => {
    console.log("LOG: HomeView After Render");
};

HomeView.prototype.eventsHash = () => {
    console.log("LOG: HomeView Events Hash");
};

module.exports = HomeView;
