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
  const munroUl = this.createMunroUl();
  this.munroListContainer.appendChild(munroUl);
}

MunrosDetailsView.prototype.createMunroHeading = function() {
  const nameHeading = document.createElement('h1');
  nameHeading.textContent = this.munro.name;
  return nameHeading;
}

MunrosDetailsView.prototype.createMunroUl = function() {
  const munroDetailsUl = document.createElement('ul');
  this.populateUl(munroDetailsUl);
  return munroDetailsUl;
}

MunrosDetailsView.prototype.populateUl = function(ul) {
  const heightLi = document.createElement('li');
  heightLi.textContent = this.munro.height;
  const meaningLi = document.createElement('li');
  meaningLi.textContent = this.munro.meaning;
  ul.appendChild(heightLi);
  ul.appendChild(meaningLi);
}

module.exports = MunrosDetailsView;
