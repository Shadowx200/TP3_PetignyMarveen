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

// CARROUSEL
// Le code fonctionne seulement si le carrousel existe sur la page
if (carouselImage) {
  function changerImage() {
    carouselImage.classList.add("carousel__image--fade");

    setTimeout(function () {
      carouselImage.src = images[imageActuelle];
      carouselImage.classList.remove("carousel__image--fade");
    }, 500);
  }
  // Image suivante
  nextButton.addEventListener("click", function () {
    imageActuelle++;

    if (imageActuelle >= images.length) {
      imageActuelle = 0;
    }

    changerImage();
  });

  // Image précédente
  previousButton.addEventListener("click", function () {
    imageActuelle--;

    if (imageActuelle < 0) {
      imageActuelle = images.length - 1;
    }

    changerImage();
  });

  // Changement automatique toutes les 3 secondes
  setInterval(function () {
    imageActuelle++;

    if (imageActuelle >= images.length) {
      imageActuelle = 0;
    }

    changerImage();
  }, 3000);
}

// MENU MOBILE
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");

menuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuButton.setAttribute("aria-expanded", "false");
  } else {
    menuButton.setAttribute("aria-expanded", "true");
  }
});

// FAQ
const faqButtons = document.querySelectorAll(".faq__button");

faqButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".faq__icon");

    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      icon.textContent = "+";
      button.setAttribute("aria-expanded", "false");
    } else {
      icon.textContent = "−";
      button.setAttribute("aria-expanded", "true");
    }
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(function () {
        console.log("Service Worker enregistré !");
      })
      .catch(function (error) {
        console.log("Erreur Service Worker :", error);
      });
  });
}
