<template>
  <div class="login">
    <h1>Login</h1>
    <form method="post" @submit.prevent="onSubmit">
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        v-model="mail"
        @blur="v$.mail.$touch"
      />
      <p v-if="v$.mail.$error">{{ v$.mail.$errors[0].$message }}</p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        @blur="v$.password.$touch"
      />
      <p v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</p>
      <button type="submit" class="btn btn-primary btn-block btn-large">
        Let me in.
      </button>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, alphaNum, required, minLength } from "@vuelidate/validators";
export default {
  name: "LoginPage",
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) };
  },
  data() {
    return {
      mail: "",
      password: "",
    };
  },
  validations() {
    return {
      mail: { required, email },
      password: { required, minLength: minLength(8), alphaNum },
    };
  },
  methods: {
    async onSubmit() {
      const valide = await this.v$.$validate();
      if (!valide) {
        console.log(this.v$.mail.$error);
      } else {
        this.$router.push("Todos");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.btn {
  display: inline-block;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-color: #4a77d4;
  color: #ffffff;
  border: 1px solid #3762bc;
  border-radius: 5px;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #6eb6de;
}

.btn-block {
  width: 100%;
  display: block;
}

.login,
form,
input {
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-align: center;
}

.login h1 {
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  font-size: 13px;
  color: #fff;
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.5s ease;
}

input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}

p {
  color: red;
  font-weight: 500;
  margin-top: 5px;
}
body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
</style>
