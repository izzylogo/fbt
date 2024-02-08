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
                                <v-btn v-bind="props"> select one </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
    
                        <!-- or -->
                        <!-- <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-title>
                                    Select One
                                </v-expansion-panel-title>
                                <v-expansion-panel-text>
                                    <ul>
                                        <li>Learn more about a personal loan</li>
                                        <li>Asks about business loan for my company</li>
                                        <li>Find out which SBA Loan can help my business</li>
                                    </ul>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels> -->
                    </div>
                </div>
            </div> 
    
            <div class="bottom">
                <div class="bottom-cover">
                    <div class="icons">
                        <ul>
                            <li>
                                <a href="#">
                                    <img :src="secondComp.firstImage" alt="credit">
                                    <span>{{ secondComp.firstWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="secondComp.secImage" alt="credit">
                                    <span>{{ secondComp.secWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="secondComp.thirdImage" alt="credit">
                                    <span>{{ secondComp.thirdWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img :src="secondComp.fourthImage" alt="credit">
                                    <span>{{ secondComp.fourthWord }} <Icon icon="ep:right"  style="color: #ba0215" /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="images">
                        <div class="images-cover">
                            <div class="image-contain">
                                <img :src="secondComp.rightImage" alt="car">
                            </div>
                            <div class="image-content">
                                <p>{{ secondComp.rightTopWord }}</p>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <span >{{ secondComp.rightBottomWord }}</span><Icon icon="ep:right"  style="color: white" />
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
        props: ["secondComp",],
        components: {Icon,},
        name: "PersonalComp",
        data: () => ({
            items: [
                    { title: 'Manage my money simply' },
                    { title: 'Save more money' },
                    { title: 'Get a money mortgage' },
                    { title: 'Access calculators to help plan' },
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