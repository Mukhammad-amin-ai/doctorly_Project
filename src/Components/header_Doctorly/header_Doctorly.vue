<template>
    <div class="header_Cover">
        <div class="header">
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
                    <!-- <div class="userName">
                        <RouterLink to="/logIn">
                            <button class="userNameBtn">
                                <p class="userNameFont">
                                    Temurbek
                                    <i class='bx bx-chevron-down'></i>
                                </p>
                            </button>
                        </RouterLink>
                    </div> -->
                    <div class="text-center">
                        <v-menu >
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props">
                                    Dropdown
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item >
                                    <v-list-item-title>Log in</v-list-item-title>
                                    <v-list-item-title>Log out</v-list-item-title>
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
export default {
 
}
</script>
<style >
.header_Cover {
    width: 100%;
    height: 70px;
    background-color: #2a3042;
    display: flex;
    justify-content: center;
}

.header {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.auth {
    width: 335.15px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.fullScreen,
.fullScreen_Btn {
    width: 46px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.fullScreen_Btn,
.notif_Bell_Btn,
.setting_Btn,
.langBtn {
    background: transparent;
    border: transparent;
    cursor: pointer;
}

.bx-fullscreen,
.bx-bell,
.bx-cog {
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
</style>