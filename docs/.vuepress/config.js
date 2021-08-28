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
          { text: 'foo', link: '/foo/' },
          { text: 'bar', link: '/bar/' }
        ],
        // 侧边栏
        sidebar: {
          '/foo/': [
            // '',     /* /foo/ */
            ['', 'README'],
            // 'one',  /* /foo/one.html */
            ['/foo/one', 'one'],
            // 'two'   /* /foo/two.html */
            ['/foo/two', 'two'],
          ],

          '/bar/': [
            {
              title: 'bar 1',   // 必要的
              path: '/bar/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                // '/',
                // '',      /* /bar/ */
                ['', 'README'],
                // 'three', /* /bar/three.html */
                ['/bar/three', 'three'],
                // 'four'   /* /bar/four.html */
                ['/bar/four', 'four']
              ]
            },
            {
              title: 'bar 2',
              children: [ /* ... */],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ],

          // fallback
          '/': [
            '',        /* / */
            'contact', /* /contact.html */
            // 'about'    /* /about.html */
            ['/about', 'Explicit link text']
          ]
        },
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
