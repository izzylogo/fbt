/* eslint-disable */
<template>
    <div>
        <div class="container">
            <div class="middle-content">
                <div class="left">
                    <p>First Bank Texas is your local community bank that offers a range of personal and business banking solutions including savings and checking accounts, individual retirement accounts (IRAs), VA loans, USDA loans, mortgages, commercial loans, agriculture lending, working capital loans, real estate loans and much more. Bank online, with our mobile app or visit one of our conveniently located North Texas locations in the Greater Abilene, West Fort Worth and Grapevine areas.</p>
                </div>
                <div class="right">
                    <h5>Growing Texas Communities</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <span>First Bank Carees</span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    Careers
                                </span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>About Our Bank</span>
                                <Icon icon="ep:right" width="14" height="14" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

    export default {
        name: "MiddleFooter",
        components: {Icon,}
    }
</script>

<style lang="scss" scoped>

.container{
    padding: 45px 15px;

    .middle-content{
        display: flex;
        gap: 100px;

        @media (max-width: 990px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

    }
}
.left{
    flex: 1.5;
    text-align: left;

    @media (max-width: 990px) {
        text-align: center;
    }
    p{
        font-size: 12px;
    }

}

.right{
    text-align: left;
    flex: 1;

    ul{
        @media (max-width: 990px) {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        li{
            margin-top: 10px;
            font-size: 13px;
        }
    }
    a{
        font-size: 13px;
        display: flex;
        align-items: center;
    }
}
</style>