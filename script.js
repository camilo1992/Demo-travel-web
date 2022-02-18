const menuBar = document.querySelector(`.menu`);
const header = document.querySelector(`header`);

// sections
const secondSec = document.querySelector(`#second-section`);
const topSec = document.querySelector(`#top-section-container`);
const sec3 = document.querySelector(`.section3`);
const sec1 = document.querySelector(`.section1`);
const callTo = document.querySelector(`call-to-action`);
const signup = document.querySelector(`signup`);
const image1 = document.querySelector(`#pro1`);

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

//  Reacting to image events-------------------------------------------------
const img1 = document.getElementById(`pro1`).firstElementChild;
const img2 = document.getElementById(`pro2`).firstElementChild;
const img3 = document.getElementById(`pro3`).firstElementChild;
const img4 = document.getElementById(`pro4`).firstElementChild;
const img5 = document.getElementById(`pro5`).firstElementChild;
const img6 = document.getElementById(`pro6`).firstElementChild;
const img7 = document.getElementById(`pro7`).firstElementChild;

const openTab1 = function () {
  window.open(
    "https://61d8794d803b610008dea258--inspiring-mirzakhani-0903bb.netlify.app/"
  );
};
const openTab2 = function () {
  window.open(
    "https://610050dcdab9e200083f6121--youthful-euler-f0d9b4.netlify.app/#5ed6604591c37cdc054bcd1f"
  );
};

const openTab3 = function () {
  window.open(
    "https://620fb70aa496573962b17b3e--upbeat-bassi-5c439a.netlify.app"
  );
};
const openTab4 = function () {
  window.open(
    "https://6111789277acf000085b0018--practical-mccarthy-be2f71.netlify.app/"
  );
};

const openTab5 = function () {
  window.open(
    "https://610d7b7d1ff82000081321b4--elastic-lichterman-761ac3.netlify.app/"
  );
};

const openTab6 = function () {
  window.open(
    "https://612043795607e800077437e2--awesome-kepler-192b24.netlify.app/"
  );
};

const openTab7 = function () {
  window.open(
    "https://620ffccd8eab8b00c9b3eb97--friendly-pasteur-a21e03.netlify.app/"
  );
};

img1.addEventListener("click", openTab1);
img2.addEventListener("click", openTab2);
img3.addEventListener("click", openTab3);
img4.addEventListener("click", openTab4);
img5.addEventListener("click", openTab5);
img6.addEventListener("click", openTab6);
img7.addEventListener("click", openTab7);
// console.log(img);

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

  // social media links
  const img8 = document.getElementById("image8");
  const img9 = document.getElementById("image9");
  const img10 = document.getElementById("image10");

  const openTab8 = function () {
    console.log("clicked");
    window.open("https://github.com/camilo1992");
  };

  const openTab9 = function () {
    console.log("clicked");
    window.open("https://www.instagram.com/camilo_1108_/");
  };

  const openTab10 = function () {
    console.log("clicked");
    window.open("https://www.facebook.com/cristian.c.gc.5");
  };

  img8.addEventListener("click", openTab8);
  img9.addEventListener("click", openTab9);
  img10.addEventListener("click", openTab10);

  const init = function () {
    createDots();
    actDotSh(0);
    changeSlide(0);
  };
  init();
};

slider();
