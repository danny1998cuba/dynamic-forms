/// <reference types="react" />
import { ValidationRule } from './Validation';
export interface ComponentProps {
}
export interface BasicComponentProps extends ComponentProps {
    label: string;
    name: string;
    value: any;
    className: string;
    typeValue: 'string' | 'boolean' | 'number' | 'date';
    validations: ValidationRule[];
}
export interface ButtonProps extends ComponentProps {
    className: string;
    text: string;
    type: 'submit' | 'reset';
}
export interface ActionButtonProps extends ComponentProps {
    className: string;
    text: string;
    onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}
export interface CheckBoxProps extends BasicComponentProps {
    inputClass?: string;
    labelClass?: string;
}
export interface FilePickerProps extends BasicComponentProps {
}
export interface HeaderProps extends ComponentProps {
    className: string;
    text: string;
}
export interface RadioGroupProps extends BasicComponentProps {
    inline: boolean;
    inlineopts: boolean;
    options: [{
        value: string;
        description: string;
    }];
    inputClass?: string;
    mainLabelClass?: string;
    optionLabelsClass?: string;
}
export interface SelectProps extends BasicComponentProps {
    inline: boolean;
    options: [{
        value: string;
        description: string;
    }];
    inputClass?: string;
    labelClass?: string;
}
export interface TextAreaProps extends BasicComponentProps {
    placeholder?: string;
    rows?: number;
    inputClass?: string;
    labelClass?: string;
}
export interface TextFieldProps extends BasicComponentProps {
    showLabel: boolean;
    type: 'color' | 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url';
    placeholder?: string;
    inline: boolean;
    inputClass?: string;
    labelClass?: string;
}
