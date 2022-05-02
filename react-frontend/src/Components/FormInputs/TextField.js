/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field

/*  React and Packages */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Material UI */
import TextFieldMui from '@material-ui/core/TextField';

/* Redux */
import { useSelector } from 'react-redux';
import store from '../../store';

// =================================================================================================

const TextFieldPropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  autoFocus: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.oneOf(['primary', 'secondary']),
  autoComplete: PropTypes.string,
  handleBlur: PropTypes.func,
  className: PropTypes.object
};
const TextFieldDefaultProps = {
  required: false,
  disabled: false,
  fullWidth: false,
  multiline: false,
  rows: 1,
  autoFocus: false,
  inputProps: {},
  color: 'primary',
  autoComplete: 'on',
  handleBlur: () => {},
  className: {}
};

const TextField = ({
  name,         // Key for redux validation state & formik useFields
  label,        // Input label display
  type,         // Textfield input type
  required,     // Is field optional?
  fullWidth,    // Entire width of parent component?
  multiline,    // Should input have multiple lines?
  rows,         // Num rows for multiline
  autoFocus,    // Autofocus on mount?
  inputProps,   // Stylize input text
  color,        // Primary or secondary color scheme
  disabled,     // Greyed out or not
  autoComplete, // Should TextField autocomplete?
  handleBlur,   // Optional Function to trigger on bluring TextField
  className     // Optional ClassName to submit custom styling
}) => {
  const serverMessage = useSelector((state) => state.validation[name]);
  const [field, meta] = useField({
    name, label, type
  });

  return (
    <TextFieldMui
      variant="outlined"
      margin="dense"
      color={color}
      name={name}
      label={label}
      type={type}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      multiline={multiline}
      autoFocus={autoFocus}
      InputProps={inputProps}
      className={className}
      rows={rows}
      helperText={meta.touched && (meta.error || serverMessage)}
      error={!!(meta.touched && (meta.error || serverMessage))}
      autoComplete={autoComplete}
      onFocus={() => {
        store.dispatch({
          type: 'VAL_NULL'
        });
      }}
      {..._.omit(field, ['onBlur'])} // Omit onBlur for custom inplementations
      onBlur={handleBlur} // Custom implementation
    />
  );
};
TextField.propTypes = TextFieldPropTypes;
TextField.defaultProps = TextFieldDefaultProps;

export default TextField;
