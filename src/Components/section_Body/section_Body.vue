<template >
    <div class="main_Cover">
        <div class="doctor_list">
            <div class="main_body">
                <div class="doctor">
                    <p>DOCTOR LIST</p>
                    <p>Dashboard / Doctors</p>
                </div>
                <div class="doc_white">
                    <div class="list_inside">
                        <div class="list_btn">
                            <div class="list_btn_left">
                                <RouterLink to="/create">
                                    <button class="add_New_Doc">
                                        <p> + New Doctor </p>
                                    </button>
                                </RouterLink>
                                <p>Show <span>
                                        <select name="doctorlist" class="doctorlist">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </span> entries</p>
                            </div>
                            <div class="list_btn_right">
                                <label for="search">Search:</label>
                                <input @keyup="inputSearch" v-model="search" type="text" name="search">
                            </div>
                        </div>
                        <div class="list_table">
                            <Spinner />
                            <!-- <div class="table"> -->
                            <table>
                                <thead>
                                    <tr>
                                        <th><span>
                                                <p>Sr. </p>
                                                <p> No</p>
                                            </span></th>
                                        <th>
                                            <p>Title</p>
                                        </th>
                                        <th>
                                            <p>Name</p>
                                        </th>
                                        <th>
                                            <p>Contact No</p>
                                        </th>
                                        <th>
                                            <p>Email</p>
                                        </th>
                                        <th>
                                            <p>Pending Appointment</p>
                                        </th>
                                        <th>
                                            <p>Complete Appointment</p>
                                        </th>
                                        <th>
                                            <p>Option</p>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in items.data" :key="item">
                                        <td>
                                            <p>{{ item.id }}</p>
                                        </td>
                                        <td>
                                            <p>{{ item.title }}</p>
                                        </td>
                                        <td>
                                            <p> {{ item.firstname }} {{ item.lastname }}</p>
                                        </td>
                                        <td>
                                            <p>{{ item.contact_number }}</p>
                                        </td>
                                        <td>
                                            <p>{{ item.email }}</p>
                                        </td>
                                        <td>
                                            <p>{{ item.experience }}</p>
                                        </td>
                                        <td>
                                            <p>{{ item.slots_time }}</p>
                                        </td>
                                        <td>
                                            <RouterLink :to="{ path: item.id + '/edit' }">
                                                <button>
                                                    <i class='bx bx-edit-alt'></i>
                                                </button>
                                            </RouterLink>
                                            <button @click="deleteFunc(item.id)">
                                                <i class='bx bx-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="list_end">
                                <p>Showing to 10 of 10 entries</p>
                                <div class="list_end_bts">
                                    <div class="first" v-for="item in items.links" :key="item">
                                        <button @click="changeApi(item.label)">
                                            {{ item.label }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
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
import Spinner from '../../ui/spinner.vue';
import axios from 'axios'
import { mapMutations } from 'vuex';
export default {
    components: {
        footer_Cover,
        Spinner
    },
    data() {
        return {
            page: '1',
            search: '',
            find: '',
            delete: '',
            edit: '',
            isActive: true,
            isDisactive: false
        };
    },
    computed: {
        items() {
            return this.$store.state.items
        },
        loading() {
            return this.$store.state.api.loading;
        },
        setAuth() {
            return this.$store.state.authentificated
        },

    },
    mounted() {
        this.fetchData(this.page)
    },
    methods: {
        ...mapMutations([
            'setItems'
        ]),
        fetchData(page) {
            this.$store.dispatch('fetchData', page);
        },
        changeApi(item) {
            this.page = item
            this.fetchData(this.page)
        },
        async getDataSearch() {
            try {
                const response = await fetch(`https://tulibayev.uz/api/search-doctor/${this.search}`,
                    { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.items = data;
                this.setItems(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        inputSearch() {
            this.getDataSearch()
        },
        async deleteDataFromAPI() {
            try {
                const token = localStorage.getItem('token');
                const headers = { Authorization: 'Bearer ' + token };
                const response = await axios.delete(`https://tulibayev.uz/api/doctor/${this.delete}`, { headers });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error deleting data:', error);
            }
        },
        async deleteFunc(item) {
            if (window.confirm('ochiraymi')) {
                this.delete = item
                await this.deleteDataFromAPI()
                this.fetchData()
            }
        },
    },
}


</script>
<style scoped>
.main_Cover {
    width: 100%;
    height: 180vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
}

.doctor_list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
}

.main_body {
    width: 85%;
    height: 80%;
    display: flex;
    flex-direction: column;
}

.doctor {
    width: 100%;
    height: 70px;
    background-color: #f8f8fb;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.doc_white {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list_inside {
    width: 96%;
    height: 94%;
    position: relative;
    z-index: 0;
}

.list_btn {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list_btn_left {
    width: 20%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
}

.add_New_Doc {
    width: 148px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #556ee6;
}

.add_New_Doc p {
    color: #fff;
    font-weight: 400;
}

.doctorlist:focus {
    outline: none;
}

.doctorlist {
    width: 55px;
    height: 30px;
    border: 1px solid !important;
    border-radius: 0.25rem;
    padding: 0 5px 0 5px;
    font-size: 11px;
    font-family: 'Poppins', sans-serif;
}

.list_btn_right {
    width: 20%;
    padding-bottom: 10px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
}

.list_btn_right label {
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    color: #495057;
}

.list_btn_right input {
    width: 157px;
    height: 27.6px;
    padding: 4px 8px;
    border: 1px solid #ced4da;
    border-radius: 0.2rem;
}

.list_btn_right input:focus {
    outline: none;
}

.list_table {
    width: 100%;
    height: 90%;
}

table {
    width: 100%;
    height: 90%;
    border-collapse: collapse;
    position: relative;
    z-index: 1;
}

th,
td {
    border: 1px solid #f6f6f6;
    text-align: center;
}


thead th p {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #495057;
}

td p {
    font-family: 'Poppins', sans-serif;
    font-size: 13px !important;
    font-style: normal;
    font-weight: 400;
    color: #495057;
}

th:nth-child(1) {
    width: 47px;
    height: 64px;
}

th:nth-child(1)span {
    display: flex;
    flex-direction: column;
}

td:nth-child(1) {
    width: 47px;
    height: 64px;

}

td:nth-child(8) {
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

tbody button {
    width: 28.98px;
    height: 27px;
    border-radius: 50%;
    background-color: #3452e1;
    border: none;
    color: #fff;
}

p {
    font-size: 14px;
    font-weight: 700px;
    font-style: normal;
    color: #000;
    font-family: "Poppins" sans-serif;
}


.list_end {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list_end_bts {
    width: auto;
    height: 100%;
    height: 33px;
    text-align: center;
    display: flex;
}

.first button {
    width: auto;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    color: #495057;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-style: normal;
    border: 1px solid;
}

.first {
    cursor: pointer;
}

@media only screen and (max-width: 992px) {
    .main_Cover {
        height: 190vh;
        gap: 50px;
    }

    .main_body {
        height: 90%;
    }

    .list_btn {
        height: 120px;
    }

    .list_btn_left {
        width: 30%;
    }

    .list_btn_right {
        width: 30%;
    }
    th:nth-child(2){
        display: none;
    }
    td:nth-child(2){
        display: none;
    }
}
</style>