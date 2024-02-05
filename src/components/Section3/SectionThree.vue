<template>
    <div>
        <div class="section3-cover">
            <div class="container">
                <div class="down-icon">
                    <Icon icon="mingcute:arrows-down-line" width="20" height="20"  style="color: white" />
                </div>
                <div class="container-contain">
                    <div class="content">
                        <h2>
                            <span class="text">We make it easy</span>
                        </h2>
                        <h5>Resources to help you find what you need.</h5>
                    </div>
                    <div class="content-icon">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/white-calc.svg" alt="">
                            <span class="text">
                                Calculators
                                <Icon icon="ep:right" width="20" height="20"  style="color: white" />
                            </span>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/white-faqs.svg" alt="">
                            <span class="text">
                                FAQS
                                <Icon icon="ep:right" width="20" height="20"  style="color: white" />
                            </span>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="../../assets/white-locations.svg" alt="">
                            <span class="text">
                                Locations
                                <Icon icon="ep:right" width="20" height="20"  style="color: white" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
    export default {
        components: {Icon,}        
    }
</script>

<style lang="scss" scoped>
@import "../../scss/Section3.scss";
.section3-cover{
    background-image: url('../../assets/section3.jpg'); 
    background-position: center;
    min-height: 50dvh;
    position: relative;
    margin: 0;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    padding: 90px 0 80px;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: inherit;
        background-color: #021c40;
        opacity: .8;
    }

}
</style>