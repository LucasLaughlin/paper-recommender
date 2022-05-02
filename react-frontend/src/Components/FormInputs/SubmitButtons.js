/*  React and Packages */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI */
import Button  from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// =================================================================================================

const useStyles = makeStyles((theme) => ({
  updateButtons: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

// =================================================================================================

const SubmitButtonsPropTypes = {
  cancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string
};
const SubmitButtonsDefaultProps = {
  confirmText: 'Update'
};

/* Must be wrapped by <Form/> and <Formik/> to work */
const SubmitButtons = ({
  cancel,      // Cancel function
  confirmText  // Text for Confirm Button
}) => {
  const classes = useStyles();

  return (
    <div className={classes.updateButtons}>
      <Button
        variant="contained"
        color="secondary"
        onClick={cancel}
      >
        Cancel
      </Button>

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        {confirmText}
      </Button>
    </div>
  );
};
SubmitButtons.propTypes = SubmitButtonsPropTypes;
SubmitButtons.defaultProps = SubmitButtonsDefaultProps;

export default SubmitButtons;
