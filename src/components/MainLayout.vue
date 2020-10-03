<template>
  <v-container>
    <SearchBar @searchMade="getFromStore"/>

    <v-row align="center" justify="center">    
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
      >
        <ForecastList :weather="weather" :city="city"/>
        <v-sheet
          rounded="lg"
          v-if="error"
        >Погода в городе {{ city }} не найдена, попробуйте другой город
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import ForecastList from './ForecastList';
import SearchBar from './SearchBar';

export default {
  name: 'MainLayout',
  components: {
    ForecastList,
    SearchBar,
  },
  data() {
    return {
      apiKey: '1a3fd5fdc3ee67be59698b04be67963f',
      urlBase: 'https://api.openweathermap.org/data/2.5/forecast',
      query: '',
    }
  },
  computed: {
    weather() {
      return this.$store.state.weatherResults;
    },
    city() {
      return this.$store.state.city;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    getFromStore(query) {
      console.log(this.$router);
      this.$store.dispatch('getWeather', query);
    }
  },    
}
</script>
