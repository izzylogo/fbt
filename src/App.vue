<template>
  <v-app>
    <v-main>
      <HomeView />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeView from '@/view/HomeView'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    HomeView,
  }
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
