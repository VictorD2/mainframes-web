import axios from 'axios'
import { API_URL } from '../config/config'

class ClsRegresion {
  datos = []
  constructor() {}
  async predecir() {}
  async getData() {
    try {
      while (true) {
        const res = await axios.get(`${API_URL}/multiple-regression`)
        if (res.data.error) {
          continue
        }
        console.log(res)
        this.datos = res.data.df.filas
        return
      }
    } catch (error) {}
  }
  async getGraficas() {
    try {
      while (true) {
        const res = await axios.get(`${API_URL}/graphs-multiple-regression`)
        if (res.data.error) {
          continue
        }
        return res.data
      }
    } catch (error) {}
  }
}
export default new ClsRegresion()
