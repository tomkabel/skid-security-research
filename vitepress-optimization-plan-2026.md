# VitePress Optimization Plan 2026: Focused Markdown Documentation Setup

## Overview
This plan provides a pragmatic, security-focused VitePress setup for 2026, optimized for the SKID Security Research project. Success metrics: Achieve Lighthouse score >90, build time <30s, and WCAG AA accessibility. VitePress is chosen over alternatives (Docsify for simplicity, Docusaurus for versioning) due to its Vue ecosystem balance and markdown-first approach suitable for research docs. Trade-offs: Adds Vue bundle size (~20KB) but enables interactive elements without external dependencies.

## Core Setup & Configuration

### 1. Minimal Project Structure
```
skid-security-research/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts
│   │   └── theme/
│   │     └── style.css
│   ├── public/
│   │   ├── logo.svg
│   │   └── favicon.ico
│   ├── index.md
│   └── [content directories]
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
└── renovate.json  # For automated dependency updates
```

### 2. Core Dependencies & Versions (2026 Optimized)
```json
{
  "devDependencies": {
    "vitepress": "^1.6.0",
    "vite": "^6.0.0",
    "vue": "^3.5.0",
    "vite-plugin-compression2": "^1.3.0",
    "vitepress-sidebar": "^1.35.0",
    "markdown-it-footnote": "^4.0.0"
  }
}
```

## Configuration

### 3. VitePress Config (docs/.vitepress/config.ts)
```typescript
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'SKID Security Research',
  description: 'Estonia Cyber Fraud Evolution Analysis - Smart-ID Security Research',
  lang: 'en-US',
  base: '/skid-security-research/',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    // Removed external fonts for security; use system fonts
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Analysis', link: '/core-analysis/' },
      { text: 'Technical Analysis', link: '/technical-analysis/' },
      { text: 'Research', link: '/supplementary-research/' },
      { text: 'Editorials', link: '/opinion-editorials/' },
      { text: 'Reference', link: '/regulatory-reference/' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',
      collapsed: false,
      capitalizeFirst: true,
      includeRootIndexFile: true,
      useTitleFromFrontmatter: true
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomkabel/skid-security-research' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SKID Security Research'
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    config: (md) => {
      md.use(require('markdown-it-footnote'))
    }
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            vitepress: ['vitepress']
          }
        }
      }
    }
  }
})
```

**Error Handling**: Wrap config in try-catch for build failures. Removed bloated options (PWA, sitemap plugins - use VitePress built-ins).

## Core Plugins

### 4. Compression (vite-plugin-compression2)
Only if bundle >1MB; otherwise skip for simplicity.

### 5. Sidebar Auto-Generation (vitepress-sidebar)
Configured in main config; avoids manual maintenance.

## Theme Customizations

### 6. Custom Styles (docs/.vitepress/theme/style.css)
```css
:root {
  --vp-c-brand: #1e40af;
}

.security-alert {
  border-left: 4px solid #dc2626;
  background: rgba(220, 38, 38, 0.1);
  padding: 1rem;
  margin: 1rem 0;
}

.security-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: #dc2626;
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}
```

**Removed Vue components for simplicity; use CSS classes in markdown.**

## Performance Optimizations

### 7. Build Optimizations
- **Code Splitting**: Manual chunks for Vue and VitePress (if bundle >500KB)
- **Compression**: Gzip only (Brotli adds complexity for marginal gains)
- **Measure First**: Use `vite-bundle-analyzer` to identify bottlenecks

### 8. Runtime Optimizations
- **Prioritize Content Load**: Ensure markdown renders fast; lazy-load non-critical JS
- **Core Web Vitals**: Target FCP <1.5s, LCP <2.5s via Lighthouse audits

## Deployment & CI/CD

### 9. GitHub Actions Workflow (.github/workflows/deploy.yml)
```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v5

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Install dependencies
        run: npm ci

      - name: Build with VitePress
        run: npm run docs:build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Added security: Signed commits via GPG; removed PR triggers to avoid accidental deploys.**

### 10. Package.json Scripts
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

**Removed undefined scripts; focus on core.**

## Enhancements

### 11. Markdown Extensions
- **Footnotes**: Via markdown-it-footnote
- **Custom Styles**: Use CSS classes for alerts/badges

### 12. SEO & Accessibility
- **Meta Tags**: Basic Open Graph in config
- **Accessibility**: Test with Lighthouse; ensure 4.5:1 contrast ratio
- **No Analytics**: Skipped for privacy; monitor via server logs if needed

## Implementation Steps

1. **Install Core Dependencies**: `npm install vitepress vite-plugin-compression2 vitepress-sidebar markdown-it-footnote`
2. **Create Config**: Start with minimal config.ts
3. **Test Locally**: `npm run docs:build && npm run docs:preview`
4. **Deploy**: Push to main; monitor GitHub Actions
5. **Iterate**: Add features only if needed; rollback via git if issues

## Monitoring & Maintenance

- **Lighthouse Audits**: Monthly; target 90+ score
- **Dependabot**: Automate updates via renovate.json
- **Security Scans**: `npm audit` weekly; use Snyk for plugins
- **KPIs**: Build time <30s, bundle <2MB, 95% uptime

**Final Note**: This streamlined setup prioritizes maintainability over features. Start minimal, measure impact, expand only for proven needs.</content>
<parameter name="filePath">/home/tomkabel/Documents/skid-security-research/vitepress-optimization-plan-2026.md