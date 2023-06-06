import { ErrorMessage, useField } from 'formik'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { CheckBoxProps } from '../types/ComponentsProps'
import styles from '../../styles.module.css'

export const CheckBox = (props: CheckBoxProps) => {
  const [field] = useField(props)

  return (
    <label className={`d98c-checkbox ${props.className}`}>
      <div className={`d98c-checkbox-wrapper ${styles.inline}`}>
        <input
          type='checkbox'
          {...field}
          id={props.name}
          className={`d98c-checkbox-input ${
            props.inputClass ? props.inputClass : ''
          }`}
        />
        <label
          htmlFor={props.name}
          style={{ marginLeft: '10px' }}
          className={`d98c-checkbox-label ${
            props.labelClass ? props.labelClass : ''
          }`}
        >
          {props.label}
        </label>
      </div>
      <ErrorMessage name={props.name} component='span' className='d98c-error' />
    </label>
  )
}
