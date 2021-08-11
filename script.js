const menuBar = document.querySelector(`.menu`);
const header = document.querySelector(`header`);

// sections
const secondSec = document.querySelector(`#second-section`);
const topSec = document.querySelector(`#top-section-container`);
const sec3 = document.querySelector(`.section3`);
const sec1 = document.querySelector(`.section1`);
const callTo = document.querySelector(`call-to-action`);
const signup = document.querySelector(`signup`);

//  Scroll into sections smoothly ..................................

menuBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains(`menu-op`)) return;
  const sect = e.target.getAttribute("href");
  document.querySelector(`${sect}`).scrollIntoView({ behavior: "smooth" });
});

//  Implementing sticky nav .................................
const navHeight = header.getBoundingClientRect().height;

const callbackObs = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting === true) header.classList.add(`sticky`);
  else {
    header.classList.remove(`sticky`);
  }
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(callbackObs, options);
observer.observe(topSec);

//  reveal sections-------------------------------------------------

const allSections = document.querySelectorAll(`.section`);

const revealCall = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const revOp = {
  root: null,
  threshold: 0.2,
};

const secObserver = new IntersectionObserver(revealCall, revOp);
allSections.forEach((section) => {
  section.classList.add(`section--hidden`);
  secObserver.observe(section);
});

// ------------------- sider ---------------------------------
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);
  const slider = document.querySelector(`.slider`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  const dotContainer = document.querySelector(".dots");
  const maxSlides = slides.length - 1;
  let curSlide = 0;

  //  set up of dots .....
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Dot shadowing

  const actDotSh = function (slide) {
    const dots = document.querySelectorAll(`.dots__dot`);
    dots.forEach((dot) => {
      dot.classList.remove(`dots__dot--active`);
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  //  code functionality to change slides
  const changeSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  // code movement to left
  const moveLeft = function () {
    curSlide === 0 ? (curSlide = maxSlides) : curSlide--;
    changeSlide(curSlide);
    actDotSh(curSlide);
  };
  btnLeft.addEventListener(`click`, moveLeft);

  // code movement to right
  const moveRight = function () {
    curSlide === maxSlides ? (curSlide = 0) : curSlide++;
    changeSlide(curSlide);
    actDotSh(curSlide);
  };
  btnRight.addEventListener(`click`, moveRight);

  //  key movment of slides
  document.addEventListener(`keydown`, function (e) {
    e.key === `ArrowRight` && moveRight();
    e.key === `ArrowLeft` && moveLeft();
  });

  dotContainer.addEventListener(`click`, function (e) {
    if (!e.target.classList.contains(`dots__dot`)) return;
    const slide = e.target.dataset.slide;
    changeSlide(slide);
    actDotSh(slide);
  });

  const init = function () {
    createDots();
    actDotSh(0);
    changeSlide(0);
  };
  init();
};

slider();
