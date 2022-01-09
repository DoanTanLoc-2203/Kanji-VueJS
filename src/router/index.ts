import { createRouter, createWebHistory } from "vue-router";
import DrawPage from "../pages/DrawPage.vue";
import SelectPage from "../pages/SelectPage.vue";

const routes = [
  {
    path: "/",
    component: SelectPage,
  },
  {
    path: "/draw",
    component: DrawPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
