# d98c_dynamic-forms

> React Dynamic Form with Formik and Yup validations

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
    typeValue?: 'string' /* default */ | 'boolean' | 'number' | '',
    options?: [
      {
        value: string | number
        desc: string
      }
    ],
    //See validations section
    validations: [
      {
        type: 'required'
        value?: string | number | boolean | /^{your regex}+$/,
        message: string
      }
    ]
  }
]
```

### Validations
<table>
  <thead>
    <tr>
      <th rowspan="2">TypeValue</th>
      <th rowspan="2">Type</th>
      <th colspan="2">Value</th>
      <th rowspan="2">Description</th>
    </tr>
    <tr>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td rowspan="9">string</td>
      <td>isEmail</td>
      <td>null</td>
      <td></td>
      <td>The value should be a valid email address</td>
    </tr>
    <tr>
      <td>isUrl</td>
      <td>null</td>
      <td></td>
      <td>The value should be a valid url</td>
    </tr>
    <tr>
      <td>isUuid</td>
      <td>null</td>
      <td></td>
      <td>The value should be a valid UUID</td>
    </tr>
    <tr>
      <td>lowercase</td>
      <td>null</td>
      <td></td>
      <td>The value should be written lower case</td>
    </tr>
    <tr>
      <td>uppercase</td>
      <td>null</td>
      <td></td>
      <td>The value should be written upper case</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>integer</td>
      <td>An integer that defines the limit</td>
      <td>The string shuold have at least the provided number of characters</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>integer</td>
      <td>An integer that defines the limit</td>
      <td>The string shuold have up to the provided number of characters</td>
    </tr>
    <tr>
      <td>length</td>
      <td>integer</td>
      <td>An integer that defines the limit</td>
      <td>The string shuold have exactly the provided number of characters</td>
    </tr>
    <tr>
      <td>regex</td>
      <td>Regex</td>
      <td>A valid regex to match. The format must be: <code>/^{your regex}+$/</code></td>
      <td>The value should match the provided regex. Not empty strings allowed as values</td>
    </tr>
    <tr>
      <td rowspan="2">boolean</td>
      <td>isTrue</td>
      <td>null</td>
      <td></td>
      <td>The value should be true</td>
    </tr>
    <tr>
      <td>isFalse</td>
      <td>null</td>
      <td></td>
      <td>The value should be false</td>
    </tr>
    <tr>
      <td rowspan="7">number</td>
      <td>integer</td>
      <td>null</td>
      <td></td>
      <td>The value should be a valid integer</td>
    </tr>
    <tr>
      <td>positive</td>
      <td>null</td>
      <td></td>
      <td>Only admit positive numbers</td>
    </tr>
    <tr>
      <td>negative</td>
      <td>null</td>
      <td></td>
      <td>Only admit negative numbers</td>
    </tr>
    <tr>
      <td>min</td>
      <td>number</td>
      <td>A valid number as limit of the operation</td>
      <td>The value should be greater or equal than the provided minimum</td>
    </tr>
    <tr>
      <td>moreThan</td>
      <td>number</td>
      <td>A valid number as limit of the operation</td>
      <td>The value should be strictly greater than the provided minimum</td>
    </tr>
    <tr>
      <td>max</td>
      <td>number</td>
      <td>A valid number as limit of the operation</td>
      <td>The value should be lower or equal than the provided maximum</td>
    </tr>
    <tr>
      <td>lessThan</td>
      <td>number</td>
      <td>A valid number as limit of the operation</td>
      <td>The value should be strictly lower than the provided maximum</td>
    </tr>
    <tr>
      <td rowspan="2">date</td>
      <td>min</td>
      <td>date</td>
      <td>A date object or a correctly date formated string </td>
      <td>The value should be a date after the provided limit</td>
    </tr>
    <tr>
      <td>max</td>
      <td>date</td>
      <td>A date object or a correctly date formated string </td>
      <td>The value should be a date before the provided limit</td>
    </tr>
    </tbody>
  </table>


## License

MIT © [danny1998cuba](https://github.com/danny1998cuba)
