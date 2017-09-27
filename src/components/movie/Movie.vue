<template>
  <div class="movie">
    <section class="container movie">
      <header class="container-header">coming soon</header>
      <ul class="container-list">
        <li v-for="(item, index) in comingMoviesList" :key="item.id" class="container-item" @click="showMovieDetail(item)">
          <a href="javascript:void(0)">
            <div class="container-item-img" :style="{backgroundImage: `url(${item.images.medium})`}"></div>
            <span class="container-item-title" :title="item.title">{{item.title}}</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="container movie">
      <header class="container-header">in threaters</header>
      <ul class="container-list">
        <li v-for="(item, index) in theatersMovieList" :key="item.id" class="container-item" @click="showMovieDetail(item)">
          <a href="javascript:void(0)">
            <div class="container-item-img" :style="{backgroundImage: `url(${item.images.medium})`}"></div>
            <span class="container-item-title" :title="item.title">{{item.title}}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      comingMoviesList: [],
      theatersMovieList: []
    }
  },
  created () {
    console.log(this.$store)
    let now = new Date().getTime()
    console.log(this.$store.getters.getTime, 'gettime')
    console.log(now)
    if (this.getTime && (now - this.$store.getters.getTime > 5000)) {
      this.setTime(now)
    } else {
      this.setTime(now)
      return
    }
    this.axios.get('/api/movie/coming_soon').then(res => {
      if (res.status === 200) {
        let temp = res.data.subjects
        this.comingMoviesList = temp.sort(temp.collect_count).slice(0, 10)
      }
      console.log(res)
    })
    this.axios.get('/api/movie/in_theaters').then(res => {
      if (res.status === 200) {
        console.log(res, 'threater')
        let temp = res.data.subjects
        this.theatersMovieList = temp.sort(temp.collect_count).slice(0, 10)
      }
    })
  },
  computed: {
    // 没起作用
    ...mapGetters(['getTime'])
  },
  methods: {
    showMovieDetail (movie) {
      this.$router.push({
        name: 'detail',
        params: {
          id: movie.id
        }
      })
      console.log(movie)
    },
    ...mapActions(['setTime'])

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.container {
  padding: 0 .5rem;
  .container-header {
    font-size: .9rem;
    line-height: 2em;
  }
  .container-list {
    width: 100%;
    overflow: hidden;
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    padding-bottom: 1.5rem;
    margin-bottom: -1.5rem;
    -webkit-overflow-scrolling: touch;
  }
  .container-item {
    display: inline-block;
    width: 100px;
    margin-right: .5rem;
    text-align: center;
  }
  .container-item-img {
    width: 100%;
    height: 143px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }
  .container-item-title {
    display: inline-block;
    font-size: .8rem;
    color: #111;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 2.5em;
  }
}
</style>