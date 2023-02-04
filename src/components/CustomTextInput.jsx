import React from 'react';
import { ErrorMessage, useField } from "formik"

export const CustomTextInput = (props) => {
    const [field] = useField(props)

    return (
        <div className={`input-box ${props.classes}`}>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="error" />
        </div>
    )
}
