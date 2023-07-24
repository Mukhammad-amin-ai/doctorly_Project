import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            isLoading:false  
        };
    },
    mutations: {
        setIsLoad(state,payload) { 
           state.isLoading === payload
        }
    }
});

export default store;
