import React from 'react';

import { useField, ErrorMessage } from 'formik';

export const CustomRadioGroup = ({ label, options, ...props }) => {
  const [field] = useField(props)

  return (
    <div className={`radio-group ${props.classes}`}>
      <b>{label}</b>
      {
        options.map(opt => (
          <label key={opt.value}>
            <input
              {...field}
              {...props}
              type="radio"
              value={opt.value}
              checked={opt.value === field.value}
            />
            {opt.desc}
          </label>
        ))
      }
      <ErrorMessage name={props.name} component="span" className="error" />
    </div>
  )
}
