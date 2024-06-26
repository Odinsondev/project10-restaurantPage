import './normalize.css';
import './style.css';
import './home.css';
import './menu.css';
import './contact.css'

import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';


//initialize
function init() {
  renderHome();
}
init();

//cache DOM
const content = document.getElementById('content');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

//bind events
homeButton.addEventListener('click', deleteContent);
homeButton.addEventListener('click', removeContentStyle);
homeButton.addEventListener('click', renderHome);

menuButton.addEventListener('click', deleteContent);
menuButton.addEventListener('click', renderMenu);

contactButton.addEventListener('click', deleteContent);
contactButton.addEventListener('click', renderContact);

//functions
function deleteContent() {
  content.innerHTML = '';
}

function removeContentStyle() {
  content.style.backgroundColor = '';
}