<template>
  <div class="markdown-tree">
    <div v-for="item in list" :key="item.name">
      <div v-if="item.children && item.children.length">
        <div>{{ item.name }}</div>
        <MarkdownTree :list="item.children" class="tree-children" />
      </div>
      <div v-else-if="item.file" class="markdown-router">
        <span @click="$router.push({ name: item.key })">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkdownTree',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.tree-children {
  padding-left: 20px;
}
.markdown-router {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: #327dff;
    cursor: pointer;
  }
}
</style>
