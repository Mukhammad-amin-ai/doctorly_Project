import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state() {
    return {
      isLoading: false,
      items: [],
      error: null,
      authentificated : false
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
    setAuth(state,authentificated){
      state.authentificated = authentificated
    }
  },
  actions: {
    fetchData({ commit }, page) {
      commit("setLoading", true);
      axios
        .get(`https://tulibayev.uz/api/doctor?page=${page}`, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
        .then((response) => {
          if(response.status === 401){
            window.location.href ='/login'
          }
          commit("setItems", response.data);
          commit("setLoading", false);
        })
        .catch((error) => {
          if(error.status === 401){
            window.location.href ='/login'
          }
          commit("setError", error.message);
          commit("setLoading", false);
        });
    },
  },
});

export default store;
