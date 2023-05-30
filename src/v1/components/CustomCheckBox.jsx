import React from 'react'
import { ErrorMessage, useField } from 'formik'

import styles from '../../styles.module.css'

export const CustomCheckBox = (props) => {
  const [field] = useField(props)

  return (
    <label className={`label_check ${props.classes}`}>
      <div className={styles.inline}>
        <input type='checkbox' {...field} {...props} id={props.name} />
        <label htmlFor={props.name} style={{ marginLeft: '10px' }}>
          {props.label}
        </label>
      </div>
      <ErrorMessage name={props.name} component='span' className='error' />
    </label>
  )
}
