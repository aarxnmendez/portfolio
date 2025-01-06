document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de cambio de tema
    const themeToggle = document.getElementById('theme-toggle')
    // Obtener el icono del botón
    const themeIcon = themeToggle.querySelector('.material-icons-round')
    // Obtener el logo
    const logo = document.querySelector('.logo')

    // Evento de clic para cambiar el tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')

        // Cambiar el icono según el tema
        if (document.body.classList.contains('light-mode')) {
            themeIcon.textContent = 'dark_mode'
            logo.src = 'images/logo_dark.png'
        } else {
            themeIcon.textContent = 'light_mode'
            logo.src = 'images/logo.png'
        }
    })

    // Comprobar el tema inicial al cargar la página
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = 'dark_mode'
        logo.src = 'images/logo_dark.png'
    } else {
        themeIcon.textContent = 'light_mode'
        logo.src = 'images/logo.png'
    }
})