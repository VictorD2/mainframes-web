import React from 'react'
import { ToastContainer } from 'react-toastify'
import Header from '../shared/Header'

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <main className="mt-12 w-full">{children}</main>
    </div>
  )
}

export default MainLayout
