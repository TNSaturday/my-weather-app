<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>
        <v-btn
        href="/"
        target="_blank"
        text
      >
        <span>Weather report</span>
      </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span>Sign In</span>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
