export default {
  title: "Cloud Ui",
  description: "基于vue3的拟态UI组件库",
  lastUpdated: true,
  outDir: '../dist',
  head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript, ui, vue, 组件库' }]],
  themeConfig: {
    siteTitle: 'Cloud Ui',
    logo: '/logo.png',
    lastUpdatedText: "最近更新时间",
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    docFooter: { prev: '上一篇', next: '下一篇' },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      // 当用户在 `指南` 目录页面下将会展示这个侧边栏
      '/guide/': [
        {
          text: '指南',
          items: [
            // This shows `/guide/index.md` page.
            { text: '介绍', link: '/guide/installation' }, // /guide/index.md
            { text: '快速开始', link: '/guide/quieStart' }, // /guide/index.md
          ]
        }
      ],

      // 当用户在 `配置` 目录页面下将会展示这个侧边栏
      '/component/': [
        {
          text: '基础组件',
          items: [
            // This shows `/config/index.md` page.
            { text: '图标', link: '/component/icon' },
            { text: '头像', link: '/component/avatar' },
            { text: '按钮', link: '/component/button' }, 
            { text: '下拉框', link: '/component/select' }, 
            { text: '表单组件', link: '/component/form' }, 
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyriht @ 2023 图图图图图个钉'
    },
  }
}