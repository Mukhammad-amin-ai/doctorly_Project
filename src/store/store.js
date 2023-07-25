import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      isLoading: false,
      items: [],
      error: null,
    };
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    fetchData({ commit }, page) {
      commit("setLoading", true);
      axios
        .get(`https://tulibayev.uz/api/doctor?page=${page}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          commit("setItems", response.data);
          if(response.status === 401){
            window.location.href ='/login'
          }
          commit("setLoading", false);
        })
        .catch((error) => {
          commit("setError", error.message);
          commit("setLoading", false);
        });
    },
  },
});

export default store;
