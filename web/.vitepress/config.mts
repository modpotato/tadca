import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TADC Lore Archive',
  description: 'The Amazing Digital Circus - Complete Lore Archive & Easter Egg Database',
  
  base: '/tadca/',
  appearance: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#8b5cf6' }],
    ['meta', { name: 'og:title', content: 'TADC Lore Archive' }],
    ['meta', { name: 'og:description', content: 'Complete research archive for The Amazing Digital Circus' }]
  ],
  
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'TADC Lore Archive',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lore Database', link: '/lore/episodes' },
      { text: 'Timeline', link: '/timeline' },
      { text: 'Easter Eggs', link: '/easter-eggs' },
      { text: 'Sources', link: '/sources' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Quick Reference', link: '/quick-reference' }
        ]
      },
      {
        text: 'Lore Database',
        items: [
          { text: 'Episode Guide', link: '/lore/episodes' },
          { text: 'Character Backstories', link: '/lore/characters' },
          { text: 'Abstracted Characters', link: '/lore/abstracted' },
          { text: 'I Have No Mouth Parallels', link: '/lore/ihnmaims' },
          { text: 'Theories & Discussions', link: '/lore/theories' }
        ]
      },
      {
        text: 'Research',
        items: [
          { text: 'Timeline', link: '/timeline' },
          { text: 'Easter Eggs', link: '/easter-eggs' },
          { text: 'Terminal Analysis', link: '/research/terminal' },
          { text: 'Pentest Report', link: '/research/pentest' },
          { text: 'Sources & References', link: '/sources' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/modpotato/tadca' }
    ],
    
    footer: {
      message: 'Research Archive for The Amazing Digital Circus',
      copyright: 'Data collected March 2026'
    },
    
    search: {
      provider: 'local'
    },
    
    editLink: {
      pattern: 'https://github.com/modpotato/tadca/edit/develop/web/:path',
      text: 'Edit this page on GitHub'
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
})
