<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        v-model.trim="mail"
        @blur="$v.mail.$touch"
      />
      <p v-if="$v.mail.$error">{{ $v.mail.$errors[0].$message }}</p>
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        @blur="$v.password.$touch"
      />
      <p v-if="$v.password.$error">{{ $v.password.$errors[0].$message }}</p>
      <button type="submit" class="btn btn-primary btn-block btn-large">
        Let me in.
      </button>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, alphaNum } from "@vuelidate/validators";

export default {
  name: "LoginForm",
  setup() {
    const state = {
      mail: "",
      password: "",
    };

    const v$ = useVuelidate({ state, validations });

    function onSubmit() {
      v$.$touch();
      if (v$.$invalid) {
        return;
      }
    }

    return { v$, onSubmit };
  },

  validations() {
    return {
      mail: { required, email },
      password: { required, minLength: minLength(8), alphaNum },
    };
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

* {
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
</style>
