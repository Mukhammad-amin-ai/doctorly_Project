<template >
    <div class="auth_Cover">
        <div class="auth_Inputs">
            <div class="auth_top">
                <div class="textCover">
                    <div class="textL">
                        <h4>Verification Password</h4>
                        <p>Verify your email by code.</p>
                    </div>
                </div>
                <div class="pictureL">
                    <img src="https://doctorly.themesbrand.website/assets/images/profile-img.png" alt="#">
                </div>
            </div>
            <div class="icons">
                <img src="https://doctorly.themesbrand.website/assets/images/logo.png" alt="#">
            </div>
            <div class="autifi_Cover">
                <form class="authifi">
                    <label for="username">Email</label>
                    <input type="email" name="username" id="reset" placeholder="Enter email" v-model="email">
                    <label for="password">Password</label>
                    <input type="password" id="reset" v-model="password">
                </form>
            </div>
            <div class="reset_Btn">
                <div class="resett">
                    <button @click="verify">Confirm</button>
                </div>
            </div>
        </div>
        <div class="text_bottom">
            <!-- <p>Remember It ? 
                <RouterLink to="/login">
               <span> Sign In here</span>    
                </RouterLink>
                </p> -->
            <p>© 2023 Doctorly. Crafted with  <span><i class='bx bxs-heart'></i></span> by Themesbrand</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            password:'',
            email:"",
        }
    },
    methods: {
        async verify() {
            const url = 'https://tulibayev.uz/api/user/emailverification';
            const postData = {
                verification_number: this.password,
                email: this.email,
            };
            try {
                const response = await axios.post(url, postData);
                console.log(response.data);
                if (response.data) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                        if (response.data) {
                            window.location.href = '/'
                        }
                } else {
                    console.log('Ошибка при регистрации:', response.data.error);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        }
    },
}
</script>
<style scoped>
*{
    text-decoration: none;
}
.auth_Cover {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f8f8fb;
}

.auth_Inputs {
    width: 450px;
    height: 500px;
    background-color: #fff;
    border-radius: 0.25rem;
    position: relative;
    overflow: hidden;
}
.auth_top{
    width: 100%;
    height: 130px;
    background-color: #d4dbf9;
    position: absolute;
    top: 0;
    display: flex;
}
.autifi_Cover{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items:end ;
}
#reset {
    width: 100%;
    height: 35px !important;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0 10px 0 10px;
    color: #495057;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
}
.authifi label{
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #495057;
    padding: 10px 0 10px 0;
}
.authifi {
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: end;
    align-items: start;
    flex-direction: column;
    text-align: start;
}

.reset_Btn {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.resett{
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: end;
}
.reset_Btn button{
    width: 110px;
    height: 30px;
    border-radius: 0.25rem;
    background-color: #556ee6;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;
}
.check {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 5px;
}
.textL{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.textL h4{
    font-size: 15px;
    font-family: 'Poppins',sans-serif;
    color: #556ee6;
}
.textL p{
    font-size: 13px;
    font-family: 'Poppins',sans-serif;
    color: #556ee6;
}
.textCover{
    width: 60%;
    height: 80%;
    display: flex;
    justify-content: center;
}
.pictureL{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pictureL img{
    width: 100%;
}
.icons{
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #eff2f7;
    position: absolute;
    top: 90px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icons img{
    width: 50%;
}
.text_bottom{
    width: 30%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}
.text_bottom p {
    font-size: 13px;
    font-family: 'Poppins',sans-serif;
    color: #495057;
}
.text_bottom span{
    color: #556ee6;
}
.bx{
    color: #f46a6a !important;
}
</style>