import { createWebHistory, createRouter } from "vue-router";
import AboutUs from "@/pages/AboutUs.vue";
import ContactMe from "@/pages/ContactMe.vue"
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: "/contacts",
        name: "ContactMe",
        component: ContactMe,
    },
    {
        path: "/about",
        name: "AboutUS",
        component: AboutUs,
    },
    {
        path: "/main",
        name: "MainPage",
        component: MainPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;