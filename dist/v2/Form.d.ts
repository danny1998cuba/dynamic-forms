import React, { PropsWithChildren } from 'react';
import { ComponentProps } from './types';
export declare class FormProps {
    elements: [ComponentProps];
    onSubmit: (values: {}) => void;
    resetOnSubmit: boolean;
}
export declare const Form: (props: PropsWithChildren<FormProps>) => React.JSX.Element;
