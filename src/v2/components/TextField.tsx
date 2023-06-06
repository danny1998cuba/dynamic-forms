import React from 'react'
// eslint-disable-next-line no-unused-vars
import { TextFieldProps } from '../types/ComponentsProps'
import { ErrorMessage, useField } from 'formik'

import styles from '../../styles.module.css'

export const TextField = (props: TextFieldProps) => {
  const [field] = useField(props)

  return (
    <div className={`d98c-textfield ${props.className}`}>
      <div
        className={`d98c-textfield-wrapper ${
          props.inline ? styles.inline : ''
        }`}
      >
        {props.showLabel && (
          <label
            htmlFor={props.name}
            className={`d98c-textfield-label ${
              props.labelClass ? props.labelClass : ''
            }`}
          >
            {props.label}
          </label>
        )}
        <input
          {...field}
          type={props.type}
          id={props.name}
          placeholder={props.placeholder ? props.placeholder : ''}
          className={`d98c-textfield-input ${
            props.inputClass ? props.inputClass : ''
          }`}
        />
      </div>
      <ErrorMessage name={props.name} component='span' className='d98c-error' />
    </div>
  )
}
