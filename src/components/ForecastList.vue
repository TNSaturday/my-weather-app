<template>
  <v-container>
    <v-row align="center" justify="center">
    </v-row>
    <ul>
      <WeatherCard :key="id" v-for="(el, id) in weather" :result="el" :city="city"/>
    </ul>
  </v-container>
</template>

<script>
import WeatherCard from './WeatherCard';

export default {
  name: 'ForecastList',
  props: ['weather', 'city'],
  components: {
    WeatherCard,
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
