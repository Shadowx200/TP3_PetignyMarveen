const form = document.getElementById("reservationForm");

const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const courriel = document.getElementById("courriel");
const telephone = document.getElementById("telephone");
const service = document.getElementById("service");
const barbier = document.getElementById("barbier");
const date = document.getElementById("date");
const heure = document.getElementById("heure");

const reservationMessage = document.getElementById("reservationMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  reservationMessage.classList.add("hidden");
  if (validateForm()) {
    reservationMessage.innerText = "Votre rendez-vous a bien été enregistré !";

    reservationMessage.classList.remove("hidden");
    reservationMessage.classList.add("text-green-700");

    form.reset();
    resetStyles();
  } else {
    reservationMessage.innerText = "";
  }
});

function validateForm() {
  let noError = true;

  // Prénom
  if (prenom.value.trim() === "") {
    setError(prenom, "Le prénom est requis !");
    noError = false;
  } else {
    setSuccess(prenom);
  }

  // Nom
  if (nom.value.trim() === "") {
    setError(nom, "Le nom est requis !");
    noError = false;
  } else {
    setSuccess(nom);
  }

  // Courriel
  if (courriel.value.trim() === "") {
    setError(courriel, "Le courriel est requis !");
    noError = false;
  } else if (!isValidEmail(courriel.value)) {
    setError(courriel, "Veuillez entrer une adresse courriel valide !");
    noError = false;
  } else {
    setSuccess(courriel);
  }

  // Téléphone
  if (telephone.value.trim() === "") {
    setError(telephone, "Le téléphone est requis !");
    noError = false;
  } else if (!isValidPhone(telephone.value)) {
    setError(telephone, "Veuillez entrer un numéro de téléphone valide !");
    noError = false;
  } else {
    setSuccess(telephone);
  }

  // Service
  if (service.value === "") {
    setError(service, "Veuillez choisir un service !");
    noError = false;
  } else {
    setSuccess(service);
  }

  // Barbier
  if (barbier.value === "") {
    setError(barbier, "Veuillez choisir un barbier !");
    noError = false;
  } else {
    setSuccess(barbier);
  }

  // Date
  if (date.value === "") {
    setError(date, "Veuillez choisir une date !");
    noError = false;
  } else if (!isValidDate(date.value)) {
    setError(date, "La date du rendez-vous ne peut pas être dans le passé.");
    noError = false;
  } else {
    setSuccess(date);
  }

  // Heure
  if (heure.value === "") {
    setError(heure, "Veuillez choisir une heure !");
    noError = false;
  } else {
    setSuccess(heure);
  }

  return noError;
}

// Validation du courriel
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

// Validation du téléphone
function isValidPhone(phone) {
  const re = /^\d{3}-?\d{3}-?\d{4}$/;

  return re.test(phone);
}

// Afficher une erreur
function setError(element, message) {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(
    ".reservation__form-section__error",
  );

  errorDisplay.innerText = message;

  element.classList.add("border-red-600");
  element.classList.remove("border-green-600");

  element.setAttribute("aria-invalid", "true");
}

// Champ valide
function setSuccess(element) {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(
    ".reservation__form-section__error",
  );

  errorDisplay.innerText = "";

  element.classList.add("border-green-600");
  element.classList.remove("border-red-600");

  element.setAttribute("aria-invalid", "false");
}

function isValidDate(dateValue) {
  const dateChoisie = new Date(dateValue + "T00:00:00");

  const aujourdHui = new Date();
  aujourdHui.setHours(0, 0, 0, 0);

  return dateChoisie >= aujourdHui;
}

function resetStyles() {
  const champs = form.querySelectorAll("input, select, textarea");

  champs.forEach(function (champ) {
    champ.classList.remove("border-green-600");
    champ.classList.remove("border-red-600");
  });
}
