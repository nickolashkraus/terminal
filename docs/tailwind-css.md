# Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom
designs without leaving your HTML. Rather than providing pre-designed
components like many traditional frameworks, Tailwind gives you low-level
utility classes that let you build completely custom designs.

## Adding Tailwind CSS to Hugo

Support for Tailwind CSS was added in [Hugo v0.128.0][] with the addition of
[`css.TailwindCSS`][] function, which processes a given resource with the
Tailwind CSS CLI.

### Step 1: Install the Tailwind CSS CLI

```bash
npm install --save-dev tailwindcss @tailwindcss/cli
```

The Tailwind CSS CLI runs Tailwind CSS, which works by scanning all of your
HTML files, JavaScript components, and any other templates for class names,
generating the corresponding styles and then writing them to a static CSS file.

`css.TailwindCSS` uses the Tailwind CSS CLI under the hood.

### Step 2: Configure Hugo

`hugo.toml`

```toml
[build]
  [build.buildStats]
    enable = true
  [[build.cachebusters]]
    source = 'assets/notwatching/hugo_stats\.json'
    target = 'css'

[module]
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.mounts]]
    disableWatch = true
    source = 'hugo_stats.json'
    target = 'assets/notwatching/hugo_stats.json'
```

This configuration enables key optimizations when using Tailwind CSS with Hugo:

1. Hugo generates a `hugo_stats.json` file (used by Tailwind CSS for PurgeCSS).
2. Enables cache busting when changes to the CSS are made via Tailwind.

### Step 3: Create a main CSS file and import Tailwind CSS

`assets/css/main.css`

```css
/* Include Tailwind CSS */
@import 'tailwindcss';

/* Facilitate PurgeCSS integration */
@source 'hugo_stats.json';
```

### Step 4: Create a partial template to process the CSS

`layouts/partials/head/css.html`

```html
<!--
  Process CSS using the Tailwind CLI tool (css.TailwindCSS).
-->
{{ with (templates.Defer (dict "key" "global")) }}
  {{ with resources.Get "css/main.css" }}
    {{ $opts := dict
      "minify" hugo.IsProduction
      "inlineImports" true
    }}
    {{ with . | css.TailwindCSS $opts }}
      {{ if hugo.IsProduction }}
        {{ with . | fingerprint }}
          <link
            rel="stylesheet"
            href="{{ .RelPermalink }}"
            integrity="{{ .Data.Integrity }}"
            crossorigin="anonymous"
          />
        {{ end }}
      {{ else }}
        <link rel="stylesheet" href="{{ .RelPermalink }}" />
      {{ end }}
    {{ end }}
  {{ end }}
{{ end }}
```

[Hugo v0.128.0]: https://github.com/gohugoio/hugo/releases/tag/v0.128.0
[`css.TailwindCSS`]: https://gohugo.io/functions/css/tailwindcss/
