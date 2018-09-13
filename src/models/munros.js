const PubSub = require('../helpers/pub_sub.js');

const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.data = null;
}

Munros.prototype.getData = function() {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Munros:munros-ready', this.data);
    })
    .then((data) => {
      const regions = this.data.map(munro => munro.region);
      const filteredRegions = regions.filter((region, index, regions) => {
        return  regions.indexOf(region) === index;
      })
      console.log(filteredRegions);
      PubSub.publish('Munros:regions-ready', filteredRegions);


    })
    .catch((message) => {
      console.error(message);
    })
}

module.exports = Munros;
