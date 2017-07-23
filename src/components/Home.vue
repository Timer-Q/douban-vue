<template>
  <div class="home">
    <v-header :title="title"></v-header>
    <!-- <movie></movie> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '电影'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
