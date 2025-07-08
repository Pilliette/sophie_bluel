// Déclaration d'une fonction pour afficher les boutons filtrants
function afficherFiltres() {

    // Création du tableau de catégories
    const categories = [
        { id: `tous`, label: `Tous`, checked: true, classLabel: `bouton` },
        { id: `objets`, label: `Objets`, checked: false, classLabel: `bouton` },
        { id: `appartements`, label: `Appartements`, checked: false, classLabel: `bouton bouton--appartements` },
        { id: `hotels_restaurants`, label: `Hotels & restaurants`, checked: false, classLabel: `bouton bouton--hotels_restaurants` }
    ]

    // Création de l'élément HTML <form>
    const filtres = document.createElement(`form`)
    filtres.className = `filtres`
    filtres.method = `get`
    filtres.action = ``

    // Récupération et attribution du parent du <form>
    const blocForm = document.querySelector(`.blocForm`)
    blocForm.appendChild(filtres)

    // Création des éléments HTML <input>, <label> et <span>
    categories.forEach(cat => {

        const bouton__radio = document.createElement(`input`)
        bouton__radio.className = `bouton__radio`
        bouton__radio.type = `radio`
        bouton__radio.name = `categorie`
        bouton__radio.id = cat.id
        if (cat.checked) bouton__radio.checked = true

        const bouton = document.createElement(`label`)
        bouton.className = cat.classLabel
        bouton.htmlFor = cat.id

        const categorie = document.createElement(`span`)
        categorie.className = `categorie`
        categorie.textContent = cat.label

        // Attribution des éléments parents
        filtres.appendChild(bouton__radio)
        filtres.appendChild(bouton)
        bouton.appendChild(categorie)

    })
}

// Appel de la fonction pour afficher les filtres
afficherFiltres()