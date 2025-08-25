// Sélection des éléments HTML communs aux fonctions
function selectionVariables () {

    return {

        modal : document.querySelector(`.modal`),
        addPhotoArrow : document.querySelector(`.addPhoto__arrow`),
        galleryModalTitle : document.querySelector(`.galleryModal__title`),
        addPhotoTitle : document.querySelector(`.addPhoto__title`),
        galleryModal : document.querySelector(`.galleryModal`),
        crossModal : document.querySelector(`.crossModal`),
        addPhotoForm : document.querySelector(`.addPhoto__form`),
        faImage : document.querySelector(`.fa-image`),
        addPhotoButton : document.querySelector(`.addPhoto__button`),
        addPhotoAddFile : document.getElementById(`addPhoto__addFile`),
        addPhotoFileTypes : document.querySelector(`.addPhoto__fileTypes`),
        addPhotoPhoto : document.querySelector(`.addPhoto__photo`),
        addPhotoAddTitleInput : document.querySelector(`.addPhoto__addTitle--input`),
        addPhotoAddTitleError : document.querySelector(`.addPhoto__addTitle--error`),
        addPhotoSelectCategoryInput : document.querySelector(`.addPhoto__selectCategory--input`),
        galleryModalButton : document.querySelector(`.galleryModal__button`),
        addPhotoValidButton : document.querySelector(`.addPhoto__validButton`),
        addPhotoValidButtonGrey : document.querySelector(`.addPhoto__validButton--grey`),
        addPhotoValidButtonGreen : document.querySelector(`.addPhoto__validButton--green`)

    }

}

// Déclaration de la variable de suppression d'un projet
let projectDeleted = false

// Déclaration de la fonction pour fermer la modale
function closeModal (overlayModal) {

    // Sélection des éléments HTML
    const relativeBody = document.querySelector(`.relativeBody`)

    function closeClick(event) {

        const {
            modal,
            crossModal
        } = selectionVariables()
        
        if (!modal || !crossModal) return
        
        const clickOutsideModal = !modal.contains(event.target)
        const clickOnCross = crossModal.contains(event.target)
        
        if (clickOnCross || clickOutsideModal) {

            modal.remove()
            overlayModal.classList.remove(`overlayModal__edit`)
            relativeBody.classList.remove(`relativeBody__edit`)

            relativeBody.removeEventListener(`click`, closeClick)

            if (projectDeleted) {
                location.reload()
            }

        }

    }

    relativeBody.addEventListener(`click`, closeClick)
    
}

// Déclaration de la fonction pour supprimer un projet
function deleteWork (allWorks) {

    // Sélection de tous les éléments .galleryModal__trash
    const galleryModalTrash = document.querySelectorAll(`.galleryModal__trash`)

    // Écoute au clic pour chaque .galleryModal__trash
    galleryModalTrash.forEach(button => {

        button.addEventListener(`click`, async (event) => {

            event.preventDefault()
            event.stopPropagation()
            
            // Identification du projet via l'id + conversion de l'id en entier
            const workId = parseInt(button.dataset.id)

            // Récupération du token d'authentification dans le localStorage
            const token = localStorage.getItem(`token`)

            // Envoi de la requête de suppression à l'API
            const response = await fetch(`http://localhost:5678/api/works/${workId}`, { 

                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                
            })

            // Suppression réussie côté API
            projectDeleted = true
            
            // Suppression du projet du DOM

            // Recherche du parent .galleryModal__work du clic
            const workContainer = button.closest(`.galleryModal__work`)
            
            // Suppression du DOM
            if (workContainer) workContainer.remove()

            // Suppression du projet du tableau allWorks
            
            // Comparaison de l'id avec le tableau allWorks
            const index = allWorks.findIndex(work => work.id === workId)

            // Suppression du projet
            if (index !== -1) {
                allWorks.splice(index, 1)
            }

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

// Sélection d'une image
function addFile () {

    // Sélection des éléments HTML
    const {
        
        faImage,
        addPhotoButton,
        addPhotoAddFile,
        addPhotoFileTypes,
        addPhotoPhoto
    
    } = selectionVariables()

    addPhotoAddFile.addEventListener(`change`, (event) => {

        event.preventDefault()

        // Récupération du fichier sélectionné
        const imageFile = event.target.files[0]

        if (imageFile) {

            // Création d'une URL temporaire pour visualiser l'image sélectionnée
            const imageURL = URL.createObjectURL(imageFile)

            // Remplacement de l'aperçu par l'image sélectionnée
            addPhotoPhoto.src = imageURL

        }

        faImage.classList.remove(`fa-image`)
        faImage.classList.add(`fa-image--inactive`)
        addPhotoButton.classList.remove(`addPhoto__button`)
        addPhotoButton.classList.add(`addPhoto__button--inactive`)
        addPhotoFileTypes.classList.remove(`addPhoto__fileTypes`)
        addPhotoFileTypes.classList.add(`addPhoto__fileTypes--inactive`)
        addPhotoPhoto.classList.remove(`addPhoto__photo`)
        addPhotoPhoto.classList.add(`addPhoto__photo--active`)

    })

}

// Reset des champs à l'affichage de la modale "Ajout projet"
function resetWork() {

    // Sélection des éléments HTML
    const {

        addPhotoAddFile,
        addPhotoAddTitleInput,
        addPhotoAddTitleError,
        addPhotoSelectCategoryInput,
        addPhotoValidButton,
        addPhotoValidButtonGrey,
        addPhotoValidButtonGreen

    } = selectionVariables()

    const faImageInactive = document.querySelector(`.fa-image--inactive`)
    const addPhotoButtonInactive = document.querySelector(`.addPhoto__button--inactive`)
    const addPhotoFileTypesInactive = document.querySelector(`.addPhoto__fileTypes--inactive`)
    const addPhotoPhotoActive = document.querySelector(`.addPhoto__photo--active`)

    if (faImageInactive) {
        faImageInactive.classList.remove(`fa-image--inactive`)
        faImageInactive.classList.add(`fa-image`)
    }

    if (addPhotoButtonInactive) {
        addPhotoButtonInactive.classList.remove(`addPhoto__button--inactive`)
        addPhotoButtonInactive.classList.add(`addPhoto__button`)
    }

    if (addPhotoAddFile) {
        addPhotoAddFile.value = ``
    }

    if (addPhotoFileTypesInactive) {
        addPhotoFileTypesInactive.classList.remove(`addPhoto__fileTypes--inactive`)
        addPhotoFileTypesInactive.classList.add(`addPhoto__fileTypes`)
    }

    if (addPhotoPhotoActive) {
        addPhotoPhotoActive.classList.remove(`addPhoto__photo--active`)
        addPhotoPhotoActive.classList.add(`addPhoto__photo`)
        addPhotoPhotoActive.src = ``
    }

    if (addPhotoAddTitleInput) {
        addPhotoAddTitleInput.value = ``
    }

    if (addPhotoAddTitleError) {
        addPhotoAddTitleError.style.display = `none`
    }

    if (addPhotoSelectCategoryInput) {
        addPhotoSelectCategoryInput.value = ``
    }

    if (addPhotoValidButton) {
        addPhotoValidButtonGreen.classList.remove(`addPhoto__validButton--green`)
        addPhotoValidButtonGrey.classList.add(`addPhoto__validButton--grey`)
    }
    
}

// Validation du projet ajouté
function validWork () {

    // Sélection des éléments HTML
    const {

        addPhotoArrow,
        galleryModalTitle,
        addPhotoTitle,
        galleryModal,
        addPhotoForm,
        addPhotoAddFile,
        addPhotoAddTitleInput,
        addPhotoAddTitleError,
        addPhotoSelectCategoryInput,
        galleryModalButton,
        addPhotoValidButton,
        addPhotoValidButtonGrey,
        addPhotoValidButtonGreen

    } = selectionVariables()

    if (addPhotoValidButton) {

        // Écoute au clic de .addPhoto__arrow
        addPhotoArrow.addEventListener(`click`, (event) => {

            event.preventDefault()

            resetWork()

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

    }

    // Déclaration de la fonction de vérification des conditions d'ajout de projet
    function checkConditions() {

        const imageSelected = addPhotoAddFile.files.length > 0
        const titleFilled = addPhotoAddTitleInput.value.trim() !== ``
        const categorySelected = addPhotoSelectCategoryInput.value !== ``

        if (imageSelected && titleFilled && categorySelected) {

            addPhotoValidButtonGrey.classList.remove(`addPhoto__validButton--grey`)
            addPhotoValidButtonGreen.classList.add(`addPhoto__validButton--green`)

        }

    }

    // Écoute sur les champs conditionnels image, titre et catégorie
    addPhotoAddFile.addEventListener(`change`, checkConditions)
    addPhotoAddTitleInput.addEventListener(`input`, checkConditions)
    addPhotoSelectCategoryInput.addEventListener(`change`, checkConditions)

    addPhotoValidButton.addEventListener(`click`, async () => {

        // Récupération du token d'authentification dans le localStorage
        const token = localStorage.getItem(`token`)

        // Récupération des champs
        const image = addPhotoAddFile.files[0]
        const title = addPhotoAddTitleInput.value.trim()
        const category = addPhotoSelectCategoryInput.value

        if(title === "") {

            addPhotoAddTitleError.style.display = `block`
            return

        }

        const formData = new FormData()
        formData.append(`image`, image)
        formData.append(`title`, title)
        formData.append(`category`, category)

        // Envoi de la requête d'ajout à l'API
        const response = await fetch(`http://localhost:5678/api/works`, {

            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData

        })

        const {modal} = selectionVariables()

        if (modal) {
            modal.remove()
        }

        location.reload()

    })

}

export default {
    selectionVariables,
    closeModal,
    deleteWork,
    addWork,
    addFile,
    resetWork,
    validWork
}