import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSidebarMenu);


const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/cursos",
      name: "Cursos",
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
