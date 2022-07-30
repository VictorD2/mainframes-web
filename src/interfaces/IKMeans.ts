export interface IKMeans {
  CustomerID?: number
  Gender?: string
  Age?: number
  Annual_Income?: number
  Spending_Score?: number
  class?: number
}

export interface IContextKMeans {
  list: IKMeans[]
  setList: Function
  labels1: IKMeans[]
  setLabels1: Function
  labels2: IKMeans[]
  setLabels2: Function
  values1: IKMeans[]
  setValues1: Function
  values2: IKMeans[]
  setValues2: Function
  list2: IKMeans[]
  setList2: Function
  open: boolean
  setOpen: Function
  kmeans: IKMeans
  setKmeans: Function
  loadingData: boolean
  setLoadingData: Function
  loadingForm: boolean
  setLoadingForm: Function
}
export interface IContextKGlobal {
  loadingData: boolean
  setLoadingData: Function
}
