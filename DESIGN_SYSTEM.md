# Methodica — Design System

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`, exposed as CSS variables.

| Family            | CSS variable        | Weights used | Role                                         |
| ----------------- | ------------------- | ------------ | -------------------------------------------- |
| **Fraunces**      | `--font-fraunces`   | 200, 800, 900 | Display / serif — headlines, section titles |
| **JetBrains Mono** | `--font-jetbrains` | 400, 700      | UI / body — labels, paragraphs, buttons     |

Usage:

```css
font-family: var(--font-fraunces), "Fraunces", serif;
font-family: var(--font-jetbrains), "JetBrains Mono", monospace;
```

## Colors

### Brand

| Token   | Value     | Use                                                |
| ------- | --------- | -------------------------------------------------- |
| Black   | `#111111` | Primary text, dark sections, primary buttons       |
| White   | `#ffffff` | Page background, text on dark                      |
| Cream   | `#f0eee9` | Accent dot, primary button background, footer pop  |

### Functional

| Token        | Value      | Use                          |
| ------------ | ---------- | ---------------------------- |
| Error red    | `#c0392b`  | Form error message           |
| WhatsApp green | `#25d366` | Floating WhatsApp button only |

### Neutrals (black with alpha)

| Alpha | Hex          | rgba                     | Typical use                    |
| ----- | ------------ | ------------------------ | ------------------------------ |
| 0.06  | `#1111110F`  | `rgba(17,17,17,0.06)`    | Service number (faint)         |
| 0.12  | `#1111111F`  | `rgba(17,17,17,0.12)`    | Light dividers / hairlines     |
| 0.15  | `#11111126`  | `rgba(17,17,17,0.15)`    | Hero divider, rule--light      |
| 0.45  | `#11111173`  | `rgba(17,17,17,0.45)`    | Hero sub paragraph             |
| 0.55  | `#1111118C`  | `rgba(17,17,17,0.55)`    | Hero line-2 (muted headline)   |
| 0.65  | `#111111A6`  | `rgba(17,17,17,0.65)`    | Service / body descriptions    |
| 0.70  | `#111111B3`  | `rgba(17,17,17,0.70)`    | Section eyebrow labels         |

### Neutrals (white with alpha)

| Alpha | Hex          | rgba                        | Typical use                  |
| ----- | ------------ | --------------------------- | ---------------------------- |
| 0.20  | `#FFFFFF33`  | `rgba(255,255,255,0.20)`    | rule--white divider          |
| 0.50  | `#FFFFFF80`  | `rgba(255,255,255,0.50)`    | Footer secondary text        |
| 0.60  | `#FFFFFF99`  | `rgba(255,255,255,0.60)`    | Footer link / copy           |
| 0.95  | `#FFFFFFF2`  | `rgba(255,255,255,0.95)`    | Sticky nav background        |
