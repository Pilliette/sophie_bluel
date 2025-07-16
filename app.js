// Import des fichiers galerie.js / filtres.js complets
import galerie from './JS/galerie.js'
import filtres from './JS/filtres.js'
import modale from './JS/modale.js'

// Appel de la fonction pour charger la galerie
galerie.chargerGalerie(galerie.allWorks)

// Appel de la fonction pour afficher les filtres
filtres.filtrer(galerie.allWorks, galerie.chargerGalerie)