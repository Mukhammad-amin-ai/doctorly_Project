<template>
    <div class="auth_Cover">
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
                    <label for="firstname">First Name <span>*</span> </label>
                    <input type="text" name="firstname" v-model="firstname">
                    <label for="lastname">Last Name <span>*</span> </label>
                    <input type="text" name="lastname" v-model="lastname">
                    <label for="contact_number">Contact No <span>*</span> </label>
                    <input type="text" name="contact_number" v-model="contact_number">
                    <label for="email">Email <span>*</span></label>
                    <input type="email" name="email" v-model="email">
                    <label for="password">Password <span>*</span> </label>
                    <input type="password" name="password" v-model="password">
                    <label for="confirm">Confirm Password <span>*</span> </label>
                    <input type="password" name="confirm" v-model="confirm">
                </form>
            </div>
            <div class="btn_reg">
                <button @click="register"> Registration</button>
            </div>
            <div class="agree">
                <p>By registering you agree to the Doctorly <RouterLink to="#"><span>Term of use</span> </RouterLink>
                </p>
            </div>

        </div>
        <div class="already">
            <p>Already have an account ?
                <RouterLink to="/logIn">
                    <span>Login</span>
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
            firstname: '',
            lastname: "",
            password: "",
            email: "",
            confirm: "",
            contact_number: "",
        }
    },
    methods: {
        async register() {
            const url = 'https://tulibayev.uz/api/user/register';
            const postData = {
                firstname: this.firstname,
                lastname: this.lastname,
                password: this.password,
                email: this.email,
                password_confirmation: this.confirm,
                contact_no: this.contact_number
            };
            try {
                const response = await axios.post(url, postData);
                console.log(response.data);
                if (response.data) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    if (response.data) {
                        window.location.href = '/login'
                    }
                } else {
                    console.log('Ошибка при регистрации:', response.data.error);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        }
    }
}
</script>
<style scoped>
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
    top: 110px;
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

.autifi_cover {
    width: 90%;
    height: 80%;
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
.already .bx{
    color:#f46a6a;
}</style>