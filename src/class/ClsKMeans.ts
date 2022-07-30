import axios from 'axios'
import { API_URL } from '../config/config'

class ClsKMeans {
  datos = []
  enviado = 0
  constructor() {}
  async predecir() {}
  async getData() {
    try {
      const res = await axios.get(`${API_URL}/k-means`)
      console.log(res)
      this.datos = res.data.df.filas
    } catch (error) {}
  }
  async getGraficos() {
    try {
      const res = await axios.get(`${API_URL}/graphs-k-means`)
      console.log(res)
      return res.data
    } catch (error) {}
  }
}
export default new ClsKMeans()
