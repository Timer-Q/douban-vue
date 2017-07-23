<template>
  <section class="movie">
    <ul>
      <li v-for="(item, index) in moviesList" :key="item.id">
        <a :href="item.alt">
          <img :src="item.images.medium" alt="">
          {{item.title}}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      moviesList: []
    }
  },
  created () {
    this.axios.get('/api/movie/coming_soon').then(res => {
      if (res.status === 200) {
        this.moviesList = res.data.subjects
      }
      console.log(res)
    })
  }
}
</script>