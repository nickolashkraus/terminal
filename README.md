# Terminal

A minimalist Hugo theme using Tailwind CSS and vanilla JavaScript.

## Features

- Tailwind CSS
- Footnote reference tooltips
- Table of contents scrollspy
- Table of contents toggle
- Font Awesome icons

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

### Socials

Social links use [Font Awesome](https://fontawesome.com) icons and can be
configured in the site's `hugo.toml`:

```toml
[params]
  [[params.socials]]
  icon = 'fa-brands fa-github'
  name = 'GitHub'
  url = 'https://github.com/nickolashkraus/terminal'

  [[params.socials]]
  icon = 'fa-solid fa-envelope'
  name = 'Email'
  url = 'mailto:0x@nickolaskraus.io'
```

### Colors

This theme uses [Base16](https://github.com/chriskempson/base16), a framework
for defining color palettes. To override the default color scheme, create a
`colors.css` file in `assets/css`:

```css
@theme {
  /* Override */
  --color-base00: #002b36;
  --color-base01: #073642;
  --color-base02: #586e75;
  --color-base03: #657b83;
  --color-base04: #839496;
  --color-base05: #93a1a1;
  --color-base06: #eee8d5;
  --color-base07: #fdf6e3;
  --color-base08: #dc322f;
  --color-base09: #cb4b16;
  --color-base0A: #b58900;
  --color-base0B: #859900;
  --color-base0C: #2aa198;
  --color-base0D: #268bd2;
  --color-base0E: #6c71c4;
  --color-base0F: #d33682;
}
```

A collection of Base16 color schemes can be found
[here](https://github.com/monicfenga/base16-styles).

## Development

Install Node packages:

```bash
npm install
```

Run Hugo server:

```bash
cd exampleSite/
hugo server --themesDir ../..
```
