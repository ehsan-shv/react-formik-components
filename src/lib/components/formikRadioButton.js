import React from 'react'
import PropTypes from 'prop-types'
import './styles/_formikRadioButton.scss'

const FormikRadioButton = ({
  id,
  label,
  value,
  arrayHelpers,
  inline,
  isRtl,
}) => {
  const { form, name: itemsGroupName } = arrayHelpers

  const classNames = () => {
    let classes = 'c-radioButton'
    if (inline) classes += ' inline'
    if (isRtl) classes += ' isRtl'
    return classes
  }

  return (
    <div className={classNames()}>
      <input
        className="c-radioButton__field"
        type="radio"
        value={value}
        name={itemsGroupName}
        id={id}
        checked={form.values[itemsGroupName] === value}
        onChange={(e) =>
          form.setFieldValue(`${itemsGroupName}`, e.target.value)
        }
      />
      <label className="c-radioButton__label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

FormikRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  arrayHelpers: PropTypes.object.isRequired,
}

FormikRadioButton.defaultProps = {
  isRtl: false,
}

export default FormikRadioButton
