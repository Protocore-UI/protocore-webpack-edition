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

// let BaseView = (el = 'body', template = '<div></div>') => {
//     this.el = el;
//     this.template = template;
// };
//
// BaseView.prototype.initialize = () => {
//     console.log("LOG: Initialize Baseview");
//
//     this.render();
// };
//
// BaseView.prototype.render = () => {
//     console.log("LOG: Executed Baseview Render");
//
//     if (this.beforeRender) {
//         this.beforeRender();
//     }
//
//     if (this.template && this.el) {
//         $(this.el).html(this.template);
//
//         if (this.afterRender) {
//             this.afterRender();
//         }
//
//         if (this.eventsHash) {
//             this.eventsHash();
//         }
//     }
// };

// module.exports = BaseView;
