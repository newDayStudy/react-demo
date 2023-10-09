import axios from 'axios'
import useMock from './config'
const reject = (err) => {
    return Promise.reject(err)
}
axios.interceptors.request.use((config) => {
}, reject)

axios.interceptors.response.use(() => {}, reject)
