/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field

/*  React and Packages */
import React from 'react';
import { useField, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Material UI */
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

/* Redux */
import { useSelector } from 'react-redux';
import store from '../../store';

// =================================================================================================

const DynMultiTextFieldPropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  autoFocus: PropTypes.bool,
  inputProps: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.oneOf(['primary', 'secondary'])
};
const DynMultiTextFieldDefaultProps = {
  required: false,
  disabled: false,
  fullWidth: false,
  autoFocus: false,
  inputProps: {},
  color: 'primary'
};

const DynMultiTextField = ({
  name,       // Key for redux validation state & formik useFields
  label,      // Input label display
  type,       // Textfield input type
  required,   // Is field required?
  fullWidth,  // Entire width of parent component?
  autoFocus,  // Autofocus on mount?
  inputProps, // Stylize input text
  color,      // Primary or secondary color scheme
  disabled    // Greyed out or not
}) => {
  const serverMessage = useSelector((state) => state.validation[name]);
  const [field, meta] = useField({ name, label, type });
  const { value } = meta;
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div>
          {value && value.length > 0 ? (
            value.map((val, index) => (
              <div key={index}>
                <Grid container direction="row">
                  <Box flexGrow={1}>
                    <TextField
                      variant="outlined"
                      margin="dense"
                      color={color}
                      name={`${name}.${index}`}
                      label={label}
                      type={type}
                      required={required}
                      disabled={disabled}
                      fullWidth={fullWidth}
                      autoFocus={autoFocus}
                      InputProps={inputProps}
                      helperText={
                        meta.touched && !!meta.error && (meta.error[index] || serverMessage)
                      }
                      error={!!(meta.touched && meta.error && (meta.error[index] || serverMessage))}
                      onFocus={() => {
                        store.dispatch({
                          type: 'VAL_NULL'
                        });
                      }}
                      {..._.omit(field, ['value', 'onChange'])}
                      value={val}
                      onChange={(e) => arrayHelpers.replace(index, e.target.value)}
                    />
                  </Box>
                  <Grid item>
                    <Tooltip title={`Remove ${label}`}>
                      <IconButton onClick={() => arrayHelpers.remove(index)}>
                        <RemoveIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={`Add another ${label}`}>
                      <IconButton onClick={() => arrayHelpers.insert(index + 1, '')}>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </div>
            ))
          ) : (
            <Tooltip title={`Add another ${label}`}>
              <IconButton onClick={() => arrayHelpers.push('')}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      )}
    />
  );
};
DynMultiTextField.propTypes = DynMultiTextFieldPropTypes;
DynMultiTextField.defaultProps = DynMultiTextFieldDefaultProps;

export default DynMultiTextField;
