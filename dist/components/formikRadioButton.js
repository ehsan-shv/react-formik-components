"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./formikRadioButton.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormikRadioButton = (_ref) => {
  let {
    id,
    label,
    value,
    arrayHelpers,
    inline,
    isRtl
  } = _ref;
  const {
    form,
    name: itemsGroupName
  } = arrayHelpers;

  const classNames = () => {
    let classes = 'c-radioButton';
    if (inline) classes += ' inline';
    if (isRtl) classes += ' isRtl';
    return classes;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames()
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "c-radioButton__field",
    type: "radio",
    value: value,
    name: itemsGroupName,
    id: id,
    checked: form.values[itemsGroupName] === value,
    onChange: e => form.setFieldValue("".concat(itemsGroupName), e.target.value)
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "c-radioButton__label",
    htmlFor: id
  }, label));
};

FormikRadioButton.propTypes = {
  label: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  arrayHelpers: _propTypes.default.object.isRequired
};
FormikRadioButton.defaultProps = {
  isRtl: false
};
var _default = FormikRadioButton;
exports.default = _default;