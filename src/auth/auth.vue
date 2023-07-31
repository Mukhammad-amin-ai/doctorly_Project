<template>
    <div class="auth_Cover">
        <p>{{ internet }}</p>
        <div class="auth_Inputs">
            <div class="auth_top">
                <div class="auth_top_te">
                    <div class="auth_text">
                        <h4> Patient Register</h4>
                        <p>Get your free Doctorly Patient account now.</p>
                    </div>
                </div>
                <div class="auth_top_picture">
                    <img src="https://doctorly.themesbrand.website/assets/images/profile-img.png" alt="#">
                </div>
                <div class="icon">
                    <img src="https://doctorly.themesbrand.website/assets/images/logo.png" alt="#">
                </div>
            </div>
            <div class="autifi_cover">
                <form class="authifi">
                    <label for="username">Email <span>*</span></label>
                    <input type="email" name="username" v-model="email">
                    <label for="username">Password <span>*</span> </label>
                    <input type="password" name="username" v-model="password">
                    <div class="checckbox">
                        <input type="checkbox" name="remember" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                </form>
            </div>
            <div class="btn_reg">
                <button @click="login"> Log in</button>
            </div>
            <RouterLink to="forgot-password" >

                <p><span><i class='bx bxs-lock-alt'></i></span> Forgot your password?</p>
            </RouterLink>

        </div>
        <div class="already">
            <p>Don't have an account ? ?
                <RouterLink to="/register">
                    <span>Sign Up here</span>
                </RouterLink>
            </p>
            <p> © 2023 Doctorly. Crafted with <span><i class='bx bxs-heart'></i></span> by Themesbrand</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: "",
            internet: ""
        }
    },
    computed: {
        setAuth() {
            return this.$store.state.authentificated
        }
    },

    methods: {
        isLoadingFunc() {
            this.$store.state.isLoading = true
        },
        async login() {
            const url = 'https://tulibayev.uz/api/user/login';
            const postData = {
                password: this.password,
                email: this.email,
            };
            try {
                const response = await axios.post(url, postData,);
                this.isLoadingFunc()
                console.log(response.data);
                if (response.data) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    this.setAuth = true
                    if (response.data) {
                        window.location.href = '/'
                    }
                }
            } catch (error) {
                console.error('Ошибка запроса:', error.message);
                if (error.message === 'Network Error') {
                    // console.log('hello world');
                    this.internet = 'internetda uzulish',
                        this.checker()
                }
            }

        },
        checker() {
            // setTimeout(() => {
            //     let a = setInterval(() => {
            //         this.login()
            //     }, 1000)
            //     clearInterval(a)
            //     this.internet = 'enni ishlamasa kerakoov'
            // }, 10000);
        }
    }
}
</script>
<style scoped>
*{
    text-decoration: none;
}
.auth_Cover {
    width: 100%;
    height: 130vh;
    background-color: #f8f8fb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}




.auth_Inputs {
    width: 450px;
    height: 800px;
    display: flex;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.icon {
    width: 72px;
    height: 72px;
    background-color: #eff2f7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 120px;
    left: 20px;
    border-radius: 50%;
}

.icon img {
    width: 50%;
}

.auth_top {
    width: 100%;
    height: 150px;
    background-color: #d4dbf9;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
}

.auth_top_te {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth_text {
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #556ee6;
}

.auth_text h4 {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
}

.auth_text p {
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    color: #556ee6;

}

.auth_top_picture {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth_top_picture img {
    width: 102%;
}

.checckbox {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

#remember {
    width: 20px;
    height: 20px;
}

.autifi_cover {
    width: 90%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.authifi {
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
}

.authifi input {
    width: 100%;
    height: 35px !important;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0 10px 0 10px;
    color: #495057;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
}

.authifi label {
    font-size: 13px;
    color: #495057;
    font-family: 'Poppins', sans-serif;
}

.authifi label span {
    color: #f46a6a;
}

.auth_Inputs button {
    width: 80%;
    height: 30px;
    background-color: #556ee6;
    border: none;
}

.btn_reg {
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
}

.btn_reg button {
    width: 100%;
    height: 35px;
    border-radius: 0.25rem;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

.agree {
    width: 90%;
    height: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
}

.agree p {
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    color: #495057;
}

.agree p span {
    color: #1f3dd0;
}

.check {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.already {
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.already p {
    color: #495057;
    font-size: 13px;
}

.already p span {
    color: #1f3dd0;

}

.already .bx {
    color: #f46a6a;
}
</style>