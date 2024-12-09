// // nav.js
export function toggleNav() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".topnav a"); // Selecteer alle links in de navigatie
    const currentPath = window.location.pathname; // Haal het huidige pad op
  
    navLinks.forEach(link => {
      // Vergelijk de href van elke link met de huidige URL
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active"); // Voeg de 'active'-klasse toe
      } else {
        link.classList.remove("active"); // Verwijder de 'active'-klasse
      }
    });
  });