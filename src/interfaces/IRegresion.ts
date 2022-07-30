export interface IRegresion {
  CustomerID?: number
  Gender?: string
  Age?: number
  Annual_Income?: number
  Spending_Score?: number
  class?: number
}

export interface IContextRegresion {
  list1: IRegresion[]
  setList1: Function
  list2: IRegresion[]
  setList2: Function
  graficos1: any
  setGraficos1: Function
  graficos2: any
  setGraficos2: Function
  open: boolean
  setOpen: Function
  regresion: IRegresion
  setRegresion: Function
  loadingData: boolean
  setLoadingData: Function
  loadingForm: boolean
  setLoadingForm: Function
}
