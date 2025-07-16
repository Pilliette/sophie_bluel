// Déclaration d'une fonction pour afficher la modale "Galerie photo"
function afficherModale(galerie) {

    // Création des éléments HTML + attribution des éléments parents

    //@formatter:off
    const modal = document.createElement(`div`)
    modal.className = `modal`
    overlayModal.appendChild(modal)

        const addPhoto__arrow = document.createElement(`button`)
        addPhoto__arrow.className = `addPhoto__arrow`
        modal.appendChild(addPhoto__arrow)

            const fa_arrow_left = document.createElement(`i`)
            fa_arrow_left.className = `fa-solid fa-arrow-left`
            addPhoto__arrow.appendChild(fa_arrow_left)

        const crossModal = document.createElement(`button`)
        crossModal.className = `crossModal`
        modal.appendChild(crossModal)

            const fa_xmark = document.createElement(`i`)
            fa_xmark.className = `fa-solid fa-xmark`
            crossModal.appendChild(fa_xmark)

        const galleryModal__title = document.createElement(`h3`)
        galleryModal__title.className = `modal__title galleryModal__title`
        galleryModal__title.textContent = `Galerie photo`
        modal.appendChild(galleryModal__title)

        const addPhoto__title = document.createElement(`h3`)
        addPhoto__title.className = `modal__title addPhoto__title`
        addPhoto__title.textContent = `Ajout photo`
        modal.appendChild(addPhoto__title)
        
        const galleryModal = document.createElement(`div`)
        galleryModal.className = `galleryModal`
        modal.appendChild(galleryModal)

            galerie.forEach(uniqueWork => {

                const galleryModal__work = document.createElement(`div`)
                galleryModal__work.className = `galleryModal__work`
                galleryModal.appendChild(galleryModal__work)

                    const galleryModal__photo = document.createElement(`img`)
                    galleryModal__photo.className = `galleryModal__photo`
                    galleryModal__photo.src = uniqueWork.imageUrl
                    galleryModal__photo.alt = uniqueWork.title
                    galleryModal__work.appendChild(galleryModal__photo)

                    const galleryModal__trash = document.createElement(`div`)
                    galleryModal__trash.className = `galleryModal__trash`
                    galleryModal__work.appendChild(galleryModal__trash)

                        const fa_trash_can = document.createElement(`i`)
                        fa_trash_can.className = `fa-solid fa-trash-can`
                        galleryModal__trash.appendChild(fa_trash_can)

            })
        
        const addPhoto = document.createElement(`div`)
        addPhoto.className = `addPhoto`
        modal.appendChild(addPhoto)

            const fa_image = document.createElement(`i`)
            fa_image.className = `fa-regular fa-image`
            addPhoto.appendChild(fa_image)
            
            const addPhoto__button = document.createElement(`div`)
            addPhoto__button.className = `addPhoto__button`
            addPhoto.appendChild(addPhoto__button)

                const addPhoto__submit = document.createElement(`input`)
                addPhoto__submit.className = `addPhoto__submit`
                addPhoto__submit.type = `submit`
                addPhoto__submit.value = `+ Ajouter photo`
                addPhoto__button.appendChild(addPhoto__submit)
            
            const addPhoto__p = document.createElement(`p`)
            addPhoto__p.textContent = `jpg, png : 4mo max`
            addPhoto.appendChild(addPhoto__p)
            
            const addPhoto__photo = document.createElement(`img`)
            addPhoto__photo.className = `addPhoto__photo`
            // addPhoto__photo.src =
            // addPhoto__photo.alt =
            addPhoto.appendChild(addPhoto__photo)
        
        const addPhoto__form = document.createElement(`form`)
        addPhoto__form.className = `addPhoto__form`
        addPhoto__form.action = `#`
        addPhoto__form.method = `post`
        modal.appendChild(addPhoto__form)

            const addPhoto__form__inputLabel = document.createElement(`label`)
            addPhoto__form__inputLabel.htmlFor = `addPhoto__addTitle`
            addPhoto__form__inputLabel.textContent = `Titre`
            addPhoto__form.appendChild(addPhoto__form__inputLabel)

            const addPhoto__addTitle = document.createElement(`input`)
            addPhoto__addTitle.type = `text`
            addPhoto__addTitle.name = `addPhoto__addTitle`
            addPhoto__addTitle.id = `addPhoto__addTitle`
            addPhoto__form.appendChild(addPhoto__addTitle)
            
            const addPhoto__form__selectLabel = document.createElement(`label`)
            addPhoto__form__selectLabel.htmlFor = `addPhoto__selectCategory`
            addPhoto__form__selectLabel.textContent = `Catégorie`
            addPhoto__form.appendChild(addPhoto__form__selectLabel)

            const addPhoto__selectCategory = document.createElement(`select`)
            addPhoto__selectCategory.name = `addPhoto__selectCategory`
            addPhoto__selectCategory.id = `addPhoto__selectCategory`
            addPhoto__form.appendChild(addPhoto__selectCategory)
            
            const fa_chevron_down = document.createElement(`i`)
            fa_chevron_down.className = `fa-solid fa-chevron-down`
            addPhoto__form.appendChild(fa_chevron_down)
        
        const bottomModal = document.createElement(`div`)
        bottomModal.className = `bottomModal`
        modal.appendChild(bottomModal)

            const galleryModal__button = document.createElement(`div`)
            galleryModal__button.className = `modal__button galleryModal__button`
            bottomModal.appendChild(galleryModal__button)

                const galleryModal__submit = document.createElement(`input`)
                galleryModal__submit.className = `galleryModal__submit`
                galleryModal__submit.type = `submit`
                galleryModal__submit.value = `Ajouter une photo`
                galleryModal__button.appendChild(galleryModal__submit)
                
            const addPhoto__validButton = document.createElement(`div`)
            addPhoto__validButton.className = `modal__button addPhoto__validButton`
            bottomModal.appendChild(addPhoto__validButton)
            
                const addPhoto__validSubmit = document.createElement(`input`)
                addPhoto__validSubmit.className = `addPhoto__validSubmit addPhoto__validSubmit--grey addPhoto__validSubmit--green`
                addPhoto__validSubmit.type = `submit`
                addPhoto__validSubmit.value = `Valider`
                addPhoto__validButton.appendChild(addPhoto__validSubmit)
    //@formatter:on

}

// Affichage de la modale au clic de "modifier"
function editMode__active__listener(allWorks) {

    // Sélection des classes nécessaires à l'affichage de la modale
    const relativeBody = document.querySelector(`.relativeBody`)
    const editMode__active = document.querySelector(`.editMode__active`)
    const overlayModal = document.querySelector(`.overlayModal`)

    // Écoute du clic de .editMode__active + appel de la fonction pour afficher la modale
    editMode__active.addEventListener(`click`, () => {

        relativeBody.classList.toggle(`relativeBody__edit`)
        overlayModal.classList.add(`overlayModal__edit`)

        afficherModale(allWorks)

    })
}

export default {
    afficherModale,
    editMode__active__listener,
    relativeBody,
    editMode__active,
    overlayModal
}