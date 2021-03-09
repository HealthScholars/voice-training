import Vue from "vue";
import Vuex from "vuex";
// import apollo from "../apolloClient";
// import gql from "graphql-tag";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // accounts: []
  },
  mutations: {
    // setAccounts(state, accounts) {
    //   Vue.set(state, "accounts", accounts);
    // }
  },
  actions: {
    // async getAccounts({ commit }) {
    //   const response = await apollo.query({
    //     fetchPolicy: "no-cache",
    //     query: gql`
    //       query listAccounts {
    //         listAccounts {
    //           items {
    //             id
    //             totalUsedSeats
    //             totalAllowedSeats
    //           }
    //         }
    //       }
    //     `
    //   });
    //   let accounts = response.data.listAccounts.items;
    //   commit("setAccounts", accounts);
    // }
  },
  modules: {}
});
