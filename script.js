// ===== MODE SOMBRE =====
const darkModeToggle = document.getElementById("darkModeToggle");

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
    darkModeToggle.setAttribute("aria-pressed", "true");
    darkModeToggle.setAttribute("aria-label", "Désactiver le mode sombre");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    darkModeToggle.textContent = "🌙";
    darkModeToggle.setAttribute("aria-pressed", "false");
    darkModeToggle.setAttribute("aria-label", "Activer le mode sombre");
    localStorage.setItem("darkMode", "disabled");
  }
}

// Charger la préférence enregistrée
setDarkMode(localStorage.getItem("darkMode") === "enabled");

// Écouteur sur le bouton
darkModeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
});


// ===== ANIMATION MACHINE À ÉCRIRE =====
const typingText = document.getElementById("typingText");
const fullName = "Thomas Avronsart";
const subtitle = " — Développeur Web en alternance";
let idx = 0;
let subtitleIdx = 0;

function typeFullName() {
  if (idx < fullName.length) {
    typingText.textContent += fullName.charAt(idx);
    idx++;
    setTimeout(typeFullName, 150);
  } else {
    setTimeout(typeSubtitle, 300);
  }
}

function typeSubtitle() {
  if (subtitleIdx < subtitle.length) {
    typingText.textContent += subtitle.charAt(subtitleIdx);
    subtitleIdx++;
    setTimeout(typeSubtitle, 80);
  }
}

// Démarrer l'animation
typingText.textContent = "";
typeFullName();


// ===== FADE IN SECTIONS AU SCROLL =====
const sections = document.querySelectorAll("main section");

function checkSections() {
  const triggerPoint = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkSections);
window.addEventListener("load", checkSections);


// ===== FORMULAIRE CONTACT =====
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();
  formMessage.textContent = "";

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name.length < 2) {
    formMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
    form.name.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Merci de saisir un email valide.";
    form.email.focus();
    return;
  }

  if (message.length < 10) {
    formMessage.textContent = "Le message doit contenir au moins 10 caractères.";
    form.message.focus();
    return;
  }

  formMessage.textContent = "Envoi en cours…";

  // Simuler un envoi
  setTimeout(() => {
    formMessage.textContent = "Merci pour votre message !";
    form.reset();
  }, 1500);
});


// ===== BOUTON RETOUR EN HAUT =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

