/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field

/*  React and Packages */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

/* Material UI */
import TextField  from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

/* Redux */
import { useSelector } from 'react-redux';

// =================================================================================================

const SelectPropTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired
};
const SelectDefaultProps = {
  required: false,
  fullWidth: false
};

const Select = ({
  name,      // Key for redux validation state & formik useFields
  required,  // Is field required?
  fullWidth, // Entire width of parent component?
  options,   // Array of possibleInputs
  label      // Label for the input
}) => {
  const serverMessage = useSelector((state) => state.validation[name]);
  const [field, meta] = useField({ name });
  return (
    <TextField
      id="filled-read-only-input"
      variant="outlined"
      margin="normal"
      select
      label={label}
      type="text"
      name={name}
      required={required}
      fullWidth={fullWidth}
      helperText={meta.touched && (meta.error || serverMessage)}
      error={!!(meta.touched && (meta.error || serverMessage))}
      {...field}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};
Select.defaultProps = SelectDefaultProps;
Select.propTypes = SelectPropTypes;

export default Select;
