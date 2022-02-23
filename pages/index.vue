<template>
  <div class="home">
    <movie-hero />
  </div>
</template>

<script>
import MovieHero from '../components/MovieHero.vue'
export default {
  name: 'IndexPage',
  components: {
    MovieHero,
  },
}
</script>
