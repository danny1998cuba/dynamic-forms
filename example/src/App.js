import React from 'react'

import { DynamicForm } from 'dynamic-forms'
import { formInputs } from './form.mock'

const App = () => {
  return <DynamicForm formInputs={formInputs} onSubmit={(values) => alert(JSON.stringify(values))} />
}

export default App
