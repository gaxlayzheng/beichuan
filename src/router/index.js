import Vue from "vue";
import VueRouter from "vue-router";
import Order from "../views/Order.vue";
import News from "../views/News.vue";
import Picture from "../views/Picture.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Order",
    name: "Order",
    component: Order
  },
  {
    path: "/News",
    name: "News",
    component: News
  },
  {
    path: "/Picture",
    name: "Picture",
    component: Picture
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
