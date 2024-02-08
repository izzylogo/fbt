<template>
    <v-layout>
        <!-- <v-navigation-drawer v-model="drawer" location="right" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer> -->

        <div>
            <div class="hero">
                <div class="cover">
                    <SearchTopComponent/>
                    <NavbarComponent :drawer="drawerToggle"/>
                    
                </div>
                <!-- <HeroComponent/> -->
                <div class="cover2">
                    <div class="title">
                        <h1>
                            Helping Texans
                            <br>
                            <em>bank locally</em>
                            since 1880
                        </h1>
                        <button class="learn">Learn More</button>
                    </div>
                </div>
                <!-- <v-btn>Clickables</v-btn> -->
                <div class="image">
                    <img src="../assets/background.jpg" alt="logo" class="background-image">
                </div>
            </div>
    
            <Together />
    
            <!-- Section 3 -->
            <SectionThree />
    
            <!-- section 4 -->
            <SectionFour />
    
            <!-- more information -->
            <MoreInfo/>
    
            <!-- footer -->
            <!-- <FooterComp /> -->
        </div>
    </v-layout>
</template>

<script>
/* eslint-disable */
// import HeroComponent from '@/components/Home/HeroComponent';
import NavbarComponent from '@/components/Home/Navbar';
import SearchTopComponent from '@/components/Home/SearchTop'
import Together from '../components/Together/Together.vue';
import SectionThree from '@/components/Section3/SectionThree.vue';
import SectionFour from '@/components/Section4/SectionFour';
import MoreInfo from '@/components/contact/MoreInfo';
// import FooterComp from '../components/footers/Footer.vue';

export default {
    name: "HomeView",
    components: {
        Together,
        SearchTopComponent,
        // HeroComponent,
        NavbarComponent,
        SectionThree,
        SectionFour,
        // eslint-disable-next-line
        MoreInfo,
        // FooterComp,
    },
    data: () => ({
      drawer: true,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ],
    }),

}
</script>

<style lang="scss" scoped>
.v-layout{
    display: block;
}
.hero{
    height: 640px;

    @media (max-width: 990px) {
        height: 100%;
    }
}

.cover{
    position: relative;
    padding: 10px;
    z-index: 10;
}

.cover2{
    position: relative;
    padding: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;

    @media (max-width: 990px) {
        margin-bottom: 70px;
    }

    h1{
        font-size: 60px;
        color: #021c40;
        font-family: Bodoni Moda, 'Courier New', Courier, monospace;
        font-weight: 900;

        @media (max-width: 990px) {
            font-size: 30px;
        }

        em{
            font-family: Great vibes, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }

    button{
        border: 2px solid #034ba6;
        padding: 14px 40px;
        margin-top: 30px;
        color: #034ba6;
        outline: #034ba6 !important;
        transition: .3s ease;
        font-weight: 700;

        @media (max-width: 990px) {
            margin-top: 10px;
        }

        &:hover{
            background-color: #034ba6;
            color: white;
        }
    }
}
.image{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-height: 640px;
    height: auto;

    img{
        height: 100%;
        width: 100%;
        // -o-object-fit: cover;
        object-fit: cover;
        // -o-object-position: center center;
        object-position: center center;

        @media (max-width: 990px) {
            height: auto;
            min-height: 500px;
        }

        @media (max-width: 600px) {
            min-height: 400px;
        }
    }
}
</style>