import React, { useRef, useState } from 'react'
import { AppButton } from '../../shared/app_button'
import axios from 'axios'
import { API_URL } from '../../config/config'
import { toast } from 'react-toastify'
import ClsKMeans from '../../class/ClsKMeans'
import useGlobal from '../../hooks/useGlobal'

const RecoleccionPage = () => {
  const { loadingData, setLoadingData } = useGlobal()
  const refProgresss = useRef<HTMLDivElement | null>()
  const [archivos, setArchivos] = useState<any>()
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setArchivos(e.target.files)
  }
  const sendData = async () => {
    const formaData = new FormData()
    formaData.append('file', archivos[0])
    formaData.append('file', archivos[1])
    formaData.append('file', archivos[2])
    let toastId = toast.loading('Por favor espere...')
    const res = await axios.post(`${API_URL}/file-upload`, formaData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress(e) {
        let progress = Math.round((e.loaded * 100.0) / e.total)
        if (refProgresss.current != null) {
          refProgresss.current.innerHTML = `${progress}%`
          refProgresss.current.style.width = `${progress}%`
        }
      },
    })
    if (res.data.success) {
      setLoadingData(true)
      toast.update(toastId, { render: `${res.data.success}`, type: 'success', isLoading: false, autoClose: 2000, closeButton: true, draggable: true })
    }
  }

  return (
    <div className="w-full h-screen flex-col gap-10 flex items-center justify-center">
      <input onChange={handleFileChange} type="file" multiple />
      <AppButton
        onClick={() => {
          sendData()
        }}
      >
        Enviar Archivos
      </AppButton>
      <div className="w-1/2 bg-gray-200 rounded-full h-6 dark:bg-gray-700">
        <div ref={(node) => (refProgresss.current = node)} className="bg-blue-600 h-6 rounded-full text-center" style={{ width: '0%' }}></div>
      </div>
    </div>
  )
}

export default RecoleccionPage
