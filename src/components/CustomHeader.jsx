import React from 'react'

export const CustomHeader = (props) => {
  let localStyle = {
    marginBottom: 0
  }

  return (
    <h3 style={localStyle} className={`section-header ${props.classes}`}>
      {props.text}
    </h3>
  )
}
