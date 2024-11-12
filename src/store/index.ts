import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ActivePage: "Home",
  },
  getters: {
    getActivePage: (state) => {
      return state.ActivePage;
    },
  },
  mutations: {
    changeActivePage(state, newValue) {
      state.ActivePage = newValue;
    },
  },
  actions: {
    handleChangeActivePage(context, newValue) {
      context.commit("changeActivePage", newValue);
    },
  },
});
