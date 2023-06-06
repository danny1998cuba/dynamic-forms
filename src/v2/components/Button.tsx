import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ButtonProps } from '../types/ComponentsProps'

export const Button = (props: ButtonProps) => {
  return (
    <input
      type={props.type}
      title={props.text}
      value={props.text}
      className={`d98c-btn ${props.className}`}
    />
  )
}
