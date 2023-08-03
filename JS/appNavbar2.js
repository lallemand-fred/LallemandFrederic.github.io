// ----------------------------------Menu burger----------------------------

const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

const links = document.querySelectorAll("nav li");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show-nav");
  });
});

// function toggleMenu() {
//   const navbar = document.querySelector(".navbar");
//   const burger = document.querySelector(".burger");
//   burger.addEventListener("click", () => {
//     navbar.classList.toggle("show-nav");
//   });
// }
// toggleMenu();
//------------------------------Page de chargement---------------------------
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});
//------------------------------Page Parallax---------------------------
let background = document.getElementById("background");
let middelEnd = document.getElementById("middelEnd");
let middelStart = document.getElementById("middelStart");
let frontEnd = document.getElementById("frontEnd");
let frontStart = document.getElementById("frontStart");
let lastName = document.getElementById("lastName");
let firstName = document.getElementById("firstName");
let navBar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  background.style.top = value * 0.4 + "px";
  middelEnd.style.top = value * 0.35 + "px";
  middelStart.style.top = value * 0.3 + "px";
  frontEnd.style.top = value * 0.17 + "px";
  frontStart.style.top = value * 0.08 + "px";
  lastName.style.marginBotton = value * 2 + "px";
  firstName.style.marginBotton = value * 2 + "px";
});

//-------------------Scroll up apparition des menus, scroll bas disparition----------------

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll < lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll > lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});
//-------------------------------------------------------------------------------
//Mouvements animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const planete = document.querySelector(".planete img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Anim entrée
card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Pop out
  title.style.transform = "translateZ(70px)";
  planete.style.transform = "translateZ(90px) rotateZ(-25deg) ";
  description.style.transform = "translateZ(40px)";
  sizes.style.transform = "translateZ(70px)";
  purchase.style.transform = "translateZ(40px)";
});
//Anim sortie
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Pop back
  title.style.transform = "translateZ(0px)";
  planete.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
