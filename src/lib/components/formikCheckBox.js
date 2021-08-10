import React from 'react'
import PropTypes from 'prop-types'

const FormikCheckBox = ({ name, id, label, arrayHelpers, inline, isRtl }) => {
  const { form, name: itemsGroupName } = arrayHelpers

  const classNames = () => {
    let classes = 'c-checkBox'
    if (inline) classes += ' isInline'
    if (isRtl) classes += ' isRtl'
    return classes
  }
  return (
    <div className={classNames()}>
      <input
        className="c-checkBox__field"
        type="checkbox"
        name={name}
        id={id}
        onClick={() => {
          const items = form.values[itemsGroupName]
          if (items.includes(name)) {
            items.forEach((item, index) => {
              if (item === name) {
                arrayHelpers.remove(index)
              }
            })
          } else {
            arrayHelpers.push(name)
          }
        }}
      />
      <label
        className={isRtl ? 'c-checkBox__label isRtl' : 'c-checkBox__label'}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

FormikCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  arrayHelpers: PropTypes.object.isRequired,
}

FormikCheckBox.defaultProps = {
  label: '',
  inline: false,
  isRtl: false,
}

export default FormikCheckBox
