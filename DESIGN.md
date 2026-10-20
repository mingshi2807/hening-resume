# Resume Design

## Scope and direction

The `/ming-shi` resume is an editorial refinement of the English light theme,
guided by Impeccable's distill and polish guidance. The `/` resume retains its
own existing styles. Keep Ming's supplied content, circular transparent portrait,
career history, and three-page A4 export intact.

## Typography and color

- Self-host Source Sans 3 for text and Newsreader Medium for names and headings.
  Static TTF instances preserve searchable, selectable text in Firefox PDFs.
  Font license notices live beside the files in `public/fonts/`.
- Light palette: paper `#ffffff`, canvas `#edf0f0`, ink `#293746`, body
  `#42505b`, accent `#3e6766`, rules `#d6dedf`.
- Dark palette: paper `#282a36`, canvas `#1e222c`, ink `#f0f3f3`, body
  `#c6ced6`, accent `#afcdc9`, rules `#47515e`.
- Preserve the flat `#343844` sidebar with white titles and `#d9e0e7` text.
  Scope tokens to `.ming-resume-shell`.

## Composition

Use a 30/70 sidebar-to-content ratio on A4. Align company names and roles in
plain ruled rows; emphasize VEDECOM through weight and color. Use spacing and
typography for hierarchy instead of nested cards, gradients, heading eyebrows,
icon tiles, or decorative glows. Preserve the user-requested uppercase portrait
overline. Keep page numbers as document navigation.

Below 900px, use a fluid single-column document, readable 16px main text, and
44px controls. Let sections grow naturally; never clip content to A4 height on
mobile. Printing uses exactly 210 x 297mm pages, no margins, a hidden toolbar,
light colors, and the full-resolution portrait asset.

## Review

Check desktop, tablet, and phone widths in both themes. Confirm all supplied
resume text remains present. For PDF changes, verify three A4 pages, selectable
text, embedded fonts, the portrait, and complete page footers.
