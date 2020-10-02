<template>
  <ul>
    <li :key="id" v-for="(n, id) in 5">
      <WeatherCard />
    </li>
  </ul>
</template>

<script>
import WeatherCard from './WeatherCard';

export default {
  name: 'ForecastList',
  props: ['weather'],
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
