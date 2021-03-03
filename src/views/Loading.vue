<template>
  <v-container fluid class="full-height">
    <v-row justify="center" class="full-height">
      <v-col></v-col>
      <v-col cols="12" class="text-center">
       <v-img
          :src="require('../assets/pokeball.svg')"
          class="my-3 rotate"
          contain
          height="100"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
      this.goToNextView()
  },

  computed: {},

  methods: {
      goToNextView(){
        setTimeout(() => { 
            this.$router.push('/')
        }, 
        4000);
      }
  },
};
</script>

<style lang="css">
    .full-height{
        height: 80%;
    }

    .rotate {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        margin:-60px 0 0 -60px;
        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>