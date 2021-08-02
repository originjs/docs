module.exports = {
  title: 'originjs',
  description: 'Just playing around',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    // 头部导航栏内容
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'foo', link: '/foo/' },
      { text: 'bar', link: '/bar/' },
      {
        text: '选择语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/' },
          { text: 'English', link: '/en/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/originjs' },
    ],
    // 多语言支持
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        // 侧边栏
        sidebar: {
          '/foo/': [
            '',     /* /foo/ */
            'one',  /* /foo/one.html */
            'two'   /* /foo/two.html */
          ],

          '/bar/': [
            {
              title: 'bar 1',   // 必要的
              path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                // '/',
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                ['/bar/four', 'four']
                // 'four'   /* /bar/four.html */
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
        sidebar: {
          '/en/guide/': getGuideSidebar('groupA', 'groupA'),
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
        'README3'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        '',
        'README2'
      ]
    }
  ]
}