# Markdown

Markdown is a lightweight markup language designed to make writing for the
internet easier. Created by John Gruber in 2004, it allows you to format text
without using complex HTML or word processing software.

## Basic Syntax

### Headings

Markdown supports six levels of headings, corresponding to HTML's `<h1>` -
`<h6>` elements.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Alternative syntax for heading levels 1 and 2:

```markdown
Heading 1
=========

Heading 2
---------
```

### Paragraphs

To create paragraphs (`<p>`), use a blank line to separate one or more lines of
text.

```markdown
This is the first paragraph.

This is the second paragraph.
```

This is the first paragraph.

This is the second paragraph.

### Line Breaks

To create a line break, end a line with two or more spaces, then type return.
**NOTE**: This uses a `<br>` element (line break). It does not create a new
paragraph.

```markdown
This is the first line.  
And this is the second line.
```

This is the first line.  
And this is the second line.

### Emphasis

#### Bold

```markdown
**Bold text**  
__Also bold text__
```

**Bold text**  
__Also bold text__

#### Italic

```markdown
*Italic text*  
_Also italic text_
```

*Italic text*  
_Also italic text_

#### Bold and Italic

```markdown
***Bold and italic text***  
___Also bold and italic text___  
__*Bold and italic mixed*__  
**_Also bold and italic mixed_**
```

***Bold and italic text***  
___Also bold and italic text___  
__*Bold and italic mixed*__  
**_Also bold and italic mixed_**

### Blockquotes

```markdown
> This is a blockquote.
>
> Multiple paragraphs can be included in a blockquote by adding a blank quoted
> line between them.

> Nested blockquotes
>
> > Can be created like this.
```

> This is a blockquote.
>
> Multiple paragraphs can be included in a blockquote by adding a blank quoted
> line between them.

> Nested blockquotes
>
> > Can be created like this.

### Lists

#### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
   1. Indented item
   2. Another indented item
4. Fourth item
```

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Another indented item
4. Fourth item

#### Unordered Lists

```markdown
- First item
- Second item
- Third item
  - Indented item
  - Another indented item
- Fourth item

* You can also use asterisks

+ Or plus signs
```

- First item
- Second item
- Third item
  - Indented item
  - Another indented item
- Fourth item

* You can also use asterisks

+ Or plus signs

### Code

#### Inline Code

Backticks create `<code>` elements.

```markdown
Use `code` in a sentence.
```

Use `code` in a sentence.

#### Code Blocks

Use fenced code blocks by placing triple backticks (\`\`\`) before and after
the code block:

```markdown
# This is a code block
print("Hello world!")
if (condition) {
    return true;
}
```

Alternatively, indent every line of the block by at least 4 spaces or 1 tab.

```markdown
    # This is a code block
    print("Hello world!")
    if (condition) {
        return true;
    }
```

### Horizontal Rules

Create a horizontal rule with three or more asterisks, dashes, or underscores.

```markdown
***

---

___
```

***

---

___

### Links

#### Basic Links

```markdown
[Link Text](https://www.example.com)

[Link with Title](https://www.example.com "Link Title")
```

[Link Text](https://www.example.com)

[Link with Title](https://www.example.com "Link Title")

#### URLs and Email Addresses

```markdown
<https://www.example.com>  
<email@example.com>
```

<https://www.example.com>  
<email@example.com>

#### Reference-style Links

```markdown
[Reference Link][1]

[1]: https://www.example.com "Optional Title"

[Link with reference text][reference text]

[reference text]: https://www.example.com "Optional Title"

[Link with just a reference]

[Link with just a reference]: https://www.example.com
```

[Reference Link][1]

[1]: https://www.example.com "Optional Title"

[Link with reference text][reference text]

[reference text]: https://www.example.com "Optional Title"

[Link with just a reference]

[Link with just a reference]: https://www.example.com

### Images

```markdown
![Alt Text](image.jpg)

![Alt Text with Title](image.jpg "Image Title")

[![Linked Image](image.jpg)](https://www.example.com)
```

![Alt Text](image.jpg)

![Alt Text with Title](image.jpg "Image Title")

[![Linked Image](image.jpg)](https://www.example.com)

Reference-style image syntax:

```markdown
![Alt Text][image-id]

[image-id]: image.jpg "Optional Title"
```

### Escaping Characters

Use a backslash to escape Markdown formatting characters.

```markdown
\* This is not italic \*  
\# This is not a heading  
\- This is not a list item
```

\* This is not italic \*  
\# This is not a heading  
\- This is not a list item

Characters you can escape:

```
\ backslash
` backtick
* asterisk
_ underscore
{} curly braces
[] square brackets
() parentheses
# hash mark
+ plus sign
- minus sign (hyphen)
. dot
! exclamation mark
| pipe
```

## Extended Syntax

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

You can align columns:

```markdown
| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| aligned      |    aligned     |       aligned |
```

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| aligned      |    aligned     |       aligned |

### Fenced Code Blocks

````
```
function example() {
  return "Hello, world!";
}
```
````

Adding the language identifier enables syntax highlighting:

````
```javascript
function example() {
  return "Hello, world!";
}
```
````

```javascript
function example() {
  return "Hello, world!";
}
```

### Footnotes

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote text.
```

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote text.

### Heading IDs

```markdown
### My Heading {#custom-id}
```

Then you can link to it:

```markdown
[Link to Heading](#custom-id)
```

### Definition Lists

```markdown
term
: definition
```

term
: definition

### Strikethrough

```markdown
~~Strikethrough text~~
```

~~Strikethrough text~~

### Task Lists

```markdown
- [x] Task 1 (completed)
- [ ] Task 2 (incomplete)
- [ ] Task 3 (incomplete)
```

- [x] Task 1 (completed)
- [ ] Task 2 (incomplete)
- [ ] Task 3 (incomplete)

### Emoji

Some Markdown processors support emoji shortcodes:

```markdown
:smile: :heart: :thumbsup:
```

### Highlight

Some Markdown processors support text highlighting:

```markdown
==Highlighted text==
```

### Subscript and Superscript

Some Markdown processors support subscript and superscript:

```markdown
H~2~O (subscript)

X^2^ (superscript)
```

## HTML in Markdown

Most Markdown processors allow you to use HTML elements within your Markdown:

```markdown
This is a paragraph with <span style="color:red">red text</span>.

<div class="custom-class">
  This is a div with a custom class.
</div>
```

## Markdown Editors

Some popular Markdown editors include:

- **Web-based**:
  - [StackEdit](https://stackedit.io)
  - [Dillinger](https://dillinger.io)
  - [HackMD](https://hackmd.io)
- **Desktop**:
  - [Typora](https://typora.io)
  - [Mark Text](https://marktext.app)
  - [Visual Studio Code](https://code.visualstudio.com) (with Markdown extensions)
  - [Notable](https://notable.app)
- **Mobile**:
  - [iA Writer](https://ia.net/writer)
  - [Markdown Notes](https://apps.apple.com/us/app/markdown-notes/id1471185794)
  - [JotterPad](https://play.google.com/store/apps/details?id=com.jotterpad.x)

## Markdown Flavors

There are several Markdown flavors (or extensions) with additional features:

1. **CommonMark** - A standard, unambiguous syntax specification for Markdown.
2. **GitHub Flavored Markdown (GFM)** - Used on GitHub with features like
   tables, strikethrough, and task lists.
3. **MultiMarkdown** - Adds features like tables, footnotes, and citations.
4. **Markdown Extra** - Adds features like tables, footnotes, and definition
   lists.
5. **R Markdown** - For documents that include R code and its output.
6. **Pandoc's Markdown** - A highly extensible version used by the document
   converter Pandoc.
