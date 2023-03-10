import React from 'react';
import { useField, ErrorMessage, Formik, Form } from 'formik';
import { boolean, number, date, string, object } from 'yup';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var styles = {"error":"_3fyPz","inline":"_3F-ST","options":"_1p3r7","inlineOpt":"_339hQ","columnOpt":"_PfI8c","opt":"_3K3m9"};

var CustomCheckBox = function CustomCheckBox(props) {
  var _useField = useField(props),
    field = _useField[0];
  return /*#__PURE__*/React.createElement("label", {
    className: "label_check " + props.classes
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.inline
  }, /*#__PURE__*/React.createElement("input", _extends({
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

var CustomHeader = function CustomHeader(props) {
  var localStyle = {
    marginBottom: 0
  };
  return /*#__PURE__*/React.createElement("h3", {
    style: localStyle,
    className: "section-header " + props.classes
  }, props.text);
};

var _excluded = ["label", "options"];
var CustomRadioGroup = function CustomRadioGroup(_ref) {
  var label = _ref.label,
    options = _ref.options,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useField = useField(props),
    field = _useField[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "radio-group " + props.classes
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("div", {
    className: styles.options + " " + (props.inlineopts === 'true' ? styles.inlineOpt : styles.columnOpt)
  }, options.map(function (opt, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "" + styles.opt,
      key: opt.value
    }, /*#__PURE__*/React.createElement("input", _extends({}, field, props, {
      type: "radio",
      value: opt.value,
      checked: opt.value === field.value,
      id: "opt_" + opt.value + "_" + index
    })), /*#__PURE__*/React.createElement("label", {
      htmlFor: "opt_" + opt.value + "_" + index
    }, opt.desc));
  }))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error"
  }));
};

var _excluded$1 = ["label", "options"];
var CustomSelect = function CustomSelect(_ref) {
  var label = _ref.label,
    options = _ref.options,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var _useField = useField(props),
    field = _useField[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "select " + props.classes
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.name || props.id
  }, " ", label, " "), /*#__PURE__*/React.createElement("select", _extends({}, field, props, {
    id: props.name
  }), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "--- Select an option ---"), options.map(function (_ref2, index) {
    var desc = _ref2.desc,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement("option", {
      value: value,
      key: "select_option_" + index
    }, desc);
  }))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error"
  }));
};

var CustomTextInput = function CustomTextInput(props) {
  var _useField = useField(props),
    field = _useField[0];
  return /*#__PURE__*/React.createElement("div", {
    className: "input-box " + props.classes
  }, /*#__PURE__*/React.createElement("div", {
    className: props.inline && props.inline === 'true' ? styles.inline : ''
  }, props.label && /*#__PURE__*/React.createElement("label", {
    htmlFor: props.name
  }, props.label), /*#__PURE__*/React.createElement("input", _extends({}, field, props, {
    id: props.name
  }))), /*#__PURE__*/React.createElement(ErrorMessage, {
    name: props.name,
    component: "span",
    className: "error " + styles.error
  }));
};

var booleanValidations = function booleanValidations(validations) {
  var schema = boolean().strict();
  for (var _iterator = _createForOfIteratorHelperLoose(validations), _step; !(_step = _iterator()).done;) {
    var rule = _step.value;
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
var numberValidations = function numberValidations(validations) {
  var schema = number().strict();
  for (var _iterator2 = _createForOfIteratorHelperLoose(validations), _step2; !(_step2 = _iterator2()).done;) {
    var rule = _step2.value;
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
var dateValidations = function dateValidations(validations) {
  var schema = date().strict();
  for (var _iterator3 = _createForOfIteratorHelperLoose(validations), _step3; !(_step3 = _iterator3()).done;) {
    var rule = _step3.value;
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
var stringValidations = function stringValidations(validations) {
  var schema = string().strict();
  for (var _iterator4 = _createForOfIteratorHelperLoose(validations), _step4; !(_step4 = _iterator4()).done;) {
    var rule = _step4.value;
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

var generateValidations = function generateValidations(field) {
  var schema;
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
var getInputs = function getInputs(inputs) {
  var initialValues = {};
  var validationsFields = {};
  for (var _iterator = _createForOfIteratorHelperLoose(inputs), _step; !(_step = _iterator()).done;) {
    var field = _step.value;
    initialValues[field.name] = field.value;
    if (!field.validations) continue;
    var schema = generateValidations(field);
    validationsFields[field.name] = schema;
  }
  return {
    validationSchema: object().shape(_extends({}, validationsFields)),
    initialValues: initialValues
  };
};

var _excluded$2 = ["name", "type", "value"];
var DynamicForm = function DynamicForm(_ref) {
  var formInputs = _ref.formInputs,
    _ref$onSubmit = _ref.onSubmit,
    _onSubmit = _ref$onSubmit === void 0 ? function (values) {
      return console.log(values);
    } : _ref$onSubmit,
    _ref$resetOnSubmit = _ref.resetOnSubmit,
    resetOnSubmit = _ref$resetOnSubmit === void 0 ? true : _ref$resetOnSubmit;
  var inputs = formInputs.filter(function (input) {
    return input.type != 'header' && input.type != 'submit' && input.type != 'reset';
  });
  var _getInputs = getInputs(inputs),
    initialValues = _getInputs.initialValues,
    validationSchema = _getInputs.validationSchema;
  return /*#__PURE__*/React.createElement(Formik, {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, helpers) {
      _onSubmit(values);
      if (resetOnSubmit) helpers.resetForm();
    }
  }, function () {
    return /*#__PURE__*/React.createElement(Form, {
      noValidate: true
    }, formInputs.map(function (_ref2) {
      var name = _ref2.name,
        type = _ref2.type,
        props = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
      switch (type) {
        case 'header':
          return /*#__PURE__*/React.createElement(CustomHeader, {
            text: props.text,
            key: "header_" + props.text.replace(' ', '_').toString().toLowerCase(),
            classes: props["class"]
          });
        case 'select':
          return /*#__PURE__*/React.createElement(CustomSelect, {
            key: name,
            label: props === null || props === void 0 ? void 0 : props.label,
            name: name,
            options: props === null || props === void 0 ? void 0 : props.options,
            classes: props["class"],
            inline: props === null || props === void 0 ? void 0 : props.inline
          });
        case 'radio-group':
          return /*#__PURE__*/React.createElement(CustomRadioGroup, {
            label: props === null || props === void 0 ? void 0 : props.label,
            name: name,
            options: props === null || props === void 0 ? void 0 : props.options,
            key: name,
            classes: props["class"],
            inline: props === null || props === void 0 ? void 0 : props.inline,
            inlineopts: props === null || props === void 0 ? void 0 : props.inlineOpts
          });
        case 'checkbox':
          return /*#__PURE__*/React.createElement(CustomCheckBox, {
            label: props === null || props === void 0 ? void 0 : props.label,
            key: name,
            name: name,
            classes: props["class"]
          });
        default:
          return /*#__PURE__*/React.createElement(CustomTextInput, {
            key: name,
            name: name,
            placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
            inline: props === null || props === void 0 ? void 0 : props.inline,
            label: props === null || props === void 0 ? void 0 : props.label,
            type: type,
            classes: props["class"]
          });
      }
    }));
  });
};

export { DynamicForm };
//# sourceMappingURL=index.modern.js.map
