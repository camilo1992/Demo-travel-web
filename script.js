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
