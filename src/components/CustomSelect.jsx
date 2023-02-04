import React from 'react';
import { ErrorMessage, useField } from "formik"

export const CustomSelect = ({ label, options, ...props }) => {
  const [field] = useField(props)

  return (
    <div className={`select ${props.classes}`}>
      <label htmlFor={props.name || props.id}> {label} </label>

      <select {...field} {...props} >

        <option value="">--- Select ---</option>

        {
          options.map(({ desc, value }) => (
            <option
              value={value}
              key={value}
            >{desc}</option>
          ))
        }

      </select>
      <ErrorMessage name={props.name} component="span" className="error" />
    </div>

  )
}
