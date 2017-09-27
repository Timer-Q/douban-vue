<template class="movie-detail">
  <div>
    <section class="indent">
      <div class="subject">
        <h4>{{movieDetail.title}}</h4>
        <!-- <h4 class="subject-title">剧情简介</h4> -->
        <p>{{movieDetail.summary}}</p>
      </div>
      <div class="thumbnail">
        <img :src="movieDetail.images ? movieDetail.images.medium : ''" :alt="movieDetail.title">
      </div>
    </section>
    <section class="subject">

    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movieDetail: [],
      movieComments: []
    }
  },
  created () {
    this.axios.get(`/api/movie/subject/${this.$route.params.id}`).then(res => {
      if (res.status === 200) {
        this.movieDetail = res.data
      }
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // this.axios.get(`/api/movie/subject/${this.$route.params.id}/comments`).then(res => {
    //   console.log(res, 'movieComments')
    //   if (res.status === 200) {
    //     this.movieComments = res.data
    //     console.log(this.movieComments, 'movieComments')
    //   }
    // }).catch(err => {
    //   console.log(err)
    // })
    console.log(this.$route.params.id)
  }
}
</script>

<style lang="scss" ref="stylesheet/scss">
.indent {
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
}

.subject {
  font-size: .7rem;
  padding: .5rem 0;
  line-height: 1.2em;
  .subject-title {
    line-height: 2em;
  }
}

.thumbnail {

}
</style>
