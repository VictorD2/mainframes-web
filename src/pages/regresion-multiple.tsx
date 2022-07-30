import type { NextPage } from 'next'
import { RegresionProvider } from '../components/RegresionMultiple/RegresionContext'
import RegresionMultiple from '../components/RegresionMultiple/RegresionMultiple'

const KMeans: NextPage = () => {
  return (
    <RegresionProvider>
      <RegresionMultiple />
    </RegresionProvider>
  )
}

export default KMeans
