import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: '',
    weatherResults: [],
    apiKey: '1a3fd5fdc3ee67be59698b04be67963f',
    urlBase: 'https://api.openweathermap.org/data/2.5/forecast',
    error: false,
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
    },
    toggleError(state) {
      state.error = true;
    },
    initState(state) {
      state.city = '';
      state.weatherResults = [];
      state.error = false;
    }
  },
  actions: {
    getWeather({state, commit}, city) {
      commit('initState');
      commit('changeCity', city);

      fetch(`${state.urlBase}?q=${city}&units=metric&cnt=5&appid=${state.apiKey}`)
        .then(res => {
          if (res.status === 404) {
            commit('saveWeather', []);
            return Promise.reject();
          }
          return res.json();
        })
        .then(res => {
          this.dispatch('setResults', res.list);
        })
        .catch(() => {
          commit('toggleError');
        });
    },
    setResults({commit}, results) {
      commit('saveWeather', results);
    }
  }
});
