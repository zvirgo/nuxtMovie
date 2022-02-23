<template>
  <div class="home">
    <!--Hero -->
    <movie-hero />

    <!--Movies -->
    <movie-grid :movies="movies" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieHero from '../components/MovieHero.vue'
import MovieGrid from '../components/MovieGrid.vue'
export default {
  name: 'IndexPage',
  components: {
    MovieHero,
    MovieGrid,
  },
  data() {
    return {
      movies: [],
    }
  },
  async fetch() {
    await this.getMovies()
  },
  methods: {
    async getMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=e713fd0a545ced6d78a33f57811ee90a&language=en-US&page=1`
      )
      const result = await data
      result.data.results.forEach((movie) => {
        this.movies.push(movie)
      })
      console.log(this.movies)
    },
  },
}
</script>
