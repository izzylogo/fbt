<template>
  <v-app>
    <v-main>
      <router-view/>
      <FooterComp/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FooterComp from '@/components/footers/Footer'
export default {
  name: 'App',
  components: {FooterComp,}
  
}
</script>

<style>
@import url("./App.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding: 20px; */
}
</style>
