import { AxiosResponse } from 'axios'
import axios from '../utils/axios'

const api = `/api/v1/prediccion`

interface IPrediccion {
  age: number
  salary: number
  gender: number
}

interface RequestResponse {
  prediccion: string
}

// Service Get List Banner
export const getPrediccion = async (prediccion: IPrediccion): Promise<AxiosResponse<RequestResponse, any>> => {
  return await axios.post(`${api}`, prediccion)
}
