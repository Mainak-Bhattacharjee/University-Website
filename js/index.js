document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const navList = nav.querySelector("ul");

  //hamburger
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = `<div></div><div></div><div></div>`;
  nav.parentNode.insertBefore(hamburger, nav);

  // Toggle menu
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
  });

  //Close menu
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      navList.classList.remove("show-menu");
    }
  });
});
