function addWork () {

    // Sélection des éléments HTML
    const galleryModalSubmit = document.querySelector(`.galleryModal__submit`)
    const addPhotoArrow = document.querySelector(`.addPhoto__arrow`)
    const galleryModalTitle = document.querySelector(`.galleryModal__title`)
    const addPhotoTitle = document.querySelector(`.addPhoto__title`)
    const galleryModal = document.querySelector(`.galleryModal`)
    const addPhoto = document.querySelector(`.addPhoto`)
    const addPhotoForm = document.querySelector(`.addPhoto__form`)
    const galleryModalButton = document.querySelector(`.galleryModal__button`)
    const addPhotoValidButton = document.querySelector(`.addPhoto__validButton`)

    // Écoute au clic de .galleryModal__submit
    galleryModalSubmit.addEventListener(`click`, (event) => {

        event.preventDefault()

        // Modification des classes pour afficher la modale "Ajout projet"
        addPhotoArrow.classList.toggle(`addPhoto__arrow--active`)
        galleryModalTitle.classList.toggle(`galleryModal__title--inactive`)
        addPhotoTitle.classList.toggle(`addPhoto__title--active`)
        galleryModal.classList.toggle(`galleryModal--inactive`)
        addPhoto.classList.toggle(`addPhoto--active`)
        addPhotoForm.classList.toggle(`addPhoto__form--active`)
        galleryModalButton.classList.toggle(`galleryModal__button--inactive`)
        addPhotoValidButton.classList.toggle(`addPhoto__validButton--active`)

    })

}

function validWork () {

    const addPhotoArrow = document.querySelector(`.addPhoto__arrow`)
    const galleryModalTitle = document.querySelector(`.galleryModal__title`)
    const addPhotoTitle = document.querySelector(`.addPhoto__title`)
    const galleryModal = document.querySelector(`.galleryModal`)
    const addPhoto = document.querySelector(`.addPhoto`)
    const addPhotoForm = document.querySelector(`.addPhoto__form`)
    const galleryModalButton = document.querySelector(`.galleryModal__button`)
    const addPhotoValidButton = document.querySelector(`.addPhoto__validButton`)
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
    addWork,
    validWork
}