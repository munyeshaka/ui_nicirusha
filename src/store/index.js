import { createStore } from 'vuex'

export default createStore({
    state: {
        // baseUrl: 'https://nastian.egeratech.com/api/',
        baseUrl: 'http://127.0.0.1:8000/api/',
        categorie_latestArticles: [],
        categorieArticles: [],
    }
})