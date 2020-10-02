<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ city }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ result.dt_txt }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="display-3"
          cols="6"
        >
          {{ result.main.temp }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.iconscout.com/icon/free/png-256/sun-planet-astrology-star-galxy-solar-system-darkhole-1-20784.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>Wind speed {{ result.wind.speed }} m/s</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>Humidity {{ result.main.humidity }}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: ['result', 'city'],
  data () {
    return {

    }
  },
  methods: {
    dateBuilder() {
      let d = new Date();
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  },
}
</script>

<style scoped>

</style>
