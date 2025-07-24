// Déclaration d'une fonction pour afficher la modale "Galerie photo"
function creerModale(galerie, overlayModal) {

    // Création des éléments HTML + attribution des éléments parents

    // @formatter:off
    const modal = document.createElement(`div`)
    modal.className = `modal`
    overlayModal.appendChild(modal)

        const addPhotoArrow = document.createElement(`button`)
        addPhotoArrow.className = `addPhoto__arrow`
        modal.appendChild(addPhotoArrow)

            const faArrowLeft = document.createElement(`i`)
            faArrowLeft.className = `fa-solid fa-arrow-left`
            addPhotoArrow.appendChild(faArrowLeft)

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

        const addPhotoTitle = document.createElement(`h3`)
        addPhotoTitle.className = `modal__title addPhoto__title`
        addPhotoTitle.textContent = `Ajout photo`
        modal.appendChild(addPhotoTitle)
        
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
                    galleryModalTrash.dataset.id = uniqueWork.id
                    galleryModalWork.appendChild(galleryModalTrash)

                        const faTrashCan = document.createElement(`i`)
                        faTrashCan.className = `fa-solid fa-trash-can`
                        galleryModalTrash.appendChild(faTrashCan)

            })
        
        const addPhotoForm = document.createElement(`form`)
        addPhotoForm.className = `addPhoto__form`
        addPhotoForm.action = `#`
        addPhotoForm.method = `post`
        modal.appendChild(addPhotoForm)

            const addPhotoBlankBlock = document.createElement(`div`)
            addPhotoBlankBlock.className = `addPhoto__blankBlock`
            addPhotoForm.appendChild(addPhotoBlankBlock)

                const faImage = document.createElement(`i`)
                faImage.className = `fa-regular fa-image`
                addPhotoBlankBlock.appendChild(faImage)
                
                const addPhotoButton = document.createElement(`label`)
                addPhotoButton.className = `addPhoto__button`
                addPhotoButton.htmlFor = `addPhoto__addFile`
                addPhotoButton.textContent = `+ Ajouter photo`
                addPhotoBlankBlock.appendChild(addPhotoButton)

                const addPhotoAddFile = document.createElement(`input`)
                addPhotoAddFile.type = `file`
                addPhotoAddFile.name = `addPhoto__addFile`
                addPhotoAddFile.id = `addPhoto__addFile`
                addPhotoAddFile.accept = `image/*`
                addPhotoBlankBlock.appendChild(addPhotoAddFile)
                
                const addPhotoP = document.createElement(`p`)
                addPhotoP.className = `addPhoto__fileTypes`
                addPhotoP.textContent = `jpg, png : 4mo max`
                addPhotoBlankBlock.appendChild(addPhotoP)

                const addPhotoPhoto = document.createElement(`img`)
                addPhotoPhoto.className = `addPhoto__photo`
                addPhotoPhoto.src = `../assets/images/abajour-tahina.png` // <img> à dynamiser
                addPhotoPhoto.alt = ``
                addPhotoBlankBlock.appendChild(addPhotoPhoto)

            const addPhotoAddTitleLabel = document.createElement(`label`)
            addPhotoAddTitleLabel.className = `addPhoto__addTitle--label`
            addPhotoAddTitleLabel.htmlFor = `addPhoto__addTitle`
            addPhotoAddTitleLabel.textContent = `Titre`
            addPhotoForm.appendChild(addPhotoAddTitleLabel)

            const addPhotoAddTitleInput = document.createElement(`input`)
            addPhotoAddTitleInput.type = `text`
            addPhotoAddTitleInput.name = `addPhoto__addTitle`
            addPhotoAddTitleInput.id = `addPhoto__addTitle--input`
            addPhotoForm.appendChild(addPhotoAddTitleInput)
            
            const addPhotoSelectCategoryLabel = document.createElement(`label`)
            addPhotoSelectCategoryLabel.className = `addPhoto__selectCategory--label`
            addPhotoSelectCategoryLabel.htmlFor = `addPhoto__selectCategory`
            addPhotoSelectCategoryLabel.textContent = `Catégorie`
            addPhotoForm.appendChild(addPhotoSelectCategoryLabel)

            const addPhotoSelectCategoryInput = document.createElement(`select`)
            addPhotoSelectCategoryInput.name = `addPhoto__selectCategory`
            addPhotoSelectCategoryInput.id = `addPhoto__selectCategory--input`
            addPhotoForm.appendChild(addPhotoSelectCategoryInput)
            
            const faChevronDown = document.createElement(`i`)
            faChevronDown.className = `fa-solid fa-chevron-down`
            addPhotoForm.appendChild(faChevronDown)
        
        const bottomModal = document.createElement(`div`)
        bottomModal.className = `bottomModal`
        modal.appendChild(bottomModal)

            const galleryModalButton = document.createElement(`button`)
            galleryModalButton.className = `galleryModal__button`
            galleryModalButton.type = `submit`
            galleryModalButton.textContent = `Ajouter une photo`
            bottomModal.appendChild(galleryModalButton)

            const addPhotoValidButton = document.createElement(`button`)
            addPhotoValidButton.className = `addPhoto__validButton addPhoto__validButton--grey addPhoto__validButton--green`
            addPhotoValidButton.type = `submit`
            addPhotoValidButton.textContent = `Valider`
            bottomModal.appendChild(addPhotoValidButton)
    // @formatter:on

}

export default {
    creerModale
}