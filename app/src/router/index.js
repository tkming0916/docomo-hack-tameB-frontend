import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import StudentRequest from "../pages/StudentRequest.vue";
import ChatPage from "../pages/ChatPage.vue";
import SelectCars from "../pages/SelectCars.vue";
import HomeStudent from "../pages/HomeStudent.vue";
import HistoryStudent from "../pages/HistoryStudent.vue";

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
    path: "/chat",
    name: "ChatPage",
    component: ChatPage,
  },
  {
    path: "/selectcars",
    name: "SelectCars",
    component: SelectCars,
  },
  {
    path: "/student",
    name: "HomeStudent",
    component: HomeStudent,
  },
  {
    path: "/history",
    name: "HistoryStudent",
    component: HistoryStudent,
  },
  // 他のルートを追加できます
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
