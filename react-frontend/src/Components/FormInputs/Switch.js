/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field
/* eslint-disable no-unused-vars */               // [field, meta, helpers], meta unused

/*  React and Packages */
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Material UI */
import SwitchMui from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// =================================================================================================

const SwitchPropTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  initial: PropTypes.bool
};
const SwitchDefaultProps = {
  color: 'primary',
  onChange: () => { },
  disabled: false,
  initial: false
};
const Switch = ({
  name,     // Key for redux validation state & formik useFields
  label,    // Switch label display
  color,    // Switch color property ['primary', 'secondary', 'tertiary']
  onChange, // Function for capturing Switch event
  disabled, // Greyed out and unavailable for click events
  initial   // How to initialize switch
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
        <SwitchMui
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
Switch.propTypes = SwitchPropTypes;
Switch.defaultProps = SwitchDefaultProps;

export default Switch;
