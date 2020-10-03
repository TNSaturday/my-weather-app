<template>
  <v-app>
    <Header />
    <v-main>
      <MainLayout />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import MainLayout from './components/MainLayout';

export default {
  name: 'App',

  components: {
    Header,
    MainLayout
  },

  data() {
    return {
      
    };
  },
};
</script>
