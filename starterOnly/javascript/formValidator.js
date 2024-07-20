// Sélectionne le formulaire dans le document HTML
const form = document.querySelector('form'); // 'const' crée une constante appelée 'form' qui stocke la référence au premier élément <form> trouvé dans le document.

// Ajoute un écouteur d'événement pour intercepter la soumission du formulaire
form.addEventListener("submit", (event) => { // Ajoute un écouteur d'événement qui écoute l'événement 'submit' sur le formulaire. Lorsque l'événement 'submit' se produit, il exécute la fonction définie.

    // Sélectionne les champs de saisie individuels par leur ID ou classe
    let prenom = document.getElementById("first"); // 'let' déclare une variable 'prenom' qui stocke la référence à l'élément avec l'ID 'first'.
    let nom = document.getElementById("last"); // 'let' déclare une variable 'nom' qui stocke la référence à l'élément avec l'ID 'last'.
    let email = document.getElementById("email"); // 'let' déclare une variable 'email' qui stocke la référence à l'élément avec l'ID 'email'.
    let date = document.getElementById("birthdate"); // 'let' déclare une variable 'date' qui stocke la référence à l'élément avec l'ID 'birthdate'.
    let nbTournois = document.getElementById("quantity"); // 'let' déclare une variable 'nbTournois' qui stocke la référence à l'élément avec l'ID 'quantity'.
    let location = document.querySelector(".checkbox-input[name='location']:checked"); // 'let' déclare une variable 'location' qui stocke la référence au premier élément avec la classe 'checkbox-input' et le nom 'location' qui est sélectionné.
    let ca = document.getElementById("checkbox1"); // 'let' déclare une variable 'ca' qui stocke la référence à l'élément avec l'ID 'checkbox1'.

      // Affiche dans la console un objet avec les valeurs des champs de formulaire
console.log({
    "prenom": prenom.value, // Récupère la valeur du champ 'prenom' et l'associe à la clé 'prenom' dans l'objet.
    "nom": nom.value, // Récupère la valeur du champ 'nom' et l'associe à la clé 'nom' dans l'objet.
    "email": email.value, // Récupère la valeur du champ 'email' et l'associe à la clé 'email' dans l'objet.
    "date": date.value, // Récupère la valeur du champ 'date' et l'associe à la clé 'date' dans l'objet.
    "nbTournois": nbTournois.value, // Récupère la valeur du champ 'nbTournois' et l'associe à la clé 'nbTournois' dans l'objet.
    "location": location ? location.value : "none", // Vérifie si 'location' est défini ; si oui, utilise sa valeur, sinon attribue "none".
    "ca": ca.checked, // Récupère l'état coché ou non du champ 'ca' (case à cocher) et l'associe à la clé 'ca' dans l'objet.
});

    // Initialise une variable pour suivre la validité du formulaire
    let formValide = true; // 'let' déclare une variable 'formValide' et lui attribue la valeur 'true', indiquant que le formulaire est valide par défaut.

    // Expressions régulières pour valider les champs
    let regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // 'let' déclare une variable 'regexMail' qui stocke une expression régulière pour valider les adresses e-mail.
    let regexQuantity = /^\d{1,3}$/gm; // 'let' déclare une variable 'regexQuantity' qui stocke une expression régulière pour valider les quantités (1 à 3 chiffres).
    let regexDate = /^\d{4}-\d{2}-\d{2}$/; // 'let' déclare une variable 'regexDate' qui stocke une expression régulière pour valider les dates au format YYYY-MM-DD.

    // Teste la validité de la date (ligne de débogage)
    console.log(regexDate.test('2023-09-20')); // Affiche dans la console le résultat du test de l'expression régulière 'regexDate' sur la chaîne '2023-09-20'.

    // Vérifie que le prénom a au moins 2 caractères
    if (prenom.value.length < 2) { // 'if' vérifie si la longueur de la valeur du champ 'prenom' est inférieure à 2.
        prenom.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'prenom' si la condition est vraie.
        erreurAlert('Veuillez entrer 2 caractères ou plus pour le champ du prénom.', prenom); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        prenom.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'prenom'.
        erreurAlertRemove(prenom); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Vérifie que le nom a au moins 2 caractères
    if (nom.value.length < 2) { // 'if' vérifie si la longueur de la valeur du champ 'nom' est inférieure à 2.
        nom.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'nom' si la condition est vraie.
        erreurAlert('Veuillez entrer 2 caractères ou plus pour le champ du nom.', nom); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        nom.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'nom'.
        erreurAlertRemove(nom); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Vérifie que l'email correspond au format attendu
    if (regexMail.test(email.value) === false) { // 'if' vérifie si la valeur du champ 'email' ne correspond pas à l'expression régulière 'regexMail'.
        email.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'email' si la condition est vraie.
        erreurAlert('Veuillez entrer une adresse mail valide.', email); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        email.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'email'.
        erreurAlertRemove(email); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Vérifie que la date de naissance correspond au format attendu
    if (regexDate.test(date.value) === false) { // 'if' vérifie si la valeur du champ 'date' ne correspond pas à l'expression régulière 'regexDate'.
        date.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'date' si la condition est vraie.
        erreurAlert('Vous devez entrer votre date de naissance.', date); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        date.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'date'.
        erreurAlertRemove(date); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Vérifie que le nombre de tournois est un nombre entre 1 et 3 chiffres
    if (regexQuantity.test(nbTournois.value) === false) { // 'if' vérifie si la valeur du champ 'nbTournois' ne correspond pas à l'expression régulière 'regexQuantity'.
        nbTournois.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'nbTournois' si la condition est vraie.
        erreurAlert('Vous devez entrer le nombre de tournois auquel vous avez participé.', nbTournois); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        nbTournois.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'nbTournois'.
        erreurAlertRemove(nbTournois); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Vérifie qu'une option de localisation est sélectionnée
    if (location) { // 'if' vérifie si 'location' est défini (une option est sélectionnée).
        erreurAlertRemove(document.getElementById('location1')); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé à la localisation.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        erreurAlert('Vous devez choisir une option.', document.getElementById('location1')); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur pour la localisation.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    }

    // Vérifie que les termes et conditions sont acceptés
    if (ca.checked != true) { // 'if' vérifie si la case 'ca' n'est pas cochée.
        ca.classList.add("erreur"); // Ajoute la classe 'erreur' au champ 'ca' si la condition est vraie.
        erreurAlert('Vous devez vérifier que vous acceptez les termes et conditions.', ca); // Appelle la fonction 'erreurAlert' pour afficher un message d'erreur.
        formValide = false; // Met à jour 'formValide' à 'false', indiquant que le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        ca.classList.remove("erreur"); // Supprime la classe 'erreur' du champ 'ca'.
        erreurAlertRemove(ca); // Appelle la fonction 'erreurAlertRemove' pour supprimer le message d'erreur associé.
    }

    // Si le formulaire est invalide, empêche la soumission et l'actualisation de la page
    if (formValide == false) { // 'if' vérifie si 'formValide' est égal à 'false'.
        event.preventDefault(); // Empêche la soumission et l'actualisation de la page si le formulaire est invalide.
    } else { // 'else' exécute ce bloc si la condition 'if' est fausse.
        // Empêche la soumission et l'actualisation de la page, et affiche une modal de succès
        event.preventDefault(); // Empêche la soumission et l'actualisation de la page.
        modalValid.style.display = "flex"; // Affiche la modal de succès en modifiant son style.

        // Réinitialise les champs du formulaire après soumission réussie
        prenom.value = ''; // Vide le champ 'prenom'.
        nom.value = ''; // Vide le champ 'nom'.
        email.value = ''; // Vide le champ 'email'.
        date.value = ''; // Vide le champ 'date'.
        nbTournois.value = ''; // Vide le champ 'nbTournois'.
        location.value = ''; // Vide le champ 'location'.
    }
});

// Fonction pour afficher les messages d'erreur sous les champs invalides
function erreurAlert(message, select) {
    // Sélectionne tous les enfants du parent du champ de saisie
    let verif = Array.from(select.parentNode.children); // 'let' déclare une variable 'verif' qui stocke un tableau contenant tous les enfants du parent du champ 'select'.
    
    // Filtre pour trouver les éléments avec la classe 'erreur-container'
    let test = verif.filter((el) => {
        return Array.from(el.classList).includes("erreur-container"); // Filtre les enfants pour trouver ceux qui ont la classe 'erreur-container'.
    });

    // Si aucun message d'erreur n'existe, en crée un nouveau
    if (test.length === 0) { // 'if' vérifie si le tableau 'test' est vide.
        // Crée un nouveau div pour le message d'erreur
        let newDiv = document.createElement("div"); // 'let' déclare une variable 'newDiv' qui stocke un nouvel élément <div>.
        // Crée un nouveau paragraphe pour le texte du message
        let newText = document.createElement("p"); // 'let' déclare une variable 'newText' qui stocke un nouvel élément <p>.

        // Définit le texte du message d'erreur
        newText.textContent = message; // Définit le texte du paragraphe 'newText' au message d'erreur.
        // Ajoute des classes pour le style du message et du conteneur
        newDiv.classList.add('erreur-container'); // Ajoute la classe 'erreur-container' au div 'newDiv'.
        newText.classList.add('erreur-text'); // Ajoute la classe 'erreur-text' au paragraphe 'newText'.

        // Ajoute le texte du message au conteneur
        newDiv.appendChild(newText); // Ajoute le paragraphe 'newText' comme enfant du div 'newDiv'.

        // Ajoute le conteneur au parent du champ de saisie
        select.parentNode.appendChild(newDiv); // Ajoute le div 'newDiv' comme enfant du parent du champ 'select'.
    }
}

// Fonction pour supprimer les messages d'erreur sous les champs valides
function erreurAlertRemove(select) {
    // Sélectionne tous les enfants du parent du champ de saisie
    let verif = Array.from(select.parentNode.children); // 'let' déclare une variable 'verif' qui stocke un tableau contenant tous les enfants du parent du champ 'select'.
    
    // Filtre pour trouver les éléments avec la classe 'erreur-container'
    let test = verif.filter((el) => Array.from(el.classList).includes("erreur-container")); // Filtre les enfants pour trouver ceux qui ont la classe 'erreur-container'.

    // Si un message d'erreur existe, le supprime
    if (test.length !== 0) { // 'if' vérifie si le tableau 'test' n'est pas vide.
        select.parentNode.removeChild(test[0]); // Supprime le premier élément du tableau 'test' du parent du champ 'select'.
    }
}
