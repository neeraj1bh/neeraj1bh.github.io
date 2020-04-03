// Burger

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// Day-Night Toggle

function myFunction() {
  var element = document.body;
  element.classList.toggle("night");
}

// Scroll to top

mybutton = document.getElementById("scrollBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 552 ||
    document.documentElement.scrollTop > 552
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrolltoTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
