// Déclaration d'une variable de l'URL de l'API
const API_URL = `http://localhost:5678/api/works`

// Récupération des projets depuis l'API
const reponse = await fetch(API_URL)
const allWorks = await reponse.json()

// Déclaration d'une fonction pour charger la galerie
async function chargerGalerie(galerie) {

    // Récupération du conteneur des projets
    const parentProjet = document.querySelector(`.gallery`)

    // Vide du conteneur
    parentProjet.innerHTML = ``

    // Création d'un projet
    galerie.forEach(uniqueWork => {

        // Création des éléments HTML
        const projet = document.createElement(`figure`)
        const photo = document.createElement(`img`)
        const legende = document.createElement(`figcaption`)

        // Attribution des éléments parents
        parentProjet.appendChild(projet)
        projet.appendChild(photo)
        projet.appendChild(legende)

        // Association des éléments de allWorks aux éléments HTML
        photo.src = uniqueWork.imageUrl
        photo.alt = uniqueWork.title
        legende.textContent = uniqueWork.title

    })
}

// Export du fichier galerie.js complet
export default {
    API_URL,
    allWorks,
    chargerGalerie
}