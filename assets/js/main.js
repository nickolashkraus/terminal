import { initFootnoteTooltips } from './modules/footnote-tooltips.js'
import { initTableOfContents } from './modules/table-of-contents.js'

/**
 * Main JavaScript initialization.
 */
const initMain = () => {
  initFootnoteTooltips()
  initTableOfContents()
}

// Initialize when DOM is fully loaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMain)
} else {
  // DOM already loaded, run immediately.
  initMain()
}
