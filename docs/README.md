# SKID Security Research Documentation

This directory contains the VitePress-based documentation site for the Estonia Cyber Fraud Research project. It builds automatically to GitHub Pages.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to view the documentation during development.

## Project Structure

```
.
├── .vitepress/
│   └── config.ts          # VitePress configuration
├── core-analysis/         # Primary research documents
├── technical-analysis/    # Security measures and vulnerabilities
├── supplementary-research/ # Supporting research papers
├── opinion-editorials/    # Editorials and expert opinions
├── regulatory-reference/  # Legal and regulatory materials
├── archived/             # Historical documents and summaries
├── index.md              # Home page
└── package.json
```

## Content Organization

The documentation is organized into several main sections:

- **Core Analysis**: Primary research examining Smart-ID security architecture
- **Technical Analysis**: Security measures and implementation guidance
- **Supplementary Research**: Supporting documents, enforcement strategies, regulatory analysis
- **Opinion & Editorials**: Expert perspectives and editorial analysis
- **Regulatory Reference**: Laws, acts, and regulatory frameworks
- **Archived**: Historical documents and reorganization summaries

Each section has its own directory with markdown files that automatically appear in the sidebar navigation.

## Adding New Research Files

1. Create a markdown file in the appropriate content folder
2. Add frontmatter with title (optional):
   ```markdown
   ---
   title: Your Document Title
   ---
   ```
3. The file will automatically appear in the sidebar and be accessible at the corresponding path

## Configuration

### VitePress Config

The main configuration is in `.vitepress/config.ts`. This controls:
- Site title and description
- Navigation menu
- Sidebar structure for each section
- Search configuration
- Theme settings

### Theme

VitePress uses the default theme with custom navigation. The site supports dark mode automatically.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow:

1. Installs dependencies
2. Builds the site with `npm run build`
3. Deploys the `.vitepress/dist/` directory to GitHub Pages

## Content Features

- **Search**: Built-in local search functionality
- **Responsive**: Works on all device sizes
- **Dark Mode**: Automatic dark/light theme based on system preference
- **Table of Contents**: Automatic page outline generation
- **Code Highlighting**: Syntax highlighting for code blocks
- **Clean URLs**: SEO-friendly URL structure

## Technical Stack

- **VitePress**: Static site generator
- **TypeScript**: For configuration type safety
- **Markdown**: Content format
- **GitHub Pages**: Hosting platform
- **GitHub Actions**: CI/CD automation

## Notes

- Clean URLs are enabled (`cleanUrls: true`)
- Search uses local provider for privacy
- Build output goes to `.vitepress/dist/`
- Links between pages should use paths without `.html` extensions