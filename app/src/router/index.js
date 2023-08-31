import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import StudentRequest from "../pages/StudentRequest.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/request",
    name: "StudentRequest",
    component: StudentRequest,
  },
  // 他のルートを追加できます
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
