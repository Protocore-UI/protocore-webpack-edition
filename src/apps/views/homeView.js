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
