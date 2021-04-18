// burger-menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  })
};

// slider

(function () {

  'use strict';
  const breakpoint = window.matchMedia('(min-width:1023px)');
  let mySwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {

      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      return;


    } else if (breakpoint.matches === false) {

      return enableSwiper();

    }

  };

  const enableSwiper = function () {

    mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();

})();