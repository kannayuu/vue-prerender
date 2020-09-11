import Vue from "vue";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  mounted: () => document.dispatchEvent(new Event("render-event")),
  render: h => h(App)
}).$mount("#app");
