import React from 'react'
import { ErrorMessage, useField } from 'formik'

import styles from '../../styles.module.css'

export const CustomTextInput = (props) => {
  const [field] = useField(props)

  return (
    <div className={`input-box ${props.classes}`}>
      <div
        className={props.inline && props.inline === 'true' ? styles.inline : ''}
      >
        {props.label && <label htmlFor={props.name}>{props.label}</label>}
        <input {...field} {...props} id={props.name} />
      </div>
      <ErrorMessage
        name={props.name}
        component='span'
        className={`error ${styles.error}`}
      />
    </div>
  )
}
