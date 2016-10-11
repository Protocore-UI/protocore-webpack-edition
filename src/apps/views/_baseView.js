import $ from "jquery";

class BaseView {
  constructor(params) {
    console.log('LOG: Initialize BaseView');

    this.el = params.el || 'body';
    this.template = params.template || '<div></div>';
    this.render();
  }

  render() {
    console.log("LOG: Executed Baseview Render");

    if (this.beforeRender) {
      this.beforeRender();
    }

    if (this.template && this.el) {
        $(this.el).html(this.template);

        if (this.afterRender) {
            this.afterRender();
        }

        if (this.eventsHash) {
            this.eventsHash();
        }
    }
  }
};

module.exports = BaseView;
