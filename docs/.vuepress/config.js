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
                title: 'webpack-to-vite',
                path: '/guide/plugins/webpack-to-vite/'
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
                path: '/guide/tools/vue-codemod/'
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
          { text: 'foo', link: '/en/foo/' }
        ],
        sidebar: {
          '/en/foo/': [
            // '',     /* /foo/ */
            ['', 'README'],
            // 'one',  /* /foo/one.html */
            ['/foo/one', 'one'],
            // 'two'   /* /foo/two.html */
            ['/foo/two', 'two'],
          ],
          '/en/guide/': getGuideSidebar('groupA', 'groupB'),
        }
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
