import './normalize.css';
import './style.css';
import './home.css';
import './menu.css';

import renderHome from './home';
import renderMenu from './menu';


//initialize
function init() {
  renderHome();
}
init();

//cache DOM
const content = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');

//bind events
homeButton.addEventListener('click', deleteContent);
homeButton.addEventListener('click', removeContentStyle);
homeButton.addEventListener('click', renderHome);

menuButton.addEventListener('click', deleteContent);
menuButton.addEventListener('click', renderMenu);

//functions
function deleteContent() {
  content.innerHTML = '';
}

function removeContentStyle() {
  content.style.backgroundColor = '';
}