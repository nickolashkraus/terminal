# Footnote Reference Tooltips

This theme provides functionality for footnote reference tooltips. For example,
this is a sentence with a footnote[^1]. This functionality is provided by the
`footnote-tooltips.js` JavaScript module.

## What does this module do?

The `footnote-tooltips.js` JavaScript module adds a tooltip to footnote
references rendered by Hugo (via Goldmark). When a user hovers over the
footnote reference, a tooltip with the footnote content appears beneath the
footnote reference.

## How does it work?

Hugo (via Goldmark) renders footnotes references as `<sup>` elements with the
following form:

**HTML**

```html
<sup id="fnref:1">
  <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
</sup>
```

**Rendered**  
Here's a sentence with a footnote.¹

In order to add a tooltip to the footnote reference, the `<sup>` element is
wrapped by a `<span>` with the `has-footnote-tooltip` class:

```html
<span class="has-footnote-tooltip">
  <sup id="fnref:1">
    <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
  </sup>
</span>
```

The content for the tooltip is retrieved from the content for the footnote
located in the "footnotes" section:

```html
<!-- Footnote reference + tooltip with content -->
<span class="has-footnote-tooltip">
  <sup id="fnref:1">
    <a href="#fn:1" class="footnote-ref" role="doc-noteref">1</a>
  </sup>
  <span class="footnote-tooltip">
    <sup>1</sup> This is the footnote content with <strong>Markdown</strong>.&nbsp;
  </span>
</span>

...

<!-- Footnote -->
<li id="fn:1">
  <p>This is the footnote content with <strong>Markdown</strong>.&nbsp;
  <a href="#fnref:1" class="footnote-backref" role="doc-backlink">↩︎</a>
  </p>
</li>
```

## Prerequisites

To use this module, you'll need:

1. Tailwind CSS
2. The following CSS classes:

```css
.footnote-tooltip {
  @apply invisible absolute;
}

.has-footnote-tooltip:hover .footnote-tooltip {
  @apply visible z-50;
}
```

## Using the module

Import the module:

```javascript
import { initFootnoteTooltips } from './modules/footnote-tooltips.js'
```

Then initialize it when your page loads:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initFootnoteTooltips()
})
```

The module exports a single function, `initFootnoteTooltips()`, which creates
all footnote reference tooltips and adds them to the DOM.

[^1]:
    Luxury is more than just expensive things. it's an experience, a feeling.
    It's the whisper of silk against your skin, the subtle aroma of a hand-crafted
    perfume, the impeccable service that anticipates your every need. True luxury
    is about quality, craftsmanship, and a sense of effortless ease. It's not about
    showing off wealth, but about indulging in the finer things in life, savoring
    the details, and appreciating the artistry involved in creating something truly
    exceptional. It's a state of being, a mindful appreciation for the exquisite.
