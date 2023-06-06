import React from 'react'
// eslint-disable-next-line no-unused-vars
import { HeaderProps } from '../types/ComponentsProps'

export const Header = (props: HeaderProps) => {
  const localStyle = {
    marginBottom: 0
  }

  return (
    <h3 style={localStyle} className={`d98c-header ${props.className}`}>
      {props.text}
    </h3>
  )
}
