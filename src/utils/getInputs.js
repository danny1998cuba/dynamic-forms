import * as Yup from 'yup'

const generateValidations = (field) => {
    console.log('>>', field.name);
    let schema = field.typeValue === 'boolean' ? Yup.boolean() : Yup.string()

    for (const rule of field.validations) {
        console.log(rule.type);
        switch (rule.type) {
            case 'isTrue':
                schema = schema.isTrue(rule.message)
                break;
            case 'isEmail':
                schema = schema.email(rule.message)
                break;
            case 'minLength':
                schema = schema.min(rule?.value, rule.message)
                break;
            case 'maxLength':
                schema = schema.max(rule?.value, rule.message)
                break;
            case 'regex':
                schema = schema.matches(rule?.value, rule.message)
                break;
            case 'match':
                schema = schema.oneOf(
                    rule?.value.map(el => Yup.ref(el)),
                    rule.message)
                break;
            default:
                schema = schema.required()
                break;
        }
        console.log(schema);
    }

    console.log(field.name, schema);

    return schema
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