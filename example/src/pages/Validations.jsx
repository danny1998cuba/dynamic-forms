import React from 'react'
import Highlight from 'react-highlight'
import { Example, JsonDirective } from '../components'

export const Validations = () => {
  const object_format = `{
    type: 'required'
    value?: string
    message: string        
}`

  const example_json = `[
    {
      type: 'text',
      name: 'input1',
      typeValue: 'string',
      label: 'Length',
      placeholder: 'Write 10 characters',
      validations: [
        {
          type: 'length',
          value: 10,
          message: 'The string must have 10 characters'
        }
      ]
    },
    {
      type: 'text',
      name: 'input2',
      label: 'Required',
      placeholder: 'Required field',
      validations: [
        {
          type: 'required',
          message: 'This field is required'
        }
      ]
    },
    {
      type: 'text',
      name: 'input3',
      typeValue: 'string',
      label: 'Email',
      placeholder: 'Write an email address',
      validations: [
        {
          type: 'isEmail',
          message: 'Write a correct email address'
        }
      ]
    },
    {
      type: 'number',
      name: 'input4',
      typeValue: 'number',
      label: 'Positive and required',
      placeholder: 'Positive number',
      validations: [
        {
          type: 'required',
          message: 'The number is required'
        },
        {
          type: 'positive',
          message: 'The number must be positive'
        }
      ]
    },
    {
        type: 'submit',
        name: 'btn',
        value: 'Submit'
    }
]`

  const example = [
    {
      type: 'text',
      name: 'input1',
      typeValue: 'string',
      label: 'Length',
      placeholder: 'Write 10 characters',
      validations: [
        {
          type: 'length',
          value: 10,
          message: 'The string must have 10 characters'
        }
      ]
    },
    {
      type: 'text',
      name: 'input2',
      label: 'Required',
      placeholder: 'Required field',
      validations: [
        {
          type: 'required',
          message: 'This field is required'
        }
      ]
    },
    {
      type: 'text',
      name: 'input3',
      typeValue: 'string',
      label: 'Email',
      placeholder: 'Write an email address',
      validations: [
        {
          type: 'isEmail',
          message: 'Write a correct email address'
        }
      ]
    },
    {
      type: 'number',
      name: 'input4',
      typeValue: 'number',
      label: 'Positive and required',
      placeholder: 'Positive number',
      validations: [
        {
          type: 'required',
          message: 'The number is required'
        },
        {
          type: 'positive',
          message: 'The number must be positive'
        }
      ]
    },
    {
      type: 'submit',
      name: 'btn',
      value: 'Submit'
    }
  ]

  return (
    <>
      <section>
        <p>
          Each component counts with an optional <code className="mx-2">validations</code> field that
          accepts an array of objects with the following format:
        </p>

        <Highlight className='javascript w-75'>{object_format}</Highlight>


        <p>
          The parameters of this field are closely realted with the <code className="mx-2">typeValue</code>
          field of the component. Depending on the selected data type for the component, there will be a sort
          of options and value's combinations for the attributes of each validator object.
        </p>
        <p>
          You can add as many validators as you like to each component but they must all respond to the same
          <code className="ms-2">typeValue</code>. Otherwise, the validator will be ignored. The validators must be
          added with a priority order.
        </p>
        <p>
          The next table summarizes the list of supported validators by <code className="ms-2">typeValue</code>.
          In case that the <code className="mx-2">typeValue</code> attribute is not set, it'll be managed as a string.
        </p>

        <div class="table-responsive w-75" id='validators'>
          <table className='table border-secondary'>
            <caption className='caption-top'><b><u>List of validators</u></b></caption>
            <thead className='text-center'>
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
                <td>*</td>
                <td>required</td>
                <td>not required</td>
                <td></td>
                <td>The value is required</td>
              </tr>
              <tr>
                <td rowspan="9">string</td>
                <td>isEmail</td>
                <td>not required</td>
                <td></td>
                <td>The value should be a valid email address</td>
              </tr>
              <tr>
                <td>isUrl</td>
                <td>not required</td>
                <td></td>
                <td>The value should be a valid url</td>
              </tr>
              <tr>
                <td>isUuid</td>
                <td>not required</td>
                <td></td>
                <td>The value should be a valid UUID</td>
              </tr>
              <tr>
                <td>lowercase</td>
                <td>not required</td>
                <td></td>
                <td>The value should be written lower case</td>
              </tr>
              <tr>
                <td>uppercase</td>
                <td>not required</td>
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
                <td>A valid regex to match. The format must be: <code>/^&#123;your regex+&#125;$/</code></td>
                <td>The value should match the provided regex. Not empty strings allowed as values</td>
              </tr>
              <tr>
                <td rowspan="2">boolean</td>
                <td>isTrue</td>
                <td>not required</td>
                <td></td>
                <td>The value should be true</td>
              </tr>
              <tr>
                <td>isFalse</td>
                <td>not required</td>
                <td></td>
                <td>The value should be false</td>
              </tr>
              <tr>
                <td rowspan="7">number</td>
                <td>integer</td>
                <td>not required</td>
                <td></td>
                <td>The value should be a valid integer</td>
              </tr>
              <tr>
                <td>positive</td>
                <td>not required</td>
                <td></td>
                <td>Only admit positive numbers</td>
              </tr>
              <tr>
                <td>negative</td>
                <td>not required</td>
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
        </div>

        <p className='mt-5'>
          The validation process takes place by first time after the input component has been touched and lost
          the focus. If any validator fails, an error message will be displayed in a <code className="mx-2">span</code>
          tag with the <code className="mx-2">className</code> <em>error</em>. In case that several validators of the
          same component fail, the error messages will be displayed depending on the defined priority order.
        </p>

      </section>

      <section id="validations-example">
        <h2>Validations example</h2>

        <p>
          The next example shows a basic use of some validators through a simple form.
        </p>

        <JsonDirective json_string={example_json} />

        <Example formInputs={example} />
      </section>
    </>
  )
}
