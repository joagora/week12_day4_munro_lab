const Munros = require('./models/munros.js');
const MunrosListView = require('./views/munros_list_view.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const munros = new Munros();
  munros.getData();

  const munrosContainer = document.querySelector('#munros-content');
  const munrosListView = new MunrosListView(munrosContainer);
  munrosListView.bindEvents();
})
