"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

require("./formikSelect.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FormikSelect = (_ref) => {
  let {
    name,
    label,
    placeholder,
    options,
    value,
    error,
    backspaceRemovesValue,
    status,
    blurInputOnSelect,
    captureMenuScroll,
    closeMenuOnScroll,
    controlShouldRenderValue,
    hasValue,
    id,
    inputValue,
    isClearable,
    isDisabled,
    isFocused,
    isLoading,
    isMulti,
    isSearchable,
    isRtl,
    maxMenuHeight,
    menuIsOpen,
    menuPlacement,
    menuPosition,
    menuShouldBlockScroll,
    noOptionsMessage,
    openMenuOnClick,
    openMenuOnFocus,
    pageSize,
    tabIndex,
    tabSelectsValue,
    touched
  } = _ref;

  const handleChange = value => {
    const {
      onChange,
      name
    } = (void 0).props;
    onChange(name, value);
  };

  const handleBlur = () => {
    const {
      onBlur,
      name
    } = (void 0).props;
    onBlur(name, true);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: touched && error || status ? 'c-select error' : 'c-select'
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: isRtl ? 'c-select__label isRtl' : 'c-slect__label',
    htmlFor: name
  }, label), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    className: "c-select__field",
    classNamePrefix: "c-select",
    options: options,
    value: value,
    onChange: handleChange,
    onBlur: handleBlur,
    error: error,
    components: {
      ClearIndicator: null
    },
    backspaceRemovesValue: backspaceRemovesValue,
    blurInputOnSelect: blurInputOnSelect,
    captureMenuScroll: captureMenuScroll,
    closeMenuOnScroll: closeMenuOnScroll,
    controlShouldRenderValue: controlShouldRenderValue,
    hasValue: hasValue,
    id: id,
    inputValue: inputValue,
    isClearable: isClearable,
    isDisabled: isDisabled,
    isLoading: isLoading,
    isMulti: isMulti,
    isSearchable: isSearchable,
    isRtl: isRtl,
    maxMenuHeight: maxMenuHeight,
    menuIsOpen: menuIsOpen,
    menuPlacement: menuPlacement,
    menuPosition: menuPosition,
    menuShouldBlockScroll: menuShouldBlockScroll,
    noOptionsMessage: noOptionsMessage,
    openMenuOnClick: openMenuOnClick,
    openMenuOnFocus: openMenuOnFocus,
    pageSize: pageSize,
    placeholder: placeholder,
    tabIndex: tabIndex,
    tabSelectsValue: tabSelectsValue,
    touched: touched,
    isFocused: isFocused
  }), (touched && error || status) && /*#__PURE__*/_react.default.createElement("span", {
    className: isRtl ? 'c-select__message isRtl' : 'c-select__message'
  }, error || status));
}; // menuIsOpen no required and no default


FormikSelect.propTypes = {
  options: _propTypes.default.array.isRequired,
  id: _propTypes.default.string.isRequired
};
FormikSelect.defaultProps = {
  name: '',
  label: '',
  status: '',
  error: '',
  value: null,
  backspaceRemovesValue: true,
  blurInputOnSelect: false,
  captureMenuScroll: true,
  closeMenuOnScroll: false,
  closeMenuOnSelect: true,
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  hasValue: false,
  inputValue: '',
  isClearable: true,
  isDisabled: false,
  isFocused: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  maxMenuHeight: 300,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  openMenuOnClick: true,
  openMenuOnFocus: false,
  pageSize: 5,
  placeholder: '',
  tabIndex: '0',
  tabSelectsValue: true,
  touched: false
};
var _default = FormikSelect;
exports.default = _default;