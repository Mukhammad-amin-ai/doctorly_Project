<template>
    <div class="header_Cover">
        <div class="header">
            <div class="menu">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="rgba(0, 0, 0, 0)" v-bind="props">
                            <i class='bx bx-menu'></i>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title> <button class="nav-dashboard">
                                    <i class='bx bx-home-circle'></i>
                                    <p>Dashboard</p>
                                </button></v-list-item-title>
                            <v-list-item-title> <button class="nav-doctors">
                                    <i class='bx bx-user-circle'></i>
                                    <p>Doctors</p>
                                </button></v-list-item-title>
                            <v-list-item-title> <button class="nav-patients">
                                    <i class='bx bx-user-circle'></i>
                                    <p>Patients</p>
                                </button></v-list-item-title>
                            <v-list-item-title> <button class="nav-receptionist">
                                    <i class='bx bx-user-circle'></i>
                                    <p> Receptionist</p>
                                </button></v-list-item-title>
                            <v-list-item-title> <button class="nav-apointment">
                                    <i class='bx bx-list-plus'></i>
                                    <p>Appointment List</p>
                                </button> </v-list-item-title>
                            <v-list-item-title> <button class="nav-transaction">
                                    <i class='bx bx-list-check'></i>
                                    <p> Transaction</p>
                                </button> </v-list-item-title>
    
                        </v-list-item>
                    </v-list>
                </v-menu>

            </div>
            <div class="logo">
                <RouterLink to="/">
                    <img src="https://doctorly.themesbrand.website/assets/images/logo-light.png" alt="#" height="22">
                </RouterLink>
            </div>
            <div class="auth">
                <div class="fullScreen">
                    <button class="fullScreen_Btn">
                        <i class='bx bx-fullscreen'></i>
                    </button>
                </div>
                <div class="lang">
                    <button class="langBtn">
                        <img src="https://doctorly.themesbrand.website/assets/images/flags/us.svg" class="rounded"
                            alt="Header Language" height="20">
                    </button>
                </div>
                <div class="notif">
                    <button class="notif_Bell_Btn">
                        <i class='bx bx-bell bx-tada'></i>
                    </button>
                </div>
                <div class="user">
                    <div class="userIcon">
                        <img class="rounded-circle header-profile-user"
                            src=" https://doctorly.themesbrand.website/storage/images/users/1679942419.png" alt="Avatar">
                    </div>
                    <div class="text-center">
                        <v-menu class="block">
                            <template v-slot:activator="{ props }">
                                <v-btn color="rgba(0, 0, 0, 0)" v-bind="props">
                                    <p>Temurbek</p>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        <p class="logout" @click="logout">Log out</p>
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <div class="settings">
                    <button class="setting_Btn">
                        <i class='bx bx-cog  bx-spin'></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    methods: {
        async logout() {
            try {
                const response = await axios.get('https://tulibayev.uz/api/user/logout', {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
                })
                localStorage.removeItem('token')
                if (response.data.message === "User logged out") {
                    window.location.href = '/login'
                }
            } catch (error) {
                console.error('Logout failed:', error);
            }
        }
    }
}
</script>
<style scoped >
.header_Cover {
    width: 100%;
    height: 70px;
    background-color: #2a3042;
    display: flex;
    justify-content: center;
}

.menu {
    display: none;
}

.header_Cover .header {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header_Cover .header .logo {
    width: 100px;
    height: auto;
}

.header .auth {
    width: 335.15px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}



.header .auth .fullScreen,
.header .auth .fullScreen .fullScreen_Btn {
    width: 46px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.header .auth .fullScreen .fullScreen_Btn,
.header .auth .notif.notif_Bell_Btn,
.header .auth .settings .setting_Btn,
.header .auth .lang .langBtn {
    background: transparent;
    border: transparent;
    cursor: pointer;
}

.bx {
    font-size: 25px;
    color: #fff;
}

.lang,
.langBtn {
    width: 44px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.notif .notif_Bell_Btn {
    width: 46px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.user {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.userNameBtn {
    width: 100%;
    height: 100%;
    background: transparent;
    border: transparent;
    cursor: pointer;
}

.userIcon {
    width: 30%;
    height: 50%;
    border-radius: 50%;
    background-color: #5f6471;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.rounded-circle {
    width: 90%;
}

.userName {
    width: 70%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.userNameFont {
    font-size: 19px;
    font-weight: 700px;
    font-style: normal;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    display: flex;
}

.settings,
.setting_Btn {
    width: 46px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.text-center p {
    color: #fff;
}

.logout {
    cursor: pointer;
}

@media only screen and (max-width: 992px) {
    .logo {
        display: none;
    }

    .menu {
        display: block;
        color: #fff;
    }
}
</style>