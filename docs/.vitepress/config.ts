import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'SKID Security Research',
  description: 'Estonia Cyber Fraud Evolution Analysis - Smart-ID Security Research',
  lang: 'en-US',
  base: '/skid-security-research',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
      message: 'Research content licensed under CC-BY-4.0. Code licensed under MIT.',
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
      // Use dynamic import for ES module compatibility
      md.use(async () => {
        const footnote = await import('markdown-it-footnote')
        return footnote.default || footnote
      })
    }
  },

  vite: {
    build: {
      rollupOptions: {}
    }
  },

  // Enable clean URLs for proper SPA routing
  cleanUrls: true
})
