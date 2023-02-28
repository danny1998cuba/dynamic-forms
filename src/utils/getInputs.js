import * as Yup from 'yup'
import * as Validations from './validations'

const generateValidations = (field) => {
    let schema

    switch (field.typeValue) {
        case 'boolean':
            return schema = Validations.booleanValidations(field.validations)
        case 'number':
            return schema = Validations.numberValidations(field.validations)
        case 'date':
            return schema = Validations.dateValidations(field.validations)
        default:
            return schema = Validations.stringValidations(field.validations)
    }
}

// section: Form
export const getInputs = (inputs) => {

    // initialValues: { [key: string]: any }
    let initialValues = {};

    // validationsFields: { [key: string]: any }
    let validationsFields = {};

    for (const field of inputs) {
        initialValues[field.name] = field.value

        if (!field.validations) continue;

        const schema = generateValidations(field)
        validationsFields[field.name] = schema
    }

    return {
        validationSchema: Yup.object().shape({ ...validationsFields }),
        initialValues
    }
};