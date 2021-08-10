const menuBar = document.querySelector(`.menu`);
const secondSec = document.querySelector(`#second-section`);
const topSec = document.querySelector(`#top-section-container`);
const header = document.querySelector(`header`);

//  Scroll into sections smoothly

menuBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains(`menu-op`)) return;
  const sect = e.target.getAttribute("href");
  document.querySelector(`${sect}`).scrollIntoView({ behavior: "smooth" });
});

//  Implementing sticky nav
const navHeight = header.getBoundingClientRect().height;

const callbackObs = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting === true)
    document.querySelector(`header`).classList.add(`sticky`);
  else {
    document.querySelector(`header`).classList.remove(`sticky`);
  }
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(callbackObs, options);
observer.observe(topSec);
