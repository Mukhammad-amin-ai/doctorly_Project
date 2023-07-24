<template>
    <div class="navbarCover">
        <div class="nav">
            <div class="navbar">
                <div class="nav-dashboard">
                    <button class="nav-dashboard">
                        <i class='bx bx-home-circle'></i>
                        <p>Dashboard</p>
                    </button>
                </div>
                <div class="nav-doctors">
                    <button class="nav-doctors">
                        <i class='bx bx-user-circle'></i>
                        <p>Doctors</p>
                    </button>

                </div>
                <div class="nav-patients">
                    <button class="nav-patients">
                        <i class='bx bx-user-circle'></i>
                        <p>Patients</p>
                    </button>

                </div>
                <div class="nav-receptionist">
                    <button class="nav-receptionist">
                        <i class='bx bx-user-circle'></i>
                        <p> Receptionist</p>
                    </button>

                </div>
                <div class="nav-apointment">
                    <button class="nav-apointment">
                        <i class='bx bx-list-plus'></i>
                        <p>Appointment List</p>
                    </button>

                </div>
                <div class="nav-transaction">
                    <button class="nav-transaction">
                        <i class='bx bx-list-check'></i>
                        <p> Transaction</p>
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
<style>
button {
    cursor: pointer;
}

p {
    font-size: 14px;
    font-weight: 700px;
    font-style: normal;
    color: #000;
    font-family: 'Poppins', sans-serif;
}

.navbarCover {
    width: 100%;
    height: 52px;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
}

.nav {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

}

.navbar {
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}

.nav-dashboard {
    width: 122px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-doctors {
    width: 138px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-patients {
    width: 140px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-receptionist {
    width: 170px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-apointment {
    width: 182px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}

.nav-transaction {
    width: 147px;
    height: 100%;
    background: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
}</style>