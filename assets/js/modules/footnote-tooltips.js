/**
 * Footnote reference tooltip functionality.
 *
 * Prerequisites
 * -------------
 * This module requires Tailwind CSS and the following CSS classes:
 *
 *   .footnote-tooltip {
 *     @apply invisible absolute;
 *   }
 *
 *   .has-footnote-tooltip:hover .footnote-tooltip {
 *     @apply visible z-50;
 *   }
 *
 * How does it work?
 * -----------------
 * Hugo (via Goldmark) renders footnotes references as <sup> elements with the
 * following form:
 *
 *   HTML
 *   ----
 *   <sup id="fnref:1">
 *     <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
 *   </sup>
 *
 *   Rendered
 *   --------
 *   Here's a sentence with a footnote.¹
 *
 * In order to add a tooltip to the footnote reference, the <sup> element is
 * wrapped by a <span> with the `has-footnote-tooltip` class:
 *
 *   <span class="has-footnote-tooltip">
 *     <sup id="fnref:1">
 *       <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
 *     </sup>
 *   </span>
 *
 * The content for the tooltip is retrieved from the content for the footnote
 * located in the "footnotes" section:
 *
 *   <!-- Footnote reference + tooltip with content -->
 *   <span class="has-footnote-tooltip">
 *     <sup id="fnref:1">
 *       <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
 *     </sup>
 *     <span class="footnote-tooltip">
 *       <sup>1</sup> This is the footnote content with <strong>Markdown</strong>.&nbsp;
 *     </span>
 *   </span>
 *
 *   ...
 *
 *   <!-- Footnote -->
 *   <li id="fn:1">
 *     <p>This is the footnote content with <strong>Markdown</strong>.&nbsp;
 *     <a href="#fnref:1" class="footnote-backref" role="doc-backlink">↩︎</a>
 *     </p>
 *   </li>
 */

// Export the initialization function.
export const initFootnoteTooltips = () => {
  // Footnote references (i.e., the numbered superscripts for footnotes)
  // rendered by Hugo (via Goldmark) use the "footnote-ref" class.
  const footnoteRefs = document.querySelectorAll('.footnote-ref')
  footnoteRefs.forEach(createTooltipForFootnote)
}

/**
 * Create a tooltip for a footnote reference.
 * The footnote is retrieved using the footnote reference, which contains the
 * footnote ID.
 * @param {HTMLElement} ref - The footnote reference element.
 */
const createTooltipForFootnote = (ref) => {
  // Get the footnote ID from the footnote reference.
  const footnoteId = getFootnoteIdFromRef(ref)
  // Get the footnote using the footnote ID.
  const footnote = document.getElementById(footnoteId)

  if (!footnote) return

  // Get footnote content and create the footnote reference tooltip.
  const tooltipContent = getFootnoteContent(footnote)
  appendTooltipToRef(ref, tooltipContent)
}

/**
 * Extract the footnote ID from the footnote reference element.
 *
 * Example:
 *
 *   For the given footnote reference element:
 *
 *     <sup id="fnref:1">
 *       <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
 *     </sup>
 *
 *   the footnote ID is `fn:1`.
 * @param {HTMLElement} ref - The footnote reference element.
 * @returns {string} - The footnote ID.
 */
const getFootnoteIdFromRef = (ref) => {
  const href = ref.getAttribute('href')
  return href ? href.slice(1) : null // Remove the '#' character.
}

/**
 * Extract the footnote content from the footnote element.
 * The back reference (↩︎) is removed.
 * @param {HTMLElement} footnote - The footnote element.
 * @returns {Element} - A clone of the footnote element.
 */
const getFootnoteContent = (footnote) => {
  const footnoteContent = footnote.cloneNode(true)
  const backref = footnoteContent.querySelector('.footnote-backref')

  if (backref) {
    backref.remove()
  }

  return footnoteContent
}

/**
 * Append a tooltip to the footnote reference element.
 * @param {HTMLElement} ref - The footnote reference element.
 * @param {HTMLElement} content - The tooltip content (HTML).
 */
const appendTooltipToRef = (ref, content) => {
  // Get the outer `<sup>` element. This element is wrapped by a <span> with
  // the `has-footnote-tooltip` class.
  const sup = ref.closest('sup') || ref

  // Create tooltip content element.
  const tooltipContent = document.createElement('p')

  // Extract the footnote number from the footnote reference and create a new
  // `<sup>` element.
  const footnoteNumber = ref.textContent.trim()
  const footnoteNumberSup = document.createElement('sup')
  footnoteNumberSup.textContent = footnoteNumber

  // Add footnote reference number and footnote content to the tooltip.
  tooltipContent.innerHTML =
    footnoteNumberSup.outerHTML + ' ' + content.querySelector('p').innerHTML

  // Create `has-footnote-tooltip` wrapper for the footnote reference and
  // tooltip.
  const wrapper = document.createElement('span')
  wrapper.className = 'has-footnote-tooltip'

  // Clone the original footnote reference element, so we retain its original
  // attributes.
  const refClone = sup.cloneNode(true)

  // Create the tooltip element.
  const tooltip = document.createElement('span')
  tooltip.className = 'footnote-tooltip'
  tooltip.innerHTML = tooltipContent.innerHTML

  wrapper.appendChild(refClone)
  wrapper.appendChild(tooltip)

  // Replace the original footnote reference (`<sup>`) with the wrapped
  // version.
  sup.replaceWith(wrapper)
}
