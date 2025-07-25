// Affichage de la modale
function afficherModale(creerModale, allWorks, overlayModal, closeModal, deleteWork, addWork, validWork) {

    // Sélection des éléments HTML
    const relativeBody = document.querySelector(`.relativeBody`)
    const editModeActive = document.querySelector(`.editMode__active`)

    // Écoute du clic de .editMode__active
    editModeActive.addEventListener(`click`, (event) => {

        event.preventDefault()
        
        relativeBody.classList.add(`relativeBody__edit`)
        overlayModal.classList.add(`overlayModal__edit`)

        // Vérification d'une création unique de la modale
        const modalExiste = document.querySelector(`.modal`)

        if (!modalExiste) {

            // Appel des fonctions
            creerModale(allWorks, overlayModal) // pour créer la modale

        }

        // Attente de la mise à jour du DOM
        setTimeout(() => {

            closeModal(overlayModal) // pour fermer la modale
            deleteWork(allWorks) // pour supprimer un projet
            addWork() // pour ajouter un projet
            validWork() // pour valider l'ajout du projet

        }, 0)

    })

}

export default {
    afficherModale
}