import axios from 'axios'
import { API_URL } from '../config/config'

class ClsKMeans {
  datos = []
  enviado = 0
  constructor() {}
  async predecir() {}
  async getData() {
    try {
      while (true) {
        const res = await axios.get(`${API_URL}/k-means`)
        if (res.data.error) {
          continue
        }
        console.log(res)
        this.datos = res.data.df.filas
        return
      }
    } catch (error) {}
  }
  async getGraficos() {
    try {
      while (true) {
        const res = await axios.get(`${API_URL}/graphs-k-means`)
        if (res.data.error) {
          continue
        }
        console.log(res)
        return res.data
      }
    } catch (error) {}
  }
}
export default new ClsKMeans()
