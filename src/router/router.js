import {createRouter, createWebHistory} from 'vue-router';
import MainPage from '@/pages/MainPage.vue'
import WelcomePage from '@/pages/WelcomePage'
import FirstCity from '@/pages/FirstCity.vue'
import FallPage from '@/pages/FallPage.vue'
import WinPage from '@/pages/WinPage.vue'
import OpponentWaiting from '@/pages/OpponentWaiting.vue'

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
        component: FirstCity
    },
    {
        path: '/fall',
        component: FallPage
    },
    {
        path: '/win',
        component: WinPage
    },
    {
        path: '/waiting',
        component: OpponentWaiting
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router