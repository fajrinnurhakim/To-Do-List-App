import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
    },
    {
        path: "/dashboard/createtodo",
        name: "CreateTodo",
        component: () => import("../views/CreateTodo.vue"),
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
