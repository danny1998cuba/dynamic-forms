import React from 'react';
export interface FormProps {
    onSubmit: (values: any[]) => void;
}
export declare const Form: (props: FormProps) => React.JSX.Element;
