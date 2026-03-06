/**
 * Mobile menu toggle functionality.
 *
 * Toggles the mobile navigation menu when the hamburger button is clicked.
 */
export const initMenuToggle = () => {
  const toggle = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')

  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden')
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })
}
