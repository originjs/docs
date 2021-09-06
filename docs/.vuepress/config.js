module.exports = {
  title: 'originjs',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/logo.png' }]
  ],
  description: 'Just playing around',
  base: '/docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'originjs',
      description: 'description balabala'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'originjs',
      description: 'description balabala'
    }
  },
  themeConfig: {
    // logo: '/assets/img/logo.png',
    // repo: 'originjs',
    // 多语言支持
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',  
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // 头部导航栏内容
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '更新记录', link: 'https://github.com/originjs/origin.js/releases' },
          { text: 'bar', link: '/bar/' }
        ],
        // 侧边栏
        sidebar: [
          {
            title: '介绍',
            collapsable: false,
            children: [
              {
                title: '安装',
                path: '/installation'
              },
              {
                title: '开始',
                path: '/guide/'
              },
            ]
          },
          {
            title: 'CLI',
            collapsable: false,
            children: [
              {
                title: '开始',
                path: '/guide/origin.js/'
              },
            ]
          },
          {
            title: '插件',
            collapsable: false,
            children: [
              {
                title: 'vite-plugin-assets',
                path: '/guide/plugins/vite-plugin-assets/'
              },
              {
                title: 'vite-plugin-content',
                path: '/guide/plugins/vite-plugin-content/'
              },
              {
                title: 'vite-plugin-pages',
                path: '/guide/plugins/vite-plugin-pages/'
              }
            ]
          },
          {
            title: '工具',
            collapsable: false,
            children: [
              {
                title: 'vue-codemod',
                collapsable: false,
                children: [
                  {
                    title: '使用指导',
                    path: '/guide/tools/vue-codemod/'
                  },
                  {
                    title: '手动迁移指导',
                    path: '/guide/tools/vue-codemod/manual-guide'
                  },
                  {
                    title: '典型实践',
                    path: '/guide/tools/vue-codemod/typical-case'
                  },
                ]
              },
              {
                title: 'webpack-to-vite',
                path: '/guide/tools/webpack-to-vite/'
              },
            ]
          }
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        // nav: require('./nav/en'),
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Realease Notes', link: 'https://github.com/originjs/origin.js/releases' },
          { text: 'bar', link: '/en/bar/' }
        ],
        // 侧边栏
        sidebar: [
          {
            title: 'Introduction',
            collapsable: false,
            children: [
              {
                title: 'Installation',
                path: '/en/installation'
              },
              {
                title: 'Getting Started',
                path: '/en/guide/'
              },
            ]
          },
          {
            title: 'CLI',
            collapsable: false,
            children: [
              {
                title: 'Getting Started',
                path: '/en/guide/origin.js/'
              },
            ]
          },
          {
            title: 'Plugins',
            collapsable: false,
            children: [
              {
                title: 'vite-plugin-assets',
                path: '/en/guide/plugins/vite-plugin-assets/'
              },
              {
                title: 'vite-plugin-content',
                path: '/en/guide/plugins/vite-plugin-content/'
              },
              {
                title: 'vite-plugin-pages',
                path: '/en/guide/plugins/vite-plugin-pages/'
              }
            ]
          },
          {
            title: 'Tools',
            collapsable: false,
            children: [
              {
                title: 'vue-codemod',
                collapsable: false,
                children: [
                  {
                    title: 'Intruduction Guide',
                    path: '/en/guide/tools/vue-codemod/'
                  },
                  {
                    title: 'Manual Guide',
                    path: '/en/guide/tools/vue-codemod/manual-guide'
                  },
                  {
                    title: 'Typical Case',
                    path: '/en/guide/tools/vue-codemod/typical-case'
                  },
                ]
              },
              {
                title: 'webpack-to-vite',
                path: '/en/guide/tools/webpack-to-vite/'
              },
            ]
          }
        ]
      }
    }
  },
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'README2'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'README3'
      ]
    }
  ]
}
