const menuBar = document.querySelector(`.menu`);

//  Scroll into sections smoothly

menuBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains(`menu-op`)) return;
  const sect = e.target.getAttribute("href");
  document.querySelector(`${sect}`).scrollIntoView({ behavior: "smooth" });
});
