import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleDetailsView from '../views/ArticleDetailsView.vue'
import PathNotFoundView from '../views/PathNotFoundView.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/articles',
        name: 'articles',
        component: ArticlesView
    },
    {
        path: '/article-details/:slug',
        name: 'article-details',
        component: ArticleDetailsView
    },
    { 
        path: '/:pathMatch(.*)*',
        component: PathNotFoundView
    },

]

// createWebHistory vs createWebHashHistory
const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router
