// NAVIGATIONS
const html = document.getElementsByTagName('html')[0];
const showBtn = document.querySelector('nav .show-menu-btn');
const closedBtn = document.querySelector('nav .closed-menu-btn');
const navMenu = document.querySelector('nav .nav_menu');
const navLinks = document.querySelectorAll('nav .nav_menu li');

function showMenu() {
  navMenu.classList.add('open');
  navMenu.classList.remove('hide');
  setTimeout(() => {
    closedBtn.style.display = 'block';
  }, 1000);
  html.style.overflow = 'hidden';
}

function closeMenu() {
  navMenu.classList.remove('open');
  navMenu.classList.add('hide');
  setTimeout(() => {
    closedBtn.style.display = 'none';
  }, 500);
  html.style.overflow = 'auto';
}

function directMenu() {
  navMenu.classList.remove('open');
  closedBtn.style.display = 'none';
  html.style.overflow = 'auto';
}

navLinks.forEach((link) => {
  link.addEventListener('click', directMenu);
});

showBtn.addEventListener('click', showMenu);
closedBtn.addEventListener('click', closeMenu);

// background header scroll

const nav = document.querySelector('header .menu');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    nav.classList.add('backg');
  } else {
    nav.classList.remove('backg');
  }
});
// END OF NAVIGATIONS

// TEAM DATA
const data = [
  {
    id: 1,
    name: 'Albert Noah',
    images: {
      img: './images/member1.png',
      alt: 'team_1',
    },
    about: 'Ceremony Organizer.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 2,
    name: 'Albert Noah',
    images: {
      img: './images/member2.png',
      alt: 'team_2',
    },
    about: 'Organizer.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 3,
    name: 'Albert Noah',
    images: {
      img: './images/member3.png',
      alt: 'team_3',
    },
    about: 'Organizer.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 4,
    name: 'Albert Noah',
    images: {
      img: './images/member4.png',
      alt: 'team_4',
    },
    about: 'Organizer',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 5,
    name: 'Albert Noah',
    images: {
      img: './images/member3.png',
      alt: 'team_3',
    },
    about: 'Guest.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 6,
    name: 'SohYeong Noh',
    images: {
      img: './images/member6.png',
      alt: 'team_6',
    },
    about: 'Guest.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
];

const teamContainer = document.querySelector('#Team .teams');

function createCard(dataInfo) {
  const li = document.createElement('li');
  li.className = 'card d-flex';
  li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
  return li;
}

data.forEach((info) => {
  const card = createCard(info);
  teamContainer.appendChild(card);
});
// END OF TEAM DATA
