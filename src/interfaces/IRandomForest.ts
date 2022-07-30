export interface IRandomForest {
  CustomerID?: number
  Gender?: string
  Age?: number
  Annual_Income?: number
  Spending_Score?: number
  class?: number
}

export interface IContextRandomForest {
  list2: IRandomForest[]
  setList2: Function
  list: IRandomForest[]
  setList: Function
  list3: any[]
  setList3: Function
  open: boolean
  setOpen: Function
  randomForest: IRandomForest
  setRandomForest: Function
  loadingData: boolean
  setLoadingData: Function
  loadingForm: boolean
  setLoadingForm: Function
  values2: any[]
  setValues2: Function
  labels2: any[]
  setLabels2: Function
}
