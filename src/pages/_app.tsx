import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layout/MainLayout'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalProvider } from '../components/ContextGlobal/GlobalContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </GlobalProvider>
  )
}

export default MyApp
