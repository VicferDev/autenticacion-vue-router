import Vue from "vue";
import Vuex from "vuex";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
  },
  getters: {},
  mutations: {
    SET_IS_AUTH(state, payload) {
      state.isAuth = payload;
    },
  },
  actions: {
    async loginFirebase({ commit }, payload) {
      const contraseña = payload.contraseña;
      const correo = payload.correo;
      console.log(contraseña, correo);

      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          correo,
          contraseña
        );
        // Signed in
        commit("SET_IS_AUTH", true);
        localStorage.setItem("isAuth", "true");
        router.push("/home");
        console.log(userCredential);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
