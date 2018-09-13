const PubSub = require('../helpers/pub_sub.js');

const MunrosDetailsView = function(munroListContainer, munro) {
  this.munroListContainer = munroListContainer;
  this.munro = munro;
}

MunrosDetailsView.prototype.render = function() {
  const munroDetails = document.createElement('div');
  const munroName = this.createMunroHeading();
  munroDetails.appendChild(munroName);
  this.munroListContainer.appendChild(munroDetails);
}

MunrosDetailsView.prototype.createMunroHeading = function() {
  const nameHeading = document.createElement('h1');
  nameHeading.textContent = this.munro.name;
  return nameHeading;
}


module.exports = MunrosDetailsView;
