import React from 'react'
import PropTypes from 'prop-types'

const FormikInput = ({ field, form, type, label, isRtl, ...props }) => {
  const { name } = field

  const renderField = () => {
    if (type === 'textarea') {
      return (
        <textarea
          className="c-input__field error"
          id={name}
          {...field}
          {...props}
        />
      )
    }
    return (
      <input
        className="c-input__field error"
        type={type}
        id={name}
        {...field}
        {...props}
      />
    )
  }

  const classNames = () => {
    let classes = 'c-input'
    if ((form.errors[name] && form.touched[name]) || form.status[name])
      classes += ' error'
    if (isRtl) classes += ' isRtl'
    return classes
  }

  return (
    <div className={classNames()}>
      <label className="c-input__label" htmlFor={name}>
        {label}
      </label>
      {renderField()}
      {(form.touched[name] || form.status[name]) && (
        <span className="c-input__message">
          {form.errors[name] || form.status[name]}
        </span>
      )}
    </div>
  )
}

FormikInput.propTypes = {
  type: PropTypes.oneOf(['textarea', 'number', 'password', 'text']),
}

FormikInput.defaultProps = {
  label: '',
  isRtl: false,
}

export default FormikInput
