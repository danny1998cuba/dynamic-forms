import React from 'react'
import { ErrorMessage, useField } from 'formik'
// eslint-disable-next-line no-unused-vars
import { SelectProps } from '../types/ComponentsProps'
import styles from '../../styles.module.css'

export const Select = (props: SelectProps) => {
  const [field] = useField(props)

  return (
    <div className={`d98c-select ${props.className}`}>
      <div
        className={`d98c-select-wrapper ${props.inline ? styles.inline : ''}`}
      >
        <label
          htmlFor={props.name}
          className={`d98c-select-label ${
            props.labelClass ? props.labelClass : ''
          }`}
        >
          {props.label}
        </label>

        <select
          {...field}
          id={props.name}
          className={`d98c-select-input ${
            props.inputClass ? props.inputClass : ''
          }`}
        >
          <option value=''>--- Select an option ---</option>

          {props.options.map((opt, index) => (
            <option value={opt.value} key={`select_option_${index}`}>
              {opt.description}
            </option>
          ))}
        </select>
      </div>
      <ErrorMessage name={props.name} component='span' className='d98c-error' />
    </div>
  )
}
