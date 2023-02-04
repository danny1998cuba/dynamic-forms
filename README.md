# d98c_dynamic-forms

> React Dynamic Form with Formik

[![NPM](https://img.shields.io/npm/v/dynamic-forms.svg)](https://www.npmjs.com/package/d98c_dynamic-forms) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save d98c_dynamic-forms
```

## Usage

```jsx
import React, { Component } from 'react'

import DynamicForm from 'd98c_dynamic-forms'

class Example extends Component {
  render() {
    return <DynamicForm
      formInputs={formInputs}
      onSubmit={(values) => console.log(values)}
    />
  }
}
```

### Input Required Object

You should provide an object array with the data for the input fields, following the next schema.

```js
const formInputs = [
 {
    name: string,
    value: string | number | boolean,
    placeholder?: string,
    label?: string,

    type: 'text' | 'radio-group' | 'email' | 'password' | 'select' | 'checkbox',
    typeValue?: 'string' | 'boolean',
    options?: [
      {
        value: string | number
        desc: string
      }
    ],
    validations: [
      {
        type: 'required' | 'isEmail' | 'minLength' | 'maxLength' | 'isTrue' | 'regex',
        value?: string | number | boolean | /^{your regex}+$/,
        message: string
      }
    ]
  }
]
```

## License

MIT © [danny1998cuba](https://github.com/danny1998cuba)
