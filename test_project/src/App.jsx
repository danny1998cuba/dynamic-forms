import logo from './logo.svg'
import './App.css'

import { DynamicForm, Form } from 'd98c_dynamic-forms'
import { formInputs } from './form.mock'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      {/* <DynamicForm
        formInputs={formInputs}
        onSubmit={(values) => {
          console.log(values)
        }} 
      />*/}
    </div>
  )
}

export default App
