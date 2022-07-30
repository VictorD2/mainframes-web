import axios from 'axios'
import { API_URL } from '../config/config'

class ClsRandomForest {
  datos = []
  cm: any = {}
  constructor() {}

  async predecir() {}
  async getData() {
    try {
      const res = await axios.get(`${API_URL}/random-forest`)
      console.log(res)
      this.datos = res.data.df.filas
      this.cm = res.data.cm
    } catch (error) {}
  }
  async getGraficos() {
    try {
      const res = await axios.get(`${API_URL}/graphs-random-forest`)
      console.log(res.data)
      return res.data
    } catch (error) {}
  }
}
export default new ClsRandomForest()
