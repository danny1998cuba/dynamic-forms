import React from 'react'

import { Form, Formik } from 'formik'

import {
  CustomCheckBox,
  CustomHeader,
  CustomRadioGroup,
  CustomSelect,
  CustomTextInput
} from './components'

import { getInputs } from './utils'

export const DynamicForm = ({
  formInputs,
  onSubmit = (values) => console.log(values),
  resetOnSubmit = true
}) => {
  let inputs = formInputs.filter(input =>
    input.type != 'header'
    && input.type != 'submit'
    && input.type != 'reset'
  )

  const { initialValues, validationSchema } = getInputs(inputs)

  return <Formik initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, helpers) => {
      onSubmit(values);
      if (resetOnSubmit) helpers.resetForm();
    }}
  >
    {
      () => (
        <Form noValidate>
          {
            formInputs.map(({ name, type, value, ...props }) => {
              switch (type) {
                // Headers
                case 'header':
                  return <CustomHeader
                    text={props.text}
                    key={`header_${props.text.replace(' ', '_').toString().toLowerCase()}`}
                    classes={props.class} />

                // Inputs
                case 'select':
                  return <CustomSelect
                    key={name}
                    label={props?.label}
                    name={name}
                    options={props?.options}
                    classes={props.class}
                    inline={props?.inline} />

                case 'radio-group':
                  return <CustomRadioGroup
                    label={props?.label}
                    name={name}
                    options={props?.options}
                    key={name}
                    classes={props.class}
                    inline={props?.inline}
                    inlineopts={props?.inlineOpts} />

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
                    placeholder={props?.placeholder}
                    inline={props?.inline}
                    label={props?.label}
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
