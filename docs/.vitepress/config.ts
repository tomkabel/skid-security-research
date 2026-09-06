import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'SKID Security Research',
  description: 'Estonia Cyber Fraud Evolution Analysis - Smart-ID Security Research',
  lang: 'en-US',
  base: '/skid-security-research',

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale:1' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Research', link: '/01-core-research/' },
      { text: 'Technical Security', link: '/02-technical-security/' },
      { text: 'Regulatory Framework', link: '/03-regulatory-framework/' },
      { text: 'Memoranda', link: '/04-regulatory-memoranda/' },
      { text: 'Enforcement', link: '/05-enforcement/' },
      { text: 'Supplementary', link: '/06-supplementary-research/' },
      { text: 'Opinion', link: '/07-opinion-editorials/' }
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
