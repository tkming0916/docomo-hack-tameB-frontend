import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../HomePage.vue";
import App from "../App.vue";
import StudentDeal from "../pages/student/StudentDeal.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  {
    path: "/home",
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
