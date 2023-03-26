import axios from 'axios'
import store from '../store'

const axiosInstance = axios.create({
    baseURL: store.state.baseUrl
})
axiosInstance.defaults.headers.common['Authorization'] = "Bearer " + store.getters.token;
axiosInstance.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export default axiosInstance