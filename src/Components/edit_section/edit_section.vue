<template >
    <div class="edit_cover">
        <div class="edit_input">
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
                                    <input type="text" name="FirstName" :value="items.firstname"
                                        @input="firstname = $event.target.value"> <br>
                                    <label for="Email">Email <span>*</span></label> <br>
                                    <input type="text" name="Email" :value="items.email"
                                        @input="email = $event.target.value">
                                    <br>
                                    <label for="Title">Title <span>*</span></label> <br>
                                    <input type="text" name="Title" :value="items.title"
                                        @input="title = $event.target.value">
                                    <br>
                                    <label for="Experience">Experience <span>*</span></label> <br>
                                    <input type="text" name="Experience" :value="items.experience"
                                        @input="experience = $event.target.value">
                                </form>
                            </div>
                            <div class="form_right">
                                <form>
                                    <label for="Last Name">Last Name <span>*</span></label> <br>
                                    <input type="text" name="Last Name" :value="items.lastname"
                                        @input="lastname = $event.target.value">
                                    <br>
                                    <label for="Contact Number">Contact Number <span>*</span></label> <br>
                                    <input type="text" name="Contact Number" :value="items.contact_number"
                                        @input="contact_number = $event.target.value"> <br>
                                    <label for="Degree">Degree <span>*</span></label> <br>
                                    <input type="text" name="Degree" :value="items.degree"
                                        @input="degree = $event.target.value"> <br>
                                    <label for="Fees ">Fees <span>*</span></label> <br>
                                    <input type="text" name="Fees" :value="items.fees" @input="fees = $event.target.value">
                                </form>
                            </div>
                        </div>
                        <div class="check_Photo">
                            <div class="check_box">
                                <p>Doctor available days *</p>
                                <input type="checkbox" name="Sun" id="Sun" @click="sun" :checked="sund">
                                <label for="Sun">Sun</label>
                                <input type="checkbox" name="Mon" id="Mon" @click="mon" :checked="monday">
                                <label for="Mon">Mon</label>
                                <input type="checkbox" name="Tue" id="Tue" @click="tue" :checked="tues">
                                <label for="Tue">Tue</label>
                                <input type="checkbox" name="Wen" id="Wen" @click="when" :checked="wen">
                                <label for="Wen">Wen</label>
                                <input type="checkbox" name="Thu" id="Thu" @click="thur" :checked="thurs">
                                <label for="Thu">Thu</label>
                                <input type="checkbox" name="Fri" id="Fri" @click="fri" :checked="frid">
                                <label for="Fri">Fri</label>
                                <input type="checkbox" name="Sat" id="Sat" @click="sat" :checked="satu">
                                <label for="Sat">Sat</label>
                            </div>
                            <div class="photo">
                                <p>Profile Photo</p>
                                <!-- <div class="box">
                                    <div class="imgBox" @click="$refs.file.click">
                                        <img src="" alt="#">
                                    </div>
                                    <input type="file" id="hide" ref="file">
                                </div> -->
                            </div>
                        </div>
                        <div class="btn_update">
                            <button class="updt" @click="edited">
                                Update Details
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
import axios from 'axios'
export default {
    components: {
        footer_Cover
    },
    data() {
        return {
            items: [],
            id: this.$route.params.id,
            firstname: "",
            lastname: "",
            email: "",
            contact_number: "",
            degree: "",
            fees: "",
            experience: "",
            title: "",
            available_days: [],
            monday: false,
            tues: false,
            wen: false,
            thurs: false,
            frid: false,
            satu: false,
            sund: false
        }
    },
    mounted() {
        this.getIdfromParam(this.id)
    },
    methods: {
        cheching() {  
                this.items.available_days.forEach((el) => {
                if (el === 1) {
                    this.monday = true
                } else if (el === 2) {
                    this.tues = true
                } else if (el === 3) {
                    this.wen = true
                } else if (el === 4) {
                    this.thurs = true
                } else if (el === 5) {
                    this.frid = true
                } else if (el === 6) {
                    this.satu = true
                } else if (el === 7) {
                    this.sund = true
                }
            })
        



        },
        mon() {
            this.available_days.push('1')
            // console.log(this.items.available_days);
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

        async getIdfromParam(userId) {
            try {
                const response = await fetch(`https://tulibayev.uz/api/doctor/${userId}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.items = data
                this.cheching()
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async updateData() {
            const url = `https://tulibayev.uz/api/doctor/${this.id}`;
            const dataToUpdate = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                fees: this.fees,
                experience: this.experience,
                contact_number: this.contact_number,
                degree: this.degree,
                title: this.title,
                slots_time: "20",
                available_time_from: "01:00",
                available_time_to: "02:00",
                available_days: this.available_days
            };
            try {
                const response = await axios.put(url, dataToUpdate, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
                console.log('Ответ от сервера:', response.data);
                if (response.data) {
                    window.location.href = '/'
                }
            } catch (error) {
                console.error('Ошибка при отправке PUT-запроса:', error);
            }
        },
        edited() {
            this.getIdfromParam()
            this.updateData()
        }
    },
}
</script>
<style scoped> .edit_cover {
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

 input[type='text'] {
     width: 580px;
     height: 35px !important;
     padding-left: 10px;
     border-radius: 0.25rem;
     border: 1px solid #ced4da;
     font-family: 'Poppins', sans-serif;
     font-size: 13px;
     color: #495057;
 }

 input[type='text']:focus {
     outline: none;
 }

 .check_Photo {
     width: 100%;
     height: 40%;
     padding: 10px 0 0 0;
     display: flex;
 }

 .photo {
     width: 50%;
     height: 100%;
     display: flex;
     align-items: flex-start;

 }

 .photo .box {
     width: 50%;
     height: 100%;
 }

 .check_box {
     width: 50%;
     height: 100%;
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
     overflow: auto;
 }

 .imgBox img {
     width: 100%;
     height: 100%;
 }

 #hide {
     display: none;
 }
</style>