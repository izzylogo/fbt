<template>
    <div>
        <!-- <v-layout> -->
            <nav class="nav-main">
                <div class="left">
                    <div class="site-logo">
                        <router-link to="/">
                            <img src="../../assets/logo.svg" alt="logo">
                        </router-link>
                    </div>
                </div>
                <div class="right">
                    <ul>
                        <li>Personal</li>
                        <li>Business</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                    <div class="hamburger" @click.stop="drawer = !drawer">
                        <Icon icon="ic:round-menu" width="24" height="24" />
                    </div>
                </div>
            </nav>
            <div class="side-bar"></div>
            <!-- <v-navigation-drawer v-model="drawer" temporary>
                <v-list density="compact" nav>
                <v-list-item
                    prepend-icon="mdi-view-dashboard"
                    title="Home"
                    value="home"
                ></v-list-item>
                <v-divider color="red"></v-divider>
                <v-list-item
                    prepend-icon="mdi-forum"
                    title="About"
                    value="about"
                ></v-list-item>
                </v-list>
            </v-navigation-drawer> -->
        <!-- </v-layout> -->
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
    name: "NavbarComponent",
    components: {Icon,},
    data() {
      return {
        drawer: null,
      }
    },
}
</script>

<style lang="scss" scoped>
@import "../../scss/Navbar.scss";
</style>