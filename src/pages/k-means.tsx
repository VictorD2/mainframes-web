import type { NextPage } from 'next'
import { KMeansProvider } from '../components/KMeans/KMeansContext'
import KMeansPage from '../components/KMeans/KMeansPage'

const KMeans: NextPage = () => {
  return (
    <KMeansProvider>
      <KMeansPage />
    </KMeansProvider>
  )
}

export default KMeans
