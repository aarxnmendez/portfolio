document.addEventListener('DOMContentLoaded', () => {
    // Get theme toggle button
    const themeToggle = document.getElementById('theme-toggle')
    // Get button icon
    const themeIcon = themeToggle.querySelector('.material-icons-round')
    // Get logo
    const logo = document.querySelector('.logo')

    // Click event to change theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode')

        // Change icon based on theme
        if (document.body.classList.contains('light-mode')) {
            themeIcon.textContent = 'dark_mode'
            logo.src = 'images/logo_dark.png'
        } else {
            themeIcon.textContent = 'light_mode'
            logo.src = 'images/logo.png'
        }
    })

    // Check initial theme when loading the page
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = 'dark_mode'
        logo.src = 'images/logo_dark.png'
    } else {
        themeIcon.textContent = 'light_mode'
        logo.src = 'images/logo.png'
    }
})