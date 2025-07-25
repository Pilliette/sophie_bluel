// Sélection des éléments HTML communs aux fonctions
function selectionVariables () {

    return {

        addPhotoArrow : document.querySelector(`.addPhoto__arrow`),
        galleryModalTitle : document.querySelector(`.galleryModal__title`),
        addPhotoTitle : document.querySelector(`.addPhoto__title`),
        galleryModal : document.querySelector(`.galleryModal`),
        addPhotoForm : document.querySelector(`.addPhoto__form`),
        galleryModalButton : document.querySelector(`.galleryModal__button`),
        addPhotoValidButton : document.querySelector(`.addPhoto__validButton`),
        addPhotoValidButtonGreen : document.querySelector(`.addPhoto__validButton--green`)

    }

}

// Déclaration de la fonction pour fermer la modale
function closeModal (overlayModal) {

    // Sélection des éléments HTML
    const crossModal = document.querySelector(`.crossModal`)
    const modal = document.querySelector(`.modal`)
    const relativeBody = document.querySelector(`.relativeBody`)
    
    // Déclaration de la fonction pour supprimer la modale et les paramètres associés
    function removeModal () {

        modal.remove()
        overlayModal.classList.remove(`overlayModal__edit`)
        relativeBody.classList.remove(`relativeBody__edit`)

    }

    // Écoute du clic de .crossModal
    if (crossModal) {

        crossModal.addEventListener(`click`, (event) => {

            event.preventDefault()
            removeModal()

        })

    }
    
    // Écoute du clic de .relativeBody
    if (relativeBody) {

        relativeBody.addEventListener(`click`, (event) => {

            if (modal && !modal.contains(event.target)) {

                event.preventDefault()
                removeModal()

            }

        })

    }
    
}

function deleteWork (allWorks) {

    // Sélection des éléments HTML
    const galleryModalTrashButtons = document.querySelectorAll(`.galleryModal__trash`)

    // Écoute au clic des .galleryModal__trash
    galleryModalTrashButtons.forEach(button => {

        button.addEventListener(`click`, (event) => {

            event.preventDefault()
            
            const workContainer = button.closest(`.galleryModal__work`)
            const img = workContainer.querySelector(`img`)

            // Conversion de l'id en entier
            const workId = parseInt(img.dataset.id)
            
            // Suppression du uniqueWork du DOM
            workContainer.remove

            // Suppression du uniqueWork de allWorks
            const index = allWorks.findIndex(work => work.id === workId)

            if (index !== -1) {
                allWorks.splice(index, 1)
            }

            console.log(`Projet ${workId} supprimé`);

        })
    })

}

// Affichage de la modale "Ajout projet"
function addWork () {

    // Sélection des éléments HTML
    const {

        addPhotoArrow,
        galleryModalTitle,
        addPhotoTitle,
        galleryModal,
        addPhotoForm,
        galleryModalButton,
        addPhotoValidButton,
        addPhotoValidButtonGreen

    } = selectionVariables()

    // Écoute au clic de .galleryModal__button
    galleryModalButton.addEventListener(`click`, (event) => {

        event.preventDefault()

        // Modification des classes pour l'affichage de la modale
        addPhotoArrow.classList.remove(`addPhoto__arrow`)
        addPhotoArrow.classList.add(`addPhoto__arrow--active`)
        galleryModalTitle.classList.remove(`galleryModal__title`)
        galleryModalTitle.classList.add(`galleryModal__title--inactive`)
        addPhotoTitle.classList.remove(`addPhoto__title`)
        addPhotoTitle.classList.add(`addPhoto__title--active`)
        galleryModal.classList.remove(`galleryModal`)
        galleryModal.classList.add(`galleryModal--inactive`)
        addPhotoForm.classList.remove(`addPhoto__form`)
        addPhotoForm.classList.add(`addPhoto__form--active`)
        galleryModalButton.classList.remove(`galleryModal__button`)
        galleryModalButton.classList.add(`galleryModal__button--inactive`)
        addPhotoValidButton.classList.remove(`addPhoto__validButton`)
        addPhotoValidButton.classList.add(`addPhoto__validButton--active`)
        addPhotoValidButtonGreen.classList.remove(`addPhoto__validButton--green`)

    })

}

// Affichage de la modale "Validation projet"
function validWork () {

    // Sélection des éléments HTML
    const {

        addPhotoArrow,
        galleryModalTitle,
        addPhotoTitle,
        galleryModal,
        addPhotoForm,
        galleryModalButton,
        addPhotoValidButton,
        addPhotoValidButtonGreen

    } = selectionVariables()

    const faImage = document.querySelector(`.fa-image`)
    const addPhotoButton = document.querySelector(`.addPhoto__button`)
    const addPhotoFileTypes = document.querySelector(`.addPhoto__fileTypes`)
    const addPhotoPhoto = document.querySelector(`.addPhoto__photo`)
    const addPhotoValidButtonGrey = document.querySelector(`.addPhoto__validButton--grey`)

    if (addPhotoValidButton) {

        // Écoute au clic de .addPhoto__arrow
        addPhotoArrow.addEventListener(`click`, (event) => {

            event.preventDefault()

            // Modification des classes pour réafficher la modale "Galerie photo"
            addPhotoArrow.classList.remove(`addPhoto__arrow--active`)
            addPhotoArrow.classList.add(`addPhoto__arrow`)
            galleryModalTitle.classList.remove(`galleryModal__title--inactive`)
            galleryModalTitle.classList.add(`galleryModal__title`)
            addPhotoTitle.classList.remove(`addPhoto__title--active`)
            addPhotoTitle.classList.add(`addPhoto__title`)
            galleryModal.classList.remove(`galleryModal--inactive`)
            galleryModal.classList.add(`galleryModal`)
            addPhotoForm.classList.remove(`addPhoto__form--active`)
            addPhotoForm.classList.add(`addPhoto__form`)
            galleryModalButton.classList.remove(`galleryModal__button--inactive`)
            galleryModalButton.classList.add(`galleryModal__button`)
            addPhotoValidButton.classList.remove(`addPhoto__validButton--active`)
            addPhotoValidButton.classList.add(`addPhoto__validButton`)
        })

        // Écoute au clic de .addPhoto__validButton
        addPhotoValidButton.addEventListener(`click`, (event) => {

            event.preventDefault()
            
            // Modification des classes pour afficher la modale "Valider projet"
            faImage.classList.remove(`fa-image`)
            faImage.classList.add(`fa-image--inactive`)
            addPhotoButton.classList.remove(`addPhoto__button`)
            addPhotoButton.classList.add(`addPhoto__button--inactive`)
            addPhotoFileTypes.classList.remove(`addPhoto__fileTypes`)
            addPhotoFileTypes.classList.add(`addPhoto__fileTypes--inactive`)
            addPhotoPhoto.classList.remove(`addPhoto__photo`)
            addPhotoPhoto.classList.add(`addPhoto__photo--active`)
            addPhotoValidButtonGrey.classList.remove(`addPhoto__validButton--grey`)
            addPhotoValidButtonGreen.classList.add(`addPhoto__validButton--green`)

        })

    }

}

export default {
    selectionVariables,
    closeModal,
    deleteWork,
    addWork,
    validWork
}