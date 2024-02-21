import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "",
  description: "Personal website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Projects', link: '/projects' },
          { text: 'About', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/georgethomas111' }
    ]
  }
})
