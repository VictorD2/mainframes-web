import React from 'react'
import logoUpao from '../../img/upao-logo.png'
const PresentacionPage = () => {
  return (
    <div className="w-full bg-[#0564AD] h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
      <div className="w-10/12 p-20 flex flex-col gap-4 border-2 border-[#FF9900] rounded-bl-[120px] rounded-tr-[120px]">
        <h1 className="text-5xl text-center font-extrabold self-center text-[#FF9900]">ADMINISTRACION Y ARQUITECTURA DE MAINFRAMES</h1>
        <h2 className="text-3xl font-bold self-center">TRABAJO FINAL</h2>
        <h3 className="text-[#FF9900] font-bold text-lg">INTEGRANTES</h3>
        <ul className="pl-10">
          <li className="uppercase text-lg font-semibold">Hernández Villalobos, Víctor</li>
          <li className="uppercase text-lg font-semibold">Ramirez Zavaleta, Arnold</li>
        </ul>
        <h3 className="text-[#FF9900] font-bold text-lg">DOCENTE</h3>
        <ul className="pl-10">
          <li className="uppercase text-lg font-semibold">ALI LOZANO CHU</li>
        </ul>
        <img className="w-3/12 absolute bottom-11 right-28" src={logoUpao.src} />
      </div>
    </div>
  )
}

export default PresentacionPage
