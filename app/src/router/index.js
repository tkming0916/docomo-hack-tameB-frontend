import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue";
import StudentRequest from "../pages/StudentRequest.vue";
import ChatPage from "../pages/ChatPage.vue";
import SelectCars from "../pages/SelectCars.vue";
import SelectCarsFiltered from "../pages/SelectCarsFiltered.vue";
import HomeStudent from "../pages/HomeStudent.vue";
import HomeStudentFiltered from "../pages/HomeStudentFiltered.vue";
import HistoryStudent from "../pages/HistoryStudent.vue";

const routes = [
  {
    path: "/",
    name: "HomeStudent",
    component: HomeStudent,
  },
  {
    path: "/filtered",
    name: "HomeStudentFiltered",
    component: HomeStudentFiltered,
  },
  {
    path: "/request/:id",
    name: "StudentRequest",
    component: StudentRequest,
    props: true,
  },
  {
    path: "/chat",
    name: "ChatPage",
    component: ChatPage,
  },
  // {
  //   path: "/selectcars",
  //   name: "SelectCars",
  //   component: SelectCars,
  // },
  // {
  //   path: "/student",
  //   name: "HomeStudent",
  //   component: HomeStudent,
  // },
  {
    path: "/history",
    name: "HistoryStudent",
    component: HistoryStudent,
  },
  {
    path: "/selectcars/:id",
    name: "SelectCars",
    component: SelectCars,
    props: true,
  },
  {
    path: "/filtercars/:id",
    name: "SelectCarsFiltered",
    component: SelectCarsFiltered,
    props: true,
  },
  // 他のルートを追加できます
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
