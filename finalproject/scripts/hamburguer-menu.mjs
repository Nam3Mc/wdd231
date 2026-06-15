export default function hamburguerMenu() {
    const menuToggle = document.querySelector('#menu-toggle')
    const ownerNav = document.querySelector('#owner-nav')

    if (!menuToggle || !ownerNav) {
        return
    }

    menuToggle.addEventListener('click', () => {
        const isOpen = ownerNav.classList.toggle('show-menu')

        menuToggle.setAttribute('aria-expanded', isOpen)
        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        )

        menuToggle.textContent = isOpen ? '×' : '☰'
    })

    const navLinks = ownerNav.querySelectorAll('a')

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            ownerNav.classList.remove('show-menu')
            menuToggle.setAttribute('aria-expanded', 'false')
            menuToggle.setAttribute('aria-label', 'Open navigation menu')
            menuToggle.textContent = '☰'
        })
    })
}