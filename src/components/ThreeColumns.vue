<template>
  <v-container>
    <SearchBar @searchMade="getWeather2"/>

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
        >Cannot find weather for {{ city }} city, try another one
        </v-sheet>
      </v-col>
    </v-row>

    </v-container>
</template>

<script>
import ForecastList from './ForecastList';
import SearchBar from './SearchBar';

export default {
  name: 'ThreeColumns',
  components: {
    ForecastList,
    SearchBar,
  },
  data() {
    return {
      apiKey: '1a3fd5fdc3ee67be59698b04be67963f',
      urlBase: 'https://api.openweathermap.org/data/2.5/forecast',
      query: '',
      weather: [],
      city: '',
      error: false,
    }
  },
  methods: {
    getWeather(query) {
      this.error = false;
      this.query = query;
      fetch(`${this.urlBase}?q=${this.query}&units=metric&cnt=5&appid=${this.apiKey}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults)
        .catch(() => {
          this.city = query;
          this.error = true;
        });
    },
    setResults(results) {
      this.weather = results.list;
      this.city = results.city.name;
    },
    getWeather2(query) {
      this.$store.dispatch('changeCity', query);
      this.$store.dispatch('getWeather');
      this.setResults2();
      console.log(this.weather);
    },
    setResults2() {
      this.city = this.$store.state.city;
      this.weather = this.$store.state.weatherResults;
    }
  },    
}
</script>
