function toggleNav() {
  const navButton = document.querySelector(".hamburger");
    navButton.addEventListener("click", function() {
      document.querySelector("nav").classList.toggle("nav-hide");
      document.querySelector("main").classList.toggle("main-toggle-margin");
    })
}

export {toggleNav,}