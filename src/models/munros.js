const PubSub = require('../helpers/pub_sub.js');

const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.munrosNames = [];
}

Munros.prototype.getData = function() {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    // this.handleDataReady(data);
    PubSub.publish('Munros:munros-names-ready', data);
  })
}

// Munros.prototype.handleDataReady = function(munrosData) {
//   const munros = munrosData.map(munro => munro.name);
//   this.munrosNames = munrosNames;
// }

module.exports = Munros;
