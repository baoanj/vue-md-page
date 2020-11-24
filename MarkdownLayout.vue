<template>
  <div class="markdown-layout">
    <div class="markdown-contents">
      <MarkdownTree :list="list" />
    </div>
    <div class="markdown-document">
      <router-view />
    </div>
  </div>
</template>

<script>
import MarkdownTree from './MarkdownTree'

export default {
  name: 'MarkdownLayout',
  components: { MarkdownTree },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.markdown-layout {
  height: 100%;
  display: flex;
  .markdown-contents {
    flex-shrink: 0;
    width: 240px;
    margin-right: 20px;
    overflow: auto;
  }
  .markdown-document {
    flex: 1;
  }
}
</style>
