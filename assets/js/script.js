'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
*/

const preloader = document.querySelector('[data-preloader]')


window.addEventListener("load",function(){
  preloader.classList.add("loaded");
  this.document.body.classList('loaded')
})



/**
 * add event listener on multiple element
 */
const addEventOnElements = function(ele,event,callback){
    for(let i= 0; i< ele.length; i++){
      ele[i].addEventListener(event,callback)
    }
}
// -----------------------------------------------------
//---------# NAVBAR #---------
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
  navTogglers.classList.toggle('active')
}
addEventOnElements(navTogglers,"click",toggleNavbar)
// -----------------------------------------------------


// -----------------------------------------------------
//---------# HEADER #--------

const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

const hideHeader  = () => {
  const isScrollBottom = lastScrollPosition < window.scrollY;
  
  if(isScrollBottom){
    header.classList.add('hide');
  }else{
    header.classList.remove('hide');
  };
  
  lastScrollPosition = window.scrollY;
};

window.addEventListener('scroll', () =>{
  if(window.scrollY >= 50){
    header.classList.add('active');
  
    hideHeader();
  }else{
    header.classList.remove('active');
  };
});
// ----------------------------------------------------- 
//---------# HERO SLIDER #--------
const heroSlider = document.querySelector('[data-hero-slider]'),
heroSliderItems =document.querySelectorAll("[data-hero-slider-item]"),
heroSliderPrevBTN =document.querySelector("[data-prev-btn]"),
heroSliderNextBTN =document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = _ => {
  lastActiveSliderItem.classList.remove('active');
  heroSliderItems[currentSlidePos].classList.add('active');
  lastActiveSliderItem  =  heroSliderItems[currentSlidePos];
};

const slideNext = _ => {
  if(currentSlidePos >= heroSliderItems.length -1){
    currentSlidePos = 0;
  }else{
    currentSlidePos++;
  }
  updateSliderPos();
}
heroSliderNextBTN.addEventListener("click",slideNext);
const slidePrev = _ => {
  if(currentSlidePos <= 0){
    currentSlidePos = heroSliderItems.length - 1;
  }else{
    currentSlidePos--;
  }
  updateSliderPos();
}
heroSliderPrevBTN.addEventListener("click",slidePrev);
/*- #AuTO SLIDE# -*/
let autoSliderInterval;
const autoSlide = _ => {
  autoSliderInterval = setInterval( _ => {
    slideNext();
  },6000)
}

addEventOnElements([heroSliderNextBTN,heroSliderPrevBTN],"mouseover", () => {clearInterval(autoSliderInterval)})
addEventOnElements([heroSliderNextBTN,heroSliderPrevBTN],"mouseout", autoSlide);
window.addEventListener("load",autoSlide);
// -----------------------------------------------------
//---------# ABOUT SECTION => parallax effect #--------

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});
// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------
//---------#  #--------

// -----------------------------------------------------






























// const preloader = document.querySelector("[data-preaload]");

// window.addEventListener("load", function () {
//   preloader.classList.add("loaded");
//   document.body.classList.add("loaded");
// });



// /**
//  * add event listener on multiple elements
//  */

// const addEventOnElements = function (elements, eventType, callback) {
//   for (let i = 0, len = elements.length; i < len; i++) {
//     elements[i].addEventListener(eventType, callback);
//   }
// }



// /**
//  * NAVBAR
//  */

// const navbar = document.querySelector("[data-navbar]");
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNavbar = function () {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
//   document.body.classList.toggle("nav-active");
// }

// addEventOnElements(navTogglers, "click", toggleNavbar);



// /**
//  * HEADER & BACK TOP BTN
//  */

// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// let lastScrollPos = 0;

// const hideHeader = function () {
//   const isScrollBottom = lastScrollPos < window.scrollY;
//   if (isScrollBottom) {
//     header.classList.add("hide");
//   } else {
//     header.classList.remove("hide");
//   }

//   lastScrollPos = window.scrollY;
// }

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 50) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//     hideHeader();
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// });



// /**
//  * HERO SLIDER
//  */

// const heroSlider = document.querySelector("[data-hero-slider]");
// const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
// const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
// const heroSliderNextBtn = document.querySelector("[data-next-btn]");

// let currentSlidePos = 0;
// let lastActiveSliderItem = heroSliderItems[0];

// const updateSliderPos = function () {
//   lastActiveSliderItem.classList.remove("active");
//   heroSliderItems[currentSlidePos].classList.add("active");
//   lastActiveSliderItem = heroSliderItems[currentSlidePos];
// }

// const slideNext = function () {
//   if (currentSlidePos >= heroSliderItems.length - 1) {
//     currentSlidePos = 0;
//   } else {
//     currentSlidePos++;
//   }

//   updateSliderPos();
// }

// heroSliderNextBtn.addEventListener("click", slideNext);

// const slidePrev = function () {
//   if (currentSlidePos <= 0) {
//     currentSlidePos = heroSliderItems.length - 1;
//   } else {
//     currentSlidePos--;
//   }

//   updateSliderPos();
// }

// heroSliderPrevBtn.addEventListener("click", slidePrev);

// /**
//  * auto slide
//  */

// let autoSlideInterval;

// const autoSlide = function () {
//   autoSlideInterval = setInterval(function () {
//     slideNext();
//   }, 7000);
// }

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
//   clearInterval(autoSlideInterval);
// });

// addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

// window.addEventListener("load", autoSlide);



// /**
//  * PARALLAX EFFECT
//  */

// const parallaxItems = document.querySelectorAll("[data-parallax-item]");

// let x, y;

// window.addEventListener("mousemove", function (event) {

//   x = (event.clientX / window.innerWidth * 10) - 5;
//   y = (event.clientY / window.innerHeight * 10) - 5;

//   // reverse the number eg. 20 -> -20, -5 -> 5
//   x = x - (x * 2);
//   y = y - (y * 2);

//   for (let i = 0, len = parallaxItems.length; i < len; i++) {
//     x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
//     y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
//     parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
//   }

// });