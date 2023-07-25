<template >
    <div class="header_cover">
        <header_Doctorly/>
        <navbar_Doctorly/>
    </div>
    <div class="edit_cover">
        <div class="edit_input">
            <!-- {{ items }} -->
            <div class="edit">
                <div class="text_head">
                    <p>UPDATE DOCTOR DETAILS</p>
                    <p>Dashboard / Doctors / Update Doctor Details</p>
                </div>
                <div class="button">
                    <RouterLink to="/">

                        <button class="back">
                            <i class='bx bx-left-arrow-alt'></i>
                            <p>Back to profile</p>
                        </button>
                    </RouterLink>
                </div>
                <div class="box">
                    <div class="form_box">
                        <div class="basic">
                            <p>Basic Information</p>
                        </div>
                        <div class="form">
                            <div class="form_left">
                                <form>
                                    <label for="FirstName">First Name <span>*</span></label> <br>
                                    <input type="text" name="FirstName" v-model="firstname">
                                    <br>
                                    <label for="Email">Email <span>*</span></label> <br>
                                    <input type="text" name="Email" v-model="email"> <br>
                                    <label for="Title">Title <span>*</span></label> <br>
                                    <input type="text" name="Title" v-model="title"> <br>
                                    <label for="Experience">Experience <span>*</span></label> <br>
                                    <input type="text" name="Experience" v-model="experience">
                                </form>
                            </div>
                            <div class="form_right">
                                <form>
                                    <label for="Last Name">Last Name <span>*</span></label> <br>
                                    <input type="text" name="Last Name" v-model="lastname"> <br>
                                    <label for="Contact Number">Contact Number <span>*</span></label> <br>
                                    <input type="text" name="Contact Number" v-model="contact_nomber"> <br>
                                    <label for="Degree">Degree <span>*</span></label> <br>
                                    <input type="text" name="Degree" v-model="degree"> <br>
                                    <label for="Fees ">Fees <span>*</span></label> <br>
                                    <input type="text" name="Fees " v-model="fees">
                                </form>
                            </div>
                        </div>
                        <div class="check_Photo">
                            <div class="check_box">
                                <p>Doctor available days *</p>
                                <div class="chekboxs">
                                    <input type="checkbox" name="Sun" id="Sun" @click="sun">
                                    <label for="Sun">Sun</label>
                                    <input type="checkbox" name="Mon" id="Mon" @click="mon">
                                    <label for="Mon">Mon</label>
                                    <input type="checkbox" name="" Tue id="Tue" @click="tue">
                                    <label for="Tue">Tue</label>
                                    <input type="checkbox" name="Wen" id="Wen" @canplay="when">
                                    <label for="Wen">Wen</label>
                                    <input type="checkbox" name="Thu" id="Thu" @click="thur">
                                    <label for="Thu">Thu</label>
                                    <input type="checkbox" name="Fri" id="Fri" @click="fri">
                                    <label for="Fri">Fri</label>
                                    <input type="checkbox" name="Sat" id="Sat" @click="sat">
                                    <label for="Sat">Sat</label>
                                </div>
                                <p>Slots Time (In Minute) *</p>
                                <div class="slots">
                                    <v-combobox label="Slots Time" v-model="slots_time" variant="solo" 
                                        :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']"></v-combobox>
                                </div>
                                <p>Available Time *</p>
                                <div class="avaible">
                                    <div class="times">
                                        <div class="from">
                                            <p>From:</p>
                                            <input type="time" name="from" v-model="available_from">
                                        </div>
                                        <div class="to">
                                            <p>To:</p>
                                            <input type="time" name="to" v-model="available_to">
                                        </div>
                                    </div>
                                    <!-- <div class="addTime">
                                        <button>Add Time</button>
                                    </div> -->
                                </div>
                            </div>
                            <div class="photo">
                                <p>Profile Photo</p>
                                <div class="box">
                                    <div class="imgBox" @click="$refs.file.click">
                                        <img src="https://doctorly.themesbrand.website/assets/images/users/noImage.png"
                                            alt="#">
                                    </div>
                                    <input type="file" id="hide" ref="file">
                                </div>
                            </div>
                        </div>
                        <div class="btn_update">
                            <button class="updt" @click="createUser">
                                Create user
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer_Cover />
    </div>
</template>
<script>
import footer_Cover from '../footer_section/footer_secton.vue'
import header_Doctorly from '../header_Doctorly/header_Doctorly.vue'
import navbar_Doctorly from '../navbar_Doctorly/navbar_Doctorly.vue'
import axios from 'axios'
export default {
    components: {
        header_Doctorly,
        navbar_Doctorly,
        footer_Cover
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            contact_nomber: "",
            title: "",
            degree: "",
            experience: "",
            fees: "",
            slots_time: "",
            available_from: "",
            available_to: "",
            available_days: []
        }
    },
    methods: {
        mon() {
            this.available_days.push('1')
        },
        tue() {
            this.available_days.push('2')
        },
        when() {
            this.available_days.push('3')
        },
        thur() {
            this.available_days.push('4')

        },
        fri() {
            this.available_days.push('5')

        },
        sat() {
            this.available_days.push('6')

        },
        sun() {
            this.available_days.push('7')
        },



        async createUser() {
            const url = 'https://tulibayev.uz/api/doctor';
            const createdata = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact_number: this.contact_nomber,
                title: this.title,
                degree: this.degree,
                experience: this.experience,
                fees: this.fees,
                slots_time: this.slots_time,
                available_time_from: this.available_from,
                available_time_to: this.available_to,
                available_days: this.available_days,
            };

            try {
                const response = await axios.post(url, createdata, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
                if (response.data) {
                    console.log(response.data);
                    window.location.href = '/'
                } else {
                    console.log('Ошибка:', response.data.error);
                }
            } catch (error) {
                console.error('Ошибка запроса:', error);
            }
        }
    }
}
</script>
<style scoped>
*{
    text-decoration: none;
}

.header_cover{
    width: 100%;
    height: auto;
    position: fixed;
}
.edit_cover {
    width: 100%;
    height: 180vh;
    background-color: #f8f8fb;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.edit_input {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.edit {
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.text_head {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box {
    width: 100%;
    height: 80%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
}

.form_box {
    width: 97%;
    height: 97%;
    display: flex;
    flex-direction: column;

}

.basic {
    border-left: 5px solid #556ee6 !important;
    border: 1px solid rgba(120, 130, 140, .13);
}

.basic p {
    font-size: 13.5px;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    padding: 10px;
    color: #495057;
}

.back {
    width: 140px;
    height: 35px;
    background-color: #556ee6;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 0.25rem;

}

.back .bx {
    font-size: 20px;
    color: #fff;
}

.back p {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #fff;
    font-weight: 400;

}

.form {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
}

.form_left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

form {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.form_right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

label {
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
}

span {
    color: #f46a6a;
}

.form input[type='text'] {
    width: 580px;
    height: 35px;
    padding: 5px 0 5px 10px;
    /* padding-left: 10px; */
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
}

.check_Photo {
    width: 100%;
    height: 50%;
    padding: 10px 0 0 0;
    display: flex;
}

.photo {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    padding-top: 10px;
}

.photo .box {
    width: 50%;
    height: 100%;
}

.check_box {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.check_box p {
    padding: 10px;
}

.chekboxs {
    width: 100%;
    height: 20%;
}

.check_box label {
    padding: 10px;
}

.btn_update {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: end;
    justify-content: flex-start;
}

.updt {
    width: 120px;
    height: 36px;
    background-color: #6075ec;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #fff;
    border: transparent;
    border-radius: 0.25rem;
}

.photo .box {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    gap: 10px;
}

.imgBox {
    width: 60%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #495057;
    overflow: hidden;
}

.imgBox img {
    width: 100%;
    height: 100%;
}

.slots {
    width: 180px;
}

.avaible {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.avaible input {
    width: 230px;
    height: 35px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 10px;
}

.times {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.addTime {
    width: 100%;
    height: 100%;
    padding: 20px 0 20px 0;
}

.addTime button {
    width: 87px;
    height: 35px;
    background-color: #556ee6;
    border-radius: 0.25rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
}

#hide {
    display: none;
}
</style>