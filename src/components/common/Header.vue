<template>
  <header class="header">
    <router-link :to="{path: '/movie'}">电影</router-link>
    <router-link :to="{path: '/story'}">小说</router-link>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '电影'
    }
  }
}
</script>

<style scoped>
  .header {
    position: sticky;
    top: 0;
    line-height: 2em;
    padding: 0 .5rem;
    border-bottom: 1px solid #ddd;
    background: #ddd;
  }
</style>
