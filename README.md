# Terminal

A minimalist Hugo theme using Tailwind CSS and vanilla JavaScript.

## Features

- Tailwind CSS
- Footnote reference tooltips
- Table of contents scrollspy
- Table of contents toggle
- Google Analytics
- Search Engine Optimization (SEO)
- Social Links (with Font Awesome icons)

## Installation

```bash
git submodule add git@github.com:nickolashkraus/terminal.git themes/terminal
```

`hugo.toml`

```toml
theme = 'terminal'
```

Install Node packages:

```bash
npm install --save-dev tailwindcss @tailwindcss/cli @tailwindcss/typography
```

## Configuration

### About

The **About** section of the right-hand aside can be configured in the site's
`hugo.toml`:

```toml
[params]
  [params.about]
  title = "Terminal"
  description = "A minimalist Hugo theme using Tailwind CSS and vanilla JavaScript."
```

### Google Analytics

To add support for Google Analytics, add the following to your configuration
file:

```toml
[services]
  [services.googleAnalytics]
    id = 'G-MEASUREMENT_ID'
```

### Search Engine Optimization (SEO)

This theme provides intelligent configuration of SEO meta tags that adhere to
best practices with sensible fallbacks.

For documentation on configuring SEO and social media appearance, see the
[documentation](docs/search-engine-optimization.md).

### Social Links (with Font Awesome icons)

Social links (with [Font Awesome](https://fontawesome.com) icons) can be added
via the configuration file.

```toml
[params]
  [[params.socials]]
    icon = 'fa-sharp fa-regular fa-envelope'
    name = 'Email'
    url = 'mailto:0x@nickolaskraus.io'

  [[params.socials]]
    icon = 'fa-brands fa-github'
    name = 'GitHub'
    url = 'https://github.com/nickolashkraus/terminal'
```

### Colors

The default colorscheme is [Gruvbox Dark][gruvbox]. To override it,
create `assets/css/colors.css` in the site root. Hugo's asset lookup
order ensures site-level files take precedence over theme-level files,
so you never need to modify theme files directly.

`assets/css/colors.css`

```css
@theme {
  /* Backgrounds */
  --color-bg: #282c34;
  --color-bg-alt: #21242b;
  --color-bg-1: #23272e;
  --color-bg-2: #3f444a;

  /* Foregrounds */
  --color-fg: #bbc2cf;
  --color-fg-1: #9ca0a4;
  --color-fg-2: #5b6268;

  /* Borders */
  --color-border: #5b6268;

  /* Accents */
  --color-accent: #ff6c6b;

  /* Markers */
  --color-marker: #3f444a;
}
```

| Variable         | Used for                                        |
| ---------------- | ----------------------------------------------- |
| `--color-bg`     | Page background, scrollbar track                |
| `--color-bg-alt` | Header background                               |
| `--color-bg-1`   | Inline code background, scrollbar thumb         |
| `--color-bg-2`   | Scrollbar thumb hover                           |
| `--color-fg`     | Primary text                                    |
| `--color-fg-1`   | Code text                                       |
| `--color-fg-2`   | Blockquote text                                 |
| `--color-border` | Tables, code blocks, tooltips, horizontal rules |
| `--color-accent` | Active links, site title hover                  |
| `--color-marker` | Heading prefixes, list markers, menu prefix     |

**NOTE**: Hugo's syntax highlighting is configured separately. Update
the `style` in the site's `hugo.toml` to match your colorscheme:

```toml
[markup]
  [markup.highlight]
    style = 'dracula'
```

A list of available styles can be found [here][chroma-styles].

[gruvbox]: https://github.com/morhetz/gruvbox
[chroma-styles]: https://xyproto.github.io/splash/docs/

## Development

Install Node packages:

```bash
npm install
```

Run Hugo server:

```bash
cd exampleSite/
hugo server --themesDir ../.. --disableFastRender
```

**NOTE**: `--disableFastRender` is required. Hugo's fast render mode
panics due to a [known bug][hugo-13492] with `templates.Defer`.

[hugo-13492]: https://github.com/gohugoio/hugo/issues/13492
