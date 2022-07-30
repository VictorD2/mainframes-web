import axios from 'axios'
import { API_URL } from '../config/config'

class ClsRegresion {
  datos = []
  constructor() {}
  async predecir() {}
  async getData() {
    try {
      const res = await axios.get(`${API_URL}/multiple-regression`)
      console.log(res)
      this.datos = res.data.df.filas
    } catch (error) {}
  }
  async getGraficas() {
    try {
      const res = await axios.get(`${API_URL}/graphs-multiple-regression`)
      return res.data
    } catch (error) {}
  }
}
export default new ClsRegresion()
