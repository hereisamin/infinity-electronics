import axios from 'axios'
import { API_URL } from '../constants'

export function getCancellationToken () {
  return axios.CancelToken.source()
}

export function isRequestCanceled (exception: Error) {
  return axios.isCancel(exception)
}

const axiosInstance = axios.create({
  baseURL: API_URL,
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.get['Content-Type'] = 'application/json'

export { axiosInstance as http }
