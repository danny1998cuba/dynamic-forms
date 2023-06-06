/* eslint-disable no-unused-vars */
import { Form as FormikForm, Formik } from 'formik'
import React, { PropsWithChildren } from 'react'
import { BasicComponentProps, ComponentProps } from './types'
import { getInputs } from './utils'

export class FormProps {
  elements!: [ComponentProps]
  onSubmit!: (values: {}) => void
  resetOnSubmit: boolean = true
}

export const Form = (props: PropsWithChildren<FormProps>) => {
  let inputs: BasicComponentProps[] = []

  if (props.elements)
    inputs = props.elements
      .filter((element) => 'validations' in element)
      .map((element) => element as BasicComponentProps)

  const { initialValues, validationSchema } = getInputs(inputs)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        props.onSubmit(values)
        if (props.resetOnSubmit) helpers.resetForm()
      }}
    >
      <FormikForm noValidate>{props.children}</FormikForm>
    </Formik>
  )
}
