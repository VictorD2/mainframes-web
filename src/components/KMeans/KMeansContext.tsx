import React, { useEffect, useState } from 'react'
import ClsKMeans from '../../class/ClsKMeans'
import { IContextKMeans, IKMeans } from '../../interfaces/IKMeans'

export const KMeansContext = React.createContext({} as IContextKMeans)

export const KMeansProvider = ({ children }: { children: JSX.Element }) => {
  const [list, setList] = useState<any[]>([])
  const [list2, setList2] = useState<any[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const [kmeans, setKmeans] = useState<any>({})

  const [labels1, setLabels1] = useState([])
  const [values2, setValues2] = useState([])
  const [labels2, setLabels2] = useState([])
  const [values1, setValues1] = useState([])

  const [loadingData, setLoadingData] = useState<boolean>(false)
  const [loadingForm, setLoadingForm] = useState<boolean>(false)

  const getDatos = async () => {
    if (ClsKMeans.datos.length === 0) await ClsKMeans.getData()

    setList(ClsKMeans.datos)
  }
  const getGraficos = async () => {
    const gr = await ClsKMeans.getGraficos()
    setLabels1(gr.edades)
    setValues1(gr.sc_prom_age)
    setLabels2(gr.sexo)
    setValues2(gr.sc_prom_gender)
  }

  useEffect(() => {
    getDatos()
    getGraficos()
    return () => {}
  }, [])

  return (
    <KMeansContext.Provider
      value={{
        labels1,
        setLabels1,
        labels2,
        setLabels2,
        values1,
        setValues1,
        values2,
        setValues2,
        list,
        setList,
        list2,
        setList2,
        open,
        setOpen,
        kmeans,
        setKmeans,
        loadingData,
        setLoadingData,
        loadingForm,
        setLoadingForm,
      }}
    >
      {children}
    </KMeansContext.Provider>
  )
}
