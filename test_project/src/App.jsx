import './App.css'

import * as Dynamic from './df'
import './df/index.css'
// import { formInputs } from './form.mock'

function App() {
  const form = {
    email: Dynamic.createTextField({
      className: '',
      inline: true,
      label: 'Email',
      name: 'email',
      showLabel: true,
      type: 'email',
      typeValue: 'string',
      validations: [
        {
          type: 'isEmail',
          message: 'Must be a valid email'
        },
        {
          type: 'required',
          message: "It's required"
        }
      ],
      value: '',
      placeholder: 'Set an email'
    }),
    check: Dynamic.createCheckBox({
      className: '',
      label: 'Accept Terms & conditions',
      name: 'terms',
      typeValue: 'boolean',
      value: false,
      validations: [
        {
          type: 'isTrue',
          message: 'Must be true'
        }
      ]
    }),
    submit: Dynamic.createButton({
      className: 'btn',
      text: 'Submit',
      type: 'submit'
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <DynamicForm
          formInputs={formInputs}
          onSubmit={(values) => {
            console.log(values)
          }}
        /> */}
        <Dynamic.Form
          onSubmit={(values) => console.log(values)}
          resetOnSubmit={false}
          elements={Object.values(form)}
        >
          <>
            <p>Hi</p>
            <Dynamic.TextField {...form.email} />
            <div style={{ backgroundColor: '#ad57e1', padding: '1rem 2rem' }}>
              <Dynamic.CheckBox {...form.check} />
            </div>
            <Dynamic.Button {...form.submit}></Dynamic.Button>
          </>
        </Dynamic.Form>
      </header>
    </div>
  )
}

export default App
