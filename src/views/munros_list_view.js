const PubSub = require('../helpers/pub_sub.js');

const MunrosListView = function(container) {

  this.container = container;
  this.munrosNames = [];
}

MunrosListView.prototype.bindEvents = function() {
  PubSub.subscribe('Munros:munros-names-ready', (event) => {
    this.munrosNames = event.detail;
    this.render();
  })
}

MunrosListView.prototype.render = function() {
  this.munrosNames.forEach((munro) => {
    const munrosDetailsView = new MunrosListView(this.container, munro);
    munrosDetailsView.render();
  })
}

module.exports = MunrosListView;
