const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {

}

Munros.prototype.getData = function() {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.handleDataReady(data);
  })
}

Munros.prototype.handleDataReady = function(munrosData) {
  const munrosNames = munrosData.map(munro => munro.name);
  console.log(munrosNames);
}

module.exports = Munros;
