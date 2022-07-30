import React from 'react'
import useKMeans from '../../hooks/useKMeans'
import { AppInputText } from '../../shared/app_input_text'
import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppButton } from '../../shared/app_button'
import { API_URL } from '../../config/config'

const ModalKMeans = () => {
  const { kmeans, setOpen, setKmeans, setList2, list2, setLoadingForm, loadingForm } = useKMeans()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
      const res = await axios.post(`${API_URL}/k-means/predict`, formValue)
      console.log(res.data.pred)
      const newData = {
        age: formValue.age,
        spending_score: formValue.spending_score,
        class: res.data.pred,
      }
      setList2([...list2, newData])
      setOpen(false)
    },
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldError(e.target.name, '')
  }

  return (
    <div className="flex gap-5 flex-col mt-8 text-black">
      <AppInputText
        label="Edad"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        name="age"
        value={formik.values.age + ''}
        helpText={formik.errors.age}
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        label="SPENDING SCORE (1-100)"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        name="spending_score"
        value={formik.values.spending_score + ''}
        helpText={formik.errors.spending_score}
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppButton disabled={loadingForm} loading={!loadingForm} onClick={formik.handleSubmit}>
        Enviar
      </AppButton>
    </div>
  )
}
function initialValues() {
  return {
    age: '',
    spending_score: '',
  }
}

function validationSchema() {
  return {
    age: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio'),
    spending_score: Yup.number().required('El campo SPENDING SCORE (1-100) es obligatorio'),
  }
}

export default ModalKMeans
