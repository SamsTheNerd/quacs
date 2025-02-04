import Vue from "vue";
import App from "@/App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import AsyncComputedPlugin from "vue-async-computed";
Vue.use(AsyncComputedPlugin);

import "@/assets/styles/global.css";

// Import theme css files here
import "@/assets/styles/colors.css";
import "@/assets/styles/themes/dark.css";
import "@/assets/styles/themes/black.css";
import "@/assets/styles/themes/colorful.css";
import "@/assets/styles/themes/yacs.css";
import "@/assets/styles/themes/flowing.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faCaretRight,
  faCheck,
  faCog,
  faEdit,
  faExclamationTriangle,
  faHeart,
  faInfoCircle,
  faLaptopHouse,
  faPen,
  faPlus,
  faTrash,
  faUser,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCalendar,
  faCaretRight,
  faCheck,
  faCog,
  faDiscord,
  faEdit,
  faExclamationTriangle,
  faGithub,
  faHeart,
  faInfoCircle,
  faLaptopHouse,
  faPatreon,
  faPen,
  faPlus,
  faTrash,
  faUser,
  faUserSlash
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./registerServiceWorker";
import router from "@/router";
import store from "@/store";
import { setColorTheme } from "@/utilities";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    this.$store.dispatch("init");
    this.$store.commit("schedule/initializeStore");
    this.$store.dispatch("schedule/init");
  },
  mounted() {
    setColorTheme(this.$store.state.settings.colorTheme);
  },
}).$mount("#app");
