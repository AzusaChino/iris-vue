import axios from 'axios'

const AxiosInstance = axios.create({
  url: '',
  timeout: 5000
})

AxiosInstance.interceptors.request.use()

AxiosInstance.interceptors.response.use()

export default AxiosInstance
