const PubSub = require('../helpers/pub_sub.js');

const RegionSelectView = function(select) {
  this.select = select;
}

RegionSelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Munros:regions-ready', (event) => {
    const regionList = event.detail;
    this.populateDropdown(regionList);
  })
}

RegionSelectView.prototype.populateDropdown = function(regions) {
  regions.forEach((region) => {
    const option = document.createElement('option');
    this.select.appendChild(option);
    option.textContent = region;
    option.setAttribute('value', region);
  })
}

module.exports = RegionSelectView;
