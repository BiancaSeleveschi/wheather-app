import Vue from "vue";
import VueRouter from "vue-router";
import WheatherList from "@/views/WheatherList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: WheatherList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
