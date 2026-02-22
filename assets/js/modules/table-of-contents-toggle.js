/**
 * Table of contents toggle functionality.
 *
 * Prerequisites
 * -------------
 * This module requires Tailwind CSS and HTML elements with the following
 * classes:
 *
 *   <div class="hidden lg:col-span-2 lg:block togglable-toc">
 *     ...
 *   </div>
 *   <div class="hidden lg:col-span-1 lg:block togglable-empty"></div>
 *   <div class="col-span-12 lg:col-span-9 togglable-main">
 *
 * How does it work?
 * -----------------
 * Hugo renders a table of contents when the {{ .TableOfContents }} template
 * code is used. See: https://gohugo.io/methods/page/tableofcontents/.
 *
 * This module adds the ability to toggle the TOC visibility using CTRL + n.
 */

/**
 * Toggle the visibility of the table of contents.
 * @param {Event|null} event - The keyboard or click event (null for programmatic calls).
 * @param {HTMLElement} tocElement - The table of contents element.
 * @param {HTMLElement} emptyElement - The empty spacer column element.
 * @param {HTMLElement} mainElement - The main content element.
 * @param {Object} state - An object containing the current visibility state.
 * @param {boolean} state.isVisible - Current visibility state of the TOC.
 */
const toggleTOC = (event, tocElement, emptyElement, mainElement, state) => {
  // Handle keyboard events - only respond to CTRL + n.
  if (event && event.type === 'keydown') {
    if (!event.ctrlKey || event.key !== 'n') {
      return // Exit early if not the correct key combination.
    }
    event.preventDefault() // Prevent browser's default action.
  }

  if (state.isVisible) {
    // Hide TOC.
    tocElement.classList.remove('lg:block')
    tocElement.classList.add('lg:hidden')
    emptyElement.classList.remove('lg:block')
    emptyElement.classList.add('lg:hidden')
    mainElement.className = 'col-span-12 togglable-main'
  } else {
    // Show TOC.
    tocElement.classList.add('lg:block')
    tocElement.classList.remove('lg:hidden')
    emptyElement.classList.add('lg:block')
    emptyElement.classList.remove('lg:hidden')
    mainElement.className = 'col-span-12 lg:col-span-9 togglable-main'
  }

  // Update the state
  state.isVisible = !state.isVisible
}

// Export the initialization function.
export const initTableOfContentsToggle = () => {
  // The table of contents rendered by Hugo uses the "#TableOfContents" ID.
  const tocExists = document.querySelector('#TableOfContents')

  // Exit early if no TOC is found.
  if (!tocExists) return

  // Get the required elements.
  const tocColumn = document.querySelector('div.togglable-toc')
  const emptyColumn = document.querySelector('div.togglable-empty')
  const mainColumn = document.querySelector('.togglable-main')

  // Exit early if required elements are not found.
  if (!tocColumn || !emptyColumn || !mainColumn) {
    console.warn(
      "table-of-contents-toggle.js: Required elements with 'togglable-*' classes not found"
    )
    return
  }

  // Initialize state (start with TOC visible).
  const state = { isVisible: true }

  // Set up toggle in order to toggle table of contents when CTRL + n is
  // pressed.
  document.addEventListener('keydown', (event) => {
    toggleTOC(event, tocColumn, emptyColumn, mainColumn, state)
  })
}
