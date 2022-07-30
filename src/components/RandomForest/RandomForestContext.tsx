import React, { useEffect, useState } from 'react'
import ClsRandomForest from '../../class/ClsRandomForest'
import { IContextRandomForest, IRandomForest } from '../../interfaces/IRandomForest'

export const RandomForestContext = React.createContext({} as IContextRandomForest)

export const RandomForestProvider = ({ children }: { children: JSX.Element }) => {
  const [list, setList] = useState<any[]>([])
  const [list2, setList2] = useState<any[]>([])
  const [list3, setList3] = useState<any[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const [randomForest, setRandomForest] = useState<IRandomForest>({})
  const [values2, setValues2] = useState([])
  const [labels2, setLabels2] = useState([])
  const [loadingData, setLoadingData] = useState<boolean>(false)
  const [loadingForm, setLoadingForm] = useState<boolean>(false)
  const getDatos = async () => {
    if (ClsRandomForest.datos.length === 0) await ClsRandomForest.getData()
    setList(ClsRandomForest.datos)
    const confusionM = []
    confusionM.push(ClsRandomForest.cm['0'])
    confusionM.push(ClsRandomForest.cm['1'])
    setList3(confusionM)
  }

  const getGraficos = async () => {
    const gr = await ClsRandomForest.getGraficos()
    setLabels2(gr.sintomas)
    setValues2(gr.tot_casos)
  }

  useEffect(() => {
    getDatos()
    getGraficos()
    return () => {}
  }, [])
  return (
    <RandomForestContext.Provider
      value={{
        values2,
        setValues2,
        labels2,
        setLabels2,
        list,
        setList,
        list2,
        setList2,
        list3,
        setList3,
        open,
        setOpen,
        randomForest,
        setRandomForest,
        loadingData,
        setLoadingData,
        loadingForm,
        setLoadingForm,
      }}
    >
      {children}
    </RandomForestContext.Provider>
  )
}
