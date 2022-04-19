<template>
  <div class="login">
    <h1>This is an login page</h1>
    <div class="container">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            placeholder="correo"
            v-model="correo"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="contraseña"
            v-model="contraseña"
          />
        </div>
        <button @click="login" class="login__cta btn btn-primary">
          Ingresar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      contraseña: "",
      correo: "",
    };
  },
  methods: {
    ...mapActions(["loginFirebase"]),
    async login() {
      await this.loginFirebase({
        correo: this.correo,
        contraseña: this.contraseña,
      });
    },
  },
};
</script>
