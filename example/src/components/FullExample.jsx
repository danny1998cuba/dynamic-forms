import React from 'react'

import { DynamicForm } from 'dynamic-forms'
import 'dynamic-forms/dist/index.css'
import { formInputs } from '../form.mock'

export const FullExample = () => {
    return <DynamicForm
        formInputs={formInputs}
        onSubmit={(values) => console.log(values)}
        resetOnSubmit={true}
    />

}
