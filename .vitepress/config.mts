import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Chris's Blog",
  description: "搏一搏，单车变摩托",
  base: '/blog/', 
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/blog/favicon.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/01_fix_life_one_day' },
      { text: '技术', link: '/tech/java/01_java' }, // 修正：指向技术区的起始页
    ],

    sidebar: {
      // 建议：当进入 articles 目录时显示文章侧边栏
      '/articles/': [
        {
          text: '🚀 人生重塑',
          items: [
            { text: '1天修复人生指南', link: '/articles/01_fix_life_one_day' },
          ]
        }
      ],
      // 建议：当进入 tech 目录时显示技术侧边栏
      '/tech/': [
        {
          text: '☕️ Java 开发',
          collapsed: false,
          items: [
            { text: 'Java基础 01', link: '/tech/java/01_java' },
          ]
        },
        {
          text: '⚙️ 运维 Ops',
          collapsed: false,
          items: [
            { text: '运维实战 01', link: '/tech/ops/01_ops' },
          ]
        },
        {
          text: '🌐 Web 前端',
          collapsed: false,
          items: [
            { text: 'Web实战 01', link: '/tech/web/01_web' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    outline: {
      label: '本页大纲',
      level: [2, 3]
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' }
  }
})