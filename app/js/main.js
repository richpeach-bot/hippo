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


// sliders

// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   slidesPerView: 2,
//   spaceBetween: 30,
//   // autoplay: {
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });


(function () {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:1023px)');
  let mySwiper;

  const breakpointChecker = function () {

    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {

      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);

      // or/and do nothing
      return;

      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {

      // fire small viewport version of swiper
      return enableSwiper();

    }

  };

  const enableSwiper = function () {

    mySwiper = new Swiper('.swiper-container', {
      loop: true,
      // slidesPerView: 3,
      loop: true,
      // spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


      breakpoints: {
        // when window width is >= 320px
        320: {
          // centeredSlides: true,
          slidesPerView: 1,
        },
        // when window width is >= 640px
        // 1330: {
        //   slidesPerView: 2,
        //   spaceBetween: 20
        // },
      }
    });

  };

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})();