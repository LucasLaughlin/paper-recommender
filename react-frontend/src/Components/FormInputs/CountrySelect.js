/* eslint-disable react/jsx-props-no-spreading */ // Formik relies on spreading field

/*  React and Packages */
import React from 'react';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';

/* Material UI */
import TextField  from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

/* Redux */
import { useSelector } from 'react-redux';

/* Utilities */
import { countryToFlag, countries } from '../../utilities/countryCode';

// =================================================================================================

const useStyles = makeStyles(() => ({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
}));

// =================================================================================================

const CountrySelectPropTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool
};
const CountrySelectDefaultProps = {
  required: false,
  fullWidth: false
};

const CountrySelect = ({
  name,      // Key for redux validation state & formik useFields
  required,  // Is field required?
  fullWidth  // Entire width of parent component?
}) => {
  const classes = useStyles();
  const serverMessage = useSelector((state) => state.validation[name]);
  const [field, meta, helpers] = useField({ name });
  const { isSubmitting } = useFormikContext();
  return (
    <Autocomplete
      options={countries}
      classes={{
        option: classes.option
      }}
      disabled={isSubmitting}
      {...field}
      getOptionLabel={(option) => option.label || ''}
      renderOption={(option) => (
        <>
          <span>{countryToFlag(option.code)}</span>
          {option.label}
          {' '}
          (
          {option.code}
          ) +
          {option.phone}
        </>
      )}
      onChange={(index, value) => {
        helpers.setValue(value || '');
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          margin="normal"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password' // disable autocomplete and autofill
          }}
          label="Country"
          type="text"
          required={required}
          fullWidth={fullWidth}
          helperText={meta.touched && (meta.error || serverMessage)}
          error={!!(meta.touched && (meta.error || serverMessage))}
        />
      )}
    />
  );
};
CountrySelect.defaultProps = CountrySelectDefaultProps;
CountrySelect.propTypes = CountrySelectPropTypes;

export default CountrySelect;
