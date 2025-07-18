// Import des fichiers galerie.js / filtres.js / modale.js complets
import galerie from './JS/galerie.js'
import filtres from './JS/filtres.js'
import modaleCreation from './JS/modale_creation.js'
import modaleAffichage from './JS/modale_affichage.js'

// Appel de la fonction pour charger la galerie
galerie.chargerGalerie(galerie.allWorks)

// Appel de la fonction pour afficher les filtres
if (document.querySelector(`.blocForm`)) {
    filtres.filtrer(galerie.allWorks, galerie.chargerGalerie)
}

// Sélection de la section .overlayModal
const overlayModal = document.querySelector(`.overlayModal`)

// Appel de la fonction pour initialiser la modale
if (document.querySelector(`.overlayModal`)) {
    modaleAffichage.afficherModale(modaleCreation.creerModale, galerie.allWorks, overlayModal)
}