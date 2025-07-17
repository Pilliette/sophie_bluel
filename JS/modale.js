// Sélection de la section .overlayModal
const overlayModal = document.querySelector(`.overlayModal`)

// Déclaration d'une fonction pour afficher la modale "Galerie photo"
function afficherModale(galerie) {

    // Création des éléments HTML + attribution des éléments parents

    //@formatter:off
    const modal = document.createElement(`div`)
    modal.className = `modal`
    overlayModal.appendChild(modal)

        // const addPhotoArrow = document.createElement(`button`)
        // addPhotoArrow.className = `addPhoto__arrow`
        // modal.appendChild(addPhotoArrow)

        //     const faArrowLeft = document.createElement(`i`)
        //     faArrowLeft.className = `fa-solid fa-arrow-left`
        //     addPhotoArrow.appendChild(faArrowLeft)

        const crossModal = document.createElement(`button`)
        crossModal.className = `crossModal`
        modal.appendChild(crossModal)

            const faXmark = document.createElement(`i`)
            faXmark.className = `fa-solid fa-xmark`
            crossModal.appendChild(faXmark)

        const galleryModalTitle = document.createElement(`h3`)
        galleryModalTitle.className = `modal__title galleryModal__title`
        galleryModalTitle.textContent = `Galerie photo`
        modal.appendChild(galleryModalTitle)

        // const addPhotoTitle = document.createElement(`h3`)
        // addPhotoTitle.className = `modal__title addPhoto__title`
        // addPhotoTitle.textContent = `Ajout photo`
        // modal.appendChild(addPhotoTitle)
        
        const galleryModal = document.createElement(`div`)
        galleryModal.className = `galleryModal`
        modal.appendChild(galleryModal)

            galerie.forEach(uniqueWork => {

                const galleryModalWork = document.createElement(`div`)
                galleryModalWork.className = `galleryModal__work`
                galleryModal.appendChild(galleryModalWork)

                    const galleryModalPhoto = document.createElement(`img`)
                    galleryModalPhoto.className = `galleryModal__photo`
                    galleryModalPhoto.src = uniqueWork.imageUrl
                    galleryModalPhoto.alt = uniqueWork.title
                    galleryModalWork.appendChild(galleryModalPhoto)

                    const galleryModalTrash = document.createElement(`div`)
                    galleryModalTrash.className = `galleryModal__trash`
                    galleryModalWork.appendChild(galleryModalTrash)

                        const faTrashCan = document.createElement(`i`)
                        faTrashCan.className = `fa-solid fa-trash-can`
                        galleryModalTrash.appendChild(faTrashCan)

            })
        
        // const addPhoto = document.createElement(`div`)
        // addPhoto.className = `addPhoto`
        // modal.appendChild(addPhoto)

        //     const faImage = document.createElement(`i`)
        //     faImage.className = `fa-regular fa-image`
        //     addPhoto.appendChild(faImage)
            
        //     const addPhotoButton = document.createElement(`div`)
        //     addPhotoButton.className = `addPhoto__button`
        //     addPhoto.appendChild(addPhotoButton)

        //         const addPhotoSubmit = document.createElement(`input`)
        //         addPhotoSubmit.className = `addPhoto__submit`
        //         addPhotoSubmit.type = `submit`
        //         addPhotoSubmit.value = `+ Ajouter photo`
        //         addPhotoButton.appendChild(addPhotoSubmit)
            
        //     const addPhotoP = document.createElement(`p`)
        //     addPhotoP.textContent = `jpg, png : 4mo max`
        //     addPhoto.appendChild(addPhotoP)
            
        //     const addPhotoPhoto = document.createElement(`img`)
        //     addPhotoPhoto.className = `addPhoto__photo`
        //     addPhotoPhoto.src =
        //     addPhotoPhoto.alt =
        //     addPhoto.appendChild(addPhotoPhoto)
        
        // const addPhotoForm = document.createElement(`form`)
        // addPhotoForm.className = `addPhoto__form`
        // addPhotoForm.action = `#`
        // addPhotoForm.method = `post`
        // modal.appendChild(addPhotoForm)

        //     const addPhotoFormInputLabel = document.createElement(`label`)
        //     addPhotoFormInputLabel.htmlFor = `addPhoto__addTitle`
        //     addPhotoFormInputLabel.textContent = `Titre`
        //     addPhotoForm.appendChild(addPhotoFormInputLabel)

        //     const addPhotoAddTitle = document.createElement(`input`)
        //     addPhotoAddTitle.type = `text`
        //     addPhotoAddTitle.name = `addPhoto__addTitle`
        //     addPhotoAddTitle.id = `addPhoto__addTitle`
        //     addPhotoForm.appendChild(addPhotoAddTitle)
            
        //     const addPhotoFormSelectLabel = document.createElement(`label`)
        //     addPhotoFormSelectLabel.htmlFor = `addPhoto__selectCategory`
        //     addPhotoFormSelectLabel.textContent = `Catégorie`
        //     addPhotoForm.appendChild(addPhotoFormSelectLabel)

        //     const addPhotoSelectCategory = document.createElement(`select`)
        //     addPhotoSelectCategory.name = `addPhoto__selectCategory`
        //     addPhotoSelectCategory.id = `addPhoto__selectCategory`
        //     addPhotoForm.appendChild(addPhotoSelectCategory)
            
        //     const faChevronDown = document.createElement(`i`)
        //     faChevronDown.className = `fa-solid fa-chevron-down`
        //     addPhotoForm.appendChild(faChevronDown)
        
        const bottomModal = document.createElement(`div`)
        bottomModal.className = `bottomModal`
        modal.appendChild(bottomModal)

            const galleryModalButton = document.createElement(`div`)
            galleryModalButton.className = `modal__button galleryModal__button`
            bottomModal.appendChild(galleryModalButton)

                const galleryModalSubmit = document.createElement(`input`)
                galleryModalSubmit.className = `galleryModal__submit`
                galleryModalSubmit.type = `submit`
                galleryModalSubmit.value = `Ajouter une photo`
                galleryModalButton.appendChild(galleryModalSubmit)
                
            // const addPhotoValidButton = document.createElement(`div`)
            // addPhotoValidButton.className = `modal__button addPhoto__validButton`
            // bottomModal.appendChild(addPhotoValidButton)
            
            //     const addPhotoValidSubmit = document.createElement(`input`)
            //     addPhotoValidSubmit.className = `addPhoto__validSubmit addPhoto__validSubmit--grey addPhoto__validSubmit--green`
            //     addPhotoValidSubmit.type = `submit`
            //     addPhotoValidSubmit.value = `Valider`
            //     addPhotoValidButton.appendChild(addPhotoValidSubmit)
    //@formatter:on

}

// Affichage de la modale
// Initialisation de la modale
function initialiserModale(allWorks) {

    // Sélection des classes nécessaires à l'affichage de la modale
    const relativeBody = document.querySelector(`.relativeBody`)
    const editModeActive = document.querySelector(`.editMode__active`)

    // Écoute du clic de .editMode__active
    editModeActive.addEventListener(`click`, () => {
        
        relativeBody.classList.toggle(`relativeBody__edit`)

        // Vérification d'une création unique de la modale
        if (!document.querySelector(`.modal`)) {
            afficherModale(allWorks)
        }

        overlayModal.classList.toggle(`overlayModal__edit`)

    })

}

export default {
    overlayModal,
    afficherModale,
    initialiserModale
}