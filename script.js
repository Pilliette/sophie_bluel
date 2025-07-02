// Déclaration d'une fonction pour charger la gallerie
async function chargerGallerie() {

    // Récupération des projets depuis l'API
    const reponse = await fetch(`http://localhost:5678/api/works`)
    const works = await reponse.json()

    // Récupération du parent des <figure>
    const parentProjet = document.querySelector(`.gallery`)

    works.forEach(work => {

        // Création des éléments HTML
        const projet = document.createElement(`figure`)
        const photo = document.createElement(`img`)
        const legende = document.createElement(`figcaption`)

        // Attribution des éléments parents
        parentProjet.appendChild(projet)
        projet.appendChild(photo)
        projet.appendChild(legende)

        // Association des éléments de works aux éléments HTML
        photo.src = work.imageUrl
        photo.alt = work.title
        legende.textContent = work.title

    })
}

// Appel de la fonction pour charger la gallerie
chargerGallerie()