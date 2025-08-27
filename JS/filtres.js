// Création du tableau de catégories
const categories = [
    { htmlId: `tous`, id: -1, name: `Tous`, checked: true, classLabel: `bouton` },
    { htmlId: `objets`, id: 1, name: `Objets`, checked: false, classLabel: `bouton` },
    { htmlId: `appartements`, id: 2, name: `Appartements`, checked: false, classLabel: `bouton bouton--appartements` },
    { htmlId: `hotels_restaurants`, id: 3, name: `Hotels & restaurants`, checked: false, classLabel: `bouton bouton--hotels_restaurants` }
]

// Déclaration d'une fonction pour afficher les boutons filtrants
function filtrer(allWorks, chargerGalerie) {

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
        bouton__radio.id = cat.htmlId
        bouton__radio.checked = cat.checked
        bouton__radio.dataset.categoryId = cat.id

        const bouton = document.createElement(`label`)
        bouton.className = cat.classLabel
        bouton.htmlFor = cat.htmlId

        const categorie = document.createElement(`span`)
        categorie.className = `categorie`
        categorie.textContent = cat.name

        // Attribution des éléments parents
        filtres.appendChild(bouton__radio)
        filtres.appendChild(bouton)
        bouton.appendChild(categorie)

    })

    // Écoute du clic sur les boutons filtrants
    filtres.addEventListener(`click`, (event) => {

        // Conversion en entier de la valeur de categoryId
        const categoryId = parseInt(event.target.dataset.categoryId)

        // Filtre les projets par catégorie
        if (categoryId > 0) {
            const worksFiltres = allWorks.filter(uniqueWork => uniqueWork.categoryId === categoryId)

            chargerGalerie(worksFiltres)

        } else if (categoryId === -1) {
            chargerGalerie(allWorks)
        }
    })
}

// Export du fichier filtres.js complet
export default {

    categories,
    filtrer
    
}