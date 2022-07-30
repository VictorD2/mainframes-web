import React, { useState } from 'react'
import useRegresion from '../../hooks/useRegresion'
import { AppButton } from '../../shared/app_button'
import { AppModal } from '../../shared/app_modal'
import { AppTable } from '../../shared/app_table'
import Grafico1 from '../Home/Graficos/grafico1'
import Grafico3 from '../Home/Graficos/grafico3'
import ModalRegresion from './ModalRegresion'

const RegresionMultiple = () => {
  const { graficos1, graficos2, list1, list2, open, setOpen } = useRegresion()
  const columns = ['#', 'CPI', 'Date', 'Fuel_Price', 'Holiday_Flag', 'Store', 'Temperature', 'Unemployment', 'Weekly_Sales', 'Pred_Weekly_Sales']
  const columns2 = ['#', 'CPI', 'Fuel_Price', 'Temperature', 'Unemployment', 'Holiday_Flag', 'Pred_Weekly_Sales']

  const rows = list1.map((item: any, i) => (
    <tr key={i}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.CPI}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Date}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Fuel_Price}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Holiday_Flag}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Store}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Temperature}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Unemployment}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Weekly_Sales}</td>
      <td className="border-2 bg-blue-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.Pred_Weekly_Sales}</td>
    </tr>
  ))

  const rows2 = list2.map((item: any, i) => (
    <tr key={i + 22221}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.cpi}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.fuel_price}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.holiday_flag}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.temperature}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.unemployment}</td>
      <td className="border-2 bg-blue-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.pred}</td>
    </tr>
  ))
  return (
    <div className="w-full bg-gray-700 p-9">
      <section className="w-full flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32">
        <div className="w-full">
          <AppTable count={list1.length} loading={true} columns={columns} rows={rows}></AppTable>
        </div>
        <div className="w-full">
          <div className="flex w-full flex-row items-center justify-between">
            <h2 className="h-20 flex items-center font-bold">PREDECIR NUEVOS DATOS</h2>
            <AppButton
              onClick={() => {
                setOpen(true)
              }}
            >
              <span>Predecir</span>
            </AppButton>
          </div>
          <div className="w-full">
            <AppTable count={list2.length} loading={true} columns={columns2} rows={rows2}></AppTable>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32">
        <div className="w-11/12">
          <Grafico3 titleY="Weekly_Sales" titleX="Dias" titleChart="Ventas promedio por dia" etiquetas={graficos1.labels} datos={graficos1.values} title="Sales Prom"></Grafico3>
        </div>
        <div className="w-11/12">
          <Grafico1 titleY="Weekly_Sales" titleX="Stores" titleChart="Venta total por tienda" etiquetas={graficos2.labels} datos={graficos2.values} title="Total Sales"></Grafico1>
        </div>
      </section>
      <div>
        <AppModal overflowClosed open={open} onClose={() => setOpen(false)}>
          <ModalRegresion></ModalRegresion>
        </AppModal>
      </div>
    </div>
  )
}

export default RegresionMultiple
