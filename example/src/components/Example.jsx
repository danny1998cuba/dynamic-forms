import React from 'react'
import { DynamicForm } from 'dynamic-forms'

export const Example = ({ formInputs, props }) => {
    return <div className='w-75 d-flex justify-content-center my-5'>
        <DynamicForm
            formInputs={formInputs}
            onSubmit={(values) => console.log(values)}
            resetOnSubmit={props?.resetOnSubmit}
        />
    </div>
}
