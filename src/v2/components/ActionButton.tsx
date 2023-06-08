import React from 'react'
// eslint-disable-next-line no-unused-vars
import { ActionButtonProps } from '../types/ComponentsProps'

export const ActionButton = (props: ActionButtonProps) => {
  return (
    <input
      type='button'
      title={props.text}
      value={props.text}
      className={`d98c-btn ${props.className}`}
      onClick={props.onClick}
    />
  )
}
