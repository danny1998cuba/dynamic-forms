import React from 'react'
import { ErrorMessage, useField } from 'formik'

import styles from '../../styles.module.css'

export const CustomSelect = ({ label, options, ...props }) => {
  const [field] = useField(props)

  return (
    <div className={`select ${props.classes}`}>
      <div
        className={props.inline && props.inline === 'true' ? styles.inline : ''}
      >
        <label htmlFor={props.name || props.id}> {label} </label>

        <select {...field} {...props} id={props.name}>
          <option value=''>--- Select an option ---</option>

          {options.map(({ desc, value }, index) => (
            <option value={value} key={`select_option_${index}`}>
              {desc}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage name={props.name} component='span' className='error' />
    </div>
  )
}
