import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../pages/Home.vue";
import Expeditions from "../pages/Expeditions.vue";
import ExpeditionDetails from "../pages/ExpeditionDetails.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/expeditions", component: Expeditions },
    { path: "/expedition/tanais", component: ExpeditionDetails },
  ],
scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth'
        }
    }

    return { top: 0 }
}
});

export default router;
