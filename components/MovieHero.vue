<template>
  <div class="hero">
    <v-carousel :show-arrows="false" cycle height="400">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'MovieHero',
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {},
  mounted() {
    this.getImageCarousel()
  },
  methods: {
    getImageCarousel() {
      const imagePath = this.movies.map((x) => {
        return { src: `https://image.tmdb.org/t/p/w500/${x.poster_path}` }
      })
      const imageSelected = imagePath.slice(0, 4)

      this.items = imageSelected
    },
  },
}
</script>

<style>
</style>