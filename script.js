function displayMenu() {
  const container = document.getElementById('popup');
  const menuWrapper = document.createElement('ul');
  const CloseLi = document.createElement('li');
  const HomeLi = document.createElement('li');
  const AboutLi = document.createElement('li');
  const btnClose = document.createElement('button');
  const btnHome = document.createElement('a');
  const btnAbout = document.createElement('a');

  container.setAttribute('class', 'popup-menu');
  menuWrapper.setAttribute('class', 'popup-items');
  CloseLi.setAttribute('class', 'popup-item');
  HomeLi.setAttribute('class', 'popup-item');
  AboutLi.setAttribute('class', 'popup-item');
  btnClose.setAttribute('onclick', 'closeMenu()');
  btnHome.setAttribute('href', 'index.html');
  btnAbout.setAttribute('href', 'about.html');
  btnClose.innerText = 'X';
  btnHome.innerText = 'home';
  btnAbout.innerText = 'about';

  CloseLi.appendChild(btnClose);
  HomeLi.appendChild(btnHome);
  AboutLi.appendChild(btnAbout);
  menuWrapper.appendChild(CloseLi);
  menuWrapper.appendChild(HomeLi);
  menuWrapper.appendChild(AboutLi);
  container.appendChild(menuWrapper);
}

function closeMenu() {
  const container = document.getElementById('popup');
  container.innerHTML = '';
  container.classList.toggle('display');
}

const objArray = [
  myObj1 = {
    id: 0,
    name: 'juan perez',
    proffesion: 'enterpeneur',
    testimonial: 'this software has change my life and business.',
  },
  myObj2 = {
    id: 1,
    name: 'jose perez',
    proffesion: 'enterpeneur',
    testimonial: 'i am very grateful for this software, it saves me a lot of time.',
  },
  myObj3 = {
    id: 2,
    name: 'juan martinez',
    proffesion: 'busineesman',
    testimonial: 'i can check all the payments of my clients so easy now.',
  },
  myObj4 = {
    id: 3,
    name: 'pedro montilla',
    proffesion: 'enterpeneur',
    testimonial: 'this has been a life changer for me. shoot out to the developing team.',
  },
  myObj5 = {
    id: 4,
    name: 'francisco diaz',
    proffesion: 'enterpeneur',
    testimonial: 'the value that this software has given to my business and personal life its unbelievable.',
  },
  myObj6 = {
    id: 5,
    name: 'manuel feliz',
    proffesion: 'businessman',
    testimonial: 'i has quicker answers when i need to know anything about my clients.',
  },
];

function testimonialTemplate(id) {
  const htmlContainer = document.getElementById('testimonial-section');
  const container = document.createElement('li');
  const containerImg = document.createElement('div');
  const underImg = document.createElement('span');
  const img = document.createElement('img');
  const containerInfo = document.createElement('div');
  const name = document.createElement('p');
  const proffesion = document.createElement('p');
  const definition = document.createElement('p');
  //
  container.classList.add('testimonial-item');
  containerImg.classList.add('testimonial-img');
  underImg.classList.add('under-img');
  containerInfo.classList.add('testimonial-info');
  name.classList.add('name');
  proffesion.classList.add('profession');
  definition.classList.add('definition');
  img.setAttribute('src', 'images/user-icon.png');
  img.setAttribute('alt', 'user-testimonial-image');
  //
  name.innerText = objArray[id].name;
  proffesion.innerText = objArray[id].proffesion;
  definition.innerText = objArray[id].testimonial;
  //
  containerImg.appendChild(underImg);
  containerImg.appendChild(img);

  containerInfo.appendChild(name);
  containerInfo.appendChild(proffesion);
  containerInfo.appendChild(definition);

  container.appendChild(containerImg);
  container.appendChild(containerInfo);

  htmlContainer.appendChild(container);
}

function smallResolution() {
  let number = 0;

  while (number < 2) {
    testimonialTemplate(number);
    number++;
  }
}
function showAllTestimonials() {
  const container = document.getElementsByClassName('testimonials-wrapper');
  const buttonText = document.getElementById('btn-text');
  const arrow = document.getElementById('arrow');
  const height = container[0].offsetHeight;

  if (height < 840) {
    container[0].innerHTML = '';
    container[0].style.height = '840px';
    objArray.forEach((item) => {
      testimonialTemplate(item.id);
    });
    buttonText.innerText = 'less';
    arrow.innerText = '';
    arrow.innerHTML = '&#710;';
  } else {
    container[0].innerHTML = '';
    container[0].style.height = '275px';
    smallResolution();
    buttonText.innerText = 'more';
    arrow.innerText = '';
    arrow.innerHTML = '&#711;';
  }
}

window.onload = function () {
  if (screen.width > 1000) {
    objArray.forEach((item) => {
      testimonialTemplate(item.id);
    });
  } else {
    smallResolution();
  }
};
