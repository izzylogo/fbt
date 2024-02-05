/* eslint-disable */
// eslint-disable-next-line

<template>
    <div>
        <div class="container">
            <div class="top-content">
                <div class="site-number" style="font-size: 13px;">Routing Number: 111901988</div>
                <div class="site-contact-details">
                    <ul>
                        <li>
                            <a href="#">
                                <Icon icon="ic:round-phone" width="20" height="20"  style="color: #cb9d08" />
                                <span>Contact Us</span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon icon="mdi:location" width="20" height="20"  style="color: #cb9d08" />
                                <span>Find a Location or ATM</span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Icon icon="fluent:phone-16-filled" width="20" height="20"  style="color: #cb9d08" />
                                <span>Download our Mobile Banking App</span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div class="site-direct">
                    <Icon icon="ic:outline-facebook" width="24" height="24"  style="color: #cb9d08" />
                    <Icon icon="iconoir:instagram" width="24" height="24"  style="color: #cb9d08" />
                    <Icon icon="ri:linkedin-fill" width="24" height="24"  style="color: #cb9d08" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

    export default {
        name: 'TopFooter',
        components: {Icon,}
    }
</script>

<style lang="scss" scoped>
.top-content{
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 20px;
    padding: 45px 10px;
}

ul{
    li{
        display: inline-block;
        margin-right: 20px;
        align-items: center;
        
        a{
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 13px;
        }
    }
}
</style>
