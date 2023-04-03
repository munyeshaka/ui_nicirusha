import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import '../public/static/icons.css'
import store from './store'
import axios from 'axios'
// import mixins from './mixins'

// import VueAnalytics from 'vue-analytics';

// import axiosInstance from './plugins/axiosConfig'
// import VueSweetalert2,{ options} from './plugins/sweetAlert'



// createApp(App).use(router).mount('#app')

// axios is a javascript module that could be add to the app instance like:
const app = createApp(App)

// app.config.globalProperties.axios =  { ...axiosInstance }
app.config.globalProperties.axios=axios 

app
.use(store)
.use(router)

// .use(VueAnalytics, { id: 'green_google_id', router })
// .mixin(mixins)
.mount('#app') // ija musi yizindi zose

