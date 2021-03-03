<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col></v-col>
      <v-col cols="12" class="text-center">
       <v-img
          :src="require('../assets/pikachu.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12" class="text-center">
          <h2>Welcome to Pokédex</h2>
      </v-col>
      <v-col cols="12" class="pb-0 text-center">
        <p>
          The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.
        </p>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn large class="ma-2 white--text" rounded color="#F22539" to="/loading">
          Get started
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  computed: {},

  methods: {},
};
</script>