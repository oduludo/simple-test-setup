import VueRouter from "vue-router";
import Home from "@/components/Home";
import Students from "@/components/Students";
import Student from "@/components/Student";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/students",
    name: "students",
    component: Students
  },
  {
    path: "/student/:id",
    name: "student",
    component: Student
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
