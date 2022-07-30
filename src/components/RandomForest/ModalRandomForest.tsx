import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppButton } from '../../shared/app_button'
import { AppInputText } from '../../shared/app_input_text'
import axios from 'axios'
import { API_URL } from '../../config/config'
import useRandomForest from '../../hooks/useRandomForest'

const ModalRandomForest = () => {
  const { setList2, list2, setOpen, setLoadingForm, loadingForm } = useRandomForest()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      while (true) {
        const res = await axios.post(`${API_URL}/random-forest/predict`, formValue)
        if (res.data.error) continue
        const newData = {
          anosmia_hiposmia: formValue.anosmia_hiposmia + '',
          cefalea: formValue.cefalea + '',
          congestion_nasal: formValue.congestion_nasal + '',
          diarrea: formValue.diarrea + '',
          dificultad_respiratoria: formValue.dificultad_respiratoria + '',
          dolor_abdominal: formValue.dolor_abdominal + '',
          dolor_articulaciones: formValue.dolor_articulaciones + '',
          dolor_garganta: formValue.dolor_garganta + '',
          dolor_muscular: formValue.dolor_muscular + '',
          dolor_pecho: formValue.dolor_pecho + '',
          fiebre: formValue.fiebre + '',
          nauseas: formValue.nauseas + '',
          otros_sintomas: formValue.otros_sintomas + '',
          tos: formValue.tos + '',
          Pred_Flag_sospechoso: res.data.pred,
        }
        console.log(newData)
        setList2([...list2, newData])
        setOpen(false)
        formik.resetForm()
        return
      }
    },
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldError(e.target.name, '')
  }

  return (
    <div className="flex gap-5 flex-row flex-wrap mt-8 justify-center text-black">
      <AppInputText
        width="w-2/5"
        label="Anosmia Hiposmia"
        value={formik.values.anosmia_hiposmia + ''}
        helpText={formik.errors.anosmia_hiposmia}
        name="anosmia_hiposmia"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Cefalea"
        value={formik.values.cefalea + ''}
        helpText={formik.errors.cefalea}
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        name="cefalea"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Congestion Nasal"
        value={formik.values.congestion_nasal + ''}
        helpText={formik.errors.congestion_nasal}
        name="congestion_nasal"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Diarrea"
        value={formik.values.diarrea + ''}
        helpText={formik.errors.diarrea}
        name="diarrea"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dificultad Respiratoria"
        value={formik.values.dificultad_respiratoria + ''}
        helpText={formik.errors.dificultad_respiratoria}
        name="dificultad_respiratoria"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dolor Abdominal"
        value={formik.values.dolor_abdominal + ''}
        helpText={formik.errors.dolor_abdominal}
        name="dolor_abdominal"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dolor Articulaciones"
        value={formik.values.dolor_articulaciones + ''}
        name="dolor_articulaciones"
        helpText={formik.errors.dolor_articulaciones}
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dolor Garganta"
        value={formik.values.dolor_garganta + ''}
        helpText={formik.errors.dolor_garganta}
        name="dolor_garganta"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dolor Muscular"
        value={formik.values.dolor_muscular + ''}
        helpText={formik.errors.dolor_muscular}
        name="dolor_muscular"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Dolor Pecho"
        value={formik.values.dolor_pecho + ''}
        helpText={formik.errors.dolor_pecho}
        name="dolor_pecho"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Fiebre"
        value={formik.values.fiebre + ''}
        helpText={formik.errors.fiebre}
        name="fiebre"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Nauseas"
        value={formik.values.nauseas + ''}
        helpText={formik.errors.nauseas}
        name="nauseas"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Otros Sintomas"
        value={formik.values.otros_sintomas + ''}
        helpText={formik.errors.otros_sintomas}
        name="otros_sintomas"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
        onChange={handleChangeInput}
        onFocus={handleFocus}
      />
      <AppInputText
        width="w-2/5"
        label="Tos"
        value={formik.values.tos + ''}
        helpText={formik.errors.tos}
        name="tos"
        className="hover:border-secondary focus:border-secondary hover:border-2 transition-all duration-500"
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
    anosmia_hiposmia: '',
    cefalea: '',
    congestion_nasal: '',
    diarrea: '',
    dificultad_respiratoria: '',
    dolor_abdominal: '',
    dolor_articulaciones: '',
    dolor_garganta: '',
    dolor_muscular: '',
    dolor_pecho: '',
    fiebre: '',
    nauseas: '',
    otros_sintomas: '',
    tos: '',
  }
}

function validationSchema() {
  return {
    anosmia_hiposmia: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    cefalea: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    congestion_nasal: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    diarrea: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dificultad_respiratoria: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dolor_abdominal: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dolor_articulaciones: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dolor_garganta: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dolor_muscular: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    dolor_pecho: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    fiebre: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    nauseas: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    otros_sintomas: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
    tos: Yup.number().integer('El campo debe ser un número entero').required('El campo correo es obligatorio').min(0, 'El minimo valor es 1').max(1, 'El maximo valor es 1'),
  }
}

export default ModalRandomForest
