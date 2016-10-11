import BaseView from './_baseView';

class AboutView extends BaseView {
  constructor(params) {
    super(params);
    console.log('LOG: Initialize AboutView');
  }

  beforeRender() {
    console.log("LOG: AboutView Before Render");
  }

  afterRender() {
    console.log("LOG: AboutView After Render");
  }

  eventsHash() {
    console.log("LOG: AboutView Events Hash");
  }
};

module.exports = AboutView;
