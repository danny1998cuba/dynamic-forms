import { ErrorMessage, useField } from 'formik'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { RadioGroupProps } from '../types/ComponentsProps'
import styles from '../../styles.module.css'

export const RadioGroup = (props: RadioGroupProps) => {
  const [field] = useField(props)

  return (
    <div className={`d98c-radiogroup ${props.className}`}>
      <div
        className={`d98c-radiogroup-wrapper ${
          props.inline ? styles.inline : ''
        }`}
      >
        <label
          className={`d98c-radiogroup-label ${
            props.mainLabelClass ? props.mainLabelClass : ''
          }`}
        >
          {props.label}
        </label>
        <div
          className={`d98c-radiogroup-options-wrapper ${styles.options} ${
            props.inlineopts ? styles.inlineOpt : styles.columnOpt
          }`}
        >
          {props.options.map((opt, index) => (
            <div
              className={`d98c-radiogroup-option-wrapper ${styles.opt}`}
              key={opt.value}
            >
              <input
                {...field}
                type='radio'
                value={opt.value}
                checked={opt.value === field.value}
                id={`opt_${opt.value}_${index}`}
                className={`d98c-radiogroup-option-input ${
                  props.inputClass ? props.inputClass : ''
                }`}
              />
              <label
                htmlFor={`opt_${opt.value}_${index}`}
                className={`d98c-radiogroup-option-label ${
                  props.optionLabelsClass ? props.optionLabelsClass : ''
                }`}
              >
                {opt.description}
              </label>
            </div>
          ))}
        </div>
      </div>

      <ErrorMessage name={props.name} component='span' className='d98c-error' />
    </div>
  )
}
