import { AxiosResponse } from 'axios'
import axios from '../utils/axios'

const api = `/api/v1/graficos`

interface RequestResponse {
  datos: any
}

// Service Get List Banner
export const getListBanner = async (opts: any): Promise<AxiosResponse<RequestResponse, any>> => {
  return await axios.get(`${api}/read/${opts.page}`)
}
