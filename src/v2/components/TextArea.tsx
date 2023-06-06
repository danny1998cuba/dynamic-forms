import React from 'react'
// eslint-disable-next-line no-unused-vars
import { TextAreaProps } from '../types/ComponentsProps'
import { ErrorMessage, useField } from 'formik'

export const TextArea = (props: TextAreaProps) => {
  const [field] = useField(props)

  return (
    <div className={`d98c-textarea ${props.className}`}>
      <div className='d98c-textarea-wrapper'>
        {props.label && (
          <label
            htmlFor={props.name}
            className={`d98c-textarea-label ${
              props.labelClass ? props.labelClass : ''
            }`}
          >
            {props.label}
          </label>
        )}
        <textarea
          {...field}
          rows={props.rows ? props.rows : 5}
          id={props.name}
          placeholder={props.placeholder ? props.placeholder : ''}
          className={`d98c-textarea-input ${
            props.inputClass ? props.inputClass : ''
          }`}
        />
      </div>
      <ErrorMessage name={props.name} component='span' className='d98c-error' />
    </div>
  )
}
