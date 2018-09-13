const PubSub = require('../helpers/pub_sub.js');
const MunrosDetailsView = require('./munros_details_view.js');

const MunrosListView = function(container) {

  this.container = container;
  this.munros = [];
}

MunrosListView.prototype.bindEvents = function() {
  PubSub.subscribe('Munros:munros-names-ready', (event) => {
    this.munros = event.detail;
    console.log(this.munros);
    this.render();
  })
}

MunrosListView.prototype.render = function() {
  this.munros.forEach((munro) => {
    console.log(munro);
    const munrosDetailsView = new MunrosDetailsView(this.container, munro);
    munrosDetailsView.render();
  })
}

module.exports = MunrosListView;
