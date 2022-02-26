<template>
  <div class="movie-grid">
    <v-container>
      <!--Searched Movies -->
      <v-row >
        <div
          v-for="(movie, index) in searchedMovies"
          :key="index"
          class="movie px-2"
        >
          <v-card :loading="loading" class="mx-auto my-12" max-width="270">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="350"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            ></v-img>

            <v-card-title
              >{{ movie.title.slice(0, 20) }}
              <span v-if="movie.title.length > 20">...</span>
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="movie.vote_average"
                  length="10"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">{{ movie.vote_average }}</div>
              </v-row>

              <div class="my-4 text-subtitle-2">
                {{
                  new Date(movie.release_date).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                }}
              </div>

              <div>
                {{ movie.overview.slice(0, 90) }}
                <span v-if="movie.overview.length > 90">...</span>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <nuxt-link
                :to="{
                  name: 'movies-movieid',
                  params: { movieid: movie.id },
                }"
                class="infoBtn"
              >
                Get More Info</nuxt-link
              >
            </v-card-actions>
          </v-card>
        </div>
      </v-row>
      <!--Now Streaming -->
      <v-row >
        <div v-for="(movie, index) in movies" :key="index" class="movie px-2">
          <v-card :loading="loading" class="mx-auto my-12" max-width="270">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="350"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            ></v-img>

            <v-card-title
              >{{ movie.title.slice(0, 20) }}
              <span v-if="movie.title.length > 20">...</span>
            </v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="movie.vote_average"
                  length="10"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">{{ movie.vote_average }}</div>
              </v-row>

              <div class="my-4 text-subtitle-2">
                {{
                  new Date(movie.release_date).toLocaleString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                }}
              </div>

              <div>
                {{ movie.overview.slice(0, 90) }}
                <span v-if="movie.overview.length > 90">...</span>
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
              <nuxt-link
                :to="{
                  name: 'movies-movieid',
                  params: { movieid: movie.id },
                }"
                class="infoBtn"
              >
                Get More Info</nuxt-link
              >
            </v-card-actions>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MovieGrid',
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      selection: 1,
    }
  },
  computed: {
    ...mapState(['searchedMovies']),
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
.infoBtn {
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
  color: #9575cd !important;
  text-decoration: none;
  padding: 0 8px;
  height: 36px;
}
</style>