<template>
    <div>
        <div class="together-cover">
            <v-tabs fixed-tabs v-model="tab" bg-color="#021c40" class="tabs_contain">
                <v-tab value="one">Business</v-tab>
                <v-tab value="two">Item Two</v-tab>
            </v-tabs>
        
            <v-window v-model="tab">
                <v-window-item value="one"> <BusinessComp :firstComp="firstComp"/> </v-window-item>
                <v-window-item value="two"> <PersonalComp :secondComp="secondComp"/> </v-window-item>        
            </v-window>
        </div>
    </div>
</template>

<script>
import BusinessComp from './Business.vue';
import PersonalComp from './Personal.vue';
export default{
    name: "TogetherComponent",
    data: () => ({
      tab: null,

      details: [

      ],

      firstComp: {
        firstImage: require("../../assets/bus-lineofcredit.svg"),
        secImage: require("../../assets/bus-checking.svg"),
        thirdImage: require("../../assets/bus-agriculture-loans.svg"),
        fourthImage: require("../../assets/bus-real-estate-loans.svg"),
        firstWord: "Lines Of Credit",
        secWord: "First Business Checking",
        thirdWord: "Farm & Rach Loans",
        fourthWord: "Commercial Real Estate Loan",
        rightImage: require("../../assets/bus-car.jpg"),
        rightTopWord: "Local SPA Lending",
        rightBottomWord: "Experienced lender, local decisions"
      },
      secondComp: {
        firstImage: require("../../assets/mortgages.svg"),
        secImage: require("../../assets/auto-loans.svg"),
        thirdImage: require("../../assets/checking.svg"),
        fourthImage: require("../../assets/savings.svg"),
        firstWord: "Mortgages",
        secWord: "Auto Loans",
        thirdWord: "Checking Accounts",
        fourthWord: "Savings Account",
        rightImage: require("../../assets/Mortgages.jpg"),
        rightTopWord: "Buy Your Dream Home",
        rightBottomWord: "The right loan to unlock your front door"
      }
    }),
    components: {BusinessComp, PersonalComp}
}
</script>

<style lang="scss" scoped>
@import "../../scss/Together.scss";
.tabs_contain{
    justify-content: center !important;
}
</style>