import GhibliService from '@/services/GhibliService'

const ghibliService = new GhibliService();

const defaultState = {
  films: []
}

const getters = {}

const mutations = {
  SET_FILMS (state, films) {
    state.films = films;
  }
}

const actions = {
  fetchFilm ({ commit }, fields = [], limit = 10) {
    ghibliService
      .getFilms(fields, limit)
      .then(({ data }) => commit('SET_FILMS', data));
  }
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions,
}
