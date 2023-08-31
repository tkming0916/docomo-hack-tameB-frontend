import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import StudentDeal from "../pages/StudentDeal.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/deal/",
    name: "StudentDeal",
    component: StudentDeal,
  },
  // 他のルートを追加できます
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
