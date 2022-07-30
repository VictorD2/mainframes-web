import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppButton } from '../../shared/app_button'
import { AppInputText } from '../../shared/app_input_text'
import useRegresion from '../../hooks/useRegresion'
import { API_URL } from '../../config/config'
import axios from 'axios'

const ModalRegresion = () => {
  const { setLoadingForm, setOpen, setList2, list2, loadingForm } = useRegresion()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      const res = await axios.post(`${API_URL}/multiple-regression/predict`, formValue)
      console.log(res)
      const newData = {
        cpi: formValue.cpi,
        fuel_price: formValue.fuel_price,
        holiday_flag: formValue.holiday_flag,
        temperature: formValue.temperature,
        unemployment: formValue.unemployment,
        pred: res.data.pred,
      }
      setList2([...list2, newData])
      setOpen(false)
      formik.resetForm()
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
        label="Holiday Flag"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        value={formik.values.holiday_flag + ''}
        helpText={formik.errors.holiday_flag}
        name="holiday_flag"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        label="Temperature"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        value={formik.values.temperature + ''}
        helpText={formik.errors.temperature}
        name="temperature"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        label="Fuel Price"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        value={formik.values.fuel_price + ''}
        helpText={formik.errors.fuel_price}
        name="fuel_price"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        label="CPI"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        value={formik.values.cpi + ''}
        helpText={formik.errors.cpi}
        name="cpi"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        label="Unemployment"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        value={formik.values.unemployment + ''}
        helpText={formik.errors.unemployment}
        name="unemployment"
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
    holiday_flag: '',
    temperature: '',
    fuel_price: '',
    cpi: '',
    unemployment: '',
  }
}

function validationSchema() {
  return {
    holiday_flag: Yup.number().integer('El campo debe ser un número entero').required('El campo holiday_flag es obligatorio'),
    temperature: Yup.number().required('El campo temperature es obligatorio'),
    fuel_price: Yup.number().required('El campo fuel_price es obligatorio'),
    cpi: Yup.number().required('El campo cpi es obligatorio'),
    unemployment: Yup.number().required('El campo unemployment es obligatorio'),
  }
}

export default ModalRegresion
