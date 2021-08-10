"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/_formikCheckBox.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormikCheckBox = (_ref) => {
  let {
    name,
    id,
    label,
    arrayHelpers,
    inline,
    isRtl
  } = _ref;
  const {
    form,
    name: itemsGroupName
  } = arrayHelpers;

  const classNames = () => {
    let classes = 'c-checkBox';
    if (inline) classes += ' isInline';
    if (isRtl) classes += ' isRtl';
    return classes;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames()
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "c-checkBox__field",
    type: "checkbox",
    name: name,
    id: id,
    onClick: () => {
      const items = form.values[itemsGroupName];

      if (items.includes(name)) {
        items.forEach((item, index) => {
          if (item === name) {
            arrayHelpers.remove(index);
          }
        });
      } else {
        arrayHelpers.push(name);
      }
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: isRtl ? 'c-checkBox__label isRtl' : 'c-checkBox__label',
    htmlFor: id
  }, label));
};

FormikCheckBox.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.string.isRequired,
  arrayHelpers: _propTypes.default.object.isRequired
};
FormikCheckBox.defaultProps = {
  label: '',
  inline: false,
  isRtl: false
};
var _default = FormikCheckBox;
exports.default = _default;