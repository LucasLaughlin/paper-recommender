/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field
/* eslint-disable no-unused-vars */               // [field, meta, helpers], meta unused

/* React and Packages */
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

/* Material UI */
import CheckboxMui from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// =================================================================================================

const CheckboxPropTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  initial: PropTypes.bool
};
const CheckboxDefaultProps = {
  color: 'primary',
  onChange: () => { },
  disabled: false,
  initial: false
};

const Checkbox = ({
  name,     // Key for redux validation state & formik useFields
  label,    // Checkbox label display
  color,    // Checkbox color property {primary, secondary, etc}
  onChange, // Function for capturing checkbox event
  disabled, // Greyed out and unavailable for click events
  initial   // How to initialize checkbox
}) => {
  const [checked, setChecked] = useState(initial);
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });
  const { setValue } = helpers;
  useEffect(() => {
    setValue(checked);
    onChange(checked);
  }, [checked]);
  return (
    <FormControlLabel
      control={(
        <CheckboxMui
          {...field}
          name={name}
          color={color}
          onChange={() => setChecked(!checked)}
          checked={checked}
          disabled={disabled}
        />
      )}
      label={label}
    />
  );
};
Checkbox.propTypes = CheckboxPropTypes;
Checkbox.defaultProps = CheckboxDefaultProps;

export default Checkbox;
