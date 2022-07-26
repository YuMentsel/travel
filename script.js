const nav = document.querySelector('.nav'),
  navLink = document.querySelectorAll('.nav__link'),
  hamburger = document.querySelector('.hamburger'),
  login = document.querySelector('.button_login'),
  account = document.querySelector('.account'),
  popup = document.querySelector('.popup'),
  popupOverlay = document.querySelector('.popup-overlay'),
  register = document.querySelector('.register'),
  logIn = document.querySelector('.log-in'),
  popupLogin = document.querySelector('.popup-login'),
  popupSignup = document.querySelector('.popup-signup');

// Бургер и меню

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('small');
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('small');
  });
});

document.addEventListener('click', (e) => {
  const target = e.target,
    its_nav = target == nav || nav.contains(target),
    its_hamburger = target == hamburger || hamburger.contains(target),
    nav_is_active = nav.classList.contains('small'),
    hamburger_is_active = hamburger.classList.contains('active');

  if (!its_nav && !its_hamburger && nav_is_active && hamburger_is_active) {
    hamburger.classList.toggle('active');
    nav.classList.toggle('small');
  }
});

// Popup

login.addEventListener('click', () => {
  popupOverlay.classList.toggle('active');
  popup.classList.toggle('active');
});

account.addEventListener('click', () => {
  popupOverlay.classList.toggle('active');
  popup.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const target = e.target;
  const its_popupOverlay = target == popupOverlay;
  const its_popup = target == popup;
  if (its_popupOverlay && !its_popup) {
    popupOverlay.classList.remove('active');
    if (popup.classList.contains('active')) {
      popup.classList.remove('active');
    }
  }
});

register.addEventListener('click', () => {
  popupSignup.classList.toggle('active');
  popupLogin.classList.toggle('active');
});

logIn.addEventListener('click', () => {
  popupSignup.classList.toggle('active');
  popupLogin.classList.toggle('active');
});

document.forms.signin.onsubmit = function () {
  let email = this.email.value;
  let password = this.password.value;
  alert(`E-mail: ${email} \nPassword: ${password}`);
  return false;
};

document.forms.signup.onsubmit = function () {
  let email = this.email.value;
  let password = this.password.value;
  alert(`E-mail: ${email} \nPassword: ${password}`);
  return false;
};

document.addEventListener('submit', (e) => {
  e.target.reset();
});

// Слайдер

const slides = document.querySelector('.slides'),
  spain = document.querySelector('.spain'),
  japan = document.querySelector('.japan'),
  usa = document.querySelector('.usa');
  controls = document.querySelectorAll('.control')
  left = document.querySelector('.control_left'),
  center = document.querySelector('.control_center'),
  right = document.querySelector('.control_right');

const rightSlide = () => {
  slides.style.left = -1430 + 'px';
  for (let control of controls) {
    control.classList.remove('active');
  }
  controls[2].classList.add('active');
};

const centerSlide = () => {
  slides.style.left = -570 + 'px';
  for (let control of controls) {
    control.classList.remove('active');
  }
  controls[1].classList.add('active');
};

const leftSlide = () => {
  slides.style.left = 290 + 'px';
  for (let control of controls) {
    control.classList.remove('active');
  }
  controls[0].classList.add('active');
};

spain.addEventListener('click', leftSlide);
left.addEventListener('click', leftSlide);

japan.addEventListener('click', centerSlide);
center.addEventListener('click', centerSlide);

usa.addEventListener('click', rightSlide);
right.addEventListener('click', rightSlide);

// Слайдер на адаптив

const slidesSmall = document.querySelectorAll('.slide_small'),
      prev = document.querySelector('.control-prev'),
      next = document.querySelector('.control-next');

let index = 0;

const activeSlide = s => {
  for (let slide of slidesSmall) {
    slide.classList.remove('active');
  }
  slidesSmall[s].classList.add('active');
};

const activeControl = s => {
  for (let contr of controls) {
    contr.classList.remove('active');
  }
  controls[s].classList.add('active');
};

const toggleSlide = i => {
  activeSlide(i);
  activeControl(i);
};

const nextSlide = () => {
  if (index == slidesSmall.length - 1) {
    index = 0;
    toggleSlide(index);
  } else {
    index++;
    toggleSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slidesSmall.length - 1;
    toggleSlide(index);
  } else {
    index--;
    toggleSlide(index);
  }
};

controls.forEach((item, indexControl) => {
  item.addEventListener('click', () => {
    index = indexControl;
    toggleSlide(index);
  })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


window.addEventListener('resize', () => {
  (document.documentElement.clientWidth < 1441) ? 
    toggleSlide(0) : 
    centerSlide()
}, false);


