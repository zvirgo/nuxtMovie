<template>
  <div class="home">
    <!--Hero -->
    <movie-hero :movies="movies"/>

    <!--Hero -->
    <loading-movie v-if="$fetchState.pending" />

    <!--Movies -->
    <movie-grid :movies="movies" />
  </div>
</template>

<script>
import axios from 'axios'
import MovieHero from '../components/MovieHero.vue'
import MovieGrid from '../components/MovieGrid.vue'
import LoadingMovie from '../components/LoadingMovie.vue'

export default {
  name: 'IndexPage',
  components: {
    MovieHero,
    MovieGrid,
    LoadingMovie,
  },
  data() {
    return {
      movies: [],
    }
  },
  async fetch() {
    await this.getMovies()
  },
  fetchDelay: 10000,
  methods: {
    async getMovies() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=e713fd0a545ced6d78a33f57811ee90a&language=en-US&page=1`
        )
        .then((response) => {
          response.data.results.forEach((movie) => {
            this.movies.push(movie)
          })
        })
    },
  },
}
</script>
