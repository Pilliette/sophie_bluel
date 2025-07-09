// Sélection du form .loginBloc
const loginBloc = document.querySelector(`.loginBloc`)

// Écoute du form au clic du submit
loginBloc.addEventListener(`submit`, (event) => {

    // Empêchement du rechargement de la page
    event.preventDefault()

    // Récupération de l'email et du mot de passe
    const email = document.getElementById(`email`).value
    const password = document.getElementById(`password`).value

    // Envoi de la requête d'authentification à l'API
    fetch(`http://localhost:5678/api/users/login`, {

        method: `post`,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    // Redirection vers la page d'accueil (mode éditeur)
    window.location.href = `../index.html` // À corriger après la création de la page d'édition

    // Stockage du token d'authentification dans le localStorage
    localStorage.setItem(`token`, data.token)
})