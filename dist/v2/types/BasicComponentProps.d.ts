import { ValidationRule } from './Validation';
export interface BasicComponentProps {
    name: string;
    type: string;
    value: any;
    className: string;
    typeValue?: 'string' | 'boolean' | 'number';
    validations: ValidationRule[];
}
