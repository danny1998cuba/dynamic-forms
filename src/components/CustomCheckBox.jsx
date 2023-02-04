import React from 'react';
import { ErrorMessage, useField } from "formik"

export const CustomCheckBox = (props) => {
    const [field] = useField(props)

    return (
        <label className={`label_check ${props.classes}`}>
            <input type="checkbox" {...field} {...props} />
            <span>{props.label}</span>
            <ErrorMessage name={props.name} component="span" className="error" />
        </label>
    )
}
