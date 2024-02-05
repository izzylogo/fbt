/* eslint-disable */
<template>
    <div>
        <div class="end-main">
            <div class="container">
                <div class="left">
                    <ul>
                        <li>Federal Deposit Insurance Corporation</li>
                        <li>Consumer Complaint Notice</li>
                        <li>Online Banking Policy</li>
                        <li>Privacy Statement</li>
                        <li>CRA Statement</li>
                        <li>Diversity and Inclusion</li>
                        <li>Miscellaneous Fees</li>
                        <li>Statement of Condition</li>
                        <li>Terms of Use</li>
                        <li>Website Accessibility</li>
                        <li>Sitemap</li>
                        <li>Funds Availability Policy</li>
                    </ul>
                </div>
                
                <div class="copyright">
                    <p>© 2024 First Bank Texas. | Website by <a href="#">ZAG Interactive</a></p>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EndFooter"
    }
</script>

<style lang="scss" scoped>

.end-main{
    background-color: #011127;
}
.container{
    font-size: 13px !important;
    padding: 30px 5px;
    text-align: left;

    .left{
        margin-bottom: 30px;
        ul{
            display: flex;
            gap: 10px 15px;
            flex-wrap: wrap;

            li{
                font-size: 12px;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
</style>