/* eslint-disable no-unused-vars */
import {
  ButtonProps,
  CheckBoxProps,
  ComponentProps,
  FilePickerProps,
  HeaderProps,
  RadioGroupProps,
  SelectProps,
  TextAreaProps,
  TextFieldProps
} from '../types/ComponentsProps'

const createButton = (props: ButtonProps): ComponentProps => {
  return {
    ...props
  }
}

const createCheckBox = (props: CheckBoxProps): ComponentProps => {
  return {
    ...props
  }
}

const createFilePicker = (props: FilePickerProps): ComponentProps => {
  return {
    ...props
  }
}

const createHeader = (props: HeaderProps): ComponentProps => {
  return {
    ...props
  }
}

const createRadioGroup = (props: RadioGroupProps): ComponentProps => {
  return {
    ...props
  }
}

const createSelect = (props: SelectProps): ComponentProps => {
  return {
    ...props
  }
}

const createTextArea = (props: TextAreaProps): ComponentProps => {
  return {
    ...props
  }
}

const createTextField = (props: TextFieldProps): ComponentProps => {
  if (!props.showLabel && props.placeholder == null) {
    props.placeholder = props.label
  }
  return {
    ...props
  }
}

export {
  createButton,
  createCheckBox,
  createFilePicker,
  createHeader,
  createRadioGroup,
  createSelect,
  createTextArea,
  createTextField
}
