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
      PubSub.publish('Munros:munros-names-ready', this.data);
    })
    .catch((message) => {
      console.error(message);
    })
}

module.exports = Munros;
