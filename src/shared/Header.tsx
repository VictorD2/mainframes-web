import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import useGlobal from '../hooks/useGlobal'
const Header = () => {
  const { loadingData } = useGlobal()

  const router = useRouter()
  return (
    <header className="w-full h-12 bg-gray-800 flex items-center pl-4 absolute top-0">
      <h1 className="text-white font-bold text-lg">DASHBOARD</h1>
      <nav className="flex w-full ml-20">
        <ul className="flex flex-row w-full gap-10">
          <li className={`p-2 rounded-sm uppercase ${router.pathname == '/' ? 'border-secondary border-b-2' : ''}`}>
            <Link href="/">PRESENTACIÓN</Link>
          </li>
          <li className={`p-2 rounded-sm uppercase ${router.pathname == '/recoleccion' ? 'border-secondary border-b-2' : ''}`}>
            <Link href="/recoleccion">RECOLECCIÓN</Link>
          </li>
          {loadingData ? (
            <>
              <li className={`p-2 rounded-sm uppercase ${router.pathname.includes('/k-means') ? 'border-secondary border-b-2' : ''}`}>
                <Link href="k-means">K-MEANS</Link>
              </li>
              <li className={`p-2 rounded-sm uppercase ${router.pathname.includes('/random-forest') ? 'border-secondary border-b-2' : ''}`}>
                <Link href="random-forest">Random-forest</Link>
              </li>
              <li className={`p-2 rounded-sm uppercase ${router.pathname.includes('/regresion-multiple') ? 'border-secondary border-b-2' : ''}`}>
                <Link href="regresion-multiple">Regresión múltiple</Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
