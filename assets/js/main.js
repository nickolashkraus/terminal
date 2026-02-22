import { initFootnoteTooltips } from './modules/footnote-tooltips.js'
import { initTableOfContentsScrollspy } from './modules/table-of-contents-scrollspy.js'
import { initTableOfContentsToggle } from './modules/table-of-contents-toggle.js'

/**
 * Main JavaScript initialization.
 */
const initMain = () => {
  initFootnoteTooltips()
  initTableOfContentsScrollspy()
  initTableOfContentsToggle()
}

// Initialize when DOM is fully loaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMain)
} else {
  // DOM already loaded, run immediately.
  initMain()
}
