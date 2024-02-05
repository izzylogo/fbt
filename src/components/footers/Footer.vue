// eslint-disable-next-line 
/* eslint-disable */
<template>
    <div>
        <footer>
            <TopFooter />
            <div class="bar"></div>
            <MiddleFooter />
            <EndFooter />
        </footer>
    </div>
</template>

<script>
import TopFooter from './Top.vue';
import MiddleFooter from "./Middle.vue";
import EndFooter from "./End.vue"
    export default {
        name: "FooterComp",
        components: {TopFooter, MiddleFooter, EndFooter}
    }
</script>

<style lang="scss" scoped>
footer{
    background-color: #021c40;
    color: white;
    a{
        text-decoration: none;
        color: white;
    }

    .bar{
        background-color: white;
        width: 100%;
        height: 2px;
        margin-top: -10px;
    }
}
</style>