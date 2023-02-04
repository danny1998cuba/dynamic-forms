import React from 'react'

import { DynamicForm } from 'dynamic-forms'
import { formInputs } from './form.mock'

const App = () => {
  return <DynamicForm
    formInputs={formInputs}
    onSubmit={(values) => console.log(values)}
  />
}

export default App
