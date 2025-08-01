if (document.body.classList.contains(`relativeBody`) && !localStorage.getItem(`token`)) {
    window.location.href = `../index.html`
}

const logout = document.querySelector(`.logout`)

if (logout) {
    
    logout.addEventListener(`click`, (event) => {

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