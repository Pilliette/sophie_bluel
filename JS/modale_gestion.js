// Sélection des éléments HTML communs aux fonctions
function selectionVariables (modalRoot = document.querySelector(`.modal`)) {

    if (!modalRoot) return {}

    return {

        modal : modalRoot,
        crossModal : modalRoot.querySelector(`.crossModal`),

        galleryModalTitle : modalRoot.querySelector(`.galleryModal__title`),
        galleryModal : modalRoot.querySelector(`.galleryModal`),
        galleryModalButton : modalRoot.querySelector(`.galleryModal__button`),

        addPhotoArrow : modalRoot.querySelector(`.addPhoto__arrow`),
        addPhotoTitle : modalRoot.querySelector(`.addPhoto__title`),

        addPhotoForm : modalRoot.querySelector(`.addPhoto__form`),
        faImage : modalRoot.querySelector(`.fa-image`),
        addPhotoButton : modalRoot.querySelector(`.addPhoto__button`),
        addPhotoAddFile : modalRoot.querySelector(`#addPhoto__addFile`),
        addPhotoFileTypes : modalRoot.querySelector(`.addPhoto__fileTypes`),
        addPhotoPhoto : modalRoot.querySelector(`.addPhoto__photo`),

        addPhotoAddTitleInput : modalRoot.querySelector(`.addPhoto__addTitle--input`),
        addPhotoAddTitleError : modalRoot.querySelector(`.addPhoto__addTitle--error`),
        addPhotoSelectCategoryInput : modalRoot.querySelector(`.addPhoto__selectCategory--input`),
        addPhotoValidButton : modalRoot.querySelector(`.addPhoto__validButton`),
        addPhotoValidButtonGrey : modalRoot.querySelector(`.addPhoto__validButton--grey`),
        addPhotoValidButtonGreen : modalRoot.querySelector(`.addPhoto__validButton--green`)

    }

}

// Déclaration de la variable pour supprimer ou ajouter des classes
const changeClass = (elt, removeClass, addClass) => {

    if (elt) {

        elt.classList.remove(removeClass)
        elt.classList.add(addClass)

    }

}

// Déclaration de la fonction pour fermer la modale
function closeModal (overlayModal) {

    // Sélection des éléments HTML
    const relativeBody = document.querySelector(`.relativeBody`)

    // Déclaration de la fonction de réaction au clic pour fermer la modale
    function closeClick(event) {

        const {

            modal,
            crossModal,
            addPhotoValidButtonGreen

        } = selectionVariables()
        
        if (!modal || !crossModal) return
        
        const clickOutsideModal = !modal.contains(event.target)
        const clickOnCross = crossModal.contains(event.target)
        const clickOnGreenButton = addPhotoValidButtonGreen?.contains(event.target)
        
        if (clickOnCross || clickOutsideModal || clickOnGreenButton) {
            
            event.preventDefault()

            modal.remove()
            overlayModal.classList.remove(`overlayModal__edit`)
            relativeBody.classList.remove(`relativeBody__edit`)

            // Suppression de l'écoute du clic pour fermer la modale
            relativeBody.removeEventListener(`click`, closeClick)

        }

    }

    // Écoute du clic pour fermer la modale
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

            // Arrêt de la propagation de l'évènement sur d'autres éléments du DOM
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

            // Diffusion de l'évènement du projet supprimé
            document.dispatchEvent(
                new CustomEvent(`work:deleted`, {bubbles: true})
            )

        })
    })

}

// Affichage de la modale "Ajout projet"
function addWork () {

    // Sélection des éléments HTML
    const {

        galleryModalTitle,
        galleryModal,
        galleryModalButton,

        addPhotoArrow,
        addPhotoTitle,
        
        addPhotoForm,

        addPhotoValidButton,
        addPhotoValidButtonGreen

    } = selectionVariables()

    // Écoute au clic de .galleryModal__button
    galleryModalButton.addEventListener(`click`, (event) => {

        event.preventDefault()

        // Modification des classes pour l'affichage de la modale
        changeClass(galleryModalTitle, `galleryModal__title`, `galleryModal__title--inactive`)
        changeClass(galleryModal, `galleryModal`, `galleryModal--inactive`)
        changeClass(galleryModalButton, `galleryModal__button`, `galleryModal__button--inactive`)

        changeClass(addPhotoArrow, `addPhoto__arrow`, `addPhoto__arrow--active`)
        changeClass(addPhotoTitle, `addPhoto__title`, `addPhoto__title--active`)
        
        changeClass(addPhotoForm, `addPhoto__form`, `addPhoto__form--active`)

        changeClass(addPhotoValidButton, `addPhoto__validButton`, `addPhoto__validButton--active`)
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

    // Écoute au changement du sélecteur d'image
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

        // Changement des classes pour afficher la photo
        changeClass(faImage, `fa-image`, `fa-image--inactive`)
        changeClass(addPhotoButton, `addPhoto__button`, `addPhoto__button--inactive`)
        changeClass(addPhotoFileTypes, `addPhoto__fileTypes`, `addPhoto__fileTypes--inactive`)
        changeClass(addPhotoPhoto, `addPhoto__photo`, `addPhoto__photo--active`)

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

    // Changement des classes pour reset les champs
    if (faImageInactive) {
        changeClass(faImageInactive, `fa-image--inactive`, `fa-image`)
    }

    if (addPhotoButtonInactive) {
        changeClass(addPhotoButtonInactive, `addPhoto__button--inactive`, `addPhoto__button`)
    }

    if (addPhotoAddFile) {
        addPhotoAddFile.value = ``
    }

    if (addPhotoFileTypesInactive) {
        changeClass(addPhotoFileTypesInactive, `addPhoto__fileTypes--inactive`, `addPhoto__fileTypes`)
    }

    if (addPhotoPhotoActive) {
        changeClass(addPhotoPhotoActive, `addPhoto__photo--active`, `addPhoto__photo`)
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

        galleryModalTitle,
        galleryModal,
        galleryModalButton,

        addPhotoArrow,
        addPhotoTitle,
        
        addPhotoForm,
        addPhotoAddFile,

        addPhotoAddTitleInput,
        addPhotoAddTitleError,
        addPhotoSelectCategoryInput,
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
            changeClass(galleryModalTitle, `galleryModal__title--inactive`, `galleryModal__title`)
            changeClass(galleryModal, `galleryModal--inactive`, `galleryModal`)
            changeClass(galleryModalButton, `galleryModal__button--inactive`, `galleryModal__button`)

            changeClass(addPhotoArrow, `addPhoto__arrow--active`, `addPhoto__arrow`)
            changeClass(addPhotoTitle, `addPhoto__title--active`, `addPhoto__title`)
            
            changeClass(addPhotoForm, `addPhoto__form--active`, `addPhoto__form`)

            changeClass(addPhotoValidButton, `addPhoto__validButton--active`, `addPhoto__validButton`)

        })

    }

    // Déclaration de la fonction de vérification des conditions d'ajout de projet
    function checkConditions() {

        // Vérification qu'un fichier a été sélectionné
        const imageSelected = addPhotoAddFile.files.length > 0

        // Vérification d'un champs non vide après le retrait des espaces avant et après la chaîne
        const titleFilled = addPhotoAddTitleInput.value.trim() !== ``

        // Vérification que la catégorie est sélectionnée
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

    addPhotoValidButton.addEventListener(`click`, async (event) => {

        event.preventDefault()

        // Récupération du token d'authentification dans le localStorage
        const token = localStorage.getItem(`token`)

        // Récupération des champs
        const image = addPhotoAddFile.files[0]
        const title = addPhotoAddTitleInput.value.trim()
        const category = addPhotoSelectCategoryInput.value

        // Affichage du message d'erreur en cas du champs titre vide
        if(title === "") {

            addPhotoAddTitleError.style.display = `block`
            return

        }

        // Création du formulaire d'un nouveau projet
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

        const newWork = await response.json()

        // Diffusion de l'évènement d'ajout d'un projet
        document.dispatchEvent(
            new CustomEvent(`work:added`, {

                bubbles: true,
                detail: {work: newWork}

            })
        )

        const overlayModal = document.querySelector(`.overlayModal`)
        const relativeBody = document.querySelector(`.relativeBody`)
        const {modal} = selectionVariables()

        // Fermeture de la modale
        modal?.remove()
        overlayModal?.classList.remove(`overlayModal__edit`)
        relativeBody?.classList.remove(`relativeBody__edit`)

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