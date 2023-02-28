import * as Yup from 'yup'

export const booleanValidations = (validations) => {
    let schema = Yup.boolean().strict()

    for (const rule of validations) {
        switch (rule.type) {
            case 'isTrue':
                schema = schema.isTrue(rule.message)
                break;
            case 'isFalse':
                schema = schema.isFalse(rule.message)
                break;
            case 'required':
                schema = schema.required(rule.message)
                break;
        }
    }

    return schema
}

export const numberValidations = (validations) => {
    let schema = Yup.number().strict()

    for (const rule of validations) {
        switch (rule.type) {
            case 'min':
                schema = schema.min(rule?.value, rule.message)
                break;
            case 'max':
                schema = schema.max(rule?.value, rule.message)
                break;
            case 'lessThan':
                schema = schema.lessThan(rule?.value, rule.message)
                break;
            case 'moreThan':
                schema = schema.moreThan(rule?.value, rule.message)
                break;
            case 'positive':
                schema = schema.positive(rule.message)
                break;
            case 'negative':
                schema = schema.negative(rule.message)
                break;
            case 'integer':
                schema = schema.integer(rule.message)
                break;
            case 'required':
                schema = schema.required(rule.message)
                break;
        }
    }

    return schema
}

export const dateValidations = (validations) => {
    let schema = Yup.date().strict()

    for (const rule of validations) {
        switch (rule.type) {
            case 'min':
                schema = schema.min(rule?.value, rule.message)
                break;
            case 'max':
                schema = schema.max(rule?.value, rule.message)
                break;
            case 'required':
                schema = schema.required(rule.message)
                break;
        }
    }

    return schema
}

export const stringValidations = (validations) => {
    let schema = Yup.string().strict()

    for (const rule of validations) {
        switch (rule.type) {
            case 'isEmail':
                schema = schema.email(rule.message)
                break;
            case 'isUrl':
                schema = schema.url(rule.message)
                break;
            case 'isUuid':
                schema = schema.uuid(rule.message)
                break;
            case 'lowercase':
                schema = schema.lowercase(rule.message)
                break;
            case 'uppercase':
                schema = schema.uppercase(rule.message)
                break;
            case 'minLength':
                schema = schema.min(rule?.value, rule.message)
                break;
            case 'maxLength':
                schema = schema.max(rule?.value, rule.message)
                break;
            case 'length':
                schema = schema.length(rule?.value, rule.message)
                break;
            case 'regex':
                schema = schema.matches(rule?.value, { excludeEmptyString: true, message: rule.message })
                break;
            case 'required':
                schema = schema.required(rule.message)
                break;
        }
    }

    return schema
}