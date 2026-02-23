# Search Engine Optimization (SEO)

Search Engine Optimization (SEO) is the process of configuring a website to
increase its visibility and ranking through search engine results pages
(SERPs). A strategy for improving the SEO for a website is through the
intelligent use of meta tags.

The full file for meta tags for this theme can be found [here][meta.html].

## What are SEO meta tags?

SEO meta tags are HTML elements that can be added to the `<head>` of webpages
that provide information about the page for search engines and other
applications. They do not appear on the visible webpage, but influence how your
content is discovered, displayed, and ranked.

## How to use SEO meta tags effectively?

The core set of SEO meta tags fall into two categories:
- **Essential**: Directly impact search engine performance.
- **Social**: Optimize social media sharing and appearance.

## Essential

### Title

The title tag (`<title>`) is the most important meta tag for SEO and is used
for the clickable link in search results. The title should be unique, less than
60 characters[^1], and include primary keywords related to the content.

Typically, the home page uses the site title (e.g., Paperwhite) and other pages
such as articles use the page title followed by the site title (e.g., Search
Engine Optimization (SEO) | Paperwhite).

**Example**

```html
<title>Paperwhite</title>
```

```html
<title>Search Engine Optimization (SEO) | Paperwhite</title>
```

The title tag is set using the following:

```html
{{ $title := cond .IsHome site.Title (printf "%s | %s" .Title site.Title) }}
<title>{{ $title }}</title>
```

Therefore, it is **critical** that you set the site title and title for each
page:

`hugo.toml`

```toml
title = 'Paperwhite'
```

`search-engine-optimization.md`

```markdown
+++
title = 'Search Engine Optimization (SEO)'
+++
```

### Meta Description

The meta description tag is the second most important meta tag for SEO and is
used for the text below the title in search results. A description should be
150-160 characters[^2] and use relevant keywords, but should avoid keyword
stuffing.

**NOTE**: Keyword stuffing is now penalized by search engines and will hurt
SEO.

**Example**

```html
<meta
  name="description"
  content="Search Engine Optimization (SEO) is the process of configuring
  a website to increase its visibility and ranking through search engine
  results pages (SERPs). A strategy for improving the SEO for a website is
  through the intelligent use of meta tags."
/>
```

The meta description is set using the following:

```html
{{ $description := trim (or .Page.Description site.Params.description) " \n\r\t" }}
<meta name="description" content="{{ $description }}" />
```

Therefore, it is **important** that you set the site description and
description for each page:

`hugo.toml`

```toml
[params]

  description = '''
  A minimalist Hugo theme using Tailwind CSS and vanilla JavaScript
  '''
```

`search-engine-optimization.md`

```markdown
+++
description = '''
Search Engine Optimization (SEO) is the process of configuring a website to
increase its visibility and ranking through search engine results pages
(SERPs). A strategy for improving the SEO for a website is through the
intelligent use of meta tags.
'''
+++
```

### Meta Viewport

The meta viewport tag controls how a webpage is displayed on mobile devices by
giving the browser instructions about the page's dimensions and scaling
behavior. If the meta viewport is not set properly, mobile browsers will assume
your page is designed for desktop (typically 980px wide) and shrink the entire
page to fit the mobile screen. Users will see a tiny, zoomed-out version that
is hard to read and will have to pinch and zoom to interact with content.

This has an indirect impact on ranking, since Google primarily uses the mobile
version of pages for indexing and ranking. Google also uses mobile usability
through user behavior (bounce rate, lower time on site, and poor user
engagement) as a ranking factor.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Canonical

The canonical tag tells search engines which version of a page is the
"official" or preferred one when multiple URLs contain identical or very
similar content. This prevents duplicate content issues that can hurt SEO.

```html
<link rel="canonical" href="https://example.com/docs/search-engine-optimization/">
```

## Social

While not directly impacting ranking factors, these meta tags improve social
sharing and can drive traffic, as they make links look aesthetic on social
media platforms.

### Open Graph

[Open Graph][Open Graph] meta tags control how your content appears when shared
on social media platforms like Facebook, LinkedIn, WhatsApp, etc. These meta
tags follow the [Open Graph protocol][Open Graph].

### The Open Graph protocol

The Open Graph protocol enables any webpage to become a rich object in
a social graph. For instance, it is used on Facebook to allow any webpage to
have the same functionality as any other object on Facebook.

To turn webpages into graph objects, basic metadata needs to be added to the
webpage using additional `<meta>` tags in the `<head>` HTML element.

The four required properties for every page are:

- `og:title`
- `og:type`
- `og:image`
- `og:url`

The following properties are optional for any object and are generally
recommended:

- `og:audio`
- `og:description`
- `og:determiner`
- `og:locale`
- `og:locale:alternate`
- `og:site_name`
- `og:video`

### Open Graph Tags

**`og:title`**  
The title of the object as it should appear within the graph. For example, this
is the title that appears in social media posts. This is often different from
the title tag, as it does not need to include the brand name (e.g., Title
| Site Title) and should be optimized for a sharing context.

**NOTE**: The title for your homepage should typically be your brand/company
name or brand name + tagline. You should avoid generic titles like "Home" or
"Welcome".

**`og:type`**  
The type of the object/content (e.g., article, website, product, etc.), which
allows platforms to display different types of content appropriately. Depending
on the type specified, other properties may also be required.

**`og:image`**  
The image to accompany a social post. This must be an absolute URL to an image.
The image should be around 1200x630 pixels and under 5MB for reliable
loading.[^3]

**`og:url`**  
The canonical URL for the content, similar to the canonical tag. It is the
canonical URL of the object that will be used as its permanent ID in the graph.

**`og:description`**  
The preview text that appears below the title in social shares. Descriptions
should be around 150-300 characters, but varies by platform.

**`og:locale`**  
The locale these tags are marked up in. Of the format `language_TERRITORY`.
Default is `en_US`. This helps social platforms display content appropriately
for different audiences.

**`og:site_name`**  
The website's name/brand that appears alongside the title. Creates a "Title
| Site Name" format in social posts, helping with brand recognition. If the
object is part of a larger website, the name should be for the overall site.

#### Twitter (X)

[Twitter tags][Optimize Tweets with X Cards] for Twitter Cards (now X Cards)
are similar to Open Graph tags, but are specific to how content appears when
shared on Twitter/X.

The most important tags specific to Twitter are:
- `twitter:card`
- `twitter:site`
- `twitter:creator`

For `twitter:title`, `twitter:description`, and `twitter:image`, the Open Graph
equivalents are used as fallbacks.

### Twitter Tags

**`twitter:card`**  

For static content, this tag has two options:

- `summary`: Used for a variety of web content and gives the reader a preview
   of the content.
- `summary_large_image`: Displays a large, full-width prominent image alongside
   a tweet. It is designed to give the reader a rich photo experience.

**`twitter:site`**  
@username of the website

**`twitter:creator`**  
@username of the content creator

## Structured Data (JSON-LD)

[JSON-LD][JSON-LD] (JavaScript Object Notation for Linked Data) structured data
is a powerful SEO technique that helps search engines better understand and
display your website content. It's Google's preferred format for structured
data implementation. As search engines become more sophisticated, structured
data becomes increasingly important for content discovery and understanding.

The JSON-LD configuration for this theme supports `website` and `article`
schemas.

## Setting individual meta tags

This theme provides intelligent configuration of SEO meta tags that adhere to
best practices with sensible fallbacks. However, there are cases where meta
tags need to be tailored to specific content. Therefore, this theme exposes
configurable meta tags. These include:

| **Field**         | **Description**                         | **Fallback**                      | **Default** |
| ----------------- | --------------------------------------- | --------------------------------- | ----------- |
| `author`          | Used for JSON-LD `author` property      | `site.Params.author`              | `None`      |
| `image`           | Used for `og:image` and `twitter:image` | `site.Params.seo.image`           | `logo.png`  |
| `twitter_card`    | Used for `twitter:card`                 | `site.Params.seo.twitter_card`    | `summary`   |
| `twitter_site`    | Used for `twitter:site`                 | `site.Params.seo.twitter_site`    | `None`      |
| `twitter_creator` | Used for `twitter:creator`              | `site.Params.seo.twitter_creator` | `None`      |

These can be set in the frontmatter for individual content files:

```toml
+++
author = 'Nickolas Kraus'
image = 'path/to/image.png'
twitter_card = 'summary_large_image'
twitter_site = '@nickolashkraus'
twitter_creator = '@nickolashkraus'
+++
```

Or in the site configuration:

```toml
[params]

  author = 'Nickolas Kraus'

  [params.seo]
    image = 'logo.png'
    twitter_card = 'summary'
    twitter_site = '@nickolashkraus'
    twitter_creator = '@nickolashkraus'
```

## Tools

**[Facebook Sharing Debugger][Facebook Sharing Debugger]**  
The Sharing Debugger lets you preview how your content will look when it's
shared to Facebook and debug any issues with your Open Graph tags.

**[Twitter Card Validator][Twitter Card Validator]**  
The Twitter Card Validator shows a preview of how tweets will look, validating
the card type and required fields.

**[LinkedIn Post Inspector][LinkedIn Post Inspector]**  
Similar to the Facebook Sharing Debugger, the LinkedIn Post Inspector helps you
view and optimize content for LinkedIn.

**[Meta Tags Toolkit][Meta Tags Toolkit]**  
A comprehensive, all-in-one tool for meta tag analysis. It shows previews for
multiple platforms and tests Google search appearance.

**[Social Share Preview][Social Share Preview]**  
All-in-one social media preview tool, which tests Facebook, Twitter, LinkedIn
simultaneously and shows Google search preview.

**[Google Search Console][Google Search Console]**  
Google Search Console tools and reports help you measure your site's search
traffic and performance, fix issues, and make your site shine in Google Search
results.

**[Schema Markup Validator][Schema Markup Validator]**  
Checks whether your structured data is correctly formatted and follows
[Schema.org](https://schema.org) standards.

[meta.html]: https://github.com/nickolashkraus/paperwhite/blob/master/layouts/_partials/head/meta.html
[Open Graph]: https://ogp.me
[Optimize Tweets with X Cards]: https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards
[JSON-LD]: https://json-ld.org
[Facebook Sharing Debugger]: https://developers.facebook.com/tools/debug
[Twitter Card Validator]: https://cards-dev.x.com/validator
[LinkedIn Post Inspector]: https://www.linkedin.com/post-inspector
[Meta Tags Toolkit]: https://metatags.io
[Google Search Console]: https://search.google.com/search-console/welcome
[Social Share Preview]: https://socialsharepreview.com
[Schema Markup Validator]: https://validator.schema.org

[^1]: Twitter titles have a 70 character max.
[^2]: Twitter descriptions have a 200 character max.
[^3]: For Twitter, images must be less than 5MB in size. JPG, PNG, WEBP and GIF
formats are supported. SVG is not supported.
