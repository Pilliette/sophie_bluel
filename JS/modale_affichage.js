// Affichage de la modale
function afficherModale(creerModale, allWorks, overlayModal, addWork, validWork) {

    // Sélection des classes pour l'affichage de la modale
    const relativeBody = document.querySelector(`.relativeBody`)
    const editModeActive = document.querySelector(`.editMode__active`)

    // Écoute du clic de .editMode__active
    editModeActive.addEventListener(`click`, (event) => {

        event.preventDefault()
        
        relativeBody.classList.toggle(`relativeBody__edit`)

        // Vérification d'une création unique de la modale
        const modalExiste = document.querySelector(`.modal`)

        if (!modalExiste) {

            creerModale(allWorks, overlayModal)

            addWork()

            validWork()

        }

        overlayModal.classList.toggle(`overlayModal__edit`)

    })

}

export default {
    afficherModale
}