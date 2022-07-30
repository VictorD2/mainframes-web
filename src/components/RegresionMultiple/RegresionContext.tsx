import React, { useEffect, useState } from 'react'
import ClsRegresion from '../../class/ClsRegresion'
import { IContextRegresion, IRegresion } from '../../interfaces/IRegresion'

export const RegresionContext = React.createContext({} as IContextRegresion)

export const RegresionProvider = ({ children }: { children: JSX.Element }) => {
  const [list1, setList1] = useState<any[]>([])
  const [list2, setList2] = useState<any[]>([])

  const [graficos1, setGraficos1] = useState<any>({ labels: [], values: [] })
  const [graficos2, setGraficos2] = useState<any>({ labels: [], values: [] })

  const [open, setOpen] = useState<boolean>(false)
  const [regresion, setRegresion] = useState<IRegresion>({})

  const [loadingData, setLoadingData] = useState<boolean>(false)
  const [loadingForm, setLoadingForm] = useState<boolean>(false)
  const getDatos = async () => {
    if (ClsRegresion.datos.length === 0) await ClsRegresion.getData()
    setList1(ClsRegresion.datos)
  }

  const getGraficos = async () => {
    const res = await ClsRegresion.getGraficas()
    setGraficos1({ labels: res.dates, values: res.ws_prom_date })
    setGraficos2({ labels: res.stores, values: res.ws_prom_store })
  }

  useEffect(() => {
    getDatos()
    getGraficos()
    return () => {}
  }, [])
  return (
    <RegresionContext.Provider
      value={{
        list1,
        setList1,
        list2,
        setList2,
        graficos1,
        setGraficos1,
        graficos2,
        setGraficos2,
        open,
        setOpen,
        regresion,
        setRegresion,
        loadingData,
        setLoadingData,
        loadingForm,
        setLoadingForm,
      }}
    >
      {children}
    </RegresionContext.Provider>
  )
}
