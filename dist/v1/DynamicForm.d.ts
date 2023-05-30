export function DynamicForm({ formInputs, onSubmit, resetOnSubmit }: {
    formInputs: any;
    onSubmit?: ((values: any) => void) | undefined;
    resetOnSubmit?: boolean | undefined;
}): React.JSX.Element;
import React from "react";
