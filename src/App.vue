<template>
  <v-app>
    <Header />
    <v-main>
      <ThreeColumns />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import ThreeColumns from './components/ThreeColumns';

export default {
  name: 'App',

  components: {
    Header,
    ThreeColumns
  },

  data() {
    return {
      
    };
  },
};
</script>
