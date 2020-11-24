import MarkdownLayout from './MarkdownLayout.vue'
import MarkdownContent from './MarkdownContent.vue'

export default function mdPage(
  router,
  {
    contents,
    path = '/doc',
    LayoutComponent = MarkdownLayout,
    ContentComponent = MarkdownContent
  }
) {
  try {
    const list = JSON.parse(JSON.stringify(contents))
    const children = []
    const result = []
    getFiles(list, result)
    result.forEach(item => {
      if (!item.key) item.key = item.name
      const content = require('@/' + item.file.slice(2, -3) + '.md')
      children.push({
        path: item.key,
        name: item.key,
        component: {
          render(h) {
            return h(ContentComponent, {
              props: {
                content
              }
            })
          }
        }
      })
    })
    router.addRoutes([
      {
        path,
        component: {
          render(h) {
            return h(LayoutComponent, {
              props: {
                list
              }
            })
          }
        },
        children
      }
    ])
  } catch (error) {
    console.error('Error from vue-md-page:', error)
  }
}

function getFiles(list, result) {
  list.forEach(item => {
    if (item.file) result.push(item)
    else if (item.children) getFiles(item.children, result)
  })
}
