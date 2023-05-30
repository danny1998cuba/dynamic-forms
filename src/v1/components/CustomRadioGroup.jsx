import React from 'react'
import { useField, ErrorMessage } from 'formik'

import styles from '../../styles.module.css'

export const CustomRadioGroup = ({ label, options, ...props }) => {
  const [field] = useField(props)

  return (
    <div className={`radio-group ${props.classes}`}>
      <div
        className={props.inline && props.inline === 'true' ? styles.inline : ''}
      >
        <label>{label}</label>
        <div
          className={`${styles.options} ${
            props.inlineopts === 'true' ? styles.inlineOpt : styles.columnOpt
          }`}
        >
          {options.map((opt, index) => (
            <div className={`${styles.opt}`} key={opt.value}>
              <input
                {...field}
                {...props}
                type='radio'
                value={opt.value}
                checked={opt.value === field.value}
                id={`opt_${opt.value}_${index}`}
              />
              <label htmlFor={`opt_${opt.value}_${index}`}>{opt.desc}</label>
            </div>
          ))}
        </div>
      </div>

      <ErrorMessage name={props.name} component='span' className='error' />
    </div>
  )
}
