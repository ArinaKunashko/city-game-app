import {createRouter, createWebHistory} from 'vue-router';
import MainPage from '@/pages/MainPage.vue'
import WelcomePage from '@/pages/WelcomePage'
import GamePage from '@/pages/GamePage.vue'
import ResultPage from '@/pages/ResultPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/welcomePage',
        component: WelcomePage
    },
    {
        path: '/game',
        component: GamePage
    },
    {
        path: '/result',
        component: ResultPage
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router