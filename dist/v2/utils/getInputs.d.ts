import * as Yup from 'yup';
import { BasicComponentProps } from '../types';
export declare const getInputs: (inputs: BasicComponentProps[]) => {
    validationSchema: Yup.ObjectSchema<{
        [x: string]: any;
    }, Yup.AnyObject, {
        [x: string]: any;
    }, "">;
    initialValues: {
        [key: string]: any;
    };
};
