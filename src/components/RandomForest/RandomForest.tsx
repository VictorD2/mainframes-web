import React, { useState } from 'react'
import useRandomForest from '../../hooks/useRandomForest'
import { AppButton } from '../../shared/app_button'
import { AppModal } from '../../shared/app_modal'
import { AppTable } from '../../shared/app_table'
import Grafico1 from '../Home/Graficos/grafico1'
import ModalRandomForest from './ModalRandomForest'

const RandomForest = () => {
  const { list, open, list2, list3, setOpen, values2, labels2 } = useRandomForest()
  const columns = [
    '#',
    'id_persona',
    'fecha_Contacto',
    'Flag_sospechoso',
    'fecha_sintomas',
    'tos',
    'cefalea',
    'congestion_nasal',
    'dificultad_respiratoria',
    'dolor_garganta',
    'fiebre',
    'diarrea',
    'nauseas',
    'anosmia_hiposmia',
    'dolor_abdominal',
    'dolor_articulaciones',
    'dolor_muscular',
    'dolor_pecho',
    'otros_sintomas',
    'id_ubigeo_f00',
    'Pred_Flag_sospechoso',
  ]
  const columns2 = [
    '#',
    'anosmia_hiposmia',
    'congestion_nasal',
    'diarrea',
    'dificultad_respiratoria',
    'dolor_abdominal',
    'dolor_articulaciones',
    'dolor_garganta',
    'dolor_muscular',
    'dolor_pecho',
    'fiebre',
    'diarrea',
    'otros_sintomas',
    'tos',
    'Pred_Flag_sospechoso',
  ]
  const columns3 = ['CM', '0', '1']
  const rows = list.map((item: any, i) => (
    <tr key={i + 15000}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.id_persona}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.fecha_Contacto}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.Flag_sospechoso}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.fecha_sintomas}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.tos}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.cefalea}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.congestion_nasal}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dificultad_respiratoria}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_garganta}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.fiebre}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.diarrea}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.nauseas}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.anosmia_hiposmia}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_abdominal}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_articulaciones}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_muscular}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_pecho}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.otros_sintomas}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.id_ubigeo_f00}</td>
      <td className="border-2 bg-blue-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.Pred_Flag_sospechoso}</td>
    </tr>
  ))
  const rows2 = list2.map((item: any, i) => (
    <tr key={i + 30000}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i + 1}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.anosmia_hiposmia}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.congestion_nasal}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.diarrea}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dificultad_respiratoria}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_abdominal}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_articulaciones}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_garganta}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_muscular}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.dolor_pecho}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.fiebre}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.nauseas}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.otros_sintomas}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.tos}</td>
      <td className="border-2 bg-blue-400  px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.Pred_Flag_sospechoso}</td>
    </tr>
  ))
  const rows3 = list3.map((item: any, i) => (
    <tr key={i}>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{i}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item[0]}</td>
      <td className="border-2 bg-gray-800 px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item[1]}</td>
    </tr>
  ))
  return (
    <div className="w-full bg-gray-700 p-9">
      <section className="w-full flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32">
        <div className="w-full">
          <AppTable count={list.length} loading={true} columns={columns} rows={rows}></AppTable>
        </div>
        <div className="w-full">
          <h1>Confusion Matrix</h1>
          <AppTable count={list3.length} loading={true} columns={columns3} rows={rows3}></AppTable>
        </div>
        <div className="w-full">
          <div className="flex w-full flex-row items-center justify-between b">
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
      <section className="w-full flex flex-row flex-wrap gap-5 items-center justify-around gap-y-32 mt-20">
        <div className="w-11/12">
          <Grafico1 titleX="Sintomas" titleY="Nro Casos" titleChart="Frecuencia de sintomas de personas sospechosas de covid" title="Frecuencia" etiquetas={labels2} datos={values2}></Grafico1>
        </div>
      </section>
      <div>
        <AppModal width="w-5/12" overflowClosed open={open} onClose={() => setOpen(false)}>
          <ModalRandomForest></ModalRandomForest>
        </AppModal>
      </div>
    </div>
  )
}

export default RandomForest
