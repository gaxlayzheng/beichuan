import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入axios
import axios from 'axios';
// 挂载到vue原型链上
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
