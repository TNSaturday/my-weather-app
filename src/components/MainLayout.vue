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
        >Погода в городе '{{ city }}' не найдена, попробуйте другой город
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
      this.$router.push(query).catch(()=>{});
      this.$store.dispatch('getWeather', query);
    }
  },
  created() {
    const path = this.$router.currentRoute.path.substr(1);
    if (path !== '') {
      this.getFromStore(path);
    }
  }    
}
</script>
