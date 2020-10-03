<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="6" lg="4">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        placeholder="Поиск"
        @keypress.enter="onInput"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('searchMade', event.target.value);
    }
  }
}
</script>
