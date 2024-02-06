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
                    <div class="hamburger" @click="toggleDrawer">
                        <Icon icon="ic:round-menu" width="24" height="24" />
                    </div>
                </div>
            </nav>

            <!-- side bar -->
            <div :class="{'side-bar': drawer, 'dont-show': !drawer}">
                <div class="menu-cover">
                    <div class="meun">
                        <div class="offcanvas-header">
                            <div @click="drawer = false" style="cursor: pointer;">
                                <Icon icon="iconoir:cancel" width="24" height="24" />
                            </div>
                        </div>
                        <div class="offcanvas-body">
                            <div class="site-header-primary">
                                <ul>
                                    <li>Personal</li>
                                    <li>Business</li>
                                    <li>Services</li>
                                    <li>About</li>
                                </ul>
                            </div>
                            <div class="site-header-global">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <Icon icon="mdi:location" style="color: #cb9d08" />
                                            <span>Locations</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Icon icon="ic:round-phone" style="color: #cb9d08" />
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                </ul>
                                <form>
                                    <div class="input-cover">
                                        <input type="text" placeholder="Search">
                                        <Icon icon="ic:sharp-search" style="color: #cb9d08" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow" @click="drawer = false" :style="{display: drawer ? 'block' : 'none'}"></div>
            
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
   methods: {
    toggleDrawer() {
        this.drawer = !this.drawer
        console.log(this.drawer)
    }
   }
}
</script>

<style lang="scss" scoped>
@import "../../scss/Navbar.scss";


</style>