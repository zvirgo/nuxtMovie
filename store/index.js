import axios from 'axios'

// holds your root state
const state = () => ({
  searchedMovies: [],
  
})

// contains your actions
const actions = {
  async searchMovies({ commit }, payload) {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e713fd0a545ced6d78a33f57811ee90a&language=en-US&page=1&query=${payload}`
      )
      .then((response) => {
        const resultMovies = response.data.results
        commit('setSearchedMovies', resultMovies)
      })
  },
}
// contains your mutations
const mutations = {
  setSearchedMovies(state, payload) {
    state.searchedMovies = payload
  },
}
// your root getters
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
}
