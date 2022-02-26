<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="searchInput"
            append-outer-icon="mdi-movie-search "
            clearable
            placeholder="Search Movie"
            type="text"
            hide-details
            @click:append-outer="searchBtn"
            @click:clear="clearSearch"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

// import axios from 'axios'

export default {
  name: 'MovieSearch',
  data() {
    return {
      searchInput: '',
    }
  },
  computed: {},

  methods: {
    ...mapActions(['searchMovies']),
    searchBtn() {
      this.searchMovies(this.searchInput)
      this.clearSearch()
    },
    clearSearch() {
      this.searchInput = ''
    },
  },
}
</script>

<style>
</style>