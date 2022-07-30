import React from 'react'
import useKMeans from '../../hooks/useKMeans'
import { AppButton } from '../../shared/app_button'
import { AppModal } from '../../shared/app_modal'
import { AppTable } from '../../shared/app_table'
import Grafico1 from '../Home/Graficos/grafico1'
import Grafico2 from '../Home/Graficos/grafico2'
import ModalKMeans from './ModalKMeans'

const KMeansPage = () => {
  const { list, list2, setList, open, setOpen, labels1, labels2, values1, values2 } = useKMeans()
  const columns = ['#', 'CustomerID', 'Gender', 'Age', 'Annual Income (k$)', 'Spending Score (1-100)', 'class']
  const columns2 = ['#', 'Age', 'Spending Score (1-100)', 'class']
  const rows = list.map((item: any, i) => (
    <tr key={i}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.CustomerID}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Gender}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Age}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item['Annual Income (k$)']}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item['Spending Score (1-100)']}</td>
      <td className="border-2 bg-blue-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item['class']}</td>
    </tr>
  ))
  const rows2 = list2.map((item: any, i) => (
    <tr key={i}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.age}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item['spending_score']}</td>
      <td className="border-2 bg-blue-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item['class']}</td>
    </tr>
  ))
  return (
    <div className="w-full bg-gray-700 p-9">
      <section className="w-full flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32">
        <div className="w-full">
          <AppTable count={list.length} loading={true} columns={columns} rows={rows}></AppTable>
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
      <section className="w-full mt-20 flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32">
        <div className="w-5/12">
          <Grafico1 titleChart="Edades vs Spending Score" title={'Prom Spending Score'} titleX="Edades" titleY="Spending Score Prom" etiquetas={labels1} datos={values1}></Grafico1>
        </div>
        <div className="w-5/12">
          <Grafico2 titleChart="Sexo vs Spending Score" title={'Prom Generos'} etiquetas={labels2} datos={values2}></Grafico2>
        </div>
      </section>
      <div>
        <AppModal overflowClosed open={open} onClose={() => setOpen(false)}>
          <ModalKMeans></ModalKMeans>
        </AppModal>
      </div>
    </div>
  )
}

export default KMeansPage
