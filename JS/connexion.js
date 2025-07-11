// Sélection du form .loginBloc
const loginBloc = document.querySelector(`.loginBloc`)

// Écoute du form au clic du submit
loginBloc.addEventListener(`submit`, async (event) => {

    // Empêchement du rechargement de la page
    event.preventDefault()

    // Récupération de l'email et du mot de passe
    const email = document.getElementById(`email`).value
    const password = document.getElementById(`password`).value

    // Tentative d'authentification
    try {

        // Envoi de la requête d'authentification à l'API
        const reponse = await fetch(`http://localhost:5678/api/users/login`, {

            method: `post`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        // Création d'une erreur le cas échéant + arrêt de la requête + redirection jusqu'au catch
        if (!reponse.ok) {
            throw new Error()
        }

        // Conversion de la réponse en JSON
        const data = await reponse.json()

        // Stockage du token d'authentification dans le localStorage
        localStorage.setItem(`token`, data.token)

        // Redirection vers la page d'accueil (mode éditeur)
        window.location.href = `../pages/edit_mode.html`

    // Interception de l'erreur + modification du style de .errorMessage pour affiche du message d'erreur
    } catch (error) {
        document.querySelector(`.errorMessage`).style.display = `block`
    }
})