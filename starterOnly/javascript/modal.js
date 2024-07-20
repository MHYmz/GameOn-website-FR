// Fonction pour éditer la navigation (responsive)
function editNav() {
  let x = document.getElementById("myTopnav"); // Récupère l'élément avec l'ID "myTopnav"
  if (x.className === "topnav") { // Si la classe actuelle est "topnav"
    x.className += " responsive"; // Ajoute "responsive" à la classe pour devenir "topnav responsive"
  } else {
    x.className = "topnav"; // Sinon, remet la classe à "topnav"
  }
}

// Sélection des éléments DOM
const modalbg = document.querySelector(".bground"); // Sélectionne l'élément avec la classe "bground" (arrière-plan du modal)
const modalBtn = document.querySelectorAll(".modal-btn"); // Sélectionne tous les éléments avec la classe "modal-btn" (boutons pour lancer le modal)
const formData = document.querySelectorAll(".formData"); // Sélectionne tous les éléments avec la classe "formData" (champs de formulaire)
const modalValid = document.getElementById("modal-valid"); // Sélectionne l'élément avec l'ID "modal-valid"

modalbg.style.display = "none"; // Cache l'élément modal en définissant son affichage à "none"

// Événement de lancement du modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Pour chaque bouton modal, attache un événement de clic qui appelle la fonction launchModal

// Fonction pour lancer le modal
function launchModal() {
  modalbg.style.display = "block"; // Change le style de l'arrière-plan du modal pour l'afficher (display: block)
}

// Fonction pour fermer le modal
function closeModal() {
  modalbg.style.display = "none"; // Change le style de l'arrière-plan du modal pour le cacher (display: none)
}

// Fonction pour fermer le modal de validation et le modal principal
function closeModalValid() {
  modalValid.style.display = "none"; // Change le style de l'autre modal (modal-valid) pour le cacher (display: none)
  closeModal(); // Appelle la fonction closeModal pour cacher également le modal principal
}








