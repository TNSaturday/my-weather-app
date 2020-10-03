<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      <v-btn text @click.native="scrollToTop">
        <span>Прогноз погоды</span>
      </v-btn>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  methods: { 
    scrollToTop() {
      this.$store.commit('initState');
      this.$router.push('/');
      window.scrollTo(0,0);
    }
  }
}
</script>
