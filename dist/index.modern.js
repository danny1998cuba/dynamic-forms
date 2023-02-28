import React from 'react';
import { useField, ErrorMessage, Formik, Form } from 'formik';
import { boolean, number, date, string, object } from 'yup';

var styles = {"error":"_styles-module__error__3fyPz","inline":"_styles-module__inline__3F-ST","options":"_styles-module__options__1p3r7","inlineOpt":"_styles-module__inlineOpt__339hQ","columnOpt":"_styles-module__columnOpt__PfI8c","opt":"_styles-module__opt__3K3m9"};

const CustomCheckBox = props => {
  const [field] = useField(props);
  return /*#__PURE__*/React.createElement("label", {
    className: `label_check ${props.classes}`
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.inline
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    type: "checkbox"
  }, field, props, {
    id: props.name
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: props.name,
    style: {
      marginLeft: '10px'
    }
  }, props.label)), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error"
  }));
};

const CustomHeader = props => {
  let localStyle = {
    marginBottom: 0
  };
  return /*#__PURE__*/React.createElement("h3", {
    style: localStyle,
    className: `section-header ${props.classes}`
  }, props.text);
};

const CustomRadioGroup = ({
  label,
  options,
  ...props
}) => {
  const [field] = useField(props);
  return /*#__PURE__*/React.createElement("div", {
    className: `radio-group ${props.classes}`
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("div", {
    className: `${styles.options} ${props.inlineopts === 'true' ? styles.inlineOpt : styles.columnOpt}`
  }, options.map((opt, index) => /*#__PURE__*/React.createElement("div", {
    className: `${styles.opt}`,
    key: opt.value
  }, /*#__PURE__*/React.createElement("input", Object.assign({}, field, props, {
    type: "radio",
    value: opt.value,
    checked: opt.value === field.value,
    id: `opt_${opt.value}_${index}`
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: `opt_${opt.value}_${index}`
  }, opt.desc))))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error"
  }));
};

const CustomSelect = ({
  label,
  options,
  ...props
}) => {
  const [field] = useField(props);
  return /*#__PURE__*/React.createElement("div", {
    className: `select ${props.classes}`
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.name || props.id
  }, " ", label, " "), /*#__PURE__*/React.createElement("select", Object.assign({}, field, props, {
    id: props.name
  }), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "--- Select an option ---"), options.map(({
    desc,
    value
  }, index) => /*#__PURE__*/React.createElement("option", {
    value: value,
    key: `select_option_${index}`
  }, desc)))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error"
  }));
};

const CustomTextInput = props => {
  const [field] = useField(props);
  return /*#__PURE__*/React.createElement("div", {
    className: `input-box ${props.classes}`
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: props.name
  }, props.label), /*#__PURE__*/React.createElement("input", Object.assign({}, field, props, {
    id: props.name
  }))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: `error ${styles.error}`
  }));
};

const booleanValidations = validations => {
  let schema = boolean().strict();
  for (const rule of validations) {
    switch (rule.type) {
      case 'isTrue':
        schema = schema.isTrue(rule.message);
        break;
      case 'isFalse':
        schema = schema.isFalse(rule.message);
        break;
      case 'required':
        schema = schema.required(rule.message);
        break;
    }
  }
  return schema;
};
const numberValidations = validations => {
  let schema = number().strict();
  for (const rule of validations) {
    switch (rule.type) {
      case 'min':
        schema = schema.min(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'max':
        schema = schema.max(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'lessThan':
        schema = schema.lessThan(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'moreThan':
        schema = schema.moreThan(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'positive':
        schema = schema.positive(rule.message);
        break;
      case 'negative':
        schema = schema.negative(rule.message);
        break;
      case 'integer':
        schema = schema.integer(rule.message);
        break;
      case 'required':
        schema = schema.required(rule.message);
        break;
    }
  }
  return schema;
};
const dateValidations = validations => {
  let schema = date().strict();
  for (const rule of validations) {
    switch (rule.type) {
      case 'min':
        schema = schema.min(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'max':
        schema = schema.max(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'required':
        schema = schema.required(rule.message);
        break;
    }
  }
  return schema;
};
const stringValidations = validations => {
  let schema = string().strict();
  for (const rule of validations) {
    switch (rule.type) {
      case 'isEmail':
        schema = schema.email(rule.message);
        break;
      case 'isUrl':
        schema = schema.url(rule.message);
        break;
      case 'isUuid':
        schema = schema.uuid(rule.message);
        break;
      case 'lowercase':
        schema = schema.lowercase(rule.message);
        break;
      case 'uppercase':
        schema = schema.uppercase(rule.message);
        break;
      case 'minLength':
        schema = schema.min(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'maxLength':
        schema = schema.max(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'length':
        schema = schema.length(rule === null || rule === void 0 ? void 0 : rule.value, rule.message);
        break;
      case 'regex':
        schema = schema.matches(rule === null || rule === void 0 ? void 0 : rule.value, {
          excludeEmptyString: true,
          message: rule.message
        });
        break;
      case 'required':
        schema = schema.required(rule.message);
        break;
    }
  }
  return schema;
};

const generateValidations = field => {
  let schema;
  switch (field.typeValue) {
    case 'boolean':
      return schema = booleanValidations(field.validations);
    case 'number':
      return schema = numberValidations(field.validations);
    case 'date':
      return schema = dateValidations(field.validations);
    default:
      return schema = stringValidations(field.validations);
  }
};
const getInputs = inputs => {
  let initialValues = {};
  let validationsFields = {};
  for (const field of inputs) {
    initialValues[field.name] = field.value;
    if (!field.validations) continue;
    const schema = generateValidations(field);
    validationsFields[field.name] = schema;
  }
  return {
    validationSchema: object().shape({
      ...validationsFields
    }),
    initialValues
  };
};

const DynamicForm = ({
  formInputs,
  onSubmit: _onSubmit = values => console.log(values),
  resetOnSubmit: _resetOnSubmit = true
}) => {
  let inputs = formInputs.filter(input => input.type != 'header' && input.type != 'submit' && input.type != 'reset');
  const {
    initialValues,
    validationSchema
  } = getInputs(inputs);
  return /*#__PURE__*/React.createElement(Formik, {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      _onSubmit(values);
      if (_resetOnSubmit) helpers.resetForm();
    }
  }, () => /*#__PURE__*/React.createElement(Form, {
    noValidate: true
  }, formInputs.map(({
    name,
    type,
    value,
    ...props
  }) => {
    switch (type) {
      case 'header':
        return /*#__PURE__*/React.createElement(CustomHeader, {
          text: props.text,
          key: `header_${props.text.replace(' ', '_').toString().toLowerCase()}`,
          classes: props.class
        });
      case 'select':
        return /*#__PURE__*/React.createElement(CustomSelect, {
          key: name,
          label: props === null || props === void 0 ? void 0 : props.label,
          name: name,
          options: props === null || props === void 0 ? void 0 : props.options,
          classes: props.class,
          inline: props === null || props === void 0 ? void 0 : props.inline
        });
      case 'radio-group':
        return /*#__PURE__*/React.createElement(CustomRadioGroup, {
          label: props === null || props === void 0 ? void 0 : props.label,
          name: name,
          options: props === null || props === void 0 ? void 0 : props.options,
          key: name,
          classes: props.class,
          inline: props === null || props === void 0 ? void 0 : props.inline,
          inlineopts: props === null || props === void 0 ? void 0 : props.inlineOpts
        });
      case 'checkbox':
        return /*#__PURE__*/React.createElement(CustomCheckBox, {
          label: props === null || props === void 0 ? void 0 : props.label,
          key: name,
          name: name,
          classes: props.class
        });
      default:
        return /*#__PURE__*/React.createElement(CustomTextInput, {
          key: name,
          name: name,
          placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
          inline: props === null || props === void 0 ? void 0 : props.inline,
          label: props === null || props === void 0 ? void 0 : props.label,
          type: type,
          classes: props.class
        });
    }
  })));
};

export { DynamicForm };
//# sourceMappingURL=index.modern.js.map
