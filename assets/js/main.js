import { initFootnoteTooltips } from './modules/footnote-tooltips.js'
import { initTableOfContentsScrollspy } from './modules/table-of-contents-scrollspy.js'

/**
 * Main JavaScript initialization.
 */
const initMain = () => {
  initFootnoteTooltips()
  initTableOfContentsScrollspy()
}

// Initialize when DOM is fully loaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMain)
} else {
  // DOM already loaded, run immediately.
  initMain()
}
