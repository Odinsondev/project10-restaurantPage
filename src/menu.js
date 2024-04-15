//Menu tab JS

export default renderMenu;


//initialize
function init() {
}

//cache DOM
const content = document.getElementById('content');

//bind events

//functions
function addContentStyle() {
  content.style.backgroundColor = 'rgba(255, 255, 255, 0.250)';
}


function addContainers() {
  const container1Wrapper = document.createElement('div');
  container1Wrapper.id = 'menu-container1-wrapper';
  content.appendChild(container1Wrapper);

  const container1 = document.createElement('div');
  container1.id = 'menu-container1';
  container1Wrapper.appendChild(container1);


  const container2 = document.createElement('div');
  container2.id = 'container2';
  content.appendChild(container2);
}

function addCointainer1Content() {
  const container1 = document.getElementById('menu-container1');

  const restaurantName = document.createElement('p');
  restaurantName.id = 'menu-restaurant-name';
  restaurantName.textContent = "Shashlik"
  container1.appendChild(restaurantName);

  const menu = document.createElement('h1');
  menu.textContent = "MENU"
  container1.appendChild(menu);

  const hr1 = document.createElement('hr');
  container1.appendChild(hr1);


  const lambHeading = document.createElement('h2');
  lambHeading.textContent = "Lamb Shashlik"
  container1.appendChild(lambHeading);

  const lambDescription = document.createElement('p');
  lambDescription.textContent = "Lamb, fresh vegetables, sauce"
  container1.appendChild(lambDescription);

  const lambPrice = document.createElement('p');
  lambPrice.textContent = "22.40"
  container1.appendChild(lambPrice);

  const hr2 = document.createElement('hr');
  container1.appendChild(hr2);


  const porkHeading = document.createElement('h2');
  porkHeading.textContent = "Pork Shashlik"
  container1.appendChild(porkHeading);

  const porkDescription = document.createElement('p');
  porkDescription.textContent = "Pork, fresh vegetables, sauce"
  container1.appendChild(porkDescription);

  const porkPrice = document.createElement('p');
  porkPrice.textContent = "10.40"
  container1.appendChild(porkPrice);

  const hr3 = document.createElement('hr');
  container1.appendChild(hr3);


  const chickenHeading = document.createElement('h2');
  chickenHeading.textContent = "Chicken Shashlik"
  container1.appendChild(chickenHeading);

  const chickenDescription = document.createElement('p');
  chickenDescription.textContent = "Chicken, fresh vegetables, sauce"
  container1.appendChild(chickenDescription);

  const chickenPrice = document.createElement('p');
  chickenPrice.textContent = "10.40"
  container1.appendChild(chickenPrice);
}

function addCointainer2Content() {
  const container2 = document.getElementById('container2');

  const unsplashReference = document.createElement('p');
  unsplashReference.textContent = "Image by Unsplash";
  container2.appendChild(unsplashReference);
}

function renderMenu() {
  addContentStyle();
  addContainers();
  addCointainer1Content();
  addCointainer2Content();
}