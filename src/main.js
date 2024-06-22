import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import TodoPage from "./views/TodoPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Login", component: LoginPage },
    { path: "/todos", name: "Todos", component: TodoPage },
  ],
});
const app = createApp(App);

app.use(router);
app.mount("#app");
