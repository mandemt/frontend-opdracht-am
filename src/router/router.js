import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/TheWelcome.vue'
import Error from '../components/ErrorPage.vue'
import Actors from '../components/Actors.vue'
import FilmList from '../components/FilmList.vue'
console.log('router')

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: "/actors",
            component: Actors
        },
        {
            path: '/films',
            component: FilmList
        },
        {
            path: '/films/:filmId',
            component: Details
        },
        {
            path: '/404',
            component: Error
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/404',
        }
    ]
})
export default router;