import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleDetailsView from '../views/ArticleDetailsView.vue'
import Last_4DetailsView from '../views/Last_4DetailsView.vue'
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
        path: '/article-detail/:slug',
        // path: '/article-detail/:id',
        name: 'article-detail',
        component: ArticleDetailsView
    },
    {
        path: '/article4-detail/:slug',
        // path: '/article-detail/:id',
        name: 'article4-detail',
        component: Last_4DetailsView
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
