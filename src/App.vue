<template>
  <v-app class="lato-font">
     <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css">
  .lato-font{
    font-family: Lato !important;
  }
</style>