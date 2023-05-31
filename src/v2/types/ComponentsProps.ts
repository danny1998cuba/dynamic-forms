// eslint-disable-next-line no-unused-vars
import { BasicComponentProps } from './BasicComponentProps'

export interface ButtonProps {
  className: string
  text: string
  type: 'button' | 'submit' | 'reset'
}

export interface CheckBoxProps extends BasicComponentProps {}

export interface FilePickerProps extends BasicComponentProps {}

export interface HeaderProps {
  className: string
  text: string
}

export interface RadioGroupProps extends BasicComponentProps {}

export interface SelectProps extends BasicComponentProps {}

export interface TextAreaProps extends BasicComponentProps {}

export interface TextFieldProps extends BasicComponentProps {}
