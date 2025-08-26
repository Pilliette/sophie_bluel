// Redirection vers la page d'accueil si aucun token n'est enregistré dans le localStorage
if (document.body.classList.contains(`relativeBody`) && !localStorage.getItem(`token`)) {
    window.location.href = `../index.html`
}

// Sélection de .logout
const logout = document.querySelector(`.logout`)

if (logout) {
    
    // Écoute du clic de .logout
    logout.addEventListener(`click`, (event) => {

        // Empêchement du rechargement de la page
        event.preventDefault()

        // Suppression du token d'authentification dans le localStorage
        localStorage.removeItem(`token`)

        // Redirection vers la page d'accueil
        window.location.href = `../index.html`

    })

}

export default {
    logout
}