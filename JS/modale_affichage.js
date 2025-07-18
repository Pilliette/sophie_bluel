// Affichage de la modale
function afficherModale(creerModale, allWorks, overlayModal) {

    // Sélection des classes nécessaires à l'affichage de la modale
    const relativeBody = document.querySelector(`.relativeBody`)
    const editModeActive = document.querySelector(`.editMode__active`)

    // Écoute du clic de .editMode__active
    editModeActive.addEventListener(`click`, (event) => {

        event.preventDefault()
        
        relativeBody.classList.toggle(`relativeBody__edit`)

        // Vérification d'une création unique de la modale
        if (!document.querySelector(`.modal`)) {
            creerModale(allWorks, overlayModal)
        }

        overlayModal.classList.toggle(`overlayModal__edit`)

    })

}

export default {
    afficherModale
}