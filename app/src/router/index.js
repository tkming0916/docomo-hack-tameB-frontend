import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import StudentRequest from "../pages/StudentRequest.vue";
import SelectCars from "../pages/SelectCars.vue";
import Student from "../pages/Student.vue";

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
  {
    path: "/selectcars",
    name: "SelectCars",
    component: SelectCars,
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
  },
  // 他のルートを追加できます
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
