import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '',
    weatherResults: [],
    apiKey: '1a3fd5fdc3ee67be59698b04be67963f',
    urlBase: 'https://api.openweathermap.org/data/2.5/forecast',
  },
  getters: {
    city(state) {
      return state.city;
    },
    weatherResults(state) {
      return state.weatherResults;
    }
  },
  mutations: {
    changeCity(state, value) {
      state.city = value;
    },
    saveWeather(state, results) {
      state.weatherResults = results;
    }
  },
  actions: {
    changeCity({commit}, city) {
      commit('changeCity', city);
    },
    getWeather({state, commit}) {
      fetch(`${state.urlBase}?q=${state.city}&units=metric&cnt=5&appid=${state.apiKey}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          commit('saveWeather', res.list);
        })
        .then(() => {
          console.log(state.weatherResults);
        });
    }
  }
});
