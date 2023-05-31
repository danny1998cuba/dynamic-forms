import React from 'react'

export interface FormProps {
  onSubmit: (values: any[]) => void
}

export const Form = (props: FormProps) => {
  return (
    <React.Fragment>
      <form onSubmit={() => props.onSubmit(['ds'])}>
        <input type='text' name='lol' title='lol' />
      </form>
    </React.Fragment>
  )
}
