// Affichage de la modale
function afficherModale(creerModale, allWorks, overlayModal, closeModal, deleteWork, addWork, addFile, validWork) {

    // Sélection des éléments HTML
    const relativeBody = document.querySelector(`.relativeBody`)
    const editModeActive = document.querySelector(`.editMode__active`)

    // Écoute du clic de .editMode__active
    editModeActive.addEventListener(`click`, (event) => {

        // Empêchement du rechargement de la page
        event.preventDefault()

        // Ajout des classes pour afficher la modale
        relativeBody.classList.add(`relativeBody__edit`)
        overlayModal.classList.add(`overlayModal__edit`)

        // Nettoyage de .modal
        const existingModal = document.querySelector(`.modal`)

        if (existingModal) {
            existingModal.remove()
        }
        
        // Appel des fonctions pour créer la modale
        creerModale(allWorks, overlayModal)

        // Attente de la mise à jour du DOM
        setTimeout(() => {

            // Appel des fonctions
            closeModal(overlayModal) // pour fermer la modale
            deleteWork(allWorks) // pour supprimer un projet
            addWork() // pour ajouter un projet
            addFile() // pour ajouter une image
            validWork() // pour valider l'ajout du projet

        }, 0)

    })

}

export default {
    afficherModale
}