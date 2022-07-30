import type { NextPage } from 'next'
import RandomForest from '../components/RandomForest/RandomForest'
import { RandomForestProvider } from '../components/RandomForest/RandomForestContext'

const KMeans: NextPage = () => {
  return (
    <RandomForestProvider>
      <RandomForest />
    </RandomForestProvider>
  )
}

export default KMeans
