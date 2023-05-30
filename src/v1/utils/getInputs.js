import * as Yup from 'yup'
import * as Validations from './validations'

const generateValidations = (field) => {
  switch (field.typeValue) {
    case 'boolean':
      return Validations.booleanValidations(field.validations)
    case 'number':
      return Validations.numberValidations(field.validations)
    case 'date':
      return Validations.dateValidations(field.validations)
    default:
      return Validations.stringValidations(field.validations)
  }
}

// section: Form
export const getInputs = (inputs) => {
  // initialValues: { [key: string]: any }
  const initialValues = {}
  // validationsFields: { [key: string]: any }
  const validationsFields = {}

  for (const field of inputs) {
    initialValues[field.name] = field.value

    if (!field.validations) continue

    const schema = generateValidations(field)
    validationsFields[field.name] = schema
  }

  return {
    validationSchema: Yup.object().shape({ ...validationsFields }),
    initialValues
  }
}
