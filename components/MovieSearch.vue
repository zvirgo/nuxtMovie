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
            @click:append-outer="sendMessage"
            @click:clear="clearMessage"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'MovieSearch',
  data() {
    return {
      password: 'Password',
      show: false,
      searchInput: '',
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    }
  },

  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },

  methods: {
    sendMessage() {
      this.clearMessage()
    },
    clearMessage() {
      this.searchInput = ''
    },
  },
}
</script>

<style>
</style>