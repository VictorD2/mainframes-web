import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { API_URL } from '../config/config'
const baseURL = API_URL

const request = axios.create({ baseURL })

request.interceptors.request.use(async (config: any) => {
  const token = await localStorage.getItem('token')
  if (token) {
    const usuario = jwtDecode<any>(token)
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    //checking for time expiration of the token
    if (secondsSinceEpoch > parseInt(usuario.exp + '')) {
      localStorage.removeItem('token')
      window.location.href = '/'
      return
    }
  }
  // const resIp = await axios.get("http://api.ipify.org/?format=json");
  config.headers['Authorization'] = `Bearer ${token}`
  // config.headers["ip"] = resIp.data.ip;
  // config.headers["navegador"] = navigator.userAgent;
  config.headers['Content-Type'] = 'application/json'
  return config
})

request.interceptors.response.use(async (response: any) => {
  return response
})

export default request
