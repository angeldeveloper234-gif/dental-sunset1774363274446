# Satoshi

Local WOFF2 files, weights 400, 500, 700 and 900, downloaded from the official Fontshare CSS API on 2026-10-25.

- Font: https://www.fontshare.com/fonts/satoshi
- Source API: https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap
- Publisher license: https://www.fontshare.com/licenses/itf-free-font-license

Font loading is centralized in src/theme/typography.ts. The CSS variables --font-body and --font-display in src/index.css define the roles; Tailwind utilities use those variables.

`satoshi-social-700.ttf` comes from the same official Fontshare API (2026-10-26) and is used by the social image renderer, which requires TTF/WOFF rather than WOFF2.
