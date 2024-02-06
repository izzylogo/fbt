<template>
    <div>
        <div class="contact">
            <div class="container">
                <div class="contact-card">
                    <div class="text">
                        <h2>Find more infomation</h2>
                    </div>
                    <div class="buttons" style="display: flex; align-items: center; gap: 30px;">
                        <button class="button" style="margin-top: 0px !important;">Contact Us</button>
                        <button class="button" style="margin-top: 0px !important;">About Us</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line
        name: "MoreInfo",
    }
</script>

<style lang="scss" scoped>

.container{
    @media (max-width: 900px) {
        padding: 20px 30px;
    }
}
.contact{
    background-repeat: no-repeat;
    background-position: 0 -55px;
    background-size: cover;
    background-color: #f9f8f4;
    padding: 55px 0px;
    background-image: url("../../assets/contact-bg.svg");

    .contact-card{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 35px 15px;
        min-height: 180px;
        position: relative;
        z-index: 1;
        background-color: white;

        @media (max-width: 990px) {
            flex-direction: column;
            gap: 30px;
        }
        &::before{
            content: "";
            position: absolute;
            z-index: -1;
            top: -8px;
            left: -8px;
            height: calc(100% + (2*8px));
            width: calc(100% + (2*8px));
            border-style: solid;
            -o-border-image: url("@/assets/gold-border.svg");
            border-image: url("@/assets/gold-border.svg");
            border-image-repeat: stretch;
            border-image-slice: 31;
            border-width: 28px;
        }

        .text{
            h2{
                flex: 1 0 0;
                font-family: freight-big-pro,"Times New Roman";
                font-weight: 700;
                font-size: 50px;
                line-height: 55px;
                color: #021c40;

                @media (max-width: 990px) {
                    font-size: 25px;
                }
            }
        }

        .buttons{
            display: flex;
            gap: 20px;
        
            button{
                margin-top: 0px !important;
            }
        }
    }
}
</style>