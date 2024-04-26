import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
