# Vue Markdown Page

For Vue CLI Project, Generate pages with contents and anchors from markdown files according to the configuration.

```bash
$ npm install webpack-md-html-loader -D
$ npm install vue-md-page -S
```

vue.config.js
```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md-html')
      .test(/\.md$/)
      .use('md-html')
      .loader('webpack-md-html-loader')
      .end()
  }
}
```

src/main.js
```js
import mdPage from 'vue-md-page'

mdPage(router, {
  path: '/doc', // optional, parent router, default /doc
  LayoutComponent: Custom, // optional, Vue Component, page layout, if no, use default
  ContentComponent: Custom, // optional, Vue Component, content page, if no, use default
  contents: [ // required, files and routes
    {
      name: 'About Me', // directory
      children: [
        {
          key: 'intro', // router path, if no, use name, visit /#/doc/intro
          name: 'Introduction', // page name
          file: '@/doc/intro.md' // markdown file, prefix width @/
        },
        { name: '', children: [] }
      ]
    },
    { key: '', name: '', file: '' }
  ]
})
```