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

// let AboutView = () => {
//     // @params: el (DOM Reference), template
//     BaseView.call(this, 'body', AboutTemplate);
// };
//
// AboutView.prototype = new BaseView();
//
// AboutView.prototype.beforeRender = () => {
//     console.log("LOG: AboutView Before Render");
// };
//
// AboutView.prototype.afterRender = () => {
//     console.log("LOG: AboutView After Render");
// };
//
// AboutView.prototype.eventsHash = () => {
//     console.log("LOG: AboutView Events Hash");
// };
//
// module.exports = AboutView;
