// import HomeTemplate from '../templates/homeTpl.handlebars';
import BaseView from './_baseView';

class HomeView extends BaseView {
  constructor(params) {
    super(params);
    console.log('LOG: Initialize HomeView');
  }

  beforeRender() {
    console.log("LOG: HomeView Before Render");
  }

  afterRender() {
    console.log("LOG: HomeView After Render");
  }

  eventsHash() {
    console.log("LOG: HomeView Events Hash");
  }
};

module.exports = HomeView;

//
// let HomeView = () => {
//     // @params: el (DOM Reference), template
//     BaseView.call(this, 'body', HomeTemplate);
// };
//
// HomeView.prototype = new BaseView();
//
// HomeView.prototype.beforeRender = () => {
//     console.log("LOG: HomeView Before Render");
// };
//
// HomeView.prototype.afterRender = () => {
//     console.log("LOG: HomeView After Render");
// };
//
// HomeView.prototype.eventsHash = () => {
//     console.log("LOG: HomeView Events Hash");
// };
//
// module.exports = HomeView;
