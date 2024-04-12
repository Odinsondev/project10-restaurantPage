//Menu tab

export default renderMenu;


//initialize
function init() {
}

//cache DOM
const content = document.getElementById('content');

//bind events

//functions
function addContainers() {
  const container1 = document.createElement('div');
  container1.id = 'container1';
  content.appendChild(container1);

  const container2 = document.createElement('div');
  container2.id = 'container2';
  content.appendChild(container2);
}

function addCointainer1Content() {
  const container1 = document.getElementById('container1');

  const restaurantName = document.createElement('p');
  restaurantName.id = 'restaurantName';
  restaurantName.textContent = "Shashlik"
  container1.appendChild(restaurantName);

  const sloganContainer = document.createElement('div');
  sloganContainer.id = 'slogan-container';
  container1.appendChild(sloganContainer);

  //in sloganContainer
  const slogan = document.createElement('p');
  slogan.id = 'slogan';
  slogan.textContent = "Food of the Gods";
  sloganContainer.appendChild(slogan);
}

/* function addCointainer2Content() {
  const container2 = document.getElementById('container2');

  const unsplashReference = document.createElement('p');
  unsplashReference.textContent = "Image by Unsplash";
  container2.appendChild(unsplashReference);
} */

function renderMenu() {
  addContainers();
  addCointainer1Content();
/*   addCointainer2Content();
 */}