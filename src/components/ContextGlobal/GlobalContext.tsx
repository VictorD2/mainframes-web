import React, { useState } from 'react'
import { IContextKGlobal } from '../../interfaces/IKMeans'

export const GlobalContext = React.createContext({} as IContextKGlobal)

export const GlobalProvider = ({ children }: { children: JSX.Element }) => {
  const [loadingData, setLoadingData] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        loadingData,
        setLoadingData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
