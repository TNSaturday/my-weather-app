<template>
  <v-container>

    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="4">
        <v-sheet rounded="lg" min-height="10vh">
          <v-text-field
        >
          Search
        </v-text-field>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">    
      <v-col
        cols="12"
        sm="8"
        md="8"
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

export default {
  name: 'ThreeColumns',
  components: {
    WeatherCard,
  }  
}
</script>
