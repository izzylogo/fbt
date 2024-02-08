<template>
    <div>
        <div class="container" style="padding: 20px,">
            <div class="top">
                <div class="left">
                    <h2>Let's Grow <em>together</em></h2>
                    <div class="bar"></div>
                    <p>Find popular requests in the drop-down or explore some of our business products and resource below</p>
                </div>
                <div class="right">
                    <h5>I want to</h5>
                    <div class="drop">
                        <v-menu transition="slide-y-transition">
                            <template v-slot:activator="{ props }">
                                <v-btn  v-bind="props"> select one </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </div> 
    
            <div class="bottom">
                <div class="bottom-cover">
                    <div class="icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img :src="firstComp.firstImage" alt="credit">
                                    <span>{{ firstComp.firstWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="firstComp.secImage" alt="credit">
                                    <span>{{ firstComp.secWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="firstComp.thirdImage" alt="credit">
                                    <span>{{ firstComp.thirdWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="firstComp.fourthImage" alt="credit">
                                    <span>{{ firstComp.fourthWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="images">
                        <div class="images-cover">
                            <div class="image-contain">
                                <img :src="firstComp.rightImage" alt="car">
                            </div>
                            <div class="image-content">
                                <p>{{ firstComp.rightTopWord }}</p>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <span>{{ firstComp.rightBottomWord }}</span>
                                    <Icon icon="ep:right"  style="color: white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

    export default {
        props: ["firstComp", "secondComp"],
        components: {Icon,},
        name: "BusinessComp",
        data: () => ({
            items: [
            { title: 'Learn more about a personal loan' },
                { title: 'Ask about business loan for my company' },
                { title: 'Find out which SBA loan can help my  business' },
            ],
        }),

    }
</script>

<style lang="scss" scoped>
@import "../../scss/Business.scss";
.top{
    color: white;
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 60px 0px;

    @media (max-width: 990px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;
        padding: 30px 20px;
        text-align: center;
    }

    .left{
        flex: 1;



        h2{
            font-family: Bodoni Moda, 'Courier New', Courier, monospace;
            font-size: 55px;

            @media (max-width: 990px) {
                font-size: 28px;
                text-align: center;
            }

            em{
                font-family: Great vibes, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
        }
        p{
            @media (max-width: 990px) {
                font-size: 13px;
            }
        }
    }

    .right{
        flex: 1;
    }
}
</style>