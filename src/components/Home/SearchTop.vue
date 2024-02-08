<template>
    <div>
        <div class="right">
            <ul>
                <li>
                    <Icon icon="mdi:location" style="color: #cb9d08" />
                    Locations
                </li>
                <li>
                    <Icon icon="ic:round-phone" style="color: #cb9d08" />
                    Contact
                </li>
                <li>
                    <Icon icon="ic:sharp-search" style="color: #cb9d08" />
                    Search
                </li>
            </ul>
            <div class="login">
                <button class="login-btn" @click="toggleLogin">
                    <Icon icon="lucide:lock" width="24" height="24" class="lock"/>
                    <Icon icon="heroicons:lock-open" width="24" height="24" class="unlock"/>
                    <p>Login</p>
                </button>
                <div id="login-form" :class="{'login-form' : showLogin, 'show-login' : !showLogin}">
                    <div class="contained">
                        <h2>Online Banking Login</h2>
                        <form >
                            <input type="text" placeholder="Enter Username" v-model="email">
                            <input type="password" placeholder="Enter Password" v-model="password">
                            <button v-if="!loginDetail" >Login</button>
                            <button v-else>
                                <router-link to="/profile">
                                    Login
                                </router-link>
                            </button>
                        </form>
                        <div class="bottom">
                            <div class="reg">
                                <a href="#" style="font-size: 13px; text-decoration: underline;">Register New User</a>
                            </div>
                            <div class="password">
                                <a href="#" style="font-size: 13px; text-decoration: underline;">Forgot Username</a> 
                                <span> | </span>
                                <a href="#" style="font-size: 13px; text-decoration: underline;">Reset Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
   name: "SearchTopComponent",
   components: {Icon,},
   data() {
    return{
        showLogin: false,
        email: "",
        password: "",
    }
   },
   computed: {
       loginDetail() {
           const correctEmail = "annefowler@gmail.com"
           const correctPassword = "Hanna17092"
    
           return this.email === correctEmail & this.password === correctPassword
       },
   },
   methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin
        },

        showError() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../scss/SearchTop.scss";

.right{
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0px auto;
    // margin-bottom: 10px;
    max-width: 80%;
    position: relative;
    
    ul{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 100px;
        li{
            list-style: none;
            cursor: pointer;
            display: flex;
            font-size: 13px;
            font-weight: 600;
            align-items: center;
            gap: 5px;
            color: #5f6062;
            margin-left: 10px;
        }

        @media (max-width: 990px) {
            display: none;
        }
    }
}

.login{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    position: absolute;
    z-index: 1;
    top: -10px;
    

    .login-btn{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 10px;
        padding: 23px;
        border: 0;
        background-color: #ba0215;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        transition: .6s ease;

        @media (max-width: 990px) {
            padding: 10px;
            font-size: 13px;
        }

        &:hover{
            background-color: #021c40;
        }

        &:hover .lock{
            display: none;
            transition: .6s ease;
        }

        .unlock{
            display: none;
            transition: transform .25s ease-out,-webkit-transform .25s ease-out;
            transform: translateY(0px);
        }

        &:hover .unlock{
            display: block;
            transform: translateY(-5px);
            transition: transform .25s ease-out,-webkit-transform .25s ease-out;
        }
    }
}

</style>