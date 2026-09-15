const images = [
  "images/Fadeimg1.png",
  "images/Fadeimg2.png",
  "images/Fadeimg3.png",
  "images/Fadeimg4.png",
];

let imageActuelle = 0;

const carouselImage = document.querySelector("#carouselImage");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");

// Image suivante
nextButton.addEventListener("click", function () {
  imageActuelle++;

  if (imageActuelle >= images.length) {
    imageActuelle = 0;
  }

  carouselImage.src = images[imageActuelle];
});

// Image précédente
previousButton.addEventListener("click", function () {
  imageActuelle--;

  if (imageActuelle < 0) {
    imageActuelle = images.length - 1;
  }

  carouselImage.src = images[imageActuelle];
});

// Changement automatique de l'image toutes les 3 secondes
setInterval(function () {
  imageActuelle++;

  if (imageActuelle >= images.length) {
    imageActuelle = 0;
  }

  carouselImage.src = images[imageActuelle];
}, 3000);

// Menu mobile
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
