// Import des fichiers JS
import galerie from './JS/galerie.js'
import filtres from './JS/filtres.js'
import deconnexion from './JS/deconnexion.js'
import modaleCreation from './JS/modale_creation.js'
import modaleAffichage from './JS/modale_affichage.js'
import modaleGestion from './JS/modale_gestion.js'

// Déclaration d'une variable d'évènements (Suppression ou ajout de projet)
const events = {

    added: `work:added`,
    deleted: `work:deleted`

}

// Déclaration d'une fonction pour affichage de la galerie avec des données à jour
function render() {
    return galerie.chargerGalerie(galerie.allWorks)
}

// Déclaration d'une fonction d'initialisation
function init() {

    // Affichage de la galerie avec des données à jour
    galerie.chargerGalerie(galerie.allWorks)

    // Affichage des filtres
    const blocForm = document.querySelector(`.blocForm`)

    if (blocForm) {
        filtres.filtrer(galerie.allWorks, galerie.chargerGalerie)
    }

    // Initialisation de la modale
    const overlayModal = document.querySelector(`.overlayModal`)

    if (overlayModal) {

        modaleAffichage.afficherModale (

            modaleCreation.creerModale,
            galerie.allWorks,
            overlayModal,
            modaleGestion.closeModal,
            works => modaleGestion.deleteWork(works),
            modaleGestion.addWork,
            modaleGestion.addFile,
            modaleGestion.validWork
            
        )

    }

    // Réaction aux évènements
    document.addEventListener(events.added, (event) => {

        const newWork = event.detail?.work
        galerie.allWorks.push(newWork)
        render()

    })

    document.addEventListener(events.deleted, () => {
        render()
    })

}

// Appel de la fonction pour initialiser
init()