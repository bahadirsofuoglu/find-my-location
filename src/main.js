import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";
import * as VueGoogleMaps from "vue2-google-maps";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDz1nw7RPkW2jWm9-SOv2tVc4Ss-vKmYCw",
    libraries: "places, directions",

    installComponents: true,
  },
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
