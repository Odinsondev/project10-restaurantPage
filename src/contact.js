//Contact tab JS

import Address from './icons/address.svg';

export default renderContact;


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
  container1Wrapper.id = 'contact-container1-wrapper';
  content.appendChild(container1Wrapper);

  const container1 = document.createElement('div');
  container1.id = 'contact-container1';
  container1Wrapper.appendChild(container1);


  const container2 = document.createElement('div');
  container2.id = 'container2';
  content.appendChild(container2);
}


function addCointainer1Content() {
  const container1 = document.getElementById('contact-container1');

  const wrapper1 = document.createElement('div');
  wrapper1.id = 'wrapper1';
  container1.appendChild(wrapper1);

  const img1 = document.createElement('img');
  img1.src = Address;
  img1.alt = "address icon";
  wrapper1.appendChild(img1);

  const wrapper2 = document.createElement('div');
  wrapper2.id = 'wrapper2';
  container1.appendChild(wrapper2);

  const p1 = document.createElement('p');
  p1.textContent = '224 Park Drive, Gotham City';
  wrapper2.appendChild(p1);

  const hr1 = document.createElement('hr');
  hr1.classList.add('contact-hr');
  container1.appendChild(hr1);


  const wrapper3 = document.createElement('div');
  wrapper3.id = 'wrapper3';
  container1.appendChild(wrapper3);

  const img2 = document.createElement('img');
  img2.id = 'hours';
  img2.src = '../src/icons/hours.svg';
  img2.alt = "hours icon";
  wrapper3.appendChild(img2);


  const wrapper4 = document.createElement('div');
  wrapper4.id = 'wrapper4';
  container1.appendChild(wrapper4);

  const wrapper41 = document.createElement('div');
  wrapper41.id = 'wrapper41';
  wrapper4.appendChild(wrapper41);

  const p2 = document.createElement('p');
  p2.textContent = 'Monday';
  wrapper41.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = '11:00am - 12:00am';
  wrapper41.appendChild(p3);


  const wrapper42 = document.createElement('div');
  wrapper42.id = 'wrapper42';
  wrapper4.appendChild(wrapper42);

  const p4 = document.createElement('p');
  p4.textContent = 'Tuesday';
  wrapper42.appendChild(p4);

  const p5 = document.createElement('p');
  p5.textContent = '11:00am - 12:00am';
  wrapper42.appendChild(p5);


  const wrapper43 = document.createElement('div');
  wrapper43.id = 'wrapper43';
  wrapper4.appendChild(wrapper43);

  const p6 = document.createElement('p');
  p6.textContent = 'Wednesday';
  wrapper43.appendChild(p6);

  const p7 = document.createElement('p');
  p7.textContent = '11:00am - 12:00am';
  wrapper43.appendChild(p7);


  const wrapper44 = document.createElement('div');
  wrapper44.id = 'wrapper44';
  wrapper4.appendChild(wrapper44);

  const p8 = document.createElement('p');
  p8.textContent = 'Thursday';
  wrapper44.appendChild(p8);

  const p9 = document.createElement('p');
  p9.textContent = '11:00am - 12:00am';
  wrapper44.appendChild(p9);


  const wrapper45 = document.createElement('div');
  wrapper45.id = 'wrapper45';
  wrapper4.appendChild(wrapper45);

  const p10 = document.createElement('p');
  p10.textContent = 'Friday';
  wrapper45.appendChild(p10);

  const p11 = document.createElement('p');
  p11.textContent = '11:00am - 1:00am';
  wrapper45.appendChild(p11);


  const wrapper46 = document.createElement('div');
  wrapper46.id = 'wrapper46';
  wrapper4.appendChild(wrapper46);

  const p12 = document.createElement('p');
  p12.textContent = 'Saturday';
  wrapper46.appendChild(p12);

  const p13 = document.createElement('p');
  p13.textContent = '11:00am - 1:00am';
  wrapper46.appendChild(p13);


  const wrapper47 = document.createElement('div');
  wrapper47.id = 'wrapper47';
  wrapper4.appendChild(wrapper47);

  const p14 = document.createElement('p');
  p14.textContent = 'Sunday';
  wrapper47.appendChild(p14);

  const p15 = document.createElement('p');
  p15.textContent = '11:00am - 12:00am';
  wrapper47.appendChild(p15);

  const hr2 = document.createElement('hr');
  hr2.classList.add('contact-hr');
  container1.appendChild(hr2);


  const wrapper5 = document.createElement('div');
  wrapper5.id = 'wrapper5';
  container1.appendChild(wrapper5);

  const img3 = document.createElement('img');
  img3.id = 'phone';
  img3.src = '../src/icons/phone.svg';
  img3.alt = "phone icon";
  wrapper5.appendChild(img3);


  /* const wrapper6 = document.createElement('div');
  wrapper6.id = 'wrapper6';
  container1.appendChild(wrapper6); */

  const p16 = document.createElement('p');
  p16.textContent = '+1 800 8135';
  wrapper5.appendChild(p16);


  const wrapper7 = document.createElement('div');
  wrapper7.id = 'wrapper7';
  container1.appendChild(wrapper7);

  const img4 = document.createElement('img');
  img4.id = 'email';
  img4.src = '../src/icons/email.svg';
  img4.alt = "email icon";
  wrapper7.appendChild(img4);


  /* const wrapper8 = document.createElement('div');
  wrapper8.id = 'wrapper8';
  container1.appendChild(wrapper8); */

  const p17 = document.createElement('p');
  p17.textContent = 'shashlik@shashlik.com';
  wrapper7.appendChild(p17);

  const hr3 = document.createElement('hr');
  hr3.classList.add('contact-hr');
  container1.appendChild(hr3);


  const wrapper9 = document.createElement('div');
  wrapper9.id = 'wrapper9';
  container1.appendChild(wrapper9);

  const img5 = document.createElement('img');
  img5.src = '../src/icons/instagram.svg';
  img5.alt = "instagram icon";
  wrapper9.appendChild(img5);

  const img6 = document.createElement('img');
  img6.src = '../src/icons/bird.svg';
  img6.alt = "bird icon";
  wrapper9.appendChild(img6);
}


function addCointainer2Content() {
  const container2 = document.getElementById('container2');

  const unsplashReference = document.createElement('p');
  unsplashReference.textContent = "Image by Unsplash";
  container2.appendChild(unsplashReference);
}


function renderContact() {
  addContentStyle();
  addContainers();
  addCointainer1Content();
  addCointainer2Content();
}