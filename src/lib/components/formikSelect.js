import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import './styles/formikSelect.scss'

const FormikSelect = ({
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
  touched,
}) => {
  const handleChange = (value) => {
    const { onChange, name } = this.props
    onChange(name, value)
  }

  const handleBlur = () => {
    const { onBlur, name } = this.props
    onBlur(name, true)
  }

  return (
    <div
      className={(touched && error) || status ? 'c-select error' : 'c-select'}
    >
      <span
        className={isRtl ? 'c-select__label isRtl' : 'c-slect__label'}
        htmlFor={name}
      >
        {label}
      </span>
      <Select
        className="c-select__field"
        classNamePrefix="c-select"
        options={options}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
        components={{ ClearIndicator: null }}
        backspaceRemovesValue={backspaceRemovesValue}
        blurInputOnSelect={blurInputOnSelect}
        captureMenuScroll={captureMenuScroll}
        closeMenuOnScroll={closeMenuOnScroll}
        controlShouldRenderValue={controlShouldRenderValue}
        hasValue={hasValue}
        id={id}
        inputValue={inputValue}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isRtl={isRtl}
        maxMenuHeight={maxMenuHeight}
        menuIsOpen={menuIsOpen}
        menuPlacement={menuPlacement}
        menuPosition={menuPosition}
        menuShouldBlockScroll={menuShouldBlockScroll}
        noOptionsMessage={noOptionsMessage}
        openMenuOnClick={openMenuOnClick}
        openMenuOnFocus={openMenuOnFocus}
        pageSize={pageSize}
        placeholder={placeholder}
        tabIndex={tabIndex}
        tabSelectsValue={tabSelectsValue}
        touched={touched}
        isFocused={isFocused}
      />

      {((touched && error) || status) && (
        <span
          className={isRtl ? 'c-select__message isRtl' : 'c-select__message'}
        >
          {error || status}
        </span>
      )}
    </div>
  )
}

// menuIsOpen no required and no default

FormikSelect.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
}

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
  touched: false,
}

export default FormikSelect
