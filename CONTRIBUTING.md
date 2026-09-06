# Contributing to SKID Security Research

Developer-focused reference for the documentation site.

## Architecture

The site is built with VitePress and deployed to GitHub Pages via Actions. All content lives in markdown files under numbered section directories. The sidebar, nav, and build pipeline are configured in `.vitepress/config.ts`.

### Key Design Decisions

- **Local search** (no third-party search API)
- **Clean URLs** enabled (`/01-core-research/` not `/01-core-research.html`)
- **Auto-generated sidebar** via `vitepress-sidebar` — new files appear automatically
- **Line numbers** enabled on code blocks
- **Dual theme** — github-light/github-dark for code blocks

## Commands

All commands run from the **repository root**, not from `docs/`:

```bash
npm install             # First time setup
npm run docs:dev        # Dev server at localhost:5173
npm run docs:build      # Production build → docs/.vitepress/dist/
npm run docs:preview    # Preview production build locally
```

## Adding Content

1. Create a `.md` file in the appropriate section directory
2. Add YAML frontmatter at the top:

```markdown
---
title: Document Title
description: One-sentence summary for SEO and link previews
---
```

3. The sidebar auto-populates via `vitepress-sidebar`. No manual sidebar config needed.
4. Update the section's `index.md` with a link and one-line description of the new document.

### Section Index Files

Each numbered directory has an `index.md` that serves as its overview page. These are listed in the sidebar and should be kept current when files are added or removed. They should describe the nature of the section's content and link to each document with a one-sentence summary.

## Sidebar Auto-Generation

`vitepress-sidebar` scans the `docs/` directory. Settings in `.vitepress/config.ts`:

- `collapsed: false` — all sections expanded by default
- `capitalizeFirst: true` — titles derived from filenames get capitalization
- `includeRootIndexFile: true` — section `index.md` files appear in sidebar
- `useTitleFromFrontmatter: true` — frontmatter `title` overrides filename-derived title

Files appear in alphabetical order within each section. The `01-` through `07-` prefixes on directories ensure correct ordering.

## Internal Linking

Use relative paths without `.html` or `.md` extensions:

```markdown
[Good link](../01-core-research/smartid-security-analysis)
[Bad link](../01-core-research/smartid-security-analysis.html)
```

The `cleanUrls: true` config strips `.html` from generated URLs.

## Frontmatter Conventions

| Field | Purpose | Required |
|-------|---------|----------|
| `title` | Page title in sidebar and `<title>` tag | Recommended |
| `description` | SEO description and link preview snippet | Recommended |
| `layout: home` | Only on `index.md` (the root landing page) | Special case only |

Without frontmatter, the sidebar derives titles from the first `#` heading in the document.

## Deployment Pipeline

`.github/workflows/deploy.yml` handles:

1. Checkout on push to `master`
2. Node.js 20 setup with npm caching
3. `npm ci` for dependency install
4. `npm run docs:build` for production build
5. Artifact upload of `docs/.vitepress/dist/`
6. GitHub Pages deployment

No manual deployment steps needed. The site updates automatically on merge.

## Static Assets

Place images, favicons, and logos in `docs/public/`. They're served at the site root in production:

- `docs/public/logo.svg` → `/skid-security-research/logo.svg`
- `docs/public/favicon.ico` → `/skid-security-research/favicon.ico`

The `base: '/skid-security-research'` config is prepended automatically.

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| vitepress | ^1.6.0 | Static site generator |
| vue | ^3.5.0 | Runtime framework (VitePress dependency) |
| vite | ^6.0.0 | Build tool (VitePress dependency) |
| vitepress-sidebar | ^1.33.1 | Auto-generated sidebar from file structure |
| vite-plugin-compression2 | ^1.3.0 | Brotli/gzip compression for production assets |
| typescript | ^5 | Type-checking for config files |

Renovate handles automated dependency updates on a monthly schedule (see root `renovate.json`).
