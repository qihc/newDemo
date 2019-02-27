import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        loading: false,
        message: "",
    },
    mutations: {
        increment(state, payload) {
            state.loading = payload.Bool;
            state.message = payload.Msg;
        }
    },
    getters: {


    },
    actions: {
        incrementAsync(context, payload) {
            context.commit("increment", payload)
        }
    },
});