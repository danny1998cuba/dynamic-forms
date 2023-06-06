import * as Yup from 'yup';
import { ValidationRule } from '../types';
export declare const booleanValidations: (validations: ValidationRule[]) => Yup.BooleanSchema<boolean | undefined, Yup.AnyObject, "", "">;
export declare const numberValidations: (validations: ValidationRule[]) => Yup.NumberSchema<number | undefined, Yup.AnyObject, undefined, "">;
export declare const dateValidations: (validations: ValidationRule[]) => Yup.DateSchema<Date | undefined, Yup.AnyObject, undefined, "">;
export declare const stringValidations: (validations: ValidationRule[]) => Yup.StringSchema<string | undefined, Yup.AnyObject, undefined, "">;
