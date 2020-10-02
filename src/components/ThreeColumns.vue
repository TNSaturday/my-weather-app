<template>
  <v-container>
    <SearchBar @searchMade="getWeather"/>

    <v-row align="center" justify="center">    
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <WeatherCard />
        </v-sheet>
      </v-col>
    </v-row>

      </v-container>
</template>

<script>
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

export default {
  name: 'ThreeColumns',
  components: {
    WeatherCard,
    SearchBar,
  },
  data() {
    return {
      apiKey: '1a3fd5fdc3ee67be59698b04be67963f',
      urlBase: 'https://api.openweathermap.org/data/2.5/forecast',
      query: '',
      weather: {},
    }
  },
  methods: {
    getWeather(query) {
      this.query = query;
      fetch(`${this.urlBase}?q=${this.query}&units=metric&cnt=5&appid=${this.apiKey}`)
        .then(res => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
    },
  },
    
}
</script>
