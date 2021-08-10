"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/_formikInput.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const FormikInput = (_ref) => {
  let {
    field,
    form,
    type,
    label,
    isRtl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["field", "form", "type", "label", "isRtl"]);

  const {
    name
  } = field;

  const renderField = () => {
    if (type === 'textarea') {
      return /*#__PURE__*/_react.default.createElement("textarea", _extends({
        className: "c-input__field error",
        id: name
      }, field, props));
    }

    return /*#__PURE__*/_react.default.createElement("input", _extends({
      className: "c-input__field error",
      type: type,
      id: name
    }, field, props));
  };

  const classNames = () => {
    let classes = 'c-input';
    if (form.errors[name] && form.touched[name] || form.status[name]) classes += ' error';
    if (isRtl) classes += ' isRtl';
    return classes;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames()
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "c-input__label",
    htmlFor: name
  }, label), renderField(), (form.touched[name] || form.status[name]) && /*#__PURE__*/_react.default.createElement("span", {
    className: "c-input__message"
  }, form.errors[name] || form.status[name]));
};

FormikInput.propTypes = {
  type: _propTypes.default.oneOf(['textarea', 'number', 'password', 'text'])
};
FormikInput.defaultProps = {
  label: '',
  isRtl: false
};
var _default = FormikInput;
exports.default = _default;