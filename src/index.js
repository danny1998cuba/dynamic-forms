import React from 'react'

import { Form, Formik } from 'formik'

import {
  CustomCheckBox,
  CustomRadioGroup,
  CustomSelect,
  CustomTextInput
} from './components'

import { getInputs } from './utils'

export const DynamicForm = ({
  formInputs,
  onSubmit = (values) => console.log(values)
}) => {
  const { initialValues, validationSchema } = getInputs(formInputs)

  console.log(validationSchema);

  return <Formik initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {
      () => (
        <Form noValidate>
          {
            formInputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                case 'select':
                  return <CustomSelect
                    key={name}
                    label={props?.label}
                    name={name}
                    options={props?.options}
                    classes={props.class} />
                case 'radio-group':
                  return <CustomRadioGroup
                    label={props?.label}
                    name={name}
                    options={props?.options}
                    key={name}
                    classes={props.class} />
                case 'checkbox':
                  return <CustomCheckBox
                    label={props?.label}
                    key={name}
                    name={name}
                    classes={props.class} />
                default:
                  return <CustomTextInput
                    key={name}
                    name={name}
                    placeholder={props.placeholder}
                    type={type}
                    classes={props.class} />
              }
            })
          }
        </Form>
      )
    }

  </Formik>
}
