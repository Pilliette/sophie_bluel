// Sélection des éléments HTML communs aux fonctions
function selectionVariables () {

    return {

        addPhotoArrow : document.querySelector(`.addPhoto__arrow`),
        galleryModalTitle : document.querySelector(`.galleryModal__title`),
        addPhotoTitle : document.querySelector(`.addPhoto__title`),
        galleryModal : document.querySelector(`.galleryModal`),
        addPhotoForm : document.querySelector(`.addPhoto__form`),
        galleryModalButton : document.querySelector(`.galleryModal__button`),
        addPhotoValidButton : document.querySelector(`.addPhoto__validButton`)

    }

}

// Déclaration de la fonction pour fermer la modale
function closeModal (overlayModal) {

    // Sélection des éléments HTML
    const crossModal = document.querySelector(`.crossModal`)
    const modal = document.querySelector(`.modal`)
    const relativeBody = document.querySelector(`.relativeBody`)
    

    // Écoute du clic de .crossModal
    crossModal.addEventListener(`click`, (event) => {

        event.preventDefault()

        // Suppression de .modal
        modal.remove()

        overlayModal.classList.remove(`overlayModal__edit`)
        relativeBody.classList.remove(`relativeBody__edit`)

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
        addPhotoValidButton

    } = selectionVariables()

    // Écoute au clic de .galleryModal__submit
    galleryModalButton.addEventListener(`click`, (event) => {

        event.preventDefault()

        // Modification des classes pour l'affichage de la modale
        addPhotoArrow.classList.toggle(`addPhoto__arrow--active`)
        galleryModalTitle.classList.toggle(`galleryModal__title--inactive`)
        addPhotoTitle.classList.toggle(`addPhoto__title--active`)
        galleryModal.classList.toggle(`galleryModal--inactive`)
        addPhotoForm.classList.toggle(`addPhoto__form--active`)
        galleryModalButton.classList.toggle(`galleryModal__button--inactive`)
        addPhotoValidButton.classList.toggle(`addPhoto__validButton--active`)

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
        addPhotoValidButton

    } = selectionVariables()

    const addPhotoBlankBlock = document.querySelector(`.addPhoto__blankBlock`)
    const addPhotoPhoto = document.querySelector(`.addPhoto__photo`)
    const addPhotoValidSubmitGrey = document.querySelector(`.addPhoto__validSubmit--grey`)

    if (addPhotoValidButton) {

        // Écoute au clic de .addPhoto__arrow
        addPhotoArrow.addEventListener(`click`, (event) => {

            event.preventDefault()

            // Modification des classes pour réafficher la modale "Galerie photo"
            addPhotoArrow.classList.toggle(`addPhoto__arrow--active`)
            galleryModalTitle.classList.toggle(`galleryModal__title--inactive`)
            addPhotoTitle.classList.toggle(`addPhoto__title--active`)
            galleryModal.classList.toggle(`galleryModal--inactive`)
            addPhoto.classList.toggle(`addPhoto--active`)
            addPhotoForm.classList.toggle(`addPhoto__form--active`)
            galleryModalButton.classList.toggle(`galleryModal__button--inactive`)
            addPhotoValidButton.classList.toggle(`addPhoto__validButton--active`)
        })

        // Écoute au clic de .addPhoto__validButton
        addPhotoValidButton.addEventListener(`click`, (event) => {

            event.preventDefault()
            
            // Modification des classes pour afficher la modale "Valider projet"
            addPhotoBlankBlock.classList.toggle(`addPhoto__blankBlock--inactive`)
            addPhotoPhoto.classList.toggle(`addPhoto__photo--active`)
            addPhotoValidSubmitGrey.classList.remove(`addPhoto__validSubmit--grey`)

        })

    }

}

export default {
    selectionVariables,
    closeModal,
    addWork,
    validWork
}