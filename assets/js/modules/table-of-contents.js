/**
 * Table of contents scrollspy functionality.
 *
 * Prerequisites
 * -------------
 * This module requires Tailwind CSS and the following CSS classes:
 *
 *   #TableOfContents a {
 *     @apply opacity-50 transition-opacity duration-200 hover:opacity-100;
 *   }
 *
 *   #TableOfContents a.active {
 *     @apply opacity-100;
 *   }
 *
 * How does it work?
 * -----------------
 * Hugo renders a table of contents when the {{ .TableOfContents }} template
 * code is used. See: https://gohugo.io/methods/page/tableofcontents/.
 *
 * The table of contents has the following form:
 *
 *   HTML
 *   ----
 *   <nav id="TableOfContents">
 *     <ul>
 *       <li><a href="#heading-1"></a>Heading 1</li>
 *       <li><a href="#heading-2"></a>Heading 2</li>
 *       <li><a href="#heading-3"></a>Heading 3</li>
 *     </ul>
 *   </nav>
 *
 *   Rendered
 *   --------
 *   Heading 1
 *   Heading 2
 *   Heading 3
 *
 * First, all the links (anchor elements) are retrieved from the table of
 * contents:
 *
 *   <a href="#heading-1">
 *   <a href="#heading-2">
 *   <a href="#heading-3">
 *
 * Using the `href` from the links, each heading element in the document is
 * retrieved:
 *
 *   <h2 id="heading-1">
 *   <h2 id="heading-2">
 *   <h2 id="heading-3">
 *
 * For each heading element, a click event listener is added, which scrolls to
 * the heading when the corresponding link in the table of contents is clicked.
 *
 * Finally, a scroll event listener is added, which highlights the link in the
 * table of contents that is currently in view.
 */

// Export the initialization function.
export const initTableOfContents = () => {
  // The table of contents rendered by Hugo uses the "#TableOfContents" ID.
  // An anchor element (<a>) is used for each heading.
  const tocLinks = document.querySelectorAll('#TableOfContents a')

  // Exit early if no TOC links are found.
  if (!tocLinks.length) return

  // Extract the heading elements that correspond to the TOC links.
  const headings = getHeadingsFromTocLinks(tocLinks)

  // Set up click event listeners for TOC links.
  setupTocClickHandlers(tocLinks)

  // Set up scrollspy in order to highlight links in the table of contents when
  // the corresponding heading is in view.
  window.addEventListener('scroll', function () {
    highlightActiveTocItem(tocLinks, headings)
  })

  // Set initial highlight.
  highlightActiveTocItem(tocLinks, headings)
}

/**
 * Retrieve all heading elements referenced in the table of contents.
 * The heading elements represent the actual headings in the document:
 *
 * Example:
 *
 *   <h2 id="heading-1">
 *   <h2 id="heading-2">
 *   <h2 id="heading-3">
 *
 * @param {NodeList} tocLinks - All links in the table of contents.
 * @returns {Array} - Array of heading elements.
 */
const getHeadingsFromTocLinks = (tocLinks) => {
  // Use a `Set` to collect unique heading IDs.
  const headingIds = new Set()

  tocLinks.forEach((link) => {
    const href = link.getAttribute('href')
    if (href && href.startsWith('#')) {
      headingIds.add(href.slice(1))
    }
  })

  // Convert the `Set` to an `Array` and get the heading elements.
  return Array.from(headingIds)
    .map((id) => document.getElementById(id))
    .filter(Boolean) // Remove null/undefined values.
}

/**
 * Set up click event handlers for TOC links.
 * When a heading in the table of contents is clicked, the view is
 * automatically scrolled to the corresponding heading.
 * @param {NodeList} tocLinks - All links in the table of contents.
 */
const setupTocClickHandlers = (tocLinks) => {
  tocLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // Remove active class from all links.
      tocLinks.forEach((l) => l.classList.remove('active'))

      // Add active class to clicked link.
      this.classList.add('active')

      // Enable smooth scrolling.
      e.preventDefault()
      const targetId = this.getAttribute('href').slice(1)
      const targetElement = document.getElementById(targetId)

      // Scroll to heading in the document.
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 10,
          behavior: 'smooth',
        })
      }
    })
  })
}

/**
 * Highlight the TOC link that corresponds to the heading currently in view.
 * @param {NodeList} tocLinks - All links in the table of contents.
 * @param {Array} headings - All heading elements referenced in the TOC.
 */
const highlightActiveTocItem = (tocLinks, headings) => {
  // Determine which heading is currently in view.
  let currentHeadingId = null

  // The next heading only supercedes the previous heading if the top of the
  // previous heading is negative (i.e., above the viewport) and the current
  // heading is within 25% of the top of the window. This has the effect of
  // only updating the TOC link when the next heading supercedes the previous
  // heading.
  let prevOffsetTop = Infinity
  headings.forEach((heading) => {
    const rect = heading.getBoundingClientRect()
    const offsetTop = rect.top

    if (!currentHeadingId || (prevOffsetTop < 0 && offsetTop <= window.innerHeight * 0.25)) {
      currentHeadingId = heading.id
    }

    prevOffsetTop = offsetTop
  })

  // Check if the page is scrollable.
  const isPageScrollable = document.body.scrollHeight > window.innerHeight

  // Use the last heading if the page is scrollable and scrolled to the bottom.
  if (isPageScrollable && window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
    currentHeadingId = headings[headings.length - 1].id
  } else {
    // Use the first heading if page is not scrollable.
    currentHeadingId = headings[0].id
  }

  // Remove active class from all links.
  tocLinks.forEach((link) => {
    link.classList.remove('active')
  })

  // Add active class to current heading's TOC link(s).
  if (currentHeadingId) {
    document.querySelectorAll(`#TableOfContents a[href="#${currentHeadingId}"]`).forEach((link) => {
      link.classList.add('active')
    })
  }
}
