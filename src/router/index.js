import { createRouter, createWebHistory } from "vue-router";

import dashboard from "../views/Dashboard.vue";
import generateArticle from "../views/GenerateArticle.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: dashboard,
    },
    {
      path: "/generate-article",
      name: "generate-article",
      component: generateArticle,
    },
  ],
});

export default router;
