import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Recover from "@/views/Recover.vue";
import UpdateProfile from "@/views/Profile/Update.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/recover",
      name: "recover",
      component: Recover,
    },
    {
      path: "/profile/update",
      name: "update-profile",
      component: UpdateProfile,
    },
  ],
});

export default router;
